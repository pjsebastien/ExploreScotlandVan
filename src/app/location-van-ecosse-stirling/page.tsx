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
  title: 'Location van Stirling : la porte des Highlands en van',
  description: 'Louez un van aménagé à Stirling, entre Édimbourg et les Highlands. Loch Lomond à 30 min, Trossachs, château de Stirling et position centrale idéale.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-stirling/',
  },
  openGraph: {
    title: 'Location van Stirling : la porte des Highlands en van',
    description: 'Louez un van à Stirling et rejoignez le Loch Lomond en 30 min. Position centrale parfaite pour les Highlands.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-stirling/',
    images: [{ url: '/images/route-highlands.jpg' }],
  },
  twitter: {
    title: 'Location van Stirling : la porte des Highlands en van',
    description: 'Louez un van à Stirling et rejoignez le Loch Lomond en 30 min. Position centrale parfaite pour les Highlands.',
    images: ['/images/route-highlands.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Stirling' },
];

const faqItems = [
  {
    question: 'Pourquoi choisir Stirling comme point de départ en van ?',
    answer: 'Stirling se situe exactement entre Édimbourg et Glasgow, à la frontière des Lowlands et des Highlands. Cette position centrale permet de rejoindre le Loch Lomond en 30 minutes et les Highlands en moins d\'une heure, tout en évitant le trafic des grandes villes.',
  },
  {
    question: 'Comment se rendre à Stirling depuis la France ?',
    answer: 'Atterrissez à Édimbourg ou Glasgow, puis prenez le train jusqu\'à Stirling (50 min depuis Édimbourg, 35 min depuis Glasgow). Les deux gares sont très bien desservies avec plusieurs trains par heure.',
  },
  {
    question: 'Peut-on visiter Stirling en van ?',
    answer: 'Le centre historique est compact et se visite à pied. Garez votre van dans l\'un des parkings périphériques et montez à pied vers le château. Prévoyez une demi-journée pour le château, le Wallace Monument et la vieille ville.',
  },
  {
    question: 'Quel est le meilleur itinéraire en van au départ de Stirling ?',
    answer: 'La boucle Stirling → Trossachs → Loch Lomond → Glen Coe → Fort William est un classique. Comptez 3 à 5 jours pour ce parcours, qui combine lacs, montagnes et villages typiques des Highlands.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Stirling',
  description: 'Tout savoir pour louer un van à Stirling et partir en road trip dans les Highlands écossais.',
  image: 'https://www.explorescotlandvan.com/images/route-highlands.jpg',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function StirlingPage() {
  const publishDate = new Date('2026-04-16T08:00:00.000Z');
  if (new Date() < publishDate) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Stirling"
        subtitle="La porte des Highlands, entre Édimbourg et Glasgow"
        badge="Départ Stirling"
        image="/images/route-highlands.jpg"
        imageAlt="Route panoramique des Highlands accessible depuis Stirling"
        stats={[
          { value: '30 min', label: 'Du Loch Lomond' },
          { value: '900 ans', label: 'De château' },
          { value: '50 min', label: 'D\'Édimbourg' },
          { value: '#1', label: 'Position centrale' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Stirling occupe une position unique en Écosse : plantée entre les Lowlands et les Highlands,
            cette ville historique est le point de départ rêvé pour une <Link href="/">location de van en Écosse</Link>.
            À mi-chemin entre <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> et <Link href="/location-van-ecosse-glasgow/">Glasgow</Link>,
            Stirling vous place au pied des premières montagnes, à 30 minutes du Loch Lomond et du parc
            national des Trossachs.
          </p>

          <h2>Pourquoi Stirling ?</h2>

          <p>
            Stirling a toujours été un carrefour. Pendant des siècles, son château perché sur un rocher
            volcanique a contrôlé le passage entre le sud et le nord de l&apos;Écosse. Aujourd&apos;hui,
            cette position stratégique profite aux voyageurs en van.
          </p>

          <h3>Une position centrale parfaite</h3>
          <p>
            Située à seulement 50 minutes d&apos;Édimbourg et 35 minutes de Glasgow en train, Stirling
            est accessible depuis les deux aéroports internationaux du pays. Mais son véritable atout,
            c&apos;est ce qu&apos;il y a au nord : les Highlands commencent ici. En prenant la route depuis
            Stirling, vous êtes dans les montagnes en moins d&apos;une heure, sans avoir à traverser
            l&apos;agglomération d&apos;Édimbourg ou de Glasgow.
          </p>

          <h3>La porte des Highlands</h3>
          <p>
            Stirling marque la frontière naturelle entre les plaines du sud et les reliefs du nord.
            Le Loch Lomond et le parc national des Trossachs sont à 30 minutes en van. Glen Coe, l&apos;une
            des vallées les plus spectaculaires d&apos;Écosse, se rejoint en 1h30. Cette proximité fait
            de Stirling un point de départ bien plus efficace que les grandes villes pour un
            <Link href="/road-trip-ecosse-van/"> road trip en van</Link>.
          </p>

          <h3>Une histoire monumentale</h3>
          <p>
            Avant de prendre la route, Stirling mérite votre attention. Le château de Stirling, où
            Marie Stuart fut couronnée reine d&apos;Écosse, domine la ville depuis son piton rocheux.
            Le National Wallace Monument, dédié au héros William Wallace, offre une vue imprenable
            sur les alentours. Et le champ de bataille de Bannockburn, où Robert the Bruce remporta
            l&apos;indépendance écossaise en 1314, se visite avec une expérience immersive en 3D.
          </p>

          <h2>Itinéraires au départ de Stirling</h2>

          <p>
            Depuis Stirling, plusieurs itinéraires s&apos;offrent à vous selon la durée de votre voyage.
          </p>

          <h3>Les Trossachs et le Loch Lomond (2-3 jours)</h3>
          <p>
            Le parcours le plus court mais déjà grandiose. Prenez la route vers l&apos;ouest en direction
            de Callander, puis longez le Loch Katrine jusqu&apos;au Loch Lomond. Ce parc national,
            surnommé le « premier souffle des Highlands », offre des paysages de lacs et de forêts
            parfaits pour le van life. Bivouacs possibles sur les rives, randonnées accessibles à tous niveaux.
          </p>

          <h3>La route vers le nord : Glen Coe et Fort William (4-5 jours)</h3>
          <p>
            Depuis Stirling, remontez par le Loch Lomond jusqu&apos;à Crianlarich, puis traversez la
            lande de Rannoch Moor avant de plonger dans la vallée de Glen Coe. Continuez jusqu&apos;à
            Fort William, au pied du Ben Nevis (1 345 m), le plus haut sommet de Grande-Bretagne.
            Un itinéraire mythique pour tout <Link href="/road-trip-ecosse-van/">road trip en Écosse</Link>.
          </p>

          <h3>La boucle complète des Highlands (7-10 jours)</h3>
          <p>
            Pour les voyages plus longs, Stirling est le point de départ idéal d&apos;une grande boucle :
          </p>
          <ul>
            <li>Stirling → Trossachs → Loch Lomond (1h)</li>
            <li>Loch Lomond → Glen Coe → Fort William (2h)</li>
            <li>Fort William → Île de Skye (2h30)</li>
            <li>Skye → Loch Ness → Inverness (3h)</li>
            <li>Inverness → Cairngorms → Stirling (2h30)</li>
          </ul>
          <p>
            Cette boucle de 750 km environ est parfaite pour <Link href="/ecosse-en-van-1-semaine/">une semaine en van</Link>.
            Avec deux semaines, ajoutez la <Link href="/ecosse-en-van-2-semaines/">North Coast 500</Link> depuis Inverness.
          </p>

          <div className="my-12">
            <Image
              src="/images/route-highlands.jpg"
              alt="Route sinueuse dans les Highlands écossais au départ de Stirling"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les Highlands commencent à quelques kilomètres de Stirling
            </p>
          </div>

          <h2>Conseils pratiques</h2>

          <h3>Stationnement à Stirling</h3>
          <p>
            Le centre historique se parcourt à pied. Garez votre van au parking Castleview ou au
            parking de la gare, tous deux adaptés aux véhicules hauts. Le Wallace Monument dispose
            aussi d&apos;un parking gratuit. Évitez les rues étroites de la vieille ville avec un van.
          </p>

          <h3>Ravitaillement</h3>
          <p>
            Stirling dispose de tous les supermarchés (Tesco, Aldi, Lidl) en périphérie. Faites le
            plein de courses avant de partir vers le nord : dans les Highlands, les magasins sont
            rares et les prix plus élevés. La station-service de la sortie de l&apos;autoroute M9 est
            pratique pour le carburant.
          </p>

          <h3>Conduite et routes</h3>
          <p>
            Au départ de Stirling, les routes sont larges et bien entretenues. C&apos;est en remontant
            vers le nord que les single-track roads apparaissent. Profitez du trajet Stirling-Callander
            pour vous habituer à la conduite à gauche avant d&apos;affronter les routes plus étroites
            des Highlands.
          </p>

          <h2>Prix de location</h2>

          <p>
            Les tarifs de location de van à Stirling et dans sa région sont comparables à ceux
            pratiqués à Édimbourg et Glasgow :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 60-100&euro;/jour</li>
            <li><strong>Van moyen (California, Marco Polo) :</strong> 100-150&euro;/jour</li>
            <li><strong>Fourgon aménagé :</strong> 120-180&euro;/jour</li>
          </ul>

          <p>
            La haute saison (juin à août) affiche des tarifs 30 à 50 % plus élevés. Réservez
            plusieurs mois à l&apos;avance pour obtenir les meilleurs prix. Consultez notre <Link href="/prix-location-van-ecosse/">guide
            complet des prix</Link> pour comparer les options.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van près de Stirling"
          description="Comparez les offres de location et réservez le van idéal pour votre road trip au départ de Stirling."
        />

        <div className="prose-custom">
          <h2>Se rendre à Stirling</h2>

          <h3>Depuis Édimbourg</h3>
          <p>
            Le train relie Édimbourg (Waverley) à Stirling en 50 minutes, avec deux trains par heure.
            En voiture, comptez 45 minutes par la M9. L&apos;aéroport d&apos;Édimbourg est à 1h de Stirling
            en transport.
          </p>

          <h3>Depuis Glasgow</h3>
          <p>
            Glasgow (Queen Street) est à 35 minutes en train, avec trois trains par heure. En voiture,
            le trajet par la M80 prend environ 40 minutes. L&apos;aéroport de Glasgow est à 50 minutes
            de Stirling.
          </p>

          <h3>Depuis la France</h3>
          <p>
            Atterrissez à Édimbourg ou Glasgow (vols directs depuis Paris, Lyon, Bordeaux), puis
            prenez le train jusqu&apos;à Stirling. C&apos;est simple, rapide et abordable. La gare de
            Stirling est à 2 minutes à pied du centre-ville.
          </p>

          <h2>Que voir à Stirling</h2>

          <p>
            Avant de prendre la route des Highlands, accordez au moins une demi-journée à Stirling.
            La ville regorge de sites qui valent le détour.
          </p>

          <ul>
            <li>
              <strong>Château de Stirling :</strong> L&apos;un des plus grands châteaux d&apos;Écosse,
              perché sur un rocher volcanique. La Grande Salle et le Palais Royal sont remarquables.
              Vue imprenable sur les Highlands et la plaine du Forth.
            </li>
            <li>
              <strong>National Wallace Monument :</strong> Tour de 67 mètres dédiée à William Wallace.
              Grimpez les 246 marches pour un panorama à 360° sur Stirling, les Ochil Hills et
              les montagnes des Trossachs.
            </li>
            <li>
              <strong>Bannockburn :</strong> Le champ de bataille où Robert the Bruce vainquit
              l&apos;armée anglaise en 1314. Le centre d&apos;interprétation propose une reconstitution
              immersive de la bataille.
            </li>
            <li>
              <strong>Vieille ville :</strong> Ruelles pavées, anciennes églises et le cimetière
              Holy Rude, où Jacques VI fut couronné. L&apos;atmosphère médiévale est saisissante.
            </li>
            <li>
              <strong>The Back Walk :</strong> Promenade gratuite autour des remparts du château,
              avec des vues sur le Wallace Monument et la campagne environnante.
            </li>
          </ul>

          <p>
            Une fois votre van récupéré, cap au nord. Les Highlands vous attendent à la sortie de
            la ville. Bonne route !
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location à Stirling" />
      </article>
    </>
  );
}
