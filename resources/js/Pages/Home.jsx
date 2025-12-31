import { Head } from '@inertiajs/react';
import { lazy, Suspense } from 'react';
import {
    TopBar,
    Header,
    HeroSection,
    AsSeenOnSection,
    HowItWorksSection,
} from '@/Components/Sections/Homepage';

// Lazy load below-fold sections for faster initial load
const CallToActionBanner = lazy(() => import('@/Components/Sections/Homepage/CallToActionBanner'));
const ServicesSection = lazy(() => import('@/Components/Sections/Homepage/ServicesSection'));
const WhyChooseUsSection = lazy(() => import('@/Components/Sections/Homepage/WhyChooseUsSection'));
const ComparisonSection = lazy(() => import('@/Components/Sections/Homepage/ComparisonSection'));
const Testimonials2Section = lazy(() => import('@/Components/Sections/Homepage/Testimonials2Section'));
const OurPledgeSection = lazy(() => import('@/Components/Sections/Homepage/OurPledgeSection'));
const FAQSection = lazy(() => import('@/Components/Sections/Homepage/FAQSection'));
const ContactSection = lazy(() => import('@/Components/Sections/Homepage/ContactSection'));
const Footer = lazy(() => import('@/Components/Sections/Homepage/Footer'));

// Minimal loading fallback
const SectionLoader = () => <div className="min-h-[200px]" />;

export default function Home() {
    return (
        <>
            <Head title="Sell Your House Fast for Cash" />
            <div className="min-h-screen bg-white">
                <TopBar />
                <Header />
                <main>
                    {/* Critical above-fold content */}
                    <HeroSection />
                    <AsSeenOnSection />
                    <HowItWorksSection />

                    {/* Lazy loaded below-fold content */}
                    <Suspense fallback={<SectionLoader />}>
                        <CallToActionBanner />
                        <ServicesSection />
                        <WhyChooseUsSection />
                        <Testimonials2Section />
                        <OurPledgeSection />
                        <ComparisonSection />
                        <FAQSection />
                        <ContactSection />
                    </Suspense>
                </main>
                <Suspense fallback={<SectionLoader />}>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}
