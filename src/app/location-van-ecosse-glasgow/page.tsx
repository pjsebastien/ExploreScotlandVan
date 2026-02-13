import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import VanShowcase from '@/components/VanShowcase';

export const metadata: Metadata = {
  title: 'Location Van Écosse Glasgow - Loueurs et Conseils',
  description: 'Louez un van a Glasgow pour votre road trip en Écosse. Acces direct a la cote Ouest, Skye et la NC500. Conseils pratiques et itineraires.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/location-van-ecosse-glasgow/',
  },
  openGraph: {
    title: 'Location Van Écosse Glasgow - Loueurs et Conseils',
    description: 'Louez un van a Glasgow pour votre road trip en Écosse. Acces direct a la cote Ouest et Skye.',
    url: 'https://www.explorescotlandvan.com/location-van-ecosse-glasgow/',
    images: [{ url: '/images/roadtrip-mer-montagne.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Glasgow' },
];

const faqItems = [
  {
    question: 'Glasgow ou Edimbourg : quel depart choisir ?',
    answer: 'Glasgow est ideal pour explorer la cote Ouest, Skye et les Hebrides rapidement. Edimbourg convient mieux pour les Highlands de l\'Est et le Loch Ness. Si vous faites une boucle complete, les deux villes se valent.',
  },
  {
    question: 'Peut-on recuperer a Glasgow et rendre a Edimbourg ?',
    answer: 'Certains loueurs proposent cette option (one-way rental), generalement moyennant des frais supplementaires de 50 a 150€. Verifiez lors de la reservation.',
  },
  {
    question: 'L\'offre de vans est-elle suffisante a Glasgow ?',
    answer: 'L\'offre est moins importante qu\'a Edimbourg mais reste adequate. Reservez a l\'avance en haute saison pour avoir le choix. Les plateformes entre particuliers complètent bien l\'offre des agences.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Écosse Glasgow',
  description: 'Tout savoir pour louer un van a Glasgow et partir en road trip sur la cote Ouest ecossaise.',
  image: 'https://www.explorescotlandvan.com/images/roadtrip-mer-montagne.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
};

export default function GlasgowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/images/roadtrip-mer-montagne.jpg"
          alt="Road trip en van entre mer et montagne sur la cote Ouest ecossaise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Location Van Écosse Glasgow
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl">
              La porte d&apos;entree vers la cote Ouest et les iles
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
            Glasgow, plus grande ville d&apos;Écosse, offre une alternative interessante a Edimbourg
            pour votre <Link href="/">location de van</Link>. Situee a l&apos;ouest du pays, elle permet
            un acces plus direct a la cote Ouest sauvage, a l&apos;ile de Skye et au debut de la
            North Coast 500.
          </p>

          <h2>Pourquoi partir de Glasgow ?</h2>

          <h3>Acces rapide a la cote Ouest</h3>
          <p>
            Glasgow est idealement placee pour rejoindre les paysages les plus spectaculaires
            de l&apos;Écosse. En moins d&apos;une heure, vous atteignez le <strong>Loch Lomond</strong>
            et les Trossachs. La cote Ouest avec ses fjords, iles et plages sauvages est
            directement accessible.
          </p>

          <h3>Route directe vers Skye</h3>
          <p>
            Depuis Glasgow, deux options pour rejoindre l&apos;ile de Skye :
          </p>
          <ul>
            <li><strong>Par la route (A82) :</strong> Via Glen Coe et Fort William (5h)</li>
            <li><strong>Par ferry depuis Oban :</strong> Plus pittoresque, permet de visiter Mull en route</li>
          </ul>

          <h3>Point de depart pour les Hebrides</h3>
          <p>
            Si vous envisagez d&apos;explorer les <strong>Hebrides exterieures</strong> (Lewis, Harris,
            Uist), Glasgow vous rapproche des ports de ferry : Oban pour les Hebrides interieures,
            Ullapool pour Lewis et Harris.
          </p>

          <h3>Vols low-cost plus nombreux</h3>
          <p>
            L&apos;aeroport de Glasgow propose souvent plus de vols low-cost que celui d&apos;Edimbourg.
            Verifiez les deux lors de votre recherche de billets.
          </p>

          <div className="my-12">
            <Image
              src="/images/highlands-adventure.jpg"
              alt="Aventure en van dans les Highlands depuis Glasgow"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La cote Ouest offre des paysages parmi les plus sauvages d&apos;Écosse
            </p>
          </div>

          <h2>Itineraires recommandes au depart de Glasgow</h2>

          <h3>La cote Ouest et Skye (1 semaine)</h3>
          <ul>
            <li>Glasgow → Loch Lomond → Oban (2h)</li>
            <li>Oban → Fort William → Skye (3h)</li>
            <li>Exploration de Skye (2-3 jours)</li>
            <li>Skye → Loch Ness → Cairngorms (3h)</li>
            <li>Cairngorms → Glasgow via Pitlochry (3h)</li>
          </ul>

          <h3>Hebrides et cote Ouest (2 semaines)</h3>
          <p>
            Un itineraire plus ambitieux incluant :
          </p>
          <ul>
            <li>Ile de Mull (ferry depuis Oban)</li>
            <li>Ile de Skye</li>
            <li>Harris et Lewis (ferry depuis Uig, Skye)</li>
            <li>Retour par la cote Nord et les Cairngorms</li>
          </ul>

          <h3>NC500 au depart de Glasgow</h3>
          <p>
            La <Link href="/road-trip-ecosse-van/">North Coast 500</Link> peut se faire depuis Glasgow
            en rejoignant Inverness par l&apos;A9 ou par la cote Ouest. Comptez une journee supplementaire
            par rapport a un depart d&apos;Edimbourg.
          </p>

          <h2>Conseils pratiques pour Glasgow</h2>

          <h3>Recuperation du van</h3>
          <p>
            Comme a Edimbourg, la plupart des loueurs sont en peripherie. Certains proposent
            la recuperation a l&apos;aeroport de Glasgow ou un service de navette. Verifiez les
            options lors de votre reservation.
          </p>

          <h3>Circuler dans Glasgow</h3>
          <p>
            Le centre-ville de Glasgow est plus accessible en van qu&apos;Edimbourg, mais reste
            peu pratique. Privilegiez les parkings en peripherie ou les Park &amp; Ride si
            vous souhaitez visiter la ville.
          </p>

          <h3>Ravitaillement</h3>
          <p>
            Glasgow dispose de tous les services necessaires avant votre depart : supermarchés,
            stations-service, commerces outdoor (Tiso, Cotswold). C&apos;est le dernier grand
            centre urbain avant les Highlands de l&apos;Ouest.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Trouvez votre van a Glasgow"
          description="Comparez les offres de location et partez a la decouverte de la cote Ouest ecossaise."
        />

        <div className="prose-custom">
          <h2>Prix de location a Glasgow</h2>

          <p>
            Les tarifs a Glasgow sont comparables a ceux d&apos;Edimbourg, parfois legerement
            moins chers du fait d&apos;une offre moins saturee :
          </p>

          <ul>
            <li><strong>Van compact :</strong> 55-95€/jour</li>
            <li><strong>Van moyen :</strong> 90-140€/jour</li>
            <li><strong>Fourgon amenage :</strong> 110-170€/jour</li>
          </ul>

          <p>
            Consultez notre <Link href="/prix-location-van-ecosse/">guide des prix</Link> pour
            une analyse detaillee.
          </p>

          <h2>Se rendre a Glasgow</h2>

          <h3>En avion</h3>
          <p>
            L&apos;aeroport de Glasgow (GLA) est a 15 km du centre-ville. Nombreux vols directs
            depuis la France, notamment avec des compagnies low-cost. Une navette bus relie
            l&apos;aeroport au centre en 25 minutes.
          </p>

          <h3>Depuis Edimbourg</h3>
          <p>
            Train direct Edimbourg-Glasgow en 50 minutes. Si vous atterrissez a Edimbourg
            mais preferez partir de Glasgow, c&apos;est une option simple.
          </p>

          <h2>Visiter Glasgow avant votre road trip</h2>

          <p>
            Glasgow merite une visite avant de partir sur les routes :
          </p>

          <ul>
            <li><strong>Kelvingrove Museum :</strong> Musee gratuit, collections eclectiques</li>
            <li><strong>West End :</strong> Quartier boheme, cafes et boutiques</li>
            <li><strong>Glasgow Cathedral :</strong> Cathedrale medievale</li>
            <li><strong>Street art :</strong> Murales colorees dans le centre-ville</li>
            <li><strong>Riverside Museum :</strong> Musee des transports au design spectaculaire</li>
          </ul>

          <p>
            Glasgow a une personnalite differente d&apos;Edimbourg : plus industrielle, plus
            authentique, avec une scene culturelle dynamique. C&apos;est une excellente introduction
            a l&apos;Écosse moderne avant de plonger dans les paysages ancestraux des Highlands.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur la location a Glasgow" />
      </article>
    </>
  );
}
