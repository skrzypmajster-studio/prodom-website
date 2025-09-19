import content from '@/app/content.json';

export const RealizationsGallerySection = () => (
    <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {content.realizations.map(({ slug, title, shortDescription }) => (
                <a key={slug} href={`/realizacje/${slug}`} className="bg-white rounded-2xl shadow overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-300"></div>
                    <div className="p-5">
                        <p className="font-semibold text-lg text-[#111b3a]">{title}</p>
                        <p className="text-sm text-gray-600 mt-1">{shortDescription}</p>
                    </div>
                </a>
            ))}
        </div>
    </section>
)