import Link from "next/link";
import {
  Fence,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const AluminiumAndLaser = () => {
  return (
    <section
      id="aluminium-laser"
      className="bg-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#E5D13F]
              bg-[#FFFBE0]
              px-4
              py-1
              text-sm
              font-semibold
              text-[#2A200F]
            "
          >
            NOWOŚĆ W OFERCIE
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#111b3a]">
            Ogrodzenia aluminiowe i spawanie laserowe
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Rozszerzyliśmy ofertę o produkcję nowoczesnych
            ogrodzeń aluminiowych, balustrad oraz usługi
            spawania laserowego dla klientów indywidualnych
            i firm.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          <div
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:shadow-lg
            "
          >
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#FFFBE0]
              "
            >
              <Fence
                className="h-7 w-7 text-[#E5D13F]"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-[#111b3a]">
              Ogrodzenia aluminiowe
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• furtki</li>
              <li>• przęsła</li>
              <li>• bramy</li>
              <li>• balustrady</li>
              <li>• konstrukcje aluminiowe</li>
            </ul>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:shadow-lg
            "
          >
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#FFFBE0]
              "
            >
              <Sparkles
                className="h-7 w-7 text-[#E5D13F]"
              />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-[#111b3a]">
              Spawanie laserowe
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• spawanie laserowe</li>
              <li>• czyszczenie laserowe</li>
              <li>• zgrzewanie</li>
              <li>• napawanie</li>
              <li>• regeneracja elementów</li>
            </ul>
          </div>
        </div>

        {/* Materials */}

        <div className="mt-14 text-center">
          <p className="mb-5 font-medium text-[#111b3a]">
            Pracujemy z materiałami:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Aluminium",
              "Stal",
              "Stal nierdzewna",
              "Miedź",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-[#F5F5F5]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#111b3a]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#111b3a]">
            Masz projekt do wykonania?
          </h3>

          <p className="mt-3 text-gray-600">
            Skontaktuj się z nami i otrzymaj bezpłatną wycenę.
          </p>

          <Link
            href="#kontakt"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#F95300]
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:opacity-90
            "
          >
            Zapytaj o wycenę
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}