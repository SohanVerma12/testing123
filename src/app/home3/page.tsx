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

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200 antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 lg:pt-40">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
          style={{ backgroundSize: '3rem 3rem' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Technology That Transforms
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 sm:text-xl md:text-2xl">
            We don't just build software. We engineer the future with powerful, scalable, and intelligent technology solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_theme(colors.blue.600)]" asChild>
              <Link href="#products">
                Explore Our Tech <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPillars.map((pillar) => (
              <div key={pillar.title} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all hover:border-blue-600 hover:shadow-[0_0_15px_theme(colors.blue.600)]">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                    <pillar.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="mt-3 text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-400">OUR PRODUCTS</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Explore Our Technology Stack</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-400">
            Each product is a building block for innovation, designed for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-gray-900/60 transition-all duration-300",
                `border-${product.color}-500/20 hover:border-${product.color}-500/70 hover:shadow-[0_0_25px_theme(colors.${product.color}.500/40)]`
              )}
            >
              <div className={cn('absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full opacity-10 blur-3xl', `bg-${product.color}-500`)} />

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <product.icon className={cn('h-8 w-8', `text-${product.color}-400`)} />
                    <div>
                      <p className={cn('text-sm font-semibold', `text-${product.color}-400`)}>{product.category}</p>
                      <CardTitle className="text-2xl font-bold text-white mt-1">{product.title}</CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mt-2 text-gray-400">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Use Cases Section (White Background) */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-blue-600">APPLICATIONS</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">How Our Technology Is Used</p>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                Our flexible and powerful platform can be adapted to solve a wide range of business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                    <useCase.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{useCase.title}</h3>
                  <p className="mt-4 text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Trusted by Section (White Background) */}
      <section className="bg-gray-50 py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
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
      <section className="bg-gray-900/50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Engineered for Excellence.</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400 lg:mx-0">
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
                    <div key={item} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                      <Check className="h-6 w-6 text-green-400" />
                      <p className="text-lg font-medium text-white">{item}</p>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
        <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Cpu className="h-16 w-16 mx-auto text-blue-500 mb-6" />
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Ready to Innovate?</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
                    Let's discuss how our technology can be the catalyst for your next big breakthrough.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_theme(colors.blue.600)]" asChild>
                        <Link href="/#contact">Talk to an Expert</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-gray-700 hover:bg-gray-800 hover:text-white" asChild>
                        <Link href="/#pricing">
                           View Pricing
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

      <ContactFooter />

      {/* CSS in JS for dynamic classes and background patterns */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
        }
        .border-blue-500\\/20 { border-color: rgba(59, 130, 246, 0.2); }
        .hover\\:border-blue-500\\/70:hover { border-color: rgba(59, 130, 246, 0.7); }
        .bg-blue-500 { background-color: #3b82f6; }
        .text-blue-400 { color: #60a5fa; }
        .text-blue-500 { color: #3b82f6; }
        
        .border-purple-500\\/20 { border-color: rgba(139, 92, 246, 0.2); }
        .hover\\:border-purple-500\\/70:hover { border-color: rgba(139, 92, 246, 0.7); }
        .bg-purple-500 { background-color: #8b5cf6; }
        .text-purple-400 { color: #a78bfa; }

        .border-green-500\\/20 { border-color: rgba(34, 197, 94, 0.2); }
        .hover\\:border-green-500\\/70:hover { border-color: rgba(34, 197, 94, 0.7); }
        .bg-green-500 { background-color: #22c55e; }
        .text-green-400 { color: #4ade80; }

        .border-yellow-500\\/20 { border-color: rgba(234, 179, 8, 0.2); }
        .hover\\:border-yellow-500\\/70:hover { border-color: rgba(234, 179, 8, 0.7); }
        .bg-yellow-500 { background-color: #eab308; }
        .text-yellow-400 { color: #facc15; }

        .border-red-500\\/20 { border-color: rgba(239, 68, 68, 0.2); }
        .hover\\:border-red-500\\/70:hover { border-color: rgba(239, 68, 68, 0.7); }
        .bg-red-500 { background-color: #ef4444; }
        .text-red-400 { color: #f87171; }

        .border-indigo-500\\/20 { border-color: rgba(99, 102, 241, 0.2); }
        .hover\\:border-indigo-500\\/70:hover { border-color: rgba(99, 102, 241, 0.7); }
        .bg-indigo-500 { background-color: #6366f1; }
        .text-indigo-400 { color: #818cf8; }
      `}</style>
    </div>
  );
}

// Tailwind JIT can't see dynamic classes, so we safelist them here for the build process.
// This is a common pattern for dynamic color mapping.
// However, in this live-editing environment, we use style jsx to inject the needed classes.
// For a real project, you'd add these to your tailwind.config.ts safelist.
const safelist = [
  'border-blue-500/20', 'hover:border-blue-500/70', 'bg-blue-500', 'text-blue-400',
  'border-purple-500/20', 'hover:border-purple-500/70', 'bg-purple-500', 'text-purple-400',
  'border-green-500/20', 'hover:border-green-500/70', 'bg-green-500', 'text-green-400',
  'border-yellow-500/20', 'hover:border-yellow-500/70', 'bg-yellow-500', 'text-yellow-400',
  'border-red-500/20', 'hover:border-red-500/70', 'bg-red-500', 'text-red-400',
  'border-indigo-500/20', 'hover:border-indigo-500/70', 'bg-indigo-500', 'text-indigo-400',
];
