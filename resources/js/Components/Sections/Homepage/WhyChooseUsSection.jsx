import { Info, ArrowRight } from 'lucide-react';

export default function WhyChooseUsSection() {
    return (
        <section id="about" className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-[#F6F7FA]">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="/images/know-more-about.png"
                            alt="Want To Sell Home For Cash"
                            className="w-full h-[280px] md:h-[400px] lg:h-[500px] rounded-2xl object-cover"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-4 md:mb-6 lg:mb-8">
                            <Info className="w-4 h-4 text-primary" />
                            <span className="text-primary text-sm font-medium">Know More About</span>
                        </div>

                        {/* Headline */}
                        <h2 className="mb-4 md:mb-6 text-[28px] md:text-[36px] lg:text-[48px] font-medium leading-tight">
                            <span className="block text-text">Want To Sell Home</span>
                            <span className="block text-primary italic font-accent">For Cash</span>
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-text-light mb-4 md:mb-6 leading-relaxed">
                            Introducing Want To Sell Home For Cash – your go-to nationwide partner for hassle-free property transactions. We offer the highest cash value for your home, ensuring a quick and efficient closing process. Whether you're facing foreclosure, need to sell swiftly, or just want a stress-free experience, we buy homes in any condition.
                        </p>

                        <p className="text-sm md:text-base text-text-light mb-6 md:mb-8 leading-relaxed">
                            At Want To Sell Home For Cash, we understand the challenges associated with selling a property, and we're here to simplify the process for you. Our expert team takes the time to comprehend your unique real estate situation and provides tailored solutions. Skip the realtor wait and confidently move forward with your life as we assist you in selling your property seamlessly across the nation.
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
                </div>
            </div>
        </section>
    );
}
