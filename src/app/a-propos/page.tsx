import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata: Metadata = {
  title: 'A Propos',
  description: 'Decouvrez ExploreScotlandVan.com, votre ressource pour la location de van et le road trip en Écosse.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/a-propos/',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'A propos' },
];

export default function AProposPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/images/van-nature.jpg"
          alt="Van face a la nature ecossaise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              A Propos
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
            ExploreScotlandVan.com est ne d&apos;une passion pour l&apos;Écosse et le voyage en van.
            Notre objectif est simple : vous aider a preparer et reussir votre road trip
            en van dans les Highlands ecossais.
          </p>

          <p>
            Nous avons cree ce site pour partager nos connaissances et notre experience
            avec tous ceux qui rêvent de decouvrir l&apos;Écosse autrement. Que vous soyez
            un vanliffer experimente ou un debutant curieux, vous trouverez ici toutes
            les informations pour planifier votre aventure.
          </p>

          <h2>Ce que nous proposons</h2>

          <ul>
            <li>
              <strong>Des itineraires testes :</strong> Nos parcours ont ete concus pour
              vous faire decouvrir le meilleur de l&apos;Écosse, des incontournables aux
              spots plus secrets.
            </li>
            <li>
              <strong>Des conseils pratiques :</strong> Tout ce qu&apos;il faut savoir sur
              la conduite, le bivouac, la meteo et la vie quotidienne en van en Écosse.
            </li>
            <li>
              <strong>Des informations sur les prix :</strong> Des estimations realistes
              pour vous aider a budgetiser votre voyage.
            </li>
            <li>
              <strong>Un acces a la location :</strong> Via notre partenaire Yescapa,
              vous pouvez comparer et reserver des vans aupres de particuliers et
              professionnels en Ecosse.
            </li>
          </ul>

          <h2>Transparence</h2>

          <p>
            Ce site contient des liens affilies vers la plateforme Yescapa. Cela signifie
            que si vous reservez un van via nos liens, nous recevons une petite commission.
            Ce systeme nous permet de maintenir le site et de continuer a creer du contenu
            de qualite, sans aucun frais supplementaire pour vous.
          </p>

          <p>
            Nous nous engageons a toujours fournir des informations honnetes et utiles,
            independamment de ces partenariats.
          </p>

          <h2>L&apos;Écosse en van : une experience unique</h2>

          <p>
            L&apos;Écosse est l&apos;une des destinations les plus adaptees au voyage en van en
            Europe. Ses paysages grandioses, sa legislation favorable au camping sauvage
            (le fameux Right to Roam) et ses routes panoramiques en font un terrain de jeu
            ideal pour les aventuriers.
          </p>

          <p>
            Des lochs brumeux aux sommets des Highlands, en passant par les cotes sauvages
            et les villages pittoresques, chaque jour de road trip en Écosse reserve son
            lot de decouvertes et d&apos;emerveillements.
          </p>

          <div className="my-12">
            <Image
              src="/images/highlands-adventure.jpg"
              alt="Aventure en van dans les Highlands ecossais"
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
            votre experience de road trip en Écosse ? N&apos;hesitez pas a nous contacter.
          </p>

          <p>
            Bon voyage et bonne route dans les Highlands !
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Pret a partir ?"
          description="Trouvez le van ideal pour votre aventure ecossaise."
        />
      </article>
    </>
  );
}
