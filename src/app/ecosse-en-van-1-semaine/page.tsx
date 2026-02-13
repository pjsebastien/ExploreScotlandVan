import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Écosse en Van 1 Semaine - Itineraire Jour par Jour',
  description: 'Itineraire detaille pour decouvrir l\'Écosse en van en 1 semaine : jour par jour, etapes, distances et conseils pour un road trip reussi.',
  alternates: {
    canonical: 'https://explorescotlandvan.com/ecosse-en-van-1-semaine/',
  },
  openGraph: {
    title: 'Écosse en Van 1 Semaine - Itineraire Jour par Jour',
    description: 'Itineraire detaille pour decouvrir l\'Écosse en van en 1 semaine : jour par jour, etapes et conseils.',
    url: 'https://explorescotlandvan.com/ecosse-en-van-1-semaine/',
    images: [{ url: '/images/roadtrip-panoramique.jpg' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-ecosse-van/' },
  { name: 'Écosse 1 Semaine' },
];

const faqItems = [
  {
    question: 'Est-ce suffisant de faire l\'Ecosse en 1 semaine ?',
    answer: 'Une semaine permet de decouvrir les incontournables (Highlands centraux, Skye, Loch Ness) mais le rythme sera soutenu. Si possible, ajoutez 2-3 jours pour plus de flexibilite.',
  },
  {
    question: 'Peut-on faire la North Coast 500 en 1 semaine ?',
    answer: 'Techniquement oui, mais ce serait trop rapide pour en profiter. La NC500 seule merite 5-7 jours. Avec seulement une semaine, privilegiez l\'itineraire classique decrit ici.',
  },
  {
    question: 'Faut-il reserver les hebergements a l\'avance ?',
    answer: 'En haute saison (juillet-aout), reservez les campings de Skye 2-3 semaines a l\'avance. Le reste de l\'annee, la flexibilite est possible.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Écosse en Van 1 Semaine',
  description: 'Itineraire detaille pour decouvrir l\'Écosse en van en une semaine.',
  image: 'https://explorescotlandvan.com/images/roadtrip-panoramique.jpg',
  author: { '@type': 'Organization', name: 'ExploreScotlandVan' },
  publisher: { '@type': 'Organization', name: 'ExploreScotlandVan' },
};

export default function UneSemainePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/images/roadtrip-panoramique.jpg"
          alt="Route panoramique en Ecosse pour un road trip d&apos;une semaine"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Écosse en Van : 1 Semaine
            </h1>
            <p className="text-xl text-sand-100 max-w-2xl">
              L&apos;itineraire ideal pour une premiere decouverte des Highlands
            </p>
          </div>
        </div>
      </section>

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        <div className="prose-custom">
          <p className="text-xl text-stone-600 mb-8">
            Une semaine en van en Écosse : c&apos;est court mais suffisant pour tomber amoureux
            du pays. Cet itineraire optimise vous fait decouvrir les incontournables des Highlands
            sans vous epuiser. Au programme : paysages grandioses, lochs mysterieux et villages
            de caractere.
          </p>

          <div className="bg-forest-50 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-forest-800 mb-2">Resume de l&apos;itineraire</h3>
            <ul className="space-y-1 text-stone-700">
              <li><strong>Distance totale :</strong> environ 850 km</li>
              <li><strong>Depart/Arrivee :</strong> Edimbourg</li>
              <li><strong>Points forts :</strong> Glen Coe, Ile de Skye, Loch Ness, Cairngorms</li>
              <li><strong>Budget estime :</strong> 1200-1800€ pour 2 personnes (van + depenses)</li>
            </ul>
          </div>

          <h2>Jour 1 : Edimbourg - Glen Coe</h2>
          <p><strong>Distance :</strong> 170 km | <strong>Duree :</strong> 3h de route</p>

          <p>
            Recuperez votre van a <Link href="/location-van-ecosse-edimbourg/">Edimbourg</Link> le matin.
            Prenez le temps de vous familiariser avec le vehicule avant de partir. Direction
            l&apos;ouest par la M9 puis l&apos;A84 a travers les Trossachs.
          </p>

          <p>
            Arrivee a <strong>Glen Coe</strong> en fin d&apos;apres-midi. Cette vallee glaciaire est
            l&apos;un des paysages les plus dramatiques d&apos;Ecosse. Arretez-vous au visitor center
            pour comprendre l&apos;histoire tragique du massacre de 1692. Les randonneurs apprecieront
            les nombreux sentiers accessibles.
          </p>

          <p><strong>Ou dormir :</strong> Parking du visitor center (tolere) ou bivouac dans la vallee.</p>

          <h2>Jour 2 : Glen Coe - Ile de Skye</h2>
          <p><strong>Distance :</strong> 130 km | <strong>Duree :</strong> 2h30 de route</p>

          <p>
            Matinee a Glen Coe si vous n&apos;avez pas eu le temps d&apos;explorer la veille. Puis direction
            Fort William et la "Road to the Isles" (A830), l&apos;une des plus belles routes d&apos;Ecosse.
          </p>

          <p>
            Passage par le <strong>Glenfinnan Viaduct</strong> (le pont d&apos;Harry Potter). Si vous
            etes la vers 10h30 ou 15h, vous pourrez voir le train a vapeur le traverser.
          </p>

          <p>
            Traversee vers Skye par le pont de Kyle of Lochalsh. Installation sur l&apos;ile pour
            les deux prochaines nuits.
          </p>

          <p><strong>Ou dormir :</strong> Camping pres de Portree ou spot autorise dans le sud de l&apos;ile.</p>

          <div className="my-12">
            <Image
              src="/images/highlands-adventure.jpg"
              alt="Aventure en van sur les routes des Highlands vers Skye"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-sm text-stone-500 mt-2 text-center">
              La route vers Skye offre des panoramas exceptionnels
            </p>
          </div>

          <h2>Jour 3 : Ile de Skye - Nord</h2>
          <p><strong>Distance :</strong> 80 km | <strong>Duree :</strong> journee complete sur place</p>

          <p>
            Journee dediee a l&apos;exploration du nord de Skye. Reveillez-vous tot pour eviter
            la foule sur les sites populaires.
          </p>

          <p><strong>Programme suggere :</strong></p>
          <ul>
            <li>Matin : <strong>The Quiraing</strong> - randonnee de 2h dans un paysage lunaire</li>
            <li>Midi : Pique-nique avec vue</li>
            <li>Apres-midi : <strong>Old Man of Storr</strong> - randonnee de 1h30</li>
            <li>Soir : <strong>Portree</strong> pour le diner et les maisons colorees du port</li>
          </ul>

          <p><strong>Ou dormir :</strong> Meme emplacement que la veille ou changement de spot.</p>

          <h2>Jour 4 : Ile de Skye - Sud puis Loch Ness</h2>
          <p><strong>Distance :</strong> 140 km | <strong>Duree :</strong> 3h de route</p>

          <p>
            Matinee dans le sud de Skye avant de quitter l&apos;ile :
          </p>

          <ul>
            <li><strong>Fairy Pools</strong> : Piscines naturelles aux eaux turquoise (randonnee 1h)</li>
            <li><strong>Talisker Distillery</strong> : Pour les amateurs de whisky</li>
          </ul>

          <p>
            Depart vers le Loch Ness par l&apos;A87. Route spectaculaire le long du Loch Cluanie.
            Arrivee au <strong>Loch Ness</strong> en fin de journee.
          </p>

          <p>
            Visitez les ruines du <strong>chateau d&apos;Urquhart</strong> si vous arrivez avant la
            fermeture (vue magnifique sur le loch).
          </p>

          <p><strong>Ou dormir :</strong> Aire le long du Loch Ness ou camping a Drumnadrochit.</p>

          <h2>Jour 5 : Loch Ness - Inverness - Cairngorms</h2>
          <p><strong>Distance :</strong> 100 km | <strong>Duree :</strong> 2h de route</p>

          <p>
            Matinee le long du Loch Ness. Arret a <strong>Inverness</strong>, capitale des Highlands,
            pour faire le plein de provisions et decouvrir la ville (chateau, vieille ville).
          </p>

          <p>
            Apres-midi : direction le <strong>parc national des Cairngorms</strong>. Ces montagnes
            abritent une faune unique (cerfs, aigles, ecureuils roux) et offrent des paysages
            alpins saisissants.
          </p>

          <p>
            Arret possible a <strong>Aviemore</strong> pour une randonnee ou simplement profiter
            de l&apos;ambiance montagnarde.
          </p>

          <p><strong>Ou dormir :</strong> Nombreux spots de bivouac dans le parc ou camping a Aviemore.</p>

          <h2>Jour 6 : Cairngorms - Pitlochry - Perth</h2>
          <p><strong>Distance :</strong> 120 km | <strong>Duree :</strong> 2h30 de route</p>

          <p>
            Derniere matinee dans les Cairngorms. Possibilite de randonnee matinale ou visite
            d&apos;une distillerie (nombreuses dans la region du Speyside).
          </p>

          <p>
            Route vers le sud avec arret a <strong>Pitlochry</strong>, charmante ville victorienne.
            Ne manquez pas :
          </p>

          <ul>
            <li>L&apos;echelle a saumons (salmon ladder)</li>
            <li>Le theatre de Pitlochry</li>
            <li>Les nombreuses distilleries alentour</li>
          </ul>

          <p>
            Continuation vers <strong>Perth</strong> ou ses environs pour la derniere nuit.
          </p>

          <p><strong>Ou dormir :</strong> Camping ou aire pres de Perth pour etre proche d&apos;Edimbourg le lendemain.</p>

          <h2>Jour 7 : Retour Edimbourg</h2>
          <p><strong>Distance :</strong> 70 km | <strong>Duree :</strong> 1h de route</p>

          <p>
            Retour tranquille vers Edimbourg. Prevoyez d&apos;arriver 2h avant l&apos;heure de restitution
            pour faire le plein, ranger et nettoyer le van.
          </p>

          <p>
            Si vous avez du temps, arret possible au <strong>chateau de Stirling</strong> sur le chemin.
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Reservez votre van pour cette aventure"
          description="Comparez les offres de location a Edimbourg et partez a la decouverte de l&apos;Ecosse."
        />

        <div className="prose-custom">
          <h2>Conseils pour optimiser votre semaine</h2>

          <h3>Partez tot le matin</h3>
          <p>
            Les sites populaires (Quiraing, Fairy Pools, Glen Coe) sont pris d&apos;assaut des 10h
            en saison. Etre sur place a l&apos;ouverture vous garantit tranquillite et meilleures lumieres.
          </p>

          <h3>Restez flexible</h3>
          <p>
            La meteo ecossaise est imprevisible. Si un jour est particulierement beau, adaptez
            votre programme pour profiter des activites exterieures.
          </p>

          <h3>Ne sous-estimez pas les distances</h3>
          <p>
            Les routes sont sinueuses et souvent limitees a 60 km/h. Ajoutez 30% au temps
            indique par le GPS.
          </p>

          <h3>Preparez vos provisions</h3>
          <p>
            Les commerces sont rares dans les Highlands. Faites vos courses a Edimbourg,
            Fort William ou Inverness.
          </p>

          <h2>Variantes possibles</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-sand-50 rounded-xl">
              <h4 className="font-semibold text-forest-800 mb-2">Option "Plus de Skye"</h4>
              <p className="text-stone-600 text-sm">
                Passez 3 nuits sur Skye au lieu de 2 en reduisant le temps dans les Cairngorms.
                Ideal si vous etes photographe ou randonneur.
              </p>
            </div>
            <div className="p-6 bg-sand-50 rounded-xl">
              <h4 className="font-semibold text-forest-800 mb-2">Option "Depart Glasgow"</h4>
              <p className="text-stone-600 text-sm">
                <Link href="/location-van-ecosse-glasgow/" className="text-forest-700 underline">Partez de Glasgow</Link> pour
                acceder plus rapidement a la cote ouest et Skye.
              </p>
            </div>
          </div>

          <p>
            Envie de plus de temps ? Decouvrez notre <Link href="/ecosse-en-van-2-semaines/">itineraire
            de 2 semaines</Link> pour une exploration complete.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur cet itineraire" />
      </article>
    </>
  );
}
