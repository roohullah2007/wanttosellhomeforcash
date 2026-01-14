import { useForm } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
    const [bgImage, setBgImage] = useState('');
    const addressInputRef = useRef(null);
    const autocompleteRef = useRef(null);

    useEffect(() => {
        // Use smaller image for mobile, larger for desktop
        const isMobile = window.innerWidth <= 768;
        const imageUrl = isMobile
            ? 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
            : 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1280';
        setBgImage(imageUrl);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        property_address: '',
        name: '',
        phone: '',
        email: '',
        source: 'hero_form',
        consent: false,
        recaptcha_token: '',
    });

    const recaptchaRef = useRef(null);
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    // Initialize reCAPTCHA when component mounts
    useEffect(() => {
        if (recaptchaSiteKey && window.grecaptcha && recaptchaRef.current) {
            try {
                window.grecaptcha.render(recaptchaRef.current, {
                    sitekey: recaptchaSiteKey,
                    callback: (token) => setData('recaptcha_token', token),
                    'expired-callback': () => setData('recaptcha_token', ''),
                });
            } catch (e) {
                // Already rendered
            }
        }
    }, [recaptchaSiteKey]);

    // Google Places Autocomplete setup
    useEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
        if (!apiKey) return;

        let checkInterval = null;
        let isInitialized = false;

        const initAutocomplete = () => {
            if (isInitialized || !addressInputRef.current || !window.google?.maps?.places) return;

            isInitialized = true;

            autocompleteRef.current = new window.google.maps.places.Autocomplete(
                addressInputRef.current,
                {
                    types: ['address'],
                    componentRestrictions: { country: 'us' },
                }
            );

            autocompleteRef.current.addListener('place_changed', () => {
                const place = autocompleteRef.current.getPlace();
                if (place.formatted_address) {
                    setData('property_address', place.formatted_address);
                }
            });
        };

        const waitForGoogleAndInit = () => {
            checkInterval = setInterval(() => {
                if (window.google?.maps?.places && addressInputRef.current) {
                    clearInterval(checkInterval);
                    checkInterval = null;
                    initAutocomplete();
                }
            }, 100);
        };

        // Check if script already loaded and ready
        if (window.google?.maps?.places) {
            // Small delay to ensure input ref is attached
            setTimeout(initAutocomplete, 0);
        } else if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
            // Load Google Places API script
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                // Wait a tick for React to finish rendering
                setTimeout(initAutocomplete, 0);
            };
            document.head.appendChild(script);
        } else {
            // Script exists but may still be loading
            waitForGoogleAndInit();
        }

        return () => {
            if (checkInterval) {
                clearInterval(checkInterval);
            }
            if (autocompleteRef.current) {
                window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current);
                autocompleteRef.current = null;
            }
        };
    }, []);

    // Convert formatted phone to plain: +11234567890
    const getPlainPhone = (formatted) => {
        const digits = formatted.replace(/\D/g, '').replace(/^1/, '');
        return digits ? `+1${digits}` : '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('lead.store'), {
            transform: (formData) => ({
                ...formData,
                phone: getPlainPhone(formData.phone),
            }),
        });
    };

    // Format phone number as +1 (XXX) XXX-XXXX
    const formatPhoneNumber = (value) => {
        // Remove all non-numeric characters
        const numbers = value.replace(/\D/g, '');

        // Remove leading 1 if present (we'll add +1 automatically)
        const cleaned = numbers.startsWith('1') ? numbers.slice(1) : numbers;

        // Limit to 10 digits
        const limited = cleaned.slice(0, 10);

        // Format based on length
        if (limited.length === 0) return '';
        if (limited.length <= 3) return `+1 (${limited}`;
        if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
        return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setData('phone', formatted);
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
            className="relative min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden bg-cover bg-center bg-no-repeat bg-gray-800"
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
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
                            <img src="/images/google.webp" alt="Trusted by Google, BBB, and Yelp" className="h-10 md:h-12 w-auto" width="180" height="48" loading="eager" />
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-2xl border-4 border-primary overflow-hidden w-full max-w-[447px]">
                            {/* Form Header */}
                            <div className="text-left pt-6 md:pt-8 pb-3 md:pb-4 px-4 md:px-8">
                                <h2 className="text-[22px] md:text-[28px] font-bold text-text mb-2 md:mb-3">
                                    Receive a Fair Cash Offer
                                </h2>
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
                                        ref={addressInputRef}
                                        type="text"
                                        required
                                        value={data.property_address}
                                        onChange={(e) => setData('property_address', e.target.value)}
                                        className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-gray-600 text-sm md:text-base"
                                        placeholder="Start typing your address..."
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
                                            onChange={handlePhoneChange}
                                            className="w-full px-3 md:px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-gray-600 text-sm md:text-base"
                                            placeholder="+1 (123) 456-7890"
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

                                {/* Compliance Checkbox */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        id="consent_hero"
                                        required
                                        checked={data.consent}
                                        onChange={(e) => setData('consent', e.target.checked)}
                                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                    />
                                    <label htmlFor="consent_hero" className="text-xs text-gray-600 leading-tight">
                                        By checking this box, I agree to be contacted by Want To Sell Home For Cash or its affiliates via call, email, or text. I understand that my consent is not a condition of purchase. I agree to the{' '}
                                        <a href="/terms-of-service" className="text-primary underline">Terms of Service</a> and{' '}
                                        <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>.
                                    </label>
                                </div>
                                {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}

                                {/* Google reCAPTCHA */}
                                {recaptchaSiteKey && (
                                    <div className="flex justify-center">
                                        <div ref={recaptchaRef}></div>
                                    </div>
                                )}
                                {errors.recaptcha_token && <p className="text-red-500 text-xs text-center">{errors.recaptcha_token}</p>}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={processing || !data.consent || (recaptchaSiteKey && !data.recaptcha_token)}
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
