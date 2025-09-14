export const RealizationsSection = () => (
    <section id="realizacje" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold">Nasze realizacje</h2>
                    <p className="text-gray-600">Zobacz kilka wybranych projektów, które zrealizowaliśmy dla naszych klientów.</p>
                </div>
                <a href="realizacje.html" className="bg-[#F95300] hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-semibold">Wszystkie realizacje</a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* <!-- Realizacja 1 --> */}
                <div className="bg-white shadow rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-200"></div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Dom jednorodzinny – Warszawa</h3>
                        <p className="text-gray-600 text-sm">Nowoczesny dom murowany z garażem, stan deweloperski, 2024 r.</p>
                    </div>
                </div>

                {/* <!-- Realizacja 2 --> */}
                <div className="bg-white shadow rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-200"></div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Dom szkieletowy – Kraków</h3>
                        <p className="text-gray-600 text-sm">Ekologiczny dom szkieletowy z drewnianą elewacją, wykończony pod klucz.</p>
                    </div>
                </div>

                { /* <!-- Realizacja 3 --> */}
                <div className="bg-white shadow rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-200"></div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Rezydencja – Gdańsk</h3>
                        <p className="text-gray-600 text-sm">Ekskluzywna rezydencja z basenem, dachówka ceramiczna, projekt indywidualny.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)