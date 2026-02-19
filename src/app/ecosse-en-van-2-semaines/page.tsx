'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQ from '@/components/FAQ';
import HeroPage from '@/components/HeroPage';
import ItineraryOverview from '@/components/ItineraryOverview';

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-ecosse-van/' },
  { name: 'Écosse 2 Semaines' },
];

const faqItems = [
  {
    question: 'Peut-on faire tout l\'itinéraire en moins de 2 semaines ?',
    answer: 'C\'est déconseillé. Cet itinéraire est déjà optimisé pour 14 jours. Le réduire signifierait passer plus de temps sur la route qu\'à profiter des sites. Pour moins de temps, consultez notre itinéraire d\'1 semaine.',
  },
  {
    question: 'Quel est le meilleur sens pour la North Coast 500 ?',
    answer: 'Les deux sens ont leurs avantages. Le sens horaire (vers l\'ouest d\'abord) offre la côte sauvage en premier. Le sens anti-horaire garde le meilleur pour la fin. Nous recommandons le sens horaire.',
  },
  {
    question: 'Faut-il un 4x4 pour cet itinéraire ?',
    answer: 'Non, un van standard suffit pour toutes les routes de cet itinéraire. Certaines routes sont étroites (single track) mais goudronnées et praticables par tous les véhicules.',
  },
];

const overviewItems = [
  { icon: 'route' as const, label: 'Distance', value: '1800 km' },
  { icon: 'location' as const, label: 'Départ/Arrivée', value: 'Édimbourg' },
  { icon: 'star' as const, label: 'Inclus', value: 'NC500 + Skye' },
  { icon: 'euro' as const, label: 'Budget moyen', value: '3000€' },
];

const itineraryDays = [
  {
    dayNumber: 1,
    title: 'Édimbourg → Glen Coe',
    subtitle: 'Entrée dans les Highlands',
    distance: '170 km',
    duration: '2h30',
    description: 'Départ d\'Édimbourg en direction de l\'ouest. Traversée des Trossachs avec arrêt possible au Loch Lomond. Arrivée à Glen Coe, vallée glaciaire aux paysages dramatiques.',
    highlights: ['Loch Lomond', 'Trossachs', 'Glen Coe', 'Paysages dramatiques'],
    sleepSpot: 'Parking du visitor center ou bivouac dans la vallée',
  },
  {
    dayNumber: 2,
    title: 'Glen Coe → Fort William',
    subtitle: 'Au pied du Ben Nevis',
    distance: '30 km',
    duration: 'Journée sur place',
    description: 'Exploration approfondie de Glen Coe. Randonnées possibles : Lost Valley, Meeting of Three Waters. Continuation vers Fort William, au pied du plus haut sommet de Grande-Bretagne.',
    highlights: ['Lost Valley', 'Meeting of Three Waters', 'Fort William', 'Ben Nevis'],
    sleepSpot: 'Camping ou aire près de Fort William',
  },
  {
    dayNumber: 3,
    title: 'Fort William → Île de Skye',
    subtitle: 'La route vers les îles',
    distance: '130 km',
    duration: '2h30',
    description: 'La "Road to the Isles" (A830) vous mène au pont de Skye via le Glenfinnan Viaduct. Traversée vers Skye par le pont de Kyle of Lochalsh.',
    highlights: ['Road to the Isles', 'Glenfinnan Viaduct', 'Pont de Skye', 'Arrivée sur l\'île'],
    sleepSpot: 'Camping près de Portree ou spot dans le sud de l\'île',
  },
  {
    dayNumber: 4,
    title: 'Île de Skye - Sud',
    subtitle: 'Piscines féeriques et whisky',
    distance: '60 km',
    duration: 'Journée sur place',
    description: 'Exploration du sud de Skye avec ses paysages variés. Les Fairy Pools offrent une baignade mémorable (eau fraîche !). Dégustation à la distillerie Talisker.',
    highlights: ['Fairy Pools', 'Talisker Distillery', 'Coral Beach', 'Carbost'],
    sleepSpot: 'Même emplacement ou changement de spot',
  },
  {
    dayNumber: 5,
    title: 'Île de Skye - Nord',
    subtitle: 'Quiraing et formations rocheuses',
    distance: '80 km',
    duration: 'Journée sur place',
    description: 'Le nord de Skye offre des paysages lunaires uniques. La randonnée du Quiraing est incontournable. L\'Old Man of Storr domine le paysage.',
    highlights: ['Quiraing (rando 2h)', 'Old Man of Storr', 'Kilt Rock', 'Portree'],
    sleepSpot: 'Camping à Staffin ou retour vers Portree',
  },
  {
    dayNumber: 6,
    title: 'Skye → Applecross',
    subtitle: 'La route la plus spectaculaire',
    distance: '100 km',
    duration: '2h30',
    description: 'Départ de Skye vers le continent. La route du Bealach na Ba vers Applecross est l\'une des plus spectaculaires du Royaume-Uni. Attention : forte pente, virages serrés.',
    highlights: ['Neist Point', 'Bealach na Ba', 'Applecross', 'Applecross Inn'],
    sleepSpot: 'Village d\'Applecross ou plages sauvages',
  },
  {
    dayNumber: 7,
    title: 'Applecross → Torridon',
    subtitle: 'Montagnes majestueuses',
    distance: '50 km',
    duration: '1h30',
    description: 'Journée de transition vers la North Coast 500. La région de Torridon offre des montagnes parmi les plus anciennes et impressionnantes d\'Écosse.',
    highlights: ['Côte d\'Applecross', 'Shieldaig', 'Torridon', 'Montagnes anciennes'],
    sleepSpot: 'Camping ou bivouac à Torridon',
  },
  {
    dayNumber: 8,
    title: 'Torridon → Ullapool',
    subtitle: 'Début de la NC500',
    distance: '120 km',
    duration: '2h30',
    description: 'La NC500 révèle ses plus beaux atouts. Route côtière spectaculaire passant par le Loch Maree, l\'un des plus beaux lochs d\'Écosse, et les jardins d\'Inverewe.',
    highlights: ['Loch Maree', 'Inverewe Garden', 'Gruinard Bay', 'Ullapool'],
    sleepSpot: 'Port de pêche coloré d\'Ullapool',
  },
  {
    dayNumber: 9,
    title: 'Ullapool → Lochinver',
    subtitle: 'Côte sauvage et villages',
    distance: '60 km',
    duration: '2h',
    description: 'Route côtière sinueuse à travers l\'Assynt. Paysages de lochs et de montagnes isolées. Lochinver et sa célèbre boulangerie (Lochinver Larder).',
    highlights: ['Assynt', 'Stac Pollaidh', 'Lochinver', 'Lochinver Larder'],
    sleepSpot: 'Lochinver ou spots côtiers',
  },
  {
    dayNumber: 10,
    title: 'Lochinver → Durness',
    subtitle: 'L\'extrême nord-ouest',
    distance: '90 km',
    duration: '2h30',
    description: 'La partie la plus sauvage de la NC500. Paysages lunaires, plages désertes et sensation d\'être au bout du monde. Smoo Cave et Balnakeil Beach.',
    highlights: ['Kylesku Bridge', 'Smoo Cave', 'Balnakeil Beach', 'Durness'],
    sleepSpot: 'Durness ou plages environnantes',
  },
  {
    dayNumber: 11,
    title: 'Durness → John o\' Groats',
    subtitle: 'Le bout du monde',
    distance: '160 km',
    duration: '3h',
    description: 'Traversée de l\'extrême nord de l\'Écosse. Possibilité d\'excursion à Cape Wrath (bateau + minibus). Arrivée à John o\' Groats, l\'extrémité nord-est.',
    highlights: ['Cape Wrath (optionnel)', 'Tongue', 'Thurso', 'John o\' Groats'],
    sleepSpot: 'John o\' Groats ou Duncansby Head',
  },
  {
    dayNumber: 12,
    title: 'John o\' Groats → Inverness',
    subtitle: 'Descente par la côte est',
    distance: '170 km',
    duration: '2h30',
    description: 'Descente par la côte est avec ses stacks rocheux et ses châteaux. Duncansby Head plus impressionnant que John o\' Groats. Arrivée à Inverness.',
    highlights: ['Duncansby Head', 'Dunrobin Castle', 'Golspie', 'Inverness'],
    sleepSpot: 'Inverness ou environs',
  },
  {
    dayNumber: 13,
    title: 'Inverness → Cairngorms',
    subtitle: 'Parc national et faune',
    distance: '80 km',
    duration: '1h30',
    description: 'Ravitaillement à Inverness puis direction le parc national des Cairngorms. Paysages alpins, faune sauvage (cerfs, aigles, écureuils roux).',
    highlights: ['Loch Ness (optionnel)', 'Aviemore', 'Cairngorms', 'Faune sauvage'],
    sleepSpot: 'Camping ou bivouac dans le parc',
  },
  {
    dayNumber: 14,
    title: 'Cairngorms → Édimbourg',
    subtitle: 'Fin de l\'aventure',
    distance: '180 km',
    duration: '2h30',
    description: 'Dernière étape avec arrêts possibles à Pitlochry ou Stirling. Restitution du van à Édimbourg en fin de journée. 2 semaines d\'aventure inoubliable.',
    highlights: ['Pitlochry', 'Château de Stirling', 'Restitution du van'],
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

        {/* Expanded content - always in DOM for SEO, collapsed visually */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 md:px-6 pb-6 border-t border-stone-100 pt-6">
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
      </div>
  );
}

export default function DeuxSemainesPage() {
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
            headline: 'Écosse en Van 2 Semaines',
            description: 'Itinéraire de 2 semaines en van en Écosse avec la North Coast 500 et plus.',
            image: 'https://www.explorescotlandvan.com/images/north-coast-500.jpg',
            datePublished: '2026-01-20',
            dateModified: '2026-02-19',
            author: { '@type': 'Organization', name: 'ExploreScotlandVan', url: 'https://www.explorescotlandvan.com/' },
            publisher: { '@type': 'Organization', name: 'ExploreScotlandVan', logo: { '@type': 'ImageObject', url: 'https://www.explorescotlandvan.com/images/favicon.png' } },
          }),
        }}
      />

      <HeroPage
        title="L'Écosse en van en 2 semaines"
        subtitle="Le grand tour incluant la légendaire North Coast 500"
        badge="14 jours + NC500"
        image="/images/north-coast-500.jpg"
        imageAlt="Van sur la North Coast 500 pour un road trip de 2 semaines"
        stats={[
          { value: '14', label: 'Jours d\'aventure' },
          { value: '1800 km', label: 'À parcourir' },
          { value: 'NC500', label: 'Incluse' },
          { value: '3000€', label: 'Budget moyen' },
        ]}
      />

      <div className="container-narrow">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <article className="container-narrow section-padding">
        {/* Intro */}
        <div className="prose-custom mb-12">
          <p className="text-xl text-stone-600">
            Deux semaines représentent la durée idéale pour explorer l&apos;Écosse en van. Cet itinéraire
            ambitieux combine la célèbre <strong>North Coast 500</strong>, l&apos;île de Skye, les Highlands
            centraux et bien plus. Préparez-vous à vivre l&apos;aventure de votre vie.
          </p>
        </div>

        {/* Overview */}
        <ItineraryOverview items={overviewItems} />

        {/* Week separator */}
        <div className="my-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-grow bg-forest-200" />
            <span className="px-4 py-2 bg-forest-100 text-forest-800 font-semibold rounded-full text-sm">
              Semaine 1 : Highlands et île de Skye
            </span>
            <div className="h-px flex-grow bg-forest-200" />
          </div>
        </div>

        {/* Week 1 days */}
        <div className="space-y-4 mb-12">
          {itineraryDays.slice(0, 7).map((day) => (
            <DayCard
              key={day.dayNumber}
              day={day}
              isExpanded={expandedDay === day.dayNumber}
              onToggle={() => toggleDay(day.dayNumber)}
            />
          ))}
        </div>

        {/* Week 2 separator */}
        <div className="my-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-grow bg-forest-200" />
            <span className="px-4 py-2 bg-forest-100 text-forest-800 font-semibold rounded-full text-sm">
              Semaine 2 : La North Coast 500
            </span>
            <div className="h-px flex-grow bg-forest-200" />
          </div>
        </div>

        {/* Week 2 days */}
        <div className="space-y-4">
          {itineraryDays.slice(7).map((day) => (
            <DayCard
              key={day.dayNumber}
              day={day}
              isExpanded={expandedDay === day.dayNumber}
              onToggle={() => toggleDay(day.dayNumber)}
            />
          ))}
        </div>

        {/* Van life image */}
        <div className="my-12">
          <Image
            src="/images/roadtrip-mer-montagne.jpg"
            alt="Road trip en van entre mer et montagne en Écosse"
            width={1200}
            height={500}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
          <p className="text-sm text-stone-500 mt-3 text-center">
            14 jours d&apos;aventure entre mer et montagne
          </p>
        </div>

        <AffiliateCTA
          variant="hero"
          title="Réservez votre van pour cette aventure"
          description="Comparez les offres de location et partez pour 2 semaines d'aventure inoubliable."
        />

        {/* Budget section */}
        <div className="prose-custom my-12">
          <h2>Budget détaillé pour 2 semaines</h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-5 bg-forest-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Location van</p>
                  <p className="text-lg font-bold text-forest-900">1200 - 1800€</p>
                </div>
              </div>
              <p className="text-sm text-stone-600">14 jours de location</p>
            </div>

            <div className="p-5 bg-forest-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Carburant</p>
                  <p className="text-lg font-bold text-forest-900">300 - 400€</p>
                </div>
              </div>
              <p className="text-sm text-stone-600">~1800 km parcourus</p>
            </div>

            <div className="p-5 bg-forest-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Alimentation</p>
                  <p className="text-lg font-bold text-forest-900">400 - 600€</p>
                </div>
              </div>
              <p className="text-sm text-stone-600">Courses + restaurants</p>
            </div>

            <div className="p-5 bg-forest-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Camping/Aires</p>
                  <p className="text-lg font-bold text-forest-900">100 - 300€</p>
                </div>
              </div>
              <p className="text-sm text-stone-600">Mix bivouac et campings</p>
            </div>
          </div>

          <div className="p-6 bg-sand-100 rounded-xl border border-sand-200">
            <p className="text-lg font-bold text-forest-900 mb-1">Total estimé : 2200 - 3500€</p>
            <p className="text-stone-600">Pour 2 personnes, hors vols. Consultez notre <Link href="/prix-location-van-ecosse/" className="text-forest-700 underline">page budget</Link> pour optimiser.</p>
          </div>

          <h2>Conseils spécifiques NC500</h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-5 bg-sand-50 rounded-xl border border-sand-200">
              <h4 className="font-semibold text-forest-800 mb-2">Carburant</h4>
              <p className="text-stone-600 text-sm">
                Stations rares sur la NC500. Faites le plein à Ullapool, Durness, Tongue, Thurso. Ne descendez jamais sous le quart.
              </p>
            </div>

            <div className="p-5 bg-sand-50 rounded-xl border border-sand-200">
              <h4 className="font-semibold text-forest-800 mb-2">Provisions</h4>
              <p className="text-stone-600 text-sm">
                Grands supermarchés à Inverness, Fort William et Ullapool uniquement. Prévoyez 2-3 jours de stock.
              </p>
            </div>

            <div className="p-5 bg-sand-50 rounded-xl border border-sand-200">
              <h4 className="font-semibold text-forest-800 mb-2">Réseau mobile</h4>
              <p className="text-stone-600 text-sm">
                Quasi-inexistant sur la NC500. Téléchargez cartes et infos à l&apos;avance. Profitez pour déconnecter !
              </p>
            </div>

            <div className="p-5 bg-sand-50 rounded-xl border border-sand-200">
              <h4 className="font-semibold text-forest-800 mb-2">Single track roads</h4>
              <p className="text-stone-600 text-sm">
                Routes à voie unique fréquentes. Utilisez les passing places pour laisser passer. Patience et courtoisie.
              </p>
            </div>
          </div>

          <p>
            Pour un aperçu plus court, consultez notre <Link href="/ecosse-en-van-1-semaine/">itinéraire
            d&apos;une semaine</Link>.
          </p>
        </div>

        <FAQ items={faqItems} title="Questions sur cet itinéraire" />
      </article>
    </>
  );
}
