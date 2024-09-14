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
    alt: "Aztec Woman",
    caption: "Aztec Woman",
    src: "/artwork/1.webp",
  },
  {
    alt: "Alfred the Crocodile",
    caption: "Alfred the Crocodile",
    src: "/artwork/2.webp",
  },
  {
    alt: "Underwater Turtle",
    caption: "Underwater Turtle",
    src: "/artwork/15.webp",
  },
  {
    alt: "Simple Man",
    caption: "Simple Man",
    src: "/artwork/3.webp",
  },
  {
    alt: "Red,Red,Red",
    caption: "Red,Red,Red",
    src: "/artwork/6.webp",
  },
  {
    alt: "Fish on a Pirate Ship",
    caption: "Fish on a Pirate Ship",
    src: "/artwork/5.webp",
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
    alt: "Color Matching a Bottle",
    caption: "Color Matching a Bottle",
    src: "/artwork/8.webp",
  },
  {
    alt: "The Majestic Condor",
    caption: "The Majestic Condor",
    src: "/artwork/14.webp",
  },
  {
    alt: "Man in a Cave",
    caption: "Man in a Cave",
    src: "/artwork/9.webp",
  },
  {
    alt: "Whale Poster",
    caption: "Whale Poster",
    src: "/artwork/13.webp",
  },
  {
    alt: "The Creation of Adam",
    caption: "The Creation of Adam",
    src: "/artwork/10.webp",
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
