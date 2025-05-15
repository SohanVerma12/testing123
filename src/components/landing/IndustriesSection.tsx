import { Container } from '@/components/landing/Container';
import { IndustryCard } from '@/components/landing/IndustryCard';
import { Utensils, Coffee, Truck, Cloud, Zap, Building } from 'lucide-react';

const industries = [
  { icon: Utensils, name: 'Fine Dining Restaurants' },
  { icon: Coffee, name: 'Cafés & Bistros' },
  { icon: Truck, name: 'Food Trucks' },
  { icon: Cloud, name: 'Cloud Kitchens' },
  { icon: Zap, name: 'Quick Service Restaurants (QSRs)' },
  { icon: Building, name: 'Food Courts & Chains' },
];

export function IndustriesSection() {
  return (
    <Container id="industries">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Powering All Types of Food Businesses
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Whether you run a cozy café or a multi-chain enterprise, Petpooja adapts to your unique needs.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((industry) => (
          <IndustryCard key={industry.name} icon={industry.icon} name={industry.name} />
        ))}
      </div>
    </Container>
  );
}
