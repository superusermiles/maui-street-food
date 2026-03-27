import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Māui Street Food | Late Night Street Food in Ponsonby',
  description:
    'Find Māui Street Food in Ponsonby, Auckland. Get opening hours, location details, and booking or vendor enquiry information.',
  alternates: {
    canonical: 'https://maui-street-food.vercel.app/find-us/',
  },
};

export default function FindUsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <section className="space-y-6">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-secondary">Find us</p>
        <h1 className="font-heading text-6xl uppercase tracking-[0.08em] text-text sm:text-7xl">
          Find Late Night Street Food in Ponsonby
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-text/80">
          Pull up to Māui Street Food at 45 Ponsonby Road for food trucks, outdoor dining, and late-night events in Auckland.
        </p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="font-heading text-4xl uppercase tracking-[0.08em] text-text">Hours and location</h2>
        <p className="text-text/78">Wed–Thu 5pm–11pm, Fri–Sat 5pm–1am, and Sun 4pm–10pm in central Ponsonby.</p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="font-heading text-4xl uppercase tracking-[0.08em] text-text">Bookings and vendor enquiries</h2>
        <p className="text-text/78">
          Contact the team for event bookings, collaborations, and truck applications.
        </p>
      </section>
    </main>
  );
}
