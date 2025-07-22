"use client";

import React, { useState } from "react";
import Link from "next/link";

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
};

const evanstonMenu: MenuItem[] = [
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    price: "$4.25",
    description: "Rich, smooth coffee brewed fresh daily",
    image: "/images/filter-coffee.jpg",
    category: "Coffee"
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    price: "$6.00",
    description: "Smooth, low-acid cold brewed coffee",
    image: "/images/cold-brew.jpg",
    category: "Coffee"
  },
  {
    id: "espresso",
    name: "Espresso",
    price: "$4.00",
    description: "Single shot of our signature blend",
    image: "/images/espresso.jpg",
    category: "Coffee"
  },
  {
    id: "latte",
    name: "Latte",
    price: "$5.50",
    description: "Espresso with steamed milk and microfoam",
    image: "/images/latte.jpg",
    category: "Coffee"
  },
  {
    id: "garden-salad",
    name: "Garden Salad",
    price: "$13.00",
    description: "Fresh mixed greens with seasonal vegetables and house vinaigrette",
    image: "/images/garden-salad.jpg",
    category: "Food"
  },
  {
    id: "quiche",
    name: "Quiche",
    price: "$15.00",
    description: "Flaky pastry filled with eggs, cheese, and fresh herbs",
    image: "/images/quiche.jpg",
    category: "Food"
  },
  {
    id: "scone",
    name: "Scone",
    price: "$4.00",
    description: "Traditional British scone served with clotted cream and jam",
    image: "/images/scone.jpg",
    category: "Food"
  }
];

export default function EvanstonMenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-light mb-4 text-gray-900">Evanston Location</h1>
          <p className="text-base sm:text-lg text-gray-600 font-light">Outdoor dining surrounded by nature</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-gray-900 text-center">Menu</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Menu Items */}
            <div>
              {/* Coffee Section */}
              <div className="mb-12 sm:mb-16">
                <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-2">Coffee</h3>
                <div className="space-y-3 sm:space-y-4">
                  {evanstonMenu.filter(item => item.category === "Coffee").map((item) => (
                    <div
                      key={item.id}
                      className={`flex justify-between items-center py-2 sm:py-3 cursor-pointer transition-all duration-300 ${
                        selectedItem?.id === item.id
                          ? "bg-gray-50 px-3 sm:px-4 rounded-lg"
                          : "hover:bg-gray-50 px-3 sm:px-4 rounded-lg"
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-light text-gray-900">{item.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-light ml-3 sm:ml-4 text-sm sm:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food Section */}
              <div className="mb-12 sm:mb-16">
                <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-6 sm:mb-8 border-b border-gray-200 pb-2">Food</h3>
                <div className="space-y-3 sm:space-y-4">
                  {evanstonMenu.filter(item => item.category === "Food").map((item) => (
                    <div
                      key={item.id}
                      className={`flex justify-between items-center py-2 sm:py-3 cursor-pointer transition-all duration-300 ${
                        selectedItem?.id === item.id
                          ? "bg-gray-50 px-3 sm:px-4 rounded-lg"
                          : "hover:bg-gray-50 px-3 sm:px-4 rounded-lg"
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-light text-gray-900">{item.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-light ml-3 sm:ml-4 text-sm sm:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="lg:sticky lg:top-24">
              {selectedItem ? (
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-full h-48 sm:h-64 lg:h-80 bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                      <span className="text-gray-500 text-xs sm:text-sm">Image: {selectedItem.name}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">{selectedItem.name}</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{selectedItem.description}</p>
                    <p className="text-lg sm:text-xl font-light text-gray-900">{selectedItem.price}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-full h-48 sm:h-64 lg:h-80 bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                      <span className="text-gray-500 text-sm sm:text-base">Select an item to view</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">Click on any menu item to see its details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 