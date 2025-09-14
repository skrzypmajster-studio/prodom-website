import content from '@/public/content.json';

export const Navbar = () => (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
            <a className="flex items-center gap-2 font-extrabold text-lg text-[#F95300] uppercase" href="/">
                {content.name}
            </a>

            <button id="menu-btn" className="md:hidden text-[#111b3a] focus:outline-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <nav id="menu" className="hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 md:static md:w-auto md:flex md:items-center md:gap-4 md:border-0 md:bg-transparent">
                <ul className="flex flex-col md:flex-row md:gap-4 p-4 md:p-0 text-gray-600">
                    <li><a className="hover:text-[#111b3a] px-3 py-2 block" href="/#oferta">Oferta</a></li>
                    <li><a className="hover:text-[#111b3a] px-3 py-2 block" href="/#realizacje">Realizacje</a></li>
                    <li><a className="hover:text-[#111b3a] px-3 py-2 block" href="/#proces">Jak pracujemy</a></li>
                    <li><a className="hover:text-[#111b3a] px-3 py-2 block" href="/#partnerzy">Partnerzy</a></li>
                    <li><a className="bg-[#F95300] hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-semibold block mt-2 md:mt-0" href="/#kontakt">Wyceń inwestycję</a></li>
                </ul>
            </nav>
        </div>
    </header>
)
