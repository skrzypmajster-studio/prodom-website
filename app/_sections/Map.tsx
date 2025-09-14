export const MapSection = () => (
    <section id="mapa" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Znajdź nas na mapie</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
                <iframe className="w-full h-full" title="Mapa dojazdu PRODOM" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.207745894234!2d21.012228415803225!3d52.22967597975733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6696c5c7c7%3A0x2c0c67b5d84f7f39!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1618323564883!5m2!1spl!2spl" style={{ border: 0 }} allowFullScreen={false} loading="lazy" />
            </div>
        </div>
    </section>
)