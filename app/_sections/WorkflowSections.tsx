export const WorkflowSection = () => (
    <section id="proces" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#111b3a]">Jak pracujemy</h2>
                <p className="text-[#555555] mt-2">
                    Nasz proces budowy jest przejrzysty i sprawdzony — od pierwszego spotkania po przekazanie kluczy.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
                {/* <!-- Krok 1 --> */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="font-semibold text-lg text-[#111b3a]">1. Konsultacja</h3>
                    <p className="text-[#555555] text-sm mt-2">Rozmawiamy o Twoich potrzebach i doradzamy najlepsze rozwiązania technologiczne.</p>
                </div>
                {/* <!-- Krok 2 --> */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                    <div className="text-4xl mb-4">📐</div>
                    <h3 className="font-semibold text-lg text-[#111b3a]">2. Projekt & wycena</h3>
                    <p className="text-[#555555] text-sm mt-2">Przygotowujemy ofertę, harmonogram prac i dobór materiałów.</p>
                </div>
                {/* <!-- Krok 3 --> */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                    <div className="text-4xl mb-4">🏗️</div>
                    <h3 className="font-semibold text-lg text-[#111b3a]">3. Realizacja</h3>
                    <p className="text-[#555555] text-sm mt-2">Budujemy dom krok po kroku — od fundamentów, przez dach, aż po wykończenie.</p>
                </div>
                {/* <!-- Krok 4 --> */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                    <div className="text-4xl mb-4">🏡</div>
                    <h3 className="font-semibold text-lg text-[#111b3a]">4. Odbiór & gwarancja</h3>
                    <p className="text-[#555555] text-sm mt-2">Przekazujemy klucze i udzielamy gwarancji na wykonane prace.</p>
                </div>
            </div>

            <div className="text-center mt-12">
                <a href="#kontakt" className="inline-block bg-[#F95300] hover:bg-[#d64500] text-white px-6 py-3 rounded-xl font-semibold">
                    Umów spotkanie
                </a>
            </div>
        </div>
    </section>
)