import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import Highlight from '@/components/Highlight';
import Comparatif from '@/components/Comparatif';
import VanShowcase from '@/components/VanShowcase';
import HeroHome from '@/components/HeroHome';

export const metadata: Metadata = {
  title: 'Location van aménagé Écosse dès 60€/jour : comparez les offres',
  description: 'Trouvez votre van aménagé en Écosse parmi les meilleures offres. Comparez, réservez et explorez les Highlands en toute liberté.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/',
  },
  openGraph: {
    title: 'Location van aménagé Écosse dès 60€/jour : comparez les offres',
    description: 'Trouvez votre van aménagé en Écosse parmi les meilleures offres. Comparez, réservez et explorez les Highlands en toute liberté.',
    url: 'https://www.explorescotlandvan.com/',
  },
  twitter: {
    title: 'Location van aménagé Écosse dès 60€/jour : comparez les offres',
    description: 'Trouvez votre van aménagé en Écosse parmi les meilleures offres. Comparez, réservez et explorez les Highlands en toute liberté.',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
];

const highlightItems = [
  {
    title: 'Liberté totale',
    description: 'Explorez les Highlands à votre rythme, arrêtez-vous où vous voulez et changez vos plans selon la météo et vos envies.',
    icon: 'road' as const,
  },
  {
    title: 'Économies réelles',
    description: 'Combinez transport et hébergement en un seul budget. Fini les réservations d\'hôtel coûteuses en haute saison.',
    icon: 'euro' as const,
  },
  {
    title: 'Spots secrets',
    description: 'Accédez à des endroits inaccessibles en transports en commun et réveillez-vous face aux plus beaux paysages d\'Écosse.',
    icon: 'camera' as const,
  },
  {
    title: 'Confort garanti',
    description: 'Les vans modernes offrent tout le nécessaire : lit confortable, cuisine équipée et parfois même douche et toilettes.',
    icon: 'bed' as const,
  },
  {
    title: 'Itinéraires flexibles',
    description: 'De la North Coast 500 à l\'île de Skye, créez l\'itinéraire parfait sans contrainte horaire ni réservation obligatoire.',
    icon: 'map' as const,
  },
  {
    title: 'Immersion nature',
    description: 'Vivez l\'Écosse authentique, au plus près de sa nature sauvage, de ses lochs mystérieux et de ses montagnes majestueuses.',
    icon: 'mountain' as const,
  },
];

const comparatifRows = [
  { critere: 'Flexibilité', van: 'Totale', hotel: 'Limitée', avantageVan: true },
  { critere: 'Coût moyen/jour', van: '80-150€', hotel: '150-250€', avantageVan: true },
  { critere: 'Accès sites isolés', van: 'Excellent', hotel: 'Difficile', avantageVan: true },
  { critere: 'Confort', van: 'Bon', hotel: 'Excellent', avantageVan: false },
  { critere: 'Authenticité', van: 'Immersion totale', hotel: 'Touristique', avantageVan: true },
  { critere: 'Météo défavorable', van: 'Adaptable', hotel: 'Plus confortable', avantageVan: false },
];

const faqItems = [
  {
    question: 'Quel est le meilleur moment pour louer un van en Écosse ?',
    answer: 'La meilleure période s\'étend de mai à septembre, avec un pic en juillet-août. Mai-juin offrent des journées longues et moins de monde. Septembre propose de belles couleurs automnales. L\'hiver est déconseillé pour les débutants en raison des conditions météo difficiles.',
  },
  {
    question: 'Faut-il un permis spécial pour conduire un van en Écosse ?',
    answer: 'Non, un permis B standard suffit pour la plupart des vans aménagés (moins de 3,5 tonnes). Vérifiez toutefois les conditions de votre loueur. Rappel important : on conduit à gauche au Royaume-Uni.',
  },
  {
    question: 'Où peut-on dormir en van en Écosse ?',
    answer: 'L\'Écosse bénéficie du "droit d\'accès responsable" (Right to Roam) qui permet le bivouac dans de nombreux endroits. Il existe aussi des aires de camping-car, des campings et des aires de stationnement dédiées. Consultez notre guide sur le bivouac en Écosse pour plus de détails.',
  },
  {
    question: 'Combien coûte la location d\'un van en Écosse ?',
    answer: 'Les prix varient de 80€ à 200€ par jour selon la saison et le type de van. En haute saison (juillet-août), comptez 120-180€/jour pour un van bien équipé. Hors saison, les tarifs peuvent descendre à 70-100€/jour.',
  },
  {
    question: 'Édimbourg ou Glasgow : où récupérer son van ?',
    answer: 'Les deux villes ont leurs avantages. Édimbourg est idéale pour rejoindre rapidement les Highlands de l\'Est et le Loch Ness. Glasgow offre un accès plus direct à la côte ouest, l\'île de Skye et la North Coast 500. Choisissez selon votre itinéraire.',
  },
];

// Schema.org WebSite + Organization markup
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ExploreScotlandVan',
  url: 'https://www.explorescotlandvan.com/',
  description: 'Tout savoir sur la location de van en Écosse : conseils, itinéraires, prix et astuces pour réussir votre road trip dans les Highlands.',
  inLanguage: 'fr',
  publisher: {
    '@type': 'Organization',
    name: 'ExploreScotlandVan',
    url: 'https://www.explorescotlandvan.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.explorescotlandvan.com/images/favicon.png',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <HeroHome />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding" id="content">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Vous rêvez d&apos;explorer l&apos;Écosse autrement ? La <strong>location de van en Écosse</strong> représente
            la meilleure façon de découvrir ce pays aux paysages époustouflants. Des Highlands sauvages aux lochs
            mystérieux, en passant par les châteaux ancestraux et les côtes découpées, l&apos;Écosse se prête
            parfaitement à l&apos;aventure en van aménagé.
          </p>

          <p>
            Ici, on vous dit tout sur la <strong>location van Écosse</strong>. Que vous
            souhaitiez <Link href="/road-trip-ecosse-van/">planifier un road trip inoubliable</Link>, comprendre
            les <Link href="/prix-location-van-ecosse/">tarifs de location</Link> ou savoir
            <Link href="/dormir-en-van-ecosse/"> où dormir en van</Link>, vous trouverez toutes les informations
            pour préparer votre aventure.
          </p>

          <h2>Pourquoi choisir la location de van pour découvrir l&apos;Écosse ?</h2>

          <p>
            L&apos;Écosse est une destination qui se savoure lentement. Ses routes sinueuses traversent des paysages
            à couper le souffle, ses villages pittoresques invitent à la flânerie, et ses sites naturels méritent
            qu&apos;on leur consacre du temps. C&apos;est précisément pour cela que <strong>louer un van en Écosse</strong>
            constitue le choix idéal pour les voyageurs en quête d&apos;authenticité.
          </p>

          <p>
            Contrairement à un circuit organisé ou à un séjour en hôtel, le van aménagé vous offre une liberté
            totale. Vous décidez de votre itinéraire, de vos arrêts et de votre rythme. Aperçu un panorama sublime ?
            Garez-vous et profitez. Un pub chaleureux vous fait de l&apos;oeil en fin de journée ? Restez pour la soirée
            et dormez sur place. Cette flexibilité est inestimable dans un pays où la météo peut changer en quelques
            heures et où les plus belles découvertes sont souvent imprévues.
          </p>

          <div className="my-12">
            <Image
              src="/images/roadtrip-panoramique.jpg"
              alt="Route panoramique écossaise traversant les Highlands avec un van"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les routes écossaises offrent des panoramas exceptionnels à chaque virage
            </p>
          </div>

          <h2>Les avantages de la location van aménagé Écosse</h2>

          <p>
            Opter pour un <strong>van aménagé en Écosse</strong> présente de nombreux avantages que les autres
            modes de voyage ne peuvent offrir. Voici pourquoi de plus en plus de voyageurs font ce choix :
          </p>

          <h3>Une économie substantielle sur votre budget voyage</h3>

          <p>
            Le coût de l&apos;hébergement en Écosse peut rapidement grimper, surtout en haute saison.
            Les hôtels dans les Highlands affichent souvent des tarifs élevés, et la disponibilité
            peut être limitée. Avec un van, vous combinez transport et hébergement en une seule
            dépense. Même en comptant le carburant et les aires de camping occasionnelles,
            le budget total reste généralement inférieur à celui d&apos;un voyage classique.
          </p>

          <p>
            Consultez notre page sur les <Link href="/prix-location-van-ecosse/">prix de location van en Écosse</Link> pour
            une estimation détaillée des coûts.
          </p>

          <h3>L&apos;accès aux sites les plus spectaculaires</h3>

          <p>
            Les transports en commun en Écosse sont limités, particulièrement dans les régions
            reculées des Highlands. Avec votre van, vous accédez facilement aux endroits les plus
            photogéniques : le Quiraing sur l&apos;île de Skye, les piscines naturelles de Glen Coe,
            ou les plages désertes de la côte nord-ouest. Ces sites magiques restent souvent
            inaccessibles aux voyageurs sans véhicule.
          </p>

          <h3>Une immersion totale dans la nature écossaise</h3>

          <p>
            Réveillez-vous face à un loch brumeux, prenez votre petit-déjeuner avec vue sur les
            montagnes, endormez-vous sous un ciel étoilé loin de toute pollution lumineuse.
            Le van permet cette connexion unique avec la nature, impossible à reproduire depuis
            une chambre d&apos;hôtel.
          </p>
        </div>

        <AffiliateCTA variant="hero" />

        <div className="prose-custom">
          <h2>Où louer un van en Écosse ?</h2>

          <p>
            Deux villes principales s&apos;imposent comme points de départ pour la <strong>location de van en Écosse</strong> :
            Édimbourg et Glasgow. Chacune présente des avantages selon votre itinéraire prévu.
          </p>

          <h3>Location van Écosse depuis Édimbourg</h3>

          <p>
            La capitale écossaise constitue le point de départ le plus populaire.
            <Link href="/location-van-ecosse-edimbourg/"> Louer un van à Édimbourg</Link> vous permet de :
          </p>

          <ul>
            <li>Rejoindre rapidement les Highlands centraux et le Loch Ness</li>
            <li>Explorer la côte est et ses villages de pêcheurs pittoresques</li>
            <li>Profiter d&apos;un large choix de loueurs avec des tarifs compétitifs</li>
            <li>Combiner visite de la ville et road trip</li>
          </ul>

          <h3>Location van Écosse depuis Glasgow</h3>

          <p>
            La plus grande ville d&apos;Écosse offre une alternative intéressante.
            <Link href="/location-van-ecosse-glasgow/"> Louer un van à Glasgow</Link> est idéal pour :
          </p>

          <ul>
            <li>Accéder directement à la côte ouest et ses paysages spectaculaires</li>
            <li>Rejoindre rapidement l&apos;île de Skye et les Hébrides</li>
            <li>Démarrer la célèbre North Coast 500 par l&apos;ouest</li>
            <li>Bénéficier de tarifs parfois plus avantageux qu&apos;à Édimbourg</li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/north-coast-500.jpg"
              alt="Van aménagé sur la route North Coast 500 en Écosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La North Coast 500, l&apos;une des plus belles routes panoramiques au monde
            </p>
          </div>

          <h2>Quelle durée idéale pour un road trip en van en Écosse ?</h2>

          <p>
            La durée optimale dépend de vos objectifs et du territoire que vous souhaitez couvrir.
            Voici nos recommandations :
          </p>

          <h3>Une semaine en van en Écosse</h3>

          <p>
            <Link href="/ecosse-en-van-1-semaine/">Un itinéraire d&apos;une semaine</Link> permet de découvrir
            les incontournables : Édimbourg, les Highlands centraux, le Loch Ness et potentiellement
            l&apos;île de Skye. C&apos;est une durée suffisante pour une première approche de l&apos;Écosse,
            bien que certains trajets puissent sembler un peu pressés.
          </p>

          <h3>Deux semaines en van en Écosse</h3>

          <p>
            <Link href="/ecosse-en-van-2-semaines/">Deux semaines représentent la durée idéale</Link> pour
            explorer l&apos;Écosse en profondeur. Vous aurez le temps de parcourir la North Coast 500,
            d&apos;explorer Skye sans vous presser, de découvrir les îles des Hébrides extérieures ou
            de vous aventurer dans les Highlands de l&apos;ouest, moins fréquentés mais tout aussi
            spectaculaires.
          </p>

          <h2>Les meilleurs itinéraires en van en Écosse</h2>

          <p>
            L&apos;Écosse regorge de routes panoramiques parfaites pour le <strong>road trip en van</strong>.
            Voici les circuits les plus appréciés :
          </p>

          <h3>La North Coast 500</h3>

          <p>
            Surnommée la "Route 66 écossaise", cette boucle de 830 kilomètres longe les côtes nord
            de l&apos;Écosse. Elle traverse des paysages d&apos;une beauté sauvage incomparable : falaises
            vertigineuses, plages désertes, villages de pêcheurs authentiques. Comptez minimum
            5 jours, idéalement une semaine pour en profiter pleinement.
          </p>

          <h3>L&apos;île de Skye et les Highlands de l&apos;ouest</h3>

          <p>
            Skye est sans doute l&apos;île la plus photogénique d&apos;Écosse. Ses paysages lunaires,
            ses formations rocheuses spectaculaires et sa lumière changeante en font un paradis
            pour les photographes et les amoureux de nature. Prévoyez au moins 3 jours sur l&apos;île.
          </p>

          <p>
            Découvrez tous nos conseils sur le <Link href="/road-trip-ecosse-van/">road trip en Écosse</Link>.
          </p>

          <h2>Dormir en van en Écosse : ce qu&apos;il faut savoir</h2>

          <p>
            L&apos;Écosse est l&apos;un des pays les plus accueillants pour les voyageurs en van grâce
            à sa législation particulière. Le "Right to Roam" (droit d&apos;accès) permet le camping
            sauvage responsable dans la plupart des zones rurales, sous certaines conditions.
          </p>

          <p>
            Consultez notre page sur <Link href="/dormir-en-van-ecosse/">où dormir en van en Écosse</Link> pour
            connaître les règles, les meilleurs spots et nos conseils pratiques.
          </p>

          <div className="my-12">
            <Image
              src="/images/dormir-van-lac.jpg"
              alt="Van garé au bord d&apos;un loch écossais au coucher du soleil"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Se réveiller au bord d&apos;un loch : une expérience inoubliable
            </p>
          </div>

          <h2>Conseils pratiques pour votre location van Écosse</h2>

          <h3>La conduite à gauche</h3>

          <p>
            Au Royaume-Uni, on roule à gauche. Si c&apos;est votre première expérience, ne vous
            inquiétez pas : l&apos;adaptation est généralement rapide. Les routes écossaises sont
            peu fréquentées hors des grandes villes, ce qui facilite la prise en main. Attention
            toutefois aux "single track roads" (routes à voie unique) qui nécessitent d&apos;utiliser
            les "passing places" pour croiser les véhicules.
          </p>

          <h3>La météo écossaise</h3>

          <p>
            L&apos;Écosse est connue pour son climat changeant. Il est possible d&apos;expérimenter
            les quatre saisons en une seule journée. Prévoyez des vêtements adaptés et restez
            flexibles dans votre planning. Le van vous permet justement cette adaptabilité :
            si le temps est mauvais dans une région, déplacez-vous ailleurs.
          </p>

          <h3>L&apos;équipement du van</h3>

          <p>
            Vérifiez que votre van est équipé pour le climat écossais : chauffage efficace,
            bonne isolation, literie chaude. Les nuits peuvent être fraîches même en été,
            surtout dans les Highlands.
          </p>

          <h2>Combien coûte une location de van en Écosse ?</h2>

          <p>
            Les tarifs varient selon la saison, le type de van et la durée de location.
            En moyenne, comptez :
          </p>

          <ul>
            <li><strong>Basse saison (novembre-mars) :</strong> 60-100€/jour</li>
            <li><strong>Moyenne saison (avril-mai, septembre-octobre) :</strong> 80-130€/jour</li>
            <li><strong>Haute saison (juin-août) :</strong> 100-180€/jour</li>
          </ul>

          <p>
            Ces prix incluent généralement l&apos;assurance de base et un kilométrage illimité.
            Pour plus de détails, consultez notre page sur les <Link href="/prix-location-van-ecosse/">prix
            de location van en Écosse</Link>.
          </p>
        </div>

        <AffiliateCTA
          title="Prêt à vivre l&apos;aventure écossaise ?"
          description="Comparez des centaines de vans disponibles en Écosse et trouvez celui qui correspond à vos besoins."
          buttonText="Comparer les vans"
        />
      </article>

      <Highlight
        title="Pourquoi partir en van en Écosse ?"
        subtitle="Six bonnes raisons de choisir le van pour votre voyage en Écosse"
        items={highlightItems}
      />

      <section className="container-narrow section-padding">
        <Comparatif rows={comparatifRows} />
      </section>

      <section className="container-narrow section-padding">
        <FAQ items={faqItems} title="Questions fréquentes sur la location van Écosse" />
      </section>

      <section className="container-wide section-padding bg-sand-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            Nos ressources
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Tout ce qu&apos;il faut savoir pour préparer votre road trip en van en Écosse
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
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-2 group-hover:text-forest-600">
                Road Trip Écosse en Van
              </h3>
              <p className="text-stone-600">
                Itinéraires, conseils et étapes incontournables pour votre aventure.
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
                alt="Van aménagé dans les montagnes écossaises"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-2 group-hover:text-forest-600">
                Prix Location Van Écosse
              </h3>
              <p className="text-stone-600">
                Budget, tarifs par saison et conseils pour économiser.
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
                alt="Coucher de soleil sur un van en Écosse"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-forest-800 mb-2 group-hover:text-forest-600">
                Dormir en Van en Écosse
              </h3>
              <p className="text-stone-600">
                Réglementation, spots et astuces pour le bivouac.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="container-narrow section-padding">
        <AffiliateCTA
          variant="hero"
          title="Lancez-vous dans l&apos;aventure"
          description="Des centaines de vans vous attendent en Écosse. Trouvez le véhicule parfait pour votre road trip et créez des souvenirs inoubliables."
          buttonText="Trouver mon van"
        />
      </section>
    </>
  );
}
