import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ Location Van Écosse - Toutes vos Questions',
  description: 'Reponses a toutes vos questions sur la location de van en Écosse : permis, assurance, bivouac, meteo, budget et conseils pratiques.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/faq-location-van-ecosse/',
  },
  openGraph: {
    title: 'FAQ Location Van Écosse - Toutes vos Questions',
    description: 'Reponses a toutes vos questions sur la location de van en Écosse : permis, assurance, bivouac et plus.',
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
    answer: 'Un permis B standard suffit pour la plupart des vans amenages (moins de 3,5 tonnes). Aucun permis special n\'est requis. Votre permis français est valide au Royaume-Uni. Si vous avez un permis d\'un autre pays, verifiez les accords bilateraux.',
  },
  {
    question: 'A quel age peut-on louer un van ?',
    answer: 'La plupart des loueurs exigent un age minimum de 21 ou 23 ans et au moins 2 ans de permis. Certains acceptent les conducteurs plus jeunes moyennant une surprime. Les conducteurs de plus de 70-75 ans peuvent aussi etre soumis a des conditions particulieres.',
  },
  {
    question: 'Faut-il une assurance speciale ?',
    answer: 'L\'assurance de base (responsabilite civile) est toujours incluse dans la location. Une assurance tous risques avec franchise reduite est recommandee et proposee en option (10-25€/jour). Verifiez si votre carte bancaire offre une couverture complementaire.',
  },
  {
    question: 'Le van est-il adapte pour conduire a gauche ?',
    answer: 'Les vans loues en Ecosse ont le volant a droite, adapte a la conduite a gauche britannique. L\'adaptation est generalement rapide, surtout sur les routes peu frequentees des Highlands.',
  },
];

const faqBivouac = [
  {
    question: 'Peut-on dormir n\'importe ou en Ecosse ?',
    answer: 'L\'Ecosse beneficie du "Right to Roam" qui autorise le bivouac responsable sur la plupart des terres non cultivees. Cependant, des restrictions locales existent, notamment a Loch Lomond, sur certains parkings de Skye et en zone urbaine. Verifiez toujours la signalisation.',
  },
  {
    question: 'Quelles sont les regles du camping sauvage ?',
    answer: 'Les regles principales : ne restez pas plus de 2-3 nuits au meme endroit, emportez tous vos dechets, ne faites pas de feu (sauf autorisation), respectez la vie privee des habitants, ne bloquez pas les acces. Le "Leave No Trace" est la regle d\'or.',
  },
  {
    question: 'Y a-t-il des campings en Ecosse ?',
    answer: 'Oui, de nombreux campings de qualite existent dans tout le pays. Ils offrent des services (douches, electricite, wifi) appreciables pour recharger les batteries. Comptez 20-35€/nuit. Reservation recommandee en juillet-aout sur Skye et la NC500.',
  },
  {
    question: 'Ou vider les eaux usees et les toilettes ?',
    answer: 'Les campings et aires de camping-car proposent des services de vidange. Certaines stations-service offrent aussi ce service. L\'application Park4Night repertorie les points de vidange. Ne vidangez jamais dans la nature.',
  },
];

const faqPratique = [
  {
    question: 'Quelle est la meilleure saison pour un road trip en van ?',
    answer: 'Mai a septembre offre les meilleures conditions. Mai-juin : journees longues, moins de monde. Juillet-aout : meilleur temps mais plus de touristes. Septembre : belles couleurs automnales. L\'hiver est deconseille aux debutants (routes difficiles, jours tres courts).',
  },
  {
    question: 'Comment gerer la meteo ecossaise ?',
    answer: 'La meteo est imprévisible : prevoyez des vetements en couches et impermeables. L\'avantage du van est la flexibilite : si le temps est mauvais dans une region, vous pouvez vous deplacer. Les plus belles lumieres arrivent souvent apres la pluie.',
  },
  {
    question: 'Le reseau mobile fonctionne-t-il dans les Highlands ?',
    answer: 'Le reseau est faible ou absent dans de nombreuses zones des Highlands et sur la NC500. Telechargez cartes et informations a l\'avance. C\'est aussi une opportunite de deconnexion !',
  },
  {
    question: 'Ou faire le plein de carburant ?',
    answer: 'Les stations sont espacees dans les Highlands. Faites le plein des que possible et ne descendez jamais sous le quart du reservoir. Les stations des supermarchés (Tesco, Asda) offrent les meilleurs prix.',
  },
  {
    question: 'Les routes ecossaises sont-elles difficiles ?',
    answer: 'La plupart des routes sont bien entretenues mais souvent etroites (single track roads) avec des passing places pour croiser. Conduisez prudemment, soyez courtois avec les locaux et ne sous-estimez pas les temps de trajet.',
  },
];

const faqBudget = [
  {
    question: 'Combien coute une location de van en Écosse ?',
    answer: 'Les prix varient de 60€/jour (basse saison, van simple) a 180€/jour (haute saison, fourgon equipe). En moyenne, comptez 100-130€/jour pour un van confortable en moyenne saison. Consultez notre guide des prix pour plus de details.',
  },
  {
    question: 'Quels sont les couts supplementaires a prevoir ?',
    answer: 'Au-dela de la location : carburant (20-40€/jour), alimentation (30-50€/jour pour 2), camping occasionnel (0-30€/nuit), visites (10-30€/jour). Budget total estime : 150-250€/jour pour un couple tout compris.',
  },
  {
    question: 'Comment economiser sur la location ?',
    answer: 'Reservez a l\'avance (3-6 mois), soyez flexible sur les dates, comparez les offres, partez en moyenne saison, choisissez un van adapte a vos besoins reels.',
  },
  {
    question: 'La caution est-elle elevee ?',
    answer: 'Les cautions varient de 500€ a 1500€ selon le loueur et le type de van. Elle est bloquee sur votre carte bancaire et restituee apres l\'etat des lieux retour, sous reserve qu\'aucun dommage ne soit constate.',
  },
];

const faqEquipement = [
  {
    question: 'Que comprend generalement un van amenage ?',
    answer: 'Un van standard inclut : lit, cuisine (rechaud, evier, frigo), rangements, eclairage, chauffage, batterie auxiliaire. Le linge de lit, la vaisselle et les equipements de camping (table, chaises) sont parfois en option.',
  },
  {
    question: 'Y a-t-il des toilettes dans les vans ?',
    answer: 'Les vans compacts n\'ont generalement pas de toilettes. Les fourgons plus grands en sont souvent equipes (toilettes chimiques ou a cassette). Des toilettes portables peuvent etre louees en option pour les petits vans.',
  },
  {
    question: 'Le chauffage est-il efficace ?',
    answer: 'Les vans modernes sont equipes de chauffages autonomes (diesel ou gaz) tres efficaces. Essentiel en Ecosse ou les nuits sont fraiches meme en ete. Verifiez le type de chauffage lors de votre reservation.',
  },
  {
    question: 'Puis-je emmener mon animal de compagnie ?',
    answer: 'Certains loueurs acceptent les animaux, d\'autres non. Des frais de nettoyage supplementaires peuvent s\'appliquer. Verifiez les conditions avant de reserver et n\'oubliez pas le passeport europeen de votre animal.',
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
            Toutes les reponses a vos questions sur la location de van et le road trip en Écosse
          </p>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom mb-12">
          <p className="text-xl text-stone-600">
            Vous preparez votre <Link href="/">location de van en Écosse</Link> et vous avez des questions ?
            Cette FAQ regroupe les interrogations les plus frequentes des voyageurs. Si vous ne trouvez
            pas votre reponse, n&apos;hesitez pas a consulter nos guides detailles.
          </p>
        </div>

        <nav className="mb-12 p-6 bg-sand-50 rounded-xl">
          <h2 className="text-lg font-semibold text-forest-800 mb-4">Sommaire</h2>
          <ul className="space-y-2 text-forest-700">
            <li><a href="#general" className="hover:underline">Questions generales</a></li>
            <li><a href="#bivouac" className="hover:underline">Bivouac et hebergement</a></li>
            <li><a href="#pratique" className="hover:underline">Conseils pratiques</a></li>
            <li><a href="#budget" className="hover:underline">Budget et prix</a></li>
            <li><a href="#equipement" className="hover:underline">Equipement du van</a></li>
          </ul>
        </nav>

        <section id="general" className="mb-16">
          <FAQ items={faqGeneral} title="Questions generales" />
        </section>

        <section id="bivouac" className="mb-16">
          <FAQ items={faqBivouac} title="Bivouac et hebergement" />
          <div className="mt-6">
            <Link
              href="/dormir-en-van-ecosse/"
              className="text-forest-700 font-medium hover:underline"
            >
              → En savoir plus sur le bivouac en Ecosse
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
              → Voir le guide detaille des prix
            </Link>
          </div>
        </section>

        <section id="equipement" className="mb-16">
          <FAQ items={faqEquipement} title="Equipement du van" />
        </section>

        <div className="prose-custom">
          <h2>Vous avez encore des questions ?</h2>
          <p>
            Consultez nos guides detailles pour des informations completes :
          </p>
          <ul>
            <li><Link href="/road-trip-ecosse-van/">Road trip en Ecosse : itineraires et conseils</Link></li>
            <li><Link href="/prix-location-van-ecosse/">Prix et budget pour la location de van</Link></li>
            <li><Link href="/dormir-en-van-ecosse/">Ou dormir en van en Écosse</Link></li>
            <li><Link href="/ecosse-en-van-1-semaine/">Itineraire d&apos;une semaine</Link></li>
            <li><Link href="/ecosse-en-van-2-semaines/">Itineraire de deux semaines</Link></li>
          </ul>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Pret a partir ?"
          description="Trouvez le van ideal pour votre aventure ecossaise et reservez en quelques clics."
        />
      </article>
    </>
  );
}
