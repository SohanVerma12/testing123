
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Utensils, Coffee, Pill, Users, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Container } from '@/components/landing/Container';

export default function HomePage() {
  const solutions = [
    {
      icon: Utensils,
      title: 'Restaurant POS',
      description: 'Streamline everything from table orders to billing and analytics.',
      link: '/restaurants',
    },
    {
      icon: Coffee,
      title: 'Cafe POS',
      description: 'Manage quick billing, loyalty programs, and inventory for your bustling cafe.',
      link: '/cafes',
    },
    {
      icon: Pill,
      title: 'Medical Shop Software',
      description: 'Simplify pharmacy operations with powerful inventory and billing tools.',
      link: '/medical-shops',
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Automate salary processing, compliance, and reporting for your team.',
      link: '/payroll',
    },
  ];

  const testimonials = [
    {
      quote: "Another Head has revolutionized how we manage our business. The software is intuitive and the support is top-notch!",
      name: 'Riya Sharma',
      business: 'Owner, The Curry House',
      avatarSrc: 'https://placehold.co/100x100.png',
      avatarFallback: 'RS',
      avatarHint: 'happy customer restaurant',
    },
    {
      quote: "The switch to Another Head was seamless. It has boosted our efficiency and sales significantly. Highly recommend!",
      name: 'Arjun Mehta',
      business: 'Manager, Modern Medico',
      avatarSrc: 'https://placehold.co/100x100.png',
      avatarFallback: 'AM',
      avatarHint: 'pharmacist professional portrait',
    },
    {
      quote: "User-friendly interface and excellent features. Another Head is a must-have for any modern business.",
      name: 'Priya Patel',
      business: 'Founder, Chai Stop Cafe',
      avatarSrc: 'https://placehold.co/100x100.png',
      avatarFallback: 'PP',
      avatarHint: 'cafe owner professional',
    },
  ];

  const integrations = [
    { name: 'Zomato', logoUrl: 'https://placehold.co/150x60.png', hint: 'food delivery logo' },
    { name: 'Swiggy', logoUrl: 'https://placehold.co/150x60.png', hint: 'food delivery logo' },
    { name: 'Razorpay', logoUrl: 'https://placehold.co/150x60.png', hint: 'payment gateway logo' },
    { name: 'Paytm', logoUrl: 'https://placehold.co/150x60.png', hint: 'payment gateway logo' },
    { name: 'Tally', logoUrl: 'https://placehold.co/150x60.png', hint: 'accounting software logo' },
    { name: 'Google My Business', logoUrl: 'https://placehold.co/150x60.png', hint: 'business listing logo' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 lg:pt-40 text-center">
           <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Smart Software for Modern Business
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Another Head builds intuitive software for cafes, restaurants, medical shops, and payroll systems — helping businesses run smoother, faster, and better.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold group" asChild>
                <Link href="#contact">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
                <Link href="/pricing">Explore Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <Container id="solutions" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Solutions</h2>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Software Built for Your Industry</p>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
              We offer tailored solutions designed to meet the unique challenges of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.title} className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 hover:border-primary/20">
                <CardHeader className="pt-8 relative z-10 items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block mx-auto transition-transform duration-300 group-hover:scale-110">
                      <solution.icon className="h-10 w-10 text-primary" />
                    </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10 px-6 pb-6">
                  <p className="mt-2 text-muted-foreground">{solution.description}</p>
                   <Button variant="link" asChild className="mt-4 text-lg">
                    <Link href={solution.link}>
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
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Loved by Businesses Everywhere</h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
                Hear what our satisfied clients have to say about Another Head.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col justify-between p-6 bg-card shadow-md rounded-xl">
                  <CardContent className="p-0">
                    <blockquote className="text-lg text-foreground italic">"{testimonial.quote}"</blockquote>
                  </CardContent>
                  <div className="mt-6 flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section id="integrations" className="bg-secondary/40 py-16 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Seamless Integrations</h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
                Connect Another Head with your favorite tools to streamline your entire operation.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {integrations.map((integration) => (
                <div key={integration.name} className="flex justify-center" title={integration.name}>
                  <Image
                    src={integration.logoUrl}
                    alt={`${integration.name} logo`}
                    width={140}
                    height={50}
                    objectFit="contain"
                    data-ai-hint={integration.hint}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <Container className="text-center py-16 sm:py-24 md:py-32">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Join thousands of successful businesses that trust Another Head to power their growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Schedule a Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}

    