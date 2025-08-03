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
