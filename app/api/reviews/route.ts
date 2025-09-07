import { NextResponse } from 'next/server';

type Review = {
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

const demoReviews: Review[] = [
  {
    authorName: 'Alex P.',
    rating: 5,
    text: 'Fantastic coffee and a relaxing patio. The matcha latte is my go-to!',
    relativeTime: '3 weeks ago',
  },
  {
    authorName: 'Jordan R.',
    rating: 5,
    text: 'Friendly staff and great vibes. Banh mi was super fresh and flavorful.',
    relativeTime: '1 month ago',
  },
  {
    authorName: 'Sam K.',
    rating: 4,
    text: 'Love the outdoor seating. Cold brew hits the spot every time.',
    relativeTime: '2 months ago',
  },
  {
    authorName: 'Morgan T.',
    rating: 5,
    text: 'Best spot to study with a tasty croissant. Highly recommend!',
    relativeTime: '2 months ago',
  },
  {
    authorName: 'Priya S.',
    rating: 5,
    text: 'Tea selection is excellent and the service is consistently warm.',
    relativeTime: '3 months ago',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId') || undefined;
  const placeQuery = searchParams.get('placeQuery') || undefined;
  const maxParam = searchParams.get('max') || '10';
  const max = Math.max(1, Math.min(30, Number(maxParam) || 10));

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    // No API key set; return demo reviews so UI still looks good.
    return NextResponse.json({
      source: 'demo',
      reviews: Array.from({ length: max }).map((_, i) => demoReviews[i % demoReviews.length]),
    }, { status: 200 });
  }

  try {
    let resolvedPlaceId = placeId;
    if (!resolvedPlaceId) {
      if (!placeQuery) {
        return NextResponse.json({ error: 'Missing placeId or placeQuery' }, { status: 400 });
      }
      const findPlaceUrl = new URL('https://maps.googleapis.com/maps/api/place/findplacefromtext/json');
      findPlaceUrl.searchParams.set('input', placeQuery);
      findPlaceUrl.searchParams.set('inputtype', 'textquery');
      findPlaceUrl.searchParams.set('fields', 'place_id');
      findPlaceUrl.searchParams.set('key', apiKey);

      const findRes = await fetch(findPlaceUrl.toString(), { next: { revalidate: 60 * 60 } });
      const findData = await findRes.json();
      resolvedPlaceId = findData?.candidates?.[0]?.place_id;
    }

    if (!resolvedPlaceId) {
      return NextResponse.json({
        source: 'demo-fallback',
        reviews: Array.from({ length: max }).map((_, i) => demoReviews[i % demoReviews.length]),
      }, { status: 200 });
    }

    const detailsUrl = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    detailsUrl.searchParams.set('place_id', resolvedPlaceId);
    detailsUrl.searchParams.set('fields', 'name,rating,user_ratings_total,reviews');
    detailsUrl.searchParams.set('reviews_sort', 'newest');
    detailsUrl.searchParams.set('key', apiKey);

    const detailsRes = await fetch(detailsUrl.toString(), { next: { revalidate: 60 * 15 } });
    const detailsData = await detailsRes.json();

    const rawReviews = (detailsData?.result?.reviews || []) as Array<any>;
    const reviews: Review[] = rawReviews.map((r) => ({
      authorName: r.author_name,
      profilePhotoUrl: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
    })).filter(r => !!r.text);

    const repeated = Array.from({ length: Math.max(max, reviews.length || 0) }).map((_, i) => reviews[i % (reviews.length || demoReviews.length)] || demoReviews[i % demoReviews.length]);

    return NextResponse.json({
      source: 'google',
      placeId: resolvedPlaceId,
      total: repeated.length,
      reviews: repeated.slice(0, max),
    }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      source: 'error-fallback',
      reviews: demoReviews,
    }, { status: 200 });
  }
}


