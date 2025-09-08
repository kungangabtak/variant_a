"use client";

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      // Focus the panel for accessibility and keyboard trapping
      setTimeout(() => panelRef.current?.focus(), 0);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-enhanced border-b border-gray-200 py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-12 grid grid-cols-[1fr_auto_1fr] items-center font-rounded shadow-sm">
      {/* Left group: mobile menu button + left links */}
      <div className="flex items-center justify-self-start lg:justify-self-center gap-6 sm:gap-10 lg:gap-16">
        <div className="lg:hidden">
          <button
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="text-gray-700 hover:text-sage transition-all duration-300 hover:scale-110 touch-target"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <a href="/locations/chicago" className="hidden lg:block text-gray-800 hover:text-sage font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">North Park</a>
        <a href="/locations/evanston" className="hidden lg:block text-gray-800 hover:text-sage font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">Evanston</a>
      </div>

      {/* Center brand: always perfectly centered */}
      <a href="/" className="justify-self-center self-stretch flex items-center whitespace-nowrap leading-none text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-accent tracking-tight hover:text-gray-800 transition-all duration-300 px-4 sm:px-6 hover:scale-105">
        Outdoor Café
      </a>

      {/* Right group: right-side links */}
      <div className="hidden lg:flex items-center lg:justify-self-center gap-6 sm:gap-10 lg:gap-16">
        <a href="/about" className="text-gray-800 hover:text-sage font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">About</a>
        <a href="/contact" className="text-gray-800 hover:text-sage font-medium text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105">Contact</a>
        <a href="#order" className="bg-sage text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-warm-dark transition-all duration-300 hover:scale-105 shadow-warm btn-warm">Order Now</a>
      </div>

      {/* Mobile Menu Overlay (rendered in a portal to escape stacking contexts) */}
      {isMounted && isMobileMenuOpen && createPortal(
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeMenu();
          }}
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl outline-none transform transition-transform duration-300 ease-out translate-x-[-100%] will-change-transform"
            onClick={(e) => e.stopPropagation()}
            // Trigger slide-in on mount via CSS trick
            style={{ transform: 'translateX(0%)' }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif font-bold text-accent">Menu</h2>
                <button
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-sage transition-all duration-300 hover:scale-110 touch-target"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-2">
                <a
                  href="/"
                  className="block rounded-lg px-4 py-3 text-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a
                  href="/locations/chicago"
                  className="block rounded-lg px-4 py-3 text-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  North Park
                </a>
                <a
                  href="/locations/evanston"
                  className="block rounded-lg px-4 py-3 text-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  Evanston
                </a>
                <a
                  href="/about"
                  className="block rounded-lg px-4 py-3 text-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block rounded-lg px-4 py-3 text-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  Contact
                </a>
                <a
                  href="#order"
                  className="block rounded-lg px-4 py-3 text-lg text-white bg-sage hover:bg-warm-dark transition-colors font-medium mt-4"
                  onClick={closeMenu}
                >
                  Order Now
                </a>
              </nav>
            </div>
          </div>
        </div>,
        document.body
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
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Get in Touch</h4>
                <div className="space-y-2 text-gray-300 font-light">
                  <a href="tel:+17735396078" className="block hover:text-sage transition-colors" aria-label="Call North Park at 773 539 6078">North Park: (773) 539-6078</a>
                  <a href="tel:+18474250022" className="block hover:text-sage transition-colors" aria-label="Call Evanston at 847 425 0022">Evanston: (847) 425-0022</a>
                </div>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide mb-3 sm:mb-4">Navigation</h4>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Home</Link>
                  <Link href="/locations/chicago" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">North Park</Link>
                  <Link href="/locations/evanston" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Evanston</Link>
                  <Link href="/menu" className="block text-gray-300 font-light hover:text-white transition-colors text-sm sm:text-base">Menu</Link>
                </div>
              </div>
            </div>
            
            <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">© 2024 Outdoor Café</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 