# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 3001)
- **Build**: `npm run build`
- **Production**: `npm start`
- **Linting**: `npm run lint`

## Project Architecture

This is a **Next.js 14 App Router** project for an outdoor café website with two locations. Key architectural decisions:

### Tech Stack
- **Framework**: Next.js 14 with App Router (not Pages Router)
- **Styling**: Tailwind CSS with extensive custom design system
- **Language**: TypeScript with strict mode
- **Fonts**: Google Fonts (Merriweather serif + Quicksand sans-serif)

### App Directory Structure
```
app/
├── layout.tsx           # Root layout with Navbar + Footer components
├── page.tsx            # Homepage
├── globals.css         # Global styles, animations, design system
├── about/page.tsx      # About page
├── contact/page.tsx    # Contact page
├── menu/page.tsx       # Main menu page
├── locations/
│   ├── chicago/page.tsx    # North Park location (note: historically Chicago, now North Park)
│   └── evanston/page.tsx   # Evanston location
└── components/
    └── GoogleReviewsMarquee.tsx
```

### Design System
- **Color Palette**: Warm browns (`#A67C52` accent, `#F5E9DA` background) with sage green highlights (`#418B26`)
- **Custom Animations**: Extensive keyframes for gentle fading, floating, pulsing effects
- **Responsive**: Mobile-first approach with touch-friendly interactions
- **Typography**: Merriweather for content, Quicksand for UI elements

### Important Implementation Notes

1. **Client Components**: The root layout uses `"use client"` directive due to interactive navbar with mobile menu
2. **Portal Usage**: Mobile menu uses `createPortal` to escape stacking contexts
3. **Location Context**: "Chicago" in file paths refers to North Park location (historical naming)
4. **No Component Library**: Uses custom components with Tailwind classes
5. **Custom CSS**: Heavy use of custom CSS classes in `globals.css` for animations and effects

### Key Features
- Sticky responsive navbar with mobile overlay menu
- Interactive location-specific menus
- Custom animation system with intersection observers
- Comprehensive footer with contact information
- Google Reviews marquee component

### Development Notes
- Port 3001 is used for development to avoid conflicts
- TypeScript strict mode is enabled
- No additional UI libraries (no Lucide, no component libraries)
- Custom utility classes for consistent spacing and animations