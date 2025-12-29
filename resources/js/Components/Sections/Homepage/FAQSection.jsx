import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: 'How quickly can you buy my house?', answer: 'We can close in as little as 7 days, or on your schedule. You choose the closing date that works best for you.' },
        { question: 'Do I need to make repairs?', answer: "No! We buy houses in any condition - as-is. You don't need to fix, clean, or paint anything." },
        { question: 'Are there any fees or commissions?', answer: 'Zero fees or commissions. No realtor fees, no closing costs, no hidden charges. The offer we make is what you get.' },
        { question: 'How do you determine your offer?', answer: "We look at your property's location, condition, and comparable sales in your area to make a fair, competitive cash offer." },
        { question: 'What if I owe more than my house is worth?', answer: 'We can still help! We work with homeowners in all situations, including those facing foreclosure or underwater mortgages.' },
        { question: 'Is there any obligation?', answer: "Absolutely not. Our cash offers are completely no-obligation. Take your time to review and decide what's best for you." },
    ];

    return (
        <section id="faq" className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Title and CTA */}
                    <div>
                        <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-primary/10 text-primary">
                            FAQ
                        </span>
                        <h2 className="text-[48px] font-medium mb-6 leading-tight text-text">
                            Common Questions
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 text-text-light">
                            Get answers to frequently asked questions about our home buying process.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-lg hover:opacity-90 transition-all duration-300 bg-primary"
                        >
                            Still Have Questions?
                        </a>
                    </div>

                    {/* Right: Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full flex items-start justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <h3 className="text-lg md:text-xl font-medium pr-4 flex-1 text-text">{faq.question}</h3>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                                        <p className="leading-relaxed text-text-light">{faq.answer}</p>
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
