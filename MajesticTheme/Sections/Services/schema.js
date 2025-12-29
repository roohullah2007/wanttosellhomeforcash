/**
 * Services Section Schema - MajesticBuyerTheme
 */

export const servicesSchema = {
    name: 'Services',
    key: 'services',
    description: 'Service offerings with heading/description split and hover effects',
    fields: [
        {
            key: 'badge',
            type: 'text',
            label: 'Badge Text',
            default: 'What We Offer',
        },
        {
            key: 'headline',
            type: 'text',
            label: 'Headline',
            default: 'How We Help',
        },
        {
            key: 'headlineItalic',
            type: 'text',
            label: 'Headline (Italic)',
            default: 'You',
        },
        {
            key: 'description',
            type: 'textarea',
            label: 'Description',
            default: 'We provide comprehensive solutions for homeowners looking to sell their properties quickly and hassle-free.',
        },
        {
            key: 'services',
            type: 'repeater',
            label: 'Services',
            fields: [
                {
                    key: 'title',
                    type: 'text',
                    label: 'Service Title',
                    default: 'Service Title',
                },
                {
                    key: 'description',
                    type: 'textarea',
                    label: 'Service Description',
                    default: 'Service description',
                },
                {
                    key: 'link',
                    type: 'text',
                    label: 'Service Link',
                    default: '/services',
                },
            ],
        },
    ],
};

export default servicesSchema;
