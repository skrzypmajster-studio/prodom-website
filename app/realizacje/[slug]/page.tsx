import content from '@/app/content.json';

import { HeroSection } from "./_sections/Hero";
import { RealizationDetailsSection } from "./_sections/Details";
import { RealizationGallerySection } from "./_sections/Gallery";
import { CallToActionSection } from "./_sections/CallToAction";
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return content.realizations.map((({ slug }) => ({ slug })));
}

export default async function RealizationDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const realization = content.realizations.find((realization) => realization.slug === slug);

  if (!realization) {
    redirect('/');
  }

  return (
    <main>
      <HeroSection title={realization.title} description={realization.shortDescription} />
      <RealizationDetailsSection details={realization.details} />
      <RealizationGallerySection />
      <CallToActionSection />
    </main>
  );
}
