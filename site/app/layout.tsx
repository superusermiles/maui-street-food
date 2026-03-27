import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://maui-street-food.vercel.app'),
  title: 'Māui Street Food | Feed the night in Ponsonby',
  description:
    'Late-night street food trucks, outdoor dining, and high-energy event nights in Ponsonby, Auckland. Feed the night at Māui Street Food.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
