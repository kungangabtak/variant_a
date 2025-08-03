"use client";

import React, { useState } from 'react';
import './globals.css';
import type { ReactNode } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-enhanced border-b border-gray-200 py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-12 flex items-center justify-center font-rounded shadow-sm">
      {/* Mobile Menu Button */}
      <div className="lg:hidden absolute left-6">
        <button 
          className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110 touch-target"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Center Logo */}
      <div className="flex items-center space-x-6 sm:space-x-10 lg:space-x-16">
        <a href="/locations/chicago" className="hidden sm:block text-gray-600 hover:text-accent font-light text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">North Park</a>
        <a href="/locations/evanston" className="hidden sm:block text-gray-600 hover:text-accent font-light text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">Evanston</a>
        
        <a href="/" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-accent tracking-tight hover:text-gray-800 transition-all duration-300 px-4 sm:px-6 hover:scale-105">
          Outdoor Café
        </a>
        
        <a href="/about" className="hidden sm:block text-gray-600 hover:text-accent font-light text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">About</a>
        <a href="/contact" className="hidden sm:block text-gray-600 hover:text-accent font-light text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">Contact</a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-72 h-full bg-white shadow-xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-serif font-bold text-accent">Menu</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110 touch-target"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                <a 
                  href="/" 
                  className="block text-gray-600 hover:text-accent font-light text-xl transition-all duration-300 py-3 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                                        href="/locations/chicago"
                      className="block text-gray-600 hover:text-accent font-light text-xl transition-all duration-300 py-3 hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      North Park
                </a>
                <a 
                  href="/locations/evanston" 
                  className="block text-gray-600 hover:text-accent font-light text-xl transition-all duration-300 py-3 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Evanston
                </a>
                <a 
                  href="/about" 
                  className="block text-gray-600 hover:text-accent font-light text-xl transition-all duration-300 py-3 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/contact" 
                  className="block text-gray-600 hover:text-accent font-light text-xl transition-all duration-300 py-3 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Outdoor Café</title>
        <meta name="description" content="Cozy outdoor café with aromatic coffee, refreshing smoothies, delicious boba tea, and flavorful Banh Mi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="bg-white text-gray-900 font-serif min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full mx-auto">{children}</main>
      </body>
    </html>
  );
} 