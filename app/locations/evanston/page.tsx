"use client";

import React from "react";
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
    id: "matcha-latte",
    name: "Matcha Latte",
    price: "$5.50",
    description: "Organic Matcha with a choice of milks and toppings",
    image: "/menu/matcha.jpeg",
    category: "Specialty Drinks"
  },
  {
    id: "taro-latte",
    name: "Taro Latte",
    price: "$5.00",
    description: "Lightly sweet taro based on your choice of milks - Caffeinated option available",
    image: "/menu/taro.jpeg",
    category: "Specialty Drinks"
  },
  {
    id: "thai-iced-milk-tea",
    name: "Thai Iced Milk Tea",
    price: "$6.00",
    description: "Sweet thai iced tea with choice of milks and toppings",
    image: "/menu/thai-iced-milk-tea.jpeg",
    category: "Specialty Drinks"
  },
  {
    id: "hot-cocoa",
    name: "Hot Cocoa",
    price: "$6.00",
    description: "Hot coco with your choice of milks",
    image: "/menu/hot%20cocoa.jpeg",
    category: "Specialty Drinks"
  },
  {
    id: "smoothies-boba-tea",
    name: "Smoothies/Boba Tea",
    price: "$6.00",
    description: "Fresh fruits, ice cream or powder base mixtures. Choose up to 2 flavors and sweetness level. Ice blended with your choice of toppings.",
    image: "/menu/smoothies%3Aboba.jpeg",
    category: "Tea & Boba"
  },
  {
    id: "milk-tea",
    name: "Milk Tea",
    price: "$6.00",
    description: "Fresh brewed tea or powder based tea with your choice of milks and toppings",
    image: "/menu/milk%20tea.jpeg",
    category: "Tea & Boba"
  },
  {
    id: "house-blend",
    name: "House Blend",
    price: "$2.75",
    description: "Dark roast mixed blend",
    image: "/menu/house-blend.jpeg",
    category: "Coffee"
  },
  {
    id: "ham-pork-pate-banh-mi",
    name: "Ham/Pork & Pate Banh Mi",
    price: "$11.50",
    description: "Ham & Pork roll, pate, mayo, daikon, cucumber, jalapeno and cilantro",
    image: "/menu/ham%3Apork%20banh%20mi.jpeg",
    category: "Food"
  },
  {
    id: "shrimp-spring-roll",
    name: "Shrimp Spring Roll",
    price: "$7.95",
    description: "Shrimp, lettuce, cucumber, cilantro, rice vermicelli noodles wrapped in a delicate and translucent rice paper",
    image: "/menu/shrimp-spring-roll.jpeg",
    category: "Food"
  }
];

export default function EvanstonMenuPage() {
  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-warm-light relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-12 right-10 w-2 h-2 bg-accent-solid/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-16 w-1.5 h-1.5 bg-accent-solid/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-warm-dark leading-tight text-balance">
            Evanston Location
          </h1>
          <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed-plus text-balance">
            Outdoor dining surrounded by nature
          </p>
          <div className="mt-6">
            <p className="text-base sm:text-lg text-gray-600 font-light">
              2012 Central Street • Evanston, IL 60201
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
                  href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
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
                <span>Sun-Thu: 7AM-7PM • Fri-Sat: 7AM-9PM</span>
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
              Discover our carefully selected favorites. Browse the complete menu and place your order through our online system.
            </p>
          </div>
          
          {/* Featured Menu Items */}
          <div className="space-y-12">
            {/* Specialty Drinks */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-warm-dark mb-8 text-center">
                🍵 Specialty Drinks
              </h3>
              <div className="grid gap-6">
                {evanstonMenu.filter(item => item.category === "Specialty Drinks").map((item) => (
                  <div key={item.id} className="card-modern p-6 hover-lift">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl sm:text-2xl font-medium text-gray-900">{item.name}</h4>
                          <span className="text-2xl font-bold text-accent-solid">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tea & Boba */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-warm-dark mb-8 text-center">
                🧋 Tea & Boba
              </h3>
              <div className="grid gap-6">
                {evanstonMenu.filter(item => item.category === "Tea & Boba").map((item) => (
                  <div key={item.id} className="card-modern p-6 hover-lift">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl sm:text-2xl font-medium text-gray-900">{item.name}</h4>
                          <span className="text-2xl font-bold text-accent-solid">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coffee */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-warm-dark mb-8 text-center">
                ☕ Coffee
              </h3>
              <div className="grid gap-6">
                {evanstonMenu.filter(item => item.category === "Coffee").map((item) => (
                  <div key={item.id} className="card-modern p-6 hover-lift">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl sm:text-2xl font-medium text-gray-900">{item.name}</h4>
                          <span className="text-2xl font-bold text-accent-solid">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Food */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-warm-dark mb-8 text-center">
                🍽️ Food
              </h3>
              <div className="grid gap-6">
                {evanstonMenu.filter(item => item.category === "Food").map((item) => (
                  <div key={item.id} className="card-modern p-6 hover-lift">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl sm:text-2xl font-medium text-gray-900">{item.name}</h4>
                          <span className="text-2xl font-bold text-accent-solid">{item.price}</span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}