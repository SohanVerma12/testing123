import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/landing/Container';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Container id="home" className="pt-24 md:pt-32 lg:pt-40 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        One <span className="text-primary">POS</span> to Manage it All
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
        From billing to inventory, Another Head simplifies every step of running your restaurant.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="#contact">Schedule a Demo</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="#pricing">Get Started Free</Link>
        </Button>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-20 relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
        <Image
          src="https://placehold.co/1200x675.png"
          alt="Another Head Dashboard Illustration"
          layout="fill"
          objectFit="cover"
          data-ai-hint="software dashboard restaurant"
          className="bg-muted"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      </div>
    </Container>
  );
}
