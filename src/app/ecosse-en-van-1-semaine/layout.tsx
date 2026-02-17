import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Écosse en van 1 semaine : l\'itinéraire essentiel',
  description: 'Découvrez l\'Écosse en van en 7 jours : Édimbourg, Skye, Glen Coe. Itinéraire jour par jour, spots et budget pour une semaine parfaite.',
  alternates: {
    canonical: 'https://www.explorescotlandvan.com/ecosse-en-van-1-semaine/',
  },
  openGraph: {
    title: 'Écosse en van 1 semaine : l\'itinéraire essentiel',
    description: 'Découvrez l\'Écosse en van en 7 jours : Édimbourg, Skye, Glen Coe. Itinéraire jour par jour.',
    url: 'https://www.explorescotlandvan.com/ecosse-en-van-1-semaine/',
    images: [{ url: '/images/roadtrip-panoramique.jpg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
