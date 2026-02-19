import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Location van Édimbourg : départ idéal pour les Highlands',
  description: 'Louez un van aménagé à Édimbourg, porte d\'entrée des Highlands. Récupération à l\'aéroport, meilleurs loueurs et conseils pratiques.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-edimbourg/',
  },
  openGraph: {
    title: 'Location van Édimbourg : départ idéal pour les Highlands',
    description: 'Louez un van aménagé à Édimbourg. Récupération aéroport et meilleurs loueurs.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-edimbourg/',
    images: [{ url: '/images/van-nature.jpg' }],
  },
  twitter: {
    title: 'Location van Édimbourg : départ idéal pour les Highlands',
    description: 'Louez un van aménagé à Édimbourg. Récupération aéroport et meilleurs loueurs.',
    images: ['/images/van-nature.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Édimbourg' },
];

const faqItems = [
  {
    question: 'Où récupérer son van à Édimbourg ?',
    answer: 'La plupart des loueurs sont situés en périphérie d\'Édimbourg pour des raisons de stationnement. Certains proposent un service de navette depuis le centre-ville ou l\'aéroport. Vérifiez les modalités lors de la réservation.',
  },
  {
    question: 'Peut-on stationner le van dans Édimbourg ?',
    answer: 'C\'est déconseillé. Les rues sont étroites, le stationnement coûteux et souvent interdit aux véhicules longs. Explorez la ville à pied avant ou après votre road trip.',
  },
  {
    question: 'L\'aéroport d\'Édimbourg propose-t-il des locations de van ?',
    answer: 'Peu de loueurs de vans sont directement à l\'aéroport. La plupart nécessitent un transfert (taxi, bus) vers leurs locaux situés dans la périphérie. Comptez 15-30 minutes de trajet.',
  },
  {
    question: 'Vaut-il mieux louer à Édimbourg ou Glasgow ?',
    answer: 'Édimbourg offre plus de choix et permet d\'accéder rapidement aux Highlands de l\'Est et au Loch Ness. Glasgow est mieux placée pour la côte Ouest et Skye. Choisissez selon votre itinéraire.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Édimbourg',
  description: 'Tout savoir pour louer un van à Édimbourg et partir en road trip en Écosse.',
  image: 'https://www.explorescotlandvan.com/images/van-nature.jpg',
  datePublished: '2026-01-25',
  dateModified: '2026-02-19',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function EdimbourgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Édimbourg"
        subtitle="Votre point de départ idéal pour explorer les Highlands"
        badge="Départ Édimbourg"
        image="/images/van-nature.jpg"
        imageAlt="Van stationné face à la nature écossaise près d'Édimbourg"
        stats={[
          { value: '50+', label: 'Vans disponibles' },
          { value: '2h', label: 'Des Highlands' },
          { value: '85€', label: 'Prix moyen /jour' },
          { value: '#1', label: 'Point de départ' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Édimbourg est le point de départ le plus populaire pour une <Link href="/">location de van en Écosse</Link>.
            La capitale écossaise concentre le plus grand nombre de loueurs, offrant un large choix
            de véhicules et des tarifs compétitifs. Ce guide vous aide à organiser votre départ
            depuis Édimbourg.
          </p>

          <h2>Pourquoi partir d&apos;Édimbourg ?</h2>

          <p>
            Choisir Édimbourg comme point de départ présente plusieurs avantages pour votre
            <Link href="/road-trip-ecosse-van/"> road trip en van</Link> :
          </p>

          <h3>Une offre abondante</h3>
          <p>
            Édimbourg concentre la majorité des loueurs de vans écossais. Cette concurrence
            se traduit par des tarifs souvent plus avantageux et une disponibilité supérieure,
            même en haute saison. Vous trouverez des vans pour tous les budgets : du fourgon
            vintage au camping-car tout équipé.
          </p>

          <h3>Un accès rapide aux Highlands</h3>
          <p>
            Depuis Édimbourg, vous rejoignez les premiers paysages des Highlands en moins de
            2 heures. Le Loch Lomond, Stirling et les Trossachs sont à portée de main. Le
            célèbre Loch Ness est à 3h30 de route.
          </p>

          <h3>La combinaison ville + nature</h3>
          <p>
            Arrivez la veille de votre location pour visiter Édimbourg : le château, la vieille
            ville, Arthur&apos;s Seat. C&apos;est une excellente introduction à l&apos;Écosse avant de
            partir sur les routes.
          </p>

          <h2>Itinéraires recommandés au départ d&apos;Édimbourg</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Link
              href="/ecosse-en-van-1-semaine/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">1 Semaine</h3>
              <p className="text-stone-600">
                Highlands centraux, Skye et Loch Ness. L&apos;essentiel de l&apos;Écosse.
              </p>
            </Link>

            <Link
              href="/ecosse-en-van-2-semaines/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">2 Semaines</h3>
              <p className="text-stone-600">
                Le grand tour avec la North Coast 500. L&apos;Écosse en profondeur.
              </p>
            </Link>
          </div>

          <h3>Boucle classique depuis Édimbourg</h3>
          <p>
            L&apos;itinéraire le plus populaire forme une boucle :
          </p>
          <ul>
            <li>Édimbourg → Stirling → Loch Lomond (1h30)</li>
            <li>Loch Lomond → Glen Coe → Fort William (2h)</li>
            <li>Fort William → Île de Skye (2h30)</li>
            <li>Skye → Loch Ness → Inverness (3h)</li>
            <li>Inverness → Cairngorms → Édimbourg (3h30)</li>
          </ul>

          <p>Cette boucle représente environ 800 km, idéale pour <Link href="/ecosse-en-van-1-semaine/">une semaine</Link>.</p>

          <div className="my-12">
            <Image
              src="/images/route-highlands.jpg"
              alt="Route panoramique des Highlands accessible depuis Édimbourg"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les Highlands sont à quelques heures d&apos;Édimbourg
            </p>
          </div>

          <h2>Conseils pratiques pour votre location à Édimbourg</h2>

          <h3>Horaires de prise en charge</h3>
          <p>
            La plupart des loueurs proposent des créneaux entre 9h et 17h. Prévoyez au moins
            30-45 minutes pour l&apos;état des lieux et les explications. Si votre vol arrive
            tard, envisagez de passer la première nuit à Édimbourg et de récupérer le van
            le lendemain matin.
          </p>

          <h3>Stationnement à Édimbourg</h3>
          <p>
            Évitez d&apos;entrer dans le centre-ville avec votre van. Les rues sont étroites,
            le stationnement rare et coûteux. Visitez Édimbourg à pied avant ou après votre
            road trip. Si vous devez stationner, les Park &amp; Ride en périphérie sont
            l&apos;option la plus pratique.
          </p>

          <h3>Ravitaillement avant le départ</h3>
          <p>
            Faites vos courses avant de partir. Les grands supermarchés (Tesco, Sainsbury&apos;s,
            Asda) en périphérie offrent les meilleurs prix. Dans les Highlands, les options
            seront plus limitées et plus chères.
          </p>

          <h2>Prix de location à Édimbourg</h2>

          <p>
            Les tarifs à Édimbourg sont généralement dans la moyenne écossaise :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 60-100€/jour</li>
            <li><strong>Van moyen (California, Marco Polo) :</strong> 100-150€/jour</li>
            <li><strong>Fourgon aménagé :</strong> 120-180€/jour</li>
          </ul>

          <p>
            Ces prix varient selon la saison. Consultez notre <Link href="/prix-location-van-ecosse/">guide
            complet des prix</Link> pour plus de détails.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van à Édimbourg"
          description="Comparez les offres de location et réservez le van idéal pour votre aventure au départ d&apos;Édimbourg."
        />

        <div className="prose-custom">
          <h2>Se rendre à Édimbourg</h2>

          <h3>En avion</h3>
          <p>
            L&apos;aéroport d&apos;Édimbourg (EDI) est bien desservi depuis la France. Vols directs
            depuis Paris, Lyon, Bordeaux et d&apos;autres villes. Le trajet aéroport-centre ville
            prend 25-30 minutes en tramway.
          </p>

          <h3>En train</h3>
          <p>
            L&apos;Eurostar + train via Londres est une alternative écologique. Comptez 6-7h
            depuis Paris. La gare de Waverley est en plein centre d&apos;Édimbourg.
          </p>

          <h3>En ferry</h3>
          <p>
            Des ferries relient la France (Dunkerque, Calais) aux ports anglais. Ensuite,
            comptez 6-7h de route jusqu&apos;à Édimbourg.
          </p>

          <h2>Explorer Édimbourg avant votre road trip</h2>

          <p>
            Profitez d&apos;une journée ou deux à Édimbourg avant de partir :
          </p>

          <ul>
            <li><strong>Le château d&apos;Édimbourg :</strong> Emblème de la ville, vue panoramique</li>
            <li><strong>Royal Mile :</strong> L&apos;artère historique entre le château et Holyrood Palace</li>
            <li><strong>Arthur&apos;s Seat :</strong> Randonnée urbaine avec vue sur la ville</li>
            <li><strong>New Town :</strong> Architecture georgienne et shopping</li>
            <li><strong>Pubs historiques :</strong> Whisky et ambiance écossaise</li>
          </ul>

          <p>
            Une fois votre van en main, vous serez prêts pour l&apos;aventure dans les Highlands.
            Bonne route !
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location à Édimbourg" />
      </article>
    </>
  );
}
