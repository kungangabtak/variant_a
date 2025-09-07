"use client";

import React, { useEffect } from "react";
import Link from "next/link";

// Enhanced reusable components (matching the main page)
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

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default function About() {
  useScrollAnimation();

  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/espresso.jpg" 
            alt="Our Story - Coffee Culture" 
            className="w-full h-full object-cover img-warm-filter"
            loading="eager"
          />
          <div className="absolute inset-0 gradient-warm"></div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="animate-gentle">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 sm:mb-12 text-white leading-tight text-shadow-warm text-balance">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed-plus mb-12 sm:mb-16 text-shadow-soft px-4 text-balance">
              More than just a café, we're a community of coffee lovers, dreamers, and friends who believe that every cup tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center fade-in-up">
            <SectionHeading className="mb-8 text-warm-dark">
              Coffee, Community & <span className="text-accent-solid">CRAFT</span>
            </SectionHeading>
            <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-12"></div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <SectionText className="text-xl">
                Founded in 2018 by two passionate food and beverage enthusiasts, Outdoor Café was born from a simple dream: to create spaces where aromatic coffee, refreshing smoothies, delicious boba tea, and flavorful Banh Mi meet genuine community.
              </SectionText>
              
              <SectionText>
                We source our coffee beans directly from sustainable farms and craft each item with care, ensuring every aromatic coffee, refreshing smoothie, delicious boba tea, and flavorful Banh Mi reflects our commitment to quality, sustainability, and the belief that great food and drinks bring people together.
              </SectionText>
              
              <SectionText className="font-medium text-accent-solid text-xl">
                "We wanted to create more than just a café – we wanted to build a home away from home for our community."
              </SectionText>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 sm:py-32 bg-warm-light">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center fade-in-up">
          <SectionHeading className="mb-8 text-warm-dark">
            Visit Our <span className="text-accent-solid">LOCATIONS</span>
          </SectionHeading>
          <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-8"></div>
          <SectionText className="mb-12 text-xl">
            Come experience our carefully crafted coffee and welcoming atmosphere.
          </SectionText>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button href="/locations/chicago">Visit North Park</Button>
            <Button href="/locations/evanston">Visit Evanston</Button>
          </div>
        </div>
      </section>
    </main>
  );
} 