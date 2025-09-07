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
  const categories = [
    { id: "Specialty Drinks", label: "Specialty Drinks", emoji: "🍵" },
    { id: "Tea & Boba", label: "Tea & Boba", emoji: "🧋" },
    { id: "Coffee", label: "Coffee", emoji: "☕" },
    { id: "Food", label: "Food", emoji: "🍽️" },
  ];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
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
          <div className="w-24 h-1 bg-sage mx-auto rounded-full mb-6"></div>
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
                  <span className="w-2 h-2 bg-sage rounded-full mr-2"></span>
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
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-warm-dark text-balance">
              Featured Menu Items
            </h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed-plus text-balance">
              Discover our carefully selected favorites. Browse the complete menu and place your order through our online system.
            </p>
          </div>
          {/* Sticky tab navigation */}
          <div className="sticky top-16 z-10 -mx-6 sm:-mx-8 px-6 sm:px-8 py-3 bg-white/85 backdrop-blur-enhanced shadow-warm border-b border-gray-200 mb-10">
            <nav role="tablist" aria-label="Menu categories" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${activeCategory === cat.id
                    ? "bg-sage text-white border-sage shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:border-sage hover:text-sage"} inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors`}
                >
                  <span className="hidden sm:inline">{cat.emoji}</span>
                  <span className="font-medium text-sm sm:text-base">{cat.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Tabbed Menu Items */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium text-warm-dark mb-8 text-center">
              <span className="mr-2">{categories.find(c => c.id === activeCategory)?.emoji}</span>
              {activeCategory}
            </h3>
            <div className="grid gap-6">
              {evanstonMenu.filter(item => item.category === activeCategory).map((item) => (
                <div key={item.id} className="card-modern p-5 sm:p-6 hover-lift hover:bg-sage/5 ring-1 ring-transparent hover:ring-sage/20 transition-colors">
                  <div className="flex items-center gap-5 sm:gap-6">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 truncate">{item.name}</h4>
                        <span className="inline-flex items-center px-3 py-1 rounded-full border border-sage/30 bg-sage/5 text-sage text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-warm-dark text-balance">
              What people are saying
            </h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed-plus text-balance">
              Browse Google reviews for our Evanston location.
            </p>
          </div>
          <GoogleReviewsMarquee
            placeQuery="2012 Central Street, Evanston, IL 60201"
            reviewsUrl="https://maps.app.goo.gl/pN5xotevZmL9s9Kd6"
          />
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/pN5xotevZmL9s9Kd6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-sage text-white hover:bg-warm-dark transition-colors btn-warm"
            >
              Read all reviews on Google
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}