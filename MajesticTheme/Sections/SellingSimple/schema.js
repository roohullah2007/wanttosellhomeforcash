/**
 * Selling Simple Section Schema
 */

export const sellingSimpleSchema = {
    name: 'Simple',
    key: 'simple',
    description: 'Two-column section with image, stats card, and benefits list',
    fields: [
        { key: 'badge', type: 'text', label: 'Badge Text', default: 'Why Choose Us' },
        { key: 'headline', type: 'text', label: 'Headline', default: 'Selling Your Home' },
        { key: 'headlineItalic', type: 'text', label: 'Headline (Italic)', default: 'Made Simple' },
        { key: 'description', type: 'textarea', label: 'Description', default: 'The internet changed everything. Why pay thousands in commissions when you can list for FREE? Take control of your home sale and keep more money in your pocket.' },
        { key: 'image', type: 'image', label: 'Image', default: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200' },
        { key: 'statAmount', type: 'text', label: 'Stat Amount', default: '$7,500' },
        { key: 'statLabel', type: 'text', label: 'Stat Label', default: 'Avg. Savings' },
        { key: 'statDescription', type: 'textarea', label: 'Stat Description', default: 'Based on 3% commission on a $250,000 home sale' },
        { key: 'benefits', type: 'list', label: 'Benefits', default: [
            'List your property completely FREE',
            'Full MLS exposure to reach more buyers',
            'Professional photos & marketing tools',
            'Expert support throughout the process',
        ]},
        { key: 'ctaText', type: 'text', label: 'CTA Text', default: 'Get Started Free' },
        { key: 'ctaLink', type: 'text', label: 'CTA Link', default: '/our-packages' },
    ],
    getDefaultContent: () => ({
        badge: 'Why Choose Us',
        headline: 'Selling Your Home',
        headlineItalic: 'Made Simple',
        description: 'The internet changed everything. Why pay thousands in commissions when you can list for FREE? Take control of your home sale and keep more money in your pocket.',
        image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200',
        statAmount: '$7,500',
        statLabel: 'Avg. Savings',
        statDescription: 'Based on 3% commission on a $250,000 home sale',
        benefits: [
            'List your property completely FREE',
            'Full MLS exposure to reach more buyers',
            'Professional photos & marketing tools',
            'Expert support throughout the process',
        ],
        ctaText: 'Get Started Free',
        ctaLink: '/our-packages',
    }),
};

export default sellingSimpleSchema;
