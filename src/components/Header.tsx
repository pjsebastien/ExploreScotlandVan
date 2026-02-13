'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-ecosse-van/' },
  { name: 'Prix', href: '/prix-location-van-ecosse/' },
  { name: 'Dormir en Van', href: '/dormir-en-van-ecosse/' },
  { name: '1 Semaine', href: '/ecosse-en-van-1-semaine/' },
  { name: '2 Semaines', href: '/ecosse-en-van-2-semaines/' },
  { name: 'FAQ', href: '/faq-location-van-ecosse/' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
