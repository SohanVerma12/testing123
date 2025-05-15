import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  planName: string;
  price: string;
  priceFrequency?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
}

export function PricingCard({
  planName,
  price,
  priceFrequency = '/month',
  description,
  features,
  ctaText,
  ctaLink,
  isPopular = false,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full shadow-lg ${isPopular ? 'border-2 border-primary ring-4 ring-primary/20 relative' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full shadow-md">
          Most Popular
        </div>
      )}
      <CardHeader className="items-center text-center pt-10">
        <CardTitle className="text-2xl font-bold">{planName}</CardTitle>
        <div className="mt-2">
          <span className="text-4xl font-extrabold text-primary">{price}</span>
          <span className="text-lg text-foreground/70">{priceFrequency}</span>
        </div>
        <CardDescription className="mt-2 text-foreground/60">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button size="lg" className="w-full" variant={isPopular ? 'default' : 'outline'} asChild>
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
