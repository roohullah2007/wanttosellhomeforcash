import { Link } from '@inertiajs/react';
import { Zap, ArrowRight } from 'lucide-react';

export default function Footer() {
    const mainLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '#about' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Testimonials', href: '#testimonials' },
    ];

    const resourceLinks = [
        { label: 'FAQs', href: '#faq' },
        { label: 'Privacy & Policy', href: '/privacy-policy', isLink: true },
        { label: 'Terms & Conditions', href: '/terms-of-service', isLink: true },
    ];

    return (
        <footer className="w-full">
            {/* CTA Section */}
            <div className="w-full bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Footer Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95"></div>
                </div>

                <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        <span className="text-white text-xs md:text-sm font-medium">We Want To Earn Your Trust</span>
                    </div>

                    <h2 className="text-[28px] md:text-[40px] lg:text-[56px] font-semibold leading-[110%] text-white mb-4 md:mb-6">
                        We Want To Earn Your Trust
                    </h2>

                    <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
                        Here at Want To Sell Home For Cash, We are focused on helping people in difficult situations to get the money they need to pay the bills. If you're in a tough situation and looking for some assistance, please reach out to us and our real estate professionals will help in anyway they can!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-6 md:px-8 py-3 md:py-4 font-medium transition-all duration-300 hover:bg-gray-100 text-sm md:text-base"
                            href="#contact"
                        >
                            <span>Get Cash Offer</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer Section */}
            <div className="w-full bg-white border-t border-gray-200">
                <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-10 md:py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
                        {/* Left Column */}
                        <div className="lg:col-span-5 text-center md:text-left">
                            <div className="mb-6 md:mb-8 flex justify-center md:justify-start">
                                <img
                                    src="/images/logo.png"
                                    alt="Want To Sell Home For Cash"
                                    className="h-10 md:h-12 w-auto"
                                />
                            </div>

                            <p className="text-text-light text-sm md:text-base font-normal leading-relaxed mb-4 md:mb-6">
                                We buy houses in any condition for cash. Fast closing, no fees, no hassle. Get your fair cash offer today!
                            </p>

                            <div>
                                <p className="text-text-light text-xs md:text-sm font-normal mb-1">Address</p>
                                <p className="text-text text-base md:text-lg font-medium">Your City, State</p>
                            </div>
                        </div>

                        {/* Right Columns - Links */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 gap-6 md:gap-8">
                                <div className="text-center md:text-left">
                                    <h4 className="text-text-light text-xs md:text-sm font-medium uppercase tracking-wider mb-4 md:mb-6">Main Pages</h4>
                                    <ul className="space-y-3 md:space-y-4">
                                        {mainLinks.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.href} className="text-text text-sm md:text-base font-normal transition-colors duration-300 hover:text-primary">{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-text-light text-xs md:text-sm font-medium uppercase tracking-wider mb-4 md:mb-6">Resources</h4>
                                    <ul className="space-y-3 md:space-y-4">
                                        {resourceLinks.map((item, index) => (
                                            <li key={index}>
                                                {item.isLink ? (
                                                    <Link href={item.href} className="text-text text-sm md:text-base font-normal transition-colors duration-300 hover:text-primary">{item.label}</Link>
                                                ) : (
                                                    <a href={item.href} className="text-text text-sm md:text-base font-normal transition-colors duration-300 hover:text-primary">{item.label}</a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#053E78]">
                <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-4 md:py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                        <p className="text-white/80 text-xs md:text-sm font-normal text-center md:text-left">
                            &copy; {new Date().getFullYear()} WantToSellHomeForCash. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-4 md:gap-6">
                            <Link href="/privacy-policy" className="text-white/80 text-xs md:text-sm font-normal hover:text-white transition-colors">Privacy & Policy</Link>
                            <Link href="/terms-of-service" className="text-white/80 text-xs md:text-sm font-normal hover:text-white transition-colors">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
