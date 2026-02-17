import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Écosse en van 2 semaines : le grand tour avec la NC500',
  description: 'Explorez l\'Écosse en van pendant 14 jours : North Coast 500, île de Skye, Highlands. L\'itinéraire complet jour par jour.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/ecosse-en-van-2-semaines/',
  },
  openGraph: {
    title: 'Écosse en van 2 semaines : le grand tour avec la NC500',
    description: 'Explorez l\'Écosse en van pendant 14 jours : North Coast 500, Skye, Highlands.',
    url: 'https://www.explorescotlandvan.com/ecosse-en-van-2-semaines/',
    images: [{ url: '/images/north-coast-500.jpg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
