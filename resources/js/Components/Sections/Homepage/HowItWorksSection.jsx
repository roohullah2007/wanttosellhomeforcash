import { FileText, Camera, Users, Handshake } from 'lucide-react';

export default function HowItWorksSection() {
    const steps = [
        {
            icon: FileText,
            stepNumber: 'STEP 01',
            title: 'Request Your Offer',
            description: 'Fill out our simple form or give us a call. Tell us about your property - any condition is okay.',
        },
        {
            icon: Camera,
            stepNumber: 'STEP 02',
            title: 'Get a Cash Offer',
            description: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.",
        },
        {
            icon: Users,
            stepNumber: 'STEP 03',
            title: 'Choose Your Closing Date',
            description: 'Accept our offer and pick a closing date that works for you - as fast as 7 days or on your timeline.',
        },
        {
            icon: Handshake,
            stepNumber: 'STEP 04',
            title: 'Get Paid Cash',
            description: 'Close at a local title company and walk away with cash in hand. No fees, no commissions, no surprises.',
        },
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-20 bg-white">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-6">
                        <Handshake className="w-6 h-6 text-primary" />
                        <span className="text-primary text-sm font-medium">Simple Process</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-[48px] font-medium text-text mb-4 leading-tight">
                        How It <span className="italic font-accent text-primary">Works</span>
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-text-light font-medium max-w-2xl mx-auto">
                        Sell your house fast for cash in four simple steps. No repairs, no agents, no hassle.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-lg hover:border-primary transition-all duration-300 group">
                                    {/* Icon */}
                                    <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-primary transition-all duration-300">
                                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                                    </div>

                                    {/* Step Number */}
                                    <div className="text-primary text-sm font-semibold mb-2">{step.stepNumber}</div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-medium text-text mb-3">{step.title}</h3>

                                    {/* Description */}
                                    <p className="text-sm text-text-light leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
