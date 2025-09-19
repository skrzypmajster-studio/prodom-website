import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

import content from '@/app/content.json';

import { HeroSection } from "./_sections/Hero";
import { RealizationDetailsSection } from "./_sections/Details";
import { RealizationGallerySection } from "./_sections/Gallery";
import { CallToActionSection } from "./_sections/CallToAction";

type RealizationDetailsProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return content.realizations.map((({ slug }) => ({ slug })));
}

export async function generateMetadata(
  { params }: RealizationDetailsProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const realization = content.realizations.find((realization) => realization.slug === slug);

  return ({
    title: `PRODOM – Realizacja: ${realization?.title}`,
    description: `Szczegóły realizacji: ${realization?.title} – firma PRODOM.`,
    robots: {
      index: !!process.env.ROBOTS_INDEX_ENABLED,
    }
  });
}

export default async function RealizationDetails({ params }: RealizationDetailsProps) {
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
