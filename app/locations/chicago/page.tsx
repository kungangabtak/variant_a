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

const northParkMenu: MenuItem[] = [
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
    id: "avocado-toast",
    name: "Avocado Toast",
    price: "$12.00",
    description: "Sourdough toast with smashed avocado, sea salt, and red pepper flakes",
    image: "/images/avocado-toast.jpg",
    category: "Food"
  },
  {
    id: "breakfast-burrito",
    name: "Breakfast Burrito",
    price: "$14.00",
    description: "Scrambled eggs, cheese, and fresh salsa wrapped in a warm tortilla",
    image: "/images/breakfast-burrito.jpg",
    category: "Food"
  },
  {
    id: "croissant",
    name: "Croissant",
    price: "$4.50",
    description: "Buttery, flaky French pastry baked fresh daily",
    image: "/images/croissant.jpg",
    category: "Food"
  }
];

export default function NorthParkMenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

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
          <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed-plus text-balance">
            Urban garden oasis in the heart of the city
          </p>
          <div className="mt-6">
            <p className="text-base sm:text-lg text-gray-600 font-light">
              3257 West Bryn Mawr Avenue • North Park, IL 60659
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
                <div className="w-16 h-16 bg-accent-solid/10 rounded-full flex items-center justify-center animate-pulse-warm">
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
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Currently Open
                </span>
                <span>•</span>
                <span>8:15 AM - 8:45 PM</span>
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
              Featured Menu Items
            </h2>
            <div className="w-20 h-1 bg-accent-solid mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed-plus text-balance">
              A curated selection of our most popular drinks and dishes. View our complete menu and place orders online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Menu Items */}
            <div className="space-y-8">
              {/* Coffee Section */}
              <div className="card-modern p-8">
                <h3 className="text-2xl sm:text-3xl font-light text-warm-dark mb-6 pb-4 border-b border-accent-solid/20">
                  ☕ Coffee
                </h3>
                <div className="space-y-4">
                  {northParkMenu.filter(item => item.category === "Coffee").map((item) => (
                    <div
                      key={item.id}
                      className={`flex justify-between items-center py-4 px-4 cursor-pointer transition-all duration-300 rounded-xl hover-gentle ${
                        selectedItem?.id === item.id
                          ? "bg-warm-light shadow-warm"
                          : "hover:bg-warm-light/50"
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-accent-solid font-medium ml-4 text-lg sm:text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food Section */}
              <div className="card-modern p-8">
                <h3 className="text-2xl sm:text-3xl font-light text-warm-dark mb-6 pb-4 border-b border-accent-solid/20">
                  🍽️ Food
                </h3>
                <div className="space-y-4">
                  {northParkMenu.filter(item => item.category === "Food").map((item) => (
                    <div
                      key={item.id}
                      className={`flex justify-between items-center py-4 px-4 cursor-pointer transition-all duration-300 rounded-xl hover-gentle ${
                        selectedItem?.id === item.id
                          ? "bg-warm-light shadow-warm"
                          : "hover:bg-warm-light/50"
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-accent-solid font-medium ml-4 text-lg sm:text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Display */}
            <div className="lg:sticky lg:top-24">
              {selectedItem ? (
                <div className="card-modern p-8 hover-lift">
                  <div className="text-center">
                    <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-warm-light to-warm-dark rounded-2xl mb-6 flex items-center justify-center shadow-warm img-warm-filter">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-float">
                          <span className="text-2xl">
                            {selectedItem.category === 'Coffee' ? '☕' : '🍽️'}
                          </span>
                        </div>
                        <span className="text-white/80 text-lg font-light">
                          {selectedItem.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-warm-dark mb-3">{selectedItem.name}</h3>
                    <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">{selectedItem.description}</p>
                    <p className="text-2xl sm:text-3xl font-light text-accent-solid">{selectedItem.price}</p>
                  </div>
                </div>
              ) : (
                <div className="card-modern p-8">
                  <div className="text-center">
                    <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-warm-light to-warm-dark rounded-2xl mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-warm">
                          <span className="text-3xl">👆</span>
                        </div>
                        <span className="text-white/80 text-lg font-light">Select an item to view</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      Click on any menu item to see its details and pricing
                    </p>
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