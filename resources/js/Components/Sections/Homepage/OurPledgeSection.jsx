import { Shield, ArrowRight } from 'lucide-react';

export default function OurPledgeSection() {
    return (
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-[#FEFEFE]">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-4 md:mb-6 lg:mb-8">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-primary text-sm font-medium">Our Pledge</span>
                        </div>

                        {/* Headline */}
                        <h2 className="mb-4 md:mb-6 text-[28px] md:text-[36px] lg:text-[48px] font-medium leading-tight">
                            <span className="block text-text">We Buy Houses,</span>
                            <span className="block text-primary italic font-accent">In Any Condition</span>
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-text-light mb-6 md:mb-8 leading-relaxed">
                            Facing foreclosure? Dealing with divorce? Moving? Upside-down in your mortgage? Liens? It doesn't matter whether you live in the house, you're renting it out, it's vacant, or not even habitable. We help owners who have inherited an unwanted property, own a vacant house, are behind on payments, owe liens, downsized and can't sell, and more. Even if the house needs repairs that you can't afford, is fire damaged, or has bad rental tenants, Want To Sell Home For Cash can help.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 md:px-6 py-3 md:py-3.5 font-medium transition-all duration-300 hover:bg-primary-hover text-sm md:text-base"
                        >
                            <span>Get Cash Offer</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>

                    {/* Right - Image */}
                    <div className="relative order-first lg:order-last">
                        <img
                            src="/images/our-pledge.webp"
                            alt="We Buy Houses In Any Condition"
                            className="w-full h-[280px] md:h-[400px] lg:h-[500px] rounded-2xl object-cover"
                            loading="lazy"
                            width="800"
                            height="600"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
