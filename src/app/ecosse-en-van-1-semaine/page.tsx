'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import HeroPage from '@/components/HeroPage';
import ItineraryOverview from '@/components/ItineraryOverview';

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-ecosse-van/' },
  { name: 'Écosse 1 Semaine' },
];

const faqItems = [
  {
    question: 'Est-ce suffisant de faire l\'Écosse en 1 semaine ?',
    answer: 'Une semaine permet de découvrir les incontournables (Highlands centraux, Skye, Loch Ness) mais le rythme sera soutenu. Si possible, ajoutez 2-3 jours pour plus de flexibilité.',
  },
  {
    question: 'Peut-on faire la North Coast 500 en 1 semaine ?',
    answer: 'Techniquement oui, mais ce serait trop rapide pour en profiter. La NC500 seule mérite 5-7 jours. Avec seulement une semaine, privilégiez l\'itinéraire classique décrit ici.',
  },
  {
    question: 'Faut-il réserver les hébergements à l\'avance ?',
    answer: 'En haute saison (juillet-août), réservez les campings de Skye 2-3 semaines à l\'avance. Le reste de l\'année, la flexibilité est possible.',
  },
];

const overviewItems = [
  { icon: 'route' as const, label: 'Distance', value: '850 km' },
  { icon: 'location' as const, label: 'Départ/Arrivée', value: 'Édimbourg' },
  { icon: 'star' as const, label: 'Points forts', value: 'Skye, Glen Coe' },
  { icon: 'euro' as const, label: 'Budget moyen', value: '1500€' },
];

const itineraryDays = [
  {
    dayNumber: 1,
    title: 'Édimbourg → Glen Coe',
    subtitle: 'La vallée glaciaire légendaire',
    distance: '170 km',
    duration: '3h',
    description: 'Récupérez votre van à Édimbourg le matin et familiarisez-vous avec le véhicule. Direction l\'ouest par la M9 puis l\'A84 à travers les Trossachs. Arrivée à Glen Coe en fin d\'après-midi dans l\'une des vallées les plus dramatiques d\'Écosse.',
    highlights: ['Traversée des Trossachs', 'Glen Coe Visitor Center', 'Massacre de 1692', 'Randonnées accessibles'],
    sleepSpot: 'Parking du visitor center ou bivouac dans la vallée',
  },
  {
    dayNumber: 2,
    title: 'Glen Coe → Île de Skye',
    subtitle: 'La route vers les îles',
    distance: '130 km',
    duration: '2h30',
    description: 'Matinée à Glen Coe si vous n\'avez pas eu le temps d\'explorer. Puis direction Fort William et la "Road to the Isles" (A830), l\'une des plus belles routes d\'Écosse. Passage par le célèbre Glenfinnan Viaduct.',
    highlights: ['Road to the Isles', 'Glenfinnan Viaduct (Harry Potter)', 'Fort William', 'Pont de Skye'],
    sleepSpot: 'Camping près de Portree ou spot autorisé dans le sud de l\'île',
  },
  {
    dayNumber: 3,
    title: 'Île de Skye - Nord',
    subtitle: 'Paysages lunaires et falaises',
    distance: '80 km',
    duration: 'Journée complète',
    description: 'Journée dédiée à l\'exploration du nord de Skye. Réveillez-vous tôt pour éviter la foule sur les sites populaires. Le Quiraing offre une randonnée inoubliable dans un paysage surréaliste.',
    highlights: ['The Quiraing (rando 2h)', 'Old Man of Storr (rando 1h30)', 'Kilt Rock', 'Portree et son port coloré'],
    sleepSpot: 'Même emplacement que la veille ou changement de spot',
  },
  {
    dayNumber: 4,
    title: 'Skye Sud → Loch Ness',
    subtitle: 'Des Fairy Pools au monstre légendaire',
    distance: '140 km',
    duration: '3h',
    description: 'Matinée dans le sud de Skye avec les Fairy Pools et Talisker Distillery. Puis départ vers le Loch Ness par l\'A87, route spectaculaire le long du Loch Cluanie.',
    highlights: ['Fairy Pools (rando 1h)', 'Talisker Distillery', 'Loch Cluanie', 'Château d\'Urquhart'],
    sleepSpot: 'Aire le long du Loch Ness ou camping à Drumnadrochit',
  },
  {
    dayNumber: 5,
    title: 'Loch Ness → Cairngorms',
    subtitle: 'La montagne et ses secrets',
    distance: '100 km',
    duration: '2h',
    description: 'Matinée le long du Loch Ness puis arrêt à Inverness, capitale des Highlands. L\'après-midi, direction le parc national des Cairngorms avec ses paysages alpins et sa faune unique.',
    highlights: ['Inverness (provisions)', 'Parc des Cairngorms', 'Faune sauvage', 'Aviemore'],
    sleepSpot: 'Spots de bivouac dans le parc ou camping à Aviemore',
  },
  {
    dayNumber: 6,
    title: 'Cairngorms → Pitlochry',
    subtitle: 'Whisky et charme victorien',
    distance: '120 km',
    duration: '2h30',
    description: 'Dernière matinée dans les Cairngorms avec possibilité de randonnée ou visite d\'une distillerie. Route vers le sud et arrêt à Pitlochry, charmante ville victorienne.',
    highlights: ['Distilleries du Speyside', 'Pitlochry', 'Échelle à saumons', 'Théâtre de Pitlochry'],
    sleepSpot: 'Camping ou aire près de Perth',
  },
  {
    dayNumber: 7,
    title: 'Retour à Édimbourg',
    subtitle: 'Fin de l\'aventure',
    distance: '70 km',
    duration: '1h',
    description: 'Retour tranquille vers Édimbourg. Prévoyez d\'arriver 2h avant l\'heure de restitution pour faire le plein, ranger et nettoyer le van. Arrêt possible au château de Stirling.',
    highlights: ['Château de Stirling (optionnel)', 'Restitution du van', 'Temps pour le nettoyage'],
    sleepSpot: '',
  },
];

interface ItineraryDay {
  dayNumber: number;
  title: string;
  subtitle: string;
  distance: string;
  duration: string;
  description: string;
  highlights: string[];
  sleepSpot: string;
}

interface DayCardProps {
  day: ItineraryDay;
  isExpanded: boolean;
  onToggle: () => void;
}

function DayCard({ day, isExpanded, onToggle }: DayCardProps) {
  return (
    <div>
      <div
        className={`bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'ring-2 ring-forest-400 shadow-lg' : 'hover:shadow-md hover:border-forest-200'
        }`}
      >
        {/* Header - Always visible */}
        <button
          onClick={onToggle}
          className="w-full text-left p-4 md:p-6 flex items-start gap-4"
        >
          {/* Day number badge */}
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-700 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">J{day.dayNumber}</span>
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-forest-900">{day.title}</h3>
                <p className="text-sm text-forest-600">{day.subtitle}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-500 flex-shrink-0">
                <span className="hidden sm:flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  {day.distance}
                </span>
                <span className="hidden sm:flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {day.duration}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            {/* Mobile stats */}
            <div className="flex items-center gap-3 mt-2 text-sm text-stone-500 sm:hidden">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                {day.distance}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {day.duration}
              </span>
            </div>
          </div>
        </button>

        {/* Expanded content - always in DOM for SEO, hidden visually */}
        <div
          className={`px-4 md:px-6 pb-6 border-t border-stone-100 pt-6 ${
            isExpanded ? '' : 'hidden'
          }`}
        >
            <p className="text-stone-600 mb-4">{day.description}</p>

            {/* Highlights */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-forest-800 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-forest-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Points forts
              </h4>
              <div className="flex flex-wrap gap-2">
                {day.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-forest-50 text-forest-700 text-sm rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Sleep spot */}
            {day.sleepSpot && (
              <div className="p-3 bg-sand-50 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold text-forest-800">Où dormir : </span>
                  <span className="text-stone-600">{day.sleepSpot}</span>
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default function UneSemainePage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (dayNumber: number) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Écosse en Van 1 Semaine',
            description: 'Itinéraire détaillé pour découvrir l\'Écosse en van en une semaine.',
            image: 'https://www.explorescotlandvan.com/images/roadtrip-panoramique.jpg',
            datePublished: '2026-01-20',
            dateModified: '2026-02-19',
            author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
            publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
          }),
        }}
      />

      <HeroPage
        title="L'Écosse en van en 1 semaine"
        subtitle="L'itinéraire essentiel pour découvrir les Highlands"
        badge="7 jours"
        image="/images/roadtrip-panoramique.jpg"
        imageAlt="Route panoramique en Écosse pour un road trip d'une semaine"
        stats={[
          { value: '7', label: 'Jours d\'aventure' },
          { value: '800 km', label: 'À parcourir' },
          { value: '5', label: 'Étapes clés' },
          { value: '1500€', label: 'Budget moyen' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        {/* Intro */}
        <div className="prose-custom mb-12">
          <p className="text-xl text-stone-600">
            Une semaine en van en Écosse : c&apos;est court mais suffisant pour tomber amoureux
            du pays. Cet itinéraire optimisé vous fait découvrir les incontournables des Highlands
            sans vous épuiser. Au programme : paysages grandioses, lochs mystérieux et villages
            de caractère.
          </p>
        </div>

        {/* Overview */}
        <ItineraryOverview items={overviewItems} />

        {/* Interactive Itinerary */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-forest-900">Itinéraire jour par jour</h2>
            <button
              onClick={() => setExpandedDay(expandedDay ? null : 1)}
              className="text-sm text-forest-600 hover:text-forest-800 font-medium"
            >
              {expandedDay ? 'Tout réduire' : 'Tout déplier'}
            </button>
          </div>

          <div className="space-y-4">
            {itineraryDays.map((day) => (
              <DayCard
                key={day.dayNumber}
                day={day}
                isExpanded={expandedDay === day.dayNumber}
                onToggle={() => toggleDay(day.dayNumber)}
              />
            ))}
          </div>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Réservez votre van pour cette aventure"
          description="Comparez les offres de location à Édimbourg et partez à la découverte de l'Écosse."
        />

        {/* Tips section */}
        <div className="prose-custom my-12">
          <h2>Conseils pour optimiser votre semaine</h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-5 bg-forest-50 rounded-xl">
              <h4 className="font-semibold text-forest-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                Partez tôt le matin
              </h4>
              <p className="text-stone-600 text-sm">
                Les sites populaires sont pris d&apos;assaut dès 10h en saison. Être sur place à l&apos;ouverture garantit tranquillité et meilleures lumières.
              </p>
            </div>

            <div className="p-5 bg-forest-50 rounded-xl">
              <h4 className="font-semibold text-forest-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
                Restez flexible
              </h4>
              <p className="text-stone-600 text-sm">
                La météo écossaise est imprévisible. Si un jour est beau, adaptez votre programme pour profiter des activités extérieures.
              </p>
            </div>

            <div className="p-5 bg-forest-50 rounded-xl">
              <h4 className="font-semibold text-forest-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Anticipez les distances
              </h4>
              <p className="text-stone-600 text-sm">
                Les routes sont sinueuses et souvent limitées à 60 km/h. Ajoutez 30% au temps indiqué par le GPS.
              </p>
            </div>

            <div className="p-5 bg-forest-50 rounded-xl">
              <h4 className="font-semibold text-forest-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Préparez vos provisions
              </h4>
              <p className="text-stone-600 text-sm">
                Les commerces sont rares dans les Highlands. Faites vos courses à Édimbourg, Fort William ou Inverness.
              </p>
            </div>
          </div>

          <h2>Variantes possibles</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-sand-50 rounded-xl border border-sand-200">
              <h4 className="font-semibold text-forest-800 mb-2">Option &quot;Plus de Skye&quot;</h4>
              <p className="text-stone-600 text-sm">
                Passez 3 nuits sur Skye au lieu de 2 en réduisant le temps dans les Cairngorms.
                Idéal si vous êtes photographe ou randonneur.
              </p>
            </div>
            <div className="p-6 bg-sand-50 rounded-xl border border-sand-200">
              <h4 className="font-semibold text-forest-800 mb-2">Option &quot;Départ Glasgow&quot;</h4>
              <p className="text-stone-600 text-sm">
                <Link href="/location-van-ecosse-glasgow/" className="text-forest-700 underline">Partez de Glasgow</Link> pour
                accéder plus rapidement à la côte ouest et Skye.
              </p>
            </div>
          </div>

          <p>
            Envie de plus de temps ? Découvrez notre <Link href="/ecosse-en-van-2-semaines/">itinéraire
            de 2 semaines</Link> pour une exploration complète incluant la North Coast 500.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur cet itinéraire" />
      </article>
    </>
  );
}
