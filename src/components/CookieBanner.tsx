'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const refuseCookies = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-stone-200 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-stone-700">
              Ce site utilise des cookies pour ameliorer votre experience et mesurer l&apos;audience.
              En continuant a naviguer, vous acceptez notre{' '}
              <Link href="/politique-confidentialite/" className="text-forest-700 underline hover:text-forest-900">
                politique de confidentialite
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={refuseCookies}
              className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-semibold text-white bg-forest-700 rounded-lg hover:bg-forest-800 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
