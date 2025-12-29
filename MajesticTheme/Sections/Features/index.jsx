/**
 * Features Section - MajesticBuyerTheme
 * Grid of feature cards with icons
 */

import { EditableText, useEditMode } from '../../../shared/Components/EditMode';
import { Zap, Shield, Star, Check, Home, Search } from 'lucide-react';

const IconComponent = ({ name }) => {
    const icons = {
        Zap: <Zap className="w-5 h-5" />,
        Shield: <Shield className="w-5 h-5" />,
        Star: <Star className="w-5 h-5" />,
        Check: <Check className="w-5 h-5" />,
        Home: <Home className="w-5 h-5" />,
        Search: <Search className="w-5 h-5" />,
    };
    return icons[name] || icons.Zap;
};

export default function FeaturesSection({ content = {} }) {
    const { updateSectionContent } = useEditMode();

    const defaults = {
        features: [
            { icon: 'Zap', title: 'Cash Offers', subtitle: 'Within 24 Hrs' },
            { icon: 'Shield', title: 'No Repairs', subtitle: 'Sell As-Is' },
            { icon: 'Star', title: 'Zero Fees', subtitle: 'No Commissions' },
            { icon: 'Search', title: 'Any Condition', subtitle: 'We Buy All' },
            { icon: 'Zap', title: 'Fast Closing', subtitle: '7 Days or Less' },
        ],
    };

    const features = content.features?.length > 0 ? content.features : defaults.features;

    return (
        <div className="theme-bg-accent">
            <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white rounded-xl px-4 py-4 hover:shadow-md transition-all duration-300">
                            <div className="p-2.5 rounded-lg flex-shrink-0 theme-bg-accent-dark">
                                <div className="theme-text-muted">
                                    <IconComponent name={feature.icon} />
                                </div>
                            </div>
                            <div className="text-left min-w-0 flex-1">
                                <div className="font-semibold text-sm whitespace-nowrap theme-text-text">
                                    <EditableText
                                        value={feature.title}
                                        onChange={(val) => updateSectionContent('benefits', `features.${index}.title`, val)}
                                        placeholder="Feature title"
                                    />
                                </div>
                                <div className="text-xs whitespace-nowrap theme-text-light">
                                    <EditableText
                                        value={feature.subtitle}
                                        onChange={(val) => updateSectionContent('benefits', `features.${index}.subtitle`, val)}
                                        placeholder="Feature subtitle"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
