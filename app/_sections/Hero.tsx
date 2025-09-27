import { featuredRealizationImages } from '@/app/content.json';

export const HeroSection = () => (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <div className="text-blue-500 uppercase font-bold tracking-wider text-sm">Budowa domów od A do Z</div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">Dom murowany lub szkieletowy – <br />sprawnie, solidnie, na czas.</h1>
                <p className="text-gray-600 text-lg mt-4 max-w-xl">PRODOM to generalny wykonawca, który prowadzi inwestycję od fundamentów po dach i detale wykończeniowe. Zapewniamy pełną koordynację, terminowość i jakość potwierdzoną realizacjami.</p>
                <div className="flex gap-4 mt-6 flex-wrap">
                    <a className="bg-[#F95300] hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold" href="#kontakt">Bezpłatna wycena</a>
                    <a className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-3 rounded-xl font-semibold" href="#oferta">Zobacz ofertę</a>
                </div>
                <div className="bg-white shadow-md rounded-2xl p-6 mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center"><b className="text-xl">15+ lat</b><br />doświadczenia</div>
                    <div className="text-center"><b className="text-xl">100%</b><br />umów bez opóźnień*</div>
                    <div className="text-center"><b className="text-xl">80+</b><br />zrealizowanych domów</div>
                    <div className="text-center"><b className="text-xl">4.9/5</b><br />średnia opinii klientów</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">* według wewnętrznych statystyk PRODOM z ostatnich 24 miesięcy.</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow">
                        <img src={featuredRealizationImages[0]} alt={`Realizacja 1`} className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow">
                        <img src={featuredRealizationImages[1]} alt={`Realizacja 1`} className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow">
                        <img src={featuredRealizationImages[2]} alt={`Realizacja 1`} className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow">
                        <img src={featuredRealizationImages[3]} alt={`Realizacja 1`} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)