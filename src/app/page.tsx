"use client";

import { ImageGallery } from "react-image-grid-gallery";
import { siteConfig } from "../../config/siteConfig";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <main>
      <Gallery />
    </main>
  );
}


const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/example.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/example.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/example2.png",
  },
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/example.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/example2.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/example2.png",
  },
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/example.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/example2.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/example.png",
  },
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "/example.png",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "/example2.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "/example2.png",
  },
];

function Gallery() {
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


