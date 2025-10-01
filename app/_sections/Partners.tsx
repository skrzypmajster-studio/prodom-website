import BekoLogo from '@/public/partners/beko-logo.svg';
import WkretmetLogo from '@/public/partners/wkretmet-logo.svg';
import FakroLogo from '@/public/partners/fakro-logo.svg';
import VmzincLogo from '@/public/partners/vmzinc-logo.svg';
import BryzaLogo from '@/public/partners/bryza-logo.svg';

export const PartnersSection = () => (
    <section id="partnerzy" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Nasi partnerzy</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <BekoLogo />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <img src="/partners/henwal-logo.png" alt="Henwal" />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <img src="/partners/blachodom-plus-logo.png" alt="Blachodom Plus" />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <WkretmetLogo />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <FakroLogo />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center bg-black">
                    <img src="/partners/regamet-logo.png" alt="Regamet" />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <VmzincLogo />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <BryzaLogo />
                </div>
                <div className="border border-gray-300 rounded-xl p-6 text-center font-semibold text-gray-600 flex items-center justify-center">
                    <img src="/partners/tegola-logo.png" alt="Tegola" />
                </div>
            </div>
        </div>
    </section>
)