import { useForm } from '@inertiajs/react';
import { Zap, Shield, Handshake, ArrowRight } from 'lucide-react';

export default function ContactSection() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        property_address: '',
        message: '',
        source: 'contact_form',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('lead.store'));
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-primary">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Content */}
                    <div>
                        <span className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-white/10 text-white">
                            Get Your Offer
                        </span>
                        <h2 className="text-[36px] md:text-[48px] font-medium leading-tight mb-6 text-white">
                            Ready to sell your house{' '}
                            <span className="italic font-accent text-white">fast for cash?</span>
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            Fill out the form and we'll get back to you within 24 hours with a fair, no-obligation cash offer for your property.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-white font-medium">Cash offer within 24 hours</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-white font-medium">No repairs or cleaning needed</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Handshake className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-white font-medium">Close on your timeline</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-text mb-6">Get Your Cash Offer</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Property Address *</label>
                                <input
                                    type="text"
                                    required
                                    value={data.property_address}
                                    onChange={(e) => setData('property_address', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="123 Main St, City, State ZIP"
                                />
                                {errors.property_address && <p className="text-red-500 text-sm mt-1">{errors.property_address}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text mb-2">Additional Details (Optional)</label>
                                <textarea
                                    rows={3}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your property..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-6 py-4 font-medium transition-all duration-300 hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{processing ? 'Submitting...' : 'Get My Cash Offer Now'}</span>
                                {!processing && <ArrowRight className="w-5 h-5" />}
                            </button>
                            <p className="text-xs text-text-light text-center">
                                By submitting this form, you agree to be contacted about your property. No obligation.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
