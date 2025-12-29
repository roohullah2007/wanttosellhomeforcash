import React, { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';

const Footer = ({ tenant, content = {} }) => {
    const [email, setEmail] = useState('');
    const { url } = usePage();
    const isHomePage = url === '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/api/leads', { email: email, source: 'footer_newsletter' });
        setEmail('');
    };

    const logo = content.logo || tenant?.branding?.logo;
    const companyName = content.companyName || tenant?.branding?.companyName || tenant?.name || 'Your Company';
    const address = content.address || tenant?.settings?.address || 'Your City, State';
    const ctaHeadline = content.ctaHeadline || 'Ready to sell your house fast';
    const ctaHeadlineItalic = content.ctaHeadlineItalic || 'for cash?';
    const ctaSubtext = content.ctaSubtext || 'Get a fair cash offer in 24 hours';
    const ctaBadge = content.ctaBadge || 'Get Started';

    const mainLinks = content.mainLinks || [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' }
    ];

    const resourceLinks = content.resourceLinks || [
        { label: 'FAQs', href: '/faqs' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms Of Use', href: '/terms-of-use' },
        { label: 'Contact Us', href: '/contact' }
    ];

    const serviceLinks = content.serviceLinks || [
        { label: 'Fast Cash Offers', href: '/services' },
        { label: 'We Buy Houses', href: '/services' },
        { label: 'Sell As-Is', href: '/services' },
        { label: 'Support', href: '/contact' }
    ];

    const copyrightText = content.copyrightText || `© ${new Date().getFullYear()} ${companyName}. All Rights Reserved.`;
    const showCTA = content.showCTA !== false && isHomePage;

    return (
        <footer id="site-footer" className="w-full theme-bg-secondary">
            {/* CTA Section - Only show on home page */}
            {showCTA && (
                <div className="w-full bg-cover bg-center bg-no-repeat relative">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={content.ctaBackgroundImage || "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"}
                            alt="Footer Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
                    </div>

                    <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-32 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-white text-sm font-medium">{ctaBadge}</span>
                        </div>

                        <h2 className="mb-12">
                            <span className="block text-[48px] md:text-[72px] font-semibold leading-[110%] text-white">{ctaHeadline}</span>
                            <span className="block text-[48px] md:text-[72px] font-semibold leading-[110%] text-white italic font-accent">{ctaHeadlineItalic}</span>
                            {ctaSubtext && <span className="block text-[48px] md:text-[72px] font-semibold leading-[110%] text-white">{ctaSubtext}</span>}
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                className="inline-flex items-center gap-[0.4rem] bg-white theme-text-text rounded-full px-6 py-4 font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:theme-bg-accent-dark"
                                href="/#contact-form"
                            >
                                <span>Get Cash Offer</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor"/>
                                </svg>
                            </Link>
                            <Link
                                className="inline-flex items-center gap-[0.4rem] bg-transparent border-2 border-white/30 text-white rounded-full px-6 py-4 font-medium leading-[120%] transition-all duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:bg-white/10 hover:border-white/50"
                                href="/about"
                            >
                                <span>Learn More</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="currentColor"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Footer Section */}
            <div className="w-full theme-bg-secondary border-t border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                        {/* Left Column - Address & Newsletter */}
                        <div className="lg:col-span-5">
                            <div className="mb-12">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={logo}
                                        alt={companyName}
                                        className="h-10 w-auto"
                                        data-logo="site-logo"
                                        style={{ display: logo ? '' : 'none' }}
                                    />
                                    <span
                                        className="text-white text-2xl font-semibold"
                                        data-logo="text-fallback"
                                        style={{ display: logo ? 'none' : '' }}
                                    >
                                        {companyName}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="theme-text-background-alt text-base font-normal mb-2">Address</p>
                                <h3 className="text-white text-[32px] font-medium leading-[120%]">{address}</h3>
                            </div>

                            <div className="mb-6">
                                <p className="theme-text-background-alt text-base font-normal mb-4">Enter Your Email</p>
                                <form onSubmit={handleSubmit} className="flex gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="hello@example.com"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
                                    />
                                    <button type="submit" className="bg-white theme-text-text rounded-full px-8 py-3 font-medium transition-all duration-[400ms] hover:theme-bg-accent-dark">
                                        Join Us
                                    </button>
                                </form>
                            </div>

                            <p className="theme-text-background-alt text-base font-normal leading-relaxed">
                                * By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                            </p>
                        </div>

                        {/* Right Columns - Links */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="theme-text-background-alt text-base font-normal mb-6">Main Pages</h4>
                                    <ul className="space-y-4">
                                        {mainLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href} className="text-white text-xl font-normal transition-colors duration-300 hover:theme-text-light">{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="theme-text-background-alt text-base font-normal mb-6">Resources</h4>
                                    <ul className="space-y-4">
                                        {resourceLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href} className="text-white text-xl font-normal transition-colors duration-300 hover:theme-text-light">{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="theme-text-background-alt text-base font-normal mb-6">Services</h4>
                                    <ul className="space-y-4">
                                        {serviceLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href} className="text-white text-xl font-normal transition-colors duration-300 hover:theme-text-light">{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <p className="theme-text-background-alt text-base font-normal text-center md:text-left">{copyrightText}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy-policy" className="theme-text-background-alt text-base font-normal hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms-of-use" className="theme-text-background-alt text-base font-normal hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

export const footerSchema = {
    name: 'Footer',
    key: 'footer',
    description: 'Site footer with CTA, links, and newsletter signup',
    fields: [
        { key: 'logo', type: 'image', label: 'Footer Logo', default: '' },
        { key: 'companyName', type: 'text', label: 'Company Name', default: 'Your Company' },
        { key: 'address', type: 'text', label: 'Address', default: 'Your City, State' },
        { key: 'showCTA', type: 'select', label: 'Show CTA Section', default: true, options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }] },
        { key: 'ctaHeadline', type: 'text', label: 'CTA Headline', default: 'Ready to sell your house fast' },
        { key: 'ctaHeadlineItalic', type: 'text', label: 'CTA Headline (Italic)', default: 'for cash?' },
        { key: 'ctaSubtext', type: 'text', label: 'CTA Subtext', default: 'Get a fair cash offer in 24 hours' },
        { key: 'ctaBadge', type: 'text', label: 'CTA Badge Text', default: 'Get Started' },
        { key: 'ctaBackgroundImage', type: 'image', label: 'CTA Background Image', default: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920' },
        {
            key: 'mainLinks', type: 'repeater', label: 'Main Page Links',
            fields: [{ key: 'label', type: 'text', label: 'Label', default: 'Link' }, { key: 'href', type: 'text', label: 'URL', default: '/' }],
            default: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Services', href: '/services' }, { label: 'Testimonials', href: '/testimonials' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }]
        },
        {
            key: 'resourceLinks', type: 'repeater', label: 'Resource Links',
            fields: [{ key: 'label', type: 'text', label: 'Label', default: 'Link' }, { key: 'href', type: 'text', label: 'URL', default: '/' }],
            default: [{ label: 'FAQs', href: '/faqs' }, { label: 'How It Works', href: '/how-it-works' }, { label: 'Privacy Policy', href: '/privacy-policy' }, { label: 'Terms Of Use', href: '/terms-of-use' }, { label: 'Contact Us', href: '/contact' }]
        },
        {
            key: 'serviceLinks', type: 'repeater', label: 'Service Links',
            fields: [{ key: 'label', type: 'text', label: 'Label', default: 'Link' }, { key: 'href', type: 'text', label: 'URL', default: '/' }],
            default: [{ label: 'Fast Cash Offers', href: '/services' }, { label: 'We Buy Houses', href: '/services' }, { label: 'Sell As-Is', href: '/services' }, { label: 'Support', href: '/contact' }]
        },
        { key: 'copyrightText', type: 'text', label: 'Copyright Text', default: '' },
    ],
};
