import type { Metadata } from 'next';
import { Bebas_Neue, IBM_Plex_Mono, Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: '500',
});

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Trucks', href: '/the-trucks/' },
  { label: 'Events', href: '/events/' },
  { label: 'Find Us', href: '/find-us/' },
];

const siteUrl = 'https://maui-street-food.vercel.app';
const businessName = 'Māui Street Food';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': `${siteUrl}/#foodestablishment`,
  name: businessName,
  description:
    'Late-night street food collective in Ponsonby, Auckland with rotating food trucks, outdoor dining, and high-energy event nights.',
  url: siteUrl,
  image: [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=1100&fit=crop',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&h=900&fit=crop',
  ],
  telephone: '+64 9-555-0188',
  email: 'hello@mauistreetfood.co.nz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '45 Ponsonby Road',
    addressLocality: 'Ponsonby',
    addressRegion: 'Auckland',
    postalCode: '1011',
    addressCountry: 'NZ',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday'],
      opens: '17:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '17:00',
      closes: '01:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '16:00',
      closes: '22:00',
    },
  ],
  areaServed: ['Ponsonby', 'Auckland Central', 'Grey Lynn', 'Herne Bay', 'Auckland'],
  servesCuisine: ['Street Food', 'Pacific Fusion', 'Grill', 'Dessert'],
  priceRange: '$$',
  sameAs: [siteUrl],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Late Night Street Food in Ponsonby Auckland | Māui Street Food',
  description:
    'Late night street food in Ponsonby, Auckland with rotating food trucks, outdoor dining, DJ nights, and bold flavours at Māui Street Food.',
  keywords: [
    'late night street food Ponsonby',
    'street food Auckland',
    'food trucks Ponsonby',
    'late night food Auckland',
    'Ponsonby food trucks',
    'outdoor dining Ponsonby',
    'Ponsonby events venue',
    'Auckland street food collective',
    'late night eats Ponsonby',
    'Māui Street Food',
  ],
  openGraph: {
    title: 'Late Night Street Food in Ponsonby Auckland | Māui Street Food',
    description:
      'Discover late-night street food, rotating trucks, outdoor dining, and event nights in Ponsonby at Māui Street Food.',
    url: siteUrl,
    siteName: businessName,
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Late Night Street Food in Ponsonby Auckland | Māui Street Food',
    description:
      'Late-night food trucks, bold street eats, and live event nights in Ponsonby, Auckland.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className="bg-background">
      <body
        className={`${bebasNeue.variable} ${manrope.variable} ${ibmPlexMono.variable} bg-background font-body text-text antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(214,28,78,0.2),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,90,31,0.16),transparent_25%)]" />
          <SiteHeader links={navLinks} />
          {children}
          <SiteFooter links={navLinks} />
        </div>
      </body>
    </html>
  );
}
