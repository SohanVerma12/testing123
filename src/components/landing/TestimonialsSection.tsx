import { Container } from '@/components/landing/Container';
import { TestimonialCard } from '@/components/landing/TestimonialCard';

const testimonials = [
  {
    quote: "Another Head has revolutionized how we manage our restaurant. The inventory management is a lifesaver!",
    name: 'Riya Sharma',
    business: 'Owner, The Curry House',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'RS',
    avatarHint: 'happy customer restaurant',
  },
  {
    quote: "The online ordering integration is seamless and has boosted our delivery sales significantly. Highly recommend!",
    name: 'Arjun Mehta',
    business: 'Manager, Pizza Central',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'AM',
    avatarHint: 'cafe owner portrait',
  },
  {
    quote: "User-friendly interface and excellent customer support. Another Head is a must-have for any F&B business.",
    name: 'Priya Patel',
    business: 'Founder, Chai Stop Cafe',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'PP',
    avatarHint: 'restaurant manager professional',
  },
];

export function TestimonialsSection() {
  return (
    <Container id="testimonials">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Loved by Restaurants Everywhere
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          Hear what our satisfied clients have to say about Another Head.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Container>
  );
}
