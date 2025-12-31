export default function AsSeenOnSection() {
    const logos = [
        { src: '/images/Fox.png', alt: 'Fox News' },
        { src: '/images/abc.png', alt: 'ABC' },
        { src: '/images/cbs.png', alt: 'CBS' },
        { src: '/images/nbc.png', alt: 'NBC' },
    ];

    return (
        <div className="bg-[#0A3060]">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 py-4 md:py-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <span className="text-white text-sm font-semibold uppercase tracking-wider">As Seen On</span>
                    <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                        {logos.map((logo, index) => (
                            <div key={index} className="px-4 py-1 flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
