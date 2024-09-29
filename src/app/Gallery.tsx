"use client";

import React from "react";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Whale in the ocean",
    caption: "Whale in the ocean",
    src: "/artwork/16.webp",
  },
  {
    alt: "Peace Poster",
    caption: "Peace Poster",
    src: "/artwork/ocean.webp",
  },
  {
    alt: "Custom Harry Potter Cover",
    caption: "Custom Harry Potter Cover",
    src: "/artwork/4.webp",
  },
  {
    alt: "Balance",
    caption: "Balance",
    src: "/artwork/7.webp",
  },
  {
    alt: "Peace Poster",
    caption: "Peace Poster",
    src: "/artwork/wizardcat.webp",
  },
  {
    alt: "The Majestic Condor",
    caption: "The Majestic Condor",
    src: "/artwork/14.webp",
  },
  {
    alt: "Bear Skating",
    caption: "Bear Skating",
    src: "/artwork/bearhappy.webp",
  },
  {
    alt: "Bear at the beach",
    caption: "Bear at the beach",
    src: "/artwork/bearbeach.webp",
  },
  {
    alt: "Trick or Treat",
    caption: "Trick or Treat",
    src: "/artwork/bearscary.webp",
  },
  {
    alt: "Peace Poster",
    caption: "Peace Poster",
    src: "/artwork/duckthink.webp",
  },
  {
    alt: "Peace Poster",
    caption: "Peace Poster",
    src: "/artwork/bearduck.webp",
  },
  {
    alt: "Bear and Duck",
    caption: "Bear and Duck",
    src: "/artwork/bearlake.webp",
  },
  {
    alt: "Windows to Art",
    caption: "Windows to Art",
    src: "/artwork/11.webp",
  },

  {
    alt: "Peace Poster",
    caption: "Peace Poster",
    src: "/artwork/12.webp",
  },
  {
    alt: "Underwater Turtle",
    caption: "Underwater Turtle",
    src: "/artwork/15.webp",
  },
];

export default function Gallery() {
  return (
    <section>
      <div className="container">
        <ImageGallery
          imagesInfoArray={imagesArray}
          columnWidth={300}
          gapSize={12}
        />
      </div>
    </section>
  );
}
