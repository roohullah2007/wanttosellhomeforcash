import { useForm } from '@inertiajs/react';

export default function HeroSection() {
    const { data, setData, post, processing, errors } = useForm({
        property_address: '',
        name: '',
        phone: '',
        email: '',
        source: 'hero_form',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('lead.store'));
    };

    // Green check circle SVG component
    const GreenCheckCircle = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="#22C55E" strokeWidth="2" fill="transparent"/>
            <path d="M7 12.5L10.5 16L17 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none"></div>

            {/* Content */}
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left - Content */}
                    <div className="text-left order-2 lg:order-1">
                        {/* Main Heading */}
                        <h1 className="text-white text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-bold leading-[1.1] mb-4 md:mb-5 drop-shadow-2xl">
                            Your Trusted Home Buyers{' '}
                            <span className="italic font-accent">Nationwide</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium mb-6 md:mb-8 leading-relaxed max-w-xl drop-shadow-lg">
                            Get a fair cash offer in 24 hours. We buy houses in any condition. Close on your timeline.
                        </p>

                        {/* Benefits List with Green Check Icons */}
                        <div className="flex flex-col gap-3 md:gap-4 justify-start mb-6 md:mb-8">
                            <div className="flex items-center gap-3 justify-start">
                                <GreenCheckCircle />
                                <span className="text-white font-medium text-base md:text-lg">Local Trusted Business</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
                                <GreenCheckCircle />
                                <span className="text-white font-medium text-sm md:text-lg">No obligation stress free home review</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
                                <GreenCheckCircle />
                                <span className="text-white font-medium text-base md:text-lg">Fast Cash Offer, No hidden fees</span>
                            </div>
                        </div>

                        {/* Trust Logos */}
                        <div className="flex items-center justify-start">
                            <img src="/images/google.webp" alt="Trusted by Google, BBB, and Yelp" className="h-10 md:h-12 w-auto" />
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-2xl border-4 border-primary overflow-hidden w-full max-w-[447px]">
                            {/* Form Header */}
                            <div className="text-left pt-6 md:pt-8 pb-3 md:pb-4 px-4 md:px-8">
                                <h2 className="text-[22px] md:text-[28px] font-bold text-text mb-1">
                                    Receive a Fair Cash Offer
                                </h2>
                                <p className="text-primary text-lg md:text-xl font-bold uppercase tracking-wide mb-2 md:mb-3">
                                    IN ONLY 3 MINUTES!
                                </p>
                                <p className="text-text-light text-sm md:text-base">
                                    Fill out the form below to connect with us!
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="px-4 md:px-8 pb-6 md:pb-8 space-y-3 md:space-y-4">
                                {/* Property Address */}
                                <div>
                                    <label className="block text-sm md:text-base font-semibold text-text mb-1.5 md:mb-2">
                                        Property Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.property_address}
                                        onChange={(e) => setData('property_address', e.target.value)}
                                        className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-gray-600 text-sm md:text-base"
                                        placeholder="Enter Zip Code or Address (Required)"
                                    />
                                    {errors.property_address && <p className="text-red-500 text-sm mt-1">{errors.property_address}</p>}
                                </div>

                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm md:text-base font-semibold text-text mb-1.5 md:mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-gray-600 text-sm md:text-base"
                                        placeholder="Full Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Phone & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    <div>
                                        <label className="block text-sm md:text-base font-semibold text-text mb-1.5 md:mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-gray-600 text-sm md:text-base"
                                            placeholder="Phone Number"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm md:text-base font-semibold text-text mb-1.5 md:mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-gray-600 text-sm md:text-base"
                                            placeholder="Email Address"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 md:py-4 px-6 rounded-lg transition-all duration-300 text-base md:text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Submitting...' : 'Get A Quick Cash Offer Now!'}
                                </button>

                                {/* Footer Text */}
                                <p className="text-center text-text-light text-xs md:text-sm pt-1 md:pt-2">
                                    100% Free & Confidential
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
