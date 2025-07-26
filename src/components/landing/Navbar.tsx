
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const AHLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary"
  >
    <path
      d="M4 18.5V5.5H8.5L12 12L15.5 5.5H20V18.5H16V10L12 17L8 10V18.5H4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);


export function Navbar() {
  const navItems = [
    { href: '/home2', label: 'Home2' },
    { href: '/#features', label: 'Features' },
    { href: '/industries', label: 'Industries' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/services', label: 'Services' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <AHLogo />
          <span className="text-xl font-bold">Another Head</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10" asChild>
            <Link href="/#contact">Schedule a Demo</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent border-gray-700 hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 border-l-gray-800">
            <div className="grid gap-4 p-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <AHLogo />
              <span className="text-xl font-bold">Another Head</span>
            </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4" asChild>
                <Link href="/#contact">Schedule a Demo</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

    