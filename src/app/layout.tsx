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

export const metadata: Metadata = {
  title: {
    default: `${fullName} — Illustration`,
    template: `%s — ${fullName}`,
  },
  description: siteConfig.about_body,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dekko.variable} ${cabinSketch.variable}`}>
      <body className="font-dekko">
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
