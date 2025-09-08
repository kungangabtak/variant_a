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
  // Matcha Specialties
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    price: "$6.00",
    description: "Premium matcha with milk (hot or iced)",
    image: "/chowbus_menu_evanston/matcha_specialties/002_matcha_latte_hot_or_iced.jpg",
    category: "Matcha Specialties"
  },
  {
    id: "matcha-milk-tea",
    name: "Matcha Milk Tea",
    price: "$6.25",
    description: "Creamy matcha milk tea (hot or iced)",
    image: "/chowbus_menu_evanston/matcha_specialties/010_matcha_milk_tea_hot_or_iced.jpg",
    category: "Matcha Specialties"
  },
  {
    id: "strawberry-matcha-latte",
    name: "Strawberry Matcha Latte",
    price: "$6.50",
    description: "Refreshing iced matcha with sweet strawberry blend",
    image: "/chowbus_menu_evanston/matcha_specialties/005_strawberry_matcha_latte_iced.jpg",
    category: "Matcha Specialties"
  },
  {
    id: "mango-matcha-latte",
    name: "Mango Matcha Latte",
    price: "$6.50",
    description: "Tropical mango with premium matcha (iced)",
    image: "/chowbus_menu_evanston/matcha_specialties/012_mango_matcha_latte_iced.jpg",
    category: "Matcha Specialties"
  },
  {
    id: "mango-matcha-smoothie",
    name: "Mango Matcha Smoothie",
    price: "$6.75",
    description: "Mango mixed with matcha ice cream and powder",
    image: "/chowbus_menu_evanston/matcha_specialties/013_mango_matcha_smoothie.jpg",
    category: "Matcha Specialties"
  },
  {
    id: "matcha-frappe",
    name: "Matcha Frappe",
    price: "$6.50",
    description: "Blended iced matcha frappe with whipped cream",
    image: "/chowbus_menu_evanston/matcha_specialties/014_matcha_frappe.jpg",
    category: "Matcha Specialties"
  },

  // Coffee & Espresso
  {
    id: "house-blend",
    name: "House Blend",
    price: "$2.75",
    description: "Dark roast mixed blend coffee",
    image: "/chowbus_menu_evanston/coffee_espresso/037_house_blend.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    price: "$3.25",
    description: "Refreshing iced coffee with your choice of milks",
    image: "/chowbus_menu_evanston/coffee_espresso/038_iced_coffee.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "doppio",
    name: "Doppio (Double Espresso)",
    price: "$3.50",
    description: "Rich, bold double shot espresso",
    image: "/chowbus_menu_evanston/coffee_espresso/039_doppio_double_espressos.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "americano",
    name: "Americano",
    price: "$3.25",
    description: "Classic espresso with hot water",
    image: "/chowbus_menu_evanston/coffee_espresso/040_americano.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "cortado",
    name: "Cortado",
    price: "$4.25",
    description: "Equal parts espresso and warm steamed milk",
    image: "/chowbus_menu_evanston/coffee_espresso/041_cortado.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "vietnamese-iced-black-coffee",
    name: "Vietnamese Iced Black Coffee",
    price: "$4.50",
    description: "Strong Vietnamese coffee served over ice",
    image: "/chowbus_menu_evanston/coffee_espresso/042_vietnamese_iced_black_coffee.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "vietnamese-iced-milk-coffee",
    name: "Vietnamese Iced Milk Coffee (Cafe Sua Da)",
    price: "$5.25",
    description: "Vietnamese coffee with condensed milk over ice",
    image: "/chowbus_menu_evanston/coffee_espresso/004_vietnamese_iced_milk_coffee_cafe_sua_da.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    price: "$4.75",
    description: "Spiced chai tea with steamed milk",
    image: "/chowbus_menu_evanston/coffee_espresso/043_chai_latte.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "taro-latte",
    name: "Taro Latte",
    price: "$5.75",
    description: "Creamy taro with your choice of milks",
    image: "/chowbus_menu_evanston/coffee_espresso/044_taro_latte.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "latte",
    name: "Latte",
    price: "$4.75",
    description: "Smooth espresso with steamed milk",
    image: "/chowbus_menu_evanston/coffee_espresso/045_latte_choose_your_fav.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "pumpkin-spice-latte",
    name: "Pumpkin Spice Latte (Seasonal)",
    price: "$6.50",
    description: "Fall seasonal latte with pumpkin spice flavors",
    image: "/chowbus_menu_evanston/coffee_espresso/046_pumpkin_spice_latte_seasonal.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "peppermint-mocha-latte",
    name: "Peppermint Mocha Latte (Seasonal)",
    price: "$6.50",
    description: "Holiday seasonal mocha with peppermint",
    image: "/chowbus_menu_evanston/coffee_espresso/047_peppermint_mocha_latte_seasonal.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    price: "$5.25",
    description: "Espresso with vanilla and caramel drizzle",
    image: "/chowbus_menu_evanston/coffee_espresso/048_caramel_macchiato.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "iced-hazelnut-oat-milk-shaken-espresso",
    name: "Iced Hazelnut Oat Milk Shaken Espresso",
    price: "$5.75",
    description: "Shaken espresso with hazelnut and oat milk",
    image: "/chowbus_menu_evanston/coffee_espresso/050_iced_hazelnut_oat_milk_shaken_espresso.jpg",
    category: "Coffee & Espresso"
  },
  {
    id: "frappe",
    name: "Frappe",
    price: "$6.95",
    description: "Blended iced coffee frappe with whipped cream",
    image: "/chowbus_menu_evanston/coffee_espresso/051_frappe.jpg",
    category: "Coffee & Espresso"
  },

  // Milk Tea & Boba
  {
    id: "signature-milk-tea",
    name: "Signature Milk Tea",
    price: "$5.50",
    description: "Our signature blend with tapioca pearls",
    image: "/chowbus_menu_evanston/milk_tea_boba/007_signature_milk_tea.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "milk-tea",
    name: "Milk Tea",
    price: "$5.25",
    description: "Choose your favorite flavor with milk and toppings",
    image: "/chowbus_menu_evanston/milk_tea_boba/025_milk_tea_choose_your_fav.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "strawberry-milk-tea",
    name: "Strawberry Milk Tea",
    price: "$5.75",
    description: "Sweet strawberry flavored milk tea",
    image: "/chowbus_menu_evanston/milk_tea_boba/006_strawberry_milk_tea.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "brown-sugar-milk-tea",
    name: "Brown Sugar Milk Tea",
    price: "$6.25",
    description: "Rich brown sugar sweetened milk tea",
    image: "/chowbus_menu_evanston/milk_tea_boba/028_brown_sugar_milk_tea.jpg",
    category: "Milk Tea & Boba"
  },
  {
    id: "thai-iced-milk-tea",
    name: "Thai Iced Milk Tea",
    price: "$6.00",
    description: "Sweet Thai tea with milk and choice of toppings",
    image: "/chowbus_menu_evanston/milk_tea_boba/003_thai_iced_milk_tea.jpg",
    category: "Milk Tea & Boba"
  },

  // Specialty Teas
  {
    id: "loose-leaf-tea",
    name: "Loose Leaf Tea",
    price: "$4.75",
    description: "Choose your favorite premium loose leaf tea",
    image: "/chowbus_menu_evanston/specialty_teas/030_loose_leaf_tea_choose_your_fav.jpg",
    category: "Specialty Teas"
  },
  {
    id: "mango-green-tea",
    name: "Mango Green Tea (Iced)",
    price: "$5.50",
    description: "Refreshing green tea with mango flavor",
    image: "/chowbus_menu_evanston/specialty_teas/031_mango_green_tea_iced.jpg",
    category: "Specialty Teas"
  },
  {
    id: "honey-ginger-tea",
    name: "Honey Ginger Tea",
    price: "$5.25",
    description: "Soothing ginger tea with honey (hot or iced)",
    image: "/chowbus_menu_evanston/specialty_teas/033_honey_ginger_tea_hot_or_iced.jpg",
    category: "Specialty Teas"
  },
  {
    id: "passion-fruit-green-tea",
    name: "Passion Fruit Green Tea (Iced)",
    price: "$5.50",
    description: "Tropical passion fruit with green tea",
    image: "/chowbus_menu_evanston/specialty_teas/034_passion_fruit_green_tea_iced.jpg",
    category: "Specialty Teas"
  },
  {
    id: "strawberry-hibiscus-tea",
    name: "Strawberry Hibiscus Tea",
    price: "$5.25",
    description: "Floral hibiscus with strawberry (hot or iced)",
    image: "/chowbus_menu_evanston/specialty_teas/035_strawberry_hibiscus_tea_hot_or_iced.jpg",
    category: "Specialty Teas"
  },
  {
    id: "strawberry-kiwi-green-tea",
    name: "Strawberry Kiwi Green Tea (Iced)",
    price: "$5.50",
    description: "Refreshing green tea with strawberry and kiwi",
    image: "/chowbus_menu_evanston/specialty_teas/036_strawberry_kiwi_green_tea_iced.jpg",
    category: "Specialty Teas"
  },

  // Smoothies & Drinks
  {
    id: "smoothies-boba-tea",
    name: "Smoothies / Boba Tea",
    price: "$6.50",
    description: "Choose up to 2 flavors with ice blended and toppings",
    image: "/chowbus_menu_evanston/smoothies_drinks/023_smoothies__boba_tea_choose_up_to_2_flavors.jpg",
    category: "Smoothies & Drinks"
  },
  {
    id: "strawberry-fresh-milk",
    name: "Strawberry Fresh Milk",
    price: "$5.75",
    description: "Fresh strawberry with creamy milk",
    image: "/chowbus_menu_evanston/smoothies_drinks/026_strawberry_fresh_milk.jpg",
    category: "Smoothies & Drinks"
  },

  // Hot Beverages
  {
    id: "hot-cocoa",
    name: "Hot Cocoa",
    price: "$4.50",
    description: "Rich hot chocolate with your choice of milks",
    image: "/chowbus_menu_evanston/hot_beverages/052_hot_cocoa.jpg",
    category: "Hot Beverages"
  },
  {
    id: "hot-white-cocoa",
    name: "Hot White Cocoa",
    price: "$4.75",
    description: "Creamy white chocolate hot cocoa",
    image: "/chowbus_menu_evanston/hot_beverages/053_hot_white_cocoa.jpg",
    category: "Hot Beverages"
  },

  // Banh Mi Sandwiches
  {
    id: "ham-pork-pate-banh-mi",
    name: "Ham/Pork & Pate Banh Mi",
    price: "$8.75",
    description: "Ham & pork roll, pate, mayo, daikon, cucumber, jalapeño and cilantro",
    image: "/chowbus_menu_evanston/banh_mi_sandwiches/015_hampork__pate_banh_mi.jpg",
    category: "Banh Mi Sandwiches"
  },
  {
    id: "veggie-tofu-banh-mi",
    name: "Veggie Tofu Banh Mi",
    price: "$8.00",
    description: "Fresh tofu and vegetables with Vietnamese flavors",
    image: "/chowbus_menu_evanston/banh_mi_sandwiches/008_veggie_tofu_banh_mi.jpg",
    category: "Banh Mi Sandwiches"
  },
  {
    id: "chicken-banh-mi",
    name: "Chicken Banh Mi",
    price: "$8.75",
    description: "Grilled chicken with fresh herbs and vegetables",
    image: "/chowbus_menu_evanston/banh_mi_sandwiches/017_chicken_banh_mi.jpg",
    category: "Banh Mi Sandwiches"
  },
  {
    id: "grilled-pork-banh-mi",
    name: "Grilled Pork Banh Mi",
    price: "$8.75",
    description: "Marinated grilled pork with fresh accompaniments",
    image: "/chowbus_menu_evanston/banh_mi_sandwiches/018_grilled_pork_banh_mi.jpg",
    category: "Banh Mi Sandwiches"
  },

  // Spring Rolls
  {
    id: "shrimp-spring-roll",
    name: "Shrimp Spring Roll (Peanut Sauce)",
    price: "$7.75",
    description: "Fresh shrimp, lettuce, cucumber, cilantro in rice paper with peanut sauce",
    image: "/chowbus_menu_evanston/spring_rolls/020_shrimp_spring_roll_peanut_sauce.jpg",
    category: "Spring Rolls"
  },
  {
    id: "veggie-tofu-spring-roll",
    name: "Veggie Tofu Spring Roll (Peanut Sauce)",
    price: "$7.75",
    description: "Fresh tofu and vegetables in rice paper with peanut sauce",
    image: "/chowbus_menu_evanston/spring_rolls/019_veggie_tofu_spring_roll_peanut_sauce.jpg",
    category: "Spring Rolls"
  },
  {
    id: "grilled-pork-sausage-spring-roll",
    name: "Grilled Pork Sausage Spring Roll (Peanut Sauce)",
    price: "$7.95",
    description: "Grilled pork sausage with fresh herbs in rice paper",
    image: "/chowbus_menu_evanston/spring_rolls/021_grilled_pork_sausage_spring_roll_peanut_sauce.jpg",
    category: "Spring Rolls"
  },

  // Salads & Light Food
  {
    id: "savory-salad",
    name: "Savory Salad",
    price: "$8.50",
    description: "Fresh mixed greens with choice of protein and dressing",
    image: "/chowbus_menu_evanston/salads_food/022_savory_salad.jpg",
    category: "Salads & Light Food"
  }
];

export default function EvanstonMenuPage() {
  const categories = [
    { id: "Matcha Specialties", label: "Matcha Specialties", emoji: "🍵", color: "bg-green-100 text-green-800 border-green-200" },
    { id: "Coffee & Espresso", label: "Coffee & Espresso", emoji: "☕", color: "bg-amber-100 text-amber-800 border-amber-200" },
    { id: "Milk Tea & Boba", label: "Milk Tea & Boba", emoji: "🧋", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { id: "Specialty Teas", label: "Specialty Teas", emoji: "🍃", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { id: "Smoothies & Drinks", label: "Smoothies & Drinks", emoji: "🥤", color: "bg-pink-100 text-pink-800 border-pink-200" },
    { id: "Hot Beverages", label: "Hot Beverages", emoji: "☕", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { id: "Banh Mi Sandwiches", label: "Banh Mi Sandwiches", emoji: "🥖", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { id: "Spring Rolls", label: "Spring Rolls", emoji: "🥗", color: "bg-red-100 text-red-800 border-red-200" },
    { id: "Salads & Light Food", label: "Salads & Light Food", emoji: "🥗", color: "bg-blue-100 text-blue-800 border-blue-200" },
  ];

  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems = evanstonMenu.filter(item => 
    (activeCategory === "All" || item.category === activeCategory) &&
    (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
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
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-warm-dark text-balance">
              Evanston Full Menu
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