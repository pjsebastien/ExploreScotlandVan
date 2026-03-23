import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';
import HeroPage from '@/components/HeroPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Location van Fort William : au pied du Ben Nevis en Écosse',
  description: 'Louez un van aménagé à Fort William, capitale du plein air au Royaume-Uni. Ben Nevis, Glen Coe, Skye et Great Glen Way à votre porte.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-fort-william/',
  },
  openGraph: {
    title: 'Location van Fort William : au pied du Ben Nevis en Écosse',
    description: 'Louez un van à Fort William. Ben Nevis, Glen Coe et accès direct à Skye.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-fort-william/',
    images: [{ url: '/images/van-montagnes.jpg' }],
  },
  twitter: {
    title: 'Location van Fort William : au pied du Ben Nevis en Écosse',
    description: 'Louez un van à Fort William. Ben Nevis, Glen Coe et accès direct à Skye.',
    images: ['/images/van-montagnes.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Fort William' },
];

const faqItems = [
  {
    question: 'Où stationner son van à Fort William ?',
    answer: 'Fort William dispose de plusieurs parkings adaptés aux vans et camping-cars. Les parkings An Aird 1 et An Aird 2 ont des emplacements longs pour camping-cars (£3 pour 4h). Le Morrisons autorise 3h gratuites. Évitez les places réservées aux bus et camions sous peine d\u0027amende.',
  },
  {
    question: 'Fort William est-il un bon point de départ pour un road trip en van ?',
    answer: 'Fort William est un excellent camp de base pour un road trip dans les Highlands de l\u0027Ouest. Vous êtes à 30 minutes de Glen Coe, à 2h de l\u0027île de Skye et au pied du Ben Nevis. La ville est aussi le point de départ du Great Glen Way vers Inverness.',
  },
  {
    question: 'Combien de temps faut-il pour rejoindre Fort William depuis Glasgow ?',
    answer: 'Comptez environ 2h30 par la A82, une route panoramique qui traverse le Loch Lomond et Glen Coe. C\u0027est l\u0027un des plus beaux trajets routiers d\u0027Écosse. Prévoyez des arrêts en chemin.',
  },
  {
    question: 'Peut-on faire le plein et les courses à Fort William ?',
    answer: 'Fort William est la plus grande ville de la côte ouest des Highlands. Vous y trouverez un Morrisons et un Aldi pour vos courses, plusieurs stations-service et des magasins de sport et outdoor. C\u0027est le dernier ravitaillement majeur avant Skye ou la côte nord.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Fort William',
  description: 'Tout savoir pour louer un van à Fort William, capitale du plein air, et partir en road trip dans les Highlands.',
  image: 'https://www.explorescotlandvan.com/images/van-montagnes.jpg',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function FortWilliamPage() {
  const publishDate = new Date('2026-03-29T08:00:00.000Z');
  if (new Date() < publishDate) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Fort William"
        subtitle="Au pied du Ben Nevis, la capitale du plein air au Royaume-Uni"
        badge="Départ Fort William"
        image="/images/van-montagnes.jpg"
        imageAlt="Van aménagé garé face aux montagnes près de Fort William en Écosse"
        stats={[
          { value: '1 345 m', label: 'Ben Nevis' },
          { value: '30 min', label: 'De Glen Coe' },
          { value: '2h', label: 'De Skye' },
          { value: '#1', label: 'Outdoor UK' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Fort William est la plus grande ville de la côte ouest des Highlands écossaises. Située au pied du <strong>Ben Nevis</strong> (1 345 m), le plus haut sommet du Royaume-Uni, elle porte le titre de <strong>capitale du plein air</strong> (Outdoor Capital of the UK). C&apos;est un point de départ idéal pour une <Link href="/">location de van en Écosse</Link>, avec un accès direct à Glen Coe, à l&apos;île de Skye et au Great Glen Way.
          </p>

          <h2>Pourquoi Fort William ?</h2>

          <h3>La capitale du plein air</h3>
          <p>
            Fort William a gagné ce surnom grâce à la concentration d&apos;activités outdoor dans ses environs : randonnée, VTT (la coupe du monde de descente s&apos;y déroule chaque année à Nevis Range), escalade, kayak sur le Loch Linnhe et ski en hiver à l&apos;Aonach Mor. C&apos;est un terrain de jeu immense pour les amateurs de nature.
          </p>

          <h3>Le Ben Nevis à votre porte</h3>
          <p>
            Le sentier principal du Ben Nevis part de Glen Nevis, à 10 minutes en van du centre-ville. L&apos;ascension prend 7 à 9 heures aller-retour. Même si vous ne montez pas au sommet, la vallée de Glen Nevis mérite le détour : les chutes de Steall (120 m de haut) comptent parmi les plus belles cascades d&apos;Écosse.
          </p>

          <h3>La porte de Glen Coe</h3>
          <p>
            Glen Coe, la vallée la plus spectaculaire d&apos;Écosse, se trouve à seulement 30 minutes au sud de Fort William par la A82. Ses crêtes acérées, ses cascades et son histoire tragique (le massacre du clan MacDonald en 1692) en font un passage incontournable de tout <Link href="/road-trip-ecosse-van/">road trip en van</Link>. Vous pouvez y faire une boucle dans la journée et rentrer dormir à Fort William.
          </p>

          <div className="my-12">
            <Image
              src="/images/van-montagnes.jpg"
              alt="Route vers Fort William avec vue sur les montagnes des Highlands"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les montagnes entourent Fort William de tous côtés
            </p>
          </div>

          <h2>Itinéraires au départ de Fort William</h2>

          <h3>Fort William → Île de Skye (2h)</h3>
          <p>
            Depuis Fort William, la route vers Skye passe par Invergarry puis la A87 jusqu&apos;au pont de Kyle of Lochalsh. Comptez 2h de conduite. C&apos;est le trajet le plus court pour atteindre Skye depuis les Highlands centraux. Prévoyez 2 à 3 jours pour visiter l&apos;île.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Link
              href="/ecosse-en-van-1-semaine/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">1 Semaine</h3>
              <p className="text-stone-600">
                Highlands, Skye et Loch Ness. Fort William comme étape centrale.
              </p>
            </Link>

            <Link
              href="/ecosse-en-van-2-semaines/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">2 Semaines</h3>
              <p className="text-stone-600">
                Le grand tour : côte ouest, Skye, côte nord et Cairngorms.
              </p>
            </Link>
          </div>

          <h3>Boucle Glen Coe &amp; Rannoch Moor (journée)</h3>
          <p>
            Un itinéraire d&apos;une journée au départ de Fort William :
          </p>
          <ul>
            <li>Fort William → Glen Coe par la A82 (30 min)</li>
            <li>Randonnée dans la vallée (Lost Valley, Signal Rock ou Three Sisters viewpoint)</li>
            <li>Continuation vers Rannoch Moor, l&apos;un des derniers espaces sauvages d&apos;Europe</li>
            <li>Retour à Fort William par la même route ou via Kinlochleven</li>
          </ul>

          <h3>Great Glen Way jusqu&apos;à Inverness</h3>
          <p>
            Le Great Glen (la grande faille géologique) relie Fort William à Inverness sur 120 km. En van, vous longez le canal calédonien et traversez le <strong>Loch Ness</strong>, le Loch Oich et le Loch Lochy. La route A82 suit ce corridor naturel et prend environ 1h30. C&apos;est un axe majeur pour relier les Highlands de l&apos;Ouest à <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> via Inverness.
          </p>

          <h2>Conseils pratiques</h2>

          <h3>Stationnement à Fort William</h3>
          <p>
            Les parkings <strong>An Aird 1 et An Aird 2</strong> disposent d&apos;emplacements longs adaptés aux vans et camping-cars (£3 pour 4 heures). Ils sont proches du centre-ville et de la gare. Le parking du <strong>Morrisons</strong> est gratuit pour 3 heures si vous faites vos courses. Attention : ne vous garez jamais sur les places réservées aux bus ou poids lourds, des amendes sont distribuées.
          </p>

          <h3>Ravitaillement &amp; courses</h3>
          <p>
            Fort William est la dernière grande ville avant Skye et la côte nord. Profitez-en pour faire le plein :
          </p>
          <ul>
            <li><strong>Supermarchés :</strong> Morrisons (le plus grand), Aldi, Co-op et Lidl</li>
            <li><strong>Carburant :</strong> Plusieurs stations-service sur la A82 à l&apos;entrée de la ville</li>
            <li><strong>Outdoor :</strong> Nevisport et West Coast Outdoor pour l&apos;équipement de randonnée</li>
          </ul>

          <h3>Camping &amp; aires de stationnement</h3>
          <p>
            Le <strong>Glen Nevis Caravan &amp; Camping Park</strong> est le spot le plus connu : au pied du Ben Nevis, avec vue sur les Mamores. Le Ben Nevis Holiday Park, un peu plus loin, est une autre bonne option. Réservez à l&apos;avance en juillet-août.
          </p>

          <h2>Prix de location</h2>

          <p>
            Fort William n&apos;est pas un hub majeur de location de vans comme <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> ou <Link href="/location-van-ecosse-glasgow/">Glasgow</Link>. L&apos;offre locale est plus limitée, mais vous pouvez louer un van dans l&apos;une des grandes villes et rejoindre Fort William en quelques heures :
          </p>

          <ul>
            <li><strong>Depuis Glasgow :</strong> 2h30 par la A82 via Glen Coe</li>
            <li><strong>Depuis Édimbourg :</strong> 3h par la M9 puis A82</li>
          </ul>

          <p>
            Les tarifs moyens en Écosse :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 60-100€/jour</li>
            <li><strong>Van moyen (California, Marco Polo) :</strong> 100-150€/jour</li>
            <li><strong>Fourgon aménagé :</strong> 120-180€/jour</li>
          </ul>

          <p>
            Consultez notre <Link href="/prix-location-van-ecosse/">guide complet des prix</Link> pour une analyse détaillée par saison et type de véhicule.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van pour Fort William"
          description="Comparez les offres de location et réservez le van idéal pour votre aventure dans les Highlands de l&apos;Ouest."
        />

        <div className="prose-custom">
          <h2>Se rendre à Fort William</h2>

          <h3>En voiture ou en van (A82 depuis Glasgow)</h3>
          <p>
            La route A82 relie Glasgow à Fort William en 2h30. C&apos;est l&apos;un des trajets les plus mémorables d&apos;Écosse : vous traversez le parc national du Loch Lomond &amp; Trossachs, la lande désolée de Rannoch Moor et l&apos;impressionnant Glen Coe. Attention, la A82 est une route à voie unique par endroits. Prévoyez de la patience en été.
          </p>

          <h3>Le Jacobite Steam Train</h3>
          <p>
            Le célèbre train à vapeur Jacobite relie Fort William à Mallaig (84 km aller-retour). Le trajet dure 2 heures et franchit le <strong>viaduc de Glenfinnan</strong>, rendu mondialement célèbre par les films Harry Potter. C&apos;est l&apos;une des lignes ferroviaires les plus spectaculaires au monde. Vous pouvez garer votre van à Fort William et prendre le train pour la journée.
          </p>

          <h3>En train classique</h3>
          <p>
            La ligne ScotRail relie Glasgow Queen Street à Fort William en environ 3h45. Le trajet par la West Highland Line est considéré comme l&apos;un des plus beaux voyages en train d&apos;Europe. Un bon plan : arrivez en train, louez votre van sur place ou faites-vous livrer un véhicule depuis Glasgow.
          </p>

          <h2>Que voir à Fort William</h2>

          <p>
            Fort William et ses environs regorgent de sites à visiter en van :
          </p>

          <ul>
            <li><strong>Ben Nevis &amp; Glen Nevis :</strong> Le toit du Royaume-Uni et sa vallée aux cascades grandioses</li>
            <li><strong>Glen Coe :</strong> La vallée la plus dramatique d&apos;Écosse, à 30 minutes au sud</li>
            <li><strong>Viaduc de Glenfinnan :</strong> Le pont ferroviaire iconique et le monument aux Jacobites</li>
            <li><strong>Loch Linnhe :</strong> Le loch marin au pied de la ville, idéal pour le kayak</li>
            <li><strong>Neptune&apos;s Staircase :</strong> L&apos;escalier d&apos;écluses du canal calédonien à Banavie, un ouvrage d&apos;ingénierie impressionnant</li>
            <li><strong>Commando Memorial :</strong> Le mémorial des commandos britanniques avec vue panoramique sur le Ben Nevis et le Great Glen</li>
            <li><strong>Nevis Range :</strong> Téléphérique avec vue sur le Ben Nevis, pistes VTT et ski en hiver</li>
          </ul>

          <p>
            Fort William est un camp de base parfait pour rayonner dans les Highlands de l&apos;Ouest. Avec votre van, vous avez la liberté de combiner sommets, vallées et côtes sauvages à votre rythme.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur Fort William en van" />
      </article>
    </>
  );
}
