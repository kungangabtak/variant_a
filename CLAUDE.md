# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev         # Start development server on port 3001
npm run build       # Build production version
npm run start       # Start production server
npm run lint        # Run ESLint
```

### Testing
No specific test framework is configured. Tests would need to be set up if required.

## Project Architecture

This is a **Next.js 14 App Router** project for an outdoor café website with two locations. Key architectural decisions:

### Tech Stack
- **Framework**: Next.js 14 with App Router (not Pages Router)
- **Styling**: Tailwind CSS with extensive custom design system
- **Language**: TypeScript with strict mode
- **Fonts**: Google Fonts (Merriweather serif + Quicksand sans-serif)
- **Instagram Integration**: react-social-media-embed for social media content

### App Directory Structure
```
app/
├── layout.tsx              # Root layout with Navbar + Footer components
├── page.tsx               # Homepage with reusable components
├── globals.css            # Global styles, animations, design system
├── about/page.tsx         # About page
├── contact/page.tsx       # Contact page
├── menu/page.tsx          # Main menu page
├── locations/
│   ├── chicago/page.tsx   # North Park location (note: historically Chicago, now North Park)
│   └── evanston/page.tsx  # Evanston location
├── components/
│   ├── GoogleReviewsMarquee.tsx  # Google Reviews display
│   └── InstagramCarousel.tsx     # Instagram posts carousel
└── api/
    └── reviews/route.ts    # Google Reviews API endpoint
```

### Design System

#### Color Palette (Tailwind Extended)
- **Primary Accent**: `#A67C52` (accent/accent-solid)
- **Sage Green Highlight**: `#418B26` for interactive elements
- **Warm Variants**: `warm-dark`, `warm-light`, `coffee-rich`
- **Backgrounds**: `cream`, `warm-solid`, `warm-light-bg`

#### Typography
- **Headings**: Merriweather (serif) with light font weight
- **Body**: Merriweather for content readability
- **UI Elements**: Quicksand (sans-serif) for navigation/buttons

#### Animation System
Comprehensive animation classes in `globals.css`:
- **Scroll Animations**: IntersectionObserver-triggered with `.fade-in-*` classes
- **Hover Effects**: `.hover-gentle`, `.hover-lift`, `.hover-glow`
- **Custom Animations**: `.animate-float`, `.animate-pulse-warm`
- **Reviews Marquee**: Left-to-right scrolling animation
- **Instagram Carousel**: Custom styling for embedded content

### Key Components & Patterns

#### Layout Structure
- **Root Layout** (`app/layout.tsx`): Contains global `Navbar` and `Footer` components with mobile menu
- All pages use client-side rendering (`"use client"` directive)
- Responsive design with mobile-first approach

#### Reusable Components Pattern
Located in `app/page.tsx`:
- `SectionHeading`: Styled headings with consistent typography
- `SectionText`: Body text with balanced layout
- `Button`: Primary/secondary button variants
- `LocationCard`: Interactive location cards with hover effects
- `ContactCard`: Contact information cards

#### Menu System Architecture
Location-specific menus (`chicago/page.tsx`, `evanston/page.tsx`):
- `MenuItem` TypeScript interface for type safety
- Category-based menu organization
- Modal overlays for item details
- Sticky product image display

#### Social Media Integration
- **GoogleReviewsMarquee**: Displays customer reviews with marquee animation
- **InstagramCarousel**: Embeds Instagram posts using react-social-media-embed

### Important Implementation Notes

1. **Client Components**: The root layout uses `"use client"` directive due to interactive navbar with mobile menu
2. **Portal Usage**: Mobile menu uses `createPortal` to escape stacking contexts
3. **Location Context**: "Chicago" in file paths refers to North Park location (historical naming)
4. **No Component Library**: Uses custom components with Tailwind classes
5. **Custom CSS**: Heavy use of custom CSS classes in `globals.css` for animations and effects
6. **Instagram Embeds**: Custom styling for embedded Instagram content with border radius and warm colors

### Key Features
- Sticky responsive navbar with mobile overlay menu
- Interactive location-specific menus
- Custom animation system with intersection observers
- Comprehensive footer with contact information
- Google Reviews marquee component
- Instagram carousel integration
- API endpoint for reviews data

### Development Notes
- Port 3001 is used for development to avoid conflicts
- TypeScript strict mode is enabled
- No additional UI libraries (no Lucide, no component libraries) except react-social-media-embed
- Custom utility classes for consistent spacing and animations
- External ordering links to ChowBus for both locations
- Google Maps integration for location addresses
