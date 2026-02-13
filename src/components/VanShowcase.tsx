import Image from 'next/image';
import Link from 'next/link';

const vans = [
  {
    name: 'Scandi',
    model: 'Volkswagen T5',
    location: 'Glasgow',
    price: 95,
    beds: 2,
    seats: 3,
    image: '/images/van-scandi.jpg',
    features: ['Chauffage diesel', 'Panneau solaire', 'Cuisine equipee'],
  },
  {
    name: 'Dolly',
    model: 'Volkswagen T5',
    location: 'Cumbernauld',
    price: 88,
    beds: 4,
    seats: 5,
    image: '/images/van-dolly.webp',
    features: ['Toit ouvrant', 'Chauffage diesel', 'Refrigerateur'],
  },
  {
    name: 'Luna',
    model: 'VW California Ocean 4x4',
    location: 'Aberdeen',
    price: 145,
    beds: 4,
    seats: 4,
    image: '/images/van-luna.jpg',
    features: ['4x4 automatique', 'Toit relevable', 'Cuisine integree'],
  },
];

export default function VanShowcase() {
  return (
    <section className="bg-sand-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            Exemples de vans disponibles
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Decouvrez quelques vans proposes par des proprietaires en Écosse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vans.map((van) => (
            <div
              key={van.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56">
                <Image
                  src={van.image}
                  alt={`${van.name} - ${van.model}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-semibold text-forest-700">{van.location}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-forest-800">{van.name}</h3>
                    <p className="text-sm text-stone-500">{van.model}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-forest-700">{van.price}€</p>
                    <p className="text-xs text-stone-500">par jour</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-stone-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>{van.seats} places</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    <span>{van.beds} couchages</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {van.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-forest-50 text-forest-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
            target="_blank"
            rel="sponsored noopener nofollow"
            className="inline-flex items-center rounded-xl bg-forest-700 px-8 py-4 text-lg font-semibold text-white hover:bg-forest-800 transition-colors"
          >
            Voir tous les vans disponibles
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
