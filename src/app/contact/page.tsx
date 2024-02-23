import { siteConfig } from "../../../config/siteConfig";
import React from "react";
import Image from "next/image";

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
        className="py-10 w-full bg-neutral-200 text-3xl rounded-md flex flex-col justify-center items-center"
      >
        <div>Phone</div>
        <div className="mt-4">{siteConfig.phone}</div>
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        className="py-10 w-full bg-neutral-200 text-3xl rounded-md flex flex-col justify-center items-center"
      >
        <div>Email</div>
        <div className="mt-4">{siteConfig.email}</div>
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="py-10 w-full bg-neutral-200 text-3xl rounded-md flex flex-col justify-center items-center"
      >
        <div>LinkedIn</div>
        <div className="mt-4">
          {siteConfig.first_name + " " + siteConfig.last_name}
        </div>
      </a>
    </section>
  );
}
