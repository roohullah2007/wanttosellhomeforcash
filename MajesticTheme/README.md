# Majestic Buyer Theme

A premium theme for wholesale real estate investors and cash home buyers. Features clean, modern design with bold typography and smooth interactions.

## Theme Overview

**Designed for:** Wholesale real estate investors, cash home buyers, property investment companies
**Style:** Modern, bold, professional with smooth interactions
**Primary Use Case:** Lead generation for "We Buy Houses" businesses

## Architecture

This theme contains only:
- **Sections** - Reusable content blocks that can be added to any page via the database
- **Components** - Reusable UI elements (Header, Footer, Button, Input, etc.)

**No static pages** - All pages are dynamic and load sections from the database based on arrays managed through the editor.

## Brand Colors

- **Primary:** `#A41E34` (Red) - Used for buttons, CTAs, highlights
- **Secondary:** `#1a1a1a` (Black) - Headers, navigation, dark text
- **Accent:** `#EEEDEA` (Beige) - Section backgrounds, subtle accents
- **Text:** `#111111` (Dark Gray) - Main body text
- **Text Light:** `#666666` (Medium Gray) - Secondary text

## Typography

- **Heading Font:** Instrument Sans, sans-serif
- **Body Font:** Instrument Sans, sans-serif
- **Accent Font:** Lora, serif (for italic emphasis text)

## Sections

### 1. Hero Section
- **Purpose:** Main landing section with headline and features
- **Features:**
  - Full-width hero image with overlay
  - Large headline with italic emphasis
  - Two CTA buttons (primary + secondary)
  - Features grid below hero (5 items)
- **Editable:** Headline, subheadline, CTA text/links, background image, features

### 2. How It Works Section
- **Purpose:** Explain the 4-step process
- **Features:**
  - Badge with section label
  - Heading with italic emphasis
  - 4 step cards with icons
  - Connector arrows (desktop only)
- **Editable:** Badge, heading, steps (number, title, description)

### 3. Stats Section
- **Purpose:** Build credibility with numbers
- **Features:**
  - Left: Content area with heading, description, CTAs
  - Right: 2x2 grid of stat cards
  - Each stat has icon, number, and label
- **Editable:** Badge, heading, stats, CTA buttons

### 4. Services Section
- **Purpose:** Showcase service offerings
- **Features:**
  - Top row: Heading and description split
  - Service list items with hover effects
  - Arrow animations on hover
- **Editable:** Badge, heading, services list, CTA buttons

### 5. Testimonials Section
- **Purpose:** Social proof from clients
- **Features:**
  - Horizontal slider with navigation
  - Quote cards with avatar and name
  - Arrow navigation buttons
- **Editable:** Badge, heading, testimonial quotes/authors

### 6. FAQ Section
- **Purpose:** Answer common questions
- **Features:**
  - Left: Title and CTA button
  - Right: Accordion-style FAQ items
  - Smooth open/close animations
- **Editable:** Badge, heading, FAQ questions/answers, CTA

## File Structure

```
OkByOwnerTheme/
├── Components/
│   ├── ThemeProvider.jsx   # Injects branding CSS variables
│   ├── Header.jsx           # Sticky header with navigation
│   ├── Footer.jsx           # Footer with CTA and links
│   └── index.js             # Component exports
├── Sections/
│   ├── Hero/
│   │   ├── index.jsx
│   │   └── schema.js
│   ├── HowItWorks/
│   │   ├── index.jsx
│   │   └── schema.js
│   ├── Stats/
│   │   ├── index.jsx
│   │   └── schema.js
│   ├── Services/
│   │   ├── index.jsx
│   │   └── schema.js
│   ├── Testimonials/
│   │   ├── index.jsx
│   │   └── schema.js
│   └── FAQ/
│       ├── index.jsx
│       └── schema.js
├── Pages/
│   └── Home.jsx             # Dynamic page renderer
├── index.js                 # Main theme configuration
├── utils.js                 # Utility functions
└── README.md                # This file
```

## Usage

### Registering the Theme

Add to `/resources/js/themes/index.js`:

```javascript
import OkByOwnerTheme from './OkByOwnerTheme';

export const themes = {
    starter: StarterTheme,
    okbyowner: OkByOwnerTheme,  // Add this
};
```

### Default Page Configuration

The home page includes these sections by default:
1. Hero
2. How It Works
3. Stats
4. Services
5. Testimonials
6. FAQ

### Customization

All sections support full content customization through schemas:
- Text and headings
- Images and icons
- Colors (via branding system)
- Links and CTAs
- Repeater fields (steps, stats, services, testimonials, FAQs)

### CSS Variables

The theme uses CSS custom properties for dynamic branding:

```css
--color-primary: #A41E34
--color-secondary: #1a1a1a
--color-accent: #EEEDEA
--color-text: #111111
--color-text-light: #666666
--font-heading: Instrument Sans, sans-serif
--font-body: Instrument Sans, sans-serif
--font-accent: Lora, serif
```

## Design Features

- **Sticky Header:** Fixed navigation with blur effect
- **Mobile Responsive:** Breakpoints at sm, md, lg, xl
- **Smooth Animations:** 400ms cubic-bezier transitions
- **Hover Effects:** Shadow lifts, color changes, transforms
- **Icon System:** Inline SVG icons with consistent sizing
- **Typography Scale:** 14px-72px with proper line-heights

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes for Developers

1. All sections use `mergeContent()` utility to merge defaults with custom content
2. Icons are inline SVGs for performance
3. Uses Tailwind CSS utility classes
4. Supports dark overlays on images for text readability
5. All animations are CSS-based (no JavaScript animation libraries)
6. Mobile menu uses fixed positioning with backdrop blur

## Adaptation from OkByOwner

This theme is adapted from the OkByOwner property listing platform design and modified for wholesale real estate investors:

- **Original:** For Sale By Owner (FSBO) platform
- **Adapted:** Cash home buyer / wholesale investor sites
- **Changes:**
  - Updated copy for cash buying (not listing properties)
  - Added "We Buy Houses" messaging
  - Modified CTAs for lead capture
  - Simplified navigation for conversion focus
  - Removed property listing features

## Future Enhancements

Potential additions for future versions:
- Page Hero section for subpages
- About Us section with team grid
- Contact form section
- Map integration
- Video background support
- Additional layout variations
