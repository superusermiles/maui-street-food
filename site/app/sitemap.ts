export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://maui-street-food.vercel.app';

  return [
    '',
    '/the-trucks',
    '/events',
    '/find-us',
  ].map((path) => ({
    url: `${base}${path}/`.replace(/\/\/$/, '/'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
