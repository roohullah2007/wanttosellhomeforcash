import { Head } from '@inertiajs/react';
import {
    TopBar,
    Header,
    HeroSection,
    AsSeenOnSection,
    HowItWorksSection,
    CallToActionBanner,
    ServicesSection,
    WhyChooseUsSection,
    ComparisonSection,
    Testimonials2Section,
    OurPledgeSection,
    FAQSection,
    ContactSection,
    Footer,
} from '@/Components/Sections/Homepage';

export default function Home() {
    return (
        <>
            <Head title="Sell Your House Fast for Cash" />
            <div className="min-h-screen bg-white">
                <TopBar />
                <Header />
                <main>
                    <HeroSection />
                    <AsSeenOnSection />
                    <HowItWorksSection />
                    <CallToActionBanner />
                    <ServicesSection />
                    <WhyChooseUsSection />
                    <Testimonials2Section />
                    <OurPledgeSection />
                    <ComparisonSection />
                    <FAQSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
