"use client";

import React, { useState } from "react";
import Link from "next/link";

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  img: string;
};

type MenuItems = {
  coffee: MenuItem[];
  smoothies: MenuItem[];
  bobaTea: MenuItem[];
  sandwiches: MenuItem[];
};

const menuItems: MenuItems = {
  coffee: [
    { name: "Double Espresso", price: "$3.50", desc: "Rich, bold double shot", img: "/chowbus_menu/coffee_more/92_double espressos.jpg" },
    { name: "Latte", price: "$4.75", desc: "Smooth and creamy with art", img: "/chowbus_menu/coffee_more/96_latte.jpg" },
    { name: "Americano", price: "$3.25", desc: "Classic espresso with hot water", img: "/chowbus_menu/coffee_more/93_americano.jpg" },
    { name: "House Blend", price: "$2.75", desc: "Dark roast mixed blend", img: "/chowbus_menu/coffee_more/90_house blend.jpg" },
  ],
  smoothies: [
    { name: "Mango Matcha Smoothie", price: "$6.25", desc: "Mango and premium matcha blend", img: "/chowbus_menu/smoothies_boba/73_mango matcha (smoothie).jpg" },
    { name: "Smoothies & Boba Tea", price: "$6.50", desc: "Choose your favorite flavor with boba", img: "/chowbus_menu/smoothies_boba/76_smoothies boba tea (choose your fav).jpg" },
    { name: "Milkshakes", price: "$6.75", desc: "Creamy milkshakes in various flavors", img: "/chowbus_menu/milkshakes/115_milkshakes (choose your fav).jpg" },
  ],
  bobaTea: [
    { name: "Signature Milk Tea", price: "$5.50", desc: "Our signature blend with tapioca pearls", img: "/chowbus_menu/milk_tea_boba/80_signature milk tea.jpg" },
    { name: "Taro Latte", price: "$5.75", desc: "Creamy taro with chewy boba", img: "/chowbus_menu/favorite_x/82_taro latte.jpg" },
    { name: "Matcha Latte", price: "$6.00", desc: "Premium matcha with milk (hot or iced)", img: "/chowbus_menu/ohh_matcha/69_matcha latte (hot or iced).jpg" },
    { name: "Brown Sugar Milk Tea", price: "$6.25", desc: "Rich brown sugar sweetened milk tea", img: "/chowbus_menu/milk_tea_boba/81_brown sugar milk tea.jpg" },
  ],
  sandwiches: [
    { name: "Roasted Chicken Banh Mi", price: "$8.75", desc: "Marinated roasted chicken with fresh herbs", img: "/chowbus_menu/banh_mi_sandwich/119_roasted chicken banh mi.jpg" },
    { name: "Veggie Tofu Banh Mi", price: "$8.00", desc: "Fresh tofu and vegetables with Vietnamese flavors", img: "/chowbus_menu/banh_mi_sandwich/89_veggie tofu banh mi.jpg" },
    { name: "Egg & Ham Banh Mi", price: "$8.50", desc: "Egg and ham with pate and fresh vegetables", img: "/chowbus_menu/banh_mi_sandwich/120_egg & ham_pate banh mi.jpg" },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<keyof MenuItems>("coffee");

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Menu Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm-solid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-gray-900">Our Menu</h2>
            <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Fresh ingredients from our garden, crafted with care and served in the open air
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {Object.keys(menuItems).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as keyof MenuItems)}
                className={`px-4 sm:px-6 py-2 sm:py-3 border-b-2 text-sm sm:text-base transition-all duration-300 font-light ${
                  activeCategory === category
                    ? "border-sage text-sage"
                    : "border-transparent text-gray-600 hover:text-sage hover:border-gray-300"
                }`}
              >
                {category === 'bobaTea' ? 'Boba Tea' : 
                 category === 'sandwiches' ? 'Sandwiches' :
                 category === 'smoothies' ? 'Smoothies' :
                 category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuItems[activeCategory].map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover-lift"
              >
                <div className="h-48 sm:h-56 md:h-64 bg-gray-100 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-1 sm:mb-2">{item.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <p className="text-base sm:text-lg font-light text-gray-900">{item.price}</p>
                  <button className="bg-sage text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-warm-dark transition-all duration-300 hover:scale-105">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Now Section */}
          <div id="order" className="mt-12 sm:mt-16 text-center bg-white rounded-2xl p-8 sm:p-10 shadow-warm">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">Ready to Order?</h3>
            <p className="text-gray-600 mb-6 sm:mb-8">Choose your location to place an order for pickup or delivery</p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md mx-auto">
              <a 
                href="https://www.chowbus.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-warm-dark transition-all duration-300 hover:scale-105 shadow-warm btn-warm"
              >
                Order from North Park
              </a>
              <a 
                href="https://www.chowbus.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-warm-dark transition-all duration-300 hover:scale-105 shadow-warm btn-warm"
              >
                Order from Evanston
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Or call us directly: 
              <a href="tel:+17735396078" className="text-sage hover:underline ml-1">North Park: (773) 539-6078</a> | 
              <a href="tel:+18474250022" className="text-sage hover:underline ml-1">Evanston: (847) 425-0022</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 