#!/usr/bin/env python3
"""
Image scraper for ChowBus menu page
Downloads all menu item images from the ordering page
"""

import requests
from bs4 import BeautifulSoup
import urllib.parse
import os
import re
from pathlib import Path

def sanitize_filename(filename):
    """Clean filename for safe saving"""
    # Remove or replace problematic characters
    filename = re.sub(r'[<>:"/\\|?*]', '_', filename)
    filename = filename.strip()
    return filename

def download_image(url, filepath):
    """Download image from URL to filepath"""
    try:
        response = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"✓ Downloaded: {filepath.name}")
        return True
    except Exception as e:
        print(f"✗ Failed to download {url}: {e}")
        return False

def scrape_chowbus_images():
    """Scrape images from ChowBus menu page"""
    url = "https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe/20978"
    
    print(f"Fetching page: {url}")
    
    try:
        response = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Create directory for downloaded images
        download_dir = Path("public/menu_images_chowbus")
        download_dir.mkdir(exist_ok=True)
        
        images_found = []
        
        # Look for various image selectors that might contain menu items
        image_selectors = [
            'img[src*="api.chowbus.com"]',
            'img[src*="chowbus"]',
            'img[src*="blob"]',
            'img[src*="menu"]',
            'img[src*="food"]',
            'img[src*="item"]',
            'img[alt*="menu"]',
            'img[alt*="food"]',
            '.menu-item img',
            '.food-item img',
            '.product img',
            'img',  # Get all images
        ]
        
        # Also look for images in script tags (JavaScript data)
        scripts = soup.find_all('script')
        for script in scripts:
            if script.string:
                # Look for image URLs in JavaScript
                import re
                import json
                chowbus_images = re.findall(r'https://api\.chowbus\.com/[^"\']+?image_proxy/blobs/[^"\']+', script.string)
                
                # Try to extract menu item names near image URLs
                for img_url in chowbus_images:
                    # Look for item names in the vicinity of the image URL
                    script_content = script.string
                    img_index = script_content.find(img_url)
                    if img_index > 0:
                        # Look for "name" fields near the image URL
                        surrounding_text = script_content[max(0, img_index-500):img_index+500]
                        name_matches = re.findall(r'"name":\s*"([^"]+)"', surrounding_text)
                        description_matches = re.findall(r'"description":\s*"([^"]+)"', surrounding_text)
                        
                        item_name = "Menu item"
                        if name_matches:
                            item_name = name_matches[0]
                        elif description_matches:
                            item_name = description_matches[0][:30]  # Truncate long descriptions
                    
                    images_found.append({
                        'url': img_url,
                        'filename': f'{sanitize_filename(item_name)}.jpg',
                        'alt': item_name
                    })
        
        for selector in image_selectors:
            imgs = soup.select(selector)
            for img in imgs:
                src = img.get('src') or img.get('data-src')
                if not src:
                    continue
                    
                # Convert relative URLs to absolute
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    src = urllib.parse.urljoin(url, src)
                elif not src.startswith('http'):
                    src = urllib.parse.urljoin(url, src)
                
                # Get alt text for filename
                alt_text = img.get('alt', '') or img.get('title', '')
                
                # Create filename
                if alt_text:
                    filename = sanitize_filename(alt_text)
                else:
                    filename = Path(urllib.parse.urlparse(src).path).name
                
                if not filename:
                    filename = f"image_{len(images_found)}"
                
                # Ensure we have an extension
                if not any(filename.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    if '.jpg' in src.lower():
                        filename += '.jpg'
                    elif '.png' in src.lower():
                        filename += '.png'
                    elif '.webp' in src.lower():
                        filename += '.webp'
                    else:
                        filename += '.jpg'
                
                images_found.append({
                    'url': src,
                    'filename': filename,
                    'alt': alt_text
                })
        
        # Remove duplicates
        unique_images = {}
        for img in images_found:
            if img['url'] not in unique_images:
                unique_images[img['url']] = img
        
        print(f"\nFound {len(unique_images)} unique images")
        
        # Download each image
        downloaded_count = 0
        for i, (url, img_info) in enumerate(unique_images.items()):
            filepath = download_dir / f"{i:02d}_{img_info['filename']}"
            
            if download_image(url, filepath):
                downloaded_count += 1
                print(f"   Alt text: {img_info['alt']}")
        
        print(f"\n✓ Successfully downloaded {downloaded_count} images to {download_dir}")
        
        # List downloaded files
        print("\nDownloaded files:")
        for file in sorted(download_dir.glob("*")):
            print(f"  {file.name}")
            
    except Exception as e:
        print(f"Error scraping page: {e}")

if __name__ == "__main__":
    scrape_chowbus_images()