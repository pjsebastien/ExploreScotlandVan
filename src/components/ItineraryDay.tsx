'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Highlight {
  title: string;
  description?: string;
}

interface ItineraryDayProps {
  dayNumber: number;
  title: string;
  subtitle?: string;
  distance: string;
  duration: string;
  description: string;
  highlights: Highlight[];
  sleepSpot: string;
  image?: string;
  imageAlt?: string;
  isLast?: boolean;
}

export default function ItineraryDay({
  dayNumber,
  title,
  subtitle,
  distance,
  duration,
  description,
  highlights,
  sleepSpot,
  image,
  imageAlt,
  isLast = false,
}: ItineraryDayProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-forest-300 to-forest-100 hidden md:block" />
      )}

      <div className="flex gap-4 md:gap-8">
        {/* Day number badge */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-forest-600 to-forest-700 flex items-center justify-center shadow-lg shadow-forest-600/20 relative z-10">
            <span className="text-white font-bold text-lg md:text-xl">{dayNumber}</span>
          </div>
        </div>

        {/* Content card */}
        <div className="flex-1 pb-8 md:pb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
            {/* Header - always visible */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-4 md:p-6 text-left flex items-start justify-between gap-4 hover:bg-stone-50/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded-full">
                    Jour {dayNumber}
                  </span>
                  <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {distance}
                  </span>
                  <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {duration}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-forest-900">{title}</h3>
                {subtitle && (
                  <p className="text-sm text-stone-500 mt-1">{subtitle}</p>
                )}
              </div>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {/* Expandable content */}
            {isExpanded && (
              <div className="border-t border-stone-100">
                {/* Image if available */}
                {image && (
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={image}
                      alt={imageAlt || title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}

                <div className="p-4 md:p-6 space-y-6">
                  {/* Description */}
                  <p className="text-stone-600 leading-relaxed">{description}</p>

                  {/* Highlights */}
                  {highlights.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-forest-800 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-forest-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        A ne pas manquer
                      </h4>
                      <div className="grid gap-2">
                        {highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-forest-50/50 rounded-lg">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center">
                              <svg className="w-3.5 h-3.5 text-forest-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-forest-800">{highlight.title}</span>
                              {highlight.description && (
                                <p className="text-sm text-stone-500 mt-0.5">{highlight.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sleep spot */}
                  <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl border border-sand-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-sand-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-sand-800">Ou dormir</span>
                      <p className="text-sm text-stone-600 mt-0.5">{sleepSpot}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
