import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';

type NavLink = {
  label: string;
  href: string;
};

export function SiteHeader({ links }: { links: NavLink[] }) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-black/80 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl md:px-6">
        <Link href="/" aria-label="Māui Street Food home">
          <BrandLogo className="w-[150px] sm:w-[180px]" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-xl uppercase tracking-[0.16em] text-text/90 hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/find-us/"
            className="rounded-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background shadow-[0_0_30px_rgba(255,90,31,0.28)] hover:-translate-y-0.5 hover:bg-accent hover:text-text"
          >
            Pull Up Tonight
          </Link>
        </nav>

        <nav className="flex w-full flex-col gap-2 md:hidden" aria-label="Mobile">
          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-heading text-xl uppercase tracking-[0.12em] text-text hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/find-us/"
            className="rounded-full bg-primary px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.18em] text-background"
          >
            Pull Up Tonight
          </Link>
        </nav>
      </div>
    </header>
  );
}
