#!/usr/bin/env python3
"""
Parse the saved Evanston HTML file directly to extract images
"""

from bs4 import BeautifulSoup
import re
import os
import requests
import time

def parse_saved_html():
    """Parse the saved HTML file to extract images and menu data"""
    print("📄 Parsing saved evanston_page.html...")
    
    try:
        with open('evanston_page.html', 'r', encoding='utf-8', errors='ignore') as f:
            html_content = f.read()
        
        print(f"✅ Loaded HTML file ({len(html_content)} characters)")
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Extract from img tags
        img_tags = soup.find_all('img')
        print(f"🖼️  Found {len(img_tags)} img tags")
        
        image_items = []
        
        for i, img in enumerate(img_tags):
            src = img.get('src', '')
            alt = img.get('alt', '')
            
            if 'chowbus.com' in src and 'image_proxy' in src:
                image_items.append({
                    'url': src,
                    'alt': alt,
                    'name': alt.split('...')[0].strip() if alt else f"item_{i+1}",
                    'index': i+1
                })
                print(f"  {i+1}. {alt[:50]}... -> {src[:80]}...")
        
        # Also look in the raw HTML for any missed URLs
        chowbus_pattern = r'https://api\.chowbus\.com/compendium/api/v1/image_proxy/blobs/[^"\'>\s]+'
        additional_urls = re.findall(chowbus_pattern, html_content)
        
        print(f"🔍 Found {len(additional_urls)} additional URLs in raw HTML")
        
        # Add unique additional URLs
        existing_urls = {item['url'] for item in image_items}
        for url in additional_urls:
            if url not in existing_urls:
                image_items.append({
                    'url': url,
                    'alt': '',
                    'name': f"additional_item_{len(image_items)+1}",
                    'index': len(image_items)+1
                })
        
        print(f"📊 Total unique images: {len(image_items)}")
        return image_items
        
    except Exception as e:
        print(f"❌ Error parsing HTML: {e}")
        return []

def create_filename(item):
    """Create a filename from item data"""
    if item['name'] and item['name'].strip() and item['name'] != 'No alt':
        # Use the alt text as filename
        filename = item['name'].strip().lower()
        filename = re.sub(r'[^\w\s\-]', '', filename)
        filename = filename.replace(' ', '_')
        filename = f"{item['index']:03d}_{filename}"
    else:
        # Use index-based naming
        filename = f"{item['index']:03d}_menu_item"
    
    if not filename.endswith('.jpg'):
        filename += '.jpg'
    
    return filename

def download_images(image_items):
    """Download all images"""
    if not image_items:
        print("❌ No images to download")
        return 0
    
    # Create directory
    base_dir = "chowbus_menu_evanston"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
    
    print(f"\n📥 Downloading {len(image_items)} images to {base_dir}/...")
    
    successful = 0
    failed = 0
    
    for item in image_items:
        try:
            filename = create_filename(item)
            filepath = os.path.join(base_dir, filename)
            
            print(f"[{item['index']}/{len(image_items)}] {filename}")
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Referer': 'https://pos.chowbus.com/'
            }
            
            response = requests.get(item['url'], headers=headers, timeout=30)
            response.raise_for_status()
            
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            successful += 1
            time.sleep(0.2)  # Be respectful
            
        except Exception as e:
            print(f"  ❌ Failed: {e}")
            failed += 1
    
    print(f"\n📊 Download complete:")
    print(f"  ✅ Successful: {successful}")
    print(f"  ❌ Failed: {failed}")
    
    return successful

def main():
    print("🍽️  Evanston HTML Parser & Image Downloader")
    print("=" * 50)
    
    # Parse HTML file
    image_items = parse_saved_html()
    
    if not image_items:
        print("❌ No images found in HTML file")
        return
    
    # Download images
    download_count = download_images(image_items)
    
    if download_count > 0:
        print(f"\n✅ Successfully downloaded {download_count} images!")
        print(f"📁 Check the chowbus_menu_evanston/ directory")
    else:
        print("\n❌ No images were downloaded")

if __name__ == "__main__":
    main()