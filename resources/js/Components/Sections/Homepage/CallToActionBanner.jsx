export default function CallToActionBanner() {
    return (
        <section className="relative bg-primary py-12 md:py-16">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 text-center">
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    <span className="text-[#2498CC]">Sell Your House Fast</span>
                    <span className="text-white"> – No Repairs, No Fees, No Hassle!</span>
                </h2>

                {/* Subtitle */}
                <p className="text-white/80 text-base md:text-lg">
                    Get a fair cash offer in 24 hours and close on your timeline
                </p>
            </div>

            {/* Arrow Pointer */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-primary rotate-45"></div>
            </div>
        </section>
    );
}
