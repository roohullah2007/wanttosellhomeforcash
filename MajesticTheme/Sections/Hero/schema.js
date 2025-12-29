/**
 * Hero Section Schema - MajesticBuyerTheme
 *
 * Schema matching StarterTheme pattern with OkByOwner design fields
 */

export const heroSchema = {
    name: 'Hero Section',
    key: 'hero',
    fields: [
        // Hero Content
        {
            key: 'headline',
            type: 'text',
            label: 'Headline',
            default: 'We Buy Houses',
        },
        {
            key: 'headlineItalic',
            type: 'text',
            label: 'Headline (Italic)',
            default: 'for Cash',
        },
        {
            key: 'headlineEnd',
            type: 'text',
            label: 'Headline End',
            default: 'No Fees, No Hassle',
        },
        {
            key: 'subheadline',
            type: 'textarea',
            label: 'Subheadline',
            default: 'Get a fair cash offer in 24 hours. We buy houses in any condition. Close on your timeline.',
        },
        {
            key: 'backgroundImage',
            type: 'image',
            label: 'Background Image',
            default: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
        },

        // CTA Buttons
        {
            key: 'ctaPrimaryText',
            type: 'text',
            label: 'Primary Button Text',
            default: 'Get Cash Offer Now',
        },
        {
            key: 'ctaPrimaryLink',
            type: 'text',
            label: 'Primary Button Link',
            default: '#contact-form',
        },
        {
            key: 'ctaSecondaryText',
            type: 'text',
            label: 'Secondary Button Text',
            default: 'How It Works',
        },
        {
            key: 'ctaSecondaryLink',
            type: 'text',
            label: 'Secondary Button Link',
            default: '#how-it-works',
        },

        // Features
        {
            key: 'features',
            type: 'repeater',
            label: 'Features',
            fields: [
                {
                    key: 'icon',
                    type: 'select',
                    label: 'Icon',
                    options: ['Zap', 'Shield', 'Star', 'Check', 'Home', 'Search'],
                    default: 'Zap',
                },
                {
                    key: 'title',
                    type: 'text',
                    label: 'Title',
                    default: 'Feature Title',
                },
                {
                    key: 'subtitle',
                    type: 'text',
                    label: 'Subtitle',
                    default: 'Feature subtitle',
                },
            ],
        },

        // Form Content
        {
            key: 'formTitle',
            type: 'text',
            label: 'Form Title',
            default: 'Get Your Cash Offer',
        },
        {
            key: 'formSubtitle',
            type: 'text',
            label: 'Form Subtitle',
            default: 'Fill out the form below for a no-obligation offer',
        },
        {
            key: 'buttonText',
            type: 'text',
            label: 'Submit Button Text',
            default: 'Get A Quick Cash Offer Now!',
        },
        {
            key: 'successMessage',
            type: 'textarea',
            label: 'Success Message',
            default: "Thank you! We'll be in touch within 24 hours with your cash offer.",
        },
        {
            key: 'consentText',
            type: 'textarea',
            label: 'Consent Text',
            default: "By submitting this form, you agree to be contacted by {company} and our partners about your property. There is no obligation, and you may opt out at any time. Your information is secure and protected under our {privacy} and {terms}.",
        },

        // Form Fields (from shared schema)
        {
            key: 'formFields',
            type: 'form-builder',
            label: 'Form Fields',
            default: [], // Will use DEFAULT_FORM_FIELDS from shared schema
        },

        // Form Styling
        {
            key: 'formBgColor',
            type: 'color',
            label: 'Form Background Color',
            default: '#ffffff',
        },
        {
            key: 'formBorderRadius',
            type: 'text',
            label: 'Form Border Radius',
            default: '16px',
        },
        {
            key: 'inputBorderRadius',
            type: 'text',
            label: 'Input Border Radius',
            default: '8px',
        },
        {
            key: 'inputBorderColor',
            type: 'color',
            label: 'Input Border Color',
            default: '#d1d5db',
        },
        {
            key: 'inputPadding',
            type: 'text',
            label: 'Input Padding',
            default: '12px 16px',
        },
        {
            key: 'labelColor',
            type: 'color',
            label: 'Label Color',
            default: '#374151',
        },
        {
            key: 'labelFontSize',
            type: 'text',
            label: 'Label Font Size',
            default: '14px',
        },
        {
            key: 'labelFontWeight',
            type: 'select',
            label: 'Label Font Weight',
            options: [
                { value: '400', label: 'Normal (400)' },
                { value: '500', label: 'Medium (500)' },
                { value: '600', label: 'Semi-Bold (600)' },
                { value: '700', label: 'Bold (700)' },
            ],
            default: '500',
        },

        // Tracking Settings
        {
            key: 'enableUtmTracking',
            type: 'toggle',
            label: 'Enable UTM Tracking',
            default: true,
        },
        {
            key: 'enableGclidTracking',
            type: 'toggle',
            label: 'Enable GCLID Tracking',
            default: true,
        },
        {
            key: 'enableFbclidTracking',
            type: 'toggle',
            label: 'Enable FBCLID Tracking',
            default: true,
        },
    ],
};

export default heroSchema;
