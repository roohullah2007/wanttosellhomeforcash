import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

export default function Testimonials2Section() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const testimonials = [
        {
            quote: 'They saved us so much time and stress! We were relocating for work and needed to sell fast. They made a fair offer, closed in just 10 days, and we could focus on our move without worrying about the house.',
            author: 'Sarah Mitchell',
            location: 'Sold home in Miami, FL',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
        {
            quote: 'I was skeptical at first, but they were completely transparent throughout the process. No hidden fees, no last-minute surprises. The price they offered was fair, and they handled all the paperwork. Highly recommend!',
            author: 'Michael Torres',
            location: 'Sold home in Houston, TX',
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
        {
            quote: 'After my divorce, I needed to sell our family home quickly. They were compassionate, professional, and made the entire process painless. I got cash in hand and could start fresh. Thank you!',
            author: 'Jennifer Adams',
            location: 'Sold home in Phoenix, AZ',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
        {
            quote: 'My elderly parents needed to move to assisted living and we had to sell their house fast. These folks were amazing - patient, understanding, and made a great offer. Closed in 2 weeks!',
            author: 'Robert Chen',
            location: 'Sold home in Denver, CO',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        },
    ];

    const maxIndex = testimonials.length - 1;

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-4 md:mb-6 bg-primary/10">
                            <Users className="w-4 h-4 text-primary" aria-hidden="true" />
                            <span className="text-sm font-medium text-primary">Testimonials</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-medium leading-tight text-text">
                            What{' '}
                            <span className="italic font-accent text-primary">homeowners</span>{' '}
                            are saying
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className="bg-white hover:bg-gray-100 p-2.5 md:p-3 rounded-full shadow border border-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" aria-hidden="true" />
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={currentIndex >= maxIndex}
                            className="bg-white hover:bg-gray-100 p-2.5 md:p-3 rounded-full shadow border border-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {/* Mobile: Single Card View */}
                <div className="block md:hidden">
                    <TestimonialCard testimonial={testimonials[currentIndex]} isMobile={true} />
                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: Slider View */}
                <div className="hidden md:block overflow-hidden" ref={sliderRef}>
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (518 + 24)}px)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} isMobile={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial, isMobile }) {
    return (
        <div
            className={`rounded-2xl p-6 md:p-8 border border-gray-200 flex-shrink-0 flex flex-col justify-between bg-accent hover:shadow-lg transition-all duration-300 ${
                isMobile ? 'w-full' : 'w-[518px] min-h-[400px]'
            }`}
        >
            {/* Quote */}
            <div>
                <p className="text-base md:text-[18px] font-medium leading-relaxed text-text">
                    "{testimonial.quote}"
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
                <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                    loading="lazy"
                    width="56"
                    height="56"
                />
                <div>
                    <h4 className="text-base md:text-[18px] font-semibold mb-0.5 md:mb-1 text-text">
                        {testimonial.author}
                    </h4>
                    <p className="text-xs md:text-[14px] font-medium text-text-light">
                        {testimonial.location}
                    </p>
                </div>
            </div>
        </div>
    );
}
