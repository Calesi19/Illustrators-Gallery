import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { siteConfig } from "../../config/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.first_name + " " + siteConfig.last_name,
  description: siteConfig.about_body,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
