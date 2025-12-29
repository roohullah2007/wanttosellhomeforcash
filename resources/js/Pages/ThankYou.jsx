import { Head, Link } from '@inertiajs/react';
import { CheckCircle, Phone, Clock, Home } from 'lucide-react';
import { TopBar, Header, Footer } from '@/Components/Sections/Homepage';

export default function ThankYou() {
    return (
        <>
            <Head title="Thank You - We've Received Your Request" />
            <div className="min-h-screen bg-white">
                <TopBar />
                <Header />
                <main className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="mb-8">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                    Thank You!
                                </h1>
                                <p className="text-xl text-gray-600 mb-8">
                                    We've received your request for a cash offer. Our team will review your property details and get back to you shortly.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                    What Happens Next?
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start text-left">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">We Review Your Property</h3>
                                            <p className="text-gray-600">Our team analyzes your property details and local market conditions.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-left">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">We Call You Within 24 Hours</h3>
                                            <p className="text-gray-600">Expect a call from one of our friendly team members to discuss your situation.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-left">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Receive Your Fair Cash Offer</h3>
                                            <p className="text-gray-600">We'll present you with a no-obligation cash offer for your property.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <div className="flex items-center justify-center text-gray-600">
                                    <Clock className="w-5 h-5 mr-2 text-primary" />
                                    <span>Response within 24 hours</span>
                                </div>
                                <div className="flex items-center justify-center text-gray-600">
                                    <Phone className="w-5 h-5 mr-2 text-primary" />
                                    <span>Call us: (555) 123-4567</span>
                                </div>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
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
