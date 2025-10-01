#!/usr/bin/env python3
"""
Organize Evanston ChowBus images by categories
"""

import os
import shutil
import re

def create_category_structure():
    """Create directory structure for Evanston categories"""
    base_dir = "chowbus_menu_evanston"
    
    # Define categories based on the downloaded filenames
    categories = {
        "matcha_specialties": [
            "matcha_latte", "matcha_milk_tea", "strawberry_matcha", "mango_matcha", "matcha_frappe"
        ],
        "coffee_espresso": [
            "vietnamese_iced_milk_coffee", "vietnamese_iced_black_coffee", "house_blend", "iced_coffee", 
            "doppio", "americano", "cortado", "latte", "caramel_macchiato", "pumpkin_spice", 
            "peppermint_mocha", "iced_hazelnut", "frappe"
        ],
        "milk_tea_boba": [
            "milk_tea", "signature_milk_tea", "brown_sugar_milk_tea", "strawberry_milk_tea",
            "thai_iced_milk_tea", "taro_latte", "chai_latte"
        ],
        "specialty_teas": [
            "loose_leaf_tea", "mango_green_tea", "honey_ginger_tea", "passion_fruit_green_tea",
            "strawberry_hibiscus_tea", "strawberry_kiwi_green_tea"
        ],
        "smoothies_drinks": [
            "smoothies", "strawberry_fresh_milk"
        ],
        "banh_mi_sandwiches": [
            "banh_mi", "veggie_tofu_banh_mi", "hampork", "chicken_banh_mi", "grilled_pork_banh_mi"
        ],
        "spring_rolls": [
            "spring_roll"
        ],
        "salads_food": [
            "savory_salad"
        ],
        "hot_beverages": [
            "hot_cocoa", "hot_white_cocoa"
        ]
    }
    
    # Create category directories
    for category in categories.keys():
        category_path = os.path.join(base_dir, category)
        if not os.path.exists(category_path):
            os.makedirs(category_path)
            print(f"Created directory: {category_path}")
    
    return categories

def organize_images():
    """Organize images into category directories"""
    base_dir = "chowbus_menu_evanston"
    categories = create_category_structure()
    
    # Get all image files
    image_files = [f for f in os.listdir(base_dir) 
                   if f.endswith('.jpg') and not os.path.isdir(os.path.join(base_dir, f))]
    
    organized_count = 0
    unorganized = []
    
    for image_file in image_files:
        moved = False
        image_name = image_file.lower()
        
        # Try to match against each category
        for category, keywords in categories.items():
            for keyword in keywords:
                if keyword in image_name:
                    source_path = os.path.join(base_dir, image_file)
                    dest_path = os.path.join(base_dir, category, image_file)
                    
                    try:
                        shutil.move(source_path, dest_path)
                        print(f"Moved {image_file} -> {category}/")
                        organized_count += 1
                        moved = True
                        break
                    except Exception as e:
                        print(f"Error moving {image_file}: {e}")
            
            if moved:
                break
        
        if not moved:
            unorganized.append(image_file)
    
    print(f"\n📊 Organization Summary:")
    print(f"  ✅ Organized: {organized_count} images")
    print(f"  ❓ Unorganized: {len(unorganized)} images")
    
    if unorganized:
        print(f"\n🔍 Unorganized files:")
        for file in unorganized[:10]:  # Show first 10
            print(f"  - {file}")
    
    # Show category counts
    print(f"\n📁 Category breakdown:")
    for category in categories.keys():
        category_path = os.path.join(base_dir, category)
        if os.path.exists(category_path):
            count = len([f for f in os.listdir(category_path) if f.endswith('.jpg')])
            print(f"  {category}: {count} images")

def main():
    print("🗂️  Evanston Image Organizer")
    print("=" * 40)
    
    organize_images()
    
    print(f"\n✅ Organization complete!")

if __name__ == "__main__":
    main()