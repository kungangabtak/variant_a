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
  tea: MenuItem[];
  pastries: MenuItem[];
  breakfast: MenuItem[];
};

const menuItems: MenuItems = {
  coffee: [
    { name: "Espresso", price: "$3.50", desc: "Rich, bold single shot", img: "/espresso.jpg" },
    { name: "Latte", price: "$4.75", desc: "Smooth and creamy with art", img: "/latte.jpg" },
    { name: "Cappuccino", price: "$4.50", desc: "Perfectly balanced with steamed milk", img: "/cappuccino.jpg" },
  ],
  tea: [
    { name: "Earl Grey", price: "$3.25", desc: "Classic black tea with bergamot", img: "/earl-grey.jpg" },
    { name: "Chai Latte", price: "$4.50", desc: "Spiced tea with steamed milk", img: "/chai.jpg" },
    { name: "Green Tea", price: "$3.00", desc: "Light and refreshing", img: "/green-tea.jpg" },
  ],
  pastries: [
    { name: "Croissant", price: "$3.50", desc: "Buttery, flaky perfection", img: "/croissant.jpg" },
    { name: "Blueberry Muffin", price: "$3.25", desc: "Fresh berries in every bite", img: "/muffin.jpg" },
    { name: "Chocolate Chip Cookie", price: "$2.75", desc: "Warm and gooey", img: "/cookie.jpg" },
  ],
  breakfast: [
    { name: "Avocado Toast", price: "$8.00", desc: "Sourdough with avocado, eggs, and herbs", img: "/avocado-toast.jpg" },
    { name: "Breakfast Burrito", price: "$9.75", desc: "Eggs, cheese, and fresh salsa", img: "/burrito.jpg" },
    { name: "Oatmeal Bowl", price: "$7.25", desc: "Steel-cut oats with berries and honey", img: "/oatmeal.jpg" },
  ],
};

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
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
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-600 hover:text-accent hover:border-gray-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuItems[activeCategory].map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover-lift"
                onClick={() => setSelectedItem(selectedItem === item ? null : item)}
              >
                <div className="h-32 sm:h-40 md:h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-gray-500 font-light text-xs sm:text-sm">
                    Photo: {item.name}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-1 sm:mb-2">{item.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{item.desc}</p>
                <p className="text-base sm:text-lg font-light text-gray-900">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Overlay Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-sm sm:max-w-md mx-auto relative p-6 sm:p-8 shadow-xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
            >
              ×
            </button>
            <div className="w-full h-32 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-gray-500 font-light text-sm sm:text-base">
                Photo: {selectedItem.name}
              </span>
            </div>
            <div className="text-center">
              <h4 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 sm:mb-3">{selectedItem.name}</h4>
              <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">{selectedItem.desc}</p>
              <p className="text-lg sm:text-xl font-light text-gray-900">{selectedItem.price}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 