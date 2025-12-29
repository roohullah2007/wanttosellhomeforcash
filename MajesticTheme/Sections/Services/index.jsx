/**
 * Services Section - MajesticBuyerTheme
 * OkByOwner design with heading/description split and service list with hover effects
 */

import { EditableText, useEditMode } from '../../../shared/Components/EditMode';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function ServicesSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();

    const defaults = {
        badge: 'What We Offer',
        headline: 'How We Help',
        headlineItalic: 'You',
        description: 'We provide comprehensive solutions for homeowners looking to sell their properties quickly and hassle-free.',
        services: [
            {
                title: 'Buy Houses As-Is',
                description: 'No need to make repairs or renovations. We buy houses in any condition.',
                link: '/services/buy-as-is',
            },
            {
                title: 'Fast Cash Offers',
                description: 'Get a fair cash offer within 24-48 hours with no obligation.',
                link: '/services/cash-offers',
            },
            {
                title: 'Quick Closings',
                description: 'Close on your schedule - as fast as 7 days or take your time.',
                link: '/services/quick-closing',
            },
            {
                title: 'No Fees or Commissions',
                description: 'Keep all your money. No realtor fees, no closing costs, no hidden charges.',
                link: '/services/no-fees',
            },
            {
                title: 'Foreclosure Prevention',
                description: 'Facing foreclosure? We can help you avoid it and move forward.',
                link: '/services/foreclosure',
            },
            {
                title: 'Inherited Property',
                description: 'Sell inherited properties without the hassle of probate or maintenance.',
                link: '/services/inherited',
            },
        ],
    };

    const badge = content.badge || defaults.badge;
    const headline = content.headline || defaults.headline;
    const headlineItalic = content.headlineItalic || defaults.headlineItalic;
    const description = content.description || defaults.description;
    const services = content.services?.length > 0 ? content.services : defaults.services;

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
            id="services"
            className={`ib-section-services py-16 md:py-24 lg:py-32 ${!backgroundImage && !backgroundColor ? 'theme-bg-accent' : ''}`}
            style={sectionStyle}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    {/* Left: Badge and Heading */}
                    <div>
                        <EditableText
                            as="span"
                            value={badge}
                            onChange={(val) => updateSectionContent('services', 'badge', val)}
                            className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 theme-bg-accent-dark theme-text-text"
                            placeholder="Badge text"
                        />
                        <h2 className="text-[48px] font-medium leading-tight theme-text-text">
                            <EditableText
                                value={headline}
                                onChange={(val) => updateSectionContent('services', 'headline', val)}
                                placeholder="Headline"
                            />{' '}
                            <span className="italic font-accent">
                                <EditableText
                                    value={headlineItalic}
                                    onChange={(val) => updateSectionContent('services', 'headlineItalic', val)}
                                    placeholder="You"
                                />
                            </span>
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <div className="flex items-center">
                        <EditableText
                            as="p"
                            value={description}
                            onChange={(val) => updateSectionContent('services', 'description', val)}
                            className="text-lg md:text-xl leading-relaxed theme-text-light"
                            placeholder="Description"
                            multiline
                        />
                    </div>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            service={service}
                            index={index}
                            updateSectionContent={updateSectionContent}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceItem({ service, index, updateSectionContent }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={service.link}
            className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:theme-border-primary transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-start justify-between mb-4">
                <EditableText
                    as="h3"
                    value={service.title}
                    onChange={(val) => updateSectionContent('services', `services.${index}.title`, val)}
                    className="text-xl md:text-2xl font-medium flex-1 theme-text-text"
                    placeholder="Service title"
                />
                <div className="ml-4">
                    <ArrowIcon isHovered={isHovered} />
                </div>
            </div>
            <EditableText
                as="p"
                value={service.description}
                onChange={(val) => updateSectionContent('services', `services.${index}.description`, val)}
                className="leading-relaxed theme-text-light"
                placeholder="Service description"
                multiline
            />
        </Link>
    );
}

function ArrowIcon({ isHovered }) {
    return (
        <svg
            className={`w-6 h-6 theme-text-primary transition-transform duration-300 ${
                isHovered ? 'translate-x-1 -translate-y-1' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    );
}
