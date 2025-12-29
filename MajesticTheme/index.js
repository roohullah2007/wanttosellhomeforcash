/**
 * Majestic Theme Configuration
 *
 * This is the main configuration file for the Majestic Theme.
 * It defines available sections and reusable components.
 * Designed for wholesale real estate investors - "We Buy Houses" seller-focused sites.
 *
 * Note: All pages are dynamic and load sections from the database.
 * No static page components in theme - only Sections and Components.
 */

// Components
import ThemeProvider from './Components/ThemeProvider';
import Header, { headerSchema } from './Components/Header';
import Footer, { footerSchema } from './Components/Footer';

// Sections
import HeroSection from './Sections/Hero';
import FeaturesSection from './Sections/Features';
import HowItWorksSection from './Sections/HowItWorks';
import SellingSimpleSection from './Sections/SellingSimple';
import StatsSection from './Sections/Stats';
import ServicesSection from './Sections/Services';
import HeroSliderSection from './Sections/HeroSlider';
import TestimonialsSection from './Sections/Testimonials';
import Testimonials2Section from './Sections/Testimonials2';
import FAQSection from './Sections/FAQ';
import FAQ2Section from './Sections/FAQ2';
import Hero2Section from './Sections/Hero2';

// Schemas
import { heroSchema } from './Sections/Hero/schema';
import { featuresSchema } from './Sections/Features/schema';
import { howItWorksSchema } from './Sections/HowItWorks/schema';
import { sellingSimpleSchema } from './Sections/SellingSimple/schema';
import { statsSchema } from './Sections/Stats/schema';
import { servicesSchema } from './Sections/Services/schema';
import { heroSliderSchema } from './Sections/HeroSlider/schema';
import { testimonialsSchema } from './Sections/Testimonials/schema';
import { testimonials2Schema } from './Sections/Testimonials2/schema';
import { faqSchema } from './Sections/FAQ/schema';
import { faq2Schema } from './Sections/FAQ2/schema';
import { hero2Schema } from './Sections/Hero2/schema';

// Shared Sections (available across all themes)
import { sharedSections } from '../shared';

// Theme metadata
export const themeInfo = {
    name: 'Majestic',
    slug: 'majestic',
    description: 'Premium theme for wholesale real estate investors and cash home buyers. Clean, modern design with bold typography and smooth interactions.',
    version: '1.0.0',
    author: 'Investors Bunny',
    thumbnail: '/images/themes/majestic-thumb.png',
    category: 'Real Estate',
};

// Default branding colors
export const defaultBranding = {
    colors: {
        primary: '#A41E34',        // Red/Burgundy - primary CTA buttons
        primaryHover: '#8B1A2C',   // Darker red - button hover state
        secondary: '#000000',      // Black - headers, nav buttons
        accent: '#EEEDEA',         // Beige - backgrounds, sections
        accentDark: '#E5E1DC',     // Darker beige - icon backgrounds
        text: '#111111',           // Main text color
        textLight: '#666666',      // Secondary text
        textMuted: '#3D3D3D',      // Icon/muted text
        background: '#ffffff',     // White background
        backgroundAlt: '#DCD8D5',  // Alt background (tan)
        buttonBg: '#000000',       // Button background (black)
        buttonHover: '#111111',    // Button hover (lighter black)
        linkHover: '#A52A3D',      // Link hover color (slightly different)
    },
    fonts: {
        heading: 'Instrument Sans, sans-serif',
        body: 'Instrument Sans, sans-serif',
        accent: 'Lora, serif',     // For italic emphasis
    },
};

// Available sections with their components and schemas
export const sections = {
    hero: {
        component: HeroSection,
        schema: heroSchema,
        name: 'Hero',
        description: 'Full-screen hero with headline and CTA buttons',
    },
    banner: {
        component: Hero2Section,
        schema: hero2Schema,
        name: 'Banner',
        description: 'Hero section with background image and lead capture form',
    },
    benefits: {
        component: FeaturesSection,
        schema: featuresSchema,
        name: 'Benefits',
        description: 'Grid of benefit cards with icons',
    },
    process: {
        component: HowItWorksSection,
        schema: howItWorksSchema,
        name: 'Process',
        description: '4-step process with badge and connector arrows',
    },
    simple: {
        component: SellingSimpleSection,
        schema: sellingSimpleSchema,
        name: 'Simple',
        description: 'Two-column section with image, stats card, and benefits list',
    },
    stats: {
        component: StatsSection,
        schema: statsSchema,
        name: 'Stats',
        description: 'Split layout with content left and 2x2 stat cards grid right',
    },
    services: {
        component: ServicesSection,
        schema: servicesSchema,
        name: 'Services',
        description: 'Service offerings with heading/description split and hover effects',
    },
    carousel: {
        component: HeroSliderSection,
        schema: heroSliderSchema,
        name: 'Carousel',
        description: 'Full-screen hero slider with multiple slides and CTA buttons',
    },
    reviews: {
        component: TestimonialsSection,
        schema: testimonialsSchema,
        name: 'Reviews',
        description: 'Horizontal slider with quote cards and arrow navigation',
    },
    quotes: {
        component: Testimonials2Section,
        schema: testimonials2Schema,
        name: 'Quotes',
        description: 'Horizontal scrolling cards with author photos and navigation arrows',
    },
    faq: {
        component: FAQSection,
        schema: faqSchema,
        name: 'FAQ',
        description: 'Split layout with title/CTA left and accordion-style FAQs right',
    },
    help: {
        component: FAQ2Section,
        schema: faq2Schema,
        name: 'Help',
        description: 'Two-column layout with content/CTA on left and accordion FAQs on right',
    },
};

// Reusable components (Header, Footer, Button, Input, etc.)
export const components = {
    ThemeProvider,
    Header,
    Footer,
};

// Component schemas for editing
export const componentSchemas = {
    header: headerSchema,
    footer: footerSchema,
};

// Export all for easy access
export default {
    info: themeInfo,
    branding: defaultBranding,
    sections,
    components,
    componentSchemas,
};
