import { useForm } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Handshake, ArrowRight } from 'lucide-react';

export default function ContactSection() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        property_address: '',
        is_homeowner: '',
        is_property_listed: '',
        message: '',
        source: 'contact_form',
        consent: false,
        recaptcha_token: '',
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: '',
    });

    // Capture UTM parameters from URL on mount
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = {
            utm_source: urlParams.get('utm_source') || '',
            utm_medium: urlParams.get('utm_medium') || '',
            utm_campaign: urlParams.get('utm_campaign') || '',
            utm_term: urlParams.get('utm_term') || '',
            utm_content: urlParams.get('utm_content') || '',
        };

        // Only update if we have at least one UTM param
        if (Object.values(utmParams).some(v => v)) {
            Object.entries(utmParams).forEach(([key, value]) => {
                if (value) setData(key, value);
            });
        }
    }, []);

    const addressInputRef = useRef(null);
    const autocompleteRef = useRef(null);
    const recaptchaRef = useRef(null);
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const [recaptchaRendered, setRecaptchaRendered] = useState(false);

    // Initialize reCAPTCHA
    useEffect(() => {
        if (!recaptchaSiteKey || !recaptchaRef.current) return;

        const initRecaptcha = () => {
            if (window.grecaptcha && window.grecaptcha.render) {
                try {
                    window.grecaptcha.render(recaptchaRef.current, {
                        sitekey: recaptchaSiteKey,
                        callback: (token) => setData('recaptcha_token', token),
                        'expired-callback': () => setData('recaptcha_token', ''),
                    });
                    setRecaptchaRendered(true);
                } catch (e) {
                    // Already rendered or error
                }
            }
        };

        // Check if grecaptcha is ready
        if (window.grecaptcha && window.grecaptcha.render) {
            initRecaptcha();
        } else {
            // Wait for grecaptcha to be ready
            const checkRecaptcha = setInterval(() => {
                if (window.grecaptcha && window.grecaptcha.render) {
                    clearInterval(checkRecaptcha);
                    initRecaptcha();
                }
            }, 100);

            // Cleanup after 10 seconds if not loaded
            setTimeout(() => clearInterval(checkRecaptcha), 10000);
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
        const numbers = value.replace(/\D/g, '');
        const cleaned = numbers.startsWith('1') ? numbers.slice(1) : numbers;
        const limited = cleaned.slice(0, 10);

        if (limited.length === 0) return '';
        if (limited.length <= 3) return `+1 (${limited}`;
        if (limited.length <= 6) return `+1 (${limited.slice(0, 3)}) ${limited.slice(3)}`;
        return `+1 (${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setData('phone', formatted);
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-primary">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Content */}
                    <div>
                        <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-white/10 text-white">
                            Get Your Offer
                        </span>
                        <h2 className="text-[36px] md:text-[48px] font-medium leading-tight mb-6 text-white">
                            Ready to sell your house{' '}
                            <span className="italic font-accent text-white">fast for cash?</span>
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            Fill out the form and we'll get back to you within 24 hours with a fair, no-obligation cash offer for your property.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-white font-medium">Cash offer within 24 hours</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-white font-medium">No repairs or cleaning needed</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Handshake className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-white font-medium">Close on your timeline</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-text mb-6">Get Your Cash Offer</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={data.phone}
                                        onChange={handlePhoneChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="+1 (123) 456-7890"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Property Address *</label>
                                <input
                                    ref={addressInputRef}
                                    type="text"
                                    required
                                    value={data.property_address}
                                    onChange={(e) => setData('property_address', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Start typing your address..."
                                />
                                {errors.property_address && <p className="text-red-500 text-sm mt-1">{errors.property_address}</p>}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Are You the Homeowner? *</label>
                                    <select
                                        required
                                        value={data.is_homeowner}
                                        onChange={(e) => setData('is_homeowner', e.target.value === 'true')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                                    >
                                        <option value="">Select...</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                    {errors.is_homeowner && <p className="text-red-500 text-sm mt-1">{errors.is_homeowner}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Is the Property Listed? *</label>
                                    <select
                                        required
                                        value={data.is_property_listed}
                                        onChange={(e) => setData('is_property_listed', e.target.value === 'true')}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                                    >
                                        <option value="">Select...</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                    {errors.is_property_listed && <p className="text-red-500 text-sm mt-1">{errors.is_property_listed}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Additional Details (Optional)</label>
                                <textarea
                                    rows={3}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your property..."
                                />
                            </div>
                            {/* Compliance Checkbox */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="consent_contact"
                                    required
                                    checked={data.consent}
                                    onChange={(e) => setData('consent', e.target.checked)}
                                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="consent_contact" className="text-xs text-gray-600 leading-tight">
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

                            <button
                                type="submit"
                                disabled={processing || !data.consent || (recaptchaRendered && !data.recaptcha_token)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-6 py-4 font-medium transition-all duration-300 hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{processing ? 'Submitting...' : 'Get My Cash Offer Now'}</span>
                                {!processing && <ArrowRight className="w-5 h-5" />}
                            </button>
                            <p className="text-xs text-text-light text-center">
                                100% Free & Confidential. No obligation.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
