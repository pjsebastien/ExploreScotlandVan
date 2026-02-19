import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Location van Glasgow : direction la côte ouest',
  description: 'Louez un van à Glasgow et rejoignez Skye et les Highlands en 1h. Départ parfait pour explorer la côte ouest écossaise.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-glasgow/',
  },
  openGraph: {
    title: 'Location van Glasgow : direction la côte ouest',
    description: 'Louez un van à Glasgow et rejoignez Skye et les Highlands en 1h.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-glasgow/',
    images: [{ url: '/images/roadtrip-mer-montagne.jpg' }],
  },
  twitter: {
    title: 'Location van Glasgow : direction la côte ouest',
    description: 'Louez un van à Glasgow et rejoignez Skye et les Highlands en 1h.',
    images: ['/images/roadtrip-mer-montagne.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Glasgow' },
];

const faqItems = [
  {
    question: 'Glasgow ou Édimbourg : quel départ choisir ?',
    answer: 'Glasgow est idéal pour explorer la côte Ouest, Skye et les Hébrides rapidement. Édimbourg convient mieux pour les Highlands de l\'Est et le Loch Ness. Si vous faites une boucle complète, les deux villes se valent.',
  },
  {
    question: 'Peut-on récupérer à Glasgow et rendre à Édimbourg ?',
    answer: 'Certains loueurs proposent cette option (one-way rental), généralement moyennant des frais supplémentaires de 50 à 150€. Vérifiez lors de la réservation.',
  },
  {
    question: 'L\'offre de vans est-elle suffisante à Glasgow ?',
    answer: 'L\'offre est moins importante qu\'à Édimbourg mais reste adéquate. Réservez à l\'avance en haute saison pour avoir le choix. Les plateformes entre particuliers complètent bien l\'offre des agences.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Glasgow',
  description: 'Tout savoir pour louer un van à Glasgow et partir en road trip sur la côte Ouest écossaise.',
  image: 'https://www.explorescotlandvan.com/images/roadtrip-mer-montagne.jpg',
  datePublished: '2026-01-25',
  dateModified: '2026-02-19',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function GlasgowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Glasgow"
        subtitle="La porte d'entrée vers la côte ouest sauvage et les îles"
        badge="Départ Glasgow"
        image="/images/roadtrip-mer-montagne.jpg"
        imageAlt="Road trip en van entre mer et montagne sur la côte Ouest écossaise"
        stats={[
          { value: '30+', label: 'Vans disponibles' },
          { value: '1h', label: 'De la côte Ouest' },
          { value: '80€', label: 'Prix moyen /jour' },
          { value: 'Skye', label: 'Accès direct' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Glasgow, plus grande ville d&apos;Écosse, offre une alternative intéressante à Édimbourg
            pour votre <Link href="/">location de van</Link>. Située à l&apos;ouest du pays, elle permet
            un accès plus direct à la côte Ouest sauvage, à l&apos;île de Skye et au début de la
            North Coast 500.
          </p>

          <h2>Pourquoi partir de Glasgow ?</h2>

          <h3>Accès rapide à la côte Ouest</h3>
          <p>
            Glasgow est idéalement placée pour rejoindre les paysages les plus spectaculaires
            de l&apos;Écosse. En moins d&apos;une heure, vous atteignez le <strong>Loch Lomond</strong>
            et les Trossachs. La côte Ouest avec ses fjords, îles et plages sauvages est
            directement accessible.
          </p>

          <h3>Route directe vers Skye</h3>
          <p>
            Depuis Glasgow, deux options pour rejoindre l&apos;île de Skye :
          </p>
          <ul>
            <li><strong>Par la route (A82) :</strong> Via Glen Coe et Fort William (5h)</li>
            <li><strong>Par ferry depuis Oban :</strong> Plus pittoresque, permet de visiter Mull en route</li>
          </ul>

          <h3>Point de départ pour les Hébrides</h3>
          <p>
            Si vous envisagez d&apos;explorer les <strong>Hébrides extérieures</strong> (Lewis, Harris,
            Uist), Glasgow vous rapproche des ports de ferry : Oban pour les Hébrides intérieures,
            Ullapool pour Lewis et Harris.
          </p>

          <h3>Vols low-cost plus nombreux</h3>
          <p>
            L&apos;aéroport de Glasgow propose souvent plus de vols low-cost que celui d&apos;Édimbourg.
            Vérifiez les deux lors de votre recherche de billets.
          </p>

          <div className="my-12">
            <Image
              src="/images/highlands-adventure.jpg"
              alt="Aventure en van dans les Highlands depuis Glasgow"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La côte Ouest offre des paysages parmi les plus sauvages d&apos;Écosse
            </p>
          </div>

          <h2>Itinéraires recommandés au départ de Glasgow</h2>

          <h3>La côte Ouest et Skye (1 semaine)</h3>
          <ul>
            <li>Glasgow → Loch Lomond → Oban (2h)</li>
            <li>Oban → Fort William → Skye (3h)</li>
            <li>Exploration de Skye (2-3 jours)</li>
            <li>Skye → Loch Ness → Cairngorms (3h)</li>
            <li>Cairngorms → Glasgow via Pitlochry (3h)</li>
          </ul>

          <h3>Hébrides et côte Ouest (2 semaines)</h3>
          <p>
            Un itinéraire plus ambitieux incluant :
          </p>
          <ul>
            <li>Île de Mull (ferry depuis Oban)</li>
            <li>Île de Skye</li>
            <li>Harris et Lewis (ferry depuis Uig, Skye)</li>
            <li>Retour par la côte Nord et les Cairngorms</li>
          </ul>

          <h3>NC500 au départ de Glasgow</h3>
          <p>
            La <Link href="/road-trip-ecosse-van/">North Coast 500</Link> peut se faire depuis Glasgow
            en rejoignant Inverness par l&apos;A9 ou par la côte Ouest. Comptez une journée supplémentaire
            par rapport à un départ d&apos;Édimbourg.
          </p>

          <h2>Conseils pratiques pour Glasgow</h2>

          <h3>Récupération du van</h3>
          <p>
            Comme à Édimbourg, la plupart des loueurs sont en périphérie. Certains proposent
            la récupération à l&apos;aéroport de Glasgow ou un service de navette. Vérifiez les
            options lors de votre réservation.
          </p>

          <h3>Circuler dans Glasgow</h3>
          <p>
            Le centre-ville de Glasgow est plus accessible en van qu&apos;Édimbourg, mais reste
            peu pratique. Privilégiez les parkings en périphérie ou les Park &amp; Ride si
            vous souhaitez visiter la ville.
          </p>

          <h3>Ravitaillement</h3>
          <p>
            Glasgow dispose de tous les services nécessaires avant votre départ : supermarchés,
            stations-service, commerces outdoor (Tiso, Cotswold). C&apos;est le dernier grand
            centre urbain avant les Highlands de l&apos;Ouest.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van à Glasgow"
          description="Comparez les offres de location et partez à la découverte de la côte Ouest écossaise."
        />

        <div className="prose-custom">
          <h2>Prix de location à Glasgow</h2>

          <p>
            Les tarifs à Glasgow sont comparables à ceux d&apos;Édimbourg, parfois légèrement
            moins chers du fait d&apos;une offre moins saturée :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 55-95€/jour</li>
            <li><strong>Van moyen :</strong> 90-140€/jour</li>
            <li><strong>Fourgon aménagé :</strong> 110-170€/jour</li>
          </ul>

          <p>
            Consultez notre <Link href="/prix-location-van-ecosse/">guide des prix</Link> pour
            une analyse détaillée.
          </p>

          <h2>Se rendre à Glasgow</h2>

          <h3>En avion</h3>
          <p>
            L&apos;aéroport de Glasgow (GLA) est à 15 km du centre-ville. Nombreux vols directs
            depuis la France, notamment avec des compagnies low-cost. Une navette bus relie
            l&apos;aéroport au centre en 25 minutes.
          </p>

          <h3>Depuis Édimbourg</h3>
          <p>
            Train direct Édimbourg-Glasgow en 50 minutes. Si vous atterrissez à Édimbourg
            mais préférez partir de Glasgow, c&apos;est une option simple.
          </p>

          <h2>Visiter Glasgow avant votre road trip</h2>

          <p>
            Glasgow mérite une visite avant de partir sur les routes :
          </p>

          <ul>
            <li><strong>Kelvingrove Museum :</strong> Musée gratuit, collections éclectiques</li>
            <li><strong>West End :</strong> Quartier bohème, cafés et boutiques</li>
            <li><strong>Glasgow Cathedral :</strong> Cathédrale médiévale</li>
            <li><strong>Street art :</strong> Murales colorées dans le centre-ville</li>
            <li><strong>Riverside Museum :</strong> Musée des transports au design spectaculaire</li>
          </ul>

          <p>
            Glasgow a une personnalité différente d&apos;Édimbourg : plus industrielle, plus
            authentique, avec une scène culturelle dynamique. C&apos;est une excellente introduction
            à l&apos;Écosse moderne avant de plonger dans les paysages ancestraux des Highlands.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location à Glasgow" />
      </article>
    </>
  );
}
