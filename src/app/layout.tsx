import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { siteConfig } from "../../config/siteConfig";

const dekko = localFont({
  src: "../../public/fonts/Dekko-Regular.ttf",
  variable: "--font-dekko",
  weight: "400",
  display: "swap",
});

const cabinSketch = localFont({
  src: "../../public/fonts/CabinSketch-Bold.ttf",
  variable: "--font-sketch",
  weight: "700",
  display: "swap",
});

const fullName = siteConfig.first_name + " " + siteConfig.last_name;

const defaultTitle = `${fullName} | Children's Illustrator in Minnesota`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site_url),
  title: {
    default: defaultTitle,
    template: `%s — ${fullName}`,
  },
  description: siteConfig.descriptions.home,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: fullName,
    title: defaultTitle,
    description: siteConfig.descriptions.home,
    url: "./",
    images: [
      {
        url: "/navbanner.webp",
        width: 966,
        height: 651,
        alt: `${fullName} illustration`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.descriptions.home,
    images: ["/navbanner.webp"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.site_url}/#person`,
  name: fullName,
  alternateName: siteConfig.alternate_name,
  jobTitle: "Children's Illustrator",
  description: siteConfig.descriptions.home,
  url: siteConfig.site_url,
  image: `${siteConfig.site_url}/portrait.webp`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "MN",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Brigham Young University-Idaho",
  },
  knowsAbout: [
    "Children's illustration",
    "Watercolor",
    "Acrylic painting",
    "Digital illustration",
  ],
  knowsLanguage: ["en", "es"],
  sameAs: [siteConfig.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dekko.variable} ${cabinSketch.variable}`}>
      <body className="font-dekko">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-xl"
        >
          Skip to content
        </a>
        <NavBar />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
