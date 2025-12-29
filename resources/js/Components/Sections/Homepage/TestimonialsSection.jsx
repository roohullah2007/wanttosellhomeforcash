import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "They made selling my house so easy! No repairs, no hassle, just a fair offer and a quick close. I couldn't be happier with the experience.",
            author: 'Sarah M.',
            location: 'Dallas, TX',
            rating: 5,
        },
        {
            quote: "I was facing foreclosure and didn't know what to do. They helped me sell quickly and saved my credit. I'm so grateful for their help.",
            author: 'Michael R.',
            location: 'Fort Worth, TX',
            rating: 5,
        },
        {
            quote: "Professional, honest, and fast. They did exactly what they said they would do. I got my cash in 10 days and moved on with my life.",
            author: 'Jennifer L.',
            location: 'Arlington, TX',
            rating: 5,
        },
        {
            quote: "I inherited a property that needed a lot of work. They bought it as-is, handled everything, and made the whole process stress-free.",
            author: 'David K.',
            location: 'Plano, TX',
            rating: 5,
        },
    ];

    const goToNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-primary">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-white/10 text-sm font-medium rounded-full mb-4 text-white">
                        What Our Clients Say
                    </span>
                    <h2 className="text-[48px] font-medium leading-tight">
                        <span className="text-white">Real Stories from </span>
                        <span className="italic text-white font-accent">Happy Sellers</span>
                    </h2>
                </div>

                {/* Slider */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial Cards */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                                        {/* Stars */}
                                        <div className="flex justify-center gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="text-xl md:text-2xl leading-relaxed text-center mb-8 text-text">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        {/* Author */}
                                        <div className="text-center">
                                            <cite className="not-italic font-bold text-lg text-text">{testimonial.author}</cite>
                                            <p className="mt-1 text-text-light">{testimonial.location}</p>
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
                            className="w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 hover:text-white text-primary"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={currentIndex === testimonials.length - 1}
                            className="w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 hover:text-white text-primary"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-white w-8'
                                        : 'bg-white/40 hover:bg-white/60 w-3'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
