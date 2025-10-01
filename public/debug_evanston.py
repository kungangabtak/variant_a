#!/usr/bin/env python3
"""
Debug the Evanston ChowBus page to understand its structure
"""

import requests
from bs4 import BeautifulSoup
import re

def debug_evanston_page():
    url = "https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        print(f"✅ Page fetched successfully (status: {response.status_code})")
        print(f"📄 Content length: {len(response.content)} bytes")
        
        # Save raw HTML for inspection
        with open('evanston_page.html', 'w', encoding='utf-8', errors='ignore') as f:
            f.write(response.text)
        print("💾 Saved raw HTML to evanston_page.html")
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Check page title and basic structure
        title = soup.find('title')
        print(f"📄 Page title: {title.get_text().strip() if title else 'No title'}")
        
        # Look for any img tags
        img_tags = soup.find_all('img')
        print(f"🖼️  Found {len(img_tags)} img tags")
        for i, img in enumerate(img_tags[:5]):  # Show first 5
            src = img.get('src', 'No src')
            alt = img.get('alt', 'No alt')
            print(f"  {i+1}. src='{src[:100]}...' alt='{alt[:50]}...'")
        
        # Look for script tags
        scripts = soup.find_all('script')
        print(f"📜 Found {len(scripts)} script tags")
        
        image_containing_scripts = 0
        for i, script in enumerate(scripts):
            if script.string and ('image' in script.string.lower() or 'photo' in script.string.lower()):
                image_containing_scripts += 1
                print(f"  Script {i+1}: Contains image references (length: {len(script.string)})")
                
                # Show a sample of the script content
                if len(script.string) > 200:
                    sample = script.string[:200].replace('\n', ' ').replace('\r', ' ')
                    print(f"    Sample: {sample}...")
        
        print(f"📊 Scripts with image references: {image_containing_scripts}")
        
        # Look for specific patterns in the HTML
        html_content = response.text
        
        # Check for ChowBus API calls
        chowbus_api = re.findall(r'api\.chowbus\.com[^"\'\s]*', html_content)
        print(f"🔗 ChowBus API references: {len(chowbus_api)}")
        for api in chowbus_api[:3]:
            print(f"  {api}")
        
        # Check for image_proxy references
        image_proxy = re.findall(r'image_proxy[^"\'\s]*', html_content)
        print(f"🔗 Image proxy references: {len(image_proxy)}")
        for proxy in image_proxy[:3]:
            print(f"  {proxy}")
        
        # Look for blob references
        blobs = re.findall(r'blobs/[^"\'\s]*', html_content)
        print(f"🔗 Blob references: {len(blobs)}")
        for blob in blobs[:3]:
            print(f"  {blob}")
        
        # Check if it's a SPA that loads content dynamically
        react_found = 'react' in html_content.lower() or 'React' in html_content
        vue_found = 'vue' in html_content.lower() or 'Vue' in html_content  
        angular_found = 'angular' in html_content.lower() or 'Angular' in html_content
        
        print(f"🔧 JavaScript frameworks detected:")
        print(f"  React: {react_found}")
        print(f"  Vue: {vue_found}")
        print(f"  Angular: {angular_found}")
        
        # Look for data attributes or JSON
        json_scripts = soup.find_all('script', type='application/json')
        json_ld_scripts = soup.find_all('script', type='application/ld+json')
        
        print(f"📋 JSON data scripts:")
        print(f"  application/json: {len(json_scripts)}")
        print(f"  application/ld+json: {len(json_ld_scripts)}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    debug_evanston_page()