
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ReceiptText, ShoppingCart, Boxes, Users, BarChart3, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HomePage() {
  const features = [
    {
      icon: ReceiptText,
      title: 'Billing & Invoicing',
      description: 'Streamline your billing process with our fast and intuitive POS system. Generate GST-compliant invoices effortlessly.',
    },
    {
      icon: ShoppingCart,
      title: 'Online Ordering',
      description: 'Manage orders from Zomato, Swiggy, and your own website, all in one place.',
    },
    {
      icon: Boxes,
      title: 'Inventory Management',
      description: 'Track stock levels in real-time, manage recipes, and reduce wastage with our powerful inventory tools.',
    },
    {
      icon: Users,
      title: 'CRM & Loyalty',
      description: 'Build customer relationships and run loyalty programs to keep them coming back.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Get actionable insights into your sales and business performance with comprehensive reports.',
    },
    {
      icon: CreditCard,
      title: 'Payment Solutions',
      description: 'Accept all types of payments, including cards, UPI, and mobile wallets, with integrated payment gateways.',
    },
  ];

  const testimonials = [
    {
      quote: "Another Head has revolutionized how we manage our restaurant. The inventory management is a lifesaver!",
      name: 'Riya Sharma',
      business: 'Owner, The Curry House',
      avatarSrc: 'https://placehold.co/100x100.png',
      avatarFallback: 'RS',
      avatarHint: 'happy customer restaurant',
    },
    {
      quote: "The online ordering integration is seamless and has boosted our delivery sales significantly. Highly recommend!",
      name: 'Arjun Mehta',
      business: 'Manager, Pizza Central',
      avatarSrc: 'https://placehold.co/100x100.png',
      avatarFallback: 'AM',
      avatarHint: 'cafe owner portrait',
    },
    {
      quote: "User-friendly interface and excellent customer support. Another Head is a must-have for any F&B business.",
      name: 'Priya Patel',
      business: 'Founder, Chai Stop Cafe',
      avatarSrc: 'https://placehold.co/100x100.png',
      avatarFallback: 'PP',
      avatarHint: 'restaurant manager professional',
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
              One <span className="text-primary">POS</span> to Manage it All
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
              From billing to inventory, Another Head simplifies every step of running your restaurant.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold group" asChild>
                <Link href="#contact">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
                <Link href="#pricing">Get Started Free</Link>
              </Button>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-20 relative aspect-[16/9] w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-border/20">
              <Image
                src="https://placehold.co/1200x675.png"
                alt="Another Head Dashboard Illustration"
                layout="fill"
                objectFit="cover"
                data-ai-hint="software dashboard restaurant"
                className="bg-muted"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything You Need</h2>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">A Fully-Featured Platform</p>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
              Another Head offers a comprehensive suite of tools to manage and grow your food business efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card border rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-primary/10 inline-block">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="bg-secondary/50 py-16 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Loved by Restaurants Everywhere</h2>
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
        <section id="integrations" className="py-16 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Seamless Integrations</h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
                Connect Another Head with your favorite tools to streamline operations and enhance customer experience.
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

      </main>
      <ContactFooter />
    </div>
  );
}
