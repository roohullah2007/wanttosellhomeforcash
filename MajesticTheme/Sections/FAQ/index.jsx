/**
 * FAQ Section - MajesticBuyerTheme
 * Split layout: title/CTA left, accordion right
 */

import { EditableText, EditableButton, useEditMode } from '../../../shared/Components/EditMode';
import { useState } from 'react';

export default function FAQSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();
    const [openIndex, setOpenIndex] = useState(0);

    const defaults = {
        badge: 'FAQ',
        headline: 'Common Questions',
        description: 'Get answers to frequently asked questions about our home buying process.',
        ctaText: 'Still Have Questions?',
        ctaLink: '/contact',
        faqs: [
            { question: 'How quickly can you buy my house?', answer: 'We can close in as little as 7 days, or on your schedule. You choose the closing date that works best for you.' },
            { question: 'Do I need to make repairs?', answer: 'No! We buy houses in any condition - as-is. You don\'t need to fix, clean, or paint anything.' },
            { question: 'Are there any fees or commissions?', answer: 'Zero fees or commissions. No realtor fees, no closing costs, no hidden charges. The offer we make is what you get.' },
            { question: 'How do you determine your offer?', answer: 'We look at your property\'s location, condition, and comparable sales in your area to make a fair, competitive cash offer.' },
            { question: 'What if I owe more than my house is worth?', answer: 'We can still help! We work with homeowners in all situations, including those facing foreclosure or underwater mortgages.' },
            { question: 'Is there any obligation?', answer: 'Absolutely not. Our cash offers are completely no-obligation. Take your time to review and decide what\'s best for you.' },
        ],
    };

    const badge = content.badge || defaults.badge;
    const headline = content.headline || defaults.headline;
    const description = content.description || defaults.description;
    const ctaText = content.ctaText || defaults.ctaText;
    const ctaLink = content.ctaLink || defaults.ctaLink;
    const faqs = content.faqs?.length > 0 ? content.faqs : defaults.faqs;

    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <section id="faq" className="ib-section-faq py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Title and CTA */}
                    <div>
                        <EditableText
                            as="span"
                            value={badge}
                            onChange={(val) => updateSectionContent('faq', 'badge', val)}
                            className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 theme-bg-accent-dark theme-text-text"
                            placeholder="Badge text"
                        />
                        <EditableText
                            as="h2"
                            value={headline}
                            onChange={(val) => updateSectionContent('faq', 'headline', val)}
                            className="text-[48px] font-medium mb-6 leading-tight theme-text-text"
                            placeholder="Headline"
                        />
                        <EditableText
                            as="p"
                            value={description}
                            onChange={(val) => updateSectionContent('faq', 'description', val)}
                            className="text-lg md:text-xl leading-relaxed mb-8 theme-text-light"
                            placeholder="Description"
                            multiline
                        />
                        <EditableButton
                            href={ctaLink}
                            text={ctaText}
                            elementType="button"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-lg hover:opacity-90 transition-all duration-300 theme-bg-primary"
                            onUpdate={({ text, href }) => {
                                if (text !== ctaText) updateSectionContent('faq', 'ctaText', text);
                                if (href !== ctaLink) updateSectionContent('faq', 'ctaLink', href);
                            }}
                        >
                            {ctaText}
                        </EditableButton>
                    </div>

                    {/* Right: Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} isOpen={openIndex === index} toggleFAQ={toggleFAQ} updateSectionContent={updateSectionContent} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq, index, isOpen, toggleFAQ, updateSectionContent }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <button onClick={() => toggleFAQ(index)} className="w-full flex items-start justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors duration-200">
                <EditableText
                    as="h3"
                    value={faq.question}
                    onChange={(val) => updateSectionContent('faq', `faqs.${index}.question`, val)}
                    className="text-lg md:text-xl font-medium pr-4 flex-1 theme-text-text"
                    placeholder="Question"
                />
                <span className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center transition-transform duration-300 theme-bg-primary ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <EditableText
                        as="p"
                        value={faq.answer}
                        onChange={(val) => updateSectionContent('faq', `faqs.${index}.answer`, val)}
                        className="leading-relaxed theme-text-light"
                        placeholder="Answer"
                        multiline
                    />
                </div>
            </div>
        </div>
    );
}
