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
    { name: "Espresso", price: "$3.50", desc: "Rich, bold single shot", img: "/espresso.jpg" },
    { name: "Latte", price: "$4.75", desc: "Smooth and creamy with art", img: "/latte.jpg" },
    { name: "Cappuccino", price: "$4.50", desc: "Perfectly balanced with steamed milk", img: "/cappuccino.jpg" },
  ],
  smoothies: [
    { name: "Tropical Mango", price: "$6.25", desc: "Mango, pineapple, and coconut", img: "/muffin.jpg" },
    { name: "Berry Blast", price: "$6.50", desc: "Mixed berries with banana and yogurt", img: "/cookie.jpg" },
    { name: "Green Goddess", price: "$6.75", desc: "Spinach, apple, banana, and lime", img: "/green-tea.jpg" },
  ],
  bobaTea: [
    { name: "Classic Milk Tea", price: "$5.50", desc: "Traditional black tea with tapioca pearls", img: "/chai.jpg" },
    { name: "Taro Milk Tea", price: "$5.75", desc: "Creamy taro with chewy boba", img: "/chai.jpg" },
    { name: "Matcha Latte", price: "$6.00", desc: "Premium matcha with milk and boba", img: "/matcha-latte.png" },
  ],
  sandwiches: [
    { name: "Vietnamese Banh Mi", price: "$8.50", desc: "Crispy baguette with pork, pickled vegetables, and herbs", img: "/images/breakfast-burrito.jpg" },
    { name: "Grilled Chicken Banh Mi", price: "$8.75", desc: "Marinated grilled chicken with fresh cilantro", img: "/burrito.jpg" },
    { name: "Vegetarian Banh Mi", price: "$8.00", desc: "Tofu and fresh vegetables with Vietnamese flavors", img: "/avocado-toast.jpg" },
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