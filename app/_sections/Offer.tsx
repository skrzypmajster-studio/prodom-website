import { offer } from '@/app/content.json';

export const OfferSection = () => (
    <section id="oferta" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-2 md:gap-0 flex-col md:flex-row items-start md:items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold">{offer.header}</h2>
                    <p className="text-gray-600">{offer.subtitle}</p>
                </div>
                <a className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-semibold" href="#kontakt">
                    {offer.contact_button_text}
                </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    offer.items.map(({ category, name, description }, idx) => (
                        <div key={`offer_${idx}`} className="bg-white shadow rounded-2xl p-6">
                            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">{category}</span>
                            <h3 className="text-lg font-semibold mb-1">{name}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
);