import { useState } from 'react';
import { Home, DollarSign, Clock, Ban, AlertTriangle, Key, ArrowUpRight, X, CheckCircle } from 'lucide-react';

export default function ServicesSection() {
    const [activeModal, setActiveModal] = useState(null);

    const services = [
        {
            icon: Home,
            title: 'Buy Houses As-Is',
            description: 'No need to make repairs or renovations. We buy houses in any condition.',
            modalContent: {
                heading: 'We Buy Houses in Any Condition',
                subheading: 'No repairs, no cleaning, no hassle',
                details: 'Whether your house needs minor touch-ups or major renovations, we\'ll buy it as-is. You don\'t need to spend time or money fixing anything before selling to us.',
                benefits: [
                    'No need to fix structural issues',
                    'No cleaning or staging required',
                    'We buy houses with code violations',
                    'Fire or water damaged homes welcome',
                    'Outdated properties are no problem',
                ],
            },
        },
        {
            icon: DollarSign,
            title: 'Fast Cash Offers',
            description: 'Get a fair cash offer within 24-48 hours with no obligation.',
            modalContent: {
                heading: 'Get a Fair Cash Offer Fast',
                subheading: 'No waiting, no uncertainty',
                details: 'We understand that time is valuable. That\'s why we provide fair cash offers within 24-48 hours of learning about your property. Our offers are transparent with no hidden fees.',
                benefits: [
                    'Cash offer within 24-48 hours',
                    'No obligation to accept',
                    'Transparent pricing breakdown',
                    'No lowball tactics',
                    'We pay fair market value',
                ],
            },
        },
        {
            icon: Clock,
            title: 'Quick Closings',
            description: 'Close on your schedule - as fast as 7 days or take your time.',
            modalContent: {
                heading: 'Close on Your Timeline',
                subheading: 'As fast as 7 days or whenever you\'re ready',
                details: 'You\'re in control of the closing date. Need to sell fast? We can close in as little as 7 days. Need more time? We\'ll work with your schedule to find the perfect closing date.',
                benefits: [
                    'Close in as few as 7 days',
                    'Flexible closing dates available',
                    'No pressure to rush',
                    'We work around your schedule',
                    'Stay in your home until closing',
                ],
            },
        },
        {
            icon: Ban,
            title: 'No Fees or Commissions',
            description: 'Keep all your money. No realtor fees, no closing costs, no hidden charges.',
            modalContent: {
                heading: 'Zero Fees, Zero Commissions',
                subheading: 'Keep more money in your pocket',
                details: 'Unlike traditional home sales where you pay 6% in realtor commissions plus closing costs, we don\'t charge any fees. The offer we make is the amount you receive.',
                benefits: [
                    'No realtor commissions (save 6%)',
                    'We cover all closing costs',
                    'No hidden fees or charges',
                    'No inspection fees',
                    'What we offer is what you get',
                ],
            },
        },
        {
            icon: AlertTriangle,
            title: 'Foreclosure Prevention',
            description: 'Facing foreclosure? We can help you avoid it and move forward.',
            modalContent: {
                heading: 'Avoid Foreclosure Today',
                subheading: 'We can help you move forward',
                details: 'Foreclosure can devastate your credit and financial future. We specialize in helping homeowners facing foreclosure sell their homes quickly to avoid the negative consequences.',
                benefits: [
                    'Stop foreclosure proceedings',
                    'Protect your credit score',
                    'Get cash to start fresh',
                    'Fast closing before auction date',
                    'Confidential and compassionate service',
                ],
            },
        },
        {
            icon: Key,
            title: 'Inherited Property',
            description: 'Sell inherited properties without the hassle of probate or maintenance.',
            modalContent: {
                heading: 'Sell Inherited Property Easily',
                subheading: 'No probate headaches, no maintenance burden',
                details: 'Inheriting a property can be overwhelming, especially when you live far away or don\'t have time to manage it. We make it easy to sell inherited homes quickly and move on.',
                benefits: [
                    'We handle probate properties',
                    'No need to clean out the house',
                    'Buy properties with multiple heirs',
                    'Fast resolution for estate sales',
                    'No maintenance or upkeep needed',
                ],
            },
        },
    ];

    return (
        <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    {/* Left: Badge and Heading */}
                    <div>
                        <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-primary/10 text-primary">
                            What We Offer
                        </span>
                        <h2 className="text-[48px] font-medium leading-tight text-text">
                            How We Help{' '}
                            <span className="italic font-accent text-primary">You</span>
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <div className="flex items-center">
                        <p className="text-lg md:text-xl leading-relaxed text-text-light">
                            We provide comprehensive solutions for homeowners looking to sell their properties quickly and hassle-free.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            service={service}
                            onClick={() => setActiveModal(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeModal !== null && (
                <ServiceModal
                    service={services[activeModal]}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </section>
    );
}

function ServiceItem({ service, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = service.icon;

    return (
        <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-text">{service.title}</h3>
                </div>
                <div className="ml-4">
                    <ArrowUpRight
                        className={`w-6 h-6 text-primary transition-transform duration-300 ${
                            isHovered ? 'translate-x-1 -translate-y-1' : ''
                        }`}
                    />
                </div>
            </div>
            <p className="leading-relaxed text-text-light">{service.description}</p>
        </div>
    );
}

function ServiceModal({ service, onClose }) {
    const Icon = service.icon;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Modal Header */}
                <div className="bg-primary p-6 rounded-t-2xl">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white">{service.modalContent.heading}</h3>
                            <p className="text-white/80 text-sm mt-1">{service.modalContent.subheading}</p>
                        </div>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <p className="text-text-light leading-relaxed mb-6">
                        {service.modalContent.details}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-6">
                        {service.modalContent.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-text">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        onClick={onClose}
                        className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
                    >
                        Get Your Cash Offer Now
                    </a>
                </div>
            </div>
        </div>
    );
}
