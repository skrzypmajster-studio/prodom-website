type RealizationDetailsSectionProps = {
    details: {
        type: string;
        localization: string;
        area: number | string;
        year: number;
        scope: string;
    }
}

export const RealizationDetailsSection = ({ details }: RealizationDetailsSectionProps) => (
    <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="aspect-[4/3] bg-gray-300 rounded-xl shadow"></div>
            <div>
                <h2 className="text-2xl font-bold text-[#111b3a] mb-4">Szczegóły inwestycji</h2>
                <ul className="space-y-2 text-gray-700">
                    <li><b>Typ:</b> {details.type}</li>
                    <li><b>Lokalizacja:</b> {details.localization}</li>
                    <li><b>Powierzchnia:</b> {details.area} m²</li>
                    <li><b>Rok:</b> {details.year}</li>
                    <li><b>Zakres:</b> {details.scope}</li>
                </ul>
            </div>
        </div>
    </section>
)