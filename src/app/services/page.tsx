
'use client';

import Link from 'next/link';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Globe, Blocks, MailOpen, Palette, Search, ThumbsUp, CheckCircle2, Phone, Calendar, Settings
} from 'lucide-react';

const coreServices = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Create a clean, responsive, and fast-loading website tailored to your business.',
    features: ['Design-first approach', 'Mobile-optimized layouts', 'Seamless user experience'],
  },
  {
    icon: Blocks,
    title: 'Blockchain Development',
    description: 'We develop scalable, secure, and efficient blockchain solutions.',
    features: ['Smart contracts', 'DApps (Decentralized Apps)', 'NFT & token integration'],
  },
  {
    icon: MailOpen,
    title: 'Email Marketing',
    description: 'Reach your audience with personalized and effective email campaigns.',
    features: ['Targeted mailing lists', 'High conversion copywriting', 'Advanced tracking & reporting'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative, impactful designs that tell your brand’s story visually.',
    features: ['Logos & branding', 'Brochures & business cards', 'Social media creatives'],
  },
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your organic reach and climb to the top of search results.',
    features: ['On-page SEO', 'Keyword research', 'Technical & Local SEO'],
  },
  {
    icon: ThumbsUp,
    title: 'Social Media Marketing (SMM)',
    description: 'We craft campaigns that drive engagement, visibility, and conversions.',
    features: ['Facebook, Instagram, LinkedIn, Twitter', 'Ad campaign management', 'Performance analytics'],
  },
];

const servicePlans = [
  {
    name: 'Basic Plan – Starter',
    perfectFor: 'Freelancers, individuals, small portfolios',
    price: '₹10,000',
    delivery: '1–2 weeks',
    features: [
      'Up to 5 static pages',
      'Basic design template customization',
      'Mobile responsive design',
      'Custom logo design',
      'Social media links/icons',
      'Hosting guidance',
    ],
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Standard Plan – Growth',
    perfectFor: 'Startups, local businesses, growing brands',
    price: '₹20,000',
    delivery: '3–4 weeks',
    features: [
      'Up to 10 pages',
      'CMS-powered dynamic website (WordPress/Joomla)',
      'Mobile-optimized design',
      'Testimonials and gallery sections',
      'Click-to-call/email integration',
      'Social profile links',
    ],
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'Premium Plan – Pro',
    perfectFor: 'Online stores, product-based businesses',
    price: '₹35,000',
    delivery: '5–7 days', // Note: Original says 5-7 days, which is faster than standard. Assuming this is correct.
    features: [
      'Up to 50 products',
      'Full-featured e-commerce website',
      '3 custom contact forms',
      'WhatsApp chat integration',
      'Payment gateway setup',
      'Responsive mobile design',
    ],
    badgeColor: 'bg-green-500',
  },
];

const whyChooseUsItems = [
  'Transparent pricing',
  'Fast turnaround',
  'Dedicated support',
  'Customized solutions',
  '100% responsive designs',
  'SEO and performance focused',
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <Settings className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Full-Spectrum Digital Services to Power Your Brand
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              From websites to digital marketing, we help your business grow with modern tech and design solutions.
            </p>
          </Container>
        </section>

        {/* Our Core Services Section */}
        <Container id="core-services" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="flex flex-col text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-foreground/75">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

        {/* Our Service Plans Section */}
        <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
          <Container id="service-plans" className="py-0">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Our Service Plans
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {servicePlans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col shadow-xl border-2 ${plan.name === 'Standard Plan – Growth' ? 'border-primary ring-4 ring-primary/20' : 'border-border'}`}>
                  <CardHeader className="text-center p-6">
                    <div className={`w-3 h-3 ${plan.badgeColor} rounded-full mx-auto mb-2`}></div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-sm text-foreground/70 mt-1">Perfect for: {plan.perfectFor}</CardDescription>
                    <p className="text-3xl font-extrabold text-primary mt-4">{plan.price}</p>
                    <p className="text-xs text-foreground/60">(exclusive of taxes)</p>
                    <p className="text-sm font-medium text-foreground/80 mt-2">Delivery: {plan.delivery}</p>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 pt-0">
                    <p className="font-semibold mb-3 text-foreground/90">What’s Included:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span className="text-foreground/75">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button size="lg" className="w-full" variant={plan.name === 'Standard Plan – Growth' ? 'default' : 'outline'} asChild>
                      <Link href="#contact">Consult Us</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <Container id="why-choose-us" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Why Choose Us?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex items-center text-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </Container>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-t from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl mx-auto mb-10">
              Let’s turn your idea into a high-converting digital experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="#contact"><Calendar className="mr-2 h-5 w-5" /> Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <a href="tel:1800000XXXX"><Phone className="mr-2 h-5 w-5" /> Or call us at 1800-XXX-XXXX</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
