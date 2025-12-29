/**
 * FAQ2 Section Schema - MajesticBuyerTheme
 * Two-column layout with content/CTA on left and accordion FAQs on right
 */
import { createSectionSchema } from '@/themes/shared/schemas';

export const faq2Schema = createSectionSchema({
    name: 'Help',
    key: 'help',
    description: 'Two-column FAQ layout with content and CTA on left, accordion on right',
    customFields: [
        {
            key: 'badge',
            type: 'text',
            label: 'Badge Text',
            default: 'FAQs',
            tab: 'variations',
        },
        {
            key: 'headlineLine1',
            type: 'text',
            label: 'Headline Line 1',
            default: 'Frequently Asked',
            tab: 'variations',
        },
        {
            key: 'headlineLine2',
            type: 'text',
            label: 'Headline Line 2 (Italic)',
            default: 'Questions',
            tab: 'variations',
        },
        {
            key: 'description',
            type: 'textarea',
            label: 'Description',
            default: 'Selling your home by owner can raise many questions. We\'ve compiled answers to the most common questions about our For Sale By Owner (FSBO) services, MLS listings, and the home selling process in Oklahoma.',
            tab: 'variations',
        },
        {
            key: 'ctaButton',
            type: 'group',
            label: 'CTA Button',
            tab: 'variations',
            fields: [
                {
                    key: 'text',
                    type: 'text',
                    label: 'Button Text',
                    default: 'Ask Questions',
                },
                {
                    key: 'href',
                    type: 'text',
                    label: 'Button Link',
                    default: '/contact',
                },
            ],
        },
        {
            key: 'faqs',
            type: 'repeater',
            label: 'FAQs',
            tab: 'variations',
            fields: [
                {
                    key: 'question',
                    type: 'text',
                    label: 'Question',
                    default: 'What is your question?',
                },
                {
                    key: 'answer',
                    type: 'textarea',
                    label: 'Answer',
                    default: 'This is the answer to the question.',
                },
            ],
            default: [
                {
                    question: 'What is an MLS flat-fee listing?',
                    answer: 'An MLS flat-fee listing allows you to list your property on the Multiple Listing Service (MLS) for a one-time flat fee, rather than paying a percentage-based commission. This gives your property the same exposure as agent-listed homes while saving you thousands in commission fees.',
                },
                {
                    question: 'Why should I list on the MLS?',
                    answer: 'The MLS is the primary database used by real estate agents to find properties for their buyers. By listing on the MLS, your property gets maximum exposure to thousands of potential buyers and their agents, significantly increasing your chances of a quick sale at the best price.',
                },
                {
                    question: 'Can I personally list my home on the MLS without a realtor?',
                    answer: 'Yes! With our flat-fee MLS service, you can list your home on the MLS without hiring a traditional real estate agent. We handle the MLS listing while you maintain full control over showings, negotiations, and the sale process.',
                },
                {
                    question: 'What does "realtor-friendly" mean?',
                    answer: 'Realtor-friendly means that buyer\'s agents are welcome to show your property and will receive a commission if they bring a buyer. This encourages agents to show your home to their clients, expanding your pool of potential buyers.',
                },
                {
                    question: 'How long does it take for my property to be listed on the MLS?',
                    answer: 'Once you submit your listing information and photos, your property is typically live on the MLS within 24-48 hours. From there, it will syndicate to major real estate websites like Zillow, Realtor.com, and Trulia.',
                },
                {
                    question: 'Can I cancel my MLS listing at any time?',
                    answer: 'Yes, you can cancel your MLS listing at any time. Simply contact us and we\'ll remove your listing from the MLS. There are no long-term contracts or cancellation fees.',
                },
            ],
        },
    ],
});

export default faq2Schema;
