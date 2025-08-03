
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, ShieldCheck, PieChart, Users, Code, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/landing/Container';


export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'Blazing Fast POS',
      description: 'Experience unparalleled speed and reliability with our next-gen billing system.',
    },
    {
      icon: ShieldCheck,
      title: 'Fort-Knox Security',
      description: 'Your data is protected with multiple layers of enterprise-grade security.',
    },
    {
      icon: PieChart,
      title: 'Deep Analytics',
      description: 'Unlock actionable insights with our AI-powered analytics dashboard.',
    },
    {
      icon: Users,
      title: 'CRM Reinvented',
      description: 'Build lasting customer relationships with automated loyalty programs.',
    },
    {
      icon: Code,
      title: 'Powerful APIs',
      description: 'Integrate seamlessly with any third-party service you need.',
    },
    {
      icon: BrainCircuit,
      title: 'AI-Powered Inventory',
      description: 'Automate stock-keeping and reduce wastage with intelligent predictions.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 lg:pt-40">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
          </div>
          <Container className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
              The Future of Business <br className="hidden sm:block" /> Management is Here
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Another Head combines elegant design with powerful AI to give you an unparalleled operational advantage.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold group" asChild>
                <Link href="/#contact">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
          </Container>
          
          <div className="mt-16 flow-root">
             <Container className="container mx-auto px-4 sm:px-6 lg:px-8 py-0">
                <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-border/20">
                    <Image
                        src="https://placehold.co/1200x675.png"
                        alt="Another Head Dashboard Illustration"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="abstract 3d dashboard"
                    />
                </div>
            </Container>
          </div>
        </section>

        {/* Features Section */}
        <Container id="features" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything You Need</h2>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">All-in-One Platform</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From the front-of-house to the back-office, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="flex-row items-start gap-4 space-y-0 p-6">
                    <div className="p-3 rounded-full bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold mt-0">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
        
        {/* Why Choose Us Section */}
        <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
          <Container className="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">The Another Head Advantage</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Our software is more than just features. It's a commitment to simplicity, power, and your success. We handle the complexities of technology so you can focus on what you do best: running your business.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                    <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><CheckCircle2 className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Intuitive and Easy to Use</span></div>
                    <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><CheckCircle2 className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Powerful, Real-Time Analytics</span></div>
                    <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><CheckCircle2 className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Dedicated Customer Support</span></div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-background">
            <Container className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Ready to Dive In?</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                    Join thousands of innovative businesses and see the difference Another Head can make.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                    <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
                        <Link href="/#contact">Get Started Now</Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="group" asChild>
                        <Link href="/pricing">
                            Explore Pricing <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
      </main>

      <ContactFooter />
    </div>
  );
}
