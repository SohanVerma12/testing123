
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, PlugZap, BarChart3, Heart, Cloud, Rocket, Users, ShieldCheck, Award, Quote, Briefcase, Brain, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Another Head | Our Mission and Story',
  description: 'Learn about Another Head, our mission to empower businesses with smart, intuitive technology, and the values that drive us. Discover our journey and meet the team.',
  keywords: ['about another head', 'restaurant technology company', 'pos software mission', 'our story'],
};


export default function AboutUsPage() {
  const whyChooseUsItems = [
    { icon: Lightbulb, title: 'Simple & Scalable POS', description: 'Easy to set up, easier to use for seamless operations.' },
    { icon: PlugZap, title: 'Powerful Integrations', description: 'Connect with Zomato, Swiggy, Razorpay, Tally & more.' },
    { icon: BarChart3, title: 'Real-Time Analytics', description: 'Know your business inside out with actionable insights.' },
    { icon: Heart, title: 'Reliable Support', description: '24/7 customer assistance to help you anytime.' },
    { icon: Cloud, title: 'Cloud-Based Platform', description: 'Access your business data anywhere, anytime securely.' },
    { icon: Briefcase, title: 'Industry Expertise', description: 'Solutions built with deep understanding of restaurant needs.'}
  ];

  const ourValuesItems = [
    { icon: Rocket, title: 'Innovation First', description: 'We solve problems with smart, practical, and cutting-edge technology.' },
    { icon: Users, title: 'Customer-Centricity', description: 'Our users success is our top priority, guiding all our decisions.' },
    { icon: ShieldCheck, title: 'Trust & Transparency', description: 'We build relationships on integrity, honesty, and open communication.' },
    { icon: Award, title: 'Excellence in Execution', description: 'We are committed to delivering the highest quality in all we do.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
              About <span className="text-primary">Another Head</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto">
              Empowering Restaurants with Smart, Intuitive Technology
            </p>
          </Container>
        </section>

        {/* Section 1: Who We Are */}
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Who We Are</h2>
            <div className="text-lg text-foreground/75 space-y-6">
              <p>
                Another Head is India’s leading Restaurant Management Platform, trusted by over <strong className="text-primary">50,000+ restaurants</strong> across 150+ cities. We are a dynamic team of innovators, thinkers, and problem-solvers passionate about simplifying the complexities of restaurant operations.
              </p>
              <p>
                Our comprehensive, all-in-one POS system—from billing and inventory to customer engagement and advanced analytics—is meticulously designed to empower food businesses of all sizes to scale, succeed, and delight their customers.
              </p>
            </div>
          </div>
        </Container>

        {/* Section 2: Our Mission */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Mission</h2>
              <div className="relative p-8 bg-background/70 rounded-xl shadow-xl border border-primary/30">
                <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/40 opacity-50 transform -translate-x-2 -translate-y-2" />
                <p className="text-2xl italic font-medium text-foreground/90 leading-relaxed">
                  “To streamline restaurant operations through intelligent, scalable, and easy-to-use software solutions.”
                </p>
              </div>
              <p className="mt-8 text-lg text-foreground/75">
                We believe technology should be a restaurant owner's strongest ally—not a burden. That’s why we’ve built Another Head to be intuitive, flexible, and incredibly powerful, adapting to the unique needs of every kind of food outlet, from quaint cafes to sprawling chains.
              </p>
            </div>
          </Container>
        </section>

        {/* Section 3: Our Journey */}
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Journey</h2>
            <div className="text-lg text-foreground/75 space-y-6">
              <p>
                What began in <strong className="text-primary">2011</strong> as a bold vision to modernize restaurant technology has evolved into a robust, industry-leading platform. Today, Another Head supports thousands of diverse food businesses — from cozy cafés and innovative food trucks to large-scale enterprise QSR chains and dynamic cloud kitchens.
              </p>
              <p>
                Driven by relentless innovation, unwavering customer support, and deep-seated industry knowledge, we continue to revolutionize how restaurants operate and thrive in a competitive landscape.
              </p>
            </div>
          </div>
        </Container>

        {/* Section 4: Why Choose Us? */}
        <section className="bg-primary/5 py-16 md:py-24">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Why Choose Another Head?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                Discover the Another Head advantage for your restaurant.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsItems.map((item) => (
                <Card key={item.title} className="text-center bg-card hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <CardHeader className="items-center p-6">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                      <item.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-foreground/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Section 5: Meet the Team */}
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Meet the Team</h2>
            <div className="text-lg text-foreground/75 space-y-4">
              <p>
                We’re a vibrant collective of tech enthusiasts, creative designers, skilled developers, and dedicated support champions. Our shared mission: to empower food businesses with transformative modern technology.
              </p>
              <p className="text-foreground/60 text-sm">
                (More details about our amazing team coming soon!)
              </p>
            </div>
          </div>
        </Container>

        {/* Section 6: Our Values */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">Our Core Values</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                The principles that drive our work and define our culture.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourValuesItems.map((value) => (
                <Card key={value.title} className="text-center bg-card hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <CardHeader className="items-center p-6">
                     <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                        <value.icon className="h-10 w-10 text-primary" />
                     </div>
                    <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-foreground/70">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 7: Join the Movement */}
        <section className="py-20 md:py-28 bg-gradient-to-t from-primary/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Join the Another Head Movement
            </h2>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Whether you're launching a new café or scaling a multi-city food chain, Another Head is your dedicated partner in success. Let’s innovate the future of food service — together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#pricing">Explore Pricing</Link>
              </Button>
            </div>
          </Container>
        </section>

      </main>
      <ContactFooter />
    </div>
  );
}
