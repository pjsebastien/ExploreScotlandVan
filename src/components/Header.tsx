'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-ecosse-van/' },
  { name: 'Prix', href: '/prix-location-van-ecosse/' },
  { name: 'Dormir en Van', href: '/dormir-en-van-ecosse/' },
  { name: '1 Semaine', href: '/ecosse-en-van-1-semaine/' },
  { name: '2 Semaines', href: '/ecosse-en-van-2-semaines/' },
  { name: 'FAQ', href: '/faq-location-van-ecosse/' },
  { name: 'Blog', href: '/blog/' },
];

const cityPages = [
  { name: 'Édimbourg', href: '/location-van-ecosse-edimbourg/', publishDate: null },
  { name: 'Glasgow', href: '/location-van-ecosse-glasgow/', publishDate: null },
  { name: 'Inverness', href: '/location-van-ecosse-inverness/', publishDate: '2026-03-23T08:00:00.000Z' },
  { name: 'Fort William', href: '/location-van-ecosse-fort-william/', publishDate: '2026-03-29T08:00:00.000Z' },
  { name: 'Aberdeen', href: '/location-van-ecosse-aberdeen/', publishDate: '2026-04-04T08:00:00.000Z' },
  { name: 'Oban', href: '/location-van-ecosse-oban/', publishDate: '2026-04-10T08:00:00.000Z' },
  { name: 'Stirling', href: '/location-van-ecosse-stirling/', publishDate: '2026-04-16T08:00:00.000Z' },
];

function getVisibleCities() {
  const now = new Date();
  return cityPages.filter(
    (city) => !city.publishDate || new Date(city.publishDate) <= now
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
  const [visibleCities, setVisibleCities] = useState(getVisibleCities);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCities(getVisibleCities());
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCitiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/favicon.png"
                alt="ExploreScotlandVan Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-xl font-bold text-forest-800">Explore</span>
              <span className="text-xl font-bold text-forest-600">Scotland</span>
              <span className="text-xl font-bold text-sand-600">Van</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-700 hover:text-forest-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Cities dropdown */}
            {visibleCities.length > 0 && (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className="flex items-center text-sm font-medium text-stone-700 hover:text-forest-700 transition-colors"
                  onClick={() => setCitiesOpen(!citiesOpen)}
                  aria-expanded={citiesOpen}
                  aria-haspopup="true"
                >
                  Villes
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${citiesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {citiesOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-stone-200 py-2 z-50">
                    {visibleCities.map((city) => (
                      <Link
                        key={city.name}
                        href={city.href}
                        className="block px-4 py-2 text-sm text-stone-700 hover:bg-forest-50 hover:text-forest-700 transition-colors"
                        onClick={() => setCitiesOpen(false)}
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Link
              href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
              target="_blank"
              rel="sponsored noopener nofollow"
              className="ml-4 rounded-lg bg-forest-700 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-800 transition-colors"
            >
              Louer un Van
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-stone-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu principal"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-forest-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile cities submenu */}
              {visibleCities.length > 0 && (
                <>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-forest-700"
                    onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
                    aria-expanded={mobileCitiesOpen}
                  >
                    Villes
                    <svg
                      className={`h-5 w-5 transition-transform ${mobileCitiesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileCitiesOpen && (
                    <div className="pl-4 space-y-1">
                      {visibleCities.map((city) => (
                        <Link
                          key={city.name}
                          href={city.href}
                          className="block rounded-lg px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 hover:text-forest-700"
                          onClick={() => { setMobileMenuOpen(false); setMobileCitiesOpen(false); }}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}

              <Link
                href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
                target="_blank"
                rel="sponsored noopener nofollow"
                className="block rounded-lg bg-forest-700 px-3 py-2 text-base font-semibold text-white text-center hover:bg-forest-800 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Louer un Van
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
