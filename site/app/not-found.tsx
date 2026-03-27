import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-24">
      <div className="max-w-xl rounded-[32px] border border-white/10 bg-[#171717] p-8 text-center shadow-[var(--shadow-hard)]">
        <p className="mono-label text-secondary">404</p>
        <h1 className="mt-4 text-5xl font-heading uppercase tracking-[0.08em] text-text">
          Night market not found.
        </h1>
        <p className="mt-4 text-base leading-8 text-text/78">
          The page you’re after has moved on. Head back to the main line-up and keep the night
          going.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background hover:bg-accent hover:text-text"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
