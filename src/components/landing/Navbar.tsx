
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
    { href: '/home4', label: 'Home' },
    {
      href: '#',
      label: 'Products',
      subItems: [
        { href: '/restaurants', label: 'Restaurants' },
        { href: '/cafes', label: 'Cafes' },
        { href: '/medical-shops', label: 'Medical Shops' },
        { href: '/payroll', label: 'Payroll' },
      ],
    },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <AHLogo />
          <span className="text-xl font-bold text-foreground">Another Head</span>
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
           <Link
              href="/home4"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild><Link href="/restaurants">Restaurants</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/cafes">Cafes</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/medical-shops">Medical Shops</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/payroll">Payroll</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
             <Link
              href="/about-us"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
             <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
             <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="/#contact">Schedule a Demo</Link>
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <AHLogo />
                <span className="text-xl font-bold text-foreground">Another Head</span>
              </Link>
              {navItems.map((item) => {
                if (item.subItems) {
                  return (
                    <div key={item.label}>
                      <p className="text-lg font-medium text-muted-foreground">{item.label}</p>
                      <div className="grid gap-2 pl-4 mt-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild>
                  <Link href="/#contact">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
