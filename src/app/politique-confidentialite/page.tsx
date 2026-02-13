import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de Confidentialite',
  description: 'Politique de confidentialite et protection des donnees personnelles du site ExploreScotlandVan.com',
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Politique de confidentialite' },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="bg-forest-800 py-12">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Politique de Confidentialite
          </h1>
        </div>
      </div>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom max-w-none">
          <p className="text-lg text-stone-600 mb-8">
            La protection de vos donnees personnelles est importante pour nous.
            Cette politique explique comment nous collectons, utilisons et protegeons
            vos informations lorsque vous visitez ExploreScotlandVan.com.
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des donnees est Sebastien P., editeur du site
            ExploreScotlandVan.com.
          </p>

          <h2>Donnees collectees</h2>
          <p>
            Nous collectons les donnees suivantes :
          </p>
          <ul>
            <li>
              <strong>Donnees de navigation :</strong> adresse IP, type de navigateur,
              pages visitees, duree de visite (via les outils d&apos;analyse)
            </li>
            <li>
              <strong>Cookies :</strong> cookies techniques et de mesure d&apos;audience
              (voir section dediee)
            </li>
          </ul>

          <h2>Finalites du traitement</h2>
          <p>
            Vos donnees sont utilisees pour :
          </p>
          <ul>
            <li>Ameliorer le fonctionnement et le contenu du site</li>
            <li>Analyser la frequentation et le comportement des visiteurs</li>
            <li>Assurer la securite du site</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies pour :
          </p>
          <ul>
            <li>
              <strong>Cookies essentiels :</strong> necessaires au fonctionnement du site
            </li>
            <li>
              <strong>Cookies analytiques :</strong> pour mesurer l&apos;audience et
              comprendre comment le site est utilise
            </li>
          </ul>
          <p>
            Vous pouvez a tout moment modifier vos preferences de cookies via la
            banniere de consentement ou les parametres de votre navigateur.
          </p>

          <h2>Liens affilies</h2>
          <p>
            Ce site contient des liens affilies vers Yescapa. Lorsque vous cliquez
            sur ces liens et effectuez une reservation, nous pouvons recevoir une
            commission. Yescapa peut collecter des donnees vous concernant selon sa
            propre politique de confidentialite.
          </p>

          <h2>Conservation des donnees</h2>
          <p>
            Les donnees de navigation sont conservees pendant une duree maximale de
            13 mois conformement aux recommandations de la CNIL.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformement au RGPD, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;acces a vos donnees</li>
            <li>Droit de rectification</li>
            <li>Droit a l&apos;effacement</li>
            <li>Droit a la limitation du traitement</li>
            <li>Droit d&apos;opposition</li>
            <li>Droit a la portabilite</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous via le formulaire de contact du site.
          </p>

          <h2>Securite</h2>
          <p>
            Nous mettons en oeuvre des mesures techniques et organisationnelles
            appropriees pour proteger vos donnees contre tout acces non autorise,
            modification, divulgation ou destruction.
          </p>

          <h2>Modifications</h2>
          <p>
            Cette politique de confidentialite peut etre mise a jour periodiquement.
            Les modifications seront publiees sur cette page.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialite ou
            pour exercer vos droits, vous pouvez nous contacter via le formulaire
            de contact du site.
          </p>
        </div>
      </article>
    </>
  );
}
