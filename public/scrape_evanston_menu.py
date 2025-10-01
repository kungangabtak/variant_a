#!/usr/bin/env python3
"""
Scrape Evanston ChowBus ordering page for menu images and data
URL: https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091
"""

import requests
from bs4 import BeautifulSoup
import re
import os
import urllib.parse
from urllib.request import urlretrieve
import time

def create_directories():
    """Create directory structure for Evanston menu images"""
    base_dir = "chowbus_menu_evanston"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
    return base_dir

def scrape_evanston_chowbus():
    """Scrape the Evanston ChowBus page for images and menu data"""
    url = "https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
    
    print(f"Scraping Evanston ChowBus page: {url}")
    
    # Set up headers to mimic a real browser
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
        
        print(f"Successfully fetched page (status: {response.status_code})")
        
        # Parse the HTML
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find all script tags that might contain image data
        scripts = soup.find_all('script')
        chowbus_images = []
        menu_data = []
        
        for script in scripts:
            if script.string:
                # Look for ChowBus image proxy URLs in JavaScript - multiple patterns
                patterns = [
                    r'https://api\.chowbus\.com/[^"\']+?image_proxy/blobs/[^"\']+',
                    r'https://[^"\']*chowbus[^"\']*image[^"\']*',
                    r'image_proxy/blobs/[^"\']+',
                    r'"url":\s*"([^"]*image[^"]*)"',
                    r'"image":\s*"([^"]+)"',
                    r'"photo":\s*"([^"]+)"'
                ]
                
                for pattern in patterns:
                    matches = re.findall(pattern, script.string)
                    for match in matches:
                        if isinstance(match, tuple):
                            match = match[0] if match[0] else match[1] if len(match) > 1 else ""
                        if match and ('image' in match.lower() or 'photo' in match.lower()):
                            chowbus_images.append(match)
                
                # Look for any images in the script
                if 'image' in script.string.lower() or 'photo' in script.string.lower():
                    print(f"Found script with image references (length: {len(script.string)})")
                    # Save a snippet for debugging
                    if len(script.string) > 1000:
                        snippet = script.string[:500] + "..." + script.string[-500:]
                        print(f"Script snippet: {snippet[:200]}...")
                
                # Also look for menu item data
                if 'items' in script.string or 'menu' in script.string.lower():
                    print("Found potential menu data in script tag")
        
        # Remove duplicates while preserving order
        seen = set()
        unique_images = []
        for img in chowbus_images:
            if img not in seen:
                seen.add(img)
                unique_images.append(img)
        
        print(f"Found {len(unique_images)} unique ChowBus image URLs")
        
        return unique_images, menu_data, soup
        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching page: {e}")
        return [], [], None
    except Exception as e:
        print(f"Error parsing page: {e}")
        return [], [], None

def extract_filename_from_url(url):
    """Extract a meaningful filename from the ChowBus image URL"""
    try:
        # Parse the URL to get parameters
        parsed = urllib.parse.urlparse(url)
        query_params = urllib.parse.parse_qs(parsed.query)
        
        # Look for filename in various possible parameters
        filename = None
        for param in ['filename', 'name', 'title']:
            if param in query_params:
                filename = query_params[param][0]
                break
        
        if not filename:
            # Extract from path if no parameter found
            path_parts = parsed.path.split('/')
            if path_parts:
                filename = path_parts[-1]
        
        if not filename:
            # Generate based on URL hash
            filename = f"menu_item_{abs(hash(url)) % 10000}"
        
        # Clean up filename
        filename = re.sub(r'[^\w\s\-_\.]', '', filename)
        if not filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
            filename += '.jpg'
            
        return filename
    
    except Exception as e:
        print(f"Error extracting filename from {url}: {e}")
        return f"image_{abs(hash(url)) % 10000}.jpg"

def download_images(image_urls, base_dir):
    """Download all images to the base directory"""
    print(f"\nStarting download of {len(image_urls)} images...")
    
    successful_downloads = 0
    failed_downloads = 0
    
    for i, url in enumerate(image_urls, 1):
        try:
            filename = extract_filename_from_url(url)
            filepath = os.path.join(base_dir, filename)
            
            print(f"[{i}/{len(image_urls)}] Downloading: {filename}")
            
            # Add headers for image requests
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Referer': 'https://pos.chowbus.com/'
            }
            
            # Use requests instead of urlretrieve for better error handling
            img_response = requests.get(url, headers=headers, timeout=30)
            img_response.raise_for_status()
            
            with open(filepath, 'wb') as f:
                f.write(img_response.content)
            
            successful_downloads += 1
            
            # Small delay to be respectful
            time.sleep(0.5)
            
        except requests.exceptions.RequestException as e:
            print(f"  ❌ Failed to download {url}: {e}")
            failed_downloads += 1
        except Exception as e:
            print(f"  ❌ Error saving {filename}: {e}")
            failed_downloads += 1
    
    print(f"\n📊 Download Summary:")
    print(f"  ✅ Successful: {successful_downloads}")
    print(f"  ❌ Failed: {failed_downloads}")
    print(f"  📁 Saved to: {base_dir}/")
    
    return successful_downloads

def analyze_menu_structure(soup):
    """Analyze the page structure to understand menu organization"""
    if not soup:
        return {}
    
    print("\n🔍 Analyzing menu structure...")
    
    # Look for category information
    categories = {}
    
    # Try to find category headers or sections
    category_elements = soup.find_all(['h1', 'h2', 'h3', 'h4', 'div'], 
                                    text=re.compile(r'(coffee|tea|food|sandwich|drink|dessert)', re.I))
    
    for element in category_elements:
        print(f"  Found potential category: {element.get_text().strip()}")
    
    # Look for structured data
    json_scripts = soup.find_all('script', type='application/ld+json')
    for script in json_scripts:
        print(f"  Found structured data script")
    
    return categories

def main():
    print("🍽️  Evanston ChowBus Menu Scraper")
    print("=" * 50)
    
    # Create directory structure
    base_dir = create_directories()
    print(f"📁 Created directory: {base_dir}")
    
    # Scrape the page
    image_urls, menu_data, soup = scrape_evanston_chowbus()
    
    if not image_urls:
        print("❌ No images found. Exiting.")
        return
    
    # Analyze menu structure
    categories = analyze_menu_structure(soup)
    
    # Download images
    download_count = download_images(image_urls, base_dir)
    
    if download_count > 0:
        print(f"\n✅ Successfully scraped Evanston menu!")
        print(f"   Downloaded {download_count} images to {base_dir}/")
        print(f"   Next step: Organize images by categories")
    else:
        print("\n❌ Failed to download any images")

if __name__ == "__main__":
    main()