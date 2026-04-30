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
            <Head>
                <title>Want To Sell Home For Cash</title>
                <meta name="description" content="Your Trusted Home Buyers Nationwide. Get a fair cash offer in 24 hours. We buy houses in any condition. Close on your timeline." />
            </Head>
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
