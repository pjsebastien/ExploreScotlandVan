import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';

export const metadata: Metadata = {
  title: 'Road Trip Écosse en Van - Itineraires et Conseils',
  description: 'Planifiez votre road trip en van en Écosse : itineraires detailles, etapes incontournables, conseils pratiques et astuces pour une aventure reussie.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/road-trip-ecosse-van/',
  },
  openGraph: {
    title: 'Road Trip Écosse en Van - Itineraires et Conseils',
    description: 'Planifiez votre road trip en van en Écosse : itineraires detailles, etapes incontournables, conseils pratiques.',
    url: 'https://www.explorescotlandvan.com/road-trip-ecosse-van/',
    images: [{ url: '/images/route-highlands.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip Écosse Van' },
];

const faqItems = [
  {
    question: 'Quelle est la meilleure saison pour un road trip en Écosse ?',
    answer: 'La periode ideale s\'etend de mai a septembre. Mai-juin offrent de longues journees et moins de touristes. Juillet-aout sont plus frequentes mais beneficient du meilleur temps. Septembre propose de magnifiques couleurs automnales.',
  },
  {
    question: 'Combien de kilometres peut-on parcourir par jour ?',
    answer: 'Nous recommandons 150 a 200 km par jour maximum. Les routes ecossaises sont sinueuses et les paysages meritent des arrets frequents. Prevoyez plus de temps que ce qu\'indique le GPS.',
  },
  {
    question: 'Faut-il reserver les campings a l\'avance ?',
    answer: 'En haute saison (juillet-aout), il est conseille de reserver les campings populaires, surtout sur l\'ile de Skye. Le reste de l\'annee, la flexibilite est possible grace au bivouac autorise.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Road Trip Écosse en Van',
  description: 'Planifiez votre road trip en van en Écosse avec nos itineraires detailles et conseils pratiques.',
  image: 'https://www.explorescotlandvan.com/images/route-highlands.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
};

export default function RoadTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/images/route-highlands.jpg"
          alt="Route panoramique traversant les Highlands ecossais"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Road Trip Écosse en Van
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl">
              Itineraires, etapes et conseils pour une aventure inoubliable
            </p>
          </div>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Un <strong>road trip en van en Écosse</strong> represente l&apos;experience ultime pour les amoureux
            de nature et d&apos;aventure. Des lochs brumeux aux sommets des Highlands, en passant par les
            cotes sauvages et les villages pittoresques, l&apos;Écosse offre une diversite de paysages
            incomparable. Ce guide vous accompagne dans la planification de votre voyage.
          </p>

          <h2>Les meilleurs itineraires pour un road trip en van en Écosse</h2>

          <p>
            L&apos;Écosse propose plusieurs itineraires mythiques parfaitement adaptes au voyage en van.
            Chacun offre une experience unique et des paysages differents.
          </p>

          <h3>La North Coast 500 : le circuit legendaire</h3>

          <p>
            La <strong>North Coast 500</strong> (NC500) est souvent comparee a la Route 66 americaine.
            Cette boucle de 830 kilometres longe les cotes nord de l&apos;Écosse, offrant certains des
            paysages les plus spectaculaires du pays. Le circuit part generalement d&apos;Inverness et
            peut se parcourir dans les deux sens.
          </p>

          <p>Les etapes incontournables de la NC500 :</p>
          <ul>
            <li><strong>Applecross :</strong> La route du Bealach na Ba offre des vues vertigineuses</li>
            <li><strong>Torridon :</strong> Montagnes dramatiques et lochs paisibles</li>
            <li><strong>Durness :</strong> La plage de Smoo Cave et ses grottes</li>
            <li><strong>John o&apos; Groats :</strong> L&apos;extremite nord-est du Royaume-Uni</li>
            <li><strong>Duncansby Head :</strong> Stacks rocheux impressionnants</li>
          </ul>

          <p>
            Prevoyez minimum 5 jours pour ce circuit, idealement une semaine pour profiter sans
            vous presser. Les routes sont parfois etroites (single track roads), ce qui ralentit
            la progression mais fait partie du charme.
          </p>

          <div className="my-12">
            <Image
              src="/images/north-coast-500.jpg"
              alt="Van amenage sur la North Coast 500 face a la mer"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La North Coast 500 offre des panoramas a couper le souffle
            </p>
          </div>

          <h3>L&apos;ile de Skye et la cote ouest</h3>

          <p>
            L&apos;<strong>ile de Skye</strong> est sans doute la destination la plus photogenique d&apos;Écosse.
            Accessible par un pont depuis Kyle of Lochalsh, elle concentre une densite incroyable de
            sites exceptionnels sur une surface relativement reduite.
          </p>

          <p>A ne pas manquer sur Skye :</p>
          <ul>
            <li><strong>Le Quiraing :</strong> Formations rocheuses surrealisates pour une randonnee memorable</li>
            <li><strong>The Old Man of Storr :</strong> Pic rocheux emblematique visible depuis la route</li>
            <li><strong>Les Fairy Pools :</strong> Piscines naturelles aux eaux cristallines</li>
            <li><strong>Neist Point :</strong> Phare au bout du monde avec vue sur les Hebrides</li>
            <li><strong>Portree :</strong> Village colore et capital de l&apos;ile</li>
          </ul>

          <p>
            Prevoyez 3 a 4 jours minimum pour explorer Skye. En haute saison, les parkings se
            remplissent vite aux sites populaires. L&apos;avantage du van est de pouvoir partir tot
            le matin pour eviter la foule.
          </p>

          <h3>Les Highlands centraux et le Loch Ness</h3>

          <p>
            Cet itineraire classique convient parfaitement pour un <Link href="/ecosse-en-van-1-semaine/">premier
            voyage d&apos;une semaine</Link>. Il permet de decouvrir l&apos;essence de l&apos;Écosse sans parcourir
            de trop grandes distances.
          </p>

          <p>Les points forts de ce circuit :</p>
          <ul>
            <li><strong>Glen Coe :</strong> Vallee glaciaire aux paysages dramatiques, decor de films celebres</li>
            <li><strong>Fort William :</strong> Base pour l&apos;ascension du Ben Nevis, plus haut sommet britannique</li>
            <li><strong>Loch Ness :</strong> Le lac mythique et les ruines du chateau d&apos;Urquhart</li>
            <li><strong>Inverness :</strong> Capitale des Highlands, ville charmante</li>
            <li><strong>Cairngorms :</strong> Parc national aux paysages de montagne sublimes</li>
          </ul>
        </div>

        <AffiliateCTA variant="compact" title="Pret pour votre road trip ?" />

        <div className="prose-custom">
          <h2>Conseils pratiques pour votre road trip en van</h2>

          <h3>Planifier ses etapes sans trop planifier</h3>

          <p>
            Le paradoxe du road trip en van : il faut planifier suffisamment pour ne pas perdre
            de temps, tout en gardant la flexibilite qui fait le charme de ce mode de voyage.
            Notre conseil : identifiez 2-3 incontournables par jour et laissez-vous porter pour
            le reste.
          </p>

          <h3>Les single track roads</h3>

          <p>
            De nombreuses routes ecossaises sont a voie unique (single track). Des "passing places"
            (aires de croisement) permettent de laisser passer les vehicules venant en face ou de
            laisser doubler ceux qui arrivent derriere vous. Roulez prudemment et utilisez ces aires
            avec courtoisie - c&apos;est une regle d&apos;or en Ecosse.
          </p>

          <h3>La meteo ecossaise</h3>

          <p>
            "Il n&apos;y a pas de mauvais temps, seulement de mauvais vetements" : ce proverbe ecossais
            resume bien la philosophie locale. La meteo est changeante et impredictible. Prevoyez
            des couches, des vetements impermeables, et acceptez que la pluie fait partie du paysage.
            Souvent, les plus belles lumieres arrivent juste apres une averse.
          </p>

          <div className="my-12">
            <Image
              src="/images/van-montagnes.jpg"
              alt="Van amenage au coeur des montagnes ecossaises avec nuages dramatiques"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La meteo changeante cree des ambiances uniques
            </p>
          </div>

          <h3>Ravitaillement et services</h3>

          <p>
            Dans les Highlands, les stations-service peuvent etre espacees de plusieurs dizaines
            de kilometres. Gardez toujours au moins un quart de reservoir et faites le plein des
            que l&apos;occasion se presente. Meme conseil pour l&apos;eau et les provisions : les commerces
            sont rares dans les zones reculees.
          </p>

          <h2>Budget pour un road trip en van en Écosse</h2>

          <p>
            Le budget depend de nombreux facteurs : duree, saison, type de van, habitudes de
            consommation. Voici une estimation pour un couple :
          </p>

          <ul>
            <li><strong>Location van :</strong> 100-150€/jour en moyenne (voir notre <Link href="/prix-location-van-ecosse/">guide des prix</Link>)</li>
            <li><strong>Carburant :</strong> 20-40€/jour selon les distances</li>
            <li><strong>Alimentation :</strong> 30-50€/jour (courses + restaurants occasionnels)</li>
            <li><strong>Camping/aires :</strong> 0-30€/jour (bivouac gratuit a camping equipe)</li>
            <li><strong>Visites/activites :</strong> 10-30€/jour</li>
          </ul>

          <p>
            Total approximatif : <strong>160 a 300€ par jour</strong> pour deux personnes, tout compris.
            Un road trip de 10 jours coute donc entre 1600€ et 3000€ (hors vols).
          </p>

          <h2>Duree ideale selon votre itineraire</h2>

          <p>
            Chaque itineraire demande un temps minimum pour etre apprecie :
          </p>

          <ul>
            <li><strong>North Coast 500 :</strong> 5 a 7 jours minimum</li>
            <li><strong>Ile de Skye + environs :</strong> 4 a 5 jours</li>
            <li><strong>Highlands centraux :</strong> 3 a 4 jours</li>
            <li><strong>Tour complet :</strong> <Link href="/ecosse-en-van-2-semaines/">2 semaines minimum</Link></li>
          </ul>

          <p>
            Notre recommandation : ne sous-estimez jamais les temps de trajet. Les routes sont
            belles mais lentes, et vous voudrez vous arreter souvent.
          </p>

          <h2>Nos itineraires types</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Link
              href="/ecosse-en-van-1-semaine/"
              className="block p-6 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Écosse en Van : 1 Semaine
              </h3>
              <p className="text-stone-600">
                L&apos;itineraire ideal pour une premiere decouverte : Highlands centraux, Skye et Loch Ness.
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
          title="Trouvez le van ideal pour votre road trip"
          description="Comparez les offres de location et reservez votre van pour l&apos;aventure ecossaise."
        />

        <FAQ items={faqItems} title="Questions frequentes" />
      </article>
    </>
  );
}
