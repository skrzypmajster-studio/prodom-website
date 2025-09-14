export const OfferSection = () => (
    <section id="oferta" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold">Kompleksowa oferta wykonawcza</h2>
                    <p className="text-gray-600">Wybierz zakres prac – od stanu surowego po wykończenie pod klucz. Poniżej nasze główne specjalizacje.</p>
                </div>
                <a className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-semibold" href="#kontakt">Porozmawiajmy o Twoim domu</a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Konstrukcje drewniane</span>
                    <h3 className="text-lg font-semibold mb-1">Ciesielstwo</h3>
                    <p className="text-gray-600">Prefabrykacja i montaż więźb dachowych, konstrukcji szkieletowych oraz altan i zadaszeń.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Dachy</span>
                    <h3 className="text-lg font-semibold mb-1">Dekarstwo</h3>
                    <p className="text-gray-600">Profesjonalny montaż pokryć oraz obróbek, szczelność i estetyka potwierdzona detalem.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Generalne wykonawstwo</span>
                    <h3 className="text-lg font-semibold mb-1">Usługi ogólnobudowlane</h3>
                    <p className="text-gray-600">Fundamenty, murowanie, stropy, elewacje i wykończenia. Koordynujemy wszystkie etapy.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Materiały premium</span>
                    <h3 className="text-lg font-semibold mb-1">Pokrycia dachowe</h3>
                    <p className="text-gray-600">Dobór i montaż dachówki ceramicznej, cementowej, blach panelowych i blachodachówek.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Detale i obróbki</span>
                    <h3 className="text-lg font-semibold mb-1">Okucia</h3>
                    <p className="text-gray-600">Indywidualne okucia i obróbki blacharskie. Precyzyjne dopasowanie do projektu.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Wykończenie</span>
                    <h3 className="text-lg font-semibold mb-1">Parapety</h3>
                    <p className="text-gray-600">Montaż parapetów zewnętrznych i wewnętrznych. Estetyka, izolacja i trwałość.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Odwodnienie dachu</span>
                    <h3 className="text-lg font-semibold mb-1">Rynny</h3>
                    <p className="text-gray-600">Systemy rynnowe stalowe i PVC wraz z montażem i akcesoriami.</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-2">Sprzedaż</span>
                    <h3 className="text-lg font-semibold mb-1">Sprzedaż metali kolorowych</h3>
                    <p className="text-gray-600">Miedź, aluminium, tytan-cynk i inne metale nieżelazne. Cięcie na wymiar i dostawa.</p>
                </div>
            </div>
        </div>
    </section>
);