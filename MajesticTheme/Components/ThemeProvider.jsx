/**
 * ThemeProvider - Injects tenant branding as CSS custom properties
 * MajesticBuyerTheme
 */

import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({});

export function useTheme() {
    return useContext(ThemeContext);
}

// Available Google Fonts
const availableFonts = [
    { name: 'Montserrat', weights: [400, 500, 600, 700] },
    { name: 'Raleway', weights: [400, 500, 600, 700] },
    { name: 'Open Sans', weights: [400, 500, 600, 700] },
    { name: 'Roboto', weights: [400, 500, 700] },
    { name: 'Lato', weights: [400, 700] },
    { name: 'Poppins', weights: [400, 500, 600, 700] },
    { name: 'Playfair Display', weights: [400, 500, 600, 700] },
    { name: 'Merriweather', weights: [400, 700] },
    { name: 'Inter', weights: [400, 500, 600, 700] },
    { name: 'Nunito', weights: [400, 600, 700] },
    { name: 'Lora', weights: [400, 500, 600, 700] },
    { name: 'Instrument Sans', weights: [400, 500, 600, 700] },
];

/**
 * Load Google Fonts dynamically
 */
function loadGoogleFonts(fonts) {
    const fontFamilies = [];

    Object.values(fonts).forEach(fontValue => {
        if (typeof fontValue !== 'string') return;
        const fontName = fontValue.split(',')[0].trim();
        const fontConfig = availableFonts.find(f => f.name === fontName);

        if (fontConfig) {
            const weights = fontConfig.weights.join(';');
            fontFamilies.push(`family=${fontName.replace(/\s+/g, '+')}:wght@${weights}`);
        }
    });

    if (fontFamilies.length === 0) return;

    const linkId = 'google-fonts-majestic';
    const existingLink = document.getElementById(linkId);
    const newHref = `https://fonts.googleapis.com/css2?${fontFamilies.join('&')}&display=swap`;

    if (existingLink) {
        if (existingLink.href !== newHref) {
            existingLink.href = newHref;
        }
    } else {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = newHref;
        document.head.appendChild(link);
    }
}

// Default branding values
const defaultBranding = {
    colors: {
        primary: '#A41E34',
        secondary: '#1a1a1a',
        buttonPrimary: '',       // Primary button (defaults to primary if empty)
        buttonSecondary: '',     // Secondary button (defaults to secondary if empty)
        accent: '#EEEDEA',
        accentDark: '#E5E1DC',
        text: '#111111',
        textLight: '#666666',
        textMuted: '#3D3D3D',
        background: '#ffffff',
        backgroundAlt: '#DCD8D5',
        border: '#D0CCC7',
    },
    fonts: {
        heading: 'Instrument Sans, sans-serif',
        body: 'Instrument Sans, sans-serif',
        accent: 'Lora, serif',
        button: 'Instrument Sans, sans-serif',
    },
    fontSizes: {
        headingH1: '3rem',
        headingH2: '2rem',
        paragraph: '1rem',
        button: '1rem',
    },
    logo: null,
    companyName: 'Investors Bunny',
};

// Darken a hex color by a percentage
function darkenColor(hex, percent = 15) {
    if (!hex) return hex;
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

export default function ThemeProvider({ children, tenant = {}, branding = {} }) {
    const mergedBranding = {
        colors: { ...defaultBranding.colors, ...branding.colors },
        fonts: { ...defaultBranding.fonts, ...branding.fonts },
        fontSizes: { ...defaultBranding.fontSizes, ...branding.fontSizes },
        logo: branding.logo || defaultBranding.logo,
        companyName: tenant.name || branding.companyName || defaultBranding.companyName,
    };

    const settings = tenant.settings || {};
    const primaryHover = darkenColor(mergedBranding.colors.primary, 15);
    const secondaryHover = darkenColor(mergedBranding.colors.secondary, 15);
    const accentDark = mergedBranding.colors.accentDark || darkenColor(mergedBranding.colors.accent, 5);

    // Button colors default to primary/secondary if not set
    const buttonPrimary = mergedBranding.colors.buttonPrimary || mergedBranding.colors.primary;
    const buttonSecondary = mergedBranding.colors.buttonSecondary || mergedBranding.colors.secondary;
    const buttonPrimaryHover = darkenColor(buttonPrimary, 15);
    const buttonSecondaryHover = darkenColor(buttonSecondary, 15);

    // Load Google Fonts on mount and when fonts change
    useEffect(() => {
        loadGoogleFonts(mergedBranding.fonts);
    }, [mergedBranding.fonts.heading, mergedBranding.fonts.body, mergedBranding.fonts.accent, mergedBranding.fonts.button]);

    // Inject all CSS (variables + utilities) via style tag
    useEffect(() => {
        const styleId = 'majestic-theme-styles';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }

        styleEl.textContent = `
            /* CSS Custom Properties */
            .majestic-theme {
                --color-primary: ${mergedBranding.colors.primary};
                --color-primary-hover: ${primaryHover};
                --color-secondary: ${mergedBranding.colors.secondary};
                --color-secondary-hover: ${secondaryHover};
                --color-button-primary: ${buttonPrimary};
                --color-button-primary-hover: ${buttonPrimaryHover};
                --color-button-secondary: ${buttonSecondary};
                --color-button-secondary-hover: ${buttonSecondaryHover};
                --color-accent: ${mergedBranding.colors.accent};
                --color-accent-dark: ${accentDark};
                --color-text: ${mergedBranding.colors.text};
                --color-text-light: ${mergedBranding.colors.textLight};
                --color-text-muted: ${mergedBranding.colors.textMuted || '#3D3D3D'};
                --color-background: ${mergedBranding.colors.background};
                --color-background-alt: ${mergedBranding.colors.backgroundAlt};
                --color-border: ${mergedBranding.colors.border || '#D0CCC7'};
                --font-heading: ${mergedBranding.fonts.heading};
                --font-body: ${mergedBranding.fonts.body};
                --font-accent: ${mergedBranding.fonts.accent};
                --font-button: ${mergedBranding.fonts.button || mergedBranding.fonts.heading};
                --font-size-h1: ${mergedBranding.fontSizes.headingH1};
                --font-size-h2: ${mergedBranding.fontSizes.headingH2};
                --font-size-paragraph: ${mergedBranding.fontSizes.paragraph};
                --font-size-button: ${mergedBranding.fontSizes.button};

                color: var(--color-text);
                background-color: var(--color-background);
            }

            /* Background utilities */
            .majestic-theme .theme-bg-primary { background-color: var(--color-primary) !important; }
            .majestic-theme .theme-bg-secondary { background-color: var(--color-secondary) !important; }
            .majestic-theme .theme-bg-button-primary { background-color: var(--color-button-primary) !important; }
            .majestic-theme .theme-bg-button-secondary { background-color: var(--color-button-secondary) !important; }
            .majestic-theme .theme-bg-accent { background-color: var(--color-accent) !important; }
            .majestic-theme .theme-bg-accent-dark { background-color: var(--color-accent-dark) !important; }
            .majestic-theme .theme-bg-background { background-color: var(--color-background) !important; }
            .majestic-theme .theme-bg-background-alt { background-color: var(--color-background-alt) !important; }

            /* Text utilities */
            .majestic-theme .theme-text-primary { color: var(--color-primary) !important; }
            .majestic-theme .theme-text-secondary { color: var(--color-secondary) !important; }
            .majestic-theme .theme-text-text { color: var(--color-text) !important; }
            .majestic-theme .theme-text-light { color: var(--color-text-light) !important; }
            .majestic-theme .theme-text-muted { color: var(--color-text-muted) !important; }
            .majestic-theme .theme-text-background-alt { color: var(--color-background-alt) !important; }

            /* Border utilities */
            .majestic-theme .theme-border-primary { border-color: var(--color-primary) !important; }
            .majestic-theme .theme-border-secondary { border-color: var(--color-secondary) !important; }
            .majestic-theme .theme-border-text { border-color: var(--color-text) !important; }
            .majestic-theme .theme-border-border { border-color: var(--color-border) !important; }

            /* SVG Fill/Stroke utilities */
            .majestic-theme .theme-fill-primary { fill: var(--color-primary) !important; }
            .majestic-theme .theme-fill-border { fill: var(--color-border) !important; }
            .majestic-theme .theme-stroke-border { stroke: var(--color-border) !important; }

            /* Hover utilities */
            .majestic-theme .hover\\:theme-text-primary:hover { color: var(--color-primary) !important; }
            .majestic-theme .hover\\:theme-text-light:hover { color: var(--color-text-light) !important; }
            .majestic-theme .hover\\:theme-bg-primary:hover { background-color: var(--color-primary) !important; }
            .majestic-theme .hover\\:theme-bg-primary-hover:hover { background-color: var(--color-primary-hover) !important; }
            .majestic-theme .hover\\:theme-bg-secondary:hover { background-color: var(--color-secondary) !important; }
            .majestic-theme .hover\\:theme-bg-secondary-hover:hover { background-color: var(--color-secondary-hover) !important; }
            .majestic-theme .hover\\:theme-bg-button-primary-hover:hover { background-color: var(--color-button-primary-hover) !important; }
            .majestic-theme .hover\\:theme-bg-button-secondary-hover:hover { background-color: var(--color-button-secondary-hover) !important; }
            .majestic-theme .hover\\:theme-bg-accent-dark:hover { background-color: var(--color-accent-dark) !important; }
            .majestic-theme .hover\\:theme-border-primary:hover { border-color: var(--color-primary) !important; }

            /* Group hover utilities */
            .majestic-theme .group:hover .group-hover\\:theme-bg-primary { background-color: var(--color-primary) !important; }
            .majestic-theme .group:hover .group-hover\\:theme-bg-button-primary { background-color: var(--color-button-primary) !important; }
            .majestic-theme .group:hover .group-hover\\:theme-text-white { color: white !important; }

            /* Font utilities */
            .majestic-theme .font-accent { font-family: var(--font-accent) !important; }
            .majestic-theme .font-heading { font-family: var(--font-heading) !important; }
            .majestic-theme .font-body { font-family: var(--font-body) !important; }
            .majestic-theme .theme-font-heading { font-family: var(--font-heading) !important; }
            .majestic-theme .theme-font-body { font-family: var(--font-body) !important; }
            .majestic-theme .theme-font-accent { font-family: var(--font-accent) !important; }
            .majestic-theme .theme-font-button { font-family: var(--font-button) !important; }

            /* Font size utilities */
            .majestic-theme .theme-text-h1 { font-size: var(--font-size-h1) !important; }
            .majestic-theme .theme-text-h2 { font-size: var(--font-size-h2) !important; }
            .majestic-theme .theme-text-paragraph { font-size: var(--font-size-paragraph) !important; }
            .majestic-theme .theme-text-button { font-size: var(--font-size-button) !important; }
        `;
    }, [
        mergedBranding.colors.primary,
        mergedBranding.colors.secondary,
        mergedBranding.colors.buttonPrimary,
        mergedBranding.colors.buttonSecondary,
        mergedBranding.colors.accent,
        mergedBranding.colors.accentDark,
        mergedBranding.colors.text,
        mergedBranding.colors.textLight,
        mergedBranding.colors.textMuted,
        mergedBranding.colors.background,
        mergedBranding.colors.backgroundAlt,
        mergedBranding.colors.border,
        mergedBranding.fonts.heading,
        mergedBranding.fonts.body,
        mergedBranding.fonts.accent,
        mergedBranding.fonts.button,
        mergedBranding.fontSizes.headingH1,
        mergedBranding.fontSizes.headingH2,
        mergedBranding.fontSizes.paragraph,
        mergedBranding.fontSizes.button,
        primaryHover,
        secondaryHover,
        buttonPrimary,
        buttonSecondary,
        buttonPrimaryHover,
        buttonSecondaryHover,
        accentDark,
    ]);

    const contextValue = {
        tenant,
        branding: mergedBranding,
        colors: mergedBranding.colors,
        fonts: mergedBranding.fonts,
        fontSizes: mergedBranding.fontSizes,
        settings,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className="theme-root majestic-theme">
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
