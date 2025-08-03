
'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Utensils, ReceiptText, Boxes, Users, BarChart3, CookingPot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
// import resDashboard from '/res_dashboard.jpg';

// export const metadata: Metadata = {
//   title: 'Restaurant POS Software | Another Head for Restaurants',
//   description: 'The ultimate POS for full-service restaurants. Manage tables, orders, inventory, and online ordering from a single dashboard. Delight your guests and grow your business.',
//   keywords: ['restaurant pos', 'restaurant management software', 'fine dining pos', 'kot software', 'restaurant billing software'],
// };

export default function RestaurantsPage() {
  const features = [
    {
      icon: Utensils,
      title: 'Table & Order Management',
      description: 'Visualize your restaurant floor, manage table statuses, and process orders directly from the table to the kitchen.',
    },
    {
      icon: ReceiptText,
      title: 'Advanced Billing & KOT',
      description: 'Handle split bills, apply discounts, and manage multiple Kitchen Order Tickets (KOTs) for different counters seamlessly.',
    },
    {
      icon: Boxes,
      title: 'Inventory & Recipe Control',
      description: 'Track stock levels in real-time, manage ingredient recipes to calculate costs, and get low-stock alerts to prevent shortages.',
    },
    {
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'Build a customer database, run targeted SMS campaigns, and implement loyalty programs to encourage repeat business.',
    },
    {
      icon: BarChart3,
      title: 'Powerful Analytics',
      description: 'Get detailed reports on sales, top-selling items, staff performance, and more to make data-driven decisions.',
    },
    {
      icon: CookingPot,
      title: 'Online Ordering Integration',
      description: 'Sync with Zomato, Swiggy, and other aggregators to manage all your online orders from a single dashboard.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <Utensils className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              The Ultimate POS for Full-Service Restaurants
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              From fine dining to casual eateries, our software is designed to handle the complexities of your restaurant operations so you can focus on delighting your guests.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/#contact">Request a Live Demo</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Feature Section */}
        <Container id="features" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Everything You Need to Succeed</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our comprehensive feature set covers every aspect of your restaurant's operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-left bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                    <feature.icon className="h-8 w-8 text-primary" />
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
                    src='/res_dashboard.jpg'
                    alt="Restaurant dashboard on a tablet"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="restaurant pos tablet"
                    className="rounded-2xl shadow-xl"
                  />
              </div>
              <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Designed for Growth</h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Our platform isn't just about managing daily tasks. It's built to scale with you, whether you're opening your second location or expanding into a national chain.
                  </p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Multi-Outlet Management:</strong> View and manage all your locations from a single, powerful dashboard.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Franchise Ready:</strong> Centralized control over menus, pricing, and branding with franchise-level reporting.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Robust & Secure:</strong> Cloud-based infrastructure ensures your data is always safe, secure, and accessible.</span></li>
                  </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <Container className="text-center py-16 sm:py-24 md:py-32">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Join thousands of successful restaurants that trust Another Head to power their growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/pricing">Explore Pricing</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}
