"use client";

import React from "react";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Sunflower Boy",
    caption: "Sunflower Boy",
    src: "/artwork/sunflower.webp",
  },
  {
    alt: "Father's Love",
    caption: "Father's Love",
    src: "/artwork/father-love.webp",
  },
  {
    alt: "Colombia Poster",
    caption: "Colombia Poster",
    src: "/artwork/colombia-poster.webp",
  },
  {
    alt: "Colombia",
    caption: "Colombia",
    src: "/artwork/colombia.webp",
  },
  {
    alt: "Fly and Spider",
    caption: "Fly and Spider",
    src: "/artwork/fly-and-spider.webp",
  },
  {
    alt: "Girl in the Woods",
    caption: "Girl in the Woods",
    src: "/artwork/girl-in-woods.webp",
  },
  {
    alt: "Vaquero",
    caption: "A Western Poster",
    src: "/artwork/vaquero.webp",
  },
  {
    alt: "Fireworks",
    caption: "Fireworks",
    src: "/artwork/fireworks.webp",
  },
  {
    alt: "Self Portrait",
    caption: "Self Portrait",
    src: "/artwork/self.webp",
  },
  {
    alt: "I am cold",
    caption: "I am cold",
    src: "/artwork/iamcold.webp",
  },
  {
    alt: "Fish Boy",
    caption: "Fishboy",
    src: "/artwork/fishboy2.webp",
  },
  {
    alt: "RV Camping",
    caption: "RV Camping",
    src: "/artwork/rv-camping.webp",
  },
  {
    alt: "Narwhal",
    caption: "Narwhal",
    src: "/artwork/narwhal.webp",
  },
  {
    alt: "Whale in the ocean",
    caption: "Whale in the ocean",
    src: "/artwork/whale.webp",
  },
  {
    alt: "i-love-you",
    caption: "To the Moon and Back",
    src: "/artwork/i-love-you.webp",
  },
  {
    alt: "Balance",
    caption: "Balance",
    src: "/artwork/rocks.webp",
  },
  {
    alt: "Wizard and Cat",
    caption: "Wizard and Cat",
    src: "/artwork/wizard-cat.webp",
  },
  {
    alt: "Peace Poster",
    caption: "Peace Poster",
    src: "/artwork/peace.webp",
  },
  {
    alt: "Fisherfish",
    caption: "Fisherfish",
    src: "/artwork/fisherfish.webp",
  },
  {
    alt: "The Majestic Condor",
    caption: "The Majestic Condor",
    src: "/artwork/condor-bw.webp",
  },
  // {
  //   alt: "Underwater Turtle",
  //   caption: "Underwater Turtle",
  //   src: "/artwork/turtles-bw.webp",
  // },
  {
    alt: "Trick or Treat",
    caption: "Trick or Treat",
    src: "/artwork/bear-scary.webp",
  },
  {
    alt: "Bear and Duck",
    caption: "Bear and Duck",
    src: "/artwork/bear-lake.webp",
  },
  {
    alt: "Windows to Art",
    caption: "Windows to Art",
    src: "/artwork/windows.webp",
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
