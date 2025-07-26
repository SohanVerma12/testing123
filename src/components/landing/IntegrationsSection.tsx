import Image from 'next/image';
import { Container } from '@/components/landing/Container';

const integrations = [
  { name: 'Zomato', logoUrl: 'https://placehold.co/150x60.png', hint: 'food delivery logo' },
  { name: 'Swiggy', logoUrl: 'https://placehold.co/150x60.png', hint: 'food delivery logo' },
  { name: 'Razorpay', logoUrl: 'https://placehold.co/150x60.png', hint: 'payment gateway logo' },
  { name: 'Paytm', logoUrl: 'https://placehold.co/150x60.png', hint: 'payment gateway logo' },
  { name: 'Tally', logoUrl: 'https://placehold.co/150x60.png', hint: 'accounting software logo' },
  { name: 'Google My Business', logoUrl: 'https://placehold.co/150x60.png', hint: 'business listing logo' },
];

export function IntegrationsSection() {
  return (
    <Container id="integrations" className="bg-secondary/30">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Seamless Integrations
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Connect Another Head with your favorite tools to streamline operations and enhance customer experience.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex justify-center" title={integration.name}>
            <Image
              src={integration.logoUrl}
              alt={`${integration.name} logo`}
              width={150}
              height={60}
              objectFit="contain"
              data-ai-hint={integration.hint}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
