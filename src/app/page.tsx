import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import Highlight from '@/components/Highlight';
import Comparatif from '@/components/Comparatif';
import VanShowcase from '@/components/VanShowcase';

export const metadata: Metadata = {
  title: 'Location Van Écosse - Comparez et Reservez',
  description: 'Location de van en Écosse : comparez les offres, decouvrez les meilleurs itineraires et conseils pour votre road trip dans les Highlands ecossais.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/',
  },
  openGraph: {
    title: 'Location Van Écosse - Comparez et Reservez',
    description: 'Location de van en Écosse : comparez les offres, decouvrez les meilleurs itineraires et conseils pour votre road trip dans les Highlands ecossais.',
    url: 'https://www.explorescotlandvan.com/',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
];

const highlightItems = [
  {
    title: 'Liberte totale',
    description: 'Explorez les Highlands a votre rythme, arretez-vous ou vous voulez et changez vos plans selon la meteo et vos envies.',
    icon: 'road' as const,
  },
  {
    title: 'Economies reelles',
    description: 'Combinez transport et hebergement en un seul budget. Fini les reservations d\'hotel couteuses en haute saison.',
    icon: 'euro' as const,
  },
  {
    title: 'Spots secrets',
    description: 'Accedez a des endroits inaccessibles en transports en commun et reveillez-vous face aux plus beaux paysages d\'Écosse.',
    icon: 'camera' as const,
  },
  {
    title: 'Confort garanti',
    description: 'Les vans modernes offrent tout le necessaire : lit confortable, cuisine equipee et parfois meme douche et toilettes.',
    icon: 'bed' as const,
  },
  {
    title: 'Itineraires flexibles',
    description: 'De la North Coast 500 a l\'ile de Skye, creez l\'itineraire parfait sans contrainte horaire ni reservation obligatoire.',
    icon: 'map' as const,
  },
  {
    title: 'Immersion nature',
    description: 'Vivez l\'Écosse authentique, au plus pres de sa nature sauvage, de ses lochs mysterieux et de ses montagnes majestueuses.',
    icon: 'mountain' as const,
  },
];

const comparatifRows = [
  { critere: 'Flexibilite', van: 'Totale', hotel: 'Limitee', avantageVan: true },
  { critere: 'Cout moyen/jour', van: '80-150€', hotel: '150-250€', avantageVan: true },
  { critere: 'Acces sites isoles', van: 'Excellent', hotel: 'Difficile', avantageVan: true },
  { critere: 'Confort', van: 'Bon', hotel: 'Excellent', avantageVan: false },
  { critere: 'Authenticite', van: 'Immersion totale', hotel: 'Touristique', avantageVan: true },
  { critere: 'Meteo defavorable', van: 'Adaptable', hotel: 'Plus confortable', avantageVan: false },
];

const faqItems = [
  {
    question: 'Quel est le meilleur moment pour louer un van en Écosse ?',
    answer: 'La meilleure periode s\'etend de mai a septembre, avec un pic en juillet-aout. Mai-juin offrent des journees longues et moins de monde. Septembre propose de belles couleurs automnales. L\'hiver est deconseille pour les debutants en raison des conditions meteo difficiles.',
  },
  {
    question: 'Faut-il un permis special pour conduire un van en Écosse ?',
    answer: 'Non, un permis B standard suffit pour la plupart des vans amenages (moins de 3,5 tonnes). Verifiez toutefois les conditions de votre loueur. Rappel important : on conduit a gauche au Royaume-Uni.',
  },
  {
    question: 'Ou peut-on dormir en van en Écosse ?',
    answer: 'L\'Écosse beneficie du "droit d\'acces responsable" (Right to Roam) qui permet le bivouac dans de nombreux endroits. Il existe aussi des aires de camping-car, des campings et des aires de stationnement dediees. Consultez notre guide sur le bivouac en Écosse pour plus de details.',
  },
  {
    question: 'Combien coute la location d\'un van en Écosse ?',
    answer: 'Les prix varient de 80€ a 200€ par jour selon la saison et le type de van. En haute saison (juillet-aout), comptez 120-180€/jour pour un van bien equipe. Hors saison, les tarifs peuvent descendre a 70-100€/jour.',
  },
  {
    question: 'Edimbourg ou Glasgow : ou recuperer son van ?',
    answer: 'Les deux villes ont leurs avantages. Edimbourg est ideale pour rejoindre rapidement les Highlands de l\'Est et le Loch Ness. Glasgow offre un acces plus direct a la cote ouest, l\'ile de Skye et la North Coast 500. Choisissez selon votre itineraire.',
  },
];

// Schema.org Article markup
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse',
  description: 'Tout savoir sur la location de van en Écosse : conseils, itineraires, prix et astuces pour reussir votre road trip dans les Highlands.',
  image: 'https://www.explorescotlandvan.com/images/hero-highlands.jpg',
  author: {
    '@type': 'Organization',
    name: 'ExploreScotlandVan',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ExploreScotlandVan',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.explorescotlandvan.com/images/hero-highlands.jpg',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section - Clean Professional Design */}
      <section className="bg-gradient-to-br from-forest-50 via-white to-sand-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
                Louer un van aménagé en Écosse
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Partez a la decouverte des Highlands en toute liberte. Comparez les vans disponibles
                et reservez votre aventure ecossaise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
                  target="_blank"
                  rel="sponsored noopener nofollow"
                  className="inline-flex items-center justify-center rounded-xl bg-forest-700 px-8 py-4 text-lg font-semibold text-white hover:bg-forest-800 transition-colors"
                >
                  Voir les vans disponibles
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#content"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-forest-700 px-8 py-4 text-lg font-semibold text-forest-700 hover:bg-forest-50 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-forest-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Assurance incluse
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-forest-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Annulation flexible
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/hero-highlands.jpg"
                      alt="Van dans les Highlands ecossais"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/dormir-van-lac.jpg"
                      alt="Van au bord d&apos;un loch"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/route-highlands.jpg"
                      alt="Route des Highlands"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/north-coast-500.jpg"
                      alt="North Coast 500"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding" id="content">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Vous revez d&apos;explorer l&apos;Écosse autrement ? La <strong>location de van en Écosse</strong> represente
            la meilleure facon de decouvrir ce pays aux paysages epoustouflants. Des Highlands sauvages aux lochs
            mysterieux, en passant par les chateaux ancestraux et les cotes decoupees, l&apos;Écosse se prete
            parfaitement a l&apos;aventure en van amenage.
          </p>

          <p>
            Ici, on vous dit tout sur la <strong>location van Écosse</strong>. Que vous
            souhaitiez <Link href="/road-trip-ecosse-van/">planifier un road trip inoubliable</Link>, comprendre
            les <Link href="/prix-location-van-ecosse/">tarifs de location</Link> ou savoir
            <Link href="/dormir-en-van-ecosse/"> ou dormir en van</Link>, vous trouverez toutes les informations
            pour preparer votre aventure.
          </p>

          <h2>Pourquoi choisir la location de van pour decouvrir l&apos;Écosse ?</h2>

          <p>
            L&apos;Écosse est une destination qui se savoure lentement. Ses routes sinueuses traversent des paysages
            a couper le souffle, ses villages pittoresques invitent a la flanerie, et ses sites naturels meritent
            qu&apos;on leur consacre du temps. C&apos;est precisement pour cela que <strong>louer un van en Écosse</strong>
            constitue le choix ideal pour les voyageurs en quete d&apos;authenticite.
          </p>

          <p>
            Contrairement a un circuit organise ou a un sejour en hotel, le van amenage vous offre une liberte
            totale. Vous decidez de votre itineraire, de vos arrets et de votre rythme. Apercu un panorama sublime ?
            Garez-vous et profitez. Un pub chaleureux vous fait de l&apos;oeil en fin de journee ? Restez pour la soiree
            et dormez sur place. Cette flexibilite est inestimable dans un pays ou la meteo peut changer en quelques
            heures et ou les plus belles decouvertes sont souvent imprevues.
          </p>

          <div className="my-12">
            <Image
              src="/images/roadtrip-panoramique.jpg"
              alt="Route panoramique ecossaise traversant les Highlands avec un van"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les routes ecossaises offrent des panoramas exceptionnels a chaque virage
            </p>
          </div>

          <h2>Les avantages de la location van amenage Écosse</h2>

          <p>
            Opter pour un <strong>van amenage en Écosse</strong> presente de nombreux avantages que les autres
            modes de voyage ne peuvent offrir. Voici pourquoi de plus en plus de voyageurs font ce choix :
          </p>

          <h3>Une economie substantielle sur votre budget voyage</h3>

          <p>
            Le cout de l&apos;hebergement en Écosse peut rapidement grimper, surtout en haute saison.
            Les hotels dans les Highlands affichent souvent des tarifs eleves, et la disponibilite
            peut etre limitee. Avec un van, vous combinez transport et hebergement en une seule
            depense. Meme en comptant le carburant et les aires de camping occasionnelles,
            le budget total reste generalement inferieur a celui d&apos;un voyage classique.
          </p>

          <p>
            Consultez notre page sur les <Link href="/prix-location-van-ecosse/">prix de location van en Écosse</Link> pour
            une estimation detaillee des couts.
          </p>

          <h3>L&apos;acces aux sites les plus spectaculaires</h3>

          <p>
            Les transports en commun en Écosse sont limites, particulierement dans les regions
            reculees des Highlands. Avec votre van, vous accedez facilement aux endroits les plus
            photogeniques : le Quiraing sur l&apos;ile de Skye, les piscines naturelles de Glen Coe,
            ou les plages desertes de la cote nord-ouest. Ces sites magiques restent souvent
            inaccessibles aux voyageurs sans vehicule.
          </p>

          <h3>Une immersion totale dans la nature ecossaise</h3>

          <p>
            Reveillez-vous face a un loch brumeux, prenez votre petit-dejeuner avec vue sur les
            montagnes, endormez-vous sous un ciel etoile loin de toute pollution lumineuse.
            Le van permet cette connexion unique avec la nature, impossible a reproduire depuis
            une chambre d&apos;hotel.
          </p>
        </div>

        <AffiliateCTA variant="hero" />

        <div className="prose-custom">
          <h2>Ou louer un van en Écosse ?</h2>

          <p>
            Deux villes principales s&apos;imposent comme points de depart pour la <strong>location de van en Écosse</strong> :
            Edimbourg et Glasgow. Chacune presente des avantages selon votre itineraire prevu.
          </p>

          <h3>Location van Écosse depuis Edimbourg</h3>

          <p>
            La capitale ecossaise constitue le point de depart le plus populaire.
            <Link href="/location-van-ecosse-edimbourg/"> Louer un van a Edimbourg</Link> vous permet de :
          </p>

          <ul>
            <li>Rejoindre rapidement les Highlands centraux et le Loch Ness</li>
            <li>Explorer la cote est et ses villages de pecheurs pittoresques</li>
            <li>Profiter d&apos;un large choix de loueurs avec des tarifs competitifs</li>
            <li>Combiner visite de la ville et road trip</li>
          </ul>

          <h3>Location van Écosse depuis Glasgow</h3>

          <p>
            La plus grande ville d&apos;Écosse offre une alternative interessante.
            <Link href="/location-van-ecosse-glasgow/"> Louer un van a Glasgow</Link> est ideal pour :
          </p>

          <ul>
            <li>Acceder directement a la cote ouest et ses paysages spectaculaires</li>
            <li>Rejoindre rapidement l&apos;ile de Skye et les Hebrides</li>
            <li>Demarrer la celebre North Coast 500 par l&apos;ouest</li>
            <li>Beneficier de tarifs parfois plus avantageux qu&apos;a Edimbourg</li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/north-coast-500.jpg"
              alt="Van amenage sur la route North Coast 500 en Ecosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La North Coast 500, l&apos;une des plus belles routes panoramiques au monde
            </p>
          </div>

          <h2>Quelle duree ideale pour un road trip en van en Écosse ?</h2>

          <p>
            La duree optimale depend de vos objectifs et du territoire que vous souhaitez couvrir.
            Voici nos recommandations :
          </p>

          <h3>Une semaine en van en Écosse</h3>

          <p>
            <Link href="/ecosse-en-van-1-semaine/">Un itineraire d&apos;une semaine</Link> permet de decouvrir
            les incontournables : Edimbourg, les Highlands centraux, le Loch Ness et potentiellement
            l&apos;ile de Skye. C&apos;est une duree suffisante pour une premiere approche de l&apos;Écosse,
            bien que certains trajets puissent sembler un peu presses.
          </p>

          <h3>Deux semaines en van en Écosse</h3>

          <p>
            <Link href="/ecosse-en-van-2-semaines/">Deux semaines representent la duree ideale</Link> pour
            explorer l&apos;Écosse en profondeur. Vous aurez le temps de parcourir la North Coast 500,
            d&apos;explorer Skye sans vous presser, de decouvrir les iles des Hebrides exterieures ou
            de vous aventurer dans les Highlands de l&apos;ouest, moins frequentes mais tout aussi
            spectaculaires.
          </p>

          <h2>Les meilleurs itineraires en van en Écosse</h2>

          <p>
            L&apos;Écosse regorge de routes panoramiques parfaites pour le <strong>road trip en van</strong>.
            Voici les circuits les plus apprecies :
          </p>

          <h3>La North Coast 500</h3>

          <p>
            Surnommee la "Route 66 ecossaise", cette boucle de 830 kilometres longe les cotes nord
            de l&apos;Écosse. Elle traverse des paysages d&apos;une beaute sauvage incomparable : falaises
            vertigineuses, plages desertes, villages de pecheurs authentiques. Comptez minimum
            5 jours, idealement une semaine pour en profiter pleinement.
          </p>

          <h3>L&apos;ile de Skye et les Highlands de l&apos;ouest</h3>

          <p>
            Skye est sans doute l&apos;ile la plus photogenique d&apos;Écosse. Ses paysages lunaires,
            ses formations rocheuses spectaculaires et sa lumiere changeante en font un paradis
            pour les photographes et les amoureux de nature. Prevoyez au moins 3 jours sur l&apos;ile.
          </p>

          <p>
            Decouvrez tous nos conseils sur le <Link href="/road-trip-ecosse-van/">road trip en Écosse</Link>.
          </p>

          <h2>Dormir en van en Écosse : ce qu&apos;il faut savoir</h2>

          <p>
            L&apos;Écosse est l&apos;un des pays les plus accueillants pour les voyageurs en van grace
            a sa legislation particuliere. Le "Right to Roam" (droit d&apos;acces) permet le camping
            sauvage responsable dans la plupart des zones rurales, sous certaines conditions.
          </p>

          <p>
            Consultez notre page sur <Link href="/dormir-en-van-ecosse/">ou dormir en van en Écosse</Link> pour
            connaitre les regles, les meilleurs spots et nos conseils pratiques.
          </p>

          <div className="my-12">
            <Image
              src="/images/dormir-van-lac.jpg"
              alt="Van gare au bord d&apos;un loch ecossais au coucher du soleil"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Se reveiller au bord d&apos;un loch : une experience inoubliable
            </p>
          </div>

          <h2>Conseils pratiques pour votre location van Écosse</h2>

          <h3>La conduite a gauche</h3>

          <p>
            Au Royaume-Uni, on roule a gauche. Si c&apos;est votre premiere experience, ne vous
            inquietez pas : l&apos;adaptation est generalement rapide. Les routes ecossaises sont
            peu frequentees hors des grandes villes, ce qui facilite la prise en main. Attention
            toutefois aux "single track roads" (routes a voie unique) qui necessitent d&apos;utiliser
            les "passing places" pour croiser les vehicules.
          </p>

          <h3>La meteo ecossaise</h3>

          <p>
            L&apos;Écosse est connue pour son climat changeant. Il est possible d&apos;experimenteur
            les quatre saisons en une seule journee. Prevoyez des vetements adaptes et restez
            flexibles dans votre planning. Le van vous permet justement cette adaptabilite :
            si le temps est mauvais dans une region, deplacez-vous ailleurs.
          </p>

          <h3>L&apos;equipement du van</h3>

          <p>
            Verifiez que votre van est equipe pour le climat ecossais : chauffage efficace,
            bonne isolation, literie chaude. Les nuits peuvent etre fraiches meme en ete,
            surtout dans les Highlands.
          </p>

          <h2>Combien coute une location de van en Écosse ?</h2>

          <p>
            Les tarifs varient selon la saison, le type de van et la duree de location.
            En moyenne, comptez :
          </p>

          <ul>
            <li><strong>Basse saison (novembre-mars) :</strong> 60-100€/jour</li>
            <li><strong>Moyenne saison (avril-mai, septembre-octobre) :</strong> 80-130€/jour</li>
            <li><strong>Haute saison (juin-aout) :</strong> 100-180€/jour</li>
          </ul>

          <p>
            Ces prix incluent generalement l&apos;assurance de base et un kilometrage illimite.
            Pour plus de details, consultez notre page sur les <Link href="/prix-location-van-ecosse/">prix
            de location van en Écosse</Link>.
          </p>
        </div>

        <AffiliateCTA
          title="Pret a vivre l&apos;aventure ecossaise ?"
          description="Comparez des centaines de vans disponibles en Écosse et trouvez celui qui correspond a vos besoins."
          buttonText="Comparer les vans"
        />
      </article>

      <Highlight
        title="Pourquoi partir en van en Ecosse ?"
        subtitle="Six bonnes raisons de choisir le van pour votre voyage en Écosse"
        items={highlightItems}
      />

      <section className="container-narrow section-padding">
        <Comparatif rows={comparatifRows} />
      </section>

      <section className="container-narrow section-padding">
        <FAQ items={faqItems} title="Questions frequentes sur la location van Écosse" />
      </section>

      <section className="container-wide section-padding bg-sand-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            Nos ressources
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Tout ce qu&apos;il faut savoir pour preparer votre road trip en van en Écosse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/road-trip-ecosse-van/"
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="/images/route-highlands.jpg"
                alt="Route panoramique des Highlands"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-2 group-hover:text-forest-600">
                Road Trip Écosse en Van
              </h3>
              <p className="text-stone-600">
                Itineraires, conseils et etapes incontournables pour votre aventure.
              </p>
            </div>
          </Link>

          <Link
            href="/prix-location-van-ecosse/"
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="/images/van-montagnes.jpg"
                alt="Van amenage dans les montagnes ecossaises"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-2 group-hover:text-forest-600">
                Prix Location Van Écosse
              </h3>
              <p className="text-stone-600">
                Budget, tarifs par saison et conseils pour economiser.
              </p>
            </div>
          </Link>

          <Link
            href="/dormir-en-van-ecosse/"
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="/images/sunset-van-ecosse.jpg"
                alt="Coucher de soleil sur un van en Ecosse"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-2 group-hover:text-forest-600">
                Dormir en Van en Écosse
              </h3>
              <p className="text-stone-600">
                Reglementation, spots et astuces pour le bivouac.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="container-narrow section-padding">
        <AffiliateCTA
          variant="hero"
          title="Lancez-vous dans l&apos;aventure"
          description="Des centaines de vans vous attendent en Ecosse. Trouvez le vehicule parfait pour votre road trip et creez des souvenirs inoubliables."
          buttonText="Trouver mon van"
        />
      </section>
    </>
  );
}
