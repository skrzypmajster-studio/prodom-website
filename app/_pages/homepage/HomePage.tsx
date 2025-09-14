import { ContactSection } from "./sections/Contact";
import { HeroSection } from "./sections/Hero";
import { MapSection } from "./sections/Map";
import { OfferSection } from "./sections/Offer";
import { PartnersSection } from "./sections/Partners";
import { RealizationsSection } from "./sections/Realizations";
import { WorkflowSection } from "./sections/WorkflowSections";

export const HomePage = () => (
    <main id="top">
        <HeroSection />
        <OfferSection />
        <RealizationsSection />
        <WorkflowSection />
        <PartnersSection />
        <ContactSection />
        <MapSection />
    </main>
);