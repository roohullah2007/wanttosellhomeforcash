import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: "FAQ's", href: '#faq' },
        { label: 'Testimonials', href: '#testimonials' },
    ];

    const isHomePage = () => {
        return window.location.pathname === '/' || window.location.pathname === '';
    };

    const scrollToElement = (href) => {
        if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            if (element) {
                const headerOffset = 77;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                scrollToElement(window.location.hash);
            }, 100);
        }
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (isHomePage()) {
            scrollToElement(href);
        } else {
            window.location.href = '/' + href;
        }
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (isHomePage()) {
            scrollToElement('#contact');
        } else {
            window.location.href = '/#contact';
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 h-[77px]">
                <div className="max-w-[1250px] mx-auto px-4 sm:px-6 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <img
                                src="/images/logo.webp"
                                alt="WantToSellHomeForCash"
                                className="h-[58px] w-auto"
                                width="114"
                                height="58"
                            />
                        </a>

                        {/* Center Navigation - Desktop */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-sm font-semibold text-text transition-colors relative group hover:text-primary"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            <a
                                href="tel:+13057401132"
                                className="hidden md:block text-sm font-semibold text-text hover:text-primary transition-colors"
                            >
                                +1 (305) 740-1132
                            </a>
                            <a
                                href="#contact"
                                onClick={handleContactClick}
                                className="hidden sm:flex items-center justify-center gap-1.5 text-gray-100 rounded-full py-2.5 px-6 lg:px-8 font-medium text-sm bg-secondary hover:bg-secondary-hover transition-colors"
                            >
                                <span className="hidden md:inline">Get Cash Offer</span>
                                <span className="md:hidden">Call</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2 text-text hover:text-primary transition-colors"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
                    <div className="fixed top-[77px] left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
                        <nav className="max-w-[1250px] mx-auto px-4 py-6 space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block text-base font-semibold text-text hover:text-primary transition-colors py-2"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <a
                                    href="tel:+13057401132"
                                    className="block text-base font-semibold text-text hover:text-primary transition-colors py-2"
                                >
                                    Call Us
                                </a>
                                <a
                                    href="#contact"
                                    className="block sm:hidden mt-2 text-center text-white rounded-full py-3 px-6 font-medium bg-primary hover:bg-primary-hover transition-colors"
                                    onClick={handleContactClick}
                                >
                                    Get Cash Offer
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
