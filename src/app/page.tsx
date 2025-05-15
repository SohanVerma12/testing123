import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { KeyFeaturesSection } from '@/components/landing/KeyFeaturesSection';
import { IndustriesSection } from '@/components/landing/IndustriesSection';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { DemoVideoSection } from '@/components/landing/DemoVideoSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { ContactFooter } from '@/components/landing/ContactFooter';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <KeyFeaturesSection />
        <IndustriesSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <DemoVideoSection />
        <PricingSection />
      </main>
      <ContactFooter />
    </div>
  );
}
