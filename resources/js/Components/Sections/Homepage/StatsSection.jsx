import { House, Users, Handshake, Sun, ArrowRight } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        { icon: House, number: '500+', label: 'Houses Bought' },
        { icon: Users, number: '100%', label: 'Cash Offers' },
        { icon: Handshake, number: '7 Days', label: 'Fast Closing' },
        { icon: Sun, number: '$0', label: 'Fees or Commissions' },
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-white">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
                            <House className="w-4 h-4 text-primary" />
                            <span className="text-primary text-sm font-medium">Trusted Cash Buyers</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-[36px] md:text-[48px] text-text font-medium leading-tight mb-6">
                            We buy houses in any condition. No repairs needed, no agents, no fees. Get a fair cash offer and close on your timeline.
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-text-light font-medium mb-8 leading-relaxed">
                            Join hundreds of homeowners who sold their houses fast for cash. Skip the hassle of traditional home selling.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3 font-medium transition-all duration-300 hover:bg-primary-hover"
                            >
                                <span>Get Cash Offer</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 bg-transparent border border-gray-300 text-text rounded-full px-6 py-3 font-medium transition-all duration-300 hover:bg-accent-dark"
                            >
                                <span>How It Works</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right - Stats Grid */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-primary rounded-2xl p-6 flex flex-col justify-between h-[195px]">
                                        <Icon className="w-8 h-8 text-white/80" />
                                        <div>
                                            <h4 className="text-[28px] text-white font-medium mb-1">{stat.number}</h4>
                                            <p className="text-sm text-white/80 font-medium">{stat.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
