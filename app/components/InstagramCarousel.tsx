"use client";

import React, { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

type InstagramPost = {
  id: string;
  url: string;
  alt: string;
};

// Instagram posts from @outdoorcafe_boba
const samplePosts: InstagramPost[] = [
  {
    id: "1",
    url: "https://www.instagram.com/p/DMGWYotu5--/",
    alt: "Outdoor Café - Coffee and vibes"
  },
  {
    id: "2",
    url: "https://www.instagram.com/p/DLYSLCPucDr/",
    alt: "Fresh drinks at Outdoor Café"
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/DLBOU22u9M9/",
    alt: "Delicious treats from our café"
  },
  {
    id: "4",
    url: "https://www.instagram.com/outdoorcafe_boba/reel/DO4ryThjChh/",
    alt: "Behind the scenes at Outdoor Café"
  },
  {
    id: "5",
    url: "https://www.instagram.com/outdoorcafe_boba/p/DO4rn5cDJu_/",
    alt: "Fresh coffee and good times"
  },
  {
    id: "6",
    url: "https://www.instagram.com/outdoorcafe_boba/p/DOoc1VWDh8Y/",
    alt: "The Outdoor Café experience"
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
  // Limit to 6 posts maximum
  const limitedPosts = posts.slice(0, 6);

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

  // Calculate max index to prevent empty slides
  // With 6 posts and 3 per view, we should only slide 3 times (showing posts 0-2, 1-3, 2-4, 3-5)
  const maxIndex = Math.max(0, limitedPosts.length - postsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        // Only go up to maxIndex, not beyond
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const totalDots = maxIndex + 1;

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className="relative overflow-visible rounded-2xl py-6">
        <div
          className="flex transition-transform duration-500 ease-warm"
          style={{
            transform: `translateX(-${currentIndex * (100 / postsPerView)}%)`,
            width: `100%`
          }}
        >
          {limitedPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / postsPerView}%` }}
            >
              <div className="overflow-hidden rounded-xl shadow-warm hover-lift bg-white">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramEmbed
                    url={post.url}
                    width="100%"
                    captioned={false}
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