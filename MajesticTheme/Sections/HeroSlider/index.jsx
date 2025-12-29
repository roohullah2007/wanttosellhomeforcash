/**
 * Hero Slider Section - MajesticBuyerTheme
 * Full-screen hero slider with multiple slides, headlines, and CTA buttons
 */

import { EditableText, EditableButton, EditableImage, useEditMode } from '../../../shared/Components/EditMode';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSliderSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const defaults = {
        slides: [
            {
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
                headlineLine1: 'We Buy Houses',
                headlineLine2: 'Fast Cash Offers',
                alt: 'We Buy Houses',
            },
            {
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
                headlineLine1: 'Any Condition',
                headlineLine2: 'No Repairs Needed',
                alt: 'Any Condition',
            },
            {
                image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920',
                headlineLine1: 'Close on Your',
                headlineLine2: 'Timeline',
                alt: 'Close on Your Timeline',
            },
        ],
        primaryButton: {
            text: 'Get Cash Offer',
            href: '#contact-form',
        },
        secondaryButton: {
            text: 'How It Works',
            href: '#how-it-works',
        },
        autoPlayInterval: 5000,
    };

    const slides = content.slides?.length > 0 ? content.slides : defaults.slides;
    const primaryButton = content.primaryButton || defaults.primaryButton;
    const secondaryButton = content.secondaryButton || defaults.secondaryButton;
    const autoPlayInterval = content.autoPlayInterval || defaults.autoPlayInterval;

    const goToNext = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const goToPrevious = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isAutoPlaying, goToNext, autoPlayInterval]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    const ArrowIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask_arrow" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style={{ maskType: 'alpha' }}>
                <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask_arrow)">
                <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor" />
            </g>
        </svg>
    );

    return (
        <section
            className="relative w-full py-20 theme-bg-accent"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="relative h-[750px]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <EditableImage
                                    src={slide.image}
                                    alt={slide.alt || slide.headlineLine1}
                                    className="w-full h-full"
                                    imageType="background"
                                    onUpdate={({ src, alt }) => {
                                        if (src) updateSectionContent('carousel', `slides.${index}.image`, src);
                                        if (alt) updateSectionContent('carousel', `slides.${index}.alt`, alt);
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 px-12 md:px-16 pb-12">
                                    <div className="flex items-end justify-between">
                                        <div className="max-w-3xl">
                                            <h1 className="text-white text-[48px] md:text-[64px] font-medium leading-tight mb-8">
                                                <EditableText
                                                    value={slide.headlineLine1}
                                                    onChange={(val) => updateSectionContent('carousel', `slides.${index}.headlineLine1`, val)}
                                                    placeholder="Headline Line 1"
                                                />
                                                <br />
                                                <EditableText
                                                    value={slide.headlineLine2}
                                                    onChange={(val) => updateSectionContent('carousel', `slides.${index}.headlineLine2`, val)}
                                                    placeholder="Headline Line 2"
                                                />
                                            </h1>

                                            {/* CTA Buttons */}
                                            <div className="flex flex-wrap gap-3">
                                                <EditableButton
                                                    href={primaryButton.href}
                                                    text={primaryButton.text}
                                                    elementType="link"
                                                    className="inline-flex items-center gap-[0.4rem] bg-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:theme-bg-accent-dark theme-text-text"
                                                    onUpdate={({ text, href }) => {
                                                        if (text !== primaryButton.text) updateSectionContent('carousel', 'primaryButton.text', text);
                                                        if (href !== primaryButton.href) updateSectionContent('carousel', 'primaryButton.href', href);
                                                    }}
                                                >
                                                    <span>{primaryButton.text}</span>
                                                    <ArrowIcon />
                                                </EditableButton>
                                                <EditableButton
                                                    href={secondaryButton.href}
                                                    text={secondaryButton.text}
                                                    elementType="link"
                                                    className="inline-flex items-center gap-[0.4rem] bg-transparent border border-white text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/10"
                                                    onUpdate={({ text, href }) => {
                                                        if (text !== secondaryButton.text) updateSectionContent('carousel', 'secondaryButton.text', text);
                                                        if (href !== secondaryButton.href) updateSectionContent('carousel', 'secondaryButton.href', href);
                                                    }}
                                                >
                                                    <span>{secondaryButton.text}</span>
                                                    <ArrowIcon />
                                                </EditableButton>
                                            </div>
                                        </div>

                                        {/* Navigation Arrows */}
                                        <div className="flex gap-4 mb-2">
                                            <button
                                                onClick={goToPrevious}
                                                className="bg-white hover:bg-gray-100 p-4 rounded-full shadow-lg transition-all duration-300"
                                                aria-label="Previous slide"
                                            >
                                                <ChevronLeft className="w-6 h-6 text-gray-800" aria-hidden="true" />
                                            </button>
                                            <button
                                                onClick={goToNext}
                                                className="bg-white hover:bg-gray-100 p-4 rounded-full shadow-lg transition-all duration-300"
                                                aria-label="Next slide"
                                            >
                                                <ChevronRight className="w-6 h-6 text-gray-800" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
