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
    { id: "Matcha Specialties", label: "Matcha Specialties", emoji: "🍵", color: "bg-green-100 text-green-800 border-green-200" },
    { id: "Coffee & Espresso", label: "Coffee & Espresso", emoji: "☕", color: "bg-amber-100 text-amber-800 border-amber-200" },
    { id: "Milk Tea & Boba", label: "Milk Tea & Boba", emoji: "🧋", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { id: "Smoothies & Refreshers", label: "Smoothies & Refreshers", emoji: "🥤", color: "bg-pink-100 text-pink-800 border-pink-200" },
    { id: "Specialty Teas", label: "Specialty Teas", emoji: "🍃", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { id: "Warm Beverages", label: "Warm Beverages", emoji: "☕", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { id: "Banh Mi Sandwiches", label: "Banh Mi Sandwiches", emoji: "🥖", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { id: "Panini & Grilled Sandwiches", label: "Panini & Grilled", emoji: "🥪", color: "bg-red-100 text-red-800 border-red-200" },
    { id: "Bagels & Breakfast", label: "Bagels & Breakfast", emoji: "🥯", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { id: "Desserts", label: "Desserts", emoji: "🍰", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    { id: "Hot Noodles", label: "Hot Noodles", emoji: "🍜", color: "bg-rose-100 text-rose-800 border-rose-200" },
  ];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems = northParkMenu.filter(item => 
    (activeCategory === "All" || item.category === activeCategory) &&
    (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
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
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-warm-dark text-balance">
              North Park Full Menu
            </h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed-plus text-balance">
              Browse our complete menu featuring specialty matcha drinks, Vietnamese banh mi, artisanal coffee, and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white rounded-full border border-gray-300 focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            <button
              onClick={() => setActiveCategory("All")}
              className={`${activeCategory === "All" 
                ? "bg-sage text-white border-sage shadow-md" 
                : "bg-white text-gray-700 border-gray-300 hover:border-sage hover:text-sage"} 
                inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105`}
            >
              <span>🍽️</span>
              <span className="font-medium text-sm">All Items</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`${activeCategory === cat.id 
                  ? `${cat.color} shadow-md border-2` 
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"} 
                  inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105`}
              >
                <span className="text-sm">{cat.emoji}</span>
                <span className="font-medium text-sm hidden sm:inline">{cat.label}</span>
                <span className="font-medium text-sm sm:hidden">{cat.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm">
              {searchTerm ? `Found ${filteredItems.length} items matching "${searchTerm}"` : 
               activeCategory === "All" ? `Showing all ${filteredItems.length} items` :
               `${filteredItems.length} items in ${activeCategory}`}
            </p>
          </div>
          
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="card-modern p-5 sm:p-6 hover-lift hover:bg-sage/5 ring-1 ring-transparent hover:ring-sage/20 transition-all duration-300 group">
                <div className="flex items-center gap-5 sm:gap-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{item.name}</h4>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-sage/10 text-sage text-sm font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categories.find(c => c.id === item.category)?.color || "bg-gray-100 text-gray-700"}`}>
                        {categories.find(c => c.id === item.category)?.emoji} {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your search or browse a different category.</p>
            </div>
          )}
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
              Browse Google reviews for our North Park location.
            </p>
          </div>
          <GoogleReviewsMarquee
            placeQuery="3257 W Bryn Mawr Ave, Chicago, IL 60659"
            reviewsUrl="https://maps.app.goo.gl/KokLqXZ9fW5ccEAk8"
          />
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/KokLqXZ9fW5ccEAk8"
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