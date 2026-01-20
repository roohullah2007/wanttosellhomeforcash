import { Head, Link } from '@inertiajs/react';
import { CheckCircle, Phone, Clock, Home } from 'lucide-react';
import { TopBar, Header, Footer } from '@/Components/Sections/Homepage';

export default function Confirmed() {
    // Note: No Google Ads or Facebook Pixel conversion tracking on this page
    // This page is for non-viable leads (not homeowner OR property is listed)

    return (
        <>
            <Head title="Submission Confirmed - We've Received Your Information" />
            <div className="min-h-screen bg-white">
                <TopBar />
                <Header />
                <main className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="mb-8">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                                    <CheckCircle className="w-12 h-12 text-blue-600" />
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                    Submission Confirmed
                                </h1>
                                <p className="text-xl text-gray-600 mb-8">
                                    Thank you for your interest! We've received your information and will be in touch if we can assist you.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                    What Happens Next?
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start text-left">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">We Review Your Information</h3>
                                            <p className="text-gray-600">Our team will look over the details you've provided.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-left">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">We May Reach Out</h3>
                                            <p className="text-gray-600">If we can help with your situation, a team member will contact you.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-left">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Explore Your Options</h3>
                                            <p className="text-gray-600">We can discuss various solutions that might work for your unique situation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <div className="flex items-center justify-center text-gray-600">
                                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                                    <span>We'll review your submission</span>
                                </div>
                                <div className="flex items-center justify-center text-gray-600">
                                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                                    <span>Call us: (786) 949-9602</span>
                                </div>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
