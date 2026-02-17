import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Écosse en Van 2 Semaines - Le Grand Tour',
  description: 'Itineraire de 2 semaines en van en Écosse : North Coast 500, Skye, Highlands et plus encore. Jour par jour avec conseils pratiques.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/ecosse-en-van-2-semaines/',
  },
  openGraph: {
    title: 'Écosse en Van 2 Semaines - Le Grand Tour',
    description: 'Itineraire de 2 semaines en van en Écosse : NC500, Skye, Highlands. Jour par jour.',
    url: 'https://www.explorescotlandvan.com/ecosse-en-van-2-semaines/',
    images: [{ url: '/images/north-coast-500.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-ecosse-van/' },
  { name: 'Écosse 2 Semaines' },
];

const faqItems = [
  {
    question: 'Peut-on faire tout l\'itineraire en moins de 2 semaines ?',
    answer: 'C\'est deconseille. Cet itineraire est deja optimise pour 14 jours. Le reduire signifierait passer plus de temps sur la route qu\'a profiter des sites. Pour moins de temps, consultez notre itineraire d\'1 semaine.',
  },
  {
    question: 'Quel est le meilleur sens pour la North Coast 500 ?',
    answer: 'Les deux sens ont leurs avantages. Le sens horaire (vers l\'ouest d\'abord) offre la cote sauvage en premier. Le sens anti-horaire garde le meilleur pour la fin. Nous recommandons le sens horaire.',
  },
  {
    question: 'Faut-il un 4x4 pour cet itineraire ?',
    answer: 'Non, un van standard suffit pour toutes les routes de cet itineraire. Certaines routes sont etroites (single track) mais goudronnees et praticables par tous les vehicules.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Écosse en Van 2 Semaines',
  description: 'Itineraire de 2 semaines en van en Écosse avec la North Coast 500 et plus.',
  image: 'https://www.explorescotlandvan.com/images/north-coast-500.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
};

export default function DeuxSemainesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Écosse en Van : 2 Semaines"
        subtitle="Le grand tour incluant la legendaire North Coast 500"
        badge="Itineraire 14 jours"
        image="/images/north-coast-500.jpg"
        imageAlt="Van sur la North Coast 500 pour un road trip de 2 semaines"
        stats={[
          { value: '14', label: 'Jours d\'aventure' },
          { value: '1800 km', label: 'A parcourir' },
          { value: 'NC500', label: 'Incluse' },
          { value: '3000€', label: 'Budget moyen' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Deux semaines representent la duree ideale pour explorer l&apos;Écosse en van. Cet itineraire
            ambitieux combine la celebre <strong>North Coast 500</strong>, l&apos;ile de Skye, les Highlands
            centraux et bien plus. Preparez-vous a vivre l&apos;aventure de votre vie.
          </p>

          <div className="bg-forest-50 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-forest-800 mb-2">Resume de l&apos;itineraire</h3>
            <ul className="space-y-1 text-stone-700">
              <li><strong>Distance totale :</strong> environ 1800 km</li>
              <li><strong>Depart/Arrivee :</strong> Edimbourg ou Glasgow</li>
              <li><strong>Points forts :</strong> NC500, Skye, Glen Coe, Loch Ness, Cairngorms, Cote Ouest</li>
              <li><strong>Budget estime :</strong> 2500-4000€ pour 2 personnes (van + depenses)</li>
            </ul>
          </div>

          <h2>Semaine 1 : Les Highlands et l&apos;Ile de Skye</h2>

          <h3>Jours 1-2 : Edimbourg - Glen Coe - Fort William</h3>

          <p>
            Depart d&apos;<Link href="/location-van-ecosse-edimbourg/">Edimbourg</Link> en direction de l&apos;ouest.
            Traversee des Trossachs avec arret possible au Loch Lomond. Nuit a Glen Coe.
          </p>

          <p>
            Jour 2 : Exploration de <strong>Glen Coe</strong>, vallee glaciaire aux paysages dramatiques.
            Randonnees possibles : Lost Valley, Meeting of Three Waters. Continuation vers Fort William,
            au pied du Ben Nevis.
          </p>

          <h3>Jours 3-5 : Ile de Skye</h3>

          <p>
            Trois jours pour explorer Skye en profondeur. La "Road to the Isles" (A830) vous mene
            au pont de Skye via le <strong>Glenfinnan Viaduct</strong>.
          </p>

          <p><strong>A ne pas manquer sur Skye :</strong></p>
          <ul>
            <li><strong>Jour 3 :</strong> Sud de Skye - Fairy Pools, Talisker Distillery, Coral Beach</li>
            <li><strong>Jour 4 :</strong> Nord de Skye - Quiraing (randonnee), Old Man of Storr, Kilt Rock</li>
            <li><strong>Jour 5 :</strong> Neist Point (lever/coucher de soleil), Portree, Dunvegan Castle</li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/roadtrip-mer-montagne.jpg"
              alt="Road trip en van entre mer et montagne en Ecosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Skye offre une diversite de paysages exceptionnelle
            </p>
          </div>

          <h3>Jours 6-7 : Applecross et debut de la NC500</h3>

          <p>
            Depart de Skye vers le continent. La route du <strong>Bealach na Ba</strong> vers
            Applecross est l&apos;une des plus spectaculaires du Royaume-Uni (attention : forte pente,
            virages serres, deconseille aux caravanes).
          </p>

          <p>
            <strong>Applecross</strong> : village isole avec une ambiance unique. Excellent pub
            (Applecross Inn) et plages sauvages. Continuation vers Torridon et ses montagnes
            majestueuses.
          </p>

          <h2>Semaine 2 : La North Coast 500</h2>

          <h3>Jours 8-9 : Torridon - Ullapool - Cote Nord</h3>

          <p>
            La NC500 revele ses plus beaux atouts. Route cotiere spectaculaire avec :
          </p>

          <ul>
            <li><strong>Loch Maree :</strong> L&apos;un des plus beaux lochs d&apos;Ecosse</li>
            <li><strong>Inverewe Garden :</strong> Jardin subtropical improbable</li>
            <li><strong>Ullapool :</strong> Port de peche colore, bonne base pour la nuit</li>
            <li><strong>Lochinver :</strong> Village pittoresque, excellente boulangerie (Lochinver Larder)</li>
          </ul>

          <h3>Jours 10-11 : Durness et l&apos;extreme nord</h3>

          <p>
            La partie la plus sauvage de la NC500. Paysages lunaires, plages desertes et
            sensation d&apos;etre au bout du monde.
          </p>

          <ul>
            <li><strong>Smoo Cave :</strong> Grotte marine impressionnante a Durness</li>
            <li><strong>Balnakeil Beach :</strong> Plage de sable blanc aux eaux turquoise</li>
            <li><strong>Cape Wrath :</strong> Le point le plus au nord-ouest du Royaume-Uni (excursion en bateau + minibus)</li>
            <li><strong>John o&apos; Groats :</strong> L&apos;extremite nord-est, photo souvenir obligatoire</li>
          </ul>

          <h3>Jours 12-13 : Cote Est et Cairngorms</h3>

          <p>
            Descente par la cote est, moins spectaculaire mais interessante :
          </p>

          <ul>
            <li><strong>Duncansby Head :</strong> Stacks rocheux plus impressionnants que John o&apos; Groats</li>
            <li><strong>Dunrobin Castle :</strong> Chateau de conte de fees</li>
            <li><strong>Inverness :</strong> Ravitaillement et visite de la capitale des Highlands</li>
            <li><strong>Cairngorms :</strong> Detour par le parc national pour la faune et les paysages de montagne</li>
          </ul>

          <h3>Jour 14 : Retour vers Edimbourg</h3>

          <p>
            Derniere etape avec arrets possibles a Pitlochry ou Stirling. Restitution du van
            a Edimbourg en fin de journee.
          </p>
        </div>

        <AffiliateCTA variant="hero" />

        <div className="prose-custom">
          <h2>Carte et distances</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="px-4 py-3 text-left">Etape</th>
                  <th className="px-4 py-3 text-left">Distance</th>
                  <th className="px-4 py-3 text-left">Temps route</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white"><td className="px-4 py-2">Edimbourg → Glen Coe</td><td className="px-4 py-2">170 km</td><td className="px-4 py-2">2h30</td></tr>
                <tr className="border-b bg-stone-50"><td className="px-4 py-2">Glen Coe → Skye</td><td className="px-4 py-2">130 km</td><td className="px-4 py-2">2h30</td></tr>
                <tr className="border-b bg-white"><td className="px-4 py-2">Tour de Skye</td><td className="px-4 py-2">200 km</td><td className="px-4 py-2">Variable</td></tr>
                <tr className="border-b bg-stone-50"><td className="px-4 py-2">Skye → Applecross</td><td className="px-4 py-2">100 km</td><td className="px-4 py-2">2h30</td></tr>
                <tr className="border-b bg-white"><td className="px-4 py-2">Applecross → Ullapool</td><td className="px-4 py-2">120 km</td><td className="px-4 py-2">2h30</td></tr>
                <tr className="border-b bg-stone-50"><td className="px-4 py-2">Ullapool → Durness</td><td className="px-4 py-2">150 km</td><td className="px-4 py-2">3h</td></tr>
                <tr className="border-b bg-white"><td className="px-4 py-2">Durness → John o&apos; Groats</td><td className="px-4 py-2">160 km</td><td className="px-4 py-2">3h</td></tr>
                <tr className="border-b bg-stone-50"><td className="px-4 py-2">John o&apos; Groats → Inverness</td><td className="px-4 py-2">170 km</td><td className="px-4 py-2">2h30</td></tr>
                <tr className="border-b bg-white"><td className="px-4 py-2">Inverness → Edimbourg</td><td className="px-4 py-2">250 km</td><td className="px-4 py-2">3h</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Budget detaille pour 2 semaines</h2>

          <p>
            Estimation pour un couple en van amenage confortable :
          </p>

          <ul>
            <li><strong>Location van (14 jours) :</strong> 1200-1800€</li>
            <li><strong>Carburant :</strong> 300-400€</li>
            <li><strong>Alimentation :</strong> 400-600€</li>
            <li><strong>Camping/aires :</strong> 100-300€ (mix bivouac et campings)</li>
            <li><strong>Visites et activites :</strong> 100-200€</li>
            <li><strong>Divers (pub, souvenirs) :</strong> 100-200€</li>
          </ul>

          <p><strong>Total estime : 2200-3500€</strong> pour deux personnes (hors vols).</p>

          <p>
            Consultez notre <Link href="/prix-location-van-ecosse/">guide des prix</Link> pour
            optimiser votre budget.
          </p>

          <h2>Conseils specifiques pour cet itineraire</h2>

          <h3>Carburant</h3>
          <p>
            Les stations sont rares sur la NC500. Faites le plein a chaque opportunite :
            Ullapool, Durness, Tongue, Thurso. Ne descendez jamais sous le quart du reservoir.
          </p>

          <h3>Provisions</h3>
          <p>
            Grands supermarchés a Inverness, Fort William et Ullapool uniquement.
            Prevoyez vos stocks pour 2-3 jours dans les zones reculees.
          </p>

          <h3>Reseau mobile</h3>
          <p>
            Quasi-inexistant sur la NC500. Telechargez cartes et informations a l&apos;avance.
            C&apos;est aussi l&apos;occasion de deconnecter.
          </p>

          <h3>Single track roads</h3>
          <p>
            La plupart des routes de la NC500 sont a voie unique. Utilisez les passing places
            pour laisser passer les vehicules. Soyez patient et courtois.
          </p>

          <div className="my-8 p-6 bg-sand-50 rounded-xl">
            <h4 className="font-semibold text-forest-800 mb-2">Alternative depuis Glasgow</h4>
            <p className="text-stone-600">
              Cet itineraire fonctionne aussi au depart de <Link href="/location-van-ecosse-glasgow/" className="text-forest-700 underline">Glasgow</Link>.
              Vous commenceriez alors par le Loch Lomond et rejoindriez Skye par Oban et le ferry.
              Le retour se ferait par Stirling.
            </p>
          </div>

          <p>
            Pour un apercu plus court, consultez notre <Link href="/ecosse-en-van-1-semaine/">itineraire
            d&apos;une semaine</Link>.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur cet itineraire" />
      </article>
    </>
  );
}
