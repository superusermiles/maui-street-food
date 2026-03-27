import type { Metadata } from 'next';
import Link from 'next/link';

const featuredTrucks = [
  {
    name: 'Huli Smoke',
    meta: 'Pacific barbecue / smoked meats',
    body: 'Flame-charred cuts, sticky glaze, and trays built to share.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&h=900&fit=crop',
    alt: 'Charred grilled meat with smoke rising',
  },
  {
    name: 'Midnight Fry',
    meta: 'Loaded fry-ups / burgers',
    body: 'Crispy, salty, over-the-top comfort food for the second half of the night.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&h=900&fit=crop',
    alt: 'Loaded burger held in both hands',
  },
  {
    name: 'Lava Soft Serve',
    meta: 'Desserts / cold finishes',
    body: 'Swirled soft serve with loud toppings, sharp sauces, and zero restraint.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&h=900&fit=crop',
    alt: 'Fresh hot pizza with bubbling cheese',
  },
] as const;

const features = [
  {
    title: 'Rotating trucks',
    body: 'A tight line-up of resident favourites with guest appearances that keep the yard fresh.',
  },
  {
    title: 'Outdoor all-night feel',
    body: 'Shared tables, neon glow, smoke in the air, and enough space to linger with your people.',
  },
  {
    title: 'More than dinner',
    body: 'DJs, collabs, and one-off nights give you a reason to come back next week.',
  },
] as const;

const events = [
  'Friday Bassline Sessions — DJs, fire grills, late-close energy',
  'Island Link-Up — guest cooks and Pasifika-led food collabs',
  'Sunday Wind Down — easier tempo, big feeds, golden-hour finish',
] as const;

export const metadata: Metadata = {
  title: 'Māui Street Food | Feed the night in Ponsonby',
  description:
    'Late-night street food trucks, outdoor dining, and high-energy event nights in Ponsonby, Auckland. Feed the night at Māui Street Food.',
  keywords: [
    'late night street food Ponsonby',
    'late night food Ponsonby Auckland',
    'food trucks Ponsonby',
    'street food yard Auckland',
    'outdoor dining Ponsonby',
  ],
  openGraph: {
    title: 'Māui Street Food | Feed the night in Ponsonby',
    description:
      'Late-night street food trucks, outdoor dining, and high-energy event nights in Ponsonby, Auckland. Feed the night at Māui Street Food.',
  },
  twitter: {
    title: 'Māui Street Food | Feed the night in Ponsonby',
    description:
      'Late-night street food trucks, outdoor dining, and high-energy event nights in Ponsonby, Auckland.',
  },
  alternates: {
    canonical: 'https://maui-street-food.vercel.app',
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="section-shell pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[var(--shadow-hard)]">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=1100&fit=crop"
            alt="Close-up late-night feast on a crowded table under warm lighting"
            className="h-[720px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.92)_0%,rgba(17,17,17,0.7)_44%,rgba(17,17,17,0.45)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(214,28,78,0.22),transparent_24%),radial-gradient(circle_at_75%_74%,rgba(53,242,208,0.14),transparent_20%)]" />
          <div className="relative grid min-h-[720px] gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.65fr)] lg:px-12 lg:py-12">
            <div className="flex flex-col justify-between gap-10">
              <div className="max-w-[46rem] space-y-6 pt-6 sm:pt-10 lg:pt-14">
                <p className="mono-label text-secondary">Ponsonby late nights</p>
                <h1 className="display-title max-w-[8ch] text-balance text-text">Feed the night.</h1>
                <p className="max-w-[34rem] text-base leading-8 text-text/82 sm:text-lg">
                  Auckland after dark hits different here. Māui Street Food brings the trucks,
                  the smoke, the music, and the outdoor tables together in one loud little
                  corner of Ponsonby.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/the-trucks/"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background shadow-[var(--glow-orange)] hover:bg-accent hover:text-text"
                  >
                    See the trucks
                  </Link>
                  <Link
                    href="/find-us/"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-black/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-text hover:border-secondary hover:text-secondary"
                  >
                    Find us
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pb-2">
                {['Late nights', 'Outdoor dining', 'Rotating trucks', 'Auckland, NZ'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-black/35 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-text/84 backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end gap-4 lg:items-end">
              <div className="grid gap-3 sm:max-w-[20rem] lg:max-w-[18rem]">
                {['Late nights', 'Ponsonby', 'Street food collective'].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-black/45 px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] text-secondary shadow-[var(--shadow-soft)] backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-4 rounded-[28px] border border-white/10 bg-[#151515]/90 p-4 shadow-[var(--shadow-hard)] backdrop-blur-md sm:max-w-[24rem] sm:grid-cols-[132px_minmax(0,1fr)] sm:p-5">
                <img
                  src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=900&h=1100&fit=crop"
                  alt="Street food plated in warm light with bold garnish"
                  className="h-48 w-full rounded-[22px] object-cover sm:h-full"
                />
                <div className="space-y-3 self-center">
                  <p className="mono-label text-electric">This week</p>
                  <h2 className="text-3xl font-heading uppercase tracking-[0.08em] text-text">
                    Open late.
                  </h2>
                  <ul className="space-y-2 font-mono text-xs uppercase tracking-[0.18em] text-text/80">
                    <li>Wed–Thu 5–11</li>
                    <li>Fri–Sat 5–1</li>
                    <li>Sun 4–10</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)] lg:items-start">
          <div className="space-y-6">
            <p className="mono-label text-secondary">Why Māui</p>
            <h2 className="section-title max-w-[11ch] text-text">
              Street food with heat, sound, and swagger.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-text/78 sm:text-lg">
              This is not a quiet sit-down dinner. Māui is built for groups, big flavours, and
              nights that keep rolling. Come hungry. Stay longer than planned.
            </p>
            <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[var(--shadow-hard)]">
              <img
                src="https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=900&h=1200&fit=crop"
                alt="People eating together outdoors at night"
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-[30px] border border-white/10 bg-[#181818] p-6 shadow-[var(--shadow-hard)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl font-heading uppercase tracking-[0.08em] text-text">
                    {feature.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-electric">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 max-w-[44ch] text-base leading-8 text-text/76">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="mono-label text-secondary">Featured trucks</p>
            <h2 className="section-title text-text">What’s firing tonight</h2>
          </div>
          <p className="max-w-[38rem] text-base leading-8 text-text/76 sm:text-lg">
            Resident favourites bring smoke, crunch, and sweet finishes to the yard every week.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredTrucks.map((truck) => (
            <article
              key={truck.name}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#171717] shadow-[var(--shadow-hard)]"
            >
              <div className="overflow-hidden">
                <img
                  src={truck.image}
                  alt={truck.alt}
                  className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <p className="mono-label text-secondary">{truck.meta}</p>
                  <h3 className="text-4xl font-heading uppercase tracking-[0.08em] text-text">
                    {truck.name}
                  </h3>
                </div>
                <p className="text-base leading-8 text-text/76">{truck.body}</p>
                <Link
                  href="/the-trucks/"
                  className="inline-flex rounded-full border border-electric/35 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-electric hover:border-secondary hover:text-secondary"
                >
                  Meet the trucks
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="relative overflow-hidden border-y border-white/10 shadow-[var(--shadow-hard)]">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&h=900&fit=crop"
            alt="Outdoor dining venue glowing at night"
            className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[540px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.18)_0%,rgba(17,17,17,0.7)_60%,rgba(17,17,17,0.86)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
            <blockquote className="max-w-[12ch] font-heading text-5xl uppercase leading-[0.95] tracking-[0.08em] text-text sm:text-6xl lg:text-7xl">
              Smoke up. Lights on. Feed the night.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.85fr)] lg:items-center">
          <div className="space-y-6">
            <p className="mono-label text-secondary">Events teaser</p>
            <h2 className="section-title max-w-[11ch] text-text">Nights with a little more noise.</h2>
            <p className="max-w-[54ch] text-base leading-8 text-text/78 sm:text-lg">
              From DJ sets to collab menus and one-night-only drops, Māui keeps the calendar
              moving.
            </p>
            <div className="grid gap-4">
              {events.map((event, index) => (
                <article
                  key={event}
                  className="rounded-[26px] border border-white/10 bg-[#181818] px-5 py-5 shadow-[var(--shadow-hard)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex min-w-14 justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-secondary">
                      0{index + 1}
                    </span>
                    <p className="text-base leading-8 text-text/78">{event}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#171717] shadow-[var(--shadow-hard)]">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=1100&fit=crop"
              alt="Live DJ performing under club lighting"
              className="h-[380px] w-full object-cover"
            />
            <div className="space-y-4 p-6">
              <p className="mono-label text-electric">This month</p>
              <h3 className="text-4xl font-heading uppercase tracking-[0.08em] text-text">
                Friday bassline sessions.
              </h3>
              <p className="text-base leading-8 text-text/76">
                Smoke, speakers, and a late-close yard that stays busy well past dinner.
              </p>
              <Link
                href="/events/"
                className="inline-flex rounded-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background shadow-[var(--glow-orange)] hover:bg-accent hover:text-text"
              >
                See all events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-4 rounded-[32px] border border-primary/20 bg-[#171717] p-6 shadow-[var(--shadow-hard)] lg:grid-cols-[repeat(3,minmax(0,1fr))_auto] lg:items-center lg:gap-6 lg:p-8">
          <div>
            <p className="mono-label text-secondary">Find us</p>
            <p className="mt-2 text-lg leading-8 text-text">45 Ponsonby Road, Auckland</p>
          </div>
          <div>
            <p className="mono-label text-secondary">Open late</p>
            <p className="mt-2 text-lg leading-8 text-text">Wed–Sun</p>
          </div>
          <div>
            <p className="mono-label text-secondary">Walk in</p>
            <p className="mt-2 text-lg leading-8 text-text">Groups welcome</p>
          </div>
          <Link
            href="/find-us/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-background shadow-[var(--glow-orange)] hover:bg-accent hover:text-text"
          >
            Plan your visit
          </Link>
        </div>
      </section>
    </main>
  );
}
