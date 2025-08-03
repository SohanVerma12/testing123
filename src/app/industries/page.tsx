
'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { 
  Utensils, Coffee, Truck, Cloud, Zap, Building, ShoppingBag, 
  CheckCircle2, Link2 as IntegrationIcon, Quote, MessageSquare, Phone, Lightbulb, Rocket, HelpCircle, Cpu
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Industries We Serve | Another Head POS Solutions',
//   description: 'Another Head provides tailored POS solutions for every type of food business, including full-service restaurants, cafes, food trucks, cloud kitchens, and QSRs.',
//   keywords: ['food business pos', 'restaurant types', 'qsr software', 'cafe pos', 'cloud kitchen management'],
// };

interface IndustryDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  perfectFor: string[];
  id: string;
}

const industriesData: IndustryDetail[] = [
  {
    id: 'full-service',
    icon: Utensils,
    title: 'Full-Service Restaurants',
    description: "From fine-dining to casual dining, we’ve got your floor covered.",
    features: [
      "Table-wise billing and reservation management",
      "Kitchen Order Tickets (KOT) for multiple kitchen counters",
      "Multi-tax configurations & split bills",
      "Staff performance tracking and reports",
    ],
    perfectFor: ["Family Restaurants", "Casual Dining", "Dine-in Chains"]
  },
  {
    id: 'cafes',
    icon: Coffee,
    title: 'Cafés & Coffee Shops',
    description: "Serve your best brew without worrying about backend chaos.",
    features: [
      "Quick billing with modifiers (sugar-free, soy milk, etc.)",
      "CRM and loyalty programs for regular customers",
      "Custom offers and discounts for happy hours",
      "Add-ons like QR code ordering and digital menu",
    ],
    perfectFor: ["Boutique Cafés", "Bakery Cafés", "Coffee Lounges"]
  },
  {
    id: 'food-trucks',
    icon: Truck,
    title: 'Food Trucks',
    description: "Take your mobile kitchen anywhere – Another Head works offline too.",
    features: [
      "Offline billing mode with auto-sync",
      "Compact POS interface for small screens",
      "Real-time sales tracking from anywhere",
      "Digital receipts to save paper and time",
    ],
    perfectFor: ["Food Vans", "Festival Booths", "Roadside Eateries"]
  },
  {
    id: 'cloud-kitchens',
    icon: Cloud,
    title: 'Cloud Kitchens',
    description: "Manage multiple brands, menus, and platforms from one place.",
    features: [
      "Centralized kitchen management",
      "Zomato, Swiggy, DotPe, Magicpin integrations",
      "Multi-brand menu handling",
      "Automated order printing and dispatch",
    ],
    perfectFor: ["Delivery Kitchens", "Dark Kitchens", "Virtual Brands"]
  },
  {
    id: 'qsrs',
    icon: Zap,
    title: 'Quick Service Restaurants (QSRs)',
    description: "Speed meets accuracy in fast-paced QSR environments.",
    features: [
      "Combo & addon management",
      "Token-based order management",
      "Queue busting and fast billing",
      "Self-order kiosk integration (optional)",
    ],
    perfectFor: ["Fast Food Chains", "Juice Bars", "Ice Cream Parlors"]
  },
  {
    id: 'franchise-chains',
    icon: Building,
    title: 'Franchise Chains & Multi-Outlets',
    description: "One POS for all your locations — scalable, secure, and insightful.",
    features: [
      "Outlet-wise sales & performance dashboards",
      "Centralized inventory & pricing control",
      "Role-based staff access",
      "Franchise-level loyalty and CRM tools",
    ],
    perfectFor: ["Regional Chains", "National Franchises", "International Brands"]
  },
  {
    id: 'takeaway-counters',
    icon: ShoppingBag,
    title: 'Takeaway Counters',
    description: "Optimize high-volume takeaway with minimal wait time.",
    features: [
      "Fast checkout with QR or OTP",
      "Ready order queue with status updates",
      "SMS & WhatsApp order notifications",
      "Integration with delivery apps",
    ],
    perfectFor: ["Quick Pick-up Counters", "Highway Stops", "Pastry Shops"]
  },
];

const integrationCategories = [
  { name: "Online Ordering Platforms", examples: "Zomato, Swiggy, Thrive, DotPe", icon: Cpu },
  { name: "Payment Gateways", examples: "Razorpay, Paytm, PhonePe", icon: Cpu },
  { name: "Accounting Software", examples: "Tally, Busy Accounting, Zoho Books", icon: Cpu },
  { name: "Delivery & Inventory Apps", examples: "Various logistics and stock partners", icon: Cpu },
];

const successStories = [
  {
    quote: "Another Head helped us streamline 12 outlets with one login – saved us 30+ man hours weekly!",
    name: "Ajay Shah",
    title: "CEO, Bombay Bowl"
  },
  {
    quote: "Our café loyalty program runs on auto-pilot now. Repeat customers have doubled.",
    name: "Ruchi Agarwal",
    title: "Owner, ChocoBean Café"
  }
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Empowering Every Type of Food Business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Whether you're serving on a plate, in a box, or on the go — Another Head powers your operations, simplifies your workflows, and drives profitability.
            </p>
          </Container>
        </section>

        {/* Industries Sections */}
        <Container className="py-16 md:py-20 lg:py-24 space-y-16">
          {industriesData.map((industry, index) => (
            <section key={industry.id} id={industry.id} className="scroll-mt-20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 p-4 bg-primary/10 rounded-full">
                  <industry.icon className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-3xl font-semibold text-foreground mb-2">
                    {index + 1}. {industry.title}
                  </h2>
                  <p className="text-lg text-foreground/75 mb-6">{industry.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card className="bg-card/50 shadow-lg p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl text-primary">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 shadow-lg p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl text-primary">Perfect for</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {industry.perfectFor.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                           <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              {index < industriesData.length - 1 && <Separator className="my-12 md:my-16" />}
            </section>
          ))}
        </Container>

        {/* Seamless Integrations Section */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <Container>
            <div className="text-center mb-12">
              <IntegrationIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Seamless Integrations</h2>
              <p className="mt-4 text-lg text-foreground/75 max-w-2xl mx-auto">
                Connect your business with 100+ services that make life easier:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationCategories.map((cat, index) => (
                <Card key={index} className="p-6 bg-card text-center shadow-lg">
                  <cat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-sm text-foreground/70">{cat.examples}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Real Success Stories Section */}
        <Container className="py-16 md:py-24">
          <div className="text-center mb-12">
             <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Real Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 bg-card shadow-xl border border-primary/20">
                <CardContent className="p-0">
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <p className="text-lg text-foreground/80 italic mb-6">
                    “{story.quote}”
                  </p>
                  <p className="font-semibold text-foreground text-right">- {story.name}</p>
                  <p className="text-sm text-foreground/70 text-right">{story.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        {/* Not Sure Which Plan Suits Your Business? Section */}
        <section className="bg-primary/10 py-20 md:py-28">
          <Container className="text-center py-12 md:py-16">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Not Sure Which Solution Suits Your Business?
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto mb-10">
              Let us help you find the right fit for your food business. Our experts are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Talk to Sales</Link>
              </Button>
            </div>
          </Container>
        </section>
        
        {/* CTA Footer Section */}
        <Container className="py-16 md:py-24 text-center">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
             Whatever you serve, we’re here to serve you.
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
             Join 55,000+ businesses already running on Another Head.
            </p>
             <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-md text-green-600 mb-8">
                <span className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2"/>Easy to Set Up</span>
                <span className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2"/>Affordable Plans</span>
                <span className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2"/>Proven ROI</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-10 py-4 text-xl font-semibold">
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-10 py-4 text-xl font-semibold">
                <Link href="/#pricing">Get Started for Free</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}
