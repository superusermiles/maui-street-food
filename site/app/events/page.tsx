import type { Metadata } from 'next';
import Link from 'next/link';

const eventCards = [
  {
    date: '04 APR',
    time: '8PM–LATE',
    title: 'Friday Bassline Sessions',
    body: 'Local selectors, smoky grills, and a packed yard that moves till close.',
    tags: ['DJ night', 'Late close', 'Free entry'],
    cta: 'Pull up Friday',
  },
  {
    date: '11 APR',
    time: '7PM–LATE',
    title: 'Island Link-Up',
    body: 'Guest cooks, limited-run dishes, and a night built around Pasifika flavour and pride.',
    tags: ['Guest truck', 'One-night menu', 'Community'],
    cta: 'See the night',
  },
  {
    date: '20 APR',
    time: '5PM–10PM',
    title: 'Sunday Wind Down',
    body: 'Softer soundtrack, family-friendly hours, and big feeds before the week resets.',
    tags: ['Sunday session', 'Outdoor dining', 'Open air'],
    cta: 'Plan Sunday',
  },
];

export const metadata: Metadata = {
  title: 'Street Food Events in Ponsonby Auckland | Māui Street Food',
  description:
    'See DJ nights, collabs, and late-night street food events in Ponsonby, Auckland at Māui Street Food.',
  keywords: [
    'Ponsonby events venue',
    'street food events Auckland',
    'DJ nights Ponsonby',
    'late night events Auckland',
    'Ponsonby food events',
  ],
  openGraph: {
    title: 'Street Food Events in Ponsonby Auckland | Māui Street Food',
    description:
      'Check upcoming DJ nights, collabs, and after-dark street food events in Ponsonby at Māui Street Food.',
  },
  twitter: {
    title: 'Street Food Events in Ponsonby Auckland | Māui Street Food',
    description:
      'DJ sets, collabs, and bold late-night event nights at Māui Street Food in Ponsonby.',
  },
  alternates: {
    canonical: 'https://maui-street-food.vercel.app/events/',
  },
};

export default function EventsPage() {
  return (
    <main>
      <section className="section-shell pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#141414] shadow-[var(--shadow-hard)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&h=1000&fit=crop"
              alt="Late-night crowd at a Ponsonby Auckland street food event"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.9)_0%,rgba(17,17,17,0.74)_45%,rgba(17,17,17,0.9)_100%)]" />
            <div className="relative px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
              <div className="max-w-4xl space-y-6">
                <p className="mono-label text-secondary">After-dark programme</p>
                <div className="h-1 w-24 rounded-full bg-electric shadow-[var(--glow-aqua)]" />
                <h1 className="display-title max-w-[11ch] text-balance text-text">
                  Street food events in Ponsonby after dark.
                </h1>
                <p className="max-w-[60ch] text-base leading-8 text-text/82 sm:text-lg">
                  The food pulls people in. The line-up keeps them around. Māui events are built
                  for nights that feel alive from first order to last track.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {eventCards.map((event) => (
                  <article
                    key={event.title}
                    className="rounded-[28px] border border-white/10 bg-black/55 p-5 backdrop-blur"
                  >
                    <p className="font-mono text-sm uppercase tracking-[0.22em] text-secondary">
                      {event.date}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-electric">
                      {event.time}
                    </p>
                    <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] text-text">
                      {event.title}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-text/76">{event.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="mb-10 space-y-4">
          <p className="mono-label text-secondary">Upcoming nights</p>
          <h2 className="section-title text-text">Three reasons to pull up.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {eventCards.map((event) => (
            <article
              key={event.title}
              className="rounded-[30px] border border-white/10 bg-[#181818] p-6 shadow-[var(--shadow-hard)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-lg uppercase tracking-[0.2em] text-secondary">
                    {event.date}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-electric">
                    {event.time}
                  </p>
                </div>
                <span className="rounded-full border border-accent/35 bg-accent/12 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  On deck
                </span>
              </div>
              <h3 className="mt-5 text-4xl font-heading uppercase tracking-[0.08em] text-text">
                {event.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-text/76">{event.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/find-us/"
                className="mt-6 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-secondary hover:text-electric"
              >
                {event.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[var(--shadow-hard)]">
            <img
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=1000&fit=crop"
              alt="Crowd with raised hands during a Ponsonby Auckland live night"
              className="h-[420px] w-full object-cover lg:h-[540px]"
            />
          </div>
          <div className="space-y-5">
            <p className="mono-label text-secondary">Featured spotlight</p>
            <h2 className="section-title max-w-[10ch] text-balance text-text">
              Featured night: Island Link-Up
            </h2>
            <p className="max-w-[56ch] text-base leading-8 text-text/78 sm:text-lg">
              A rotating line-up of guest cooks and resident trucks sharing the yard for one loud,
              flavour-first celebration. Expect limited dishes, sharper heat, and a crowd that
              knows exactly why they came.
            </p>
            <ul className="grid gap-4">
              {['Limited collab menu from 7pm', 'Guest DJs through late service', 'First come, first served seating'].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-base text-text/80"
                  >
                    <span className="mono-label mr-3 text-electric">Hit</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-[var(--shadow-hard)]">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&h=900&fit=crop"
              alt="Friends dancing at a Māui Street Food event in Ponsonby"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-[var(--shadow-hard)]">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=900&fit=crop"
                alt="Crowd under red and purple lights at an Auckland night event"
                className="h-[220px] w-full object-cover lg:h-[248px]"
              />
            </div>
            <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-[var(--shadow-hard)]">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=900&fit=crop"
                alt="Stage performance and haze during a late-night Ponsonby event"
                className="h-[220px] w-full object-cover lg:h-[248px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[32px] border border-primary/35 bg-[#171717] px-6 py-10 shadow-[var(--glow-orange)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="space-y-4">
            <p className="mono-label text-secondary">Private hire</p>
            <h2 className="section-title text-text">Book the yard.</h2>
            <p className="max-w-[58ch] text-base leading-8 text-text/78">
              Private parties, brand activations, crew nights, and food-led launches all hit harder
              outdoors.
            </p>
          </div>
          <Link
            href="/find-us/#enquiry-form"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background hover:bg-accent hover:text-text lg:mt-0"
          >
            Ask about private hire
          </Link>
        </div>
      </section>
    </main>
  );
}
