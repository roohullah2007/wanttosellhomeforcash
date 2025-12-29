/**
 * Benefits Section Schema
 */

export const featuresSchema = {
    name: 'Benefits',
    key: 'benefits',
    description: 'Grid of benefit cards with icons',
    fields: [
        {
            key: 'features',
            type: 'repeater',
            label: 'Benefits',
            fields: [
                { key: 'icon', type: 'select', label: 'Icon', options: ['Zap', 'Shield', 'Star', 'Check', 'Home', 'Search'], default: 'Zap' },
                { key: 'title', type: 'text', label: 'Title', default: 'Benefit Title' },
                { key: 'subtitle', type: 'text', label: 'Subtitle', default: 'Benefit subtitle' },
            ],
            default: [
                { icon: 'Zap', title: 'Cash Offers', subtitle: 'Within 24 Hrs' },
                { icon: 'Shield', title: 'No Repairs', subtitle: 'Sell As-Is' },
                { icon: 'Star', title: 'Zero Fees', subtitle: 'No Commissions' },
                { icon: 'Search', title: 'Any Condition', subtitle: 'We Buy All' },
                { icon: 'Zap', title: 'Fast Closing', subtitle: '7 Days or Less' },
            ],
        },
    ],
    getDefaultContent: () => ({
        features: [
            { icon: 'Zap', title: 'Cash Offers', subtitle: 'Within 24 Hrs' },
            { icon: 'Shield', title: 'No Repairs', subtitle: 'Sell As-Is' },
            { icon: 'Star', title: 'Zero Fees', subtitle: 'No Commissions' },
            { icon: 'Search', title: 'Any Condition', subtitle: 'We Buy All' },
            { icon: 'Zap', title: 'Fast Closing', subtitle: '7 Days or Less' },
        ],
    }),
};

export default featuresSchema;
