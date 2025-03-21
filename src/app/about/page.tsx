import { siteConfig } from "../../../config/siteConfig";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <AboutMe />
    </main>
  );
}

function AboutMe() {
  return (
    <section className="container py-12 font-dekko flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className=" flex flex-col lg:px-16 basis-1/2 mt-16">
        {" "}
        <h3 className="text-4xl font-bold text-neutral-700">
          {siteConfig.about_headline}
        </h3>
        <p className="text-2xl text-neutral-600 mt-6">
          {siteConfig.about_body}
        </p>
      </div>
      <div className="md:w-1/2">
        <img src="/portrait.webp" alt="About me" className="w-full lg:px-20" />
      </div>
    </section>
  );
}