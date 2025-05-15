import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
}

export function IndustryCard({ icon: Icon, name }: IndustryCardProps) {
  return (
    <Card className="group p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square">
      <Icon className="h-12 w-12 mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
      <h3 className="text-lg font-medium text-foreground">{name}</h3>
    </Card>
  );
}
