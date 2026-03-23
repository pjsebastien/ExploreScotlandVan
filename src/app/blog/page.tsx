import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedArticles, getMonthName } from '@/lib/blog';
import Breadcrumb from '@/components/Breadcrumb';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog van Écosse : conseils road trip mois par mois',
  description:
    'Météo, itinéraires et bons plans pour votre road trip en van en Écosse. Un guide par mois pour choisir la meilleure période.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/blog/',
  },
  openGraph: {
    title: 'Blog van Écosse : conseils road trip mois par mois',
    description:
      'Météo, itinéraires et bons plans pour votre road trip en van en Écosse.',
    url: 'https://www.explorescotlandvan.com/blog/',
    images: [{ url: '/images/hero-highlands.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Blog' },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog ExploreScotlandVan',
  description:
    'Conseils et guides mois par mois pour un road trip en van en Écosse.',
  url: 'https://www.explorescotlandvan.com/blog/',
  publisher: {
    '@type': 'Organization',
    name: 'ExploreScotlandVan',
    url: 'https://www.explorescotlandvan.com/',
  },
};

export default function BlogPage() {
  const articles = getPublishedArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 py-16 lg:py-20">
        <div className="container-narrow text-center">
          <span className="inline-block bg-forest-700/50 text-forest-100 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-forest-600/30">
            Blog
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            L&apos;Écosse en van, mois par mois
          </h1>
          <p className="text-lg text-forest-100/90 max-w-2xl mx-auto">
            Chaque mois a ses avantages et ses pièges. Nos guides vous aident à
            choisir la bonne période et à préparer votre road trip.
          </p>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="container-narrow section-padding">
        {articles.length === 0 ? (
          <p className="text-center text-stone-500 text-lg">
            Les articles arrivent bientôt. Revenez nous voir !
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}/`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-stone-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {getMonthName(article.month)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-forest-800 mb-2 group-hover:text-forest-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-stone-500">
                    {article.metaDescription}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-forest-700 group-hover:text-forest-500">
                    Lire l&apos;article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
