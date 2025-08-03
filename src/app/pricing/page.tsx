
'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Lightbulb, Zap, Cloud, BarChart3, Phone, Package, Settings, PlayCircle, Quote as QuoteIcon, HelpCircle, Rocket, MessageCircle, ReceiptText, Globe, Link2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Pricing Plans | Another Head POS and Business Software',
//   description: 'Transparent and scalable pricing for every restaurant and business. Choose from Starter, Pro, and Enterprise plans. No hidden fees, no long-term lock-ins.',
//   keywords: ['another head pricing', 'pos software cost', 'restaurant pos price', 'business software plans'],
// };

const comparisonFeatures = [
  { feature: 'POS Billing & Invoicing', starter: true, pro: true, enterprise: true },
  { feature: 'Menu & Table Management', starter: true, pro: true, enterprise: true },
  { feature: 'Inventory Management', starter: false, pro: true, enterprise: true },
  { feature: 'CRM & Loyalty Tools', starter: false, pro: true, enterprise: true },
  { feature: 'Online Order Integration', starter: false, pro: '✅ (Zomato, Swiggy, etc.)', enterprise: '✅ (Custom APIs)' },
  { feature: 'Analytics Dashboard', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom & Multi-outlet' },
  { feature: 'Multi-Outlet Management', starter: false, pro: false, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
  { feature: 'Support Channels', starter: 'Email', pro: 'Email + Chat', enterprise: '24/7 Phone + Priority' },
  { feature: 'Free Training & Onboarding', starter: true, pro: true, enterprise: true },
];

const whyChooseItems = [
  { icon: Lightbulb, title: 'Built for Indian Restaurants', description: 'From GST compliance to regional languages.' },
  { icon: Zap, title: '100+ Integrations', description: 'Zomato, Swiggy, Razorpay, Tally & more.' },
  { icon: Cloud, title: 'Cloud-Based POS', description: 'Manage from anywhere, on any device.' },
  { icon: BarChart3, title: 'Data That Works for You', description: 'Real-time reports, menu performance, staff efficiency.' },
  { icon: Phone, title: 'Unmatched Support', description: '24/7 availability with real humans.' },
];

const includedInAllPlansItems = [
  'Unlimited Billing',
  '100% Cloud-Based Access',
  'Secure Data Storage & Backups',
  'Regular Feature Updates',
  'Multilingual Interface',
  'Free Training for Staff',
  '24/7 Access to Help Center',
];

const faqItems = [
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade anytime as your business grows.' },
  { q: 'Is hardware included?', a: 'Hardware is optional and available as an add-on package.' },
  { q: 'Do you offer a free trial?', a: 'Yes! You can try Another Head for 7 days absolutely free.' },
  { q: 'Is there any setup fee?', a: 'No setup fee for Starter and Pro plans. Enterprise setups may vary.' },
  { q: 'Can I cancel my plan anytime?', a: 'Yes, there are no lock-ins or cancellation penalties.' },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Transparent, Scalable Pricing for Every Restaurant
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Whether you're running a single café or a chain of outlets, our pricing plans are designed to grow with your business. No hidden fees. No long-term lock-ins.
            </p>
          </Container>
        </section>

        {/* Section 1: Pricing Plans Comparison Table */}
        <Container id="pricing-table" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
            💰 Pricing Plans Comparison
          </h2>
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[250px] sm:w-1/3 text-lg font-semibold text-foreground">Feature</TableHead>
                      <TableHead className="text-center text-lg font-semibold text-foreground">Starter <br/><span className="text-sm font-normal text-primary">(₹999/mo)</span></TableHead>
                      <TableHead className="text-center text-lg font-semibold text-foreground border-x border-border">Pro <br/><span className="text-sm font-normal text-primary">(₹1,999/mo)</span></TableHead>
                      <TableHead className="text-center text-lg font-semibold text-foreground">Enterprise <br/><span className="text-sm font-normal text-primary">(Custom)</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFeatures.map((item, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? '' : 'bg-muted/30'}>
                        <TableCell className="font-medium text-foreground/90">{item.feature}</TableCell>
                        <TableCell className="text-center">
                          {typeof item.starter === 'boolean' ? (item.starter ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-500 mx-auto" />) : <span className="text-sm text-foreground/80">{item.starter}</span>}
                        </TableCell>
                        <TableCell className="text-center border-x border-border">
                          {typeof item.pro === 'boolean' ? (item.pro ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-500 mx-auto" />) : <span className="text-sm text-foreground/80">{item.pro}</span>}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof item.enterprise === 'boolean' ? (item.enterprise ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-500 mx-auto" />) : <span className="text-sm text-foreground/80">{item.enterprise}</span>}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
           <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#contact">Get Started with Starter</Link>
              </Button>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <Link href="#contact">Choose Pro (Most Popular)</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="#contact">Contact Sales for Enterprise</Link>
              </Button>
            </div>
        </Container>

        {/* Section 2: Why Choose Another Head? */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <Container>
            <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
              🏆 Why Choose Another Head?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseItems.map((item) => (
                <Card key={item.title} className="text-center bg-card hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center p-6">
                    <div className="p-3 bg-primary/10 rounded-full mb-3 inline-block">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-foreground/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 3: What's Included in Every Plan? */}
        <Container id="included-features" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
            📦 What's Included in Every Plan?
          </h2>
          <p className="text-center text-lg text-foreground/75 mb-10 max-w-2xl mx-auto">
            No matter which plan you choose, you'll get these core benefits to power your restaurant:
          </p>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {includedInAllPlansItems.map((item, index) => (
              <div key={index} className="flex items-center text-lg">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </Container>
        
        {/* Section 4: Add-Ons & Customizations */}
        <section className="bg-primary/5 py-16 md:py-24">
          <Container>
            <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
              🛠️ Add-Ons & Customizations
            </h2>
            <p className="text-center text-lg text-foreground/75 mb-10 max-w-2xl mx-auto">
              Need something extra? We’ve got you covered with a range of add-ons to perfectly fit your unique requirements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                { icon: ReceiptText, title: 'KOT Printers & Hardware Setup' },
                { icon: Globe, title: 'Website for Online Orders' },
                { icon: Package, title: 'Warehouse & Franchise Modules' },
                { icon: Link2, title: 'ERP/Accounting Integrations' },
                { icon: Settings, title: 'Custom API Access for large enterprises' },
              ].map((item, index) => (
                 <Card key={index} className="p-6 bg-card">
                   <div className="flex items-center space-x-4">
                     <div className="p-2 bg-primary/10 rounded-md">
                       <item.icon className="h-7 w-7 text-primary" />
                     </div>
                     <h3 className="text-lg font-medium text-foreground/90">{item.title}</h3>
                   </div>
                 </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#contact">Talk to Sales for Add-on Pricing</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 5: Product Demo / Walkthrough */}
        <Container id="demo-video" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4">
            🎬 See Another Head in Action
          </h2>
          <p className="text-center text-lg text-foreground/75 mb-10 max-w-2xl mx-auto">
            Still deciding? Watch our 2-minute product tour to see how Another Head works in real restaurants.
          </p>
          <div className="relative aspect-video max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden group border border-primary/30">
            <Image
              src="https://placehold.co/1280x720.png"
              alt="Another Head Product Demo Video Thumbnail"
              layout="fill"
              objectFit="cover"
              data-ai-hint="software demo video"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-24 w-24 text-white hover:bg-primary/80 hover:text-white transition-all duration-300 transform group-hover:scale-110"
                aria-label="Play Demo Video"
                onClick={() => alert('Video player would open here!')}
              >
                <PlayCircle className="h-20 w-20" />
              </Button>
            </div>
          </div>
        </Container>

        {/* Section 6: Success Stories */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <Container>
            <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
              💡 Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 bg-card shadow-lg">
                <QuoteIcon className="h-8 w-8 text-primary/70 mb-4" />
                <p className="text-lg text-foreground/80 italic mb-4">
                  “Another Head helped us reduce order errors and increase table turnover by 30%.”
                </p>
                <p className="font-semibold text-foreground">Suresh Mehta</p>
                <p className="text-sm text-foreground/70">Owner, Mehta’s Café (Mumbai)</p>
              </Card>
              <Card className="p-6 bg-card shadow-lg">
                <QuoteIcon className="h-8 w-8 text-primary/70 mb-4" />
                <p className="text-lg text-foreground/80 italic mb-4">
                  “I manage 8 outlets from one dashboard thanks to Another Head.”
                </p>
                <p className="font-semibold text-foreground">Priya Nair</p>
                <p className="text-sm text-foreground/70">Franchise Owner, South Spice Express</p>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/#testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section 7: Frequently Asked Questions (FAQs) */}
        <Container id="faq" className="py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-card shadow-md">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-semibold text-primary">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-foreground/80">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        {/* Section 8: Need Help Deciding? */}
        <section className="py-20 md:py-28 bg-gradient-to-t from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Need Help Deciding?
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto mb-10">
              Not sure which plan fits your needs? Let our experts guide you based on your business type and goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="#contact">Talk to Sales</Link>
              </Button>
            </div>
          </Container>
        </section>
        
        {/* Section 9: Call to Action */}
        <Container id="final-cta" className="py-16 md:py-24 text-center">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
             Start managing your restaurant the smart way.
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
             Join 50,000+ restaurants already using Another Head.
            </p>
             <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-sm text-green-600 mb-8">
                <span>✅ No credit card required</span>
                <span>✅ Cancel anytime</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-10 py-4 text-xl font-semibold">
                <Link href="#contact">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-10 py-4 text-xl font-semibold">
                <Link href="#contact">Request a Demo</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}
