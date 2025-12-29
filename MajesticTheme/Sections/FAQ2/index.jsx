/**
 * FAQ2 Section - MajesticBuyerTheme
 * Two-column layout with content/CTA on left and accordion FAQs on right
 * Alternative FAQ design for the theme
 */

import { EditableText, useEditMode } from '../../../shared/Components/EditMode';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ2Section({ content = {} }) {
    const { updateSectionContent } = useEditMode();
    const [openIndex, setOpenIndex] = useState(null);

    const defaults = {
        badge: 'FAQs',
        headlineLine1: 'Frequently Asked',
        headlineLine2: 'Questions',
        description: 'Selling your home by owner can raise many questions. We\'ve compiled answers to the most common questions about our For Sale By Owner (FSBO) services, MLS listings, and the home selling process in Oklahoma. Whether you\'re curious about how to list your property, what costs are involved, or how our platform works, you\'ll find detailed answers below. Can\'t find an answer to your question? Contact us, and we\'ll be happy to provide personalized assistance and guidance for your specific situation.',
        ctaButton: {
            text: 'Ask Questions',
            href: '/contact',
        },
        faqs: [
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
    };

    const badge = content.badge || defaults.badge;
    const headlineLine1 = content.headlineLine1 || defaults.headlineLine1;
    const headlineLine2 = content.headlineLine2 || defaults.headlineLine2;
    const description = content.description || defaults.description;
    const ctaButton = content.ctaButton || defaults.ctaButton;
    const faqs = content.faqs?.length > 0 ? content.faqs : defaults.faqs;

    // Support FAB background settings
    const backgroundColor = content.sectionBgColor || content.backgroundColor || 'var(--color-accent)';
    const backgroundImage = content.sectionBgImage || content.backgroundImage || '';

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const ArrowIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_faq2_btn" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style={{ maskType: 'alpha' }}>
                <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_faq2_btn)">
                <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white" />
            </g>
        </svg>
    );

    // Build background styles
    const sectionStyle = {};
    if (backgroundImage) {
        sectionStyle.backgroundImage = `url(${backgroundImage})`;
        sectionStyle.backgroundSize = 'cover';
        sectionStyle.backgroundPosition = 'center';
        sectionStyle.backgroundRepeat = 'no-repeat';
    }
    if (backgroundColor && !backgroundImage) {
        sectionStyle.backgroundColor = backgroundColor;
    }

    return (
        <section
            className={`py-20 md:py-28 ${!backgroundImage && !backgroundColor ? 'theme-bg-accent' : ''}`}
            style={sectionStyle}
        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-8 theme-bg-accent-dark">
                    <HelpCircle className="w-4 h-4 theme-text-light" aria-hidden="true" />
                    <span className="text-sm font-medium theme-text-light">
                        <EditableText
                            value={badge}
                            onChange={(val) => updateSectionContent('help', 'badge', val)}
                            placeholder="FAQs"
                        />
                    </span>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Content */}
                    <div>
                        <h2 className="mb-6">
                            <span className="block text-[48px] font-semibold leading-[120%] theme-text-text">
                                <EditableText
                                    value={headlineLine1}
                                    onChange={(val) => updateSectionContent('help', 'headlineLine1', val)}
                                    placeholder="Frequently Asked"
                                />
                            </span>
                            <span className="block text-[48px] font-semibold leading-[120%] italic theme-text-text">
                                <EditableText
                                    value={headlineLine2}
                                    onChange={(val) => updateSectionContent('help', 'headlineLine2', val)}
                                    placeholder="Questions"
                                />
                            </span>
                        </h2>

                        <p className="text-[14px] font-medium mb-10 leading-relaxed theme-text-light">
                            <EditableText
                                value={description}
                                onChange={(val) => updateSectionContent('help', 'description', val)}
                                placeholder="Description text"
                                multiline
                            />
                        </p>

                        <a
                            className="inline-flex items-center gap-[0.4rem] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:opacity-90 theme-bg-primary"
                            href={ctaButton.href}
                        >
                            <span>
                                <EditableText
                                    value={ctaButton.text}
                                    onChange={(val) => updateSectionContent('help', 'ctaButton.text', val)}
                                    placeholder="Ask Questions"
                                />
                            </span>
                            <ArrowIcon />
                        </a>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl mb-4 overflow-hidden transition-all duration-300 theme-bg-background-alt"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left transition-colors group"
                                >
                                    <span className="text-[18px] font-medium pr-4 transition-colors theme-text-text">
                                        <EditableText
                                            value={faq.question}
                                            onChange={(val) => updateSectionContent('help', `faqs.${index}.question`, val)}
                                            placeholder="Question"
                                        />
                                    </span>
                                    <div className="flex-shrink-0 transition-all duration-300">
                                        <ChevronDown
                                            className={`w-6 h-6 transition-transform duration-300 theme-text-text ${
                                                openIndex === index ? 'rotate-180' : ''
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-[14px] leading-relaxed theme-text-light">
                                            <EditableText
                                                value={faq.answer}
                                                onChange={(val) => updateSectionContent('help', `faqs.${index}.answer`, val)}
                                                placeholder="Answer"
                                                multiline
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
