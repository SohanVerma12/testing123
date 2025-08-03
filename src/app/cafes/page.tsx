
'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Coffee, Zap, Users, BarChart3, Percent, QrCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Cafe POS Software | Another Head for Coffee Shops',
//   description: 'POS software designed for cafes and coffee shops. Manage billing, loyalty, and inventory with ease. Serve your best brew without the backend hassle.',
//   keywords: ['cafe pos software', 'coffee shop pos', 'cafe billing software', 'another head for cafes'],
// };

export default function CafesPage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Billing',
      description: 'Handle peak hour rushes with a super-fast POS designed for speed and accuracy. Less waiting, more happy customers.',
    },
    {
      icon: Users,
      title: 'Customer Loyalty & CRM',
      description: 'Create loyalty programs, manage customer data, and send offers to turn first-time visitors into regulars.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Sales Analytics',
      description: 'Track your best-selling items, peak hours, and daily sales trends with an easy-to-understand dashboard.',
    },
    {
      icon: Percent,
      title: 'Combos & Modifiers',
      description: 'Easily create combos and manage item modifiers (like extra shot, soy milk) for quick and accurate order taking.',
    },
    {
      icon: QrCode,
      title: 'QR Code Ordering',
      description: 'Allow customers to order and pay directly from their table using a QR code, freeing up your staff during busy times.',
    },
    {
      icon: Coffee,
      title: 'Simple Inventory Tracking',
      description: 'Keep track of your coffee beans, milk, and other essentials with simple yet effective stock management.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-orange-500/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <Coffee className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              The Perfect POS for Cafés & Coffee Shops
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Serve your best brew without the backend hassle. Our software helps you manage orders, customers, and sales with ease.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto" asChild>
                <Link href="/#contact">Get a Free Demo</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Feature Section */}
        <Container id="features" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Features That Brew Success</h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tools designed specifically for the fast-paced cafe environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-left bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6">
                   <div className="p-3 bg-orange-500/10 rounded-full mb-4 inline-block">
                    <feature.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

         {/* Why Us Section */}
        <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
          <Container className="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative aspect-square w-full max-w-lg mx-auto">
                 <Image
                    src="https://placehold.co/600x600.png"
                    alt="Cafe owner using POS system"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="cafe owner pos"
                    className="rounded-2xl shadow-xl"
                  />
              </div>
              <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Focus on Your Craft, Not on Clicks</h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Our interface is designed to be so intuitive that your staff can be trained in minutes. Spend less time managing software and more time perfecting your coffee and connecting with customers.
                  </p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Offline Mode:</strong> Never stop billing, even if your internet goes down.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Compact & Flexible:</strong> Works on any device—iPad, Android tablet, or desktop computer.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Affordable Plans:</strong> Get started with powerful features without breaking the bank.</span></li>
                  </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <Container className="text-center py-16 sm:py-24 md:py-32">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready to Upgrade Your Café?
            </h2>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              See for yourself how Another Head can streamline your operations and boost your profits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-orange-500 text-orange-500 hover:bg-orange-500/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}
