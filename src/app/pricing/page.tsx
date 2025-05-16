
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    emoji: '🟠',
    planName: 'Starter',
    price: '₹999',
    priceFrequency: '/month',
    description: 'Perfect for small outlets & food stalls',
    features: [
      'Basic POS features',
      'Billing & Invoicing',
      'Menu & Table Management',
      'Daily Sales Reports',
      'Email Support',
    ],
    ctaText: 'Get Started',
    ctaLink: '#contact',
    isPopular: false,
  },
  {
    emoji: '🟢',
    planName: 'Pro',
    price: '₹1,999',
    priceFrequency: '/month',
    description: 'Ideal for growing cafés and QSRs',
    features: [
      'Everything in Starter',
      'Inventory Management',
      'CRM & Loyalty Programs',
      'Online Ordering Integrations',
      'Analytics Dashboard',
      'WhatsApp & Chat Support',
    ],
    ctaText: 'Start Free Trial',
    ctaLink: '#contact',
    isPopular: true,
  },
  {
    emoji: '🟡',
    planName: 'Enterprise',
    price: 'Custom',
    priceFrequency: '',
    description: 'Tailored for chains, franchises & large businesses',
    features: [
      'All Pro features',
      'Multi-outlet Management',
      'Custom Reporting',
      'Dedicated Account Manager',
      'API & ERP Integrations',
      '24/7 Phone Support',
    ],
    ctaText: 'Schedule a Demo',
    ctaLink: '#contact',
    isPopular: false,
  },
];

const includedInAllPlans = [
  'Cloud-Based POS',
  'Secure Data Backup',
  'Unlimited Billing',
  'Software Updates',
  'Free Training & Onboarding',
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Flexible Pricing for Every Restaurant
            </h1>
            <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto sm:text-2xl">
              Whether you're just starting or scaling up, Petpooja has a plan that fits.
            </p>
          </Container>
        </section>

        {/* Pricing Plans Section */}
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {pricingPlans.map((plan) => (
              <Card key={plan.planName} className={`flex flex-col h-full shadow-lg ${plan.isPopular ? 'border-2 border-primary ring-4 ring-primary/20 relative' : 'border-border'}`}>
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                <CardHeader className="items-center text-center pt-10">
                  <CardTitle className="text-3xl font-bold">
                    {plan.emoji} {plan.planName}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                    {plan.priceFrequency && <span className="text-lg text-foreground/70">{plan.priceFrequency}</span>}
                  </div>
                  <CardDescription className="mt-2 text-foreground/60 h-12">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button size="lg" className="w-full" variant={plan.isPopular ? 'default' : 'outline'} asChild>
                    <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>

        {/* What's Included Section */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-10">What’s Included in All Plans</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                {includedInAllPlans.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Banner Section */}
        <section className="py-20 md:py-28 bg-gradient-to-t from-primary/10 to-background">
          <Container className="text-center">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Ready to streamline your restaurant operations?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg font-semibold">
                <Link href="#contact">Get Started for Free</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
