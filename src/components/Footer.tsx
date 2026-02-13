import Link from 'next/link';
import Image from 'next/image';

const footerNavigation = {
  destinations: [
    { name: 'Location van Edimbourg', href: '/location-van-ecosse-edimbourg/' },
    { name: 'Location van Glasgow', href: '/location-van-ecosse-glasgow/' },
    { name: 'Road trip Écosse', href: '/road-trip-ecosse-van/' },
  ],
  itineraires: [
    { name: 'Ecosse en van 1 semaine', href: '/ecosse-en-van-1-semaine/' },
    { name: 'Ecosse en van 2 semaines', href: '/ecosse-en-van-2-semaines/' },
    { name: 'Dormir en van', href: '/dormir-en-van-ecosse/' },
  ],
  pratique: [
    { name: 'Prix location van', href: '/prix-location-van-ecosse/' },
    { name: 'FAQ', href: '/faq-location-van-ecosse/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/favicon.png"
                alt="ExploreScotlandVan Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-xl font-bold text-white">Explore</span>
              <span className="text-xl font-bold text-forest-400">Scotland</span>
              <span className="text-xl font-bold text-sand-400">Van</span>
            </Link>
            <p className="mt-4 text-sm text-stone-300 leading-relaxed">
              Tout sur la location de van en Écosse.
              Conseils, itineraires et bons plans pour un road trip inoubliable
              dans les Highlands.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold text-sand-400 uppercase tracking-wider">
              Destinations
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.destinations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Itineraires */}
          <div>
            <h3 className="text-sm font-semibold text-sand-400 uppercase tracking-wider">
              Itineraires
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.itineraires.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pratique */}
          <div>
            <h3 className="text-sm font-semibold text-sand-400 uppercase tracking-wider">
              Informations pratiques
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.pratique.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
                target="_blank"
                rel="sponsored noopener nofollow"
                className="inline-flex items-center rounded-lg bg-sand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sand-700 transition-colors"
              >
                Trouver un van
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-400">
              &copy; {new Date().getFullYear()} ExploreScotlandVan.com - Tous droits reserves
            </p>
            <div className="flex items-center space-x-4 text-xs text-stone-500">
              <Link href="/a-propos/" className="hover:text-white transition-colors">A propos</Link>
              <Link href="/mentions-legales/" className="hover:text-white transition-colors">Mentions legales</Link>
              <Link href="/politique-confidentialite/" className="hover:text-white transition-colors">Confidentialite</Link>
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-4 text-center">
            Ce site contient des liens affilies. En reservant via nos liens, vous soutenez notre travail sans frais supplementaires.
          </p>
        </div>
      </div>
    </footer>
  );
}
