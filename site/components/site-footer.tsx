import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';

type NavLink = {
  label: string;
  href: string;
};

export function SiteFooter({ links }: { links: NavLink[] }) {
  return (
    <footer className="border-t border-white/10 bg-[#1a1a1a] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
        <BrandLogo className="w-[190px]" />
        <div className="grid w-full gap-8 md:grid-cols-4 md:text-left">
          <div className="space-y-3">
            <p className="font-heading text-3xl uppercase tracking-[0.12em] text-text">Māui Street Food</p>
            <p className="max-w-sm text-sm leading-7 text-text/72">
              Loud food. Late nights. Ponsonby energy.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">Quick links</p>
            <ul className="space-y-2 text-sm text-text/78">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">Hours + address</p>
            <p className="text-sm leading-7 text-text/78">
              45 Ponsonby Road, Ponsonby, Auckland
              <br />
              Wed–Thu 5pm–11pm / Fri–Sat 5pm–1am / Sun 4pm–10pm
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">Direct contact</p>
            <div className="space-y-2 text-sm text-text/78">
              <p>
                <a href="tel:+6495550188" className="hover:text-secondary">
                  +64 9 555 0188
                </a>
              </p>
              <p>
                <a href="mailto:hello@mauistreetfood.co.nz" className="hover:text-secondary">
                  hello@mauistreetfood.co.nz
                </a>
              </p>
              <p className="text-text/60">Walk-ins welcome. Group and vendor enquiries by email.</p>
            </div>
          </div>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-text/50">© Māui Street Food. Feed the night.</p>
      </div>
    </footer>
  );
}
