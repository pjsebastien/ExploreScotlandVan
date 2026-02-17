import Image from 'next/image';
import Link from 'next/link';

const stats = [
  {
    value: '830 km',
    label: 'North Coast 500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    value: '100+',
    label: 'Vans disponibles',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    value: '85€',
    label: 'A partir de /jour',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '4.8/5',
    label: 'Satisfaction',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-forest-700/50 backdrop-blur-sm text-forest-100 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-forest-600/30">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Aventure ecossaise
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
              Louez un van amenage en{' '}
              <span className="text-forest-300">Écosse</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-forest-100/90 leading-relaxed mb-8 max-w-xl">
              Partez a la decouverte des Highlands en toute liberte. Comparez les meilleurs vans
              et reservez votre aventure sur les routes mythiques de l&apos;Écosse.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
                target="_blank"
                rel="sponsored noopener nofollow"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-forest-800 shadow-lg hover:bg-forest-50 hover:shadow-xl transition-all duration-200"
              >
                Trouver mon van
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/road-trip-ecosse-van/"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-200"
              >
                Voir les itineraires
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-forest-200 mb-1">
                    {stat.icon}
                    <span className="text-xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-forest-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery Column */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main large image */}
              <div className="col-span-7 relative">
                <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/hero-highlands.jpg"
                    alt="Van amenage dans les Highlands ecossais"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
                </div>
              </div>

              {/* Side images stack */}
              <div className="col-span-5 space-y-4">
                <div className="relative h-[130px] md:h-[170px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
                  <Image
                    src="/images/route-highlands.jpg"
                    alt="Route panoramique des Highlands"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[130px] md:h-[170px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
                  <Image
                    src="/images/north-coast-500.jpg"
                    alt="North Coast 500"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom row images */}
              <div className="col-span-5 relative">
                <div className="relative h-[120px] md:h-[140px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
                  <Image
                    src="/images/dormir-van-lac.jpg"
                    alt="Van au bord d'un loch ecossais"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="col-span-7 relative">
                <div className="relative h-[120px] md:h-[140px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
                  <Image
                    src="/images/van-montagnes.jpg"
                    alt="Van face aux montagnes ecossaises"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-white/20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-forest-800">Loueurs verifies</p>
                  <p className="text-xs text-stone-500">Partenaire Yescapa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
