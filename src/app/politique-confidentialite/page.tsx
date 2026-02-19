import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles du site ExploreScotlandVan.com',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/politique-confidentialite/',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Politique de confidentialité' },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="bg-forest-800 py-12">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Politique de Confidentialité
          </h1>
        </div>
      </div>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom max-w-none">
          <p className="text-lg text-stone-600 mb-8">
            La protection de vos données personnelles est importante pour nous.
            Cette politique explique comment nous collectons, utilisons et protégeons
            vos informations lorsque vous visitez ExploreScotlandVan.com.
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est Sébastien P., éditeur du site
            ExploreScotlandVan.com.
          </p>

          <h2>Données collectées</h2>
          <p>
            Nous collectons les données suivantes :
          </p>
          <ul>
            <li>
              <strong>Données de navigation :</strong> adresse IP, type de navigateur,
              pages visitées, durée de visite (via les outils d&apos;analyse)
            </li>
            <li>
              <strong>Cookies :</strong> cookies techniques et de mesure d&apos;audience
              (voir section dédiée)
            </li>
          </ul>

          <h2>Finalités du traitement</h2>
          <p>
            Vos données sont utilisées pour :
          </p>
          <ul>
            <li>Améliorer le fonctionnement et le contenu du site</li>
            <li>Analyser la fréquentation et le comportement des visiteurs</li>
            <li>Assurer la sécurité du site</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies pour :
          </p>
          <ul>
            <li>
              <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site
            </li>
            <li>
              <strong>Cookies analytiques :</strong> pour mesurer l&apos;audience et
              comprendre comment le site est utilisé
            </li>
          </ul>
          <p>
            Vous pouvez à tout moment modifier vos préférences de cookies via la
            bannière de consentement ou les paramètres de votre navigateur.
          </p>

          <h2>Liens affiliés</h2>
          <p>
            Ce site contient des liens affiliés vers Yescapa. Lorsque vous cliquez
            sur ces liens et effectuez une réservation, nous pouvons recevoir une
            commission. Yescapa peut collecter des données vous concernant selon sa
            propre politique de confidentialité.
          </p>

          <h2>Conservation des données</h2>
          <p>
            Les données de navigation sont conservées pendant une durée maximale de
            13 mois conformément aux recommandations de la CNIL.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit a l&apos;effacement</li>
            <li>Droit a la limitation du traitement</li>
            <li>Droit d&apos;opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous via le formulaire de contact du site.
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en oeuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données contre tout accès non autorisé,
            modification, divulgation ou destruction.
          </p>

          <h2>Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour périodiquement.
            Les modifications seront publiées sur cette page.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou
            pour exercer vos droits, vous pouvez nous contacter via le formulaire
            de contact du site.
          </p>
        </div>
      </article>
    </>
  );
}
