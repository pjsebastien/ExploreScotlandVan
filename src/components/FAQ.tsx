'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  showSchema?: boolean;
}

export default function FAQ({ items, title = 'Questions fréquentes', showSchema = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate schema.org FAQPage
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-forest-800 mb-8 text-center">
          {title}
        </h2>
      )}

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-stone-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-stone-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-forest-800 pr-4">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 text-forest-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div className={`p-5 pt-0 bg-white ${openIndex === index ? '' : 'hidden'}`}>
              <p className="text-stone-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
