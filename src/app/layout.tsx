
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Another Head | Smart Software for Cafes, Restaurants & More',
  description: 'Affordable software solutions for cafes, restaurants, pharmacies, and payroll. Local setup from ₹199 and cloud from ₹599/month. Run your business smarter.',
  keywords: ['another head', 'cafe software', 'restaurant pos', 'payroll software', 'pharmacy billing', 'cloud pos india'],
  authors: [{ name: 'Another Head' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Another Head | Smart Business Software',
    description: 'Run your business smarter — Cafe, Restaurant, Pharmacy, and Payroll solutions in one place.',
    url: 'https://www.anotherhead.in/', // To be replaced with actual URL
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
