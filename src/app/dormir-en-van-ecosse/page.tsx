import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Dormir en van en Écosse : bivouac, spots et règles',
  description: 'Bivouac, camping sauvage, aires : tout savoir pour dormir en van en Écosse. Réglementation, meilleurs spots et astuces pour des nuits tranquilles.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/dormir-en-van-ecosse/',
  },
  openGraph: {
    title: 'Dormir en van en Écosse : bivouac, spots et règles',
    description: 'Bivouac, camping sauvage : tout savoir pour dormir en van en Écosse.',
    url: 'https://www.explorescotlandvan.com/dormir-en-van-ecosse/',
    images: [{ url: '/images/dormir-van-lac.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Dormir en Van Écosse' },
];

const faqItems = [
  {
    question: 'Le camping sauvage est-il légal en Écosse ?',
    answer: 'Oui, grâce au Scottish Outdoor Access Code. Le bivouac est autorisé sur la plupart des terres non cultivées, à condition de respecter certaines règles : ne pas rester plus d\'une nuit au même endroit, ne laisser aucune trace, ne pas allumer de feu (sauf si autorisé), et respecter la vie privée des riverains.',
  },
  {
    question: 'Peut-on dormir n\'importe où avec son van ?',
    answer: 'Non. Le Right to Roam s\'applique principalement aux randonneurs et campeurs légers. Pour les véhicules, certaines restrictions existent, notamment dans les zones touristiques comme Skye ou le Loch Lomond. Vérifiez toujours la signalisation locale.',
  },
  {
    question: 'Y a-t-il des aires de camping-car gratuites ?',
    answer: 'Quelques aires gratuites existent, mais elles sont rares. La plupart des aires de services demandent 5 à 15€ pour une nuit. Les parkings publics sont parfois tolérants pour une nuit, mais ce n\'est pas garanti.',
  },
  {
    question: 'Quels équipements sont nécessaires pour dormir en van ?',
    answer: 'Un bon système de chauffage est essentiel (les nuits sont fraîches même en été). Prévoyez aussi : literie chaude, rideaux occultants, lampe frontale, et de quoi cuisiner. Une bouteille d\'eau pleine et des toilettes portables sont recommandées pour le bivouac.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dormir en Van en Écosse',
  description: 'Tout savoir pour dormir en van en Écosse : réglementation, spots et conseils pratiques.',
  image: 'https://www.explorescotlandvan.com/images/dormir-van-lac.jpg',
  datePublished: '2026-01-20',
  dateModified: '2026-02-19',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function DormirEnVanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Où dormir en van en Écosse ?"
        subtitle="Bivouac, camping sauvage et meilleures options pour vos nuits"
        badge="Bivouac & spots"
        image="/images/dormir-van-lac.jpg"
        imageAlt="Van garé au bord d'un loch écossais pour la nuit"
        stats={[
          { value: '0€', label: 'Bivouac gratuit' },
          { value: '200+', label: 'Spots recensés' },
          { value: '20€', label: 'Camping /nuit' },
          { value: '2003', label: 'Right to Roam' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            L&apos;une des grandes questions du voyage en van : <strong>où dormir en Écosse</strong> ?
            Bonne nouvelle : l&apos;Écosse est l&apos;un des pays les plus accueillants d&apos;Europe pour le camping
            et le bivouac. Grâce au Scottish Outdoor Access Code, vous bénéficiez d&apos;une liberté rare
            pour poser votre van dans des endroits magiques.
          </p>

          <h2>La réglementation écossaise : le Right to Roam</h2>

          <p>
            L&apos;Écosse possède une législation unique en Europe : le <strong>Land Reform Act de 2003</strong>,
            qui établit un droit d&apos;accès responsable à la plupart des terres, incluant le droit de
            camper. Ce "Right to Roam" est encadré par le Scottish Outdoor Access Code.
          </p>

          <h3>Ce que permet le Right to Roam</h3>

          <ul>
            <li>Camper sur la plupart des terres non cultivées et non clôturées</li>
            <li>Traverser des propriétés privées pour accéder à la nature</li>
            <li>Passer une ou deux nuits au même endroit</li>
            <li>Profiter des paysages et de la nature librement</li>
          </ul>

          <h3>Les règles à respecter impérativement</h3>

          <ul>
            <li><strong>Leave No Trace :</strong> Emportez tous vos déchets, y compris les biodégradables</li>
            <li><strong>Pas de feu :</strong> Sauf autorisation explicite, n&apos;allumez pas de feu</li>
            <li><strong>Respect de la vie privée :</strong> Éloignez-vous des habitations</li>
            <li><strong>Durée limitée :</strong> Ne restez pas plus de 2-3 nuits au même endroit</li>
            <li><strong>Stationnement adapté :</strong> Ne bloquez pas les accès, chemins ou portières</li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/sunset-van-ecosse.jpg"
              alt="Coucher de soleil sur un van en Écosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Respecter l&apos;environnement garantit la préservation de ce privilège
            </p>
          </div>

          <h2>Restrictions et zones réglementées</h2>

          <p>
            Le Right to Roam ne s&apos;applique pas partout et certaines zones ont adopté des
            réglementations spécifiques pour les véhicules :
          </p>

          <h3>Zones a restrictions</h3>

          <ul>
            <li>
              <strong>Loch Lomond &amp; Trossachs National Park :</strong> Camping sauvage interdit
              dans certaines zones de mars à septembre. Utilisez les aires désignées.
            </li>
            <li>
              <strong>Ile de Skye :</strong> Certains parkings interdisent le camping nocturne.
              La pression touristique a entraîné des restrictions locales.
            </li>
            <li>
              <strong>Zones urbaines et périurbaines :</strong> Le bivouac y est généralement interdit.
            </li>
            <li>
              <strong>Propriétés privées clôturées :</strong> Demandez toujours l&apos;autorisation.
            </li>
          </ul>

          <h3>Comment repérer les interdictions</h3>

          <p>
            Recherchez les panneaux "No Overnight Parking" ou "No Camping". En l&apos;absence de
            signalisation et si vous respectez les règles, vous êtes généralement autorisés
            à passer la nuit.
          </p>

          <h2>Les meilleures options pour dormir en van</h2>

          <h3>1. Le bivouac sauvage responsable</h3>

          <p>
            L&apos;option la plus authentique et économique. Choisissez un emplacement discret,
            loin des habitations et des routes principales. Les bords de loch, les aires
            de parking en montagne et les zones reculées des Highlands offrent des spots
            mémorables.
          </p>

          <p><strong>Conseils pour trouver un bon spot :</strong></p>
          <ul>
            <li>Repérez les emplacements en fin d&apos;après-midi, avant la tombée de la nuit</li>
            <li>Vérifiez que le terrain est stable et plat</li>
            <li>Assurez-vous de ne pas bloquer un accès ou un chemin</li>
            <li>Évitez les zones trop exposées au vent</li>
            <li>Préférez les endroits avec une vue pour le réveil</li>
          </ul>

          <h3>2. Les aires de camping-car</h3>

          <p>
            L&apos;Écosse dispose d&apos;un réseau d&apos;aires aménagées pour les camping-cars et vans.
            Ces aires offrent souvent :
          </p>

          <ul>
            <li>Vidange des eaux grises et noires</li>
            <li>Remplissage d&apos;eau potable</li>
            <li>Parfois électricité</li>
            <li>Toilettes et douches dans certains cas</li>
          </ul>

          <p>
            <strong>Prix :</strong> 5 a 15€ par nuit en moyenne. Certaines sont gratuites
            mais sans services.
          </p>

          <h3>3. Les campings traditionnels</h3>

          <p>
            Pour une nuit de confort avec tous les services, les campings écossais sont
            une excellente option. Ils permettent de :
          </p>

          <ul>
            <li>Recharger complètement vos batteries</li>
            <li>Prendre une vraie douche chaude</li>
            <li>Faire une lessive</li>
            <li>Rencontrer d&apos;autres voyageurs</li>
          </ul>

          <p>
            <strong>Prix :</strong> 20 a 35€ par nuit selon les services et la saison.
            Réservation recommandée en juillet-août, surtout sur Skye et la NC500.
          </p>

          <h3>4. Les fermes et propriétés privées</h3>

          <p>
            De nombreux agriculteurs écossais accueillent les vans sur leurs terres pour
            quelques livres. C&apos;est l&apos;occasion d&apos;un échange authentique et d&apos;un soutien
            à l&apos;économie locale. Demandez toujours poliment et proposez de payer.
          </p>

          <div className="my-12">
            <Image
              src="/images/campagne-ecosse.jpg"
              alt="Campagne écossaise paisible avec un van"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les fermes écossaises offrent parfois un accueil chaleureux aux voyageurs
            </p>
          </div>

          <h2>Applications et ressources utiles</h2>

          <p>
            Plusieurs applications facilitent la recherche de spots pour la nuit :
          </p>

          <ul>
            <li><strong>Park4Night :</strong> La référence avec des milliers de spots en Écosse</li>
            <li><strong>iOverlander :</strong> Communauté de voyageurs, spots souvent isolés</li>
            <li><strong>Brit Stops :</strong> Réseau de pubs et fermes accueillant les vans (guide payant)</li>
            <li><strong>Campercontact :</strong> Aires de camping-car officielles</li>
          </ul>

          <p>
            Conseil : téléchargez les cartes hors ligne, le réseau mobile est absent dans
            de nombreuses zones des Highlands.
          </p>

          <h2>Conseils pratiques pour bien dormir en van en Écosse</h2>

          <h3>Gérer le froid</h3>

          <p>
            Les nuits écossaises sont fraîches, même en été. Les températures descendent
            facilement sous 10°C, parfois sous 5°C dans les Highlands. Équipez-vous de :
          </p>

          <ul>
            <li>Un chauffage autonome fiable (Webasto, Eberspacher, ou similaire)</li>
            <li>Une couette chaude ou un sac de couchage adapté</li>
            <li>Des vêtements de nuit confortables</li>
            <li>Un isolant pour le pare-brise (réduit la condensation)</li>
          </ul>

          <h3>Gérer l&apos;humidité et la condensation</h3>

          <p>
            L&apos;Écosse est humide, c&apos;est un fait. La condensation dans le van peut devenir
            un problème. Solutions :
          </p>

          <ul>
            <li>Aérez dès que possible, même quelques minutes</li>
            <li>Utilisez un déshumidificateur ou des sachets absorbants</li>
            <li>Ne faites pas sécher vos vêtements mouillés à l&apos;intérieur</li>
            <li>Ouvrez une fenêtre ou une aération la nuit si la température le permet</li>
          </ul>

          <h3>Sécurité et tranquillité</h3>

          <p>
            L&apos;Écosse est très sûre, mais quelques précautions de bon sens s&apos;imposent :
          </p>

          <ul>
            <li>Choisissez des endroits où d&apos;autres vans sont déjà stationnés</li>
            <li>Évitez les zones isolées si vous ne vous sentez pas à l&apos;aise</li>
            <li>Ne laissez pas d&apos;objets de valeur visibles</li>
            <li>Verrouillez vos portes la nuit</li>
          </ul>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Prêt pour l&apos;aventure nocturne ?"
          description="Trouvez le van idéal équipé pour les nuits écossaises et partez à la découverte des plus beaux spots."
        />

        <div className="prose-custom">
          <h2>Les meilleurs spots par région</h2>

          <h3>North Coast 500</h3>
          <p>
            Plages désertes, parkings en bord de falaise, aires avec vue sur la mer...
            La NC500 offre les spots les plus spectaculaires. Attention aux restrictions
            locales ponctuelles en haute saison.
          </p>

          <h3>Ile de Skye</h3>
          <p>
            Les spots se raréfient à cause de la surfréquentation. Privilégiez les campings
            ou les aires officielles. Les parkings populaires (Fairy Pools, Old Man of Storr)
            interdisent souvent le camping nocturne.
          </p>

          <h3>Highlands centraux</h3>
          <p>
            Glen Coe, Fort William, Loch Ness... De nombreuses possibilités de bivouac
            dans cette région moins réglementée. Les bords de loch offrent des emplacements
            magiques.
          </p>

          <h3>Cairngorms</h3>
          <p>
            Le parc national autorise le bivouac responsable dans la plupart des zones.
            Ambiance montagne garantie, avec des nuits particulièrement fraîches.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur le bivouac en Écosse" />
      </article>
    </>
  );
}
