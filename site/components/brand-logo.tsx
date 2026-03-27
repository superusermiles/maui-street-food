import clsx from 'clsx';

type Variant = 'primary' | 'reversed' | 'mono';

const fills: Record<Variant, { flame: string; hook: string; main: string; sub: string }> = {
  primary: {
    flame: '#FF5A1F',
    hook: '#D61C4E',
    main: '#F6EFE5',
    sub: '#F4C95D',
  },
  reversed: {
    flame: '#F6EFE5',
    hook: '#F4C95D',
    main: '#111111',
    sub: '#111111',
  },
  mono: {
    flame: '#F6EFE5',
    hook: '#F6EFE5',
    main: '#F6EFE5',
    sub: '#F6EFE5',
  },
};

export function BrandLogo({
  variant = 'primary',
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const fill = fills[variant];

  return (
    <svg
      width="220"
      height="64"
      viewBox="0 0 220 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Māui Street Food logo"
      className={clsx('h-auto min-w-[120px]', className)}
    >
      <rect width="220" height="64" rx="12" fill="none" />
      <path
        d="M24 50C18 45 15 38 15 30C15 18 24 10 35 10C29 15 27 22 30 28C33 34 39 36 44 41C49 45 51 51 47 56C43 61 35 62 28 58"
        fill={fill.flame}
      />
      <path
        d="M36 14C46 18 53 27 53 37C53 47 46 55 35 57C40 52 41 46 38 41C35 36 30 33 27 28C23 22 24 17 27 12"
        fill={fill.hook}
      />
      <text x="68" y="30" fill={fill.main} fontFamily="Bebas Neue, Arial, sans-serif" fontSize="26" letterSpacing="1.5">
        MĀUI
      </text>
      <text x="68" y="52" fill={fill.sub} fontFamily="Bebas Neue, Arial, sans-serif" fontSize="20" letterSpacing="1.2">
        STREET FOOD
      </text>
    </svg>
  );
}
