/**
 * Hero Section - MajesticBuyerTheme (OkByOwner Design)
 *
 * Full-screen hero with:
 * - Background image with dark gradient overlay
 * - Centered headline with italic emphasis (Lora font)
 * - Two CTA buttons (primary red, secondary glass morphism)
 * - Features section below hero with 5 cards
 * - Integrated lead capture form with DynamicLeadForm
 * - UTM tracking, spam protection, honeypot
 * - Instrument Sans and Lora fonts
 * - Mobile/tablet optimized
 */

import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { useTheme } from '../../Components/ThemeProvider';
import { EditableText, EditableButton, useEditMode } from '../../../shared/Components/EditMode';
import DynamicLeadForm from '../../../shared/Components/DynamicLeadForm';
import { DEFAULT_FORM_FIELDS } from '../../../shared/schemas/groups/formFields';

// Helper to get URL parameters
function getUrlParams() {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        gclid: params.get('gclid') || '',
        fbclid: params.get('fbclid') || '',
    };
}

// Generate spam protection token
function generateSpamToken() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    const token = btoa(`${timestamp}:${random}:${navigator.userAgent.length}`);
    return { token, timestamp };
}

export default function HeroSection({ content = {}, onFormSubmit }) {
    const { branding, tenant } = useTheme();
    const { updateSectionContent } = useEditMode();
    const [trackingData, setTrackingData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Spam protection state
    const [spamProtection, setSpamProtection] = useState({ token: '', timestamp: 0 });
    const [honeypot, setHoneypot] = useState(''); // Should remain empty

    // Capture UTM/GCLID parameters and initialize spam protection on mount
    useEffect(() => {
        const params = getUrlParams();
        setTrackingData(params);

        // Also check for stored tracking data (in case user navigated from landing page)
        const storedTracking = sessionStorage.getItem('lead_tracking');
        if (storedTracking) {
            const stored = JSON.parse(storedTracking);
            setTrackingData(prev => ({ ...stored, ...prev }));
        }

        // Store current tracking data for persistence
        if (Object.values(params).some(v => v)) {
            sessionStorage.setItem('lead_tracking', JSON.stringify(params));
        }

        // Initialize spam protection token
        setSpamProtection(generateSpamToken());
    }, []);

    // Default content with fallbacks
    const defaults = {
        headline: 'We Buy Houses',
        headlineItalic: 'for Cash',
        headlineEnd: '',
        subheadline: 'Get a fair cash offer in 24 hours. We buy houses in any condition. Close on your timeline.',
        ctaPrimaryText: 'Get Your Cash Offer',
        ctaPrimaryLink: '#contact-form',
        ctaSecondaryText: 'How It Works',
        ctaSecondaryLink: '#how-it-works',
        backgroundImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
        // Form fields (kept for compatibility, but form now in separate section)
        formTitle: 'Get Your Cash Offer',
        formSubtitle: 'Fill out the form below for a no-obligation offer',
        buttonText: 'Get A Quick Cash Offer Now!',
        successMessage: "Thank you! We'll be in touch within 24 hours with your cash offer.",
        consentText: "By submitting this form, you agree to be contacted by {company} and our partners about your property. There is no obligation, and you may opt out at any time. Your information is secure and protected under our {privacy} and {terms}.",
        formFields: DEFAULT_FORM_FIELDS,
        // Tracking options
        enableUtmTracking: true,
        enableGclidTracking: true,
        enableFbclidTracking: true,
        // Form styling
        formBgColor: '#ffffff',
        formBorderRadius: '16px',
        inputBorderRadius: '8px',
        inputBorderColor: '#d1d5db',
        inputPadding: '12px 16px',
        labelColor: '#374151',
        labelFontSize: '14px',
        labelFontWeight: '500',
    };

    // Tracking options
    const enableUtmTracking = content.enableUtmTracking ?? defaults.enableUtmTracking;
    const enableGclidTracking = content.enableGclidTracking ?? defaults.enableGclidTracking;
    const enableFbclidTracking = content.enableFbclidTracking ?? defaults.enableFbclidTracking;

    const headline = content.headline || defaults.headline;
    const headlineItalic = content.headlineItalic || defaults.headlineItalic;
    const headlineEnd = content.headlineEnd || defaults.headlineEnd;
    const subheadline = content.subheadline || defaults.subheadline;
    const ctaPrimaryText = content.ctaPrimaryText || defaults.ctaPrimaryText;
    const ctaPrimaryLink = content.ctaPrimaryLink || defaults.ctaPrimaryLink;
    const ctaSecondaryText = content.ctaSecondaryText || defaults.ctaSecondaryText;
    const ctaSecondaryLink = content.ctaSecondaryLink || defaults.ctaSecondaryLink;
    // Support both: sectionBgImage (from FAB) takes priority over backgroundImage (from schema)
    const backgroundImage = content.sectionBgImage || content.backgroundImage || defaults.backgroundImage;

    // Form content
    const formTitle = content.formTitle || defaults.formTitle;
    const formSubtitle = content.formSubtitle || defaults.formSubtitle;
    const buttonText = content.buttonText || defaults.buttonText;
    const successMessage = content.successMessage || defaults.successMessage;
    const consentText = content.consentText || defaults.consentText;
    const formFields = content.formFields?.length > 0 ? content.formFields : defaults.formFields;

    // Form styling
    const formBgColor = content.formBgColor || defaults.formBgColor;
    const formBorderRadius = content.formBorderRadius || defaults.formBorderRadius;
    const inputBorderRadius = content.inputBorderRadius || defaults.inputBorderRadius;
    const inputBorderColor = content.inputBorderColor || defaults.inputBorderColor;
    const inputPadding = content.inputPadding || defaults.inputPadding;
    const labelColor = content.labelColor || defaults.labelColor;
    const labelFontSize = content.labelFontSize || defaults.labelFontSize;
    const labelFontWeight = content.labelFontWeight || defaults.labelFontWeight;

    // Custom label/input styles
    const hasCustomLabelStyle = labelColor !== '#374151' || labelFontSize !== '14px' || labelFontWeight !== '500';
    const hasCustomInputStyle = inputPadding !== '12px 16px' || inputBorderRadius !== '8px' || inputBorderColor !== '#d1d5db';

    const customLabelStyle = hasCustomLabelStyle ? {
        color: labelColor !== '#374151' ? labelColor : undefined,
        fontSize: labelFontSize !== '14px' ? labelFontSize : undefined,
        fontWeight: labelFontWeight !== '500' ? labelFontWeight : undefined,
    } : undefined;

    const customInputStyle = hasCustomInputStyle ? {
        padding: inputPadding !== '12px 16px' ? inputPadding : undefined,
        borderRadius: inputBorderRadius !== '8px' ? inputBorderRadius : undefined,
        borderColor: inputBorderColor !== '#d1d5db' ? inputBorderColor : undefined,
    } : undefined;

    // Handle form submission from DynamicLeadForm
    const handleFormSubmit = async (submissionData, rawFormData) => {
        // Client-side spam protection checks
        if (honeypot) {
            console.warn('Spam detected: honeypot filled');
            setSubmitSuccess(true);
            return;
        }

        const elapsedTime = Date.now() - spamProtection.timestamp;
        if (elapsedTime < 3000) {
            console.warn('Spam detected: form submitted too quickly');
            setSubmitSuccess(true);
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        // Build tracking payload based on settings
        const tracking = {};
        if (enableUtmTracking) {
            if (trackingData.utm_source) tracking.utm_source = trackingData.utm_source;
            if (trackingData.utm_medium) tracking.utm_medium = trackingData.utm_medium;
            if (trackingData.utm_campaign) tracking.utm_campaign = trackingData.utm_campaign;
            if (trackingData.utm_term) tracking.utm_term = trackingData.utm_term;
            if (trackingData.utm_content) tracking.utm_content = trackingData.utm_content;
        }
        if (enableGclidTracking && trackingData.gclid) {
            tracking.gclid = trackingData.gclid;
        }
        if (enableFbclidTracking && trackingData.fbclid) {
            tracking.fbclid = trackingData.fbclid;
        }

        const leadPayload = {
            ...submissionData,
            source: window.location.href,
            ...tracking,
            _hp: honeypot,
            _token: spamProtection.token,
            _ts: spamProtection.timestamp,
        };

        try {
            if (onFormSubmit) {
                await onFormSubmit(leadPayload);
            } else {
                const response = await fetch('/api/leads', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
                    },
                    body: JSON.stringify(leadPayload),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to submit form');
                }
            }

            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitError(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none"></div>

                {/* Content */}
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 w-full">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-medium leading-[1.1] mb-5 drop-shadow-2xl">
                            <EditableText
                                value={headline}
                                onChange={(val) => updateSectionContent('hero', 'headline', val)}
                                placeholder="Enter headline..."
                            />{' '}
                            <span className="italic font-accent">
                                <EditableText
                                    value={headlineItalic}
                                    onChange={(val) => updateSectionContent('hero', 'headlineItalic', val)}
                                    placeholder="for Cash"
                                />
                            </span>
                            {headlineEnd && (
                                <>
                                    <br />
                                    <EditableText
                                        value={headlineEnd}
                                        onChange={(val) => updateSectionContent('hero', 'headlineEnd', val)}
                                        placeholder="Headline end..."
                                    />
                                </>
                            )}
                        </h1>

                        {/* Subheading */}
                        <EditableText
                            as="p"
                            value={subheadline}
                            onChange={(val) => updateSectionContent('hero', 'subheadline', val)}
                            className="text-white text-[14px] sm:text-[16px] font-medium mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
                            placeholder="Enter subheadline..."
                            multiline
                        />

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-[0.4rem] justify-center">
                            <EditableButton
                                href={ctaPrimaryLink}
                                text={ctaPrimaryText}
                                color={content.ctaPrimaryColor}
                                elementType="button"
                                className="button inline-flex items-center justify-center gap-[0.4rem] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:opacity-90 theme-bg-primary hover:theme-bg-primary-hover"
                                onUpdate={({ text, href, color }) => {
                                    if (text !== ctaPrimaryText) updateSectionContent('hero', 'ctaPrimaryText', text);
                                    if (href !== ctaPrimaryLink) updateSectionContent('hero', 'ctaPrimaryLink', href);
                                    if (color) updateSectionContent('hero', 'ctaPrimaryColor', color);
                                }}
                            >
                                <span>{ctaPrimaryText}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_56_2205" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style={{ maskType: 'alpha' }}>
                                        <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_56_2205)">
                                        <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                                    </g>
                                </svg>
                            </EditableButton>
                            <EditableButton
                                href={ctaSecondaryLink}
                                text={ctaSecondaryText}
                                elementType="link"
                                className="button inline-flex items-center justify-center gap-[0.4rem] bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/20"
                                onUpdate={({ text, href }) => {
                                    if (text !== ctaSecondaryText) updateSectionContent('hero', 'ctaSecondaryText', text);
                                    if (href !== ctaSecondaryLink) updateSectionContent('hero', 'ctaSecondaryLink', href);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5" aria-hidden="true">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                                <span>{ctaSecondaryText}</span>
                            </EditableButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
