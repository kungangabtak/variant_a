# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Development Server
```bash
npm run dev         # Start development server on port 3001
npm run build       # Build production version
npm run start       # Start production server
npm run lint        # Run ESLint
```

### Testing
No specific test framework is configured. Tests would need to be set up if required.

## Project Architecture

This is a **Next.js 14 App Router** cafe website built with modern React patterns:

### Tech Stack
- **Next.js 14** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** with extensive custom design system
- **Client-side React** components with hooks

### File Structure
```
app/
├── layout.tsx              # Root layout with Navbar component
├── page.tsx               # Homepage with reusable components
├── globals.css            # Custom CSS with warm color palette
├── locations/
│   ├── chicago/page.tsx   # North Park location menu
│   └── evanston/page.tsx  # Evanston location menu
├── menu/page.tsx          # Main menu page
├── about/page.tsx         # About page
└── contact/page.tsx       # Contact page
```

### Key Components & Patterns

#### Layout Structure
- **Root Layout** (`app/layout.tsx`): Contains global `Navbar` component with mobile menu
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

### Design System

#### Color Palette (Tailwind Extended)
- **Primary Accent**: `#A67C52` (accent/accent-solid)
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

### State Management
- **Local State**: React `useState` for component-level state (mobile menu, modals)
- **Scroll Animation Hook**: `useScrollAnimation()` for intersection-based animations
- No global state management (Redux/Context) currently used

### Development Considerations

#### Image Assets
- Located in `public/` directory
- Mix of `.png`, `.jpg`, and `.jpeg` formats
- Hero images, menu items, and location photos
- Favicon configured as `/favicon.png`

#### Responsive Design
- Mobile-first breakpoints with Tailwind
- Touch-friendly interactions (48px minimum touch targets)
- Collapsible mobile navigation

#### Performance Optimizations
- Custom CSS animations over JavaScript-heavy solutions
- Optimized image loading with proper alt text
- Clean component architecture with minimal re-renders

## Development Notes

- Development server runs on **port 3001** (not default 3000)
- All pages use client-side rendering for interactive components
- No server-side data fetching currently implemented
- External ordering links to ChowBus for both locations
- Google Maps integration for location addresses