export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

const base = 'https://maui-street-food.vercel.app';
const lastModified = new Date('2026-03-27T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/the-trucks/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/events/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/find-us/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
