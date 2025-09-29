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
    { id: "Matcha Specialties", label: "Matcha Specialties", emoji: "🍵", image: "/chowbus_menu_evanston_enhanced/matcha_specialties/002_matcha_latte_hot_or_iced.jpg" },
    { id: "Coffee & Espresso", label: "Coffee & Espresso", emoji: "☕", image: "/chowbus_menu_evanston_enhanced/coffee_espresso/045_latte_choose_your_fav.jpg" },
    { id: "Milk Tea & Boba", label: "Milk Tea & Boba", emoji: "🧋", image: "/chowbus_menu_evanston_enhanced/milk_tea_boba/007_signature_milk_tea.jpg" },
    { id: "Specialty Teas", label: "Specialty Teas", emoji: "🍃", image: "/chowbus_menu_evanston_enhanced/specialty_teas/030_loose_leaf_tea_choose_your_fav.jpg" },
    { id: "Smoothies & Drinks", label: "Smoothies & Drinks", emoji: "🥤", image: "/chowbus_menu_evanston_enhanced/smoothies_drinks/023_smoothies__boba_tea_choose_up_to_2_flavors.jpg" },
    { id: "Hot Beverages", label: "Hot Beverages", emoji: "☕", image: "/chowbus_menu_evanston_enhanced/hot_beverages/052_hot_cocoa.jpg" },
    { id: "Banh Mi Sandwiches", label: "Banh Mi Sandwiches", emoji: "🥖", image: "/chowbus_menu_evanston_enhanced/banh_mi_sandwiches/015_hampork__pate_banh_mi.jpg" },
    { id: "Spring Rolls", label: "Spring Rolls", emoji: "🌯", image: "/chowbus_menu_evanston_enhanced/spring_rolls/020_shrimp_spring_roll_peanut_sauce.jpg" },
    { id: "Salads & Light Food", label: "Salads & Light Food", emoji: "🥗", image: "/chowbus_menu_evanston_enhanced/salads_food/022_savory_salad.jpg" },
  ];

  // Group items by category
  const groupedMenu = categories.map(category => ({
    ...category,
    items: evanstonMenu.filter(item => item.category === category.id)
  })).filter(group => group.items.length > 0);
  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="py-10 sm:py-12 bg-warm-light relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-12 right-10 w-2 h-2 bg-accent-solid/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-16 w-1.5 h-1.5 bg-accent-solid/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-warm-dark leading-tight text-balance">
            Evanston Location
          </h1>
          <div className="w-20 h-1 bg-sage mx-auto rounded-full mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed text-balance">
            Outdoor dining surrounded by nature
          </p>
          <div className="mt-4">
            <p className="text-sm sm:text-base text-gray-600 font-light">
              2012 Central Street • Evanston, IL 60201
            </p>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="card-modern p-6 sm:p-8 hover-glow">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center animate-pulse-warm">
                  <span className="text-xl">🛒</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-warm-dark text-balance">
                Order Online for Pickup
              </h2>
              <div className="flex items-center justify-center space-x-4 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-sage rounded-full mr-2"></span>
                  Currently Open
                </span>
                <span>•</span>
                <span>Sun-Thu: 7AM-7PM • Fri-Sat: 7AM-9PM</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg
                    transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
                    bg-accent-solid text-white hover:bg-warm-dark shadow-warm-lg
                    border-2 border-accent-solid hover:border-warm-dark
                  "
                >
                  Order Now via ChowBus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-10 sm:py-12 bg-warm-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 text-warm-dark text-balance">
              Full Menu
            </h2>
            <div className="w-16 h-1 bg-sage mx-auto rounded-full"></div>
          </div>

          {/* Menu Grid - Masonry layout on desktop, single column on mobile */}
          <div className="columns-1 lg:columns-2 gap-8 lg:gap-12">
            {groupedMenu.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl shadow-warm overflow-hidden mb-8 lg:mb-12 break-inside-avoid">
                {/* Category Header with Image */}
                <div className="relative overflow-hidden">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
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
                <div className="p-4 sm:p-6 space-y-3">
                  {group.items.map((item) => (
                    <div key={item.id} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <h4 className="text-base font-medium text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-sm leading-snug">{item.description}</p>
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