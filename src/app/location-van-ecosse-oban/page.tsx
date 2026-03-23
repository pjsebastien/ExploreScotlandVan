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
  title: 'Location van Oban : porte des îles écossaises',
  description: 'Louez un van aménagé à Oban, capitale du seafood et porte d\'entrée vers Mull, Iona et les Hébrides. Ferries CalMac, itinéraires et conseils pratiques.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-oban/',
  },
  openGraph: {
    title: 'Location van Oban : porte des îles écossaises',
    description: 'Louez un van à Oban et embarquez vers Mull, Iona et les Hébrides. Guide complet.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-oban/',
    images: [{ url: '/images/roadtrip-mer-montagne.jpg' }],
  },
  twitter: {
    title: 'Location van Oban : porte des îles écossaises',
    description: 'Louez un van à Oban et embarquez vers Mull, Iona et les Hébrides. Guide complet.',
    images: ['/images/roadtrip-mer-montagne.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Oban' },
];

const faqItems = [
  {
    question: 'Peut-on prendre le ferry CalMac avec un van aménagé ?',
    answer: 'Oui, les ferries CalMac acceptent les vans et camping-cars. Réservez votre traversée à l\'avance sur calmac.co.uk, surtout en été. Le tarif dépend de la longueur du véhicule : un van de moins de 6 mètres bénéficie du tarif standard.',
  },
  {
    question: 'Où stationner son van à Oban ?',
    answer: 'Le parking de Lochavullin (gratuit, proche du centre) convient aux vans. Le parking du ferry terminal est réservé aux voyageurs embarquant. Évitez les rues étroites du centre-ville. Plusieurs aires de camping se trouvent à quelques minutes de la ville.',
  },
  {
    question: 'Combien de temps faut-il pour visiter Mull et Iona depuis Oban ?',
    answer: 'Comptez une journée complète au minimum. Le ferry Oban-Craignure dure 45 minutes, puis il faut traverser Mull en voiture (1h) jusqu\'à Fionnphort pour prendre le ferry vers Iona (10 min). Deux jours permettent un rythme plus confortable.',
  },
  {
    question: 'Quelle est la meilleure saison pour visiter Oban en van ?',
    answer: 'De mai à septembre pour la météo et les longues journées. Juillet-août offrent les meilleures conditions mais aussi la plus forte affluence sur les ferries. Mai-juin et septembre sont un bon compromis entre météo favorable et tranquillité.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Oban',
  description: 'Tout savoir pour louer un van à Oban, la porte des îles écossaises, et partir en road trip sur la côte ouest.',
  image: 'https://www.explorescotlandvan.com/images/roadtrip-mer-montagne.jpg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function ObanPage() {
  const publishDate = new Date('2026-04-10T08:00:00.000Z');
  if (new Date() < publishDate) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Location de van à Oban"
        subtitle="La porte des îles et capitale du seafood écossais"
        badge="Départ Oban"
        image="/images/roadtrip-mer-montagne.jpg"
        imageAlt="Vue sur la baie d'Oban et les îles écossaises depuis la côte ouest"
        stats={[
          { value: '23', label: 'Îles accessibles' },
          { value: '#1', label: 'Seafood en Écosse' },
          { value: '45 min', label: 'Ferry vers Mull' },
          { value: '1794', label: 'Distillerie historique' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Oban est une petite ville portuaire nichée sur la côte ouest de l&apos;Écosse, connue comme
            la « capitale du seafood » et la « porte des îles ». Depuis son port, les ferries CalMac
            relient 23 îles des Hébrides intérieures et extérieures. Pour une <Link href="/">location
            de van en Écosse</Link>, c&apos;est une base parfaite pour combiner road trip côtier et
            escapades insulaires.
          </p>

          <h2>Pourquoi Oban ?</h2>

          <h3>La porte vers les îles</h3>
          <p>
            Oban est le principal port de la côte ouest écossaise. Les ferries CalMac partent
            quotidiennement vers Mull, Iona, Coll, Tiree, Colonsay, Barra et les Hébrides
            extérieures. L&apos;île de Kerrera, juste en face de la baie, est accessible en
            quelques minutes. C&apos;est le point de départ idéal pour toute aventure insulaire.
          </p>

          <h3>Capitale du seafood</h3>
          <p>
            Les bateaux de pêche déchargent leur prise chaque jour sur le Railway Pier. Le célèbre
            Oban Seafood Hut propose des plateaux de fruits de mer, des sandwichs aux crevettes
            et des moules au vin blanc directement sur le quai. Le restaurant Ee-Usk, sur le North
            Pier, sert des coquilles Saint-Jacques de Mull et du homard de Luing. Pour les amateurs
            de poisson frais, Oban est un passage obligé.
          </p>

          <h3>Un cadre spectaculaire</h3>
          <p>
            La ville s&apos;étend en amphithéâtre autour de sa baie, dominée par la silhouette de
            McCaig&apos;s Tower, un monument de granit construit en 1897 qui offre un panorama sur
            les îles de Mull, Lismore et Kerrera. La lumière de la côte ouest, les couchers de
            soleil sur l&apos;Atlantique et les montagnes en toile de fond créent un décor
            saisissant.
          </p>

          <h2>Itinéraires au départ d&apos;Oban</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="block p-6 bg-forest-50 rounded-xl">
              <h3 className="text-xl font-semibold text-forest-800 mb-2">Mull + Iona en une journée</h3>
              <p className="text-stone-600">
                Ferry Oban-Craignure (45 min), traversée de Mull, ferry Fionnphort-Iona (10 min).
                L&apos;abbaye d&apos;Iona et ses plages de sable blanc.
              </p>
            </div>

            <div className="block p-6 bg-forest-50 rounded-xl">
              <h3 className="text-xl font-semibold text-forest-800 mb-2">Péninsule de Kintyre</h3>
              <p className="text-stone-600">
                Descendez vers le sud par la A816 jusqu&apos;à Lochgilphead, puis Tarbert et la
                péninsule de Kintyre. Paysages côtiers sauvages.
              </p>
            </div>
          </div>

          <h3>Route vers Fort William et les Highlands</h3>
          <p>
            Depuis Oban, la A828 longe le littoral vers le nord en passant par le pont de Connel
            et le château de Stalker (visible depuis la route). Vous rejoignez Fort William en
            1h30, porte d&apos;entrée du Ben Nevis et de Glen Coe. C&apos;est un tronçon parmi les
            plus beaux de la côte ouest, avec vue sur le Loch Linnhe et les montagnes de Morvern.
          </p>

          <p>
            Pour un road trip plus long, consultez notre itinéraire
            <Link href="/ecosse-en-van-1-semaine/"> Écosse en van 1 semaine</Link> ou
            l&apos;itinéraire <Link href="/ecosse-en-van-2-semaines/">2 semaines</Link> qui
            intègre la côte ouest.
          </p>

          <div className="my-12">
            <Image
              src="/images/roadtrip-mer-montagne.jpg"
              alt="Route côtière de la côte ouest écossaise près d'Oban"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La côte ouest autour d&apos;Oban : mer, montagnes et routes sinueuses
            </p>
          </div>

          <h2>Conseils pratiques</h2>

          <h3>Réservation des ferries CalMac</h3>
          <p>
            Les ferries CalMac vers Mull effectuent 9 à 10 traversées par jour en haute saison,
            mais les places pour les véhicules partent vite. Réservez en ligne sur calmac.co.uk
            dès que votre programme est fixé. En juillet-août, les traversées du matin et du soir
            affichent souvent complet plusieurs semaines à l&apos;avance.
          </p>

          <h3>Stationnement à Oban</h3>
          <p>
            Le parking de Lochavullin, à deux pas du centre, est gratuit et adapté aux vans.
            Évitez les rues étroites du centre-ville avec un véhicule large. Le parking du
            terminal ferry est réservé aux passagers en partance. Plusieurs aires de camping
            se trouvent à moins de 10 minutes de la ville.
          </p>

          <h3>Ravitaillement et services</h3>
          <p>
            Oban dispose d&apos;un Tesco et de commerces de proximité. Faites le plein de
            provisions avant de prendre le ferry : les îles offrent moins de choix et des prix
            plus élevés. La station-service à l&apos;entrée de la ville est la dernière avant
            de nombreux kilomètres vers le nord.
          </p>

          <h2>Prix de location</h2>

          <p>
            Oban n&apos;est pas un point de départ classique pour la location de van. La plupart
            des loueurs sont basés à <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> ou
            à <Link href="/location-van-ecosse-glasgow/">Glasgow</Link>. Comptez 2h30 de route
            depuis Glasgow (A82 puis A85) pour rejoindre Oban. Les tarifs de location restent
            les mêmes :
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
          title="Trouvez votre van pour Oban"
          description="Comparez les offres de location et réservez le van idéal pour votre aventure sur la côte ouest et les îles."
        />

        <div className="prose-custom">
          <h2>Se rendre à Oban</h2>

          <h3>En voiture ou en van</h3>
          <p>
            Depuis Glasgow, prenez la A82 vers le nord puis la A85 à Crianlarich. Le trajet dure
            environ 2h30 pour 150 km. Depuis Stirling, la A85 traverse le Loch Earn et le Glen
            Ogle avant de descendre vers la côte. La route est panoramique et les single track
            roads sont rares sur cet axe principal.
          </p>

          <h3>En train</h3>
          <p>
            Le train ScotRail relie Glasgow Queen Street à Oban en 3h. C&apos;est l&apos;une des
            plus belles lignes ferroviaires du Royaume-Uni, longeant lochs et montagnes. Trois
            départs par jour en semaine. Une option pour ceux qui récupèrent leur van à Glasgow
            et souhaitent commencer leur road trip à Oban.
          </p>

          <h3>Depuis Édimbourg</h3>
          <p>
            Comptez 3h de route via l&apos;autoroute M9 vers Stirling puis la A85. En train,
            un changement à Glasgow Queen Street est nécessaire, pour un trajet total d&apos;environ
            4h30.
          </p>

          <h2>Que voir à Oban</h2>

          <ul>
            <li><strong>McCaig&apos;s Tower :</strong> Monument en granit sur la colline, panorama sur la baie et les îles. Accès gratuit, 10 minutes de montée depuis le centre.</li>
            <li><strong>Oban Distillery :</strong> Fondée en 1794, l&apos;une des plus anciennes et des plus petites distilleries d&apos;Écosse. Visite guidée et dégustation au cœur de la ville.</li>
            <li><strong>Railway Pier et Seafood Hut :</strong> Fruits de mer frais directement sur le quai, face au port. Une adresse incontournable.</li>
            <li><strong>Île de Kerrera :</strong> Accessible en quelques minutes de bateau, sentiers de randonnée et ruines du château de Gylen.</li>
            <li><strong>Ganavan Sands :</strong> Plage de sable à 2 km du centre, idéale pour une balade en fin de journée.</li>
            <li><strong>Dunollie Castle :</strong> Ruines d&apos;un château du XIIIe siècle surplombant la baie, à 15 minutes à pied du centre.</li>
          </ul>

          <p>
            Oban est une étape que l&apos;on ne regrette jamais sur un <Link href="/road-trip-ecosse-van/">road
            trip en van en Écosse</Link>. Entre les fruits de mer sur le port, les ferries vers les îles
            et les routes côtières vers Fort William, cette petite ville de l&apos;Argyll mérite au
            moins une nuit de votre itinéraire.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location à Oban" />
      </article>
    </>
  );
}
