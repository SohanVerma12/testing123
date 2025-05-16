
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { Utensils, Coffee, Truck, Cloud, Zap, Building, ShoppingBag, Handshake } from 'lucide-react';

interface IndustryDetail {
  icon: LucideIcon;
  name: string;
  description: string;
}

const industriesServed: IndustryDetail[] = [
  { 
    icon: Utensils, 
    name: 'Restaurants', 
    description: 'From fine-dine to casual dining, streamline table bookings, billing, and kitchen workflows.' 
  },
  { 
    icon: Coffee, 
    name: 'Cafés', 
    description: 'Manage peak hours, loyalty programs, and quick menu changes with ease.' 
  },
  { 
    icon: Truck, 
    name: 'Food Trucks', 
    description: 'Run your mobile kitchen efficiently with offline billing and real-time sales tracking.' 
  },
  { 
    icon: Cloud, 
    name: 'Cloud Kitchens', 
    description: 'Centralize orders, manage multiple brands, and integrate with online platforms like Zomato and Swiggy.' 
  },
  { 
    icon: Zap, 
    name: 'Quick Service (QSRs)', 
    description: 'Speed up order-taking, reduce wait times, and manage combos and discounts effortlessly.' 
  },
  { 
    icon: Building, 
    name: 'Franchise Chains', 
    description: 'Handle multiple locations, central inventory, and region-wise analytics under one dashboard.' 
  },
  { 
    icon: ShoppingBag, 
    name: 'Takeaway Counters', 
    description: 'Enable faster service, order queuing, and integration with delivery partners.' 
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              We Power All Kinds of Food Businesses
            </h1>
            <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto sm:text-2xl">
              Built to serve every format — no matter the size, location, or service style.
            </p>
          </Container>
        </section>

        {/* Industries Grid/Cards Section */}
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesServed.map((industry) => (
              <Card key={industry.name} className="text-center bg-card hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    <industry.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/70">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        {/* CTA Block Section */}
        <section className="bg-secondary/40 py-20 md:py-28">
          <Container className="text-center">
            <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              No matter what you serve — we’re here to serve you.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Talk to Sales</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Book a Demo</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
