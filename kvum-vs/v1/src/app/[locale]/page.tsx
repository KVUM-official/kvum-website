import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { AboutSection } from '@/components/AboutSection';
import { ValueSection } from '@/components/ValueSection';
import { EventsSection } from '@/components/EventsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { CTASection } from '@/components/CTASection';
import { SectionNav } from '@/components/SectionNav';

export default function HomePage() {
  return (
    <>
      <SectionNav />
      <Hero />
      <LogoTicker />
      <AboutSection />
      <ValueSection />
      <EventsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
