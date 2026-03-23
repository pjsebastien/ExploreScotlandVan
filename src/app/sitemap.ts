import { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.explorescotlandvan.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: '2026-03-23',
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
      url: `${baseUrl}/location-van-ecosse-inverness/`,
      lastModified: '2026-03-23',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-ecosse-fort-william/`,
      lastModified: '2026-03-29',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-ecosse-aberdeen/`,
      lastModified: '2026-04-04',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-ecosse-oban/`,
      lastModified: '2026-04-10',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-ecosse-stirling/`,
      lastModified: '2026-04-16',
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
      url: `${baseUrl}/blog/`,
      lastModified: '2026-03-23',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos/`,
      lastModified: '2026-02-10',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const articles = getPublishedArticles();
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}/`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
