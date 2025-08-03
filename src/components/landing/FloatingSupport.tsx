
'use client';

import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function FloatingSupport() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full shadow-lg h-16 w-16 p-0"
        asChild
      >
        <Link 
          href="https://wa.me/919340785987" // Replace with your WhatsApp number
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-8 w-8" />
        </Link>
      </Button>
    </div>
  );
}
