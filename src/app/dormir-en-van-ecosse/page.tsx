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
    question: 'Le camping sauvage est-il legal en Écosse ?',
    answer: 'Oui, grace au Scottish Outdoor Access Code. Le bivouac est autorise sur la plupart des terres non cultivees, a condition de respecter certaines regles : ne pas rester plus d\'une nuit au meme endroit, ne laisser aucune trace, ne pas allumer de feu (sauf si autorise), et respecter la vie privee des riverains.',
  },
  {
    question: 'Peut-on dormir n\'importe ou avec son van ?',
    answer: 'Non. Le Right to Roam s\'applique principalement aux randonneurs et campeurs legers. Pour les vehicules, certaines restrictions existent, notamment dans les zones touristiques comme Skye ou le Loch Lomond. Verifiez toujours la signalisation locale.',
  },
  {
    question: 'Y a-t-il des aires de camping-car gratuites ?',
    answer: 'Quelques aires gratuites existent, mais elles sont rares. La plupart des aires de services demandent 5 a 15€ pour une nuit. Les parkings publics sont parfois tolerants pour une nuit, mais ce n\'est pas garanti.',
  },
  {
    question: 'Quels equipements sont necessaires pour dormir en van ?',
    answer: 'Un bon systeme de chauffage est essentiel (les nuits sont fraiches meme en ete). Prevoyez aussi : literie chaude, rideaux occultants, lampe frontale, et de quoi cuisiner. Une bouteille d\'eau pleine et des toilettes portables sont recommandees pour le bivouac.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dormir en Van en Écosse',
  description: 'Tout savoir pour dormir en van en Ecosse : reglementation, spots et conseils pratiques.',
  image: 'https://www.explorescotlandvan.com/images/dormir-van-lac.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
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
        imageAlt="Van gare au bord d'un loch ecossais pour la nuit"
        stats={[
          { value: '0€', label: 'Bivouac gratuit' },
          { value: '200+', label: 'Spots recenses' },
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
            L&apos;une des grandes questions du voyage en van : <strong>ou dormir en Écosse</strong> ?
            Bonne nouvelle : l&apos;Écosse est l&apos;un des pays les plus accueillants d&apos;Europe pour le camping
            et le bivouac. Grace au Scottish Outdoor Access Code, vous beneficiez d&apos;une liberte rare
            pour poser votre van dans des endroits magiques.
          </p>

          <h2>La reglementation ecossaise : le Right to Roam</h2>

          <p>
            L&apos;Écosse possede une legislation unique en Europe : le <strong>Land Reform Act de 2003</strong>,
            qui etablit un droit d&apos;acces responsable a la plupart des terres, incluant le droit de
            camper. Ce "Right to Roam" est encadre par le Scottish Outdoor Access Code.
          </p>

          <h3>Ce que permet le Right to Roam</h3>

          <ul>
            <li>Camper sur la plupart des terres non cultivees et non cloturees</li>
            <li>Traverser des proprietes privees pour acceder a la nature</li>
            <li>Passer une ou deux nuits au meme endroit</li>
            <li>Profiter des paysages et de la nature librement</li>
          </ul>

          <h3>Les regles a respecter imperativement</h3>

          <ul>
            <li><strong>Leave No Trace :</strong> Emportez tous vos dechets, y compris les biodegradables</li>
            <li><strong>Pas de feu :</strong> Sauf autorisation explicite, n&apos;allumez pas de feu</li>
            <li><strong>Respect de la vie privee :</strong> Eloignez-vous des habitations</li>
            <li><strong>Duree limitee :</strong> Ne restez pas plus de 2-3 nuits au meme endroit</li>
            <li><strong>Stationnement adapte :</strong> Ne bloquez pas les acces, chemins ou portieres</li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/sunset-van-ecosse.jpg"
              alt="Coucher de soleil sur un van en Ecosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Respecter l&apos;environnement garantit la preservation de ce privilege
            </p>
          </div>

          <h2>Restrictions et zones reglementees</h2>

          <p>
            Le Right to Roam ne s&apos;applique pas partout et certaines zones ont adopte des
            reglementations specifiques pour les vehicules :
          </p>

          <h3>Zones a restrictions</h3>

          <ul>
            <li>
              <strong>Loch Lomond &amp; Trossachs National Park :</strong> Camping sauvage interdit
              dans certaines zones de mars a septembre. Utilisez les aires designees.
            </li>
            <li>
              <strong>Ile de Skye :</strong> Certains parkings interdisent le camping nocturne.
              La pression touristique a entraine des restrictions locales.
            </li>
            <li>
              <strong>Zones urbaines et periurbaines :</strong> Le bivouac y est generalement interdit.
            </li>
            <li>
              <strong>Proprietes privees cloturees :</strong> Demandez toujours l&apos;autorisation.
            </li>
          </ul>

          <h3>Comment reperer les interdictions</h3>

          <p>
            Recherchez les panneaux "No Overnight Parking" ou "No Camping". En l&apos;absence de
            signalisation et si vous respectez les regles, vous etes generalement autorises
            a passer la nuit.
          </p>

          <h2>Les meilleures options pour dormir en van</h2>

          <h3>1. Le bivouac sauvage responsable</h3>

          <p>
            L&apos;option la plus authentique et economique. Choisissez un emplacement discret,
            loin des habitations et des routes principales. Les bords de loch, les aires
            de parking en montagne et les zones reculees des Highlands offrent des spots
            memorables.
          </p>

          <p><strong>Conseils pour trouver un bon spot :</strong></p>
          <ul>
            <li>Reperez les emplacements en fin d&apos;apres-midi, avant la tombee de la nuit</li>
            <li>Verifiez que le terrain est stable et plat</li>
            <li>Assurez-vous de ne pas bloquer un acces ou un chemin</li>
            <li>Evitez les zones trop exposees au vent</li>
            <li>Preferez les endroits avec une vue pour le reveil</li>
          </ul>

          <h3>2. Les aires de camping-car</h3>

          <p>
            L&apos;Écosse dispose d&apos;un reseau d&apos;aires amenagees pour les camping-cars et vans.
            Ces aires offrent souvent :
          </p>

          <ul>
            <li>Vidange des eaux grises et noires</li>
            <li>Remplissage d&apos;eau potable</li>
            <li>Parfois electricite</li>
            <li>Toilettes et douches dans certains cas</li>
          </ul>

          <p>
            <strong>Prix :</strong> 5 a 15€ par nuit en moyenne. Certaines sont gratuites
            mais sans services.
          </p>

          <h3>3. Les campings traditionnels</h3>

          <p>
            Pour une nuit de confort avec tous les services, les campings ecossais sont
            une excellente option. Ils permettent de :
          </p>

          <ul>
            <li>Recharger completement vos batteries</li>
            <li>Prendre une vraie douche chaude</li>
            <li>Faire une lessive</li>
            <li>Rencontrer d&apos;autres voyageurs</li>
          </ul>

          <p>
            <strong>Prix :</strong> 20 a 35€ par nuit selon les services et la saison.
            Reservation recommandee en juillet-aout, surtout sur Skye et la NC500.
          </p>

          <h3>4. Les fermes et proprietes privees</h3>

          <p>
            De nombreux agriculteurs ecossais accueillent les vans sur leurs terres pour
            quelques livres. C&apos;est l&apos;occasion d&apos;un echange authentique et d&apos;un soutien
            a l&apos;economie locale. Demandez toujours poliment et proposez de payer.
          </p>

          <div className="my-12">
            <Image
              src="/images/campagne-ecosse.jpg"
              alt="Campagne ecossaise paisible avec un van"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Les fermes ecossaises offrent parfois un accueil chaleureux aux voyageurs
            </p>
          </div>

          <h2>Applications et ressources utiles</h2>

          <p>
            Plusieurs applications facilitent la recherche de spots pour la nuit :
          </p>

          <ul>
            <li><strong>Park4Night :</strong> La reference avec des milliers de spots en Écosse</li>
            <li><strong>iOverlander :</strong> Communaute de voyageurs, spots souvent isoles</li>
            <li><strong>Brit Stops :</strong> Reseau de pubs et fermes accueillant les vans (guide payant)</li>
            <li><strong>Campercontact :</strong> Aires de camping-car officielles</li>
          </ul>

          <p>
            Conseil : telechargez les cartes hors ligne, le reseau mobile est absent dans
            de nombreuses zones des Highlands.
          </p>

          <h2>Conseils pratiques pour bien dormir en van en Ecosse</h2>

          <h3>Gerer le froid</h3>

          <p>
            Les nuits ecossaises sont fraiches, meme en ete. Les temperatures descendent
            facilement sous 10°C, parfois sous 5°C dans les Highlands. Equipez-vous de :
          </p>

          <ul>
            <li>Un chauffage autonome fiable (Webasto, Eberspacher, ou similaire)</li>
            <li>Une couette chaude ou un sac de couchage adapte</li>
            <li>Des vetements de nuit confortables</li>
            <li>Un isolant pour le pare-brise (reduit la condensation)</li>
          </ul>

          <h3>Gerer l&apos;humidite et la condensation</h3>

          <p>
            L&apos;Écosse est humide, c&apos;est un fait. La condensation dans le van peut devenir
            un probleme. Solutions :
          </p>

          <ul>
            <li>Aerez des que possible, meme quelques minutes</li>
            <li>Utilisez un deshumidificateur ou des sachets absorbants</li>
            <li>Ne faites pas secher vos vetements mouilles a l&apos;interieur</li>
            <li>Ouvrez une fenetre ou une aeration la nuit si la temperature le permet</li>
          </ul>

          <h3>Securite et tranquillite</h3>

          <p>
            L&apos;Écosse est tres sure, mais quelques precautions de bon sens s&apos;imposent :
          </p>

          <ul>
            <li>Choisissez des endroits ou d&apos;autres vans sont deja stationnes</li>
            <li>Evitez les zones isolees si vous ne vous sentez pas a l&apos;aise</li>
            <li>Ne laissez pas d&apos;objets de valeur visibles</li>
            <li>Verrouillez vos portes la nuit</li>
          </ul>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Pret pour l&apos;aventure nocturne ?"
          description="Trouvez le van ideal equipe pour les nuits ecossaises et partez a la decouverte des plus beaux spots."
        />

        <div className="prose-custom">
          <h2>Les meilleurs spots par region</h2>

          <h3>North Coast 500</h3>
          <p>
            Plages desertes, parkings en bord de falaise, aires avec vue sur la mer...
            La NC500 offre les spots les plus spectaculaires. Attention aux restrictions
            locales ponctuelles en haute saison.
          </p>

          <h3>Ile de Skye</h3>
          <p>
            Les spots se rarefient a cause de la surfréquentation. Privilégiez les campings
            ou les aires officielles. Les parkings populaires (Fairy Pools, Old Man of Storr)
            interdisent souvent le camping nocturne.
          </p>

          <h3>Highlands centraux</h3>
          <p>
            Glen Coe, Fort William, Loch Ness... De nombreuses possibilites de bivouac
            dans cette region moins reglementee. Les bords de loch offrent des emplacements
            magiques.
          </p>

          <h3>Cairngorms</h3>
          <p>
            Le parc national autorise le bivouac responsable dans la plupart des zones.
            Ambiance montagne garantie, avec des nuits particulierement fraiches.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur le bivouac en Écosse" />
      </article>
    </>
  );
}
