interface AffiliateCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'compact' | 'hero';
}

export default function AffiliateCTA({
  title = 'Trouvez votre van ideal en Écosse',
  description = 'Comparez les offres de location de vans amenages aupres de particuliers et professionnels. Reservez en toute confiance avec une assurance incluse.',
  buttonText = 'Voir les vans disponibles',
  variant = 'default',
}: AffiliateCTAProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-forest-700 to-forest-800 rounded-xl p-6 my-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <p className="font-semibold">{title}</p>
          </div>
          <a
            href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
            target="_blank"
            rel="sponsored noopener nofollow"
            className="inline-flex items-center rounded-lg bg-sand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sand-600 transition-colors whitespace-nowrap"
          >
            {buttonText}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 rounded-2xl p-8 md:p-12 my-12 shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-lg text-forest-100 mb-8">
            {description}
          </p>
          <a
            href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
            target="_blank"
            rel="sponsored noopener nofollow"
            className="inline-flex items-center rounded-xl bg-sand-500 px-8 py-4 text-lg font-semibold text-white hover:bg-sand-600 transition-all hover:scale-105 shadow-lg"
          >
            {buttonText}
            <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-forest-200">
            Location entre particuliers et professionnels - Assurance incluse
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-sand-50 to-forest-50 border border-forest-200 rounded-xl p-6 md:p-8 my-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-forest-800 mb-2">
            {title}
          </h3>
          <p className="text-stone-600">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://www.yescapa.fr/s?radius=417129.09846972214&latitude=55.95438&longitude=-3.20145&where=Royaume-Uni%2C+Scotland&beds=2&seatbelts=2&page=1&ae=620&aev=vanecosse"
            target="_blank"
            rel="sponsored noopener nofollow"
            className="inline-flex items-center rounded-lg bg-forest-700 px-6 py-3 text-base font-semibold text-white hover:bg-forest-800 transition-colors"
          >
            {buttonText}
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
