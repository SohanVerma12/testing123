
'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Pill, FileText, Package, Search, Bell, Shield, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
// import pharama_dashboard from '/pharama_dashboard.jpg';

// export const metadata: Metadata = {
//   title: 'Pharmacy Management Software | Another Head for Medical Shops',
//   description: 'All-in-one pharmacy software to manage inventory, billing, and compliance. Simplify your medical shop operations with powerful, easy-to-use tools.',
//   keywords: ['pharmacy management software', 'medical shop software', 'pharmacy billing software', 'inventory management pharmacy'],
// };

export default function MedicalShopsPage() {
  const features = [
    {
      icon: Package,
      title: 'Comprehensive Inventory Management',
      description: 'Track stock by batch number and expiry date. Get alerts for near-expiry and low-stock items to minimize waste and maximize availability.',
    },
    {
      icon: FileText,
      title: 'Effortless Billing & Invoicing',
      description: 'Generate GST-compliant invoices quickly. Handle both prescription and over-the-counter sales with an intuitive interface.',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Maintain required drug records, manage scheduled drugs (H1, H2), and generate compliance reports with ease.',
    },
    {
      icon: Search,
      title: 'Fast Product Search',
      description: 'Quickly find medicines and their substitutes using our powerful search functionality, improving customer service speed.',
    },
    {
      icon: Bell,
      title: 'Supplier & Purchase Management',
      description: 'Manage supplier information, create purchase orders, and track payments to streamline your procurement process.',
    },
    {
      icon: BarChart3,
      title: 'Insightful Reporting',
      description: 'Access detailed reports on sales, profit margins, fast-moving products, and GST to understand your business performance.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-blue-500/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <Pill className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Powerful Pharmacy Management Software
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Simplify your medical shop operations with our all-in-one solution for inventory, billing, and compliance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto" asChild>
                <Link href="/#contact">Book a Free Demo</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Feature Section */}
        <Container id="features" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Features Designed for Pharmacies</h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Everything you need to run your medical shop efficiently and accurately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-left bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6">
                   <div className="p-3 bg-blue-500/10 rounded-full mb-4 inline-block">
                    <feature.icon className="h-8 w-8 text-blue-500" />
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
                    src='/pharama_dashboard.jpg'
                    alt="Pharmacist using software on computer"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="pharmacist computer software"
                    className="rounded-2xl shadow-xl"
                  />
              </div>
              <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Accuracy and Control at Your Fingertips</h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    In the pharmacy business, precision is everything. Our software is built to provide accuracy in billing, inventory, and reporting, giving you complete control over your operations and helping you build customer trust.
                  </p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Secure & Reliable:</strong> Your data is protected with enterprise-grade security and regular backups.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Easy to Learn:</strong> A simple, user-friendly interface means you and your staff can get started in no time.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Dedicated Support:</strong> Our expert team is always available to help you with any questions or issues.</span></li>
                  </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <Container className="text-center py-16 sm:py-24 md:py-32">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Take Control of Your Pharmacy Today
            </h2>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Discover how our software can reduce errors, save time, and increase profitability for your medical shop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Get a Free Consultation</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}
