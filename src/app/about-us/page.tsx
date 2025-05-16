
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, PlugZap, BarChart3, Heart, Cloud, Rocket, Users, ShieldCheck, Award, Quote } from 'lucide-react';

export default function AboutUsPage() {
  const whyChooseUsItems = [
    { icon: Lightbulb, text: 'Simple & Scalable POS — Easy to set up, easier to use' },
    { icon: PlugZap, text: 'Powerful Integrations — Zomato, Swiggy, Razorpay, Tally & more' },
    { icon: BarChart3, text: 'Real-Time Analytics — Know your business inside out' },
    { icon: Heart, text: 'Reliable Support — 24/7 customer assistance' },
    { icon: Cloud, text: 'Cloud-Based — Access your business anywhere' },
  ];

  const ourValuesItems = [
    { icon: Rocket, title: 'Innovation First', description: 'We solve problems with smart, practical tech' },
    { icon: Users, title: 'Customer-Centricity', description: 'Our users come before everything else' },
    { icon: ShieldCheck, title: 'Trust & Transparency', description: 'We build with integrity' },
    { icon: Award, title: 'Excellence in Execution', description: 'We strive to deliver the best, always' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Container className="py-16 md:py-24">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              About <span className="text-primary">Petpooja</span>
            </h1>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto">
              Empowering Restaurants with Smart Technology
            </p>
          </header>

          {/* Section 1: Who We Are */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Who We Are</h2>
            <div className="max-w-3xl mx-auto text-lg text-foreground/70 space-y-4 text-center">
              <p>
                Petpooja is India’s leading Restaurant Management Platform, trusted by over 50,000+ restaurants across 150+ cities.
              </p>
              <p>
                We are a team of passionate innovators dedicated to simplifying the complex world of restaurant operations. From billing and inventory to customer engagement and analytics, our all-in-one POS system is built to help food businesses scale and succeed.
              </p>
            </div>
          </section>

          {/* Section 2: Our Mission */}
          <section className="mb-12 md:mb-16 bg-secondary/30 py-12 rounded-lg">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Our Mission</h2>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="relative p-4 text-xl italic border-l-4 border-primary bg-background/50 rounded-r-lg shadow">
                <Quote className="absolute top-2 left-2 h-8 w-8 text-primary/50 transform -translate-x-2 -translate-y-2" />
                <p className="mb-4 text-foreground/90">
                  “To streamline restaurant operations through intelligent, scalable, and easy-to-use software solutions.”
                </p>
              </blockquote>
              <p className="mt-6 text-lg text-foreground/70">
                We believe technology should be a restaurant owner's strongest ally — not a burden. That’s why we’ve built Petpooja to be intuitive, flexible, and incredibly powerful for every kind of food outlet.
              </p>
            </div>
          </section>

          {/* Section 3: Our Journey */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto text-lg text-foreground/70 space-y-4 text-center">
              <p>
                What began in 2011 as a vision to modernize restaurant technology has today become a robust platform supporting thousands of food businesses — from cafés and food trucks to enterprise QSR chains and cloud kitchens.
              </p>
              <p>
                With constant innovation, unmatched support, and deep industry knowledge, we continue to revolutionize how restaurants operate.
              </p>
            </div>
          </section>

          {/* Section 4: Why Choose Us? */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyChooseUsItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <item.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Meet the Team */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Meet the Team</h2>
            <div className="max-w-3xl mx-auto text-lg text-foreground/70 text-center">
              <p>
                We’re a team of tech enthusiasts, designers, developers, and support champions with one shared mission — helping food businesses thrive with modern technology.
              </p>
              {/* Optional: Display team member profiles with names, photos, and roles. This can be expanded later. */}
            </div>
          </section>

          {/* Section 6: Our Values */}
          <section className="mb-12 md:mb-16 bg-secondary/30 py-12 rounded-lg">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {ourValuesItems.map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Join the Movement */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Join the Movement</h2>
            <div className="max-w-2xl mx-auto text-lg text-foreground/70">
              <p>
                Whether you're a small café or a fast-growing food chain, Petpooja is your partner in success.
                Let’s build the future of food service — together.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#pricing">Get Started Free</Link>
              </Button>
            </div>
          </section>

        </Container>
      </main>
      <ContactFooter />
    </div>
  );
}
