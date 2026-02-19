import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="container-narrow text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-forest-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-forest-700 mb-6">
          Page introuvable
        </h2>
        <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Pas de panique, votre aventure écossaise continue !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-forest-700 px-6 py-3 text-base font-semibold text-white hover:bg-forest-800 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/road-trip-ecosse-van/"
            className="inline-flex items-center justify-center rounded-xl border-2 border-forest-700 px-6 py-3 text-base font-semibold text-forest-700 hover:bg-forest-50 transition-colors"
          >
            Voir nos itinéraires
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Link href="/prix-location-van-ecosse/" className="p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors">
            <p className="font-semibold text-forest-800">Prix location</p>
            <p className="text-sm text-stone-600">Tarifs et budget</p>
          </Link>
          <Link href="/dormir-en-van-ecosse/" className="p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors">
            <p className="font-semibold text-forest-800">Dormir en van</p>
            <p className="text-sm text-stone-600">Spots et règles</p>
          </Link>
          <Link href="/faq-location-van-ecosse/" className="p-4 bg-sand-50 rounded-xl hover:bg-sand-100 transition-colors">
            <p className="font-semibold text-forest-800">FAQ</p>
            <p className="text-sm text-stone-600">Toutes vos questions</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
