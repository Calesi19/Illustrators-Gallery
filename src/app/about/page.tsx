import type { Metadata } from "next";
import { siteConfig } from "../../../config/siteConfig";
import React from "react";
import Image from "next/image";
import { Squiggle } from "../Sketch";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <main>
      <AboutMe />
    </main>
  );
}

function AboutMe() {
  return (
    <section className="container flex flex-col-reverse items-center gap-12 py-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:py-10">
      <div className="max-w-[34rem] lg:basis-3/5">
        <h1 className="font-sketch text-4xl leading-tight text-ink text-balance md:text-5xl">
          {siteConfig.about_headline}
        </h1>
        <Squiggle className="squiggle--drawn mt-4 h-[8px] w-32" />
        <p className="mt-8 text-[1.375rem] leading-[1.55] text-ink-soft md:text-2xl md:leading-[1.55]">
          {siteConfig.about_body}
        </p>
      </div>

      <div className="w-full max-w-[20rem] lg:mt-3 lg:basis-2/5 lg:max-w-[24rem]">
        <Image
          src="/portrait.webp"
          alt={`Portrait of ${siteConfig.first_name} ${siteConfig.last_name}`}
          width={572}
          height={800}
          priority
          sizes="(min-width: 1024px) 24rem, 20rem"
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}
