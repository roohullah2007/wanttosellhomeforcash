/**
 * Hero Slider Section Schema - MajesticBuyerTheme
 * Defines editable fields for the hero slider section
 */

export const heroSliderSchema = {
    name: 'Carousel',
    key: 'carousel',
    fields: [
        {
            key: 'slides',
            type: 'repeater',
            label: 'Slides',
            description: 'Add multiple slides for the hero carousel',
            fields: [
                {
                    key: 'image',
                    type: 'image',
                    label: 'Background Image',
                    default: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
                },
                {
                    key: 'headlineLine1',
                    type: 'text',
                    label: 'Headline Line 1',
                    default: 'Sell Your Home',
                },
                {
                    key: 'headlineLine2',
                    type: 'text',
                    label: 'Headline Line 2',
                    default: 'Without the Commission',
                },
                {
                    key: 'alt',
                    type: 'text',
                    label: 'Image Alt Text',
                    default: 'Hero Image',
                },
            ],
            default: [
                {
                    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
                    headlineLine1: 'We Buy Houses',
                    headlineLine2: 'Fast Cash Offers',
                    alt: 'We Buy Houses',
                },
                {
                    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
                    headlineLine1: 'Any Condition',
                    headlineLine2: 'No Repairs Needed',
                    alt: 'Any Condition',
                },
                {
                    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920',
                    headlineLine1: 'Close on Your',
                    headlineLine2: 'Timeline',
                    alt: 'Close on Your Timeline',
                },
            ],
        },
        {
            key: 'primaryButton',
            type: 'group',
            label: 'Primary Button',
            fields: [
                {
                    key: 'text',
                    type: 'text',
                    label: 'Button Text',
                    default: 'Get Cash Offer',
                },
                {
                    key: 'href',
                    type: 'text',
                    label: 'Button Link',
                    default: '#contact-form',
                },
            ],
        },
        {
            key: 'secondaryButton',
            type: 'group',
            label: 'Secondary Button',
            fields: [
                {
                    key: 'text',
                    type: 'text',
                    label: 'Button Text',
                    default: 'How It Works',
                },
                {
                    key: 'href',
                    type: 'text',
                    label: 'Button Link',
                    default: '#how-it-works',
                },
            ],
        },
        {
            key: 'autoPlayInterval',
            type: 'text',
            label: 'Auto-play Interval (ms)',
            default: '5000',
            description: 'Time between automatic slide transitions in milliseconds',
        },
    ],
};

export default heroSliderSchema;
