import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site ExploreScotlandVan.com',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/mentions-legales/',
  },
  openGraph: {
    title: 'Mentions Légales | ExploreScotlandVan',
    description: 'Mentions légales du site ExploreScotlandVan.com',
    url: 'https://www.explorescotlandvan.com/mentions-legales/',
  },
  twitter: {
    title: 'Mentions Légales | ExploreScotlandVan',
    description: 'Mentions légales du site ExploreScotlandVan.com',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Mentions légales' },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="bg-forest-800 py-12">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Mentions Légales
          </h1>
        </div>
      </div>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom max-w-none">
          <h2>Éditeur du site</h2>
          <p>
            Le site ExploreScotlandVan.com est édité par Sébastien P.
          </p>
          <p>
            <strong>Responsable de la publication :</strong> Sébastien P.
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par :
          </p>
          <p>
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            États-Unis
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
            est la propriété exclusive de l&apos;éditeur, sauf mention contraire. Toute reproduction,
            distribution, modification, adaptation, retransmission ou publication de ces éléments
            est strictement interdite sans l&apos;accord écrit de l&apos;éditeur.
          </p>

          <h2>Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens hypertextes vers d&apos;autres sites. L&apos;éditeur
            n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
            leur contenu.
          </p>

          <h2>Liens affiliés</h2>
          <p>
            Ce site contient des liens affiliés vers des services de location de véhicules.
            Lorsque vous effectuez une réservation via ces liens, nous pouvons percevoir une
            commission, sans aucun coût supplémentaire pour vous. Ces liens sont identifiés
            par l&apos;attribut rel=&quot;sponsored&quot;.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible.
            Cependant, elles sont fournies à titre indicatif et peuvent être modifiées
            à tout moment. L&apos;éditeur ne peut garantir l&apos;exactitude, la complétude
            ou l&apos;actualité des informations diffusées sur le site.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de
            litige, les tribunaux français seront seuls compétents.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales, vous pouvez nous
            contacter via le formulaire de contact du site.
          </p>
        </div>
      </article>
    </>
  );
}
