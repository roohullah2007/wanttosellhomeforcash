/**
 * Testimonials2 Section Schema - MajesticBuyerTheme
 * Horizontal scrolling cards with header on left, nav arrows on right, and author photos
 */
import { createSectionSchema } from '@/themes/shared/schemas';

export const testimonials2Schema = createSectionSchema({
    name: 'Quotes',
    key: 'quotes',
    description: 'Horizontal scrolling testimonial cards with author photos',
    customFields: [
        {
            key: 'badge',
            type: 'text',
            label: 'Badge Text',
            default: 'Testimonials',
            tab: 'variations',
        },
        {
            key: 'headline',
            type: 'text',
            label: 'Headline',
            default: 'What Oklahoma',
            tab: 'variations',
        },
        {
            key: 'headlineEmphasis',
            type: 'text',
            label: 'Headline Emphasis (Italic)',
            default: 'homeowners',
            tab: 'variations',
        },
        {
            key: 'headlineSuffix',
            type: 'text',
            label: 'Headline Suffix',
            default: 'are saying',
            tab: 'variations',
        },
        {
            key: 'testimonials',
            type: 'repeater',
            label: 'Testimonials',
            tab: 'variations',
            fields: [
                {
                    key: 'quote',
                    type: 'textarea',
                    label: 'Quote',
                    default: 'This is a testimonial quote from a satisfied customer.',
                },
                {
                    key: 'author',
                    type: 'text',
                    label: 'Author Name',
                    default: 'John Doe',
                },
                {
                    key: 'location',
                    type: 'text',
                    label: 'Location/Title',
                    default: 'Sold home in Oklahoma City',
                },
                {
                    key: 'image',
                    type: 'image',
                    label: 'Author Photo',
                    default: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
                },
            ],
            default: [
                {
                    quote: 'OK BY OWNER saved us over $15,000 in commission fees when we sold our home. The MLS listing got our property in front of thousands of buyers, and the process was so much easier than we expected. We had full control and expert support every step of the way.',
                    author: 'Sarah Mitchell',
                    location: 'Sold home in Oklahoma City',
                    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
                },
                {
                    quote: 'I was skeptical about selling without a realtor, but OK BY OWNER made it incredibly simple. The free listing, professional tools, and responsive support team gave me everything I needed. We sold in just 45 days and kept thousands more in our pocket.',
                    author: 'Michael Torres',
                    location: 'Sold home in Tulsa',
                    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
                },
                {
                    quote: 'The platform is user-friendly and the marketing tools are top-notch. We listed our home for free, got great exposure through the MLS, and had multiple offers within weeks. This is the future of home selling in Oklahoma!',
                    author: 'Jennifer Adams',
                    location: 'Sold home in Norman',
                    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
                },
            ],
        },
    ],
});

export default testimonials2Schema;
