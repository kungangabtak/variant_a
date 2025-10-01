#!/usr/bin/env python3
"""
Enhanced Evanston ChowBus scraper - extracts from img tags and scripts
"""

import requests
from bs4 import BeautifulSoup
import re
import os
import urllib.parse
from urllib.request import urlretrieve
import time
import json

def create_directories():
    """Create directory structure for Evanston menu images"""
    base_dir = "chowbus_menu_evanston"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
    return base_dir

def extract_menu_data_from_scripts(soup):
    """Extract structured menu data from script tags"""
    menu_items = []
    
    scripts = soup.find_all('script')
    for script in scripts:
        if script.string and 'image_url' in script.string and 'name' in script.string:
            # This looks like menu data - extract JSON-like structures
            content = script.string
            
            # Look for item data patterns
            item_patterns = [
                r'\{"id":"(\d+)","name":"([^"]+)","menu_price":"([^"]+)","price":"([^"]+)"[^}]*"image_url":"([^"]+)"[^}]*"description":"([^"]*)"[^}]*\}',
                r'"name":"([^"]+)"[^}]*"menu_price":"([^"]+)"[^}]*"image_url":"([^"]+)"[^}]*"description":"([^"]*)"'
            ]
            
            for pattern in item_patterns:
                matches = re.findall(pattern, content)
                for match in matches:
                    if len(match) >= 4:  # Ensure we have enough data
                        if len(match) == 6:  # Full match with ID
                            item_id, name, menu_price, price, image_url, description = match
                        else:  # Simplified match
                            name, menu_price, image_url, description = match[:4]
                            item_id = str(abs(hash(name)) % 10000)
                        
                        menu_items.append({
                            'id': item_id,
                            'name': name,
                            'price': menu_price,
                            'description': description,
                            'image_url': image_url
                        })
    
    # Remove duplicates based on name
    seen_names = set()
    unique_items = []
    for item in menu_items:
        if item['name'] not in seen_names:
            seen_names.add(item['name'])
            unique_items.append(item)
    
    return unique_items

def scrape_evanston_chowbus():
    """Scrape the Evanston ChowBus page for images and menu data"""
    url = "https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
    
    print(f"🍽️  Scraping Evanston ChowBus page: {url}")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        print(f"✅ Successfully fetched page (status: {response.status_code})")
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Method 1: Extract from img tags
        img_urls = []
        img_tags = soup.find_all('img')
        print(f"🖼️  Found {len(img_tags)} img tags")
        
        for img in img_tags:
            src = img.get('src')
            if src and 'chowbus.com' in src and 'image_proxy' in src:
                img_urls.append({
                    'url': src,
                    'alt': img.get('alt', ''),
                    'name': img.get('alt', '').split('...')[0] if img.get('alt') else ''
                })
        
        # Method 2: Extract from script content (additional images)
        scripts = soup.find_all('script')
        script_urls = []
        
        for script in scripts:
            if script.string and 'api.chowbus.com' in script.string and 'image_proxy' in script.string:
                # Find all ChowBus image URLs in the script
                pattern = r'https://api\.chowbus\.com/compendium/api/v1/image_proxy/blobs/[^"\']+' 
                matches = re.findall(pattern, script.string)
                for match in matches:
                    script_urls.append({
                        'url': match,
                        'alt': '',
                        'name': ''
                    })
        
        # Combine and deduplicate
        all_urls = img_urls + script_urls
        seen_urls = set()
        unique_urls = []
        
        for item in all_urls:
            if item['url'] not in seen_urls:
                seen_urls.add(item['url'])
                unique_urls.append(item)
        
        print(f"📊 Total unique image URLs found: {len(unique_urls)}")
        print(f"   From img tags: {len(img_urls)}")
        print(f"   From scripts: {len(script_urls)}")
        
        # Extract menu data
        menu_data = extract_menu_data_from_scripts(soup)
        print(f"📋 Extracted menu items: {len(menu_data)}")
        
        return unique_urls, menu_data, soup
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching page: {e}")
        return [], [], None
    except Exception as e:
        print(f"❌ Error parsing page: {e}")
        return [], [], None

def extract_filename_from_item(item):
    """Extract filename from image item (includes alt text and URL)"""
    try:
        # Prefer alt text for filename if available
        if item['name'] and item['name'].strip():
            filename = item['name'].strip()
            # Clean up filename
            filename = re.sub(r'[^\w\s\-_\.]', '', filename)
            filename = filename.replace(' ', '_').lower()
            if not filename.endswith('.jpg'):
                filename += '.jpg'
            return filename
        
        # Fall back to URL-based extraction
        url = item['url']
        parsed = urllib.parse.urlparse(url)
        
        # Try to extract from blob ID
        if 'blobs/' in url:
            blob_part = url.split('blobs/')[-1][:20]  # Take first 20 chars of blob ID
            return f"menu_item_{blob_part}.jpg"
        
        # Generate from URL hash
        return f"image_{abs(hash(url)) % 10000}.jpg"
    
    except Exception as e:
        print(f"⚠️  Error extracting filename: {e}")
        return f"image_{abs(hash(item['url'])) % 10000}.jpg"

def download_images(image_items, base_dir):
    """Download all images to the base directory"""
    print(f"\n📥 Starting download of {len(image_items)} images...")
    
    successful_downloads = 0
    failed_downloads = 0
    
    for i, item in enumerate(image_items, 1):
        try:
            filename = extract_filename_from_item(item)
            filepath = os.path.join(base_dir, filename)
            
            print(f"[{i}/{len(image_items)}] Downloading: {filename}")
            if item['name']:
                print(f"    Item: {item['name'][:50]}...")
            
            # Add headers for image requests
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Referer': 'https://pos.chowbus.com/'
            }
            
            img_response = requests.get(item['url'], headers=headers, timeout=30)
            img_response.raise_for_status()
            
            with open(filepath, 'wb') as f:
                f.write(img_response.content)
            
            successful_downloads += 1
            
            # Small delay to be respectful
            time.sleep(0.3)
            
        except requests.exceptions.RequestException as e:
            print(f"  ❌ Failed to download {item['url']}: {e}")
            failed_downloads += 1
        except Exception as e:
            print(f"  ❌ Error saving {filename}: {e}")
            failed_downloads += 1
    
    print(f"\n📊 Download Summary:")
    print(f"  ✅ Successful: {successful_downloads}")
    print(f"  ❌ Failed: {failed_downloads}")
    print(f"  📁 Saved to: {base_dir}/")
    
    return successful_downloads

def save_menu_data(menu_data, filename='evanston_menu_data.json'):
    """Save extracted menu data to JSON file"""
    if menu_data:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(menu_data, f, indent=2, ensure_ascii=False)
        print(f"💾 Saved {len(menu_data)} menu items to {filename}")

def main():
    print("🍽️  Enhanced Evanston ChowBus Menu Scraper")
    print("=" * 50)
    
    # Create directory structure
    base_dir = create_directories()
    print(f"📁 Created directory: {base_dir}")
    
    # Scrape the page
    image_items, menu_data, soup = scrape_evanston_chowbus()
    
    if not image_items:
        print("❌ No images found. Exiting.")
        return
    
    # Save menu data
    save_menu_data(menu_data)
    
    # Download images
    download_count = download_images(image_items, base_dir)
    
    if download_count > 0:
        print(f"\n✅ Successfully scraped Evanston menu!")
        print(f"   📊 Downloaded {download_count} images to {base_dir}/")
        print(f"   📋 Extracted {len(menu_data)} menu items")
        print(f"   📄 Menu data saved to evanston_menu_data.json")
        print(f"\n🔄 Next steps:")
        print(f"   1. Organize images by categories")
        print(f"   2. Update Evanston page with new menu data")
    else:
        print("\n❌ Failed to download any images")

if __name__ == "__main__":
    main()