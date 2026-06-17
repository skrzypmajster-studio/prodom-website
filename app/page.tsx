import { HeroSection } from "./_sections/Hero";
import { OfferSection } from "./_sections/Offer";
import { RealizationsSection } from "./_sections/Realizations";
import { WorkflowSection } from "./_sections/WorkflowSections";
import { PartnersSection } from "./_sections/Partners";
import { ContactSection } from "./_sections/Contact";
import { MapSection } from "./_sections/Map";
import { AluminiumAndLaser } from "./_sections/AluminiumAndLaser";

export default function Home() {
  return (
    <main id="top">
        <HeroSection />
        <OfferSection />
        <AluminiumAndLaser />
        <RealizationsSection />
        <WorkflowSection />
        <PartnersSection />
        <ContactSection />
        <MapSection />
    </main>
  )
}
