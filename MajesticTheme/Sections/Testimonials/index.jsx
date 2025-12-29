/**
 * Testimonials Section - MajesticBuyerTheme
 * OkByOwner design with horizontal slider, quote cards, and arrow navigation
 */

import { EditableText, useEditMode } from '../../../shared/Components/EditMode';
import { useState, useRef, useEffect } from 'react';

export default function TestimonialsSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef(null);

    const defaults = {
        badge: 'What Our Clients Say',
        headline: 'Real Stories from',
        headlineEmphasis: 'Happy Sellers',
        testimonials: [
            {
                quote: 'They made selling my house so easy! No repairs, no hassle, just a fair offer and a quick close. I couldn\'t be happier with the experience.',
                author: 'Sarah M.',
                location: 'Dallas, TX',
                rating: 5,
            },
            {
                quote: 'I was facing foreclosure and didn\'t know what to do. They helped me sell quickly and saved my credit. I\'m so grateful for their help.',
                author: 'Michael R.',
                location: 'Fort Worth, TX',
                rating: 5,
            },
            {
                quote: 'Professional, honest, and fast. They did exactly what they said they would do. I got my cash in 10 days and moved on with my life.',
                author: 'Jennifer L.',
                location: 'Arlington, TX',
                rating: 5,
            },
            {
                quote: 'I inherited a property that needed a lot of work. They bought it as-is, handled everything, and made the whole process stress-free.',
                author: 'David K.',
                location: 'Plano, TX',
                rating: 5,
            },
        ],
    };

    const badge = content.badge || defaults.badge;
    const headline = content.headline || defaults.headline;
    const headlineEmphasis = content.headlineEmphasis || defaults.headlineEmphasis;
    const testimonials = content.testimonials?.length > 0 ? content.testimonials : defaults.testimonials;

    // Support FAB background settings
    const backgroundColor = content.sectionBgColor || content.backgroundColor || 'var(--color-accent)';
    const backgroundImage = content.sectionBgImage || content.backgroundImage || '';

    const goToNext = () => {
        if (!isAnimating && currentIndex < testimonials.length - 1) {
            setIsAnimating(true);
            setCurrentIndex(currentIndex + 1);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    const goToPrevious = () => {
        if (!isAnimating && currentIndex > 0) {
            setIsAnimating(true);
            setCurrentIndex(currentIndex - 1);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

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
            id="testimonials"
            className={`ib-section-testimonials py-16 md:py-24 lg:py-32 ${!backgroundImage && !backgroundColor ? 'theme-bg-accent' : ''}`}
            style={sectionStyle}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <EditableText
                        as="span"
                        value={badge}
                        onChange={(val) => updateSectionContent('reviews', 'badge', val)}
                        className="inline-block px-4 py-2 bg-white text-sm font-medium rounded-full mb-4 theme-text-text"
                        placeholder="Badge text"
                    />
                    <h2 className="text-[48px] font-medium leading-tight">
                        <EditableText
                            value={headline}
                            onChange={(val) => updateSectionContent('reviews', 'headline', val)}
                            className="theme-text-text"
                            placeholder="Headline"
                        />{' '}
                        <span className="italic theme-text-primary">
                            <EditableText
                                value={headlineEmphasis}
                                onChange={(val) => updateSectionContent('reviews', 'headlineEmphasis', val)}
                                placeholder="Emphasis text"
                            />
                        </span>
                    </h2>
                </div>

                {/* Slider */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial Cards */}
                    <div className="overflow-hidden" ref={sliderRef}>
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                                        {/* Stars */}
                                        <div className="flex justify-center gap-1 mb-6">
                                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                <StarIcon key={i} />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <EditableText
                                            as="blockquote"
                                            value={testimonial.quote}
                                            onChange={(val) => updateSectionContent('reviews', `testimonials.${index}.quote`, val)}
                                            className="text-xl md:text-2xl leading-relaxed text-center mb-8 theme-text-text"
                                            placeholder="Testimonial quote"
                                            multiline
                                        />

                                        {/* Author */}
                                        <div className="text-center">
                                            <EditableText
                                                as="cite"
                                                value={testimonial.author}
                                                onChange={(val) => updateSectionContent('reviews', `testimonials.${index}.author`, val)}
                                                className="not-italic font-bold text-lg theme-text-text"
                                                placeholder="Author name"
                                            />
                                            <EditableText
                                                as="p"
                                                value={testimonial.location}
                                                onChange={(val) => updateSectionContent('reviews', `testimonials.${index}.location`, val)}
                                                className="mt-1 theme-text-light"
                                                placeholder="Location"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 rounded-full bg-white border-2 theme-border-text flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:theme-bg-secondary hover:text-white"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={currentIndex === testimonials.length - 1}
                            className="w-12 h-12 rounded-full bg-white border-2 theme-border-text flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:theme-bg-secondary hover:text-white"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 300);
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'theme-bg-primary w-8'
                                        : 'bg-gray-400 hover:bg-gray-600'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StarIcon() {
    return (
        <svg className="w-6 h-6 theme-text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}
