import type { Metadata } from 'next';
import Link from 'next/link';

const hours = [
  ['Wednesday', '5pm to 11pm'],
  ['Thursday', '5pm to 11pm'],
  ['Friday', '5pm to 1am'],
  ['Saturday', '5pm to 1am'],
  ['Sunday', '4pm to 10pm'],
] as const;

const gettingHere = [
  {
    title: 'Walk in',
    body: 'Ponsonby’s best when you wander. We’re an easy stop before, after, or between plans.',
    icon: '01',
  },
  {
    title: 'Rideshare',
    body: 'Set your drop-off to Ponsonby Road and head for the glow.',
    icon: '02',
  },
  {
    title: 'Parking',
    body: 'Limited street parking nearby. Rideshare is the smoother move on busy nights.',
    icon: '03',
  },
];

export const metadata: Metadata = {
  title: 'Find Us | Māui Street Food',
  description:
    'Find Māui Street Food in Ponsonby, Auckland. Check opening hours, transport options, and send an enquiry.',
  openGraph: {
    title: 'Find Us | Māui Street Food',
    description:
      'Find Māui Street Food in Ponsonby, Auckland. Check opening hours, transport options, and send an enquiry.',
  },
};

export default function FindUsPage() {
  return (
    <main>
      <section className="section-shell pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="rounded-[36px] border border-white/10 bg-[#161616] px-6 py-12 shadow-[var(--shadow-hard)] sm:px-8 lg:px-12 lg:py-16">
          <p className="mono-label text-secondary">Plan your visit</p>
          <div className="mt-6 max-w-4xl space-y-5">
            <h1 className="display-title max-w-[10ch] text-balance text-text">
              Find the lights. Follow the smoke.
            </h1>
            <p className="max-w-[60ch] text-base leading-8 text-text/78 sm:text-lg">
              We’re in Ponsonby, easy to pull up to, and built for after-work dinners, late bites,
              and full-group link-ups.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-text/82">
                45 Ponsonby Road
              </span>
              <span className="rounded-full border border-primary/25 bg-primary/12 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-secondary">
                Open late Wed–Sun
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <p className="mono-label text-secondary">Location + hours</p>
              <h2 className="section-title text-text">Ponsonby, Auckland</h2>
              <p className="max-w-[58ch] text-base leading-8 text-text/78 sm:text-lg">
                Right in the mix, close to bars, easy rideshares, and the kind of street you’re
                probably already heading toward.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="mono-label text-secondary">Address</p>
                <p className="mt-3 text-lg leading-8 text-text">
                  45 Ponsonby Road, Ponsonby, Auckland 1011
                </p>
                <p className="mt-6 mono-label text-electric">Nearby</p>
                <p className="mt-3 text-sm leading-7 text-text/76">
                  A short hop from Karangahape Road and central city stays.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="mono-label text-secondary">Opening hours</p>
                <dl className="mt-4 space-y-3 text-sm leading-7 text-text/80">
                  {hours.map(([day, value]) => (
                    <div key={day} className="flex items-start justify-between gap-4 border-b border-white/8 pb-3">
                      <dt>{day}</dt>
                      <dd className="text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-[32px] border border-white/10 bg-[#171717] shadow-[var(--shadow-hard)] lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=900&fit=crop"
              alt="Auckland city street scene at dusk"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-full"
            />
            <div className="space-y-5 p-6">
              <p className="mono-label text-secondary">Map panel</p>
              <h3 className="text-3xl font-heading uppercase tracking-[0.08em] text-text">
                Pull up from the city side.
              </h3>
              <p className="text-base leading-8 text-text/76">
                Ponsonby Road stays busy late. Head toward the glow, grab a table, and lock in the
                trucks that match your mood.
              </p>
              <a
                href="https://maps.google.com/?q=45+Ponsonby+Road+Ponsonby+Auckland+1011"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-secondary/35 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-secondary hover:border-electric hover:text-electric"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="mb-10 space-y-4">
          <p className="mono-label text-secondary">Getting here</p>
          <h2 className="section-title text-text">Easy link-up, whatever the route.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {gettingHere.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-[#181818] p-6 shadow-[var(--shadow-hard)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-electric/35 bg-electric/10 font-mono text-sm uppercase tracking-[0.18em] text-electric">
                {item.icon}
              </span>
              <h3 className="mt-5 text-4xl font-heading uppercase tracking-[0.08em] text-text">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-text/76">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="enquiry-form" className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 rounded-[36px] border border-white/10 bg-[#151515] p-6 shadow-[var(--shadow-hard)] sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div className="space-y-5">
            <p className="mono-label text-secondary">Hit us up</p>
            <h2 className="section-title text-text">Ask the right question.</h2>
            <p className="max-w-[48ch] text-base leading-8 text-text/78 sm:text-lg">
              Ask about group bookings, private hire, vendor applications, or event collabs.
            </p>
            <div className="rounded-[28px] border border-primary/25 bg-primary/10 p-5 shadow-[var(--glow-orange)]">
              <p className="mono-label text-secondary">Fast response</p>
              <p className="mt-3 text-sm leading-7 text-text/78">
                Enquiry sent. We’ll get back to you soon.
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/hello@mauistreetfood.nz"
            method="POST"
            className="grid gap-5"
          >
            <input type="hidden" name="_subject" value="Māui Street Food enquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-text/80">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="min-h-12 rounded-[18px] border border-white/12 bg-white/5 px-4 py-3 text-text"
                />
              </label>
              <label className="grid gap-2 text-sm text-text/80">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="min-h-12 rounded-[18px] border border-white/12 bg-white/5 px-4 py-3 text-text"
                />
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-text/80">
                <span>Enquiry type</span>
                <select
                  name="enquiryType"
                  className="min-h-12 rounded-[18px] border border-white/12 bg-white/5 px-4 py-3 text-text"
                  defaultValue="Group booking"
                >
                  <option>Group booking</option>
                  <option>Private hire</option>
                  <option>Vendor application</option>
                  <option>Event collab</option>
                  <option>General question</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-text/80">
                <span>Preferred date</span>
                <input
                  type="date"
                  name="preferredDate"
                  className="min-h-12 rounded-[18px] border border-white/12 bg-white/5 px-4 py-3 text-text"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-text/80">
              <span>Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className="rounded-[18px] border border-white/12 bg-white/5 px-4 py-3 text-text"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background hover:bg-accent hover:text-text"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[var(--shadow-hard)]">
          <img
            src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&h=900&fit=crop"
            alt="Auckland skyline glowing at sunset into night"
            className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.28)_0%,rgba(17,17,17,0.82)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12">
            <blockquote className="section-title max-w-[12ch] text-balance text-text">
              Ponsonby nights taste better here.
            </blockquote>
            <Link
              href="#top"
              className="inline-flex rounded-full border border-secondary/35 bg-black/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-secondary hover:border-electric hover:text-electric"
            >
              Back to top
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
