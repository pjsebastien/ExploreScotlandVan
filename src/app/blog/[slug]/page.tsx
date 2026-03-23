import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllArticles,
  getArticleBySlug,
  getPublishedArticles,
  getRelatedArticles,
  getMonthName,
} from '@/lib/blog';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.explorescotlandvan.com/blog/${article.slug}/`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://www.explorescotlandvan.com/blog/${article.slug}/`,
      images: [{ url: article.heroImage.src }],
      type: 'article',
      publishedTime: article.publishedAt,
    },
    twitter: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.heroImage.src],
    },
  };
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

// City pages for internal linking bar
const cityLinks = [
  { name: 'Édimbourg', href: '/location-van-ecosse-edimbourg/' },
  { name: 'Glasgow', href: '/location-van-ecosse-glasgow/' },
  { name: 'Inverness', href: '/location-van-ecosse-inverness/' },
  { name: 'Fort William', href: '/location-van-ecosse-fort-william/' },
  { name: 'Aberdeen', href: '/location-van-ecosse-aberdeen/' },
  { name: 'Oban', href: '/location-van-ecosse-oban/' },
  { name: 'Stirling', href: '/location-van-ecosse-stirling/' },
];

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  // Check if article is published
  const now = new Date();
  if (!article.isPublished || new Date(article.publishedAt) > now) {
    notFound();
  }

  const related = getRelatedArticles(slug, 3);
  const monthName = getMonthName(article.month);

  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: article.title },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `https://www.explorescotlandvan.com${article.heroImage.src}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'ExploreScotlandVan',
      url: 'https://www.explorescotlandvan.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExploreScotlandVan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.explorescotlandvan.com/images/favicon.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-narrow pb-10 lg:pb-14">
            <span className="inline-block bg-forest-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase mb-4">
              {monthName}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {article.title}
            </h1>
            <p className="text-forest-100/80 text-sm">
              Publié le{' '}
              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        {/* Table of contents */}
        <nav className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-forest-800 mb-4">Sommaire</h2>
          <ol className="space-y-2">
            {article.sections
              .filter((s) => s.id !== 'introduction')
              .map((section, idx) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center text-stone-600 hover:text-forest-700 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-100 text-forest-700 text-xs font-bold flex items-center justify-center mr-3">
                      {idx + 1}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
          </ol>
        </nav>

        {/* Sections */}
        {article.sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          const showCTAAfter = idx === 1 || idx === 4;

          return (
            <div key={section.id}>
              <section
                id={section.id}
                className={`rounded-2xl p-6 md:p-10 mb-8 ${
                  isEven ? 'bg-white' : 'bg-stone-50'
                }`}
              >
                {section.id !== 'introduction' && (
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-700 text-white text-sm font-bold flex items-center justify-center">
                      {article.sections
                        .filter((s) => s.id !== 'introduction')
                        .indexOf(section) + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-forest-800">
                      {section.title}
                    </h2>
                  </div>
                )}

                <div className={section.image ? 'lg:flex lg:gap-8' : ''}>
                  <div
                    className={`prose-custom ${section.image ? 'lg:flex-1' : ''}`}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  {section.image && (
                    <div className="lg:w-80 flex-shrink-0 mt-6 lg:mt-0">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                      />
                      <p className="text-xs text-stone-400 mt-2 text-center">
                        {section.image.alt}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {showCTAAfter && (
                <AffiliateCTA
                  variant="compact"
                  title={
                    idx === 1
                      ? `Trouvez votre van pour ${monthName}`
                      : 'Comparez les offres de location'
                  }
                />
              )}
            </div>
          );
        })}

        {/* City links bar */}
        <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-12">
          <h3 className="text-lg font-bold text-forest-800 mb-4">
            Points de départ pour votre road trip
          </h3>
          <div className="flex flex-wrap gap-2">
            {cityLinks.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="inline-block bg-white border border-forest-200 text-forest-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-forest-700 hover:text-white transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-forest-800 mb-8">
              Autres mois à considérer
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}/`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-stone-200"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={rel.heroImage.src}
                      alt={rel.heroImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-forest-700 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {getMonthName(rel.month)}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-forest-800 group-hover:text-forest-600 line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
