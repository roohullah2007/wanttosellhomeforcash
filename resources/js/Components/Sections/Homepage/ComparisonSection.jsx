import { CheckCircle, XCircle, Scale } from 'lucide-react';

export default function ComparisonSection() {
    const traditionalSales = [
        '+/- 10% Costs/Fees',
        'Financing Contingencies',
        'Required Appraisals',
        '+/- 91 Days Until Sold',
        'Tons of Showings',
        'You Pay For Repairs',
    ];

    const ourBenefits = [
        'No Commissions/Fees',
        'Guaranteed Offer',
        'No Appraisals/Showings',
        'Zero Repair Costs',
        'Leave Items Behind',
        'Close In 7 Days',
    ];

    const propertyInvestor = [
        'Slow/Inexperienced',
        'Low-Ball Offers',
        'Major Negotiation',
        'Prices Change',
        'Often Backs Out',
        'Needs Financing',
    ];

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-[#F5F7FA]">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 mb-4 md:mb-6">
                        <Scale className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">Compare Options</span>
                    </div>

                    <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-medium leading-tight text-text mb-3 md:mb-4">
                        Unlock Your Property's <span className="italic font-accent text-primary">Potential</span>
                    </h2>
                    <p className="text-text-light text-sm md:text-base lg:text-lg">
                        Home Value Unleashed
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
                    {/* Traditional Sales */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[340px] lg:w-[300px] lg:h-[384px]">
                        <div className="bg-[#2498CC] py-3 md:py-4 px-4 md:px-6">
                            <h3 className="text-lg md:text-xl font-semibold text-white text-left">Traditional Sales</h3>
                        </div>
                        <div className="pt-4 md:pt-5 pr-4 md:pr-5 pb-6 md:pb-[35px] pl-4 md:pl-5 space-y-3 md:space-y-4">
                            {traditionalSales.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <XCircle className="w-5 h-5 text-[#2498CC] flex-shrink-0" />
                                    <span className="text-text text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Want To Sell Home For Cash - Featured */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary w-full max-w-[380px] lg:w-[360px] lg:h-[475px] order-first lg:order-none lg:-mt-8">
                        <div className="bg-primary py-4 md:py-5 px-4 md:px-6">
                            <h3 className="text-lg md:text-xl font-semibold text-white text-left">Want To Sell Home For Cash</h3>
                        </div>
                        <div className="pt-4 md:pt-5 pr-4 md:pr-5 pb-6 md:pb-[35px] pl-4 md:pl-5 space-y-4 md:space-y-5 bg-white h-full">
                            {ourBenefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-text font-medium text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Property Investor */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[340px] lg:w-[300px] lg:h-[384px]">
                        <div className="bg-[#2498CC] py-3 md:py-4 px-4 md:px-6">
                            <h3 className="text-lg md:text-xl font-semibold text-white text-left">Property Investor</h3>
                        </div>
                        <div className="pt-4 md:pt-5 pr-4 md:pr-5 pb-6 md:pb-[35px] pl-4 md:pl-5 space-y-3 md:space-y-4">
                            {propertyInvestor.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <XCircle className="w-5 h-5 text-[#2498CC] flex-shrink-0" />
                                    <span className="text-text text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
