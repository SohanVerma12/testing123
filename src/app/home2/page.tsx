
'use client';

import Link from 'next/link';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, ShieldCheck, PieChart, Users, Code, BrainCircuit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Note: To use motion, you would need to add 'framer-motion' to your package.json
// Since I cannot do that, I will simulate the structure and you can add the library later.
const MotionCard = Card; // Placeholder

export default function Home2Page() {
  const features = [
    {
      icon: Zap,
      title: 'Blazing Fast POS',
      description: 'Experience unparalleled speed and reliability with our next-gen billing system.',
      color: 'text-purple-400',
    },
    {
      icon: ShieldCheck,
      title: 'Fort-Knox Security',
      description: 'Your data is protected with multiple layers of enterprise-grade security.',
      color: 'text-green-400',
    },
    {
      icon: PieChart,
      title: 'Deep Analytics',
      description: 'Unlock actionable insights with our AI-powered analytics dashboard.',
      color: 'text-blue-400',
    },
    {
      icon: Users,
      title: 'CRM Reinvented',
      description: 'Build lasting customer relationships with automated loyalty programs.',
      color: 'text-red-400',
    },
    {
      icon: Code,
      title: 'Powerful APIs',
      description: 'Integrate seamlessly with any third-party service you need.',
      color: 'text-yellow-400',
    },
    {
      icon: BrainCircuit,
      title: 'AI-Powered Inventory',
      description: 'Automate stock-keeping and reduce wastage with intelligent predictions.',
      color: 'text-teal-400',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-gray-200 antialiased overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative isolate pt-24 md:pt-32 lg:pt-40">
          {/* Background Gradients */}
          <div
            className="absolute -top-80 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-20 right-20 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-[#80ff95] to-[#89f0fc] opacity-10"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>


          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 sm:text-6xl md:text-7xl">
              The Future of Restaurant <br className="hidden sm:block" /> Management is Here
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 sm:text-xl md:text-2xl">
              Another Head combines elegant design with powerful AI to give you an unparalleled operational advantage.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold group" asChild>
                <Link href="/#contact">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 flow-root">
             <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="relative aspect-[16/9] w-full max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    <img
                        src="https://placehold.co/1200x675/0a0a0a/ffffff.png?text=AH"
                        alt="Another Head Dashboard Illustration"
                        className="w-full h-full object-cover"
                        data-ai-hint="abstract 3d dashboard"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything You Need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">All-in-One Platform</p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              From the front-of-house to the back-office, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <MotionCard
                key={feature.title}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-left">
                  <div className="mb-4">
                    <feature.icon className={`h-10 w-10 p-2 rounded-lg bg-gray-800 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Ready to dive in?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Join thousands of innovative restaurants and see the difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold" asChild>
                    <Link href="/#contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="link" className="text-white group" asChild>
                    <Link href="/#features">
                        Learn more <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}

    