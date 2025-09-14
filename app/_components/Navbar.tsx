import content from '@/public/content.json';

export const Navbar = () => (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
            <a className="flex items-center gap-2 font-extrabold text-lg text-[#F95300] uppercase" href="#top">
                {content.name}
            </a>
            <nav>
                <ul className="flex gap-4 text-gray-600">
                    <li><a className="hover:text-gray-900 px-3 py-2 rounded-md" href="#oferta">Oferta</a></li>
                    <li><a className="hover:text-gray-900 px-3 py-2 rounded-md" href="#realizacje">Realizacje</a></li>
                    <li><a className="hover:text-gray-900 px-3 py-2 rounded-md" href="#proces">Jak pracujemy</a></li>
                    <li><a className="hover:text-gray-900 px-3 py-2 rounded-md" href="#partnerzy">Partnerzy</a></li>
                    <li><a className="bg-[#F95300] hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-semibold" href="#kontakt">Wyceń inwestycję</a></li>
                </ul>
            </nav>
        </div>
    </header>
)