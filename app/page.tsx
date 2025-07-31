"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

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
        ? "border-2 border-accent-solid text-accent-solid hover:bg-accent hover:text-white hover:border-accent shadow-warm" 
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
          <p className="text-gray-600 font-light text-base sm:text-lg hover:text-accent-solid transition-colors cursor-pointer">{phone}</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4 group">
        <div className="text-accent-solid mt-1 group-hover:scale-110 transition-transform duration-200 text-xl">✉️</div>
        <div>
          <p className="text-gray-900 font-medium text-base sm:text-lg mb-1">Email</p>
          <p className="text-gray-600 font-light text-base sm:text-lg hover:text-accent-solid transition-colors cursor-pointer">{email}</p>
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
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="animate-gentle">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-12 text-white leading-tight text-shadow-warm text-balance">
              Cozy Up in the Café
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-pulse-warm">
              <a 
                href="https://pos.chowbus.com/online-ordering/store/Outdoor-Cafe/20978"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block px-8 sm:px-10 py-4 sm:py-5 font-medium text-base sm:text-lg 
                  transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
                  bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl
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
                  transition-all duration-300 hover:scale-105 btn-warm hover-glow rounded-full
                  bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl
                "
              >
                Order from Evanston
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 sm:py-28 md:py-36 bg-warm-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-left mb-12 sm:mb-16 fade-in-up">
            <div className="max-w-2xl">
              <SectionHeading className="mb-4 text-warm-dark">Find Us Around Town</SectionHeading>
              <div className="w-16 h-1 bg-accent-solid rounded-full mb-6"></div>
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

      {/* Goodies to Go Section */}
      <section className="py-20 sm:py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 fade-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-warm-lg hover-lift transform rotate-1">
                <img 
                  src="/matcha-latte.png" 
                  alt="Matcha Latte" 
                  className="w-full h-80 sm:h-96 md:h-[550px] lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105 img-warm-filter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/40 rounded-full animate-float"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 fade-in-right">
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-warm-dark mb-3 leading-tight">
                  Need us to cater your thing?
                </h3>
                <div className="w-16 h-1 bg-accent-solid rounded-full mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Office meeting? Birthday party? Study group that's gotten way out of hand?
                </p>
                <p className="text-lg sm:text-xl leading-relaxed">
                  We'll hook you up with all the good stuff — <span className="font-medium text-accent-solid">fresh coffee that doesn't taste like it came from a gas station, smoothies that actually have fruit in them, boba tea that'll make you forget your troubles, and Banh Mi that'll have everyone asking where you got it.</span>
                </p>
                <p className="text-base text-gray-600 italic">
                  *We promise not to judge your meeting snack budget 😉
                </p>
              </div>
              <div className="pt-2">
                <Button href="/catering">Let's Talk Catering</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-warm-solid">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            <div className="space-y-8 sm:space-y-10 fade-in-left">
              <SectionHeading className="text-warm-dark">
                <span className="text-green-700">SUSTAINABILITY</span>
              </SectionHeading>
              <div className="w-20 h-1 bg-green-600 rounded-full"></div>
              <div className="space-y-6">
                <SectionText className="text-xl">
                  Sustainability that's the way we roll... For the environment, for our community, for our employees, for the entire supply chain, nearly everything we serve is compostable.
                </SectionText>
                <div className="flex items-center space-x-6 py-4">
                  <span className="text-3xl animate-float">♻️</span>
                  <span className="text-3xl animate-float" style={{animationDelay: '1s'}}>🌱</span>
                  <span className="text-3xl animate-float" style={{animationDelay: '2s'}}>🌍</span>
                  <span className="font-medium text-green-700 text-lg">Compostable packaging</span>
                </div>
                <SectionText>
                  We proud to offer our employees a living wage, and good benefits too. That's the essence of Specialty coffee... from seed to cup, the entire supply chain, and why we believe is thrival for all.
                </SectionText>
              </div>
            </div>
            
            <div className="fade-in-right">
              <div className="relative overflow-hidden rounded-3xl shadow-warm-lg hover-lift">
                <img 
                  src="/sustainable.png" 
                  alt="Sustainable Coffee" 
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105 img-warm-filter"
                />
                <div className="absolute top-6 right-6 w-3 h-3 bg-green-400/60 rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Vibes Section */}
      <section className="py-20 sm:py-28 md:py-40 bg-cream">
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
                <div className="w-20 h-1 bg-accent-solid rounded-full"></div>
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
            <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-8"></div>
            <SectionText className="max-w-4xl mx-auto text-xl">
              Visit us at either of our beautiful locations. Tap to open directions in Google Maps and find us easily.
            </SectionText>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
            <div className="fade-in-left stagger-1">
              <a 
                href="https://maps.google.com/maps?q=123+Michigan+Avenue,+North+Park,+IL+60601"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="card-modern p-8 sm:p-10 hover-lift text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-accent-solid/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-warm">
                      <span className="text-3xl">📍</span>
                    </div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">North Park Location</h4>
                  <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-6"></div>
                  <div className="space-y-3 text-gray-700">
                    <p className="text-lg sm:text-xl font-medium">123 Michigan Avenue</p>
                    <p className="text-base sm:text-lg">North Park, IL 60601</p>
                    <p className="text-base sm:text-lg font-medium text-accent-solid">7:00 AM - 8:00 PM</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-accent-solid/20">
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
                    <div className="w-16 h-16 bg-accent-solid/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-warm">
                      <span className="text-3xl">📍</span>
                    </div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">Evanston Location</h4>
                  <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-6"></div>
                  <div className="space-y-3 text-gray-700">
                    <p className="text-lg sm:text-xl font-medium">456 Sherman Avenue</p>
                    <p className="text-base sm:text-lg">Evanston, IL 60201</p>
                    <p className="text-base sm:text-lg font-medium text-accent-solid">6:30 AM - 9:00 PM</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-accent-solid/20">
                    <p className="text-accent-solid font-medium group-hover:text-warm-dark transition-colors">
                      Open in Google Maps →
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-16 sm:mt-20 fade-in-up stagger-3">
            <div className="card-modern max-w-4xl mx-auto p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-light text-warm-dark mb-6">Get in Touch</h3>
              <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-8"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-gray-900">North Park</h4>
                  <p className="text-gray-600">📞 (312) 555-0123</p>
                  <p className="text-gray-600">✉️ northpark@outdoorcafe.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-gray-900">Evanston</h4>
                  <p className="text-gray-600">📞 (847) 555-0456</p>
                  <p className="text-gray-600">✉️ evanston@outdoorcafe.com</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-accent-solid/20">
                <p className="text-gray-700 font-light text-lg sm:text-xl">
                  For catering inquiries: <span className="text-accent-solid hover:text-warm-dark transition-colors cursor-pointer font-medium">catering@outdoorcafe.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Get in Touch</h4>
              <div className="space-y-2 text-gray-300 font-light">
                <p>123 Main Street</p>
                <p>City, State</p>
                <p className="hover:text-accent transition-colors">hello@outdoorcafe.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide mb-3 sm:mb-4">Hours</h4>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-300 font-light text-sm sm:text-base">Every Day</td>
                    <td className="py-1 text-gray-300 font-light text-right text-sm sm:text-base">8am–6pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide mb-3 sm:mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Home</Link>
                <Link href="/locations" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Locations</Link>
                <Link href="/menu" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Menu</Link>
              </div>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">© 2024 Outdoor Café</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 