"use client";

import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import logo from './logo.png';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/home2", label: "Home" },
    { href: "/restaurants", label: "Restaurants" },
    { href: "/cafes", label: "Cafes" },
    { href: "/medical-shops", label: "Medical Shops" },
    { href: "/payroll", label: "Payroll" },
    // { href: '/pricing', label: 'Pricing' },
    // { href: '/about-us', label: 'About Us' },
    // { href: '/blog', label: 'Blog' },
    // { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* <AHLogo /> */}
          <Image
            src='/logo.png'
            alt="HR manager reviewing payroll on a laptop"
            width={130}
            height={130}
          />
         <span className="text-3xl font-extrabold text-primary tracking-wide">
  Another Head
</span>

        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105 transform duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="/#contact">Schedule a Demo</Link>
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <div className="mb-4">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <AHLogo />
                  <span className="text-xl font-bold text-foreground">
                    Another Head
                  </span>
                </Link>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild>
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Schedule a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
