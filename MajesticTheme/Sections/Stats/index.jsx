/**
 * Stats Section - MajesticBuyerTheme
 * Split layout: content left, 2x2 stat grid right
 */

import { EditableText, EditableButton, useEditMode } from '../../../shared/Components/EditMode';
import { House, Users, Handshake, Sun } from 'lucide-react';

export default function StatsSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();

    const defaults = {
        badge: 'Trusted Cash Buyers',
        headline: "We buy houses in any condition. No repairs needed, no agents, no fees. Get a fair cash offer and close on your timeline.",
        description: 'Join hundreds of homeowners who sold their houses fast for cash. Skip the hassle of traditional home selling.',
        primaryCtaText: 'Get Cash Offer',
        primaryCtaLink: '#contact-form',
        secondaryCtaText: 'How It Works',
        secondaryCtaLink: '#how-it-works',
        stats: [
            { icon: 'House', number: '500+', label: 'Houses Bought' },
            { icon: 'Users', number: '100%', label: 'Cash Offers' },
            { icon: 'Handshake', number: '7 Days', label: 'Fast Closing' },
            { icon: 'Sun', number: '$0', label: 'Fees or Commissions' },
        ],
    };

    const badge = content.badge || defaults.badge;
    const headline = content.headline || defaults.headline;
    const description = content.description || defaults.description;
    const primaryCtaText = content.primaryCtaText || defaults.primaryCtaText;
    const primaryCtaLink = content.primaryCtaLink || defaults.primaryCtaLink;
    const secondaryCtaText = content.secondaryCtaText || defaults.secondaryCtaText;
    const secondaryCtaLink = content.secondaryCtaLink || defaults.secondaryCtaLink;
    const stats = content.stats?.length > 0 ? content.stats : defaults.stats;

    const getIcon = (iconName) => {
        const iconClass = "w-8 h-8 theme-text-muted";
        switch (iconName) {
            case 'House': return <House className={iconClass} />;
            case 'Users': return <Users className={iconClass} />;
            case 'Handshake': return <Handshake className={iconClass} />;
            case 'Sun': return <Sun className={iconClass} />;
            default: return <House className={iconClass} />;
        }
    };

    return (
        <section className="py-[156px] bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 theme-bg-accent-dark rounded-lg px-4 py-2 mb-6">
                            <House className="w-4 h-4 theme-text-light" />
                            <span className="theme-text-light text-sm font-medium">
                                <EditableText
                                    value={badge}
                                    onChange={(val) => updateSectionContent('stats', 'badge', val)}
                                    placeholder="Why Choose Us"
                                />
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-[48px] theme-text-text font-medium leading-tight mb-6">
                            <EditableText
                                value={headline}
                                onChange={(val) => updateSectionContent('stats', 'headline', val)}
                                placeholder="Headline"
                                multiline
                            />
                        </h2>

                        {/* Description */}
                        <p className="text-[14px] theme-text-light font-medium mb-8 leading-relaxed">
                            <EditableText
                                value={description}
                                onChange={(val) => updateSectionContent('stats', 'description', val)}
                                placeholder="Description"
                                multiline
                            />
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <EditableButton
                                href={primaryCtaLink}
                                text={primaryCtaText}
                                elementType="button"
                                className="inline-flex items-center gap-[0.4rem] theme-bg-primary text-white rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:opacity-90"
                                onUpdate={({ text, href }) => {
                                    if (text !== primaryCtaText) updateSectionContent('stats', 'primaryCtaText', text);
                                    if (href !== primaryCtaLink) updateSectionContent('stats', 'primaryCtaLink', href);
                                }}
                            >
                                <span>{primaryCtaText}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white" />
                                </svg>
                            </EditableButton>
                            <EditableButton
                                href={secondaryCtaLink}
                                text={secondaryCtaText}
                                elementType="link"
                                className="inline-flex items-center gap-[0.4rem] bg-transparent border theme-border-border theme-text-text rounded-full px-5 py-[0.875rem] font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:theme-bg-accent-dark"
                                onUpdate={({ text, href }) => {
                                    if (text !== secondaryCtaText) updateSectionContent('stats', 'secondaryCtaText', text);
                                    if (href !== secondaryCtaLink) updateSectionContent('stats', 'secondaryCtaLink', href);
                                }}
                            >
                                <span>{secondaryCtaText}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor" />
                                </svg>
                            </EditableButton>
                        </div>
                    </div>

                    {/* Right - Stats Grid */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="theme-bg-background-alt rounded-2xl p-6 flex flex-col justify-between h-[195px]">
                                    <div>{getIcon(stat.icon)}</div>
                                    <div>
                                        <h4 className="text-[28px] theme-text-text font-medium mb-1">
                                            <EditableText
                                                value={stat.number}
                                                onChange={(val) => updateSectionContent('stats', `stats.${index}.number`, val)}
                                                placeholder="3,200+"
                                            />
                                        </h4>
                                        <p className="text-[14px] theme-text-light font-medium">
                                            <EditableText
                                                value={stat.label}
                                                onChange={(val) => updateSectionContent('stats', `stats.${index}.label`, val)}
                                                placeholder="Label"
                                            />
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
