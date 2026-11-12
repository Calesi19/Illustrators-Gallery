// Code: Home page component

import React from "react";
import Gallery from "./Gallery";
import { siteConfig } from "../../config/siteConfig";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">
        {siteConfig.first_name} {siteConfig.last_name}: illustration gallery
      </h1>
      <Gallery />
    </main>
  );
}
