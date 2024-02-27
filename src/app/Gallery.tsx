'use client';

import React from 'react';
import { ImageGallery } from 'react-image-grid-gallery';

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/artwork/1.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/artwork/2.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/15.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/3.png",
  },
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/artwork/6.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/artwork/5.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/4.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/artwork/7.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/8.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/14.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/artwork/9.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/13.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/10.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/11.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/artwork/12.png",
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