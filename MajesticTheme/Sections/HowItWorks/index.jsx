/**
 * How It Works Section - MajesticBuyerTheme
 * OkByOwner design with 4-step process, badge with icon, italic emphasis, connector arrows
 */

import { EditableText, useEditMode } from '../../../shared/Components/EditMode';
import { FileText, Camera, Users, Handshake } from 'lucide-react';

// Icon mapping
const IconComponent = ({ name }) => {
    const icons = {
        FileText: <FileText className="w-6 h-6" />,
        Camera: <Camera className="w-6 h-6" />,
        Users: <Users className="w-6 h-6" />,
        Handshake: <Handshake className="w-6 h-6" />,
    };
    return icons[name] || icons.FileText;
};

export default function HowItWorksSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();

    const defaults = {
        badgeIcon: 'Handshake',
        badgeText: 'Simple Process',
        headline: 'How It',
        headlineItalic: 'Works',
        description: 'Sell your house fast for cash in four simple steps. No repairs, no agents, no hassle.',
        steps: [
            {
                icon: 'FileText',
                stepNumber: 'STEP 01',
                title: 'Request Your Offer',
                description: 'Fill out our simple form or give us a call. Tell us about your property - any condition is okay.',
            },
            {
                icon: 'Camera',
                stepNumber: 'STEP 02',
                title: 'Get a Cash Offer',
                description: 'We\'ll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.',
            },
            {
                icon: 'Users',
                stepNumber: 'STEP 03',
                title: 'Choose Your Closing Date',
                description: 'Accept our offer and pick a closing date that works for you - as fast as 7 days or on your timeline.',
            },
            {
                icon: 'Handshake',
                stepNumber: 'STEP 04',
                title: 'Get Paid Cash',
                description: 'Close at a local title company and walk away with cash in hand. No fees, no commissions, no surprises.',
            },
        ],
    };

    const badgeIcon = content.badgeIcon || defaults.badgeIcon;
    const badgeText = content.badgeText || defaults.badgeText;
    const headline = content.headline || defaults.headline;
    const headlineItalic = content.headlineItalic || defaults.headlineItalic;
    const description = content.description || defaults.description;
    const steps = content.steps?.length > 0 ? content.steps : defaults.steps;

    return (
        <section className="py-16 md:py-20 theme-bg-accent">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge with Icon */}
                    <div className="inline-flex items-center gap-2 theme-bg-accent-dark rounded-lg px-4 py-2 mb-6">
                        <div className="theme-text-light">
                            <IconComponent name={badgeIcon} />
                        </div>
                        <span className="theme-text-light text-sm font-medium">
                            <EditableText
                                value={badgeText}
                                onChange={(val) => updateSectionContent('process', 'badgeText', val)}
                                placeholder="Badge text"
                            />
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-[48px] font-medium theme-text-text mb-4 leading-tight">
                        <EditableText
                            value={headline}
                            onChange={(val) => updateSectionContent('process', 'headline', val)}
                            placeholder="How It"
                        />
                        {' '}
                        <span className="italic font-accent">
                            <EditableText
                                value={headlineItalic}
                                onChange={(val) => updateSectionContent('process', 'headlineItalic', val)}
                                placeholder="Works"
                            />
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-[14px] md:text-[16px] theme-text-light font-medium max-w-2xl mx-auto">
                        <EditableText
                            value={description}
                            onChange={(val) => updateSectionContent('process', 'description', val)}
                            placeholder="Description"
                            multiline
                        />
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Card */}
                            <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group">
                                {/* Icon */}
                                <div className="theme-bg-accent-dark p-3 rounded-xl w-fit mb-4 group-hover:theme-bg-primary transition-all duration-300">
                                    <div className="theme-text-muted group-hover:theme-text-white transition-all duration-300">
                                        <IconComponent name={step.icon} />
                                    </div>
                                </div>

                                {/* Step Number */}
                                <div className="theme-text-primary text-sm font-semibold mb-2">
                                    <EditableText
                                        value={step.stepNumber}
                                        onChange={(val) => updateSectionContent('process', `steps.${index}.stepNumber`, val)}
                                        placeholder="STEP 01"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[18px] md:text-xl font-medium theme-text-text mb-3">
                                    <EditableText
                                        value={step.title}
                                        onChange={(val) => updateSectionContent('process', `steps.${index}.title`, val)}
                                        placeholder="Step title"
                                    />
                                </h3>

                                {/* Description */}
                                <p className="text-sm theme-text-light leading-relaxed">
                                    <EditableText
                                        value={step.description}
                                        onChange={(val) => updateSectionContent('process', `steps.${index}.description`, val)}
                                        placeholder="Step description"
                                        multiline
                                    />
                                </p>
                            </div>

                            {/* Connector Arrow (Desktop only, between steps) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-stroke-border">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
