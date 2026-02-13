import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';

export const metadata: Metadata = {
  title: 'Prix Location Van Écosse - Tarifs et Budget',
  description: 'Decouvrez les prix de location de van en Écosse : tarifs par saison, types de vehicules, couts annexes et conseils pour optimiser votre budget.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/prix-location-van-ecosse/',
  },
  openGraph: {
    title: 'Prix Location Van Écosse - Tarifs et Budget',
    description: 'Decouvrez les prix de location de van en Écosse : tarifs par saison, types de vehicules et conseils budget.',
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
    question: 'La location est-elle moins chere hors saison ?',
    answer: 'Oui, significativement. En basse saison (novembre-mars), les tarifs peuvent etre 40 a 50% inferieurs a la haute saison. Avril-mai et septembre-octobre offrent un bon compromis entre prix et meteo.',
  },
  {
    question: 'Faut-il payer une caution ?',
    answer: 'La plupart des loueurs demandent une caution, generalement entre 500€ et 1500€ selon le type de van. Elle est bloquee sur votre carte bancaire et restituee apres l\'etat des lieux retour.',
  },
  {
    question: 'Le kilometrage est-il illimite ?',
    answer: 'La majorite des offres incluent un kilometrage illimite, mais verifiez toujours les conditions. Certains loueurs appliquent des restrictions ou des frais pour les kilometres supplementaires.',
  },
  {
    question: 'L\'assurance est-elle incluse dans le prix ?',
    answer: 'L\'assurance de base (responsabilite civile) est generalement incluse. Une assurance tous risques avec franchise reduite est souvent proposee en option pour 10-25€/jour supplementaires.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Location Van Écosse',
  description: 'Tout savoir sur les prix de location de van en Écosse avec tarifs par saison et conseils budget.',
  image: 'https://www.explorescotlandvan.com/images/van-montagnes.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
};

export default function PrixLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/images/van-montagnes.jpg"
          alt="Van amenage dans les montagnes ecossaises"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prix Location Van Écosse
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl">
              Tarifs, budget et conseils pour optimiser vos depenses
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
            Combien coute une <strong>location de van en Écosse</strong> ? C&apos;est souvent la premiere
            question que se posent les voyageurs. Les tarifs varient considerablement selon la saison,
            le type de vehicule et le loueur. Ce guide vous aide a comprendre les prix et a etablir
            un budget realiste pour votre <Link href="/road-trip-ecosse-van/">road trip en Écosse</Link>.
          </p>

          <h2>Tarifs moyens de location de van en Écosse</h2>

          <p>
            Les prix dependent principalement de trois facteurs : la saison, le type de van et la
            duree de location. Voici les fourchettes observees sur le marche :
          </p>

          <h3>Prix par saison</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="px-4 py-3 text-left">Saison</th>
                  <th className="px-4 py-3 text-left">Periode</th>
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
                  <td className="px-4 py-3">Juin - Aout</td>
                  <td className="px-4 py-3">100€ - 180€</td>
                  <td className="px-4 py-3">650€ - 1200€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ces tarifs concernent un van amenage standard (2 places couchage). Les fourgons
            plus grands ou mieux equipes peuvent couter 20 a 50% de plus.
          </p>

          <h3>Prix selon le type de van</h3>

          <p>
            Le marche propose differentes categories de vehicules, chacune avec ses avantages :
          </p>

          <ul>
            <li>
              <strong>Van compact (type Caddy, Berlingo amenage) :</strong> 60-100€/jour.
              Ideal pour les couples, facile a conduire et a garer. Equipement basique.
            </li>
            <li>
              <strong>Van moyen (type VW California, Mercedes Marco Polo) :</strong> 100-150€/jour.
              Le meilleur compromis confort/maniabilite. Toit relevable, cuisine integree.
            </li>
            <li>
              <strong>Fourgon amenage (type Fiat Ducato, Citroen Jumper) :</strong> 120-180€/jour.
              Plus d&apos;espace, douche et toilettes souvent inclus. Moins facile sur les petites routes.
            </li>
            <li>
              <strong>Van vintage/original :</strong> 80-200€/jour selon le modele.
              VW Combi ou vehicules atypiques. L&apos;experience avant le confort.
            </li>
          </ul>

          <div className="my-12">
            <Image
              src="/images/sunset-van-ecosse.jpg"
              alt="Van au coucher du soleil en Ecosse"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              Le type de van influence significativement le budget total
            </p>
          </div>

          <h2>Couts annexes a prevoir</h2>

          <p>
            Au-dela de la location pure, plusieurs depenses s&apos;ajoutent au budget :
          </p>

          <h3>Carburant</h3>

          <p>
            L&apos;essence et le diesel sont legerement plus chers au Royaume-Uni qu&apos;en France.
            Comptez environ 1,40-1,60€/litre. Pour un van moyen consommant 8-10L/100km,
            prevoyez <strong>20 a 40€ de carburant par jour</strong> selon vos distances.
          </p>

          <p>
            Astuce : les supermarchés (Tesco, Asda, Morrisons) proposent souvent les meilleurs prix.
          </p>

          <h3>Assurance et options</h3>

          <ul>
            <li><strong>Assurance tous risques :</strong> 10-25€/jour (souvent recommandee)</li>
            <li><strong>Reduction de franchise :</strong> 5-15€/jour</li>
            <li><strong>Conducteur supplementaire :</strong> 5-10€/jour</li>
            <li><strong>Equipement camping :</strong> 20-50€/semaine (table, chaises, etc.)</li>
            <li><strong>GPS :</strong> 5-10€/jour (souvent superflu avec un smartphone)</li>
          </ul>

          <h3>Hebergement et camping</h3>

          <p>
            L&apos;un des avantages du van en Écosse est la possibilite de bivouaquer gratuitement
            grace au "Right to Roam". Cependant, vous souhaiterez probablement alterner :
          </p>

          <ul>
            <li><strong>Bivouac sauvage :</strong> Gratuit (respectez les regles)</li>
            <li><strong>Aires de camping-car :</strong> 5-15€/nuit</li>
            <li><strong>Campings avec services :</strong> 20-35€/nuit</li>
          </ul>

          <p>
            Consultez notre guide <Link href="/dormir-en-van-ecosse/">Dormir en van en Écosse</Link> pour
            plus de details sur les options d&apos;hebergement.
          </p>

          <h2>Budget total pour un road trip en van en Écosse</h2>

          <p>
            Voici des estimations de budget pour un couple, tout compris (hors vols) :
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="px-4 py-3 text-left">Duree</th>
                  <th className="px-4 py-3 text-left">Budget economique</th>
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
            <strong>Budget economique :</strong> Van simple, bivouac majoritaire, courses au supermarche.<br />
            <strong>Budget confort :</strong> Van bien equipe, mix camping/bivouac, quelques restaurants.<br />
            <strong>Budget premium :</strong> Fourgon haut de gamme, campings confortables, restaurants frequents.
          </p>
        </div>

        <AffiliateCTA variant="hero" />

        <div className="prose-custom">
          <h2>Comment economiser sur la location de van en Écosse</h2>

          <h3>Reserver a l&apos;avance</h3>

          <p>
            Les tarifs augmentent a mesure que la date approche, surtout en haute saison.
            Reserver 3 a 6 mois a l&apos;avance peut permettre d&apos;economiser 20 a 30% sur le prix.
            Les meilleurs vans partent en premier.
          </p>

          <h3>Etre flexible sur les dates</h3>

          <p>
            Decaler votre voyage de quelques jours peut faire une grande difference. Les departs
            en milieu de semaine sont souvent moins chers que le week-end. Eviter les vacances
            scolaires reduit aussi significativement les couts.
          </p>

          <h3>Comparer les offres</h3>

          <p>
            Les prix varient considerablement entre loueurs. Utilisez les comparateurs et n&apos;hesitez
            pas a contacter directement les proprietaires sur les plateformes de location entre
            particuliers, souvent moins cheres que les agences traditionnelles.
          </p>

          <h3>Optimiser la duree</h3>

          <p>
            Les tarifs degressifs sont courants : une semaine coute proportionnellement moins cher
            que 7 jours isoles. Si vous hesitez entre 6 et 8 jours, les 8 jours seront peut-etre
            a peine plus chers.
          </p>

          <h3>Choisir le bon point de depart</h3>

          <p>
            <Link href="/location-van-ecosse-edimbourg/">Edimbourg</Link> concentre plus de loueurs,
            donc plus de concurrence et potentiellement de meilleurs prix.
            <Link href="/location-van-ecosse-glasgow/">Glasgow</Link> peut offrir des opportunites
            interessantes, notamment pour les locations entre particuliers.
          </p>

          <h2>Ce que le prix inclut generalement</h2>

          <ul>
            <li>Kilometrage illimite (verifier)</li>
            <li>Assurance responsabilite civile</li>
            <li>Equipement de base (vaisselle, literie)</li>
            <li>Assistance routiere 24h/24</li>
            <li>Briefing et etat des lieux</li>
          </ul>

          <h2>Frais supplementaires possibles</h2>

          <ul>
            <li>Nettoyage si le van est rendu sale</li>
            <li>Retard au retour</li>
            <li>Plein de carburant non fait</li>
            <li>Dommages non couverts par l&apos;assurance</li>
            <li>Annulation tardive</li>
          </ul>

          <p>
            Lisez attentivement les conditions generales avant de reserver pour eviter les surprises.
          </p>
        </div>

        <AffiliateCTA
          title="Comparez les prix maintenant"
          description="Trouvez le meilleur rapport qualite-prix pour votre location de van en Écosse."
          buttonText="Voir les offres"
        />

        <FAQ items={faqItems} title="Questions sur les prix" />
      </article>
    </>
  );
}
