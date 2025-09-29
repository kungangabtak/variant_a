"use client";

import React, { useState } from "react";
import Link from "next/link";
import GoogleReviewsMarquee from "../../components/GoogleReviewsMarquee";

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
};

const northParkMenu: MenuItem[] = [
  // Matcha Specialties
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    price: "$6.00",
    description: "Premium matcha with milk (hot or iced)",
    image: "/chowbus_menu/ohh_matcha/69_matcha latte (hot or iced).jpg",
    category: "Matcha Specialties"
  },
  {
    id: "matcha-milk-tea",
    name: "Matcha Milk Tea",
    price: "$6.25",
    description: "Creamy matcha milk tea with your choice of toppings",
    image: "/chowbus_menu/ohh_matcha/70_matcha milk tea.jpg",
    category: "Matcha Specialties"
  },
  {
    id: "strawberry-matcha-latte",
    name: "Strawberry Matcha Latte",
    price: "$6.50",
    description: "Refreshing iced matcha with sweet strawberry blend",
    image: "/chowbus_menu/ohh_matcha/71_strawberry matcha latte (iced).jpg",
    category: "Matcha Specialties"
  },
  {
    id: "matcha-milkshake",
    name: "Matcha Milkshake",
    price: "$6.75",
    description: "Creamy matcha milkshake with premium ice cream",
    image: "/chowbus_menu/milkshakes/75_matcha milkshake.jpg",
    category: "Matcha Specialties"
  },

  // Coffee & Espresso
  {
    id: "double-espresso",
    name: "Double Espresso",
    price: "$3.50",
    description: "Rich, bold double shot",
    image: "/chowbus_menu/coffee_more/92_double espressos.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "americano",
    name: "Americano",
    price: "$3.25",
    description: "Classic espresso with hot water",
    image: "/chowbus_menu/coffee_more/93_americano.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "latte",
    name: "Latte",
    price: "$4.75",
    description: "Smooth and creamy with art",
    image: "/chowbus_menu/coffee_more/96_latte.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "house-blend",
    name: "House Blend",
    price: "$2.75",
    description: "Dark roast mixed blend",
    image: "/chowbus_menu/coffee_more/90_house blend.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    price: "$5.25",
    description: "Espresso with vanilla and caramel drizzle",
    image: "/chowbus_menu/coffee_more/102_caramel macchiato.jpg",
    category: "Coffee & Espresso"
  },

  // Milk Tea & Boba
  {
    id: "signature-milk-tea",
    name: "Signature Milk Tea",
    price: "$5.50",
    description: "Our signature blend with tapioca pearls",
    image: "/chowbus_menu/milk_tea_boba/80_signature milk tea.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "brown-sugar-milk-tea",
    name: "Brown Sugar Milk Tea",
    price: "$6.25",
    description: "Rich brown sugar sweetened milk tea",
    image: "/chowbus_menu/milk_tea_boba/81_brown sugar milk tea.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "thai-iced-milk-tea",
    name: "Thai Iced Milk Tea",
    price: "$6.00",
    description: "Sweet thai iced tea with choice of milks and toppings",
    image: "/chowbus_menu/milk_tea_boba/108_thai iced milk tea.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "taro-latte",
    name: "Taro Latte",
    price: "$5.75",
    description: "Creamy taro with chewy boba",
    image: "/chowbus_menu/favorite_x/82_taro latte.jpg",
    category: "Milk Tea & Boba"
  },

  // Smoothies & Refreshers
  {
    id: "mango-matcha-smoothie",
    name: "Mango Matcha Smoothie",
    price: "$6.25",
    description: "Mango and premium matcha blend",
    image: "/chowbus_menu/smoothies_boba/73_mango matcha (smoothie).jpg",
    category: "Smoothies & Refreshers"
  },
  {
    id: "smoothies-boba-tea",
    name: "Smoothies & Boba Tea",
    price: "$6.50",
    description: "Choose your favorite flavor with boba",
    image: "/chowbus_menu/smoothies_boba/76_smoothies boba tea (choose your fav).jpg",
    category: "Smoothies & Refreshers"
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    price: "$6.75",
    description: "Creamy milkshakes in various flavors",
    image: "/chowbus_menu/milkshakes/115_milkshakes (choose your fav).jpg",
    category: "Smoothies & Refreshers"
  },

  // Specialty Teas
  {
    id: "citron-tea",
    name: "Citron (Yuja) Tea",
    price: "$5.25",
    description: "Traditional Korean citron tea, soothing and aromatic",
    image: "/chowbus_menu/tea_more/106_citron (yuja) tea.jpg",
    category: "Specialty Teas"
  },
  {
    id: "mango-green-tea",
    name: "Mango Green Tea",
    price: "$5.50",
    description: "Refreshing green tea with mango flavor",
    image: "/chowbus_menu/tea_more/107_mango green tea.jpg",
    category: "Specialty Teas"
  },
  {
    id: "loose-leaf-tea",
    name: "Loose Leaf Tea",
    price: "$4.75",
    description: "Choose your favorite premium loose leaf tea",
    image: "/chowbus_menu/tea_more/105_loose leaf tea (choose your fav).jpg",
    category: "Specialty Teas"
  },

  // Warm Beverages
  {
    id: "hot-cocoa",
    name: "Hot Cocoa",
    price: "$4.50",
    description: "Rich hot chocolate with your choice of milks",
    image: "/chowbus_menu/caffeine_free/113_hot cocoa.jpg",
    category: "Warm Beverages"
  },
  {
    id: "hot-white-cocoa",
    name: "Hot White Cocoa",
    price: "$4.75",
    description: "Creamy white chocolate hot cocoa",
    image: "/chowbus_menu/caffeine_free/114_hot white cocoa.jpg",
    category: "Warm Beverages"
  },

  // Banh Mi Sandwiches
  {
    id: "roasted-chicken-banh-mi",
    name: "Roasted Chicken Banh Mi",
    price: "$8.75",
    description: "Marinated roasted chicken with fresh herbs",
    image: "/chowbus_menu/banh_mi_sandwich/119_roasted chicken banh mi.jpg",
    category: "Banh Mi Sandwiches"
  },
  {
    id: "veggie-tofu-banh-mi",
    name: "Veggie Tofu Banh Mi",
    price: "$8.00",
    description: "Fresh tofu and vegetables with Vietnamese flavors",
    image: "/chowbus_menu/banh_mi_sandwich/89_veggie tofu banh mi.jpg",
    category: "Banh Mi Sandwiches"
  },
  {
    id: "egg-ham-pate-banh-mi",
    name: "Egg & Ham Banh Mi",
    price: "$8.50",
    description: "Egg and ham with pate and fresh vegetables",
    image: "/chowbus_menu/banh_mi_sandwich/120_egg & ham_pate banh mi.jpg",
    category: "Banh Mi Sandwiches"
  },

  // Panini & Grilled Sandwiches
  {
    id: "grilled-cheese-panini",
    name: "Grilled Cheese Panini",
    price: "$7.25",
    description: "Classic grilled cheese with premium melted cheese",
    image: "/chowbus_menu/panini_sandwich/121_grilled cheese panini.jpg",
    category: "Panini & Grilled Sandwiches"
  },
  {
    id: "hazelnut-heaven-panini",
    name: "Hazelnut Heaven Panini",
    price: "$8.50",
    description: "Sweet hazelnut spread panini, perfect for dessert",
    image: "/chowbus_menu/panini_sandwich/122_hazelnut heaven panini.jpg",
    category: "Panini & Grilled Sandwiches"
  },
  {
    id: "cheddar-ham-panini",
    name: "Cheddar Ham Panini",
    price: "$8.75",
    description: "Savory ham and melted cheddar cheese panini",
    image: "/chowbus_menu/panini_sandwich/123_cheddar ham panini.jpg",
    category: "Panini & Grilled Sandwiches"
  },

  // Bagels & Breakfast
  {
    id: "toasted-bagel",
    name: "Toasted Bagel",
    price: "$3.50",
    description: "Fresh toasted bagel with butter or cream cheese",
    image: "/chowbus_menu/bagel_sandwich/116_toasted bagel.jpg",
    category: "Bagels & Breakfast"
  },
  {
    id: "egg-cheese-bagel",
    name: "Egg & Cheese Bagel",
    price: "$6.25",
    description: "Scrambled eggs with melted cheese on toasted bagel",
    image: "/chowbus_menu/bagel_sandwich/117_egg & cheese bagel.jpg",
    category: "Bagels & Breakfast"
  },
  {
    id: "egg-ham-cheese-bagel",
    name: "Egg, Ham & Cheese Bagel",
    price: "$7.50",
    description: "Complete breakfast bagel with egg, ham, and cheese",
    image: "/chowbus_menu/bagel_sandwich/87_egg_ham & cheese bagel.jpg",
    category: "Bagels & Breakfast"
  },

  // Desserts
  {
    id: "new-york-cheesecake",
    name: "New York Cheesecake",
    price: "$5.95",
    description: "Classic rich and creamy New York style cheesecake",
    image: "/chowbus_menu/dessert/126_new york cheesecake.jpg",
    category: "Desserts"
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: "$6.25",
    description: "Traditional Italian coffee-flavored dessert",
    image: "/chowbus_menu/dessert/127_tiramisu.jpg",
    category: "Desserts"
  },
  {
    id: "bingsoo-korean-shaved-ice",
    name: "Bingsoo Korean Shaved Ice",
    price: "$8.50",
    description: "Korean shaved ice dessert with various toppings",
    image: "/chowbus_menu/dessert/125_bingsoo korean shaved ice.jpg",
    category: "Desserts"
  },

  // Hot Noodles
  {
    id: "shin-ramyun-spicy-noodles",
    name: "Shin Ramyun Spicy Noodles Soup",
    price: "$9.25",
    description: "Korean spicy instant noodle soup",
    image: "/chowbus_menu/noodles/88_shin ramyun spicy noodles soup.jpg",
    category: "Hot Noodles"
  }
];

export default function NorthParkMenuPage() {
  const categories = [
    { id: "Matcha Specialties", label: "Matcha Specialties", emoji: "🍵", image: "/chowbus_menu_north_park_enhanced/ohh_matcha/69_matcha latte (hot or iced).jpg" },
    { id: "Coffee & Espresso", label: "Coffee & Espresso", emoji: "☕", image: "/chowbus_menu_north_park_enhanced/coffee_more/96_latte.jpg" },
    { id: "Milk Tea & Boba", label: "Milk Tea & Boba", emoji: "🧋", image: "/chowbus_menu_north_park_enhanced/milk_tea_boba/80_signature milk tea.jpg" },
    { id: "Smoothies & Refreshers", label: "Smoothies & Refreshers", emoji: "🥤", image: "/chowbus_menu_north_park_enhanced/smoothies_boba/73_mango matcha (smoothie).jpg" },
    { id: "Specialty Teas", label: "Specialty Teas", emoji: "🍃", image: "/chowbus_menu_north_park_enhanced/tea_more/106_citron (yuja) tea.jpg" },
    { id: "Warm Beverages", label: "Warm Beverages", emoji: "☕", image: "/chowbus_menu_north_park_enhanced/caffeine_free/113_hot cocoa.jpg" },
    { id: "Banh Mi Sandwiches", label: "Banh Mi Sandwiches", emoji: "🥖", image: "/chowbus_menu_north_park_enhanced/banh_mi_sandwich/119_roasted chicken banh mi.jpg" },
    { id: "Panini & Grilled Sandwiches", label: "Panini & Grilled", emoji: "🥪", image: "/chowbus_menu_north_park_enhanced/panini_sandwich/121_grilled cheese panini.jpg" },
    { id: "Bagels & Breakfast", label: "Bagels & Breakfast", emoji: "🥯", image: "/chowbus_menu_north_park_enhanced/bagel_sandwich/116_toasted bagel.jpg" },
    { id: "Desserts", label: "Desserts", emoji: "🍰", image: "/chowbus_menu_north_park_enhanced/dessert/126_new york cheesecake.jpg" },
    { id: "Hot Noodles", label: "Hot Noodles", emoji: "🍜", image: "/chowbus_menu_north_park_enhanced/noodles/88_shin ramyun spicy noodles soup.jpg" },
  ];

  // Group items by category
  const groupedMenu = categories.map(category => ({
    ...category,
    items: northParkMenu.filter(item => item.category === category.id)
  })).filter(group => group.items.length > 0);
  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-warm-light relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-accent-solid/20 rounded-full animate-float"></div>
        <div className="absolute bottom-12 right-16 w-1.5 h-1.5 bg-accent-solid/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-warm-dark leading-tight text-balance">
            North Park Location
          </h1>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed-plus text-balance">
            Urban garden oasis in the heart of the city
          </p>
          <div className="mt-6">
            <p className="text-base sm:text-lg text-gray-600 font-light">
              3257 W Bryn Mawr Ave, Chicago, IL 60659
            </p>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="card-modern p-8 sm:p-12 hover-glow">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center animate-pulse-warm">
                  <span className="text-2xl">🛒</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-warm-dark text-balance">
                Order Online for Pickup
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed-plus max-w-2xl mx-auto text-balance">
                Skip the line and order ahead! Browse our full menu with specialty items including matcha lattes, Vietnamese coffee, banh mi sandwiches, and more.
              </p>
              <div className="pt-4">
                <a 
                  href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe/20978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block px-10 sm:px-12 py-5 sm:py-6 font-medium text-lg sm:text-xl 
                    transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
                    bg-accent-solid text-white hover:bg-warm-dark shadow-warm-lg
                    border-2 border-accent-solid hover:border-warm-dark
                  "
                >
                  Order Now via ChowBus
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 pt-2">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-sage rounded-full mr-2"></span>
                  Currently Open
                </span>
                <span>•</span>
                <span>Mon-Thu: 8AM-8PM • Fri-Sun: 8AM-9PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 sm:py-20 bg-warm-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-warm-dark text-balance">
              Full Menu
            </h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full"></div>
          </div>

          {/* Menu Grid - 2 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {groupedMenu.map((group) => (
              <div key={group.id} className="space-y-6">
                {/* Category Header with Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-warm">
                  <div className="h-32 sm:h-40 overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-2xl sm:text-3xl font-light text-white flex items-center gap-3">
                      <span className="text-2xl">{group.emoji}</span>
                      {group.label}
                    </h3>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-warm space-y-5">
                  {group.items.map((item) => (
                    <div key={item.id} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}