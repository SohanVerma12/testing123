import { Container } from '@/components/landing/Container';
import { FeatureCard } from '@/components/landing/FeatureCard';
import { ReceiptText, ShoppingCart, Boxes, Users, BarChart3, CreditCard } from 'lucide-react';

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
    <Container id="features" className="bg-secondary/30">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Everything Your Restaurant Needs
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Petpooja offers a comprehensive suite of tools to manage and grow your food business efficiently.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Container>
  );
}
