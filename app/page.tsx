"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import InstagramCarousel from "./components/InstagramCarousel";

// Enhanced reusable components
const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight leading-tight text-balance ${className}`}>
    {children}
  </h3>
);

const SectionText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-lg sm:text-xl leading-relaxed-plus text-gray-700 text-balance ${className}`}>
    {children}
  </p>
);

const Button = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <Link 
    href={href} 
    className={`
      inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg 
      transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
      ${variant === "primary" 
        ? "border-2 border-sage text-sage hover:bg-sage hover:text-white hover:border-sage shadow-warm" 
        : "border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-warm-lg"
      }
    `}
  >
    {children}
  </Link>
);

const LocationCard = ({ href, image, title }: { href: string; image: string; title: string }) => (
  <Link href={href} className="group block">
    <div className="relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 transform hover:scale-[1.03] hover-glow">
      <img 
        src={image} 
        alt={`${title} Location`} 
        className="w-full h-72 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 img-warm-filter" 
      />
      <div className="absolute inset-0 gradient-warm flex items-end justify-center pb-8">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300 text-shadow-warm">
          {title}
        </h3>
      </div>
      {/* Floating accent element */}
      <div className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
    </div>
  </Link>
);

const ContactCard = ({ location, address, phone, email, hours }: {
  location: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}) => (
  <div className="card-modern p-8 sm:p-10 hover-gentle">
    <div className="text-center mb-8">
      <h4 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3 text-warm-dark">{location}</h4>
      <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full"></div>
    </div>
    
    <div className="space-y-6">
      <div className="flex items-start space-x-4 group">
        <div className="text-accent-solid mt-1 group-hover:scale-110 transition-transform duration-200 text-xl">📍</div>
        <div>
          <p className="text-gray-900 font-medium text-base sm:text-lg mb-1">Address</p>
          <p className="text-gray-600 font-light text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: address }}></p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4 group">
        <div className="text-accent-solid mt-1 group-hover:scale-110 transition-transform duration-200 text-xl">📞</div>
        <div>
          <p className="text-gray-900 font-medium text-base sm:text-lg mb-1">Phone</p>
          <p className="text-gray-600 font-light text-base sm:text-lg hover:text-sage transition-colors cursor-pointer">{phone}</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4 group">
        <div className="text-accent-solid mt-1 group-hover:scale-110 transition-transform duration-200 text-xl">✉️</div>
        <div>
          <p className="text-gray-900 font-medium text-base sm:text-lg mb-1">Email</p>
          <p className="text-gray-600 font-light text-base sm:text-lg hover:text-sage transition-colors cursor-pointer">{email}</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4 group">
        <div className="text-accent-solid mt-1 group-hover:scale-110 transition-transform duration-200 text-xl">🕒</div>
        <div>
          <p className="text-gray-900 font-medium text-base sm:text-lg mb-1">Hours</p>
          <p className="text-gray-600 font-light text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: hours }}></p>
        </div>
      </div>
    </div>
  </div>
);

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default function Home() {
  useScrollAnimation();

  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/patio-hero.png" 
            alt="Outdoor Café Patio Ambiance" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="animate-gentle">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/Logo-Flat.png" 
                alt="Outdoor Café Logo" 
                className="h-16 sm:h-20 md:h-24 mx-auto drop-shadow-lg"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight text-shadow-warm text-balance">
              Your Neighborhood Cafe
            </h1>
            
            {/* Supportive text */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-12 max-w-4xl mx-auto leading-relaxed text-shadow-warm text-balance">
              Cozy and comfortable, there's room for everyone at Outdoor Café
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-pulse-warm">
              <a 
                href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe/20978"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg 
                  transition-all duration-300 hover:scale-105 btn-warm hover-glow !rounded-full
                  bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl
                  active:!rounded-full focus:!rounded-full focus-visible:!rounded-full
                "
              >
                Order from North Park
              </a>
              <a 
                href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe-Evanston/22091"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg 
                  transition-all duration-300 hover:scale-105 btn-warm hover-glow !rounded-full
                  bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl
                  active:!rounded-full focus:!rounded-full focus-visible:!rounded-full
                "
              >
                Order from Evanston
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <SectionHeading className="mb-4 text-warm-dark">Why Choose Outdoor Café?</SectionHeading>
            <div className="w-16 h-1 bg-sage mx-auto rounded-full mb-6"></div>
            <SectionText className="max-w-3xl mx-auto">
              More than just coffee—we're your neighborhood gathering place where fresh ingredients, warm hospitality, and outdoor vibes come together.
            </SectionText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center fade-in-up stagger-1">
              <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Fresh Roasted Daily</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium coffee beans roasted to perfection, ensuring every cup delivers that perfect aroma and flavor you crave.
              </p>
            </div>

            <div className="text-center fade-in-up stagger-2">
              <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Garden-Fresh Ingredients</h3>
              <p className="text-gray-600 leading-relaxed">
                From our signature boba teas to Vietnamese Banh Mi, we use only the freshest ingredients sourced locally whenever possible.
              </p>
            </div>

            <div className="text-center fade-in-up stagger-3">
              <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🪴</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Outdoor Oasis</h3>
              <p className="text-gray-600 leading-relaxed">
                Escape the hustle with our comfortable outdoor seating—perfect for meetings, studying, or just enjoying life at a slower pace.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 fade-in-up stagger-4">
            <Button href="/menu" variant="primary">Explore Our Menu</Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 sm:py-28 md:py-36 bg-warm-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-left mb-12 sm:mb-16 fade-in-up">
            <div className="max-w-2xl">
              <SectionHeading className="mb-4 text-warm-dark">Find Us Around Town</SectionHeading>
              <div className="w-16 h-1 bg-sage rounded-full mb-6"></div>
              <SectionText className="text-lg">
                Two spots, same vibes. Whether you're in North Park hustling or chilling in Evanston, we've got your back.
              </SectionText>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <div className="fade-in-left stagger-1">
              <LocationCard href="/locations/chicago" image="/chicago.jpg" title="North Park" />
            </div>
            <div className="fade-in-right stagger-2">
              <LocationCard href="/locations/evanston" image="/evanston.jpg" title="Evanston" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 sm:py-28 md:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <SectionHeading className="mb-4 text-warm-dark">
              Follow Our Journey
            </SectionHeading>
            <div className="w-16 h-1 bg-accent-solid mx-auto rounded-full mb-6"></div>
            <SectionText className="text-lg max-w-2xl mx-auto">
              See what's brewing at both locations and get inspired by our daily coffee culture
            </SectionText>
          </div>
          
          <div className="fade-in-up">
            <InstagramCarousel />
          </div>
          
          <div className="text-center mt-12 fade-in-up stagger-1">
            <a 
              href="https://instagram.com/outdoorcafe_boba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent-solid hover:text-warm-dark 
                         transition-all duration-300 hover:scale-105 font-medium text-lg
                         bg-white px-8 py-4 rounded-full shadow-warm hover:shadow-warm-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @outdoorcafe_boba</span>
            </a>
          </div>
        </div>
      </section>

      {/* Community Vibes Section */}
      <section className="py-20 sm:py-28 md:py-40 bg-warm-solid">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-warm transform -rotate-1 scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative transform rotate-2">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-warm-lg hover-lift">
                    <img 
                      src="/shared.png" 
                      alt="Good times at the cafe" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 img-warm-filter"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent-solid/30 rounded-full animate-pulse-warm"></div>
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-warm-light rounded-full animate-float"></div>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  This is where the magic happens ✨
                </h3>
                <div className="w-20 h-1 bg-sage rounded-full"></div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg sm:text-xl font-medium text-accent-solid">
                    Real talk: we're basically your neighborhood hangout that happens to serve really good food.
                  </p>
                  <p className="text-base sm:text-lg">
                    You know that feeling when you walk into a place and immediately feel at home? That's what we're going for here. Whether you're cramming for finals, catching up with an old friend, or just need somewhere to sit with your thoughts and a really good cup of coffee.
                  </p>
                  <p className="text-base sm:text-lg">
                    We've got outdoor seating when the weather's nice, cozy spots inside when it's not, and WiFi that actually works when you need to pretend you're being productive.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    P.S. We're also working on a "pay it forward" program because, you know, good vibes should be contagious 💚
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 sm:py-32 md:py-40 bg-warm-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 fade-in-up">
            <SectionHeading className="mb-6 text-warm-dark">Find Us</SectionHeading>
            <div className="w-24 h-1 bg-sage mx-auto rounded-full mb-8"></div>
            <SectionText className="max-w-4xl mx-auto text-xl">
              Visit us at either of our beautiful locations. Tap to open directions in Google Maps and find us easily.
            </SectionText>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
            <div className="fade-in-left stagger-1">
              <a 
                href="https://maps.google.com/maps?q=3257+W+Bryn+Mawr+Ave,+Chicago,+IL+60659"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="card-modern p-8 sm:p-10 hover-lift text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-warm">
                      <span className="text-3xl">📍</span>
                    </div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">North Park Location</h4>
                  <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-6"></div>
                  <div className="space-y-3 text-gray-700">
                    <p className="text-lg sm:text-xl font-medium">3257 W Bryn Mawr Ave</p>
                    <p className="text-base sm:text-lg">Chicago, IL 60659</p>
                    <p className="text-base sm:text-lg font-medium text-accent-solid">Mon-Thu: 8AM-8PM<br />Fri-Sun: 8AM-9PM</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-sage/20">
                    <p className="text-accent-solid font-medium group-hover:text-warm-dark transition-colors">
                      Open in Google Maps →
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="fade-in-right stagger-2">
              <a 
                href="https://maps.google.com/maps?q=456+Sherman+Avenue,+Evanston,+IL+60201"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="card-modern p-8 sm:p-10 hover-lift text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-warm">
                      <span className="text-3xl">📍</span>
                    </div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">Evanston Location</h4>
                  <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-6"></div>
                  <div className="space-y-3 text-gray-700">
                    <p className="text-lg sm:text-xl font-medium">456 Sherman Avenue</p>
                    <p className="text-base sm:text-lg">Evanston, IL 60201</p>
                    <p className="text-base sm:text-lg font-medium text-accent-solid">Sun-Thu: 7AM-7PM<br />Fri-Sat: 7AM-9PM</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-sage/20">
                    <p className="text-accent-solid font-medium group-hover:text-warm-dark transition-colors">
                      Open in Google Maps →
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Home page Get in Touch section removed per request */}
        </div>
      </section>

      {/* Footer removed; now rendered globally in RootLayout */}
    </main>
  );
} 