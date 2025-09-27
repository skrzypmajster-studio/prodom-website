// import { HeroSection } from "./_sections/Hero"
// import { RealizationsGallerySection } from "./_sections/Gallery";
// import { CallToActionSection } from "./_sections/CallToAction";
import { realizationImages } from '@/app/content.json';

export default function RealizationDetails() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-200 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#111b3a]">Galeria realizacji</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Zobacz wybrane zdjęcia z naszych realizacji – od fundamentów po wykończenie.
        </p>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
            realizationImages.map((realizationImagePath, idx) => {
              const realizationCount = idx + 1;

              return (
                <div key={`realization-${realizationCount}`} className="aspect-[4/3] rounded-xl overflow-hidden shadow">
                  <img src={realizationImagePath} alt={`Realizacja ${realizationCount}`} className="w-full h-full object-cover" />
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  );
}

// export default function RealizationDetails() {
//   return (
//     <main>
//         <HeroSection />
//         <RealizationsGallerySection />
//         <CallToActionSection />
//     </main>
//   );
// }
