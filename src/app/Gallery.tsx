'use client';

import React from 'react';
import { ImageGallery } from 'react-image-grid-gallery';

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Whale in the ocean",
    src: "/artwork/16.webp",
  },
  {
    alt: "Image1's alt text",
    caption: "Aztec Woman",
    src: "/artwork/1.webp",
  },
  {
    alt: "Image2's alt text",
    caption: "Alfred the Crocodile",
    src: "/artwork/2.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "Underwater Turtle",
    src: "/artwork/15.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "Simple Man",
    src: "/artwork/3.webp",
  },
  {
    alt: "Image1's alt text",
    caption: "Red,Red,Red",
    src: "/artwork/6.webp",
  },
  {
    alt: "Image2's alt text",
    caption: "Fish on a Pirate Ship",
    src: "/artwork/5.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "Custom Harry Potter Cover",
    src: "/artwork/4.webp",
  },
  {
    alt: "Image2's alt text",
    caption: "Balance",
    src: "/artwork/7.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "Color Matching a Bottle",
    src: "/artwork/8.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "The Majestic Condor",
    src: "/artwork/14.webp",
  },
  {
    alt: "Image2's alt text",
    caption: "Man in a Cave",
    src: "/artwork/9.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "Whale Poster",
    src: "/artwork/13.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "The Creation of Adam",
    src: "/artwork/10.webp",
  },
  {
    alt: "Image3's alt text",
    caption: "Windows to Art",
    src: "/artwork/11.webp",
  },
  {
    alt: "Image3's alt text",
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