"use client";

import React, { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

type InstagramPost = {
  id: string;
  url: string;
  alt: string;
};

// Instagram posts from @outdoorcafe_boba - replace with your actual recent post URLs
const samplePosts: InstagramPost[] = [
  {
    id: "1",
    url: "https://www.instagram.com/p/SAMPLE_POST_1/",
    alt: "Fresh boba tea and coffee at Outdoor Café"
  },
  {
    id: "2", 
    url: "https://www.instagram.com/p/SAMPLE_POST_2/",
    alt: "Colorful smoothies and boba drinks"
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/SAMPLE_POST_3/", 
    alt: "Outdoor café atmosphere and seating"
  },
  {
    id: "4",
    url: "https://www.instagram.com/p/SAMPLE_POST_4/",
    alt: "Delicious food and drink combinations"
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
                <div className="aspect-square relative">
                  <InstagramEmbed 
                    url={post.url}
                    width="100%"
                    height="100%"
                    className="instagram-embed-custom"
                  />
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