import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ Location Van Écosse - Toutes vos Questions',
  description: 'Réponses à toutes vos questions sur la location de van en Écosse : permis, assurance, bivouac, météo, budget et conseils pratiques.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/faq-location-van-ecosse/',
  },
  openGraph: {
    title: 'FAQ Location Van Écosse - Toutes vos Questions',
    description: 'Réponses à toutes vos questions sur la location de van en Écosse : permis, assurance, bivouac et plus.',
    url: 'https://www.explorescotlandvan.com/faq-location-van-ecosse/',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'FAQ Location Van Écosse' },
];

const faqGeneral = [
  {
    question: 'Quel permis faut-il pour conduire un van en Écosse ?',
    answer: 'Un permis B standard suffit pour la plupart des vans aménagés (moins de 3,5 tonnes). Aucun permis spécial n\'est requis. Votre permis français est valide au Royaume-Uni. Si vous avez un permis d\'un autre pays, vérifiez les accords bilatéraux.',
  },
  {
    question: 'À quel âge peut-on louer un van ?',
    answer: 'La plupart des loueurs exigent un âge minimum de 21 ou 23 ans et au moins 2 ans de permis. Certains acceptent les conducteurs plus jeunes moyennant une surprime. Les conducteurs de plus de 70-75 ans peuvent aussi être soumis à des conditions particulières.',
  },
  {
    question: 'Faut-il une assurance spéciale ?',
    answer: 'L\'assurance de base (responsabilité civile) est toujours incluse dans la location. Une assurance tous risques avec franchise réduite est recommandée et proposée en option (10-25€/jour). Vérifiez si votre carte bancaire offre une couverture complémentaire.',
  },
  {
    question: 'Le van est-il adapté pour conduire à gauche ?',
    answer: 'Les vans loués en Écosse ont le volant à droite, adapté à la conduite à gauche britannique. L\'adaptation est généralement rapide, surtout sur les routes peu fréquentées des Highlands.',
  },
];

const faqBivouac = [
  {
    question: 'Peut-on dormir n\'importe où en Écosse ?',
    answer: 'L\'Écosse bénéficie du "Right to Roam" qui autorise le bivouac responsable sur la plupart des terres non cultivées. Cependant, des restrictions locales existent, notamment à Loch Lomond, sur certains parkings de Skye et en zone urbaine. Vérifiez toujours la signalisation.',
  },
  {
    question: 'Quelles sont les règles du camping sauvage ?',
    answer: 'Les règles principales : ne restez pas plus de 2-3 nuits au même endroit, emportez tous vos déchets, ne faites pas de feu (sauf autorisation), respectez la vie privée des habitants, ne bloquez pas les accès. Le "Leave No Trace" est la règle d\'or.',
  },
  {
    question: 'Y a-t-il des campings en Écosse ?',
    answer: 'Oui, de nombreux campings de qualité existent dans tout le pays. Ils offrent des services (douches, électricité, wifi) appréciables pour recharger les batteries. Comptez 20-35€/nuit. Réservation recommandée en juillet-août sur Skye et la NC500.',
  },
  {
    question: 'Où vider les eaux usées et les toilettes ?',
    answer: 'Les campings et aires de camping-car proposent des services de vidange. Certaines stations-service offrent aussi ce service. L\'application Park4Night répertorie les points de vidange. Ne vidangez jamais dans la nature.',
  },
];

const faqPratique = [
  {
    question: 'Quelle est la meilleure saison pour un road trip en van ?',
    answer: 'Mai à septembre offre les meilleures conditions. Mai-juin : journées longues, moins de monde. Juillet-août : meilleur temps mais plus de touristes. Septembre : belles couleurs automnales. L\'hiver est déconseillé aux débutants (routes difficiles, jours très courts).',
  },
  {
    question: 'Comment gérer la météo écossaise ?',
    answer: 'La météo est imprévisible : prévoyez des vêtements en couches et imperméables. L\'avantage du van est la flexibilité : si le temps est mauvais dans une région, vous pouvez vous déplacer. Les plus belles lumières arrivent souvent après la pluie.',
  },
  {
    question: 'Le réseau mobile fonctionne-t-il dans les Highlands ?',
    answer: 'Le réseau est faible ou absent dans de nombreuses zones des Highlands et sur la NC500. Téléchargez cartes et informations à l\'avance. C\'est aussi une opportunité de déconnexion !',
  },
  {
    question: 'Où faire le plein de carburant ?',
    answer: 'Les stations sont espacées dans les Highlands. Faites le plein dès que possible et ne descendez jamais sous le quart du réservoir. Les stations des supermarchés (Tesco, Asda) offrent les meilleurs prix.',
  },
  {
    question: 'Les routes écossaises sont-elles difficiles ?',
    answer: 'La plupart des routes sont bien entretenues mais souvent étroites (single track roads) avec des passing places pour croiser. Conduisez prudemment, soyez courtois avec les locaux et ne sous-estimez pas les temps de trajet.',
  },
];

const faqBudget = [
  {
    question: 'Combien coûte une location de van en Écosse ?',
    answer: 'Les prix varient de 60€/jour (basse saison, van simple) à 180€/jour (haute saison, fourgon équipé). En moyenne, comptez 100-130€/jour pour un van confortable en moyenne saison. Consultez notre guide des prix pour plus de détails.',
  },
  {
    question: 'Quels sont les coûts supplémentaires à prévoir ?',
    answer: 'Au-delà de la location : carburant (20-40€/jour), alimentation (30-50€/jour pour 2), camping occasionnel (0-30€/nuit), visites (10-30€/jour). Budget total estimé : 150-250€/jour pour un couple tout compris.',
  },
  {
    question: 'Comment économiser sur la location ?',
    answer: 'Réservez à l\'avance (3-6 mois), soyez flexible sur les dates, comparez les offres, partez en moyenne saison, choisissez un van adapté à vos besoins réels.',
  },
  {
    question: 'La caution est-elle élevée ?',
    answer: 'Les cautions varient de 500€ à 1500€ selon le loueur et le type de van. Elle est bloquée sur votre carte bancaire et restituée après l\'état des lieux retour, sous réserve qu\'aucun dommage ne soit constaté.',
  },
];

const faqEquipement = [
  {
    question: 'Que comprend généralement un van aménagé ?',
    answer: 'Un van standard inclut : lit, cuisine (réchaud, évier, frigo), rangements, éclairage, chauffage, batterie auxiliaire. Le linge de lit, la vaisselle et les équipements de camping (table, chaises) sont parfois en option.',
  },
  {
    question: 'Y a-t-il des toilettes dans les vans ?',
    answer: 'Les vans compacts n\'ont généralement pas de toilettes. Les fourgons plus grands en sont souvent équipés (toilettes chimiques ou à cassette). Des toilettes portables peuvent être louées en option pour les petits vans.',
  },
  {
    question: 'Le chauffage est-il efficace ?',
    answer: 'Les vans modernes sont équipés de chauffages autonomes (diesel ou gaz) très efficaces. Essentiel en Écosse où les nuits sont fraîches même en été. Vérifiez le type de chauffage lors de votre réservation.',
  },
  {
    question: 'Puis-je emmener mon animal de compagnie ?',
    answer: 'Certains loueurs acceptent les animaux, d\'autres non. Des frais de nettoyage supplémentaires peuvent s\'appliquer. Vérifiez les conditions avant de réserver et n\'oubliez pas le passeport européen de votre animal.',
  },
];

// Schema.org FAQPage for the entire page
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...faqGeneral, ...faqBivouac, ...faqPratique, ...faqBudget, ...faqEquipement].map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-forest-800 to-forest-900 py-16 md:py-24">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FAQ Location Van Écosse
          </h1>
          <p className="text-xl text-forest-100 max-w-2xl mx-auto">
            Toutes les réponses à vos questions sur la location de van et le road trip en Écosse
          </p>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom mb-12">
          <p className="text-xl text-stone-600">
            Vous préparez votre <Link href="/">location de van en Écosse</Link> et vous avez des questions ?
            Cette FAQ regroupe les interrogations les plus fréquentes des voyageurs. Si vous ne trouvez
            pas votre réponse, n&apos;hésitez pas à consulter nos guides détaillés.
          </p>
        </div>

        <nav className="mb-12 p-6 bg-sand-50 rounded-xl">
          <h2 className="text-lg font-semibold text-forest-800 mb-4">Sommaire</h2>
          <ul className="space-y-2 text-forest-700">
            <li><a href="#general" className="hover:underline">Questions générales</a></li>
            <li><a href="#bivouac" className="hover:underline">Bivouac et hébergement</a></li>
            <li><a href="#pratique" className="hover:underline">Conseils pratiques</a></li>
            <li><a href="#budget" className="hover:underline">Budget et prix</a></li>
            <li><a href="#equipement" className="hover:underline">Équipement du van</a></li>
          </ul>
        </nav>

        <section id="general" className="mb-16">
          <FAQ items={faqGeneral} title="Questions générales" />
        </section>

        <section id="bivouac" className="mb-16">
          <FAQ items={faqBivouac} title="Bivouac et hébergement" />
          <div className="mt-6">
            <Link
              href="/dormir-en-van-ecosse/"
              className="text-forest-700 font-medium hover:underline"
            >
              → En savoir plus sur le bivouac en Écosse
            </Link>
          </div>
        </section>

        <AffiliateCTA variant="compact" />

        <section id="pratique" className="mb-16">
          <FAQ items={faqPratique} title="Conseils pratiques" />
          <div className="mt-6">
            <Link
              href="/road-trip-ecosse-van/"
              className="text-forest-700 font-medium hover:underline"
            >
              → Consultez notre guide complet du road trip
            </Link>
          </div>
        </section>

        <section id="budget" className="mb-16">
          <FAQ items={faqBudget} title="Budget et prix" />
          <div className="mt-6">
            <Link
              href="/prix-location-van-ecosse/"
              className="text-forest-700 font-medium hover:underline"
            >
              → Voir le guide détaillé des prix
            </Link>
          </div>
        </section>

        <section id="equipement" className="mb-16">
          <FAQ items={faqEquipement} title="Équipement du van" />
        </section>

        <div className="prose-custom">
          <h2>Vous avez encore des questions ?</h2>
          <p>
            Consultez nos guides détaillés pour des informations complètes :
          </p>
          <ul>
            <li><Link href="/road-trip-ecosse-van/">Road trip en Écosse : itinéraires et conseils</Link></li>
            <li><Link href="/prix-location-van-ecosse/">Prix et budget pour la location de van</Link></li>
            <li><Link href="/dormir-en-van-ecosse/">Où dormir en van en Écosse</Link></li>
            <li><Link href="/ecosse-en-van-1-semaine/">Itinéraire d&apos;une semaine</Link></li>
            <li><Link href="/ecosse-en-van-2-semaines/">Itinéraire de deux semaines</Link></li>
          </ul>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Prêt à partir ?"
          description="Trouvez le van idéal pour votre aventure écossaise et réservez en quelques clics."
        />
      </article>
    </>
  );
}
