import { Container } from '@/components/landing/Container';
import { PricingCard } from '@/components/landing/PricingCard';

const pricingPlans = [
  {
    planName: 'Starter',
    price: '₹1,999',
    description: 'For new restaurants and small setups looking for essential POS features.',
    features: [
      'Basic POS & Billing',
      'Table Management (up to 10 tables)',
      'Basic Inventory',
      'Standard Reporting',
      'Email Support',
    ],
    ctaText: 'Choose Starter',
    ctaLink: '#contact',
  },
  {
    planName: 'Pro',
    price: '₹3,999',
    description: 'For growing businesses needing advanced features and integrations.',
    features: [
      'All Starter features',
      'Unlimited Table Management',
      'Advanced Inventory & Recipe Management',
      'Online Ordering Integration',
      'CRM & Loyalty Programs',
      'Advanced Analytics',
      'Priority Phone & Email Support',
    ],
    ctaText: 'Choose Pro',
    ctaLink: '#contact',
    isPopular: true,
  },
  {
    planName: 'Enterprise',
    price: 'Custom',
    priceFrequency: '',
    description: 'Tailored solutions for large chains and franchises with specific requirements.',
    features: [
      'All Pro features',
      'Multi-Outlet Management',
      'Central Kitchen Management',
      'Custom Integrations',
      'Dedicated Account Manager',
      'Custom Reporting & BI Tools',
      '24/7 Premium Support',
    ],
    ctaText: 'Contact Sales',
    ctaLink: '#contact',
  },
];

export function PricingSection() {
  return (
    <Container id="pricing">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Choose Your Perfect Plan
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Simple, transparent pricing. No hidden fees. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.planName} {...plan} />
        ))}
      </div>
    </Container>
  );
}
