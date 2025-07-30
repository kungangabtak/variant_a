# Outdoor Café

A modern, clean website for Outdoor Café featuring a beautiful outdoor dining experience with aromatic coffee, refreshing smoothies, delicious boba tea, and flavorful Banh Mi.

## Features

- **Clean, Modern Design**: Sleek UI with solid color backgrounds and excellent typography
- **Responsive Layout**: Optimized for all devices with mobile-first approach
- **Location Pages**: Dedicated pages for Chicago and Evanston locations with interactive menus
- **Menu System**: Interactive menu with category filtering and item details
- **Consistent Branding**: Unified design language across all pages
- **Performance Optimized**: Clean codebase with minimal dependencies

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript for type safety
- **Fonts**: Merriweather (serif) and Quicksand (sans-serif)

## Project Structure

```
OutdoorCafe/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── menu/
│   │   └── page.tsx         # Main menu page
│   └── locations/
│       ├── chicago/
│       │   └── page.tsx     # Chicago location menu
│       └── evanston/
│           └── page.tsx     # Evanston location menu
├── public/                  # Static assets (images)
├── tailwind.config.js       # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd OutdoorCafe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3001](http://localhost:3001)

## Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## Design System

### Colors
- **Primary**: `#A67C52` (accent brown)
- **Background**: `#F5E9DA` (warm solid)
- **Text**: Gray scale for readability

### Typography
- **Headings**: Merriweather (serif) with light font weight
- **Body**: Merriweather (serif) for content
- **UI Elements**: Quicksand (sans-serif) for navigation and buttons

### Components
- **Reusable Components**: SectionHeading, SectionText, Button, LocationCard, ContactCard
- **Consistent Spacing**: Standardized padding and margins
- **Hover Effects**: Subtle animations and transitions

## Pages

### Homepage (`/`)
- Hero section with background image
- Location cards with hover effects
- Sustainability and community sections
- Contact information
- Footer with navigation links

### Menu (`/menu`)
- Interactive menu with category tabs
- Grid layout for menu items
- Modal overlay for item details
- Responsive design for all screen sizes

### Locations
- **Chicago** (`/locations/chicago`): Urban garden oasis menu
- **Evanston** (`/locations/evanston`): Outdoor dining menu
- Interactive menu selection with item details
- Sticky product image display

## Performance Optimizations

- **Minimal Dependencies**: Removed unused packages (lucide-react)
- **Clean CSS**: Consolidated styles and removed redundancies
- **Component Reuse**: Shared components reduce code duplication
- **Optimized Images**: Proper loading attributes and alt text
- **Mobile First**: Responsive design with touch-friendly interactions

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Consistent formatting and naming conventions
- Component-based architecture

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js-compatible hosting platform.

### Build for Production
```bash
npm run build
```

### Deploy Options

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

#### Manual Deployment
1. Run `npm run build`
2. Upload the entire project folder (excluding `node_modules` and `.next`)
3. Run `npm install --production` on the server
4. Start with `npm start`

## License

© 2024 Outdoor Café. All rights reserved. 