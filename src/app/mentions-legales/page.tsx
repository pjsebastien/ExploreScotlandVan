import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions Legales',
  description: 'Mentions legales du site ExploreScotlandVan.com',
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Mentions legales' },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="bg-forest-800 py-12">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Mentions Legales
          </h1>
        </div>
      </div>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom max-w-none">
          <h2>Editeur du site</h2>
          <p>
            Le site ExploreScotlandVan.com est edite par Sebastien P.
          </p>
          <p>
            <strong>Responsable de la publication :</strong> Sebastien P.
          </p>

          <h2>Hebergement</h2>
          <p>
            Ce site est heberge par :
          </p>
          <p>
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            Etats-Unis
          </p>

          <h2>Propriete intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icones, etc.)
            est la propriete exclusive de l&apos;editeur, sauf mention contraire. Toute reproduction,
            distribution, modification, adaptation, retransmission ou publication de ces elements
            est strictement interdite sans l&apos;accord ecrit de l&apos;editeur.
          </p>

          <h2>Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens hypertextes vers d&apos;autres sites. L&apos;editeur
            n&apos;exerce aucun controle sur ces sites et decline toute responsabilite quant a
            leur contenu.
          </p>

          <h2>Liens affilies</h2>
          <p>
            Ce site contient des liens affilies vers des services de location de vehicules.
            Lorsque vous effectuez une reservation via ces liens, nous pouvons percevoir une
            commission, sans aucun cout supplementaire pour vous. Ces liens sont identifies
            par l&apos;attribut rel=&quot;sponsored&quot;.
          </p>

          <h2>Limitation de responsabilite</h2>
          <p>
            Les informations contenues sur ce site sont aussi precises que possible.
            Cependant, elles sont fournies a titre indicatif et peuvent etre modifiees
            a tout moment. L&apos;editeur ne peut garantir l&apos;exactitude, la completude
            ou l&apos;actualite des informations diffusees sur le site.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les presentes mentions legales sont soumises au droit francais. En cas de
            litige, les tribunaux francais seront seuls competents.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant ces mentions legales, vous pouvez nous
            contacter via le formulaire de contact du site.
          </p>
        </div>
      </article>
    </>
  );
}
