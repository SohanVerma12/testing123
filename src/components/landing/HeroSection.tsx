import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/landing/Container';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <Container id="home" className="pt-24 md:pt-32 lg:pt-40 text-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        One <span className="text-primary">POS</span> to Manage it All
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
        From billing to inventory, Another Head simplifies every step of running your restaurant.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="px-8 py-3 text-lg font-semibold group" asChild>
          <Link href="#contact">
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold" asChild>
          <Link href="#pricing">Get Started Free</Link>
        </Button>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-20 relative aspect-[16/9] w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-border/20">
        <Image
          src="https://placehold.co/1200x675.png"
          alt="Another Head Dashboard Illustration"
          layout="fill"
          objectFit="cover"
          data-ai-hint="software dashboard restaurant"
          className="bg-muted"
        />
      </div>
    </Container>
  );
}
