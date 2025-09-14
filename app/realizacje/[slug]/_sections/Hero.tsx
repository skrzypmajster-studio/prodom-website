type HeroSectionProps = {
    title: string;
    description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-200 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#111b3a]">{title}</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>
    </section>
)