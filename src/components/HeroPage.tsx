import Image from 'next/image';

interface HeroStat {
  value: string;
  label: string;
}

interface HeroPageProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
  imageAlt: string;
  stats?: HeroStat[];
}

export default function HeroPage({
  title,
  subtitle,
  badge,
  image,
  imageAlt,
  stats,
}: HeroPageProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
        {/* Image Column */}
        <div className="relative h-[300px] lg:h-auto order-1 lg:order-2">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/40 via-forest-900/20 to-transparent lg:bg-gradient-to-l" />

          {/* Mobile overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent lg:hidden" />
        </div>

        {/* Content Column */}
        <div className="relative bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 order-2 lg:order-1">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="relative h-full flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 bg-forest-700/50 backdrop-blur-sm text-forest-100 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit border border-forest-600/30">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {badge}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg md:text-xl text-forest-100/90 leading-relaxed max-w-lg mb-8">
                {subtitle}
              </p>
            )}

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-forest-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
