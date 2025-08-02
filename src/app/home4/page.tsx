
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Utensils, Coffee, Pill, Users, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/landing/Container';

export default function Home4Page() {
  const products = [
    {
      icon: Utensils,
      title: 'Restaurant POS',
      description: 'Streamline everything from table orders to billing and analytics for your restaurant.',
      link: '/restaurants',
      color: 'bg-red-500',
    },
    {
      icon: Coffee,
      title: 'Cafe POS',
      description: 'Manage quick billing, loyalty programs, and inventory for your bustling cafe.',
      link: '/cafes',
      color: 'bg-orange-500',
    },
    {
      icon: Pill,
      title: 'Medical Shop Software',
      description: 'Simplify pharmacy operations with powerful inventory, billing, and compliance tools.',
      link: '/medical-shops',
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Automate salary processing, compliance, and reporting for your entire team.',
      link: '/payroll',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 lg:pt-40">
           <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Smart Software for Modern Businesses
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Another Head builds smart software for cafes, restaurants, medical shops, and payroll systems — helping businesses run smoother, faster, and better. Simple tools, powerful results.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold group" asChild>
                <Link href="#products">
                  Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <Container id="products" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Solutions</h2>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Software Built for Your Industry</p>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
              We offer tailored solutions designed to meet the unique challenges of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary/20">
                <div className={`absolute top-0 left-0 h-1.5 w-full ${product.color} transition-all duration-300 group-hover:h-full group-hover:opacity-10`} />
                <CardHeader className="pt-8 relative z-10 items-center">
                   <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block mx-auto transition-transform duration-300 group-hover:scale-110">
                      <product.icon className="h-10 w-10 text-primary" />
                    </div>
                  <CardTitle className="text-2xl font-bold text-center text-foreground">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10 px-6 pb-6">
                  <p className="mt-2 text-muted-foreground">{product.description}</p>
                   <Button variant="link" asChild className="mt-4 text-lg">
                    <Link href={product.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        {/* Why Choose Us Section */}
        <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
          <Container className="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">The Another Head Advantage</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Our software is more than just features. It's a commitment to simplicity, power, and your success. We handle the complexities of technology so you can focus on what you do best: running your business.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                    <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><Check className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Intuitive and Easy to Use</span></div>
                    <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><Check className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Powerful, Real-Time Analytics</span></div>
                    <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><Check className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Dedicated Customer Support</span></div>
                </div>
              </div>
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                 <Image
                    src="https://placehold.co/600x600.png"
                    alt="Abstract software interface illustration"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="abstract software ui"
                    className="rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
                  />
              </div>
            </div>
          </Container>
        </section>

      </main>

      <ContactFooter />
    </div>
  );
}
