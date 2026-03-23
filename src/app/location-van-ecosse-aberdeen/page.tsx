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
  title: 'Location van Aberdeen : Castle Trail, Speyside &amp; côte est',
  description: 'Louez un van aménagé à Aberdeen, la Granite City. Accès direct au Castle Trail, à la route du whisky de Speyside et aux plages de la côte est écossaise.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-aberdeen/',
  },
  openGraph: {
    title: 'Location van Aberdeen : Castle Trail, Speyside &amp; côte est',
    description: 'Louez un van à Aberdeen et explorez les châteaux d&apos;Aberdeenshire, les distilleries du Speyside et les Cairngorms.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-aberdeen/',
    images: [{ url: '/images/campagne-ecosse.jpg' }],
  },
  twitter: {
    title: 'Location van Aberdeen : Castle Trail, Speyside &amp; côte est',
    description: 'Louez un van à Aberdeen et explorez les châteaux d&apos;Aberdeenshire, les distilleries du Speyside et les Cairngorms.',
    images: ['/images/campagne-ecosse.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Aberdeen' },
];

const faqItems = [
  {
    question: 'Combien de jours prévoir pour le Castle Trail en van ?',
    answer: 'Comptez 3 à 4 jours pour parcourir le Castle Trail dans de bonnes conditions. Le circuit relie 19 châteaux à travers l\'Aberdeenshire, avec des distances courtes entre chaque étape. En van, vous pouvez dormir sur place et profiter des visites dès l\'ouverture.',
  },
  {
    question: 'Aberdeen est-elle un bon point de départ pour le Speyside ?',
    answer: 'Aberdeen se trouve à environ 1h30 du cœur du Speyside, la plus grande région productrice de whisky d\'Écosse. C\'est un point de départ très pratique, surtout en van : vous traversez les Cairngorms en chemin, ce qui ajoute des paysages spectaculaires à votre trajet.',
  },
  {
    question: 'Où stationner son van à Aberdeen ?',
    answer: 'Le centre-ville d\'Aberdeen est accessible en van, mais le stationnement est limité et payant. Privilégiez les Park &amp; Ride en périphérie (Bridge of Don, Kingswells) et rejoignez le centre en bus. Pour la nuit, plusieurs campings se trouvent à moins de 30 minutes.',
  },
  {
    question: 'Peut-on accéder aux plages de la côte est en van ?',
    answer: 'La côte est de l\'Aberdeenshire offre de nombreuses plages accessibles en van. Balmedie Beach au nord d\'Aberdeen, Cruden Bay et les plages autour de Peterhead disposent de parkings adaptés. Certains campings en bord de mer accueillent les vans directement sur le littoral.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Aberdeen',
  description: 'Louez un van à Aberdeen pour explorer le Castle Trail, le Speyside et la côte est écossaise.',
  image: 'https://www.explorescotlandvan.com/images/campagne-ecosse.jpg',
  datePublished: '2026-04-04',
  dateModified: '2026-04-04',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function AberdeenPage() {
  const publishDate = new Date('2026-04-04T08:00:00.000Z');
  if (new Date() < publishDate) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Aberdeen"
        subtitle="La Granite City, porte d&apos;entrée du Castle Trail et du Speyside"
        badge="Départ Aberdeen"
        image="/images/campagne-ecosse.jpg"
        imageAlt="Campagne écossaise de l&apos;Aberdeenshire près d&apos;Aberdeen"
        stats={[
          { value: '3e', label: 'Ville d&apos;Écosse' },
          { value: '19', label: 'Châteaux (Castle Trail)' },
          { value: '1h30', label: 'Du Speyside' },
          { value: '1h', label: 'Des Cairngorms' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Aberdeen, surnommée la Granite City pour ses bâtiments en granit argenté, est un point de départ
            méconnu mais redoutablement efficace pour un <Link href="/">road trip en van en Écosse</Link>.
            Troisième ville du pays, elle ouvre les portes du Castle Trail, de la route du whisky
            de Speyside et des plages sauvages de la côte est. Un départ qui change tout.
          </p>

          <h2>Pourquoi Aberdeen ?</h2>

          <p>
            Alors que la plupart des voyageurs partent d&apos;<Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> ou
            de <Link href="/location-van-ecosse-glasgow/">Glasgow</Link>, Aberdeen offre un avantage considérable :
            vous êtes déjà au cœur de l&apos;action. Pas besoin de rouler des heures pour atteindre les premiers
            sites remarquables.
          </p>

          <h3>Le Castle Trail : 19 châteaux en Aberdeenshire</h3>
          <p>
            L&apos;Aberdeenshire possède la plus forte concentration de châteaux par hectare au Royaume-Uni.
            Le Castle Trail, seul itinéraire dédié aux châteaux en Écosse, en relie 19 à travers
            la campagne vallonnée. De Dunnottar Castle, perché sur ses falaises face à la mer du Nord,
            au château de Balmoral, résidence d&apos;été de la famille royale, chaque étape raconte
            des siècles d&apos;histoire. En van, vous suivez les panneaux marron et blancs à votre rythme,
            en dormant au plus près des sites.
          </p>

          <h3>Le Speyside et la route du whisky</h3>
          <p>
            À 1h30 d&apos;Aberdeen, le Speyside concentre plus de la moitié des distilleries de whisky
            d&apos;Écosse. La route traverse le parc national des Cairngorms, passe par le col du Lecht
            et mène à des distilleries comme Cardhu, Glenfiddich ou Macallan. Le Speyside Cooperage
            vous montre l&apos;art de la fabrication des fûts de chêne. En van, vous pouvez passer
            la nuit sur place et reprendre la route le lendemain, sans contrainte d&apos;horaires.
          </p>

          <h3>La côte est et ses plages</h3>
          <p>
            La côte de l&apos;Aberdeenshire est une succession de plages de sable, de criques et de
            villages de pêcheurs. Balmedie Beach, à 15 minutes d&apos;Aberdeen, offre des kilomètres
            de dunes. Plus au nord, Cruden Bay et les falaises de Slains Castle ont inspiré Bram Stoker
            pour Dracula. À Peterhead, point le plus à l&apos;est de l&apos;Écosse continentale, les
            surfeurs profitent des vagues de la mer du Nord.
          </p>

          <h3>Accès aux Cairngorms</h3>
          <p>
            Le parc national des Cairngorms, le plus grand de Grande-Bretagne, se trouve à environ
            1 heure de route d&apos;Aberdeen par la A93. Randonnées, observation de la faune (cerfs,
            aigles royaux, écureuils roux) et villages de montagne comme Braemar ou Ballater :
            c&apos;est le terrain de jeu parfait pour les amoureux de nature en van.
          </p>

          <h2>Itinéraires au départ d&apos;Aberdeen</h2>

          <h3>Boucle Castle Trail (3-4 jours)</h3>
          <p>
            Un circuit compact qui fait le tour des châteaux de l&apos;Aberdeenshire :
          </p>
          <ul>
            <li>Aberdeen → Drum Castle → Crathes Castle (30 min)</li>
            <li>Crathes → Balmoral → Braemar (1h)</li>
            <li>Braemar → Kildrummy → Huntly Castle (1h30)</li>
            <li>Huntly → Fyvie Castle → Dunnottar → Aberdeen (2h)</li>
          </ul>

          <h3>Boucle Speyside &amp; Cairngorms (5-7 jours)</h3>
          <p>
            Combinez whisky, montagne et côte :
          </p>
          <ul>
            <li>Aberdeen → Cairngorms → Braemar (1h30)</li>
            <li>Braemar → Tomintoul → Speyside (1h30)</li>
            <li>Speyside → Elgin → côte du Moray Firth (1h)</li>
            <li>Moray Firth → Pennan → Fraserburgh → Aberdeen (2h30)</li>
          </ul>

          <h3>Grand tour nord-est (10-14 jours)</h3>
          <p>
            Pour un <Link href="/road-trip-ecosse-van/">road trip complet</Link>, combinez les
            deux boucles précédentes et ajoutez la côte nord vers Inverness, le Loch Ness
            et un retour par les Highlands centraux. Consultez notre itinéraire
            de <Link href="/ecosse-en-van-2-semaines/">2 semaines en van</Link> pour plus de détails.
          </p>

          <div className="my-12">
            <Image
              src="/images/campagne-ecosse.jpg"
              alt="Route de campagne dans l&apos;Aberdeenshire, idéale pour un road trip en van"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les routes de l&apos;Aberdeenshire traversent une campagne préservée
            </p>
          </div>

          <h2>Conseils pratiques</h2>

          <h3>Meilleure période</h3>
          <p>
            La côte est de l&apos;Écosse bénéficie d&apos;un climat plus sec que l&apos;ouest.
            Aberdeen reçoit moins de pluie qu&apos;Édimbourg ou Glasgow. De mai à septembre,
            les conditions sont idéales pour le van. Le Castle Trail et les distilleries
            sont ouverts toute l&apos;année, mais certains châteaux ferment en hiver.
          </p>

          <h3>Stationnement et aires de camping</h3>
          <p>
            L&apos;Aberdeenshire compte de nombreux campings accueillant les vans, souvent en
            bord de mer ou à proximité des châteaux. Le camping sauvage est toléré en Écosse
            (Scottish Outdoor Access Code), mais restez discret et respectueux. Consultez
            notre guide sur <Link href="/dormir-en-van-ecosse/">où dormir en van en Écosse</Link>.
          </p>

          <h3>Ravitaillement</h3>
          <p>
            Aberdeen dispose de tous les grands supermarchés (Tesco, Asda, Sainsbury&apos;s, Lidl).
            Faites le plein de provisions avant de partir vers les zones plus rurales. Dans
            les villages de l&apos;Aberdeenshire, vous trouverez des épiceries locales et des
            farm shops avec des produits frais.
          </p>

          <h3>Routes et conduite</h3>
          <p>
            Les routes principales autour d&apos;Aberdeen (A90, A93, A96) sont en bon état et
            faciles à conduire, même en van. Les routes secondaires du Castle Trail sont
            plus étroites mais bien entretenues. Les panneaux marron du Castle Trail sont
            faciles à suivre.
          </p>

          <h2>Prix de location à Aberdeen</h2>

          <p>
            L&apos;offre de location de vans à Aberdeen est plus réduite qu&apos;à Édimbourg, mais
            quelques loueurs locaux proposent des véhicules bien équipés. Les tarifs sont
            comparables au reste de l&apos;Écosse :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 60-100 &euro;/jour</li>
            <li><strong>Van moyen (California, Marco Polo) :</strong> 100-150 &euro;/jour</li>
            <li><strong>Fourgon aménagé :</strong> 120-180 &euro;/jour</li>
          </ul>

          <p>
            Réservez tôt, surtout entre juin et août : le choix à Aberdeen part vite.
            Consultez notre <Link href="/prix-location-van-ecosse/">guide des prix</Link> pour
            comparer les options.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van à Aberdeen"
          description="Comparez les offres de location et réservez le van idéal pour explorer le Castle Trail et le Speyside."
        />

        <div className="prose-custom">
          <h2>Se rendre à Aberdeen</h2>

          <h3>En avion</h3>
          <p>
            L&apos;aéroport d&apos;Aberdeen (ABZ) reçoit des vols depuis Londres, Amsterdam,
            Paris (avec escale) et d&apos;autres villes européennes. Le trajet aéroport-centre
            ville prend environ 30 minutes en bus (lignes 727 et X27).
          </p>

          <h3>En train</h3>
          <p>
            La gare d&apos;Aberdeen est reliée à Édimbourg (2h30), Glasgow (2h45) et Londres
            (7h avec le Caledonian Sleeper, train de nuit). Une option confortable pour
            rejoindre Aberdeen sans prendre l&apos;avion.
          </p>

          <h3>Depuis Édimbourg ou Glasgow</h3>
          <p>
            Si vous atterrissez à <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> ou
            à <Link href="/location-van-ecosse-glasgow/">Glasgow</Link>, Aberdeen se trouve
            à 2h30 de route par l&apos;A90. Vous pouvez aussi louer votre van dans l&apos;une
            de ces villes et rouler jusqu&apos;à Aberdeen pour commencer votre circuit.
          </p>

          <h2>Que voir à Aberdeen</h2>

          <p>
            Avant de prendre la route, consacrez une journée à la ville :
          </p>

          <ul>
            <li><strong>Old Aberdeen :</strong> Le quartier historique avec la cathédrale St Machar et l&apos;université, fondée en 1495</li>
            <li><strong>Marischal College :</strong> Le deuxième plus grand bâtiment en granit au monde, façade spectaculaire</li>
            <li><strong>Aberdeen Beach :</strong> Deux kilomètres de sable en plein centre-ville, promenade et front de mer</li>
            <li><strong>Footdee (Fittie) :</strong> Ancien village de pêcheurs niché au bout du port, ruelles colorées</li>
            <li><strong>Marché de Union Street :</strong> Boutiques indépendantes et pubs traditionnels dans l&apos;artère principale</li>
          </ul>

          <p>
            Aberdeen est une ville à taille humaine, que l&apos;on parcourt facilement à pied en une journée.
            Le granit argenté des façades prend des reflets différents selon la lumière, ce qui lui
            vaut aussi le surnom de Silver City.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location à Aberdeen" />
      </article>
    </>
  );
}
