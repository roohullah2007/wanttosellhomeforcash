/**
 * Header Component - MajesticBuyerTheme
 * OkByOwner Design
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { EditableText, useEditMode } from '../../shared/Components/EditMode';

export default function Header({ content = {}, pages = [], canEdit = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { branding } = useTheme();
  const { isEditMode, isSidebarOpen, updateSectionContent } = useEditMode();

  const showAdminBar = canEdit && !isEditMode;
  const topOffset = isEditMode ? 'top-[52px]' : showAdminBar ? 'top-[32px]' : 'top-0';
  const leftOffset = isEditMode && isSidebarOpen ? 'left-[256px]' : 'left-0';

  const defaults = {
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaText: 'Get Cash Offer',
    ctaLink: '#contact-form',
    loginText: 'Call Us',
    loginLink: 'tel:5551234567',
  };

  const logo = content.logo || branding.logo || 'https://okby.wpbun.xyz/images/okbyowner-logo.png';
  const companyName = content.companyName || branding.companyName || 'Company Name';
  const navItems = content.navItems?.length > 0
    ? content.navItems
    : pages.length > 0
      ? pages.map(page => ({ label: page.title, href: page.is_homepage ? '/' : `/${page.slug}` }))
      : defaults.navItems;
  const ctaText = content.ctaText || defaults.ctaText;
  const ctaLink = content.ctaLink || defaults.ctaLink;
  const loginText = content.loginText || defaults.loginText;
  const loginLink = content.loginLink || defaults.loginLink;

  return (
    <>
      <header id="site-header" className={`sticky ${topOffset} ${leftOffset} right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-300 h-[77px] transition-all duration-300`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[40px] h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt={companyName}
                className="h-[32px] sm:h-[40px] w-auto"
                data-logo="site-logo"
                style={{ display: logo ? '' : 'none' }}
              />
              <span
                className="text-2xl font-semibold theme-text-text"
                data-logo="text-fallback"
                style={{ display: logo ? 'none' : '' }}
              >
                {companyName}
              </span>
            </a>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[14px] font-semibold theme-text-text transition-colors relative group hover:theme-text-primary"
                >
                  <EditableText
                    value={item.label}
                    onChange={(val) => updateSectionContent('header', `navItems.${index}.label`, val)}
                    placeholder="Link"
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 theme-bg-primary"></span>
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href={loginLink}
                className="hidden md:block text-[14px] font-semibold theme-text-text hover:theme-text-primary transition-colors"
              >
                <EditableText
                  value={loginText}
                  onChange={(val) => updateSectionContent('header', 'loginText', val)}
                  placeholder="Call Us"
                />
              </a>
              <a
                href={ctaLink}
                className="hidden sm:flex items-center justify-start gap-1.5 text-gray-100 rounded-full py-2.5 px-6 lg:px-8 font-medium text-sm leading-[120%] transition-[background-color] duration-[400ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] theme-bg-secondary hover:theme-bg-secondary-hover"
              >
                <span className="hidden md:inline">
                  <EditableText
                    value={ctaText}
                    onChange={(val) => updateSectionContent('header', 'ctaText', val)}
                    placeholder="Get Cash Offer"
                  />
                </span>
                <span className="md:hidden">Call</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.459 10.8334L11.084 13.2084C10.9173 13.3751 10.8375 13.5695 10.8444 13.7918C10.8513 14.014 10.9312 14.2084 11.084 14.3751C11.2507 14.5418 11.4486 14.6286 11.6777 14.6355C11.9069 14.6425 12.1048 14.5626 12.2715 14.3959L16.084 10.5834C16.2507 10.4168 16.334 10.2223 16.334 10.0001C16.334 9.77787 16.2507 9.58343 16.084 9.41676L12.2715 5.60426C12.1048 5.43759 11.9069 5.35773 11.6777 5.36467C11.4486 5.37162 11.2507 5.45842 11.084 5.62509C10.9312 5.79176 10.8513 5.9862 10.8444 6.20842C10.8375 6.43065 10.9173 6.62509 11.084 6.79176L13.459 9.16676H4.16732C3.93121 9.16676 3.73329 9.24662 3.57357 9.40634C3.41385 9.56606 3.33398 9.76398 3.33398 10.0001C3.33398 10.2362 3.41385 10.4341 3.57357 10.5938C3.73329 10.7536 3.93121 10.8334 4.16732 10.8334H13.459Z" fill="white"/>
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 theme-text-text hover:theme-text-primary transition-colors"
                aria-label="Toggle menu"
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
          <div className={`fixed ${isEditMode ? 'top-[129px]' : showAdminBar ? 'top-[109px]' : 'top-[77px]'} ${leftOffset} right-0 bg-white border-b border-gray-300 shadow-xl transition-all duration-300`}>
            <nav className="max-w-[1400px] mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-[16px] font-semibold theme-text-text hover:theme-text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <EditableText
                    value={item.label}
                    onChange={(val) => updateSectionContent('header', `navItems.${index}.label`, val)}
                    placeholder="Link"
                  />
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={loginLink}
                  className="block text-[16px] font-semibold theme-text-text hover:theme-text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <EditableText
                    value={loginText}
                    onChange={(val) => updateSectionContent('header', 'loginText', val)}
                    placeholder="Call Us"
                  />
                </a>
                <a
                  href={ctaLink}
                  className="block sm:hidden mt-2 text-center text-white rounded-full py-3 px-6 font-medium transition-all duration-300 theme-bg-primary hover:theme-bg-primary-hover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <EditableText
                    value={ctaText}
                    onChange={(val) => updateSectionContent('header', 'ctaText', val)}
                    placeholder="Get Cash Offer"
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export const headerSchema = {
    name: 'Header',
    key: 'header',
    description: 'Site navigation header with logo, navigation, and CTA',
    fields: [
        { key: 'logo', type: 'image', label: 'Logo', default: 'https://okby.wpbun.xyz/images/okbyowner-logo.png' },
        {
            key: 'navItems',
            type: 'repeater',
            label: 'Navigation Menu',
            fields: [
                { key: 'label', type: 'text', label: 'Link Text', default: 'Page' },
                { key: 'href', type: 'text', label: 'Link URL', default: '/' },
            ],
            default: [
                { label: 'Home', href: '/' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'About', href: '/about' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '/contact' },
            ],
        },
        { key: 'ctaText', type: 'text', label: 'CTA Button Text', default: 'Get Cash Offer' },
        { key: 'ctaLink', type: 'text', label: 'CTA Button Link', default: '#contact-form' },
        { key: 'loginText', type: 'text', label: 'Secondary Link Text', default: 'Call Us' },
        { key: 'loginLink', type: 'text', label: 'Secondary Link URL', default: 'tel:5551234567' },
    ],
};
