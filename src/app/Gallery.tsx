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
    alt: "Underwater Turtle",
    caption: "Underwater Turtle",
    src: "/artwork/15.webp",
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
    alt: "The Majestic Condor",
    caption: "The Majestic Condor",
    src: "/artwork/14.webp",
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
