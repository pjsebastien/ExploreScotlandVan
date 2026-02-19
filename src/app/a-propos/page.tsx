import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez ExploreScotlandVan.com, votre ressource pour la location de van et le road trip en Écosse.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/a-propos/',
  },
  openGraph: {
    title: 'À Propos | ExploreScotlandVan',
    description: 'Découvrez ExploreScotlandVan.com, votre ressource pour la location de van et le road trip en Écosse.',
    url: 'https://www.explorescotlandvan.com/a-propos/',
  },
  twitter: {
    title: 'À Propos | ExploreScotlandVan',
    description: 'Découvrez ExploreScotlandVan.com, votre ressource pour la location de van et le road trip en Écosse.',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos' },
];

export default function AProposPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/images/van-nature.jpg"
          alt="Van face à la nature écossaise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À Propos
            </h1>
          </div>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <h2>Notre mission</h2>
          <p>
            ExploreScotlandVan.com est né d&apos;une passion pour l&apos;Écosse et le voyage en van.
            Notre objectif est simple : vous aider à préparer et réussir votre road trip
            en van dans les Highlands écossais.
          </p>

          <p>
            Nous avons créé ce site pour partager nos connaissances et notre expérience
            avec tous ceux qui rêvent de découvrir l&apos;Écosse autrement. Que vous soyez
            un vanliffer expérimenté ou un débutant curieux, vous trouverez ici toutes
            les informations pour planifier votre aventure.
          </p>

          <h2>Ce que nous proposons</h2>

          <ul>
            <li>
              <strong>Des itinéraires testés :</strong> Nos parcours ont été conçus pour
              vous faire découvrir le meilleur de l&apos;Écosse, des incontournables aux
              spots plus secrets.
            </li>
            <li>
              <strong>Des conseils pratiques :</strong> Tout ce qu&apos;il faut savoir sur
              la conduite, le bivouac, la météo et la vie quotidienne en van en Écosse.
            </li>
            <li>
              <strong>Des informations sur les prix :</strong> Des estimations réalistes
              pour vous aider à budgétiser votre voyage.
            </li>
            <li>
              <strong>Un accès à la location :</strong> Via notre partenaire Yescapa,
              vous pouvez comparer et réserver des vans auprès de particuliers et
              professionnels en Écosse.
            </li>
          </ul>

          <h2>Transparence</h2>

          <p>
            Ce site contient des liens affiliés vers la plateforme Yescapa. Cela signifie
            que si vous réservez un van via nos liens, nous recevons une petite commission.
            Ce système nous permet de maintenir le site et de continuer à créer du contenu
            de qualité, sans aucun frais supplémentaire pour vous.
          </p>

          <p>
            Nous nous engageons à toujours fournir des informations honnêtes et utiles,
            indépendamment de ces partenariats.
          </p>

          <h2>L&apos;Écosse en van : une expérience unique</h2>

          <p>
            L&apos;Écosse est l&apos;une des destinations les plus adaptées au voyage en van en
            Europe. Ses paysages grandioses, sa législation favorable au camping sauvage
            (le fameux Right to Roam) et ses routes panoramiques en font un terrain de jeu
            idéal pour les aventuriers.
          </p>

          <p>
            Des lochs brumeux aux sommets des Highlands, en passant par les côtes sauvages
            et les villages pittoresques, chaque jour de road trip en Écosse réserve son
            lot de découvertes et d&apos;émerveillements.
          </p>

          <div className="my-12">
            <Image
              src="/images/highlands-adventure.jpg"
              alt="Aventure en van dans les Highlands écossais"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              L&apos;Écosse offre des paysages parmi les plus beaux d&apos;Europe
            </p>
          </div>

          <h2>Contactez-nous</h2>

          <p>
            Vous avez des questions, des suggestions ou simplement envie de partager
            votre expérience de road trip en Écosse ? N&apos;hésitez pas à nous contacter.
          </p>

          <p>
            Bon voyage et bonne route dans les Highlands !
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Prêt à partir ?"
          description="Trouvez le van idéal pour votre aventure écossaise."
        />
      </article>
    </>
  );
}
