/**
 * Selling Simple Section - MajesticBuyerTheme
 * Two-column section with image and benefits list
 */

import { EditableText, EditableButton, EditableImage, useEditMode } from '../../../shared/Components/EditMode';
import { CheckCircle2, DollarSign } from 'lucide-react';

export default function SellingSimpleSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();

    const defaults = {
        badge: 'Why Choose Us',
        headline: 'Sell Your House',
        headlineItalic: 'Fast for Cash',
        description: 'Skip the traditional hassles of selling your home. No repairs, no showings, no waiting months for a buyer. Get a fair cash offer and close on your timeline.',
        image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200',
        statAmount: '7 Days',
        statLabel: 'Average Closing',
        statDescription: 'Close as fast as 7 days or on your schedule',
        benefits: [
            'No repairs or cleaning needed - sell as-is',
            'No realtor fees or closing costs',
            'Fair cash offer within 24 hours',
            'Close on your timeline - as fast as 7 days',
        ],
        ctaText: 'Get Your Cash Offer',
        ctaLink: '#contact-form',
    };

    const badge = content.badge || defaults.badge;
    const headline = content.headline || defaults.headline;
    const headlineItalic = content.headlineItalic || defaults.headlineItalic;
    const description = content.description || defaults.description;
    const image = content.image || defaults.image;
    const statAmount = content.statAmount || defaults.statAmount;
    const statLabel = content.statLabel || defaults.statLabel;
    const statDescription = content.statDescription || defaults.statDescription;
    const benefits = content.benefits?.length > 0 ? content.benefits : defaults.benefits;
    const ctaText = content.ctaText || defaults.ctaText;
    const ctaLink = content.ctaLink || defaults.ctaLink;

    // Support FAB background settings
    const backgroundColor = content.sectionBgColor || content.backgroundColor || 'var(--color-accent)';
    const backgroundImage = content.sectionBgImage || content.backgroundImage || '';

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
            className={`relative py-24 overflow-hidden ${!backgroundImage && !backgroundColor ? 'theme-bg-accent' : ''}`}
            style={sectionStyle}
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image with Modern Card Overlay */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative">
                            <EditableImage
                                src={image}
                                alt="For Sale By Owner Sign in Oklahoma"
                                className="w-full h-[500px] rounded-2xl shadow-xl overflow-hidden"
                                imageType="section"
                                onUpdate={({ src }) => updateSectionContent('simple', 'image', src)}
                            />

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-2xl max-w-[280px] border border-gray-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="theme-bg-accent-dark p-2.5 rounded-lg">
                                        <DollarSign className="w-5 h-5 theme-text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold text-gray-900">
                                            <EditableText
                                                value={statAmount}
                                                onChange={(val) => updateSectionContent('simple', 'statAmount', val)}
                                                placeholder="$7,500"
                                            />
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            <EditableText
                                                value={statLabel}
                                                onChange={(val) => updateSectionContent('simple', 'statLabel', val)}
                                                placeholder="Avg. Savings"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <EditableText
                                        value={statDescription}
                                        onChange={(val) => updateSectionContent('simple', 'statDescription', val)}
                                        placeholder="Description"
                                        multiline
                                    />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="order-1 lg:order-2">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 theme-bg-accent-dark rounded-lg px-4 py-2 mb-8">
                            <CheckCircle2 className="w-4 h-4 theme-text-light" />
                            <span className="theme-text-light text-sm font-medium">
                                <EditableText
                                    value={badge}
                                    onChange={(val) => updateSectionContent('simple', 'badge', val)}
                                    placeholder="Why Choose Us"
                                />
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="mb-6 text-[48px] font-medium leading-tight">
                            <span className="block theme-text-text">
                                <EditableText
                                    value={headline}
                                    onChange={(val) => updateSectionContent('simple', 'headline', val)}
                                    placeholder="Selling Your Home"
                                />
                            </span>
                            <span className="block theme-text-text italic">
                                <EditableText
                                    value={headlineItalic}
                                    onChange={(val) => updateSectionContent('simple', 'headlineItalic', val)}
                                    placeholder="Made Simple"
                                />
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-[14px] font-medium theme-text-light mb-8 leading-relaxed">
                            <EditableText
                                value={description}
                                onChange={(val) => updateSectionContent('simple', 'description', val)}
                                placeholder="Description"
                                multiline
                            />
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-3.5 mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 theme-text-primary" />
                                    </div>
                                    <span className="text-[14px] font-medium theme-text-light">
                                        <EditableText
                                            value={benefit}
                                            onChange={(val) => updateSectionContent('simple', `benefits.${index}`, val)}
                                            placeholder="Benefit text"
                                        />
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <EditableButton
                            href={ctaLink}
                            text={ctaText}
                            color={content.ctaColor}
                            elementType="button"
                            className="inline-flex items-center gap-[0.4rem] text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:opacity-90 theme-bg-primary hover:theme-bg-primary-hover"
                            onUpdate={({ text, href, color }) => {
                                if (text !== ctaText) updateSectionContent('simple', 'ctaText', text);
                                if (href !== ctaLink) updateSectionContent('simple', 'ctaLink', href);
                                if (color) updateSectionContent('simple', 'ctaColor', color);
                            }}
                        >
                            <span>{ctaText}</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_selling_btn" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style={{ maskType: 'alpha' }}>
                                    <rect width="20" height="20" transform="matrix(-1 0 0 1 20 0)" fill="#D9D9D9"></rect>
                                </mask>
                                <g mask="url(#mask0_selling_btn)">
                                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"></path>
                                </g>
                            </svg>
                        </EditableButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
