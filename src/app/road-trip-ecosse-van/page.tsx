import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Road trip Écosse en van : planifiez votre aventure',
  description: 'Planifiez votre road trip en van en Écosse. Découvrez nos itinéraires, les incontournables des Highlands et tous les conseils pour une aventure réussie.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/road-trip-ecosse-van/',
  },
  openGraph: {
    title: 'Road trip Écosse en van : planifiez votre aventure',
    description: 'Planifiez votre road trip en van en Écosse. Découvrez nos itinéraires et conseils pour les Highlands.',
    url: 'https://www.explorescotlandvan.com/road-trip-ecosse-van/',
    images: [{ url: '/images/route-highlands.jpg' }],
  },
  twitter: {
    title: 'Road trip Écosse en van : planifiez votre aventure',
    description: 'Planifiez votre road trip en van en Écosse. Découvrez nos itinéraires et conseils pour les Highlands.',
    images: ['/images/route-highlands.jpg'],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip Écosse Van' },
];

const faqItems = [
  {
    question: 'Quelle est la meilleure saison pour un road trip en Écosse ?',
    answer: 'La période idéale s\'étend de mai à septembre. Mai-juin offrent de longues journées et moins de touristes. Juillet-août sont plus fréquentées mais bénéficient du meilleur temps. Septembre propose de magnifiques couleurs automnales.',
  },
  {
    question: 'Combien de kilomètres peut-on parcourir par jour ?',
    answer: 'Nous recommandons 150 à 200 km par jour maximum. Les routes écossaises sont sinueuses et les paysages méritent des arrêts fréquents. Prévoyez plus de temps que ce qu\'indique le GPS.',
  },
  {
    question: 'Faut-il réserver les campings à l\'avance ?',
    answer: 'En haute saison (juillet-août), il est conseillé de réserver les campings populaires, surtout sur l\'île de Skye. Le reste de l\'année, la flexibilité est possible grâce au bivouac autorisé.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Road Trip Écosse en Van',
  description: 'Planifiez votre road trip en van en Écosse avec nos itinéraires détaillés et conseils pratiques.',
  image: 'https://www.explorescotlandvan.com/images/route-highlands.jpg',
  datePublished: '2026-01-15',
  dateModified: '2026-02-19',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function RoadTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Road trip en Écosse en van"
        subtitle="Itinéraires, étapes et conseils pour une aventure inoubliable dans les Highlands"
        badge="Planification"
        image="/images/route-highlands.jpg"
        imageAlt="Route panoramique traversant les Highlands écossais"
        stats={[
          { value: '830 km', label: 'North Coast 500' },
          { value: '3', label: 'Itinéraires proposés' },
          { value: '7-14', label: 'Jours recommandés' },
          { value: '100%', label: 'Liberté' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Un <strong>road trip en van en Écosse</strong> représente l&apos;expérience ultime pour les amoureux
            de nature et d&apos;aventure. Des lochs brumeux aux sommets des Highlands, en passant par les
            côtes sauvages et les villages pittoresques, l&apos;Écosse offre une diversité de paysages
            incomparable. Ce guide vous accompagne dans la planification de votre voyage.
          </p>

          <h2>Les meilleurs itinéraires pour un road trip en van en Écosse</h2>

          <p>
            L&apos;Écosse propose plusieurs itinéraires mythiques parfaitement adaptés au voyage en van.
            Chacun offre une expérience unique et des paysages différents.
          </p>

          <h3>La North Coast 500 : le circuit légendaire</h3>

          <p>
            La <strong>North Coast 500</strong> (NC500) est souvent comparée à la Route 66 américaine.
            Cette boucle de 830 kilomètres longe les côtes nord de l&apos;Écosse, offrant certains des
            paysages les plus spectaculaires du pays. Le circuit part généralement d&apos;Inverness et
            peut se parcourir dans les deux sens.
          </p>

          <p>Les étapes incontournables de la NC500 :</p>
          <ul>
            <li><strong>Applecross :</strong> La route du Bealach na Ba offre des vues vertigineuses</li>
            <li><strong>Torridon :</strong> Montagnes dramatiques et lochs paisibles</li>
            <li><strong>Durness :</strong> La plage de Smoo Cave et ses grottes</li>
            <li><strong>John o&apos; Groats :</strong> L&apos;extrémité nord-est du Royaume-Uni</li>
            <li><strong>Duncansby Head :</strong> Stacks rocheux impressionnants</li>
          </ul>

          <p>
            Prévoyez minimum 5 jours pour ce circuit, idéalement une semaine pour profiter sans
            vous presser. Les routes sont parfois étroites (single track roads), ce qui ralentit
            la progression mais fait partie du charme.
          </p>

          <div className="my-12">
            <Image
              src="/images/north-coast-500.jpg"
              alt="Van aménagé sur la North Coast 500 face à la mer"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La North Coast 500 offre des panoramas à couper le souffle
            </p>
          </div>

          <h3>L&apos;île de Skye et la côte ouest</h3>

          <p>
            L&apos;<strong>île de Skye</strong> est sans doute la destination la plus photogénique d&apos;Écosse.
            Accessible par un pont depuis Kyle of Lochalsh, elle concentre une densité incroyable de
            sites exceptionnels sur une surface relativement réduite.
          </p>

          <p>À ne pas manquer sur Skye :</p>
          <ul>
            <li><strong>Le Quiraing :</strong> Formations rocheuses surréalistes pour une randonnée mémorable</li>
            <li><strong>The Old Man of Storr :</strong> Pic rocheux emblématique visible depuis la route</li>
            <li><strong>Les Fairy Pools :</strong> Piscines naturelles aux eaux cristallines</li>
            <li><strong>Neist Point :</strong> Phare au bout du monde avec vue sur les Hébrides</li>
            <li><strong>Portree :</strong> Village coloré et capitale de l&apos;île</li>
          </ul>

          <p>
            Prévoyez 3 à 4 jours minimum pour explorer Skye. En haute saison, les parkings se
            remplissent vite aux sites populaires. L&apos;avantage du van est de pouvoir partir tôt
            le matin pour éviter la foule.
          </p>

          <h3>Les Highlands centraux et le Loch Ness</h3>

          <p>
            Cet itinéraire classique convient parfaitement pour un <Link href="/ecosse-en-van-1-semaine/">premier
            voyage d&apos;une semaine</Link>. Il permet de découvrir l&apos;essence de l&apos;Écosse sans parcourir
            de trop grandes distances.
          </p>

          <p>Les points forts de ce circuit :</p>
          <ul>
            <li><strong>Glen Coe :</strong> Vallée glaciaire aux paysages dramatiques, décor de films célèbres</li>
            <li><strong>Fort William :</strong> Base pour l&apos;ascension du Ben Nevis, plus haut sommet britannique</li>
            <li><strong>Loch Ness :</strong> Le lac mythique et les ruines du château d&apos;Urquhart</li>
            <li><strong>Inverness :</strong> Capitale des Highlands, ville charmante</li>
            <li><strong>Cairngorms :</strong> Parc national aux paysages de montagne sublimes</li>
          </ul>
        </div>

        <AffiliateCTA variant="compact" title="Prêt pour votre road trip ?" />

        <div className="prose-custom">
          <h2>Conseils pratiques pour votre road trip en van</h2>

          <h3>Planifier ses étapes sans trop planifier</h3>

          <p>
            Le paradoxe du road trip en van : il faut planifier suffisamment pour ne pas perdre
            de temps, tout en gardant la flexibilité qui fait le charme de ce mode de voyage.
            Notre conseil : identifiez 2-3 incontournables par jour et laissez-vous porter pour
            le reste.
          </p>

          <h3>Les single track roads</h3>

          <p>
            De nombreuses routes écossaises sont à voie unique (single track). Des "passing places"
            (aires de croisement) permettent de laisser passer les véhicules venant en face ou de
            laisser doubler ceux qui arrivent derrière vous. Roulez prudemment et utilisez ces aires
            avec courtoisie - c&apos;est une règle d&apos;or en Écosse.
          </p>

          <h3>La météo écossaise</h3>

          <p>
            "Il n&apos;y a pas de mauvais temps, seulement de mauvais vêtements" : ce proverbe écossais
            résume bien la philosophie locale. La météo est changeante et imprévisible. Prévoyez
            des couches, des vêtements imperméables, et acceptez que la pluie fait partie du paysage.
            Souvent, les plus belles lumières arrivent juste après une averse.
          </p>

          <div className="my-12">
            <Image
              src="/images/van-montagnes.jpg"
              alt="Van aménagé au coeur des montagnes écossaises avec nuages dramatiques"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La météo changeante crée des ambiances uniques
            </p>
          </div>

          <h3>Ravitaillement et services</h3>

          <p>
            Dans les Highlands, les stations-service peuvent être espacées de plusieurs dizaines
            de kilomètres. Gardez toujours au moins un quart de réservoir et faites le plein dès
            que l&apos;occasion se présente. Même conseil pour l&apos;eau et les provisions : les commerces
            sont rares dans les zones reculées.
          </p>

          <h2>Budget pour un road trip en van en Écosse</h2>

          <p>
            Le budget dépend de nombreux facteurs : durée, saison, type de van, habitudes de
            consommation. Voici une estimation pour un couple :
          </p>

          <ul>
            <li><strong>Location van :</strong> 100-150€/jour en moyenne (voir notre <Link href="/prix-location-van-ecosse/">guide des prix</Link>)</li>
            <li><strong>Carburant :</strong> 20-40€/jour selon les distances</li>
            <li><strong>Alimentation :</strong> 30-50€/jour (courses + restaurants occasionnels)</li>
            <li><strong>Camping/aires :</strong> 0-30€/jour (bivouac gratuit à camping équipé)</li>
            <li><strong>Visites/activités :</strong> 10-30€/jour</li>
          </ul>

          <p>
            Total approximatif : <strong>160 à 300€ par jour</strong> pour deux personnes, tout compris.
            Un road trip de 10 jours coûte donc entre 1600€ et 3000€ (hors vols).
          </p>

          <h2>Durée idéale selon votre itinéraire</h2>

          <p>
            Chaque itinéraire demande un temps minimum pour être apprécié :
          </p>

          <ul>
            <li><strong>North Coast 500 :</strong> 5 à 7 jours minimum</li>
            <li><strong>Île de Skye + environs :</strong> 4 à 5 jours</li>
            <li><strong>Highlands centraux :</strong> 3 à 4 jours</li>
            <li><strong>Tour complet :</strong> <Link href="/ecosse-en-van-2-semaines/">2 semaines minimum</Link></li>
          </ul>

          <p>
            Notre recommandation : ne sous-estimez jamais les temps de trajet. Les routes sont
            belles mais lentes, et vous voudrez vous arrêter souvent.
          </p>

          <h2>Nos itinéraires types</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Link
              href="/ecosse-en-van-1-semaine/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Écosse en Van : 1 Semaine
              </h3>
              <p className="text-stone-600">
                L&apos;itinéraire idéal pour une première découverte : Highlands centraux, Skye et Loch Ness.
              </p>
            </Link>

            <Link
              href="/ecosse-en-van-2-semaines/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Écosse en Van : 2 Semaines
              </h3>
              <p className="text-stone-600">
                Le grand tour : North Coast 500, Skye, Highlands et plus encore.
              </p>
            </Link>
          </div>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez le van idéal pour votre road trip"
          description="Comparez les offres de location et réservez votre van pour l&apos;aventure écossaise."
        />

        <FAQ items={faqItems} title="Questions fréquentes" />
      </article>
    </>
  );
}
