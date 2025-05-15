import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  avatarSrc: string;
  avatarFallback: string;
  avatarHint: string;
}

export function TestimonialCard({ quote, name, business, avatarSrc, avatarFallback, avatarHint }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between p-6 shadow-lg">
      <div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <CardContent className="p-0">
          <blockquote className="text-lg text-foreground/80 italic">"{quote}"</blockquote>
        </CardContent>
      </div>
      <div className="mt-6 flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatarSrc} alt={name} data-ai-hint={avatarHint} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-foreground/70">{business}</p>
        </div>
      </div>
    </Card>
  );
}
