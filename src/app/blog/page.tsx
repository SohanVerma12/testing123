
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter'; // Or a custom blog footer if needed
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Pin, Newspaper, BookOpen, TrendingUp, Mail, Brain, Phone, MessageSquare, CheckCircle2, Edit3, BarChartBig, Users, ShoppingBasket, Wifi, Building 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const featuredArticles = [
  {
    title: '7 POS Features Every Restaurant Needs in 2025',
    summary: 'Discover the must-have POS features for modern food businesses. From cloud sync to CRM integrations — is your POS future-ready?',
    link: '#', // Placeholder link
  },
  {
    title: 'How to Increase Repeat Orders with Loyalty Programs',
    summary: 'Learn how cafés and QSRs are boosting revenue by 25% using smart loyalty features. Tips included!',
    link: '#',
  },
  {
    title: 'Inventory Management Mistakes You Should Avoid',
    summary: 'Running out of key ingredients? Learn how to streamline inventory, reduce waste, and automate alerts.',
    link: '#',
  },
  {
    title: 'The Future of Cloud Kitchens in India',
    summary: 'Dive into the rising trend of virtual kitchens. Who’s winning? What are the risks? Find out here.',
    link: '#',
  },
  {
    title: 'Swiggy & Zomato Integration: What Restaurants Must Know',
    summary: 'Tips to optimize delivery orders and track commissions seamlessly through your POS.',
    link: '#',
  },
];

const categories = [
  { name: 'POS Tips & Tools', icon: Edit3, link: '#' },
  { name: 'Restaurant Growth Hacks', icon: BarChartBig, link: '#' },
  { name: 'Operations & Staff Management', icon: Users, link: '#' },
  { name: 'Customer Engagement', icon: MessageSquare, link: '#' },
  { name: 'Delivery & Aggregators', icon: ShoppingBasket, link: '#' },
  { name: 'Franchise Scaling', icon: Building, link: '#' },
];

const trendingTopics = [
  'Best CRM tools for small cafés',
  'Cost breakdown: Cloud Kitchen vs Dine-in',
  'Billing software checklist for 2025',
  'How Petpooja clients save ₹20K/month in ops cost',
  '5 Marketing Tricks to Double Walk-ins',
];

const whyFollowItems = [
  { title: 'Actionable Content', description: 'Practical advice for restaurateurs by restaurateurs.' },
  { title: 'Expert Authors', description: 'Written by F&B industry veterans and tech experts.' },
  { title: 'Data-Backed Strategies', description: 'Real stories and proven strategies to guide your decisions.' },
  { title: 'Fresh & Regular', description: 'Weekly updates – always fresh, never spammy.' },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <Container className="text-center">
            <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Industry Insights, Trends & Tips for Modern Restaurants
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto sm:text-xl">
              From technology and marketing to operations and hiring — explore expert-backed articles to grow and future-proof your food business.
            </p>
          </Container>
        </section>

        {/* Featured Articles Section */}
        <Container id="featured-articles" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12">
            📰 Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center text-primary mb-2">
                    <Pin className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Featured</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/75">{article.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-primary hover:underline">
                    <Link href={article.link}>Read More →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>

        {/* Categories & Trending Topics Section */}
        <section className="bg-secondary/40 py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                  <BookOpen className="h-7 w-7 mr-3 text-primary" /> Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <Link key={category.name} href={category.link} className="group">
                      <Card className="p-4 hover:bg-primary/5 transition-colors duration-200">
                        <div className="flex items-center">
                          <category.icon className="h-6 w-6 mr-3 text-primary/80 group-hover:text-primary" />
                          <span className="font-medium text-foreground/80 group-hover:text-foreground">{category.name}</span>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                  <TrendingUp className="h-7 w-7 mr-3 text-primary" /> Trending Topics
                </h2>
                <ul className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                      <span className="text-foreground/75 hover:text-primary transition-colors"><Link href="#">{topic}</Link></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Subscribe Section */}
        <Container id="subscribe" className="py-16 md:py-20">
          <Card className="max-w-2xl mx-auto p-6 sm:p-8 shadow-xl bg-primary/5 border-primary/20">
            <div className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Subscribe to the Blog</h2>
              <p className="text-foreground/75 mb-6">
                Stay ahead of your competition. Join 15,000+ foodpreneurs who receive monthly insights, playbooks & product tips from Petpooja.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your email" className="flex-grow text-base" aria-label="Email for subscription"/>
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
              </form>
            </div>
          </Card>
        </Container>

        {/* Why Follow Petpooja Blog Section */}
        <section className="bg-secondary/40 py-16 md:py-20">
          <Container>
            <div className="text-center mb-12">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Follow Petpooja Blog?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyFollowItems.map((item) => (
                <Card key={item.title} className="text-center p-6 bg-card shadow-lg">
                  <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                  <p className="text-foreground/70">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Need Help Section */}
        <Container id="blog-contact" className="py-16 md:py-20 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Need Help?</h2>
          <p className="text-lg text-foreground/75 mb-8 max-w-xl mx-auto">
            Want us to write about a topic? Or need advice for your restaurant?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5">
              <Link href="/#contact"><Mail className="mr-2 h-5 w-5" /> Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5">
              <Link href="tel:1800000XXXX"><Phone className="mr-2 h-5 w-5" /> 1800-XXX-XXXX</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5">
              <Link href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Chat
              </Link>
            </Button>
          </div>
        </Container>

        {/* Footer CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-t from-primary/10 to-background">
          <Container className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Discover how Petpooja can transform your business
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-lg text-green-600 mb-10">
              <span className="flex items-center"><CheckCircle2 className="h-6 w-6 mr-2"/>One POS for billing, orders & analytics</span>
              <span className="flex items-center"><CheckCircle2 className="h-6 w-6 mr-2"/>Trusted by 55,000+ food outlets</span>
              <span className="flex items-center"><CheckCircle2 className="h-6 w-6 mr-2"/>Free demo. No card required.</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg font-semibold">
                <Link href="/">Visit the Homepage</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <ContactFooter /> {/* Using the existing contact footer, or create a simpler one for blog if needed */}
    </div>
  );
}
