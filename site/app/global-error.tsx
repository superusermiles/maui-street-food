'use client';

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <main className="section-shell flex min-h-[70vh] items-center justify-center py-24">
          <div className="max-w-xl rounded-[32px] border border-white/10 bg-[#171717] p-8 text-center shadow-[var(--shadow-hard)]">
            <p className="mono-label text-secondary">Site issue</p>
            <h1 className="mt-4 text-5xl font-heading uppercase tracking-[0.08em] text-text">
              Something went wrong.
            </h1>
            <p className="mt-4 text-base leading-8 text-text/78">
              Give it another go. If the issue sticks around, try refreshing the page.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-background hover:bg-accent hover:text-text"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
