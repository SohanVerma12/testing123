import { Container } from '@/components/landing/Container';
import { TestimonialCard } from '@/components/landing/TestimonialCard';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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
    <Container id="testimonials" className="bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Loved by Restaurants Everywhere</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Hear what our satisfied clients have to say about Another Head.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
           <Card key={testimonial.name} className="flex flex-col justify-between p-6 bg-card shadow-md rounded-xl">
            <CardContent className="p-0">
              <blockquote className="text-lg text-foreground italic">"{testimonial.quote}"</blockquote>
            </CardContent>
            <div className="mt-6 flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
