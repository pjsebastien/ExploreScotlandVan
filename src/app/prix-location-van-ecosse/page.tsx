import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';
import HeroPage from '@/components/HeroPage';

export const metadata: Metadata = {
  title: 'Prix location van Écosse : tarifs et budget détaillé',
  description: 'Découvrez les vrais prix de location de van en Écosse : tarifs journaliers, frais cachés et budget total pour votre road trip dans les Highlands.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/prix-location-van-ecosse/',
  },
  openGraph: {
    title: 'Prix location van Écosse : tarifs et budget détaillé',
    description: 'Découvrez les vrais prix de location de van en Écosse : tarifs journaliers et budget total.',
    url: 'https://www.explorescotlandvan.com/prix-location-van-ecosse/',
    images: [{ url: '/images/van-montagnes.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Prix Location Van Écosse' },
];

const faqItems = [
  {
    question: 'La location est-elle moins chère hors saison ?',
    answer: 'Oui, significativement. En basse saison (novembre-mars), les tarifs peuvent être 40 à 50% inférieurs à la haute saison. Avril-mai et septembre-octobre offrent un bon compromis entre prix et météo.',
  },
  {
    question: 'Faut-il payer une caution ?',
    answer: 'La plupart des loueurs demandent une caution, généralement entre 500€ et 1500€ selon le type de van. Elle est bloquée sur votre carte bancaire et restituée après l\'état des lieux retour.',
  },
  {
    question: 'Le kilometrage est-il illimite ?',
    answer: 'La majorité des offres incluent un kilométrage illimité, mais vérifiez toujours les conditions. Certains loueurs appliquent des restrictions ou des frais pour les kilomètres supplémentaires.',
  },
  {
    question: 'L\'assurance est-elle incluse dans le prix ?',
    answer: 'L\'assurance de base (responsabilité civile) est généralement incluse. Une assurance tous risques avec franchise réduite est souvent proposée en option pour 10-25€/jour supplémentaires.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Location Van Écosse',
  description: 'Tout savoir sur les prix de location de van en Écosse avec tarifs par saison et conseils budget.',
  image: 'https://www.explorescotlandvan.com/images/van-montagnes.jpg',
  datePublished: '2026-01-15',
  dateModified: '2026-02-19',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
};

export default function PrixLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <HeroPage
        title="Combien coûte la location d'un van en Écosse ?"
        subtitle="Tarifs réels, frais cachés et budget détaillé pour votre road trip"
        badge="Tarifs et budget"
        image="/images/van-montagnes.jpg"
        imageAlt="Van aménagé dans les montagnes écossaises"
        stats={[
          { value: '85€', label: 'Prix moyen /jour' },
          { value: '-40%', label: 'Hors saison' },
          { value: '100+', label: 'Vans comparés' },
          { value: '0€', label: 'Frais cachés' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <VanShowcase />

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Combien coûte une <strong>location de van en Écosse</strong> ? C&apos;est souvent la première
            question que se posent les voyageurs. Les tarifs varient considérablement selon la saison,
            le type de véhicule et le loueur. Ce guide vous aide à comprendre les prix et à établir
            un budget réaliste pour votre <Link href="/road-trip-ecosse-van/">road trip en Écosse</Link>.
          </p>

          <h2>Tarifs moyens de location de van en Écosse</h2>

          <p>
            Les prix dépendent principalement de trois facteurs : la saison, le type de van et la
            durée de location. Voici les fourchettes observées sur le marché :
          </p>

          <h3>Prix par saison</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="px-4 py-3 text-left">Saison</th>
                  <th className="px-4 py-3 text-left">Période</th>
                  <th className="px-4 py-3 text-left">Prix/jour</th>
                  <th className="px-4 py-3 text-left">Prix/semaine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 bg-white">
                  <td className="px-4 py-3 font-medium">Basse saison</td>
                  <td className="px-4 py-3">Novembre - Mars</td>
                  <td className="px-4 py-3">60€ - 100€</td>
                  <td className="px-4 py-3">400€ - 650€</td>
                </tr>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <td className="px-4 py-3 font-medium">Moyenne saison</td>
                  <td className="px-4 py-3">Avril - Mai, Sept - Oct</td>
                  <td className="px-4 py-3">80€ - 130€</td>
                  <td className="px-4 py-3">500€ - 850€</td>
                </tr>
                <tr className="border-b border-stone-200 bg-white">
                  <td className="px-4 py-3 font-medium">Haute saison</td>
                  <td className="px-4 py-3">Juin - Août</td>
                  <td className="px-4 py-3">100€ - 180€</td>
                  <td className="px-4 py-3">650€ - 1200€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ces tarifs concernent un van aménagé standard (2 places couchage). Les fourgons
            plus grands ou mieux équipés peuvent coûter 20 à 50% de plus.
          </p>

          <h3>Prix selon le type de van</h3>

          <p>
            Le marché propose différentes catégories de véhicules, chacune avec ses avantages :
          </p>

          <ul>
            <li>
              <strong>Van compact (type Caddy, Berlingo aménagé) :</strong> 60-100€/jour.
              Idéal pour les couples, facile à conduire et à garer. Équipement basique.
            </li>
            <li>
              <strong>Van moyen (type VW California, Mercedes Marco Polo) :</strong> 100-150€/jour.
              Le meilleur compromis confort/maniabilité. Toit relevable, cuisine intégrée.
            </li>
            <li>
              <strong>Fourgon aménagé (type Fiat Ducato, Citroën Jumper) :</strong> 120-180€/jour.
              Plus d&apos;espace, douche et toilettes souvent inclus. Moins facile sur les petites routes.
            </li>
            <li>
              <strong>Van vintage/original :</strong> 80-200€/jour selon le modèle.
              VW Combi ou véhicules atypiques. L&apos;expérience avant le confort.
            </li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/sunset-van-ecosse.jpg"
              alt="Van au coucher du soleil en Écosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Le type de van influence significativement le budget total
            </p>
          </div>

          <h2>Coûts annexes à prévoir</h2>

          <p>
            Au-delà de la location pure, plusieurs dépenses s&apos;ajoutent au budget :
          </p>

          <h3>Carburant</h3>

          <p>
            L&apos;essence et le diesel sont légèrement plus chers au Royaume-Uni qu&apos;en France.
            Comptez environ 1,40-1,60€/litre. Pour un van moyen consommant 8-10L/100km,
            prévoyez <strong>20 à 40€ de carburant par jour</strong> selon vos distances.
          </p>

          <p>
            Astuce : les supermarchés (Tesco, Asda, Morrisons) proposent souvent les meilleurs prix.
          </p>

          <h3>Assurance et options</h3>

          <ul>
            <li><strong>Assurance tous risques :</strong> 10-25€/jour (souvent recommandée)</li>
            <li><strong>Réduction de franchise :</strong> 5-15€/jour</li>
            <li><strong>Conducteur supplémentaire :</strong> 5-10€/jour</li>
            <li><strong>Équipement camping :</strong> 20-50€/semaine (table, chaises, etc.)</li>
            <li><strong>GPS :</strong> 5-10€/jour (souvent superflu avec un smartphone)</li>
          </ul>

          <h3>Hébergement et camping</h3>

          <p>
            L&apos;un des avantages du van en Écosse est la possibilité de bivouaquer gratuitement
            grâce au "Right to Roam". Cependant, vous souhaiterez probablement alterner :
          </p>

          <ul>
            <li><strong>Bivouac sauvage :</strong> Gratuit (respectez les règles)</li>
            <li><strong>Aires de camping-car :</strong> 5-15€/nuit</li>
            <li><strong>Campings avec services :</strong> 20-35€/nuit</li>
          </ul>

          <p>
            Consultez notre guide <Link href="/dormir-en-van-ecosse/">Dormir en van en Écosse</Link> pour
            plus de détails sur les options d&apos;hébergement.
          </p>

          <h2>Budget total pour un road trip en van en Écosse</h2>

          <p>
            Voici des estimations de budget pour un couple, tout compris (hors vols) :
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="px-4 py-3 text-left">Durée</th>
                  <th className="px-4 py-3 text-left">Budget économique</th>
                  <th className="px-4 py-3 text-left">Budget confort</th>
                  <th className="px-4 py-3 text-left">Budget premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 bg-white">
                  <td className="px-4 py-3 font-medium"><Link href="/ecosse-en-van-1-semaine/" className="text-forest-700 hover:underline">1 semaine</Link></td>
                  <td className="px-4 py-3">900€ - 1200€</td>
                  <td className="px-4 py-3">1400€ - 1800€</td>
                  <td className="px-4 py-3">2000€ - 2500€</td>
                </tr>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <td className="px-4 py-3 font-medium">10 jours</td>
                  <td className="px-4 py-3">1200€ - 1600€</td>
                  <td className="px-4 py-3">1800€ - 2400€</td>
                  <td className="px-4 py-3">2800€ - 3500€</td>
                </tr>
                <tr className="border-b border-stone-200 bg-white">
                  <td className="px-4 py-3 font-medium"><Link href="/ecosse-en-van-2-semaines/" className="text-forest-700 hover:underline">2 semaines</Link></td>
                  <td className="px-4 py-3">1600€ - 2200€</td>
                  <td className="px-4 py-3">2500€ - 3500€</td>
                  <td className="px-4 py-3">4000€ - 5000€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Budget économique :</strong> Van simple, bivouac majoritaire, courses au supermarché.<br />
            <strong>Budget confort :</strong> Van bien équipé, mix camping/bivouac, quelques restaurants.<br />
            <strong>Budget premium :</strong> Fourgon haut de gamme, campings confortables, restaurants fréquents.
          </p>
        </div>

        <AffiliateCTA variant="hero" />

        <div className="prose-custom">
          <h2>Comment économiser sur la location de van en Écosse</h2>

          <h3>Réserver à l&apos;avance</h3>

          <p>
            Les tarifs augmentent à mesure que la date approche, surtout en haute saison.
            Réserver 3 à 6 mois à l&apos;avance peut permettre d&apos;économiser 20 à 30% sur le prix.
            Les meilleurs vans partent en premier.
          </p>

          <h3>Être flexible sur les dates</h3>

          <p>
            Décaler votre voyage de quelques jours peut faire une grande différence. Les départs
            en milieu de semaine sont souvent moins chers que le week-end. Éviter les vacances
            scolaires réduit aussi significativement les coûts.
          </p>

          <h3>Comparer les offres</h3>

          <p>
            Les prix varient considérablement entre loueurs. Utilisez les comparateurs et n&apos;hésitez
            pas à contacter directement les propriétaires sur les plateformes de location entre
            particuliers, souvent moins chères que les agences traditionnelles.
          </p>

          <h3>Optimiser la durée</h3>

          <p>
            Les tarifs dégressifs sont courants : une semaine coûte proportionnellement moins cher
            que 7 jours isolés. Si vous hésitez entre 6 et 8 jours, les 8 jours seront peut-être
            à peine plus chers.
          </p>

          <h3>Choisir le bon point de départ</h3>

          <p>
            <Link href="/location-van-ecosse-edimbourg/">Édimbourg</Link> concentre plus de loueurs,
            donc plus de concurrence et potentiellement de meilleurs prix.
            <Link href="/location-van-ecosse-glasgow/">Glasgow</Link> peut offrir des opportunités
            intéressantes, notamment pour les locations entre particuliers.
          </p>

          <h2>Ce que le prix inclut généralement</h2>

          <ul>
            <li>Kilométrage illimité (vérifier)</li>
            <li>Assurance responsabilité civile</li>
            <li>Équipement de base (vaisselle, literie)</li>
            <li>Assistance routière 24h/24</li>
            <li>Briefing et état des lieux</li>
          </ul>

          <h2>Frais supplémentaires possibles</h2>

          <ul>
            <li>Nettoyage si le van est rendu sale</li>
            <li>Retard au retour</li>
            <li>Plein de carburant non fait</li>
            <li>Dommages non couverts par l&apos;assurance</li>
            <li>Annulation tardive</li>
          </ul>

          <p>
            Lisez attentivement les conditions générales avant de réserver pour éviter les surprises.
          </p>
        </div>

        <AffiliateCTA
          title="Comparez les prix maintenant"
          description="Trouvez le meilleur rapport qualité-prix pour votre location de van en Écosse."
          buttonText="Voir les offres"
        />

        <FAQ items={faqItems} title="Questions sur les prix" />
      </article>
    </>
  );
}
