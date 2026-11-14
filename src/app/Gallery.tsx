"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SketchFrame } from "./Sketch";

type Artwork = {
  alt: string;
  caption: string;
  // Optional. When present it is shown under the title in the lightbox.
  description?: string;
  src: string;
  width: number;
  height: number;
};

// width/height are the files' intrinsic pixel sizes; they reserve the right
// space before each image loads, so the page never jumps.
// Add `description: "..."` to any piece to show a note about it in the lightbox.
const imagesArray: Artwork[] = [
  { alt: "Sunflower Boy", caption: "Sunflower Boy", src: "/artwork/sunflower.webp", width: 4192, height: 1747 },
  { alt: "Bread Boat", caption: "Bread Boat", src: "/artwork/bread-boat.webp", width: 2700, height: 2700 },
  { alt: "Father's Love", caption: "Father's Love", src: "/artwork/father-love.webp", width: 2048, height: 1536 },
  { alt: "Lighthouse", caption: "Lighthouse", src: "/artwork/lighthouse.webp", width: 1102, height: 1542 },
  { alt: "Colombia Poster", caption: "Colombia Poster", src: "/artwork/colombia-poster.webp", width: 2803, height: 4022 },
  { alt: "Colombia", caption: "Colombia", src: "/artwork/colombia.webp", width: 2275, height: 3488 },
  { alt: "Fly and Spider", caption: "Fly and Spider", src: "/artwork/fly-and-spider.webp", width: 2048, height: 1536 },
  { alt: "Girl in the Woods", caption: "Girl in the Woods", src: "/artwork/girl-in-woods.webp", width: 1536, height: 2048 },
  { alt: "Lighthouse", caption: "Lighthouse", src: "/artwork/lighthouse2.webp", width: 1102, height: 1542 },
  { alt: "Fireworks", caption: "Fireworks", src: "/artwork/fireworks.webp", width: 7200, height: 3000 },
  { alt: "Self Portrait", caption: "Self Portrait", src: "/artwork/self.webp", width: 1437, height: 1335 },
  { alt: "I am cold", caption: "I am cold", src: "/artwork/iamcold.webp", width: 1568, height: 1072 },
  { alt: "Fishboy", caption: "Fishboy", src: "/artwork/fishboy2.webp", width: 1584, height: 1056 },
  { alt: "A Western Poster", caption: "A Western Poster", src: "/artwork/vaquero.webp", width: 3300, height: 5100 },
  { alt: "RV Camping", caption: "RV Camping", src: "/artwork/rv-camping.webp", width: 4047, height: 3002 },
  { alt: "Narwhal", caption: "Narwhal", src: "/artwork/narwhal.webp", width: 2475, height: 1725 },
  { alt: "Whale in the ocean", caption: "Whale in the ocean", src: "/artwork/whale.webp", width: 900, height: 1430 },
  { alt: "To the Moon and Back", caption: "To the Moon and Back", src: "/artwork/i-love-you.webp", width: 1269, height: 1556 },
  { alt: "Balance", caption: "Balance", src: "/artwork/rocks.webp", width: 1080, height: 1332 },
  { alt: "Wizard and Cat", caption: "Wizard and Cat", src: "/artwork/wizard-cat.webp", width: 1536, height: 2048 },
  { alt: "Peace Poster", caption: "Peace Poster", src: "/artwork/peace.webp", width: 2100, height: 3000 },
  { alt: "Fisherfish", caption: "Fisherfish", src: "/artwork/fisherfish.webp", width: 4028, height: 1593 },
  { alt: "The Majestic Condor", caption: "The Majestic Condor", src: "/artwork/condor-bw.webp", width: 1536, height: 2048 },
  // { alt: "Underwater Turtle", caption: "Underwater Turtle", src: "/artwork/turtles-bw.webp", width: 1536, height: 2048 },
  { alt: "Trick or Treat", caption: "Trick or Treat", src: "/artwork/bear-scary.webp", width: 2048, height: 1536 },
  { alt: "Bear and Duck", caption: "Bear and Duck", src: "/artwork/bear-lake.webp", width: 2048, height: 1536 },
  { alt: "Windows to Art", caption: "Windows to Art", src: "/artwork/windows.webp", width: 1080, height: 793 },
];

const markLoaded = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.dataset.loaded = "true";
};

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-label="Artwork">
      <div className="container">
        <ul className="columns-[300px] gap-x-3">
          {imagesArray.map((art, i) => (
            <li key={art.src} className="mb-3 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`View ${art.caption} larger`}
                  className="sketch-host relative block w-full cursor-zoom-in bg-black/[0.04]"
                >
                  <Image
                    src={art.src}
                    alt={art.alt}
                    width={art.width}
                    height={art.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={i < 2}
                    onLoad={markLoaded}
                    className="art-img block h-auto w-full"
                  />
                  <span className="art-label absolute bottom-2 left-2 max-w-[calc(100%-1rem)] bg-white px-2.5 pb-0.5 pt-1 text-left text-lg leading-tight text-ink">
                    {art.caption}
                  </span>
                  <SketchFrame className="art-frame -inset-[4px]" />
                </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
}: {
  index: number | null;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const total = imagesArray.length;
  const isOpen = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + total) % total);
    },
    [index, onChange, total]
  );

  // Open / close the native dialog (it handles focus trapping, Esc, and
  // returning focus to the thumbnail).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Keep the page behind from scrolling while open.
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [isOpen]);

  const art = index !== null ? imagesArray[index] : null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      }}
      aria-label={art ? art.caption : "Artwork"}
      className="lightbox m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 text-ink"
    >
      {art && index !== null && (
        <div className="flex h-full flex-col px-4 py-3 sm:px-8 sm:py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl text-ink-soft" aria-live="polite">
              {index + 1} / {total}
            </p>
            <IconButton label="Close" onClick={onClose}>
              <path d="M7 7.5 C 11 11, 16 16.5, 21.5 21 M21 6.5 C 16.5 11.5, 11.5 16, 6.5 21.5" />
            </IconButton>
          </div>

          {/* The artwork fills whatever room the title and description leave.
              Clicking the empty paper around it closes the lightbox. */}
          <div className="min-h-0 flex-1 py-5">
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ containerType: "size" }}
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
            >
            <div
              key={art.src}
              className="lightbox-art relative"
              style={{
                aspectRatio: `${art.width} / ${art.height}`,
                width: `min(100cqw - 20px, (100cqh - 20px) * ${art.width / art.height})`,
              }}
            >
              <Image
                src={art.src}
                alt={art.alt}
                fill
                sizes="100vw"
                quality={85}
                className="object-contain"
              />
              <SketchFrame className="-inset-[10px]" />
            </div>
            </div>
          </div>

          {/* Phones: title and description on top, arrows beneath.
              Wider screens: arrows either side of the text. */}
          <div className="grid grid-cols-2 items-end gap-x-4 gap-y-3 sm:grid-cols-[auto_1fr_auto]">
            <IconButton
              label="Previous artwork"
              onClick={() => step(-1)}
              className="row-start-2 justify-self-start sm:col-start-1 sm:row-start-1"
            >
              <path d="M22 14 C 17 13.5, 11 14.5, 6 14 M12.5 7.5 C 10 10, 8 12, 5.5 14 C 8 16, 10.5 18.5, 12.5 21" />
            </IconButton>
            <div className="col-span-2 min-w-0 text-center sm:col-span-1 sm:col-start-2 sm:row-start-1">
              <h2 className="font-sketch text-2xl sm:text-3xl">
                {art.caption}
              </h2>
              {art.description && (
                <p className="mx-auto mt-2 max-h-[28dvh] max-w-[60ch] overflow-y-auto text-lg leading-snug text-ink-soft sm:text-xl sm:leading-snug">
                  {art.description}
                </p>
              )}
            </div>
            <IconButton
              label="Next artwork"
              onClick={() => step(1)}
              className="row-start-2 justify-self-end sm:col-start-3 sm:row-start-1"
            >
              <path d="M6 14 C 11 13.5, 17 14.5, 22 14 M15.5 7.5 C 18 10, 20 12, 22.5 14 C 20 16, 17.5 18.5, 15.5 21" />
            </IconButton>
          </div>
        </div>
      )}
    </dialog>
  );
}

function IconButton({
  label,
  onClick,
  children,
  className = "",
}: {
  className?: string;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`sketch-host relative grid h-12 w-12 shrink-0 place-items-center ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        className="h-7 w-7 fill-none stroke-current"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
      <SketchFrame className="inset-0" round />
    </button>
  );
}
