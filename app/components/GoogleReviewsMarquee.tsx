"use client";

import React, { useEffect, useState } from "react";

type GoogleReviewsMarqueeProps = {
  placeQuery: string;
  reviewsUrl: string;
};

type Review = {
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

export default function GoogleReviewsMarquee({ placeQuery, reviewsUrl }: GoogleReviewsMarqueeProps) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchReviews = async () => {
      try {
        const params = new URLSearchParams({ placeQuery, max: '16' });
        const res = await fetch(`/api/reviews?${params.toString()}`, { cache: 'no-store' });
        const data = await res.json();
        if (isMounted && Array.isArray(data?.reviews)) {
          setReviews(data.reviews);
        }
      } catch (e) {
        // Silently fail; component will simply render nothing
      }
    };
    fetchReviews();
    return () => { isMounted = false; };
  }, [placeQuery]);

  const duplicated = [...reviews, ...reviews];

  return (
    <div className="reviews-marquee">
      <div className="reviews-track">
        {duplicated.map((r, idx) => (
          <a
            key={`${r.authorName}-${idx}`}
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block reviews-card card-modern p-4 bg-white max-w-[380px]"
            aria-label="Open Google reviews in a new tab"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                {r.profilePhotoUrl ? (
                  <img src={r.profilePhotoUrl} alt={r.authorName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">{r.authorName?.[0] || 'G'}</div>
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900 truncate max-w-[200px]">{r.authorName}</span>
                  <span className="text-xs text-gray-500">{r.relativeTime}</span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={i < Math.round(r.rating) ? '#EAB308' : '#E5E7EB'} className="w-4 h-4">
                      <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed line-clamp-4">{r.text}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


