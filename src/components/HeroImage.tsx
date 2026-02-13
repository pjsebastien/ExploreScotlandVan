import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  showCTA?: boolean;
}

export default function HeroImage({ src, alt, title, subtitle, showCTA = true }: HeroImageProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-sand-100 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.yescapa.fr/search?location=Scotland"
                target="_blank"
                rel="sponsored noopener nofollow"
                className="inline-flex items-center justify-center rounded-xl bg-sand-500 px-8 py-4 text-lg font-semibold text-white hover:bg-sand-600 transition-all hover:scale-105 shadow-lg"
              >
                Trouver un van en Ecosse
                <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#guide"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all"
              >
                Decouvrir le guide
                <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
