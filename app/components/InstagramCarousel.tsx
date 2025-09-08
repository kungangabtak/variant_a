"use client";

import React, { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

type InstagramPost = {
  id: string;
  url: string;
  alt: string;
};

// Instagram posts from @outdoorcafe_boba - replace with your actual recent post URLs
// For now, using placeholder images until real Instagram posts are available
const samplePosts: InstagramPost[] = [
  {
    id: "1",
    url: "https://www.instagram.com/p/placeholder1/",
    alt: "Fresh matcha latte with beautiful foam art and boba pearls"
  },
  {
    id: "2", 
    url: "https://www.instagram.com/p/placeholder2/",
    alt: "Colorful boba tea varieties on our outdoor patio"
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/placeholder3/", 
    alt: "Cozy outdoor seating area with customers enjoying coffee"
  },
  {
    id: "4",
    url: "https://www.instagram.com/p/placeholder4/",
    alt: "Fresh Vietnamese Banh Mi with seasonal ingredients"
  },
  {
    id: "5",
    url: "https://www.instagram.com/p/placeholder5/",
    alt: "Morning coffee setup with pastries and natural lighting"
  },
  {
    id: "6",
    url: "https://www.instagram.com/p/placeholder6/",
    alt: "Happy customers enjoying smoothies in our North Park location"
  }
];

interface InstagramCarouselProps {
  posts?: InstagramPost[];
  className?: string;
}

const InstagramCarousel: React.FC<InstagramCarouselProps> = ({ 
  posts = samplePosts,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [postsPerView, setPostsPerView] = useState(3);

  // Responsive posts per view
  useEffect(() => {
    const updatePostsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPostsPerView(1); // Mobile
      } else if (width < 1024) {
        setPostsPerView(2); // Tablet
      } else {
        setPostsPerView(3); // Desktop
      }
    };

    updatePostsPerView();
    window.addEventListener('resize', updatePostsPerView);
    return () => window.removeEventListener('resize', updatePostsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const maxIndex = Math.max(0, posts.length - postsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, posts.length, postsPerView]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, posts.length - postsPerView);
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, posts.length - postsPerView);
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const totalDots = Math.max(1, posts.length - postsPerView + 1);

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-warm"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / postsPerView)}%)`,
            width: `${(posts.length / postsPerView) * 100}%`
          }}
        >
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / posts.length}%` }}
            >
              <div className="card-modern overflow-hidden hover-lift">
                <div className="aspect-square relative bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-lg">
                  {/* Instagram-style placeholder until real posts are connected */}
                  <div className="absolute inset-0 bg-black/10 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <p className="text-xs font-medium opacity-90">{post.alt}</p>
                      <p className="text-xs opacity-60 mt-1">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                   w-12 h-12 bg-white/90 hover:bg-white rounded-full 
                   shadow-warm hover:shadow-warm-lg transition-all duration-300
                   flex items-center justify-center text-accent-solid hover:text-warm-dark
                   hover:scale-105 group"
        aria-label="Previous posts"
      >
        <svg 
          className="w-5 h-5 group-hover:scale-110 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                   w-12 h-12 bg-white/90 hover:bg-white rounded-full 
                   shadow-warm hover:shadow-warm-lg transition-all duration-300
                   flex items-center justify-center text-accent-solid hover:text-warm-dark
                   hover:scale-105 group"
        aria-label="Next posts"
      >
        <svg 
          className="w-5 h-5 group-hover:scale-110 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      {totalDots > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index
                  ? "bg-accent-solid shadow-warm"
                  : "bg-accent-solid/30 hover:bg-accent-solid/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`w-8 h-8 rounded-full transition-all duration-300 ${
            isAutoPlaying 
              ? "bg-accent-solid/20 text-accent-solid" 
              : "bg-gray-200/80 text-gray-500"
          } hover:scale-110 flex items-center justify-center`}
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoPlaying ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default InstagramCarousel;