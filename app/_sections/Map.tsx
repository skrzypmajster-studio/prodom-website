export const MapSection = () => (
    <section id="mapa" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Znajdź nas na mapie</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
                <iframe className="w-full h-full" title="Mapa dojazdu PRODOM" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=prodom%20jawiszowice&maptype=roadmap" style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>
            </div>
        </div>
    </section>
)