import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Late Night Street Food in Ponsonby Auckland | Māui Street Food',
  description:
    'Visit Māui Street Food for late night street food in Ponsonby, Auckland with rotating trucks, outdoor dining, and DJ nights.',
  keywords: [
    'late night street food Ponsonby',
    'late night food Ponsonby Auckland',
    'food trucks Ponsonby',
    'street food yard Auckland',
    'outdoor dining Ponsonby',
  ],
  openGraph: {
    title: 'Late Night Street Food in Ponsonby Auckland | Māui Street Food',
    description:
      'Visit Māui Street Food for late-night food trucks, outdoor dining, and event nights in Ponsonby, Auckland.',
  },
  twitter: {
    title: 'Late Night Street Food in Ponsonby Auckland | Māui Street Food',
    description:
      'Late-night street food, outdoor dining, and DJ nights in Ponsonby at Māui Street Food.',
  },
  alternates: {
    canonical: 'https://maui-street-food.vercel.app',
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <section className="space-y-6">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-secondary">
          Ponsonby • Auckland • Late nights
        </p>
        <h1 className="font-heading text-6xl uppercase tracking-[0.08em] text-text sm:text-7xl">
          Late Night Street Food in Ponsonby
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-text/80">
          Māui Street Food brings rotating food trucks, outdoor dining, and high-energy event nights together in one loud after-dark yard.
        </p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="font-heading text-4xl uppercase tracking-[0.08em] text-text">What hits different here</h2>
        <p className="text-text/78">
          Come through for smoky grills, stacked flavour, and a social late-night food spot built for Ponsonby crowds.
        </p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="font-heading text-4xl uppercase tracking-[0.08em] text-text">Featured food trucks</h2>
        <p className="text-text/78">
          Meet the resident trucks serving Pacific-inspired street eats, fried favourites, desserts, and bold comfort food.
        </p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="font-heading text-4xl uppercase tracking-[0.08em] text-text">Late-night events and atmosphere</h2>
        <p className="text-text/78">
          Check what is on this week, from DJ nights to collabs that keep the yard moving after dark.
        </p>
      </section>
    </main>
  );
}
