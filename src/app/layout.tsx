import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.explorescotlandvan.com'),
  title: {
    default: "Location Van Écosse | ExploreScotlandVan",
    template: "%s | ExploreScotlandVan",
  },
  description: "Location de van aménagé en Écosse. Comparez les offres, planifiez votre road trip dans les Highlands et découvrez les meilleurs itinéraires.",
  authors: [{ name: "ExploreScotlandVan" }],
  creator: "ExploreScotlandVan",
  publisher: "ExploreScotlandVan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.explorescotlandvan.com/",
    siteName: "ExploreScotlandVan",
    title: "Location Van Écosse | ExploreScotlandVan",
    description: "Location de van aménagé en Écosse. Comparez les offres, planifiez votre road trip dans les Highlands et découvrez les meilleurs itinéraires.",
    images: [
      {
        url: "/images/hero-highlands.jpg",
        width: 1200,
        height: 630,
        alt: "Van aménagé dans les Highlands écossais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Van Écosse | ExploreScotlandVan",
    description: "Location de van aménagé en Écosse. Comparez les offres, planifiez votre road trip dans les Highlands.",
    images: ["/images/hero-highlands.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  alternates: {
    canonical: "https://www.explorescotlandvan.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-stone-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
