import Image from 'next/image';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export function DemoVideoSection() {
  return (
    <Container id="demo" className="bg-secondary/30">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          See Petpooja in Action
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Watch a quick tour of our powerful restaurant management software and discover how it can transform your business.
        </p>
      </div>
      <div className="relative aspect-video max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden group">
        <Image
          src="https://placehold.co/1280x720.png"
          alt="Petpooja Product Demo Video Thumbnail"
          layout="fill"
          objectFit="cover"
          data-ai-hint="software demo video"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-20 w-20 text-white hover:bg-primary/80 hover:text-white transition-all duration-300 transform group-hover:scale-110"
            aria-label="Play Demo Video"
          >
            <PlayCircle className="h-16 w-16" />
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button size="lg" asChild>
          <a href="#contact">Request a Personalized Demo</a>
        </Button>
      </div>
    </Container>
  );
}
