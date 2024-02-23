import { siteConfig } from "../../../config/siteConfig";
import React from "react";
import {
  PiPhoneDuotone,
  PiLinkedinLogoDuotone,
  PiEnvelopeDuotone,
} from "react-icons/pi";

export default function Contact() {
  return (
    <main>
      <Links />
    </main>
  );
}

function Links() {
  return (
    <section className="container py-6 font-dekko flex flex-col gap-8 lg:flex-row items-center">
      <a
        href={`tel:${siteConfig.phone}`}
        className="hover:scale-105 transition-transform duration-500 py-10 w-full bg-neutral-200 text-3xl rounded-md flex flex-col justify-center items-center"
      >
        <div className="flex gap-4">
          <PiPhoneDuotone />
          Phone
        </div>
        <div className="mt-4">{siteConfig.phone}</div>
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        className="hover:scale-105 transition-transform duration-500 py-10 w-full bg-neutral-200 text-3xl rounded-md flex flex-col justify-center items-center"
      >
        <div className="flex gap-4">
          {" "}
          <PiEnvelopeDuotone />
          Email
        </div>
        <div className="mt-4">{siteConfig.email}</div>
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-500 py-10 w-full bg-neutral-200 text-3xl rounded-md flex flex-col justify-center items-center"
      >
        <div className="flex gap-4">
          <PiLinkedinLogoDuotone />
          LinkedIn
        </div>
        <div className="mt-4">
          {siteConfig.first_name + " " + siteConfig.last_name}
        </div>
      </a>
    </section>
  );
}
