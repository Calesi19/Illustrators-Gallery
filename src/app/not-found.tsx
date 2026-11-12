import React from "react";
import Link from "next/link";
import { Squiggle } from "./Sketch";

export default function NotFound() {
  return (
    <main className="container py-16 text-center">
      <h1 className="font-sketch text-4xl text-ink md:text-5xl">
        This page hasn&rsquo;t been drawn yet
      </h1>
      <Squiggle className="squiggle--drawn mx-auto mt-4 h-[8px] w-28" />
      <p className="mt-10 text-2xl">
        <Link href="/" className="squiggle-host relative inline-block px-1 py-2 text-ink">
          Back to the gallery
          <Squiggle className="absolute inset-x-0 bottom-0 h-[8px] w-full" />
        </Link>
      </p>
    </main>
  );
}
