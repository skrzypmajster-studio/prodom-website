'use client'

export const ContactSection = () => (
    <section id="kontakt" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
                <h2 className="text-3xl font-bold mb-4">Porozmawiajmy o Twojej inwestycji</h2>
                <form className="space-y-4" onSubmit={(event) => {
                    event.preventDefault();
                    alert('Dziękujemy! Skontaktujemy się wkrótce.');
                }}>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-3" type="text" placeholder="Imię i nazwisko" required />
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-3" type="email" placeholder="E-mail" required />
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-3" type="tel" placeholder="Telefon" />
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                        <option>Wybierz technologię</option>
                        <option>Dom murowany</option>
                        <option>Dom szkieletowy</option>
                        <option>Jeszcze nie wiem</option>
                    </select>
                    <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Wiadomość"></textarea>
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" required /> Wyrażam zgodę na kontakt w celu przygotowania wyceny.
                    </label>
                    <button className="bg-[#F95300] hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold" type="submit">Wyślij zapytanie</button>
                </form>
            </div>
            <div className="bg-white shadow rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Dane kontaktowe</h3>
                <p><strong>PRODOM Sp. z o.o.</strong><br />ul. Przykładowa 1, 00-000 Miasto<br />NIP: 0000000000</p>
                <p className="mt-4">
                    <a className="text-[#F95300] font-semibold" href="tel:+48600000000">+48 600 000 000</a><br />
                    <a className="text-[#F95300] font-semibold" href="mailto:biuro@PRODOM.pl">biuro@PRODOM.pl</a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Godziny pracy: pn–pt 8:00–17:00</p>
            </div>
        </div>
    </section>
)