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
  title: 'Location van Inverness : Highlands, Loch Ness & North Coast 500',
  description: 'Louez un van aménagé à Inverness, capitale des Highlands. Point de départ idéal pour le Loch Ness, la North Coast 500 et les paysages sauvages du nord de l\'Écosse.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-inverness/',
  },
  openGraph: {
    title: 'Location van Inverness : Highlands, Loch Ness & North Coast 500',
    description: 'Louez un van à Inverness et partez sur la North Coast 500, le Loch Ness et les Highlands du nord.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-inverness/',
    images: [{ url: '/images/highlands-adventure.jpg' }],
  },
  twitter: {
    title: 'Location van Inverness : Highlands, Loch Ness & North Coast 500',
    description: 'Louez un van à Inverness et partez sur la North Coast 500, le Loch Ness et les Highlands du nord.',
    images: ['/images/highlands-adventure.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Inverness' },
];

const faqItems = [
  {
    question: 'Combien de jours faut-il pour faire la North Coast 500 en van ?',
    answer: 'Prévoyez au minimum 5 jours, mais 7 à 10 jours permettent de profiter pleinement des détours, des randonnées et des plages. La route fait environ 830 km, mais les routes sinueuses du nord rallongent les temps de trajet. Rouler moins et s\'arrêter souvent, c\'est le vrai rythme van.',
  },
  {
    question: 'Peut-on voir le monstre du Loch Ness en van ?',
    answer: 'Nessie reste timide, mais les rives du Loch Ness sont facilement accessibles en van. La route A82 longe la rive ouest avec plusieurs aires de stationnement offrant des vues sur le loch. Drumnadrochit et Fort Augustus disposent de parkings adaptés aux vans. Le Loch Ness Centre à Drumnadrochit retrace l\'histoire du monstre.',
  },
  {
    question: 'Où stationner son van à Inverness ?',
    answer: 'Le centre-ville d\'Inverness est compact et le stationnement en van peut être serré. Utilisez les parkings longue durée de Rose Street ou Longman. Pour la nuit, le Bught Park Caravan Site se trouve à 10 minutes à pied du centre. Plusieurs campings bordent le canal calédonien au sud-ouest de la ville.',
  },
  {
    question: 'Inverness est-elle un bon point de départ pour les Highlands ?',
    answer: 'C\'est le meilleur. Inverness se trouve au carrefour de toutes les routes des Highlands : la North Coast 500 part d\'ici, le Loch Ness est à 20 minutes, Cairngorms à 45 minutes, et la côte est comme la côte ouest sont accessibles en moins de 2 heures. L\'aéroport reçoit des vols directs depuis Londres, Amsterdam et Dublin.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Inverness',
  description: 'Louez un van à Inverness pour explorer les Highlands, le Loch Ness et la North Coast 500.',
  image: 'https://www.explorescotlandvan.com/images/highlands-adventure.jpg',
  datePublished: '2026-03-23',
  dateModified: '2026-03-23',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function InvernessPage() {
  const publishDate = new Date('2026-03-23T08:00:00.000Z');
  if (new Date() < publishDate) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Inverness"
        subtitle="Capitale des Highlands, point de départ de la North Coast 500"
        badge="Départ Inverness"
        image="/images/highlands-adventure.jpg"
        imageAlt="Paysage des Highlands écossais près d'Inverness"
        stats={[
          { value: '1re', label: 'Capitale des Highlands' },
          { value: '830 km', label: 'North Coast 500' },
          { value: '20 min', label: 'Du Loch Ness' },
          { value: '45 min', label: 'Des Cairngorms' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Inverness n&apos;est pas juste une ville sur la carte. C&apos;est le point où tout commence
            quand on parle de Highlands. Posée à l&apos;embouchure du Loch Ness, reliée au reste du pays
            par le canal calédonien, elle ouvre la porte à la route la plus spectaculaire d&apos;Écosse :
            la North Coast 500. En van, c&apos;est le camp de base parfait.
          </p>

          <h2>Pourquoi partir d&apos;Inverness ?</h2>

          <p>
            La plupart des voyageurs atterrissent à <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> ou
            à <Link href="/location-van-ecosse-glasgow/">Glasgow</Link> et passent leurs deux premiers jours à
            remonter vers le nord. Depuis Inverness, vous êtes déjà là. Le Loch Ness est à 20 minutes.
            La côte sauvage de Caithness à 1h30. Les Cairngorms à 45 minutes. Pas de trajet de mise en route,
            pas de journée perdue sur l&apos;autoroute.
          </p>

          <h3>La North Coast 500 : le road trip mythique</h3>
          <p>
            La NC500, c&apos;est 830 km de route côtière qui fait le tour de l&apos;extrême nord de l&apos;Écosse.
            Le départ officiel se fait au château d&apos;Inverness. Direction ouest par la côte de Wester Ross,
            puis le cap au nord vers Durness, Tongue et John o&apos;Groats avant de redescendre par la côte est.
            En van, comptez 7 à 10 jours pour en profiter sans courir. Les routes sont étroites par endroits,
            les single-track roads avec passing places font partie du charme. Smoo Cave, Sandwood Bay,
            les plages de Balnakeil : chaque journée apporte son lot de paysages qui ne ressemblent à rien
            de ce que vous avez vu ailleurs en Europe.
          </p>

          <h3>Le Loch Ness et le Great Glen</h3>
          <p>
            Le loch le plus célèbre du monde s&apos;étire sur 37 km au sud-ouest d&apos;Inverness. La route A82
            longe sa rive ouest, avec des vues plongeantes sur l&apos;eau noire. Arrêtez-vous à Drumnadrochit
            pour le Loch Ness Centre, puis continuez vers les ruines d&apos;Urquhart Castle, perché
            sur un promontoire face au loch. Fort Augustus, au bout sud, marque l&apos;entrée du canal
            calédonien avec ses écluses en cascade. En van, plusieurs aires de stationnement jalonnent
            la route et certaines offrent un réveil face au loch.
          </p>

          <h3>Les Cairngorms depuis Inverness</h3>
          <p>
            Le parc national des Cairngorms, le plus grand de Grande-Bretagne, commence à 45 minutes
            de route au sud d&apos;Inverness. Aviemore, Kingussie et Newtonmore sont les portes d&apos;entrée.
            Randonnées en altitude, observation des cerfs et des aigles royaux, forêts de pins calédoniens
            à Rothiemurchus : le terrain est vaste. Le Cairngorm Mountain Railway monte à 1 085 mètres
            pour un panorama qui couvre la moitié nord de l&apos;Écosse par temps clair.
          </p>

          <h3>La côte du Moray Firth</h3>
          <p>
            À l&apos;est d&apos;Inverness, le Moray Firth abrite une colonie résidente de grands dauphins.
            Chanonry Point, à 20 minutes de la ville, est le meilleur spot d&apos;observation en Europe.
            Arrivez à marée montante et attendez : les dauphins chassent le saumon à quelques mètres
            du rivage. Le parking est gratuit et accessible en van. Plus à l&apos;est, les plages de Nairn
            et de Findhorn offrent du sable fin et des conditions de kitesurf réputées.
          </p>

          <h2>Itinéraires au départ d&apos;Inverness</h2>

          <h3>Boucle Loch Ness et Great Glen (2-3 jours)</h3>
          <p>
            Un circuit court mais dense pour commencer :
          </p>
          <ul>
            <li>Inverness → Drumnadrochit → Urquhart Castle (30 min) ;</li>
            <li>Urquhart Castle → Fort Augustus (30 min) ;</li>
            <li>Fort Augustus → <Link href="/location-van-ecosse-fort-william/">Fort William</Link> par le canal calédonien (1h) ;</li>
            <li>Fort William → Inverness par la A9 via Aviemore (2h).</li>
          </ul>

          <h3>North Coast 500 complète (7-10 jours)</h3>
          <p>
            Le grand classique, à parcourir dans le sens antihoraire pour garder la côte à gauche :
          </p>
          <ul>
            <li>Inverness → Applecross → Torridon (2-3 jours, côte ouest) ;</li>
            <li>Torridon → Ullapool → Durness (2 jours, nord-ouest) ;</li>
            <li>Durness → Tongue → John o&apos;Groats (1-2 jours, côte nord) ;</li>
            <li>John o&apos;Groats → Dunrobin Castle → Inverness (1-2 jours, côte est).</li>
          </ul>

          <h3>Grand tour des Highlands (14 jours)</h3>
          <p>
            Combinez la NC500 avec le Great Glen et les Cairngorms pour un
            <Link href="/road-trip-ecosse-van/"> road trip complet</Link>. Ajoutez l&apos;île de Skye
            (accessible par le pont depuis Kyle of Lochalsh) et une descente vers
            <Link href="/location-van-ecosse-oban/"> Oban</Link> pour les îles de l&apos;ouest.
            Consultez notre itinéraire de <Link href="/ecosse-en-van-2-semaines/">2 semaines en van</Link>.
          </p>

          <div className="my-12">
            <Image
              src="/images/highlands-adventure.jpg"
              alt="Route sinueuse à travers les Highlands près d'Inverness"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les routes des Highlands autour d&apos;Inverness traversent des paysages grandioses
            </p>
          </div>

          <h2>Conseils pratiques</h2>

          <h3>Meilleure période</h3>
          <p>
            Les Highlands du nord ont un climat changeant, mais les étés (juin à août) offrent
            jusqu&apos;à 18 heures de lumière par jour et des températures entre 12 et 20 °C.
            Mai et septembre sont plus calmes, avec des couleurs spectaculaires. L&apos;hiver est rude :
            routes enneigées, journées courtes (6 heures de lumière en décembre), mais les aurores
            boréales compensent pour ceux qui aiment l&apos;aventure.
          </p>

          <h3>Stationnement et aires de camping</h3>
          <p>
            La région d&apos;Inverness dispose de nombreux campings, des plus équipés aux plus rustiques.
            Le camping sauvage est autorisé en Écosse grâce au Scottish Outdoor Access Code, à condition
            de respecter les lieux. Sur la NC500, des aires dédiées aux campervans ont été aménagées
            pour répondre à l&apos;afflux de voyageurs. Consultez notre guide
            sur <Link href="/dormir-en-van-ecosse/">où dormir en van en Écosse</Link>.
          </p>

          <h3>Ravitaillement et carburant</h3>
          <p>
            Inverness est la dernière grande ville avant le nord sauvage. Faites le plein de courses
            et de carburant avant de partir sur la NC500. Au-delà d&apos;Ullapool, les stations-service
            se raréfient et les prix augmentent. Les supermarchés d&apos;Inverness (Tesco, Aldi, Lidl)
            sont regroupés dans le quartier de Inshes Retail Park.
          </p>

          <h3>Routes et conduite</h3>
          <p>
            L&apos;A9, l&apos;artère principale du nord de l&apos;Écosse, relie Inverness à Édimbourg et aux Cairngorms.
            Dès que vous quittez les axes principaux, attendez-vous à des single-track roads : une seule
            voie avec des passing places pour croiser. Roulez à votre rythme, laissez passer les locaux
            qui connaissent chaque virage, et profitez du paysage. En van, ces routes sont tout à fait
            praticables, mais les gabarits au-delà de 7 mètres seront serrés dans certains passages.
          </p>

          <h2>Prix de location à Inverness</h2>

          <p>
            Inverness possède quelques loueurs locaux de vans aménagés, et la demande explose en été
            sur la NC500. Les tarifs sont légèrement plus élevés qu&apos;à Édimbourg en haute saison :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 70-110 €/jour ;</li>
            <li><strong>Van moyen (California, Marco Polo) :</strong> 110-160 €/jour ;</li>
            <li><strong>Fourgon aménagé :</strong> 130-190 €/jour.</li>
          </ul>

          <p>
            Réservez au moins 3 mois à l&apos;avance pour l&apos;été. En mai ou septembre, les prix baissent
            et la disponibilité est meilleure. Consultez notre <Link href="/prix-location-van-ecosse/">guide des prix</Link> pour
            comparer les options.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van à Inverness"
          description="Comparez les offres de location et réservez le van idéal pour la North Coast 500 et les Highlands."
        />

        <div className="prose-custom">
          <h2>Se rendre à Inverness</h2>

          <h3>En avion</h3>
          <p>
            L&apos;aéroport d&apos;Inverness (INV) reçoit des vols depuis Londres (Gatwick, Luton, Heathrow),
            Amsterdam, Dublin et Bristol. Le trajet aéroport-centre ville prend 15 minutes en bus (Stagecoach ligne 11).
            C&apos;est l&apos;accès le plus direct aux Highlands sans passer par le sud.
          </p>

          <h3>En train</h3>
          <p>
            La ligne Inverness-Édimbourg traverse les Cairngorms en 3h30, avec des vues spectaculaires
            sur le col de Drumochter. Le Caledonian Sleeper relie Londres à Inverness en train de nuit :
            vous vous endormez à Euston et vous réveillez face aux Highlands. Une manière élégante
            d&apos;arriver sans prendre l&apos;avion.
          </p>

          <h3>Depuis Édimbourg ou Glasgow</h3>
          <p>
            Inverness se trouve à 2h45 d&apos;<Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> par
            l&apos;A9 et à 3h de <Link href="/location-van-ecosse-glasgow/">Glasgow</Link> par l&apos;A9 via Perth.
            Si vous louez votre van dans l&apos;une de ces villes, la route vers le nord est déjà un
            avant-goût du voyage : les paysages changent radicalement après Pitlochry.
          </p>

          <h2>Que voir à Inverness</h2>

          <p>
            Avant de prendre la route, accordez-vous une demi-journée en ville :
          </p>

          <ul>
            <li><strong>Inverness Castle :</strong> récemment rénové, le château offre une vue panoramique sur la rivière Ness et les Highlands depuis sa tour ;</li>
            <li><strong>Ness Islands :</strong> deux petites îles boisées reliées par des ponts suspendus au milieu de la rivière, promenade paisible à 5 minutes du centre ;</li>
            <li><strong>Victorian Market :</strong> marché couvert du XIXe siècle dans le centre, boutiques indépendantes et artisanat local ;</li>
            <li><strong>Leakey&apos;s Bookshop :</strong> la plus grande librairie d&apos;occasion d&apos;Écosse, installée dans une ancienne église avec un poêle à bois au centre ;</li>
            <li><strong>Clava Cairns :</strong> cercle de pierres vieux de 4 000 ans à 15 minutes d&apos;Inverness, bien moins touristique que Stonehenge et tout aussi impressionnant.</li>
          </ul>

          <p>
            Inverness est une ville compacte, chaleureuse, qui se parcourt à pied en quelques heures.
            La rivière Ness la traverse avec une lumière qui change d&apos;heure en heure. Un bon endroit
            pour se poser avant de filer vers le nord.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location à Inverness" />
      </article>
    </>
  );
}
