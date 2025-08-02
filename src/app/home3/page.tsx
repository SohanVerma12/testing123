
'use client';

import Link from 'next/link';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, Cpu, ShieldCheck, DatabaseZap, Bot, CloudCog, Code, Star, Check, GitBranch, Briefcase, BarChart, FileText, Share2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Home3Page() {
  const techPillars = [
    { icon: Bot, title: 'Generative AI', description: 'Leverage cutting-edge models for unparalleled creativity.' },
    { icon: CloudCog, title: 'Cloud Native', description: 'Scalable, resilient infrastructure for the modern web.' },
    { icon: ShieldCheck, title: 'Enterprise Security', description: 'Fortified with multi-layered threat protection.' },
    { icon: DatabaseZap, title: 'High-Performance DB', description: 'Blazing-fast data access and real-time analytics.' },
  ];

  const products = [
    { 
      title: 'Quantum AI Suite', 
      description: 'An advanced toolkit for building, deploying, and managing machine learning models at scale. Includes auto-ML and MLOps.',
      category: 'AI & Machine Learning',
      icon: Bot,
      color: 'blue'
    },
    { 
      title: 'Helios Cloud Platform', 
      description: 'A serverless computing environment designed for high-availability and automatic scaling for your most demanding applications.',
      category: 'Cloud Infrastructure',
      icon: CloudCog,
      color: 'purple'
    },
    { 
      title: 'Aegis Security Fabric', 
      description: 'A unified security solution providing threat intelligence, endpoint protection, and zero-trust access control.',
      category: 'Cybersecurity',
      icon: ShieldCheck,
      color: 'green'
    },
    { 
      title: 'HyperionDB', 
      description: 'A distributed SQL database that offers ACID compliance with the scalability of NoSQL for mission-critical data.',
      category: 'Databases',
      icon: DatabaseZap,
      color: 'yellow'
    },
     { 
      title: 'Forge Developer SDK', 
      description: 'A comprehensive set of APIs and tools to build custom solutions on top of the Another Head ecosystem securely.',
      category: 'APIs & Integrations',
      icon: Code,
      color: 'red'
    },
    { 
      title: 'Nexus Integration Hub', 
      description: 'Connect all your disparate systems into a cohesive, automated workflow with our powerful iPaaS solution.',
      category: 'Automation',
      icon: GitBranch,
      color: 'indigo'
    },
  ];
  
  const useCases = [
    {
      icon: Briefcase,
      title: 'For Enterprise',
      description: 'Scale your operations with robust, secure, and compliant technology designed for large-scale deployments.'
    },
    {
      icon: BarChart,
      title: 'For Analytics',
      description: 'Transform raw data into actionable insights with high-performance databases and AI-powered analysis tools.'
    },
    {
      icon: FileText,
      title: 'For Content Generation',
      description: 'Automate content creation, from marketing copy to detailed reports, using our advanced Generative AI suite.'
    },
    {
      icon: Share2,
      title: 'For System Integration',
      description: 'Seamlessly connect disparate software and services into a unified workflow with our powerful integration hub.'
    }
  ];

  const trustedLogos = [
    { name: 'QuantumLeap', logoUrl: 'https://placehold.co/150x50.png', hint: 'tech company logo' },
    { name: 'Stellar Solutions', logoUrl: 'https://placehold.co/150x50.png', hint: 'tech startup logo' },
    { name: 'Apex Innovations', logoUrl: 'https://placehold.co/150x50.png', hint: 'innovation company logo' },
    { name: 'Nova Dynamics', logoUrl: 'https://placehold.co/150x50.png', hint: 'dynamics tech logo' },
    { name: 'FusionWorks', logoUrl: 'https://placehold.co/150x50.png', hint: 'software company logo' },
    { name: 'Cognitive Corp', logoUrl: 'https://placehold.co/150x50.png', hint: 'ai company logo' },
  ];
  
  const productColors: { [key: string]: { text: string, border: string, bg: string } } = {
    blue: { text: 'text-blue-600', border: 'border-blue-200 hover:border-blue-400', bg: 'bg-blue-500' },
    purple: { text: 'text-purple-600', border: 'border-purple-200 hover:border-purple-400', bg: 'bg-purple-500' },
    green: { text: 'text-green-600', border: 'border-green-200 hover:border-green-400', bg: 'bg-green-500' },
    yellow: { text: 'text-yellow-600', border: 'border-yellow-200 hover:border-yellow-400', bg: 'bg-yellow-500' },
    red: { text: 'text-red-600', border: 'border-red-200 hover:border-red-400', bg: 'bg-red-500' },
    indigo: { text: 'text-indigo-600', border: 'border-indigo-200 hover:border-indigo-400', bg: 'bg-indigo-500' },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 lg:pt-40">
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-foreground">
            Technology That Transforms
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
            We don't just build software. We engineer the future with powerful, scalable, and intelligent technology solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
              <Link href="#products">
                Explore Our Tech <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPillars.map((pillar) => (
              <div key={pillar.title} className="p-6 rounded-xl bg-background/50 border border-border transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">OUR PRODUCTS</h2>
          <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Explore Our Technology Stack</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Each product is a building block for innovation, designed for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const colorClass = productColors[product.color] || productColors.blue;
            return (
              <Card
                key={product.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-card transition-all duration-300",
                  colorClass.border
                )}
              >
                <div className={cn('absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full opacity-[0.05] blur-3xl', colorClass.bg)} />

                <CardHeader className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <product.icon className={cn('h-8 w-8', colorClass.text)} />
                      <div>
                        <p className={cn('text-sm font-semibold', colorClass.text)}>{product.category}</p>
                        <CardTitle className="text-2xl font-bold text-foreground mt-1">{product.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="mt-2 text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">APPLICATIONS</h2>
              <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">How Our Technology Is Used</p>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
                Our flexible and powerful platform can be adapted to solve a wide range of business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <useCase.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{useCase.title}</h3>
                  <p className="mt-4 text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="bg-background py-16 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold leading-8 text-foreground">
              Trusted by the world's most innovative companies
            </h2>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10 items-center">
              {trustedLogos.map((logo) => (
                <div key={logo.name} className="flex justify-center" title={logo.name}>
                  <Image
                    src={logo.logoUrl}
                    alt={`${logo.name} logo`}
                    width={150}
                    height={50}
                    objectFit="contain"
                    data-ai-hint={logo.hint}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Why Our Tech Section */}
      <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Engineered for Excellence.</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground lg:mx-0">
                        Our technology isn't just about features; it's about providing a foundation you can trust to build and scale your ambitions.
                    </p>
                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                        <Button size="lg" asChild>
                            <Link href="/about-us">Learn About Our Mission</Link>
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {['Built for Scale', '99.99% Uptime SLA', 'Developer-First APIs', 'AI-Accelerated'].map(item => (
                    <div key={item} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border">
                      <Check className="h-6 w-6 text-green-500" />
                      <p className="text-lg font-medium text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
        <section className="py-16 sm:py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Cpu className="h-16 w-16 mx-auto text-primary mb-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Ready to Innovate?</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                    Let's discuss how our technology can be the catalyst for your next big breakthrough.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                    <Button size="lg" asChild className="w-full sm:w-auto">
                        <Link href="/#contact">Talk to an Expert</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                        <Link href="#pricing">
                           View Pricing
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

      <ContactFooter />
    </div>
  );
}
