import { Phone } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-primary text-white py-2.5">
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Sell With Confidence – Fast And Easy!</span>
                    <a href="tel:+13057401132" className="font-medium hover:underline hidden sm:flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>Call Or Text Us +1 (305) 740-1132</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
