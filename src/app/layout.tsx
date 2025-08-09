
// import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
// import { Toaster } from '@/components/ui/toaster'; // Import Toaster

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export const metadata: Metadata = {
//   title: 'Another Head | Smart Software for Cafes, Restaurants & More',
//   description: 'Affordable software solutions for cafes, restaurants, pharmacies, and payroll. Local setup from ₹199 and cloud from ₹599/month. Run your business smarter.',
//   keywords: ['another head', 'cafe software', 'restaurant pos', 'payroll software', 'pharmacy billing', 'cloud pos india'],
//   authors: [{ name: 'Another Head' }],
//   robots: 'index, follow',
//   openGraph: {
//     title: 'Another Head | Smart Business Software',
//     description: 'Run your business smarter — Cafe, Restaurant, Pharmacy, and Payroll solutions in one place.',
//     url: 'https://www.anotherhead.com/', // To be replaced with actual URL
//     type: 'website',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//         <Toaster />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
  description:
    'Affordable software solutions for cafes, restaurants, pharmacies, and payroll. Local setup from ₹199 and cloud from ₹599/month. Run your business smarter.',
  keywords: [
    'another head',
    'cafe software',
    'restaurant pos',
    'payroll software',
    'pharmacy billing',
    'cloud pos india',
  ],
  authors: [{ name: 'Another Head' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Another Head | Smart Business Software',
    description:
      'Run your business smarter — Cafe, Restaurant, Pharmacy, and Payroll solutions in one place.',
    url: 'https://www.anotherhead.com/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Another Head',
    url: 'https://www.anotherhead.com',
    logo: 'https://www.anotherhead.com/logo.png',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Sohan Verma',
    },
    description:
      'Another Head provides smart software solutions for cafes, restaurants, medical shops, and businesses that need efficient payroll management.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hinjewadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411057',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9340785987',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
	  'https://www.facebook.com/anotherheadofficial',
      'https://www.instagram.com/anotherheadofficial',
      'https://www.linkedin.com/company/anotherhead/',
      'https://x.com/anotherhead_',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.anotherhead.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.anotherhead.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Another Head',
    image: 'https://www.anotherhead.com/logo.png',
    url: 'https://www.anotherhead.com',
    telephone: '+91-9340785987',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hinjewadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411057',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5913', // Replace with your actual coordinates
      longitude: '73.7389', // Replace with your actual coordinates
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/anotherheadofficial',
      'https://www.instagram.com/anotherheadofficial',
      'https://www.linkedin.com/company/anotherhead/',
      'https://x.com/anotherhead_',
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Website Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
