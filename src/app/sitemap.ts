import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.explorescotlandvan.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: '2026-02-19',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/road-trip-ecosse-van/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prix-location-van-ecosse/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dormir-en-van-ecosse/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosse-en-van-1-semaine/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosse-en-van-2-semaines/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-ecosse-edimbourg/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-ecosse-glasgow/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq-location-van-ecosse/`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos/`,
      lastModified: '2026-02-10',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
