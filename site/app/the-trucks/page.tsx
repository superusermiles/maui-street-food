import type { Metadata } from 'next';
import Link from 'next/link';

const trucks = [
  {
    name: 'Huli Smoke',
    cuisine: 'Pacific barbecue',
    summary:
      'Slow smoke, hot grills, and sticky island-inspired glaze. This is the truck for share plates, burnt ends, and sauce on your hands.',
    signature: 'Kālua pork loaded plate',
    nights: 'Wed–Sun',
    image:
      'https://images.unsplash.com/photo-1529692236671-f1de7ce1c16d?w=900&h=1100&fit=crop',
    alt: 'Smoked Pacific barbecue meat served at a Ponsonby Auckland street food truck',
  },
  {
    name: 'Island Skewers',
    cuisine: 'Flame-grilled skewers',
    summary:
      'Sharp marinades, open flame, and fast-moving skewers stacked with colour and char.',
    signature: 'Charred chicken skewers with green chilli coconut drizzle',
    nights: 'Thu–Sun',
    image:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=900&h=1100&fit=crop',
    alt: 'Flame-grilled skewers at Māui Street Food in Ponsonby Auckland',
  },
  {
    name: 'Midnight Fry',
    cuisine: 'Burgers and loaded fries',
    summary:
      'Crispy edges, molten cheese, heavy sauces, and exactly the kind of food people start craving after 10pm.',
    signature: 'Double smash burger with hot honey fries',
    nights: 'Wed–Sat',
    image:
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=900&h=1100&fit=crop',
    alt: 'Loaded late-night fried street food served in Ponsonby Auckland',
  },
  {
    name: 'Lava Soft Serve',
    cuisine: 'Dessert truck',
    summary:
      'Cold, sweet, and dramatic. Built for the final lap of the night with bright toppings and dark-chocolate hits.',
    signature: 'Coconut soft serve with guava ripple and sesame crunch',
    nights: 'Fri–Sun',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&h=1100&fit=crop',
    alt: 'Soft serve dessert from a Ponsonby late-night food truck',
  },
];

const dishes = [
  { name: 'Kālua pork loaded plate', tone: 'bg-primary/15 text-primary border-primary/30' },
  { name: 'Charred chicken skewers', tone: 'bg-secondary/15 text-secondary border-secondary/30' },
  { name: 'Double smash burger', tone: 'bg-accent/15 text-accent border-accent/30' },
  { name: 'Hot honey fries', tone: 'bg-electric/15 text-electric border-electric/30' },
  { name: 'Coconut soft serve', tone: 'bg-white/10 text-text border-white/15' },
  { name: 'Guava ripple sundae', tone: 'bg-primary/15 text-primary border-primary/30' },
];

export const metadata: Metadata = {
  title: 'Food Trucks in Ponsonby Auckland | Māui Street Food',
  description:
    'Explore Māui Street Food trucks in Ponsonby, Auckland for Pacific barbecue, skewers, burgers, loaded fries, and late-night desserts.',
  keywords: [
    'food trucks Ponsonby Auckland',
    'street food trucks Auckland',
    'late night burgers Ponsonby',
    'Ponsonby barbecue truck',
    'Ponsonby dessert truck',
  ],
  openGraph: {
    title: 'Food Trucks in Ponsonby Auckland | Māui Street Food',
    description:
      'See the resident Māui Street Food trucks serving Pacific barbecue, loaded fries, skewers, and dessert in Ponsonby.',
  },
  twitter: {
    title: 'Food Trucks in Ponsonby Auckland | Māui Street Food',
    description:
      'Explore Ponsonby food trucks, signature dishes, and late-night eats at Māui Street Food.',
  },
  alternates: {
    canonical: 'https://maui-street-food.vercel.app/the-trucks/',
  },
};

export default function TrucksPage() {
  return (
    <main>
      <section className="section-shell pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#171717] shadow-[var(--shadow-hard)]">
          <div className="textured-grid px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <p className="mono-label text-secondary">The line-up</p>
            <div className="mt-6 max-w-4xl space-y-5">
              <h1 className="display-title max-w-[12ch] text-balance text-text">
                Food trucks in Ponsonby worth chasing.
              </h1>
              <p className="max-w-[60ch] text-base leading-8 text-text/78 sm:text-lg">
                Every truck brings its own style, but the rule stays the same: big flavour, fast
                service, and food that earns the mess.
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=1600&h=900&fit=crop"
            alt="Street food cooking on a busy Ponsonby Auckland grill"
            className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[500px]"
          />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="mb-10 space-y-4">
          <p className="mono-label text-secondary">Truck roster</p>
          <h2 className="section-title text-text">Resident heat, all week.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {trucks.map((truck) => (
            <article
              key={truck.name}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#181818] shadow-[var(--shadow-hard)]"
            >
              <div className="grid gap-0 md:grid-cols-[240px_1fr]">
                <div className="overflow-hidden">
                  <img
                    src={truck.image}
                    alt={truck.alt}
                    className="h-full min-h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-5 p-6">
                  <div>
                    <p className="mono-label text-electric">{truck.cuisine}</p>
                    <h3 className="mt-3 text-4xl font-heading uppercase tracking-[0.08em] text-text">
                      {truck.name}
                    </h3>
                  </div>
                  <p className="text-base leading-8 text-text/76">{truck.summary}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="mono-label text-secondary">Signature</p>
                      <p className="mt-2 text-sm leading-7 text-text/84">{truck.signature}</p>
                    </div>
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="mono-label text-secondary">Serving nights</p>
                      <p className="mt-2 text-sm leading-7 text-text/84">{truck.nights}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="rounded-[32px] border border-white/10 bg-[#151515] px-6 py-8 shadow-[var(--shadow-hard)] sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="mono-label text-secondary">Signature dishes</p>
              <h2 className="section-title text-text">Built for repeat orders.</h2>
            </div>
            <p className="max-w-[52ch] text-base leading-8 text-text/72">
              Swipe the late-night favourites on mobile or scan the grid on desktop. Heat tags and
              flavour cues keep the menu sharp at a glance.
            </p>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className={`min-w-[240px] snap-start rounded-[24px] border px-5 py-5 ${dish.tone}`}
              >
                <p className="mono-label">Signature pick</p>
                <p className="mt-4 text-2xl font-heading uppercase tracking-[0.08em]">{dish.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[var(--shadow-hard)]">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop"
              alt="Friends sharing late-night street food around a communal table in Auckland"
              className="h-[420px] w-full object-cover lg:h-[520px]"
            />
          </div>
          <div className="space-y-5">
            <p className="mono-label text-secondary">House vibe</p>
            <h2 className="section-title max-w-[11ch] text-balance text-text">
              One yard. Many cravings.
            </h2>
            <p className="max-w-[58ch] text-base leading-8 text-text/78 sm:text-lg">
              Order from different trucks, pull tables together, and build your own late-night
              spread. Māui is made for mixed orders, group hangs, and second rounds.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="mono-label text-electric">Shared tables</p>
                <p className="mt-3 text-sm leading-7 text-text/76">
                  Stack plates, swap bites, and let the orders cross over the table.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="mono-label text-electric">Second rounds</p>
                <p className="mt-3 text-sm leading-7 text-text/76">
                  Dessert, another burger, one more skewer. Nobody needs to commit to one lane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-[32px] border border-primary/35 bg-[linear-gradient(135deg,rgba(255,90,31,0.16),rgba(17,17,17,0.95))] px-6 py-10 shadow-[var(--glow-orange)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="space-y-4">
            <p className="mono-label text-secondary">Vendor CTA</p>
            <h2 className="section-title text-text">Want to park up with us?</h2>
            <p className="max-w-[58ch] text-base leading-8 text-text/78">
              We’re always open to the right guest truck, collab night, or food drop that brings
              something real.
            </p>
          </div>
          <Link
            href="/find-us/#enquiry-form"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background hover:bg-accent hover:text-text lg:mt-0"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
