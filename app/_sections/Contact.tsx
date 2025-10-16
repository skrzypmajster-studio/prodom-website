'use client'
import content from '@/app/content.json';

export const ContactSection = () => (
    <section id="kontakt" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-1 gap-10">
            {/* <div>
                <h2 className="text-3xl font-bold mb-4">Porozmawiajmy o Twojej inwestycji</h2>
                <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="c9e11750-5ffa-42e5-8328-3db72d01a4c2" />
                    <input name="Imię i nazwisko" className="w-full border border-gray-300 rounded-lg px-4 py-3" type="text" placeholder="Imię i nazwisko" required />
                    <input name="email" className="w-full border border-gray-300 rounded-lg px-4 py-3" type="email" placeholder="E-mail" required />
                    <input name="telefon" className="w-full border border-gray-300 rounded-lg px-4 py-3" type="tel" placeholder="Telefon" />
                    <select name="technologia" className="w-full border border-gray-300 rounded-lg px-4 py-3" aria-label="Wybierz technologię">
                        <option>Wybierz technologię</option>
                        <option value="Dom murowany">Dom murowany</option>
                        <option value="Dom szkieletowy">Dom szkieletowy</option>
                        <option value="Jeszcze nie wiem">Jeszcze nie wiem</option>
                    </select>
                    <textarea name="wiadomosc" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Wiadomość" rows={1}></textarea>
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" required /> Wyrażam zgodę na kontakt w celu przygotowania wyceny.
                    </label>
                    <button className="bg-[#F95300] hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold" type="submit">Wyślij zapytanie</button>
                </form>
            </div> */}
            <div className="bg-white shadow rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">Dane kontaktowe</h3>
                <p><strong>{content.contact.name}</strong><br />{content.contact.address}<br />NIP: {content.contact.nip}</p>
                <p className="mt-4">
                    <a className="text-[#F95300] font-semibold" href={`tel:${content.contact.phone_hyperlink}`}>{content.contact.phone_pretty}</a><br />
                    <a className="text-[#F95300] font-semibold" href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Godziny pracy: {content.contact.working_hours}</p>
            </div>
        </div>
    </section>
)