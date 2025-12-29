/**
 * Testimonials2 Section - MajesticBuyerTheme
 * Horizontal scrolling cards with header on left, nav arrows on right, and author photos
 * Alternative testimonials design for the theme
 */

import { EditableText, useEditMode } from '../../../shared/Components/EditMode';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

export default function Testimonials2Section({ content = {} }) {
    const { updateSectionContent } = useEditMode();
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const defaults = {
        badge: 'Testimonials',
        headline: 'What Oklahoma',
        headlineEmphasis: 'homeowners',
        headlineSuffix: 'are saying',
        testimonials: [
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
    };

    const badge = content.badge || defaults.badge;
    const headline = content.headline || defaults.headline;
    const headlineEmphasis = content.headlineEmphasis || defaults.headlineEmphasis;
    const headlineSuffix = content.headlineSuffix || defaults.headlineSuffix;
    const testimonials = content.testimonials?.length > 0 ? content.testimonials : defaults.testimonials;

    // Support FAB background settings
    const backgroundColor = content.sectionBgColor || content.backgroundColor || 'var(--color-accent)';
    const backgroundImage = content.sectionBgImage || content.backgroundImage || '';

    const cardWidth = 518;
    const cardGap = 24;
    const maxIndex = Math.max(0, testimonials.length - 2);

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const translateX = currentIndex * (cardWidth + cardGap);

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
            className={`py-20 ${!backgroundImage && !backgroundColor ? 'theme-bg-accent' : ''}`}
            style={sectionStyle}
        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-12">
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-6 theme-bg-accent-dark">
                            <Users className="w-4 h-4 theme-text-light" aria-hidden="true" />
                            <span className="text-sm font-medium theme-text-light">
                                <EditableText
                                    value={badge}
                                    onChange={(val) => updateSectionContent('quotes', 'badge', val)}
                                    placeholder="Testimonials"
                                />
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-[40px] md:text-[48px] font-medium leading-tight theme-text-text">
                            <EditableText
                                value={headline}
                                onChange={(val) => updateSectionContent('quotes', 'headline', val)}
                                placeholder="What Oklahoma"
                            />{' '}
                            <span className="italic font-accent">
                                <EditableText
                                    value={headlineEmphasis}
                                    onChange={(val) => updateSectionContent('quotes', 'headlineEmphasis', val)}
                                    placeholder="homeowners"
                                />
                            </span>{' '}
                            <EditableText
                                value={headlineSuffix}
                                onChange={(val) => updateSectionContent('quotes', 'headlineSuffix', val)}
                                placeholder="are saying"
                            />
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className="bg-white hover:bg-gray-100 p-3 rounded-full shadow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={currentIndex >= maxIndex}
                            className="bg-white hover:bg-gray-100 p-3 rounded-full shadow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-800" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {/* Testimonial Cards Slider */}
                <div className="overflow-hidden" ref={sliderRef}>
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${translateX}px)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                index={index}
                                updateSectionContent={updateSectionContent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Testimonial Card Component
 */
function TestimonialCard({ testimonial, index, updateSectionContent }) {
    return (
        <div
            className="rounded-2xl p-8 border border-gray-300 flex-shrink-0 flex flex-col justify-between theme-bg-accent"
            style={{ width: '518px', height: '500px' }}
        >
            {/* Quote */}
            <div>
                <p className="text-[20px] font-medium leading-relaxed theme-text-text">
                    "<EditableText
                        value={testimonial.quote}
                        onChange={(val) => updateSectionContent('quotes', `testimonials.${index}.quote`, val)}
                        placeholder="Testimonial quote"
                        multiline
                    />"
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8">
                <img
                    src={testimonial.image || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <h4 className="text-[20px] font-medium mb-1 theme-text-text">
                        <EditableText
                            value={testimonial.author}
                            onChange={(val) => updateSectionContent('quotes', `testimonials.${index}.author`, val)}
                            placeholder="Author name"
                        />
                    </h4>
                    <p className="text-[16px] font-medium opacity-70 theme-text-text">
                        <EditableText
                            value={testimonial.location}
                            onChange={(val) => updateSectionContent('quotes', `testimonials.${index}.location`, val)}
                            placeholder="Location"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}
