
// import Link from 'next/link';
// import Image from 'next/image';
// import { Navbar } from '@/components/landing/Navbar';
// import { ContactFooter } from '@/components/landing/ContactFooter';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Zap, ShieldCheck, PieChart, Users, Code, BrainCircuit, CheckCircle2 } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Container } from '@/components/landing/Container';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Another Head | Smart Software for Cafes, Restaurants & More',
//   description: 'Affordable software solutions for cafes, restaurants, pharmacies, and payroll. Local setup from ₹199 and cloud from ₹599/month. Run your business smarter.',
//   keywords: ['another head', 'cafe software', 'restaurant pos', 'payroll software', 'pharmacy billing', 'cloud pos india'],
//   authors: [{ name: 'Another Head' }],
//   robots: 'index, follow',
//   openGraph: {
//     title: 'Another Head | Smart Business Software',
//     description: 'Run your business smarter — Cafe, Restaurant, Pharmacy, and Payroll solutions in one place.',
//     url: 'https://www.anotherhead.in/', // To be replaced with actual URL
//     type: 'website',
//   },
// };

// export default function HomePage() {
//   const features = [
//     {
//       icon: Zap,
//       title: 'Blazing Fast POS',
//       description: 'Experience unparalleled speed and reliability with our next-gen billing system.',
//     },
//     {
//       icon: ShieldCheck,
//       title: 'Fort-Knox Security',
//       description: 'Your data is protected with multiple layers of enterprise-grade security.',
//     },
//     {
//       icon: PieChart,
//       title: 'Deep Analytics',
//       description: 'Unlock actionable insights with our AI-powered analytics dashboard.',
//     },
//     {
//       icon: Users,
//       title: 'CRM Reinvented',
//       description: 'Build lasting customer relationships with automated loyalty programs.',
//     },
//     {
//       icon: Code,
//       title: 'Powerful APIs',
//       description: 'Integrate seamlessly with any third-party service you need.',
//     },
//     {
//       icon: BrainCircuit,
//       title: 'AI-Powered Inventory',
//       description: 'Automate stock-keeping and reduce wastage with intelligent predictions.',
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
//       <Navbar />

//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="relative pt-24 md:pt-32 lg:pt-40">
//           <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
//             <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
//           </div>
//           <Container className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-0">
//             <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
//               The Future of Business <br className="hidden sm:block" /> Management is Here
//             </h1>
//             <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
//               Another Head combines elegant design with powerful AI to give you an unparalleled operational advantage.
//             </p>
//             <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold group" asChild>
//                 <Link href="/#contact">
//                   Request a Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </Link>
//               </Button>
//               <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
//                 <Link href="#features">
//                   Learn More
//                 </Link>
//               </Button>
//             </div>
//           </Container>
          
//           <div className="mt-16 flow-root">
//              <Container className="container mx-auto px-4 sm:px-6 lg:px-8 py-0">
//                 <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-border/20">
//                     <Image
//                         src="https://placehold.co/1200x675.png"
//                         alt="Another Head Dashboard Illustration"
//                         layout="fill"
//                         objectFit="cover"
//                         data-ai-hint="abstract 3d dashboard"
//                     />
//                 </div>
//             </Container>
//           </div>
//         </section>

//         {/* Features Section */}
//         <Container id="features" className="py-16 sm:py-24 md:py-32">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-base font-semibold leading-7 text-primary">Everything You Need</h2>
//             <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">All-in-One Platform</p>
//             <p className="mt-6 text-lg leading-8 text-muted-foreground">
//               From the front-of-house to the back-office, we've got you covered.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature) => (
//               <Card
//                 key={feature.title}
//                 className="bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//               >
//                 <CardHeader className="flex-row items-start gap-4 space-y-0 p-6">
//                     <div className="p-3 rounded-full bg-primary/10">
//                         <feature.icon className="h-6 w-6 text-primary" />
//                     </div>
//                     <CardTitle className="text-xl font-semibold mt-0">{feature.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-6 pt-0">
//                   <p className="mt-2 text-muted-foreground">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </Container>
        
//         {/* Why Choose Us Section */}
//         <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
//           <Container className="py-0">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                <div className="relative aspect-square w-full max-w-lg mx-auto">
//                  <Image
//                     src="https://placehold.co/600x600.png"
//                     alt="Abstract software interface illustration"
//                     layout="fill"
//                     objectFit="cover"
//                     data-ai-hint="abstract software ui"
//                     className="rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
//                   />
//               </div>
//               <div className="text-center lg:text-left">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">The Another Head Advantage</h2>
//                 <p className="mt-6 text-lg leading-8 text-muted-foreground">
//                   Our software is more than just features. It's a commitment to simplicity, power, and your success. We handle the complexities of technology so you can focus on what you do best: running your business.
//                 </p>
//                 <div className="mt-8 flex flex-col gap-4">
//                     <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><CheckCircle2 className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Intuitive and Easy to Use</span></div>
//                     <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><CheckCircle2 className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Powerful, Real-Time Analytics</span></div>
//                     <div className="flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"><div className="p-2 rounded-full bg-green-100"><CheckCircle2 className="h-5 w-5 text-green-600" /></div><span className="text-lg font-medium">Dedicated Customer Support</span></div>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </section>

//         {/* Final CTA */}
//         <section className="bg-background">
//             <Container className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Ready to Dive In?</h2>
//                 <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
//                     Join thousands of innovative businesses and see the difference Another Head can make.
//                 </p>
//                 <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
//                     <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold" asChild>
//                         <Link href="/#contact">Get Started Now</Link>
//                     </Button>
//                     <Button size="lg" variant="ghost" className="group" asChild>
//                         <Link href="/pricing">
//                             Explore Pricing <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                         </Link>
//                     </Button>
//                 </div>
//             </Container>
//         </section>
//       </main>

//       <ContactFooter />
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/Navbar";
import { ContactFooter } from "@/components/landing/ContactFooter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowRight,
  Coffee,
  Utensils,
  Pill,
  Users,
  CheckCircle2,
  ReceiptText,
  Boxes,
  AreaChart,
  Bot,
  TabletSmartphone,
  PlayCircle,
  Cloud,
  Laptop,
} from "lucide-react";
import { FloatingSupport } from "@/components/landing/FloatingSupport";
import { Container } from "@/components/landing/Container";
import type { Metadata } from "next";
// import homeDashboard from "/home_dashboard.jpg";

// export const metadata: Metadata = {
//   title: 'Another Head | Smart Software for Cafes, Restaurants & More',
//   description: 'Affordable software solutions for cafes, restaurants, pharmacies, and payroll. Local setup ₹199 and cloud ₹599/month.',
//   keywords: ['another head', 'cafe software', 'restaurant pos', 'payroll software', 'pharmacy billing', 'cloud pos india'],
//   authors: [{ name: 'Another Head' }],
//   robots: 'index, follow',
//   openGraph: {
//     title: 'Another Head | Smart Business Software',
//     description: 'Run your business smarter — Cafe, Restaurant, Pharmacy, and Payroll solutions in one place.',
//     url: 'https://www.anotherhead.in/', // To be replaced with actual URL
//     type: 'website',
//   },
// };

export default function Home2Page() {
  const industries = [
    {
      icon: Coffee,
      title: "For Cafes",
      description:
        "Quick billing, loyalty management, and inventory for your bustling cafe.",
      link: "/cafes",
    },
    {
      icon: Utensils,
      title: "For Restaurants",
      description: "Table management, KOT, and deep analytics for fine dining.",
      link: "/restaurants",
    },
    {
      icon: Pill,
      title: "For Pharmacies",
      description:
        "Batch and expiry tracking, billing, and compliance for medical shops.",
      link: "/medical-shops",
    },
    {
      icon: Users,
      title: "For Payroll",
      description:
        "Automated salary processing, compliance, and employee portals.",
      link: "/payroll",
    },
  ];

  const features = [
    {
      icon: ReceiptText,
      title: "Smart Billing",
      description: "Fast, accurate, and GST-compliant invoicing.",
    },
    {
      icon: Boxes,
      title: "Inventory Control",
      description: "Real-time stock alerts and recipe management.",
    },
    {
      icon: AreaChart,
      title: "Actionable Reports",
      description: "Insightful analytics to drive growth.",
    },
    {
      icon: Bot,
      title: "Process Automation",
      description: "Reduce manual work and operational errors.",
    },
    {
      icon: TabletSmartphone,
      title: "Multi-Device Access",
      description: "Manage your business from anywhere, on any device.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The best decision we made for our cafe. The CRM feature has doubled our repeat customers!",
      name: "Anika Sharma",
      title: "Owner, The Daily Grind Cafe",
      avatarHint: "smiling cafe owner",
    },
    {
      quote:
        "Managing our pharmacy inventory has never been easier. The expiry alerts save us a fortune.",
      name: "Rajesh Kumar",
      title: "Pharmacist, Seva Medicals",
      avatarHint: "professional pharmacist",
    },
  ];

  const pricingPlans = [
    {
      icon: Laptop,
      name: "Local Setup",
      price: "₹199",
      priceSuffix: "one-time",
      description:
        "Install on your computer, no internet required. Lifetime license for one device.",
      bestFor: "Small shops, offline businesses",
    },
    {
      icon: Cloud,
      name: "Cloud Setup",
      price: "₹599",
      priceSuffix: "/month",
      description:
        "Access from any device, anywhere. Includes backup, updates, and support.",
      bestFor: "Growing businesses, multi-user access",
      isPopular: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />

      {/* 1. Hero Section */}
      <Container id="hero" className="pt-24 pb-16 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Smart Software for Real Businesses
            </h1>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-muted-foreground">
              Another Head provides intuitive tools for cafes, restaurants,
              pharmacies, and payroll management to help you run your business
              smoother, faster, and better.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="#pricing">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video w-full max-w-2xl mx-auto">
            <img
              src='/home_dashboard.jpg'
              alt="Illustration of business owners using software for their cafe, pharmacy, and restaurant"
              // layout="fill"
              // objectFit="cover"
              data-ai-hint="business owners software dashboards"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Container>

      {/* 2. Industries Section */}
      <Container id="industries" className="bg-secondary/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            One Platform, Many Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We build tailored software for the unique needs of your industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <Card
              key={industry.title}
              className="text-center hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <industry.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="link" asChild>
                  <Link href={industry.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      {/* 3. Features Section */}
      <Container id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Powerful Features, Simply Delivered
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to streamline operations and grow your business,
            all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 4. Testimonials Section */}
      <Container id="testimonials" className="bg-secondary/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Trusted by Businesses Like Yours
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6 bg-card">
              <CardContent className="p-0">
                <blockquote className="text-lg italic text-foreground/80 mb-4">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://placehold.co/100x100.png"
                    width={48}
                    height={48}
                    alt={item.name}
                    className="rounded-full"
                    data-ai-hint={item.avatarHint}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      {/* 5. Product Demo Section */}
      <Container id="demo">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            See How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mb-8">
            Words can only say so much. Watch our product demo to see the
            Another Head platform in action.
          </p>
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden group border">
            <video
              src="/demo.mp4"
              controls
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="software demo video"
              poster="../home_dashboard.jpg" // Optional poster image
            />

            {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <Button
                variant="ghost"
                size="icon"
                className="h-24 w-24 text-white hover:bg-primary/80 transition-all transform group-hover:scale-110"
                aria-label="Play Demo Video"
              >
                <PlayCircle className="h-20 w-20" />
              </Button>
            </div> */}
          </div>
          <Button size="lg" className="mt-8" asChild>
            <Link href="#contact">Watch Full Demo</Link>
          </Button>
        </div>
      </Container>

      {/* 6. Pricing Section */}
      <Container id="pricing" className="bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Simple Pricing – Another Head
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Two Transparent Plans – Any Software, One Price
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col text-center ${
                plan.isPopular
                  ? "border-2 border-primary ring-4 ring-primary/20"
                  : ""
              }`}
            >
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 mb-2">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    {plan.priceSuffix}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <p className="font-semibold text-sm">
                  Best For: <span className="font-normal">{plan.bestFor}</span>
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.isPopular ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">Choose Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <Card className="p-6 bg-card">
            <h3 className="text-2xl font-bold text-foreground">
              🛠️ Also Offering Custom Solutions
            </h3>
            <p className="mt-2 text-muted-foreground">
              Need something unique? We create custom software tailored to your
              business needs — branding, integrations, extra features, and more.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="#contact">Request Custom Build</Link>
            </Button>
          </Card>
        </div>
      </Container>

      <ContactFooter />
      <FloatingSupport />
    </div>
  );
}
