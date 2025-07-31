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
        ? "border-2 border-accent-solid text-accent-solid hover:bg-accent hover:text-white hover:border-accent shadow-warm" 
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

export default function Contact() {
  useScrollAnimation();

  return (
    <main className="w-full min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/shared.png" 
            alt="Let's Connect - Sharing Moments Together" 
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
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed-plus mb-12 sm:mb-16 text-shadow-soft px-4 text-balance">
              We'd love to hear from you. Visit us, call us, or drop us a line – we're here to make your day a little brighter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <SectionHeading className="mb-6 text-warm-dark">Let's Connect</SectionHeading>
            <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-8"></div>
            <SectionText className="max-w-3xl mx-auto text-xl">
              We'd love to hear from you! Contact us with any questions, feedback, or just to say hello.
            </SectionText>
          </div>
          
          <div className="card-modern p-8 sm:p-12 fade-in-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-solid focus:border-accent-solid transition-colors bg-white text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-solid focus:border-accent-solid transition-colors bg-white text-gray-900"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-solid focus:border-accent-solid transition-colors bg-white text-gray-900"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-solid focus:border-accent-solid transition-colors bg-white text-gray-900 resize-vertical"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-warm-light">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 fade-in-up">
            <SectionHeading className="mb-6 text-warm-dark">Find Us</SectionHeading>
            <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-8"></div>
            <SectionText className="max-w-3xl mx-auto text-xl">
              Visit us at either of our beautiful locations or get in touch for any questions.
            </SectionText>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="fade-in-left stagger-1">
              <div className="card-modern p-8 sm:p-10 text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent-solid/10 rounded-full flex items-center justify-center animate-pulse-warm">
                    <span className="text-3xl">📍</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">North Park Location</h4>
                <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-6"></div>
                
                <div className="space-y-4 text-gray-700 mb-6">
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Address</p>
                    <p className="text-base sm:text-lg">123 Michigan Avenue<br />North Park, IL 60601</p>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+13125550123" className="text-base sm:text-lg text-accent-solid hover:text-warm-dark transition-colors">
                      (312) 555-0123
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Email</p>
                    <a href="mailto:northpark@outdoorcafe.com" className="text-base sm:text-lg text-accent-solid hover:text-warm-dark transition-colors">
                      northpark@outdoorcafe.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Hours</p>
                    <p className="text-base sm:text-lg font-medium text-accent-solid">Monday - Sunday<br />7:00 AM - 8:00 PM</p>
                  </div>
                </div>
                
                <a 
                  href="https://maps.google.com/maps?q=123+Michigan+Avenue,+North+Park,+IL+60601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-accent-solid text-accent-solid hover:bg-accent-solid hover:text-white transition-all duration-300 rounded-full font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="fade-in-right stagger-2">
              <div className="card-modern p-8 sm:p-10 text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent-solid/10 rounded-full flex items-center justify-center animate-pulse-warm">
                    <span className="text-3xl">📍</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-light text-warm-dark mb-4">Evanston Location</h4>
                <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-6"></div>
                
                <div className="space-y-4 text-gray-700 mb-6">
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Address</p>
                    <p className="text-base sm:text-lg">456 Sherman Avenue<br />Evanston, IL 60201</p>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Phone</p>
                    <a href="tel:+18475550456" className="text-base sm:text-lg text-accent-solid hover:text-warm-dark transition-colors">
                      (847) 555-0456
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Email</p>
                    <a href="mailto:evanston@outdoorcafe.com" className="text-base sm:text-lg text-accent-solid hover:text-warm-dark transition-colors">
                      evanston@outdoorcafe.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-lg sm:text-xl font-medium text-gray-900 mb-1">Hours</p>
                    <p className="text-base sm:text-lg font-medium text-accent-solid">Monday - Sunday<br />6:30 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <a 
                  href="https://maps.google.com/maps?q=456+Sherman+Avenue,+Evanston,+IL+60201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-accent-solid text-accent-solid hover:bg-accent-solid hover:text-white transition-all duration-300 rounded-full font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Contact Information */}
          <div className="mt-16 sm:mt-20 fade-in-up">
            <div className="card-modern max-w-4xl mx-auto p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-light text-warm-dark mb-6 text-center">Additional Ways to Reach Us</h3>
              <div className="w-16 h-0.5 bg-accent-solid mx-auto rounded-full mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-accent-solid/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍰</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">Catering & Events</h4>
                  <a href="mailto:catering@outdoorcafe.com" className="text-accent-solid hover:text-warm-dark transition-colors font-medium">
                    catering@outdoorcafe.com
                  </a>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-accent-solid/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">General Inquiries</h4>
                  <a href="mailto:hello@outdoorcafe.com" className="text-accent-solid hover:text-warm-dark transition-colors font-medium">
                    hello@outdoorcafe.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center fade-in-up">
          <SectionHeading className="mb-8 text-warm-dark">
            Ready for Great <span className="text-accent-solid">COFFEE?</span>
          </SectionHeading>
          <div className="w-24 h-1 bg-accent-solid mx-auto rounded-full mb-8"></div>
          <SectionText className="mb-12 text-xl">
            Come visit us today and experience the warmth of our community.
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