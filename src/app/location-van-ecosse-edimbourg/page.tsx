import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Location Van Écosse Edimbourg - Loueurs et Conseils',
  description: 'Louez un van a Edimbourg pour votre road trip en Écosse. Comparatif des loueurs, conseils pratiques et itineraires au depart de la capitale.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-edimbourg/',
  },
  openGraph: {
    title: 'Location Van Écosse Edimbourg - Loueurs et Conseils',
    description: 'Louez un van a Edimbourg pour votre road trip en Écosse. Comparatif et conseils.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-edimbourg/',
    images: [{ url: '/images/van-nature.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Edimbourg' },
];

const faqItems = [
  {
    question: 'Ou recuperer son van a Edimbourg ?',
    answer: 'La plupart des loueurs sont situes en peripherie d\'Edimbourg pour des raisons de stationnement. Certains proposent un service de navette depuis le centre-ville ou l\'aeroport. Verifiez les modalites lors de la reservation.',
  },
  {
    question: 'Peut-on stationner le van dans Edimbourg ?',
    answer: 'C\'est deconseille. Les rues sont etroites, le stationnement couteux et souvent interdit aux vehicules longs. Explorez la ville a pied avant ou apres votre road trip.',
  },
  {
    question: 'L\'aeroport d\'Edimbourg propose-t-il des locations de van ?',
    answer: 'Peu de loueurs de vans sont directement a l\'aeroport. La plupart necessitent un transfert (taxi, bus) vers leurs locaux situes dans la peripherie. Comptez 15-30 minutes de trajet.',
  },
  {
    question: 'Vaut-il mieux louer a Edimbourg ou Glasgow ?',
    answer: 'Edimbourg offre plus de choix et permet d\'acceder rapidement aux Highlands de l\'Est et au Loch Ness. Glasgow est mieux placee pour la cote Ouest et Skye. Choisissez selon votre itineraire.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Edimbourg',
  description: 'Tout savoir pour louer un van a Edimbourg et partir en road trip en Écosse.',
  image: 'https://www.explorescotlandvan.com/images/van-nature.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
};

export default function EdimbourgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location Van Edimbourg"
        subtitle="Le point de depart ideal pour votre aventure dans les Highlands"
        badge="Depart Edimbourg"
        image="/images/van-nature.jpg"
        imageAlt="Van stationne face a la nature ecossaise pres d'Edimbourg"
        stats={[
          { value: '50+', label: 'Vans disponibles' },
          { value: '2h', label: 'Des Highlands' },
          { value: '85€', label: 'Prix moyen /jour' },
          { value: '#1', label: 'Point de depart' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Edimbourg est le point de depart le plus populaire pour une <Link href="/">location de van en Écosse</Link>.
            La capitale ecossaise concentre le plus grand nombre de loueurs, offrant un large choix
            de vehicules et des tarifs competitifs. Ce guide vous aide a organiser votre depart
            depuis Edimbourg.
          </p>

          <h2>Pourquoi partir d&apos;Edimbourg ?</h2>

          <p>
            Choisir Edimbourg comme point de depart presente plusieurs avantages pour votre
            <Link href="/road-trip-ecosse-van/"> road trip en van</Link> :
          </p>

          <h3>Une offre abondante</h3>
          <p>
            Edimbourg concentre la majorite des loueurs de vans ecossais. Cette concurrence
            se traduit par des tarifs souvent plus avantageux et une disponibilite superieure,
            meme en haute saison. Vous trouverez des vans pour tous les budgets : du fourgon
            vintage au camping-car tout equipe.
          </p>

          <h3>Un acces rapide aux Highlands</h3>
          <p>
            Depuis Edimbourg, vous rejoignez les premiers paysages des Highlands en moins de
            2 heures. Le Loch Lomond, Stirling et les Trossachs sont a portee de main. Le
            celebre Loch Ness est a 3h30 de route.
          </p>

          <h3>La combinaison ville + nature</h3>
          <p>
            Arrivez la veille de votre location pour visiter Edimbourg : le chateau, la vieille
            ville, Arthur&apos;s Seat. C&apos;est une excellente introduction a l&apos;Ecosse avant de
            partir sur les routes.
          </p>

          <h2>Itineraires recommandes au depart d&apos;Edimbourg</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Link
              href="/ecosse-en-van-1-semaine/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">1 Semaine</h3>
              <p className="text-stone-600">
                Highlands centraux, Skye et Loch Ness. L&apos;essentiel de l&apos;Ecosse.
              </p>
            </Link>

            <Link
              href="/ecosse-en-van-2-semaines/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">2 Semaines</h3>
              <p className="text-stone-600">
                Le grand tour avec la North Coast 500. L&apos;Ecosse en profondeur.
              </p>
            </Link>
          </div>

          <h3>Boucle classique depuis Edimbourg</h3>
          <p>
            L&apos;itineraire le plus populaire forme une boucle :
          </p>
          <ul>
            <li>Edimbourg → Stirling → Loch Lomond (1h30)</li>
            <li>Loch Lomond → Glen Coe → Fort William (2h)</li>
            <li>Fort William → Ile de Skye (2h30)</li>
            <li>Skye → Loch Ness → Inverness (3h)</li>
            <li>Inverness → Cairngorms → Edimbourg (3h30)</li>
          </ul>

          <p>Cette boucle represente environ 800 km, ideale pour <Link href="/ecosse-en-van-1-semaine/">une semaine</Link>.</p>

          <div className="my-12">
            <Image
              src="/images/route-highlands.jpg"
              alt="Route panoramique des Highlands accessible depuis Edimbourg"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les Highlands sont a quelques heures d&apos;Edimbourg
            </p>
          </div>

          <h2>Conseils pratiques pour votre location a Edimbourg</h2>

          <h3>Horaires de prise en charge</h3>
          <p>
            La plupart des loueurs proposent des creneaux entre 9h et 17h. Prevoyez au moins
            30-45 minutes pour l&apos;etat des lieux et les explications. Si votre vol arrive
            tard, envisagez de passer la premiere nuit a Edimbourg et de recuperer le van
            le lendemain matin.
          </p>

          <h3>Stationnement a Edimbourg</h3>
          <p>
            Evitez d&apos;entrer dans le centre-ville avec votre van. Les rues sont etroites,
            le stationnement rare et couteux. Visitez Edimbourg a pied avant ou apres votre
            road trip. Si vous devez stationner, les Park &amp; Ride en peripherie sont
            l&apos;option la plus pratique.
          </p>

          <h3>Ravitaillement avant le depart</h3>
          <p>
            Faites vos courses avant de partir. Les grands supermarchés (Tesco, Sainsbury&apos;s,
            Asda) en peripherie offrent les meilleurs prix. Dans les Highlands, les options
            seront plus limitees et plus cheres.
          </p>

          <h2>Prix de location a Edimbourg</h2>

          <p>
            Les tarifs a Edimbourg sont generalement dans la moyenne ecossaise :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 60-100€/jour</li>
            <li><strong>Van moyen (California, Marco Polo) :</strong> 100-150€/jour</li>
            <li><strong>Fourgon amenage :</strong> 120-180€/jour</li>
          </ul>

          <p>
            Ces prix varient selon la saison. Consultez notre <Link href="/prix-location-van-ecosse/">guide
            complet des prix</Link> pour plus de details.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van a Edimbourg"
          description="Comparez les offres de location et reservez le van ideal pour votre aventure au depart d&apos;Edimbourg."
        />

        <div className="prose-custom">
          <h2>Se rendre a Edimbourg</h2>

          <h3>En avion</h3>
          <p>
            L&apos;aeroport d&apos;Edimbourg (EDI) est bien desservi depuis la France. Vols directs
            depuis Paris, Lyon, Bordeaux et d&apos;autres villes. Le trajet aeroport-centre ville
            prend 25-30 minutes en tramway.
          </p>

          <h3>En train</h3>
          <p>
            L&apos;Eurostar + train via Londres est une alternative ecologique. Comptez 6-7h
            depuis Paris. La gare de Waverley est en plein centre d&apos;Edimbourg.
          </p>

          <h3>En ferry</h3>
          <p>
            Des ferries relient la France (Dunkerque, Calais) aux ports anglais. Ensuite,
            comptez 6-7h de route jusqu&apos;a Edimbourg.
          </p>

          <h2>Explorer Edimbourg avant votre road trip</h2>

          <p>
            Profitez d&apos;une journee ou deux a Edimbourg avant de partir :
          </p>

          <ul>
            <li><strong>Le chateau d&apos;Edimbourg :</strong> Embleme de la ville, vue panoramique</li>
            <li><strong>Royal Mile :</strong> L&apos;artere historique entre le chateau et Holyrood Palace</li>
            <li><strong>Arthur&apos;s Seat :</strong> Randonnee urbaine avec vue sur la ville</li>
            <li><strong>New Town :</strong> Architecture georgienne et shopping</li>
            <li><strong>Pubs historiques :</strong> Whisky et ambiance ecossaise</li>
          </ul>

          <p>
            Une fois votre van en main, vous serez prets pour l&apos;aventure dans les Highlands.
            Bonne route !
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location a Edimbourg" />
      </article>
    </>
  );
}
