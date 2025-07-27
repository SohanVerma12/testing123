import { Container } from '@/components/landing/Container';
import { FeatureCard } from '@/components/landing/FeatureCard';
import { ReceiptText, ShoppingCart, Boxes, Users, BarChart3, CreditCard } from 'lucide-react';
import { Card } from '../ui/card';

const features = [
  {
    icon: ReceiptText,
    title: 'Billing & Invoicing',
    description: 'Streamline your billing process with our fast and intuitive POS system. Generate GST-compliant invoices effortlessly.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Ordering Integration',
    description: 'Manage orders from Zomato, Swiggy, and your own website, all in one place. Expand your reach seamlessly.',
  },
  {
    icon: Boxes,
    title: 'Inventory Management',
    description: 'Track stock levels in real-time, manage recipes, and reduce wastage with our powerful inventory tools.',
  },
  {
    icon: Users,
    title: 'CRM & Loyalty',
    description: 'Build customer relationships, run loyalty programs, and send targeted promotions to keep them coming back.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Get actionable insights into your sales, popular items, and business performance with comprehensive reports.',
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Accept all types of payments, including cards, UPI, and mobile wallets, with integrated payment gateways.',
  },
];

export function KeyFeaturesSection() {
  return (
    <Container id="features">
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold leading-7 text-primary">Everything You Need</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">A Fully-Featured Platform</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Another Head offers a comprehensive suite of tools to manage and grow your food business efficiently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-card border rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg">
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
    </Container>
  );
}
