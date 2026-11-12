import type { Metadata } from "next";
import { siteConfig } from "../../../config/siteConfig";
import React from "react";
import {
  PiPhoneDuotone,
  PiLinkedinLogoDuotone,
  PiEnvelopeDuotone,
} from "react-icons/pi";
import { SketchFrame, Squiggle } from "../Sketch";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <main>
      <Links />
    </main>
  );
}

function Links() {
  return (
    <section className="container py-6 lg:py-10">
      <h1 className="sr-only">Contact</h1>

      <div className="mx-auto grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3">
        <ContactCard
          href={`tel:${siteConfig.phone}`}
          icon={<PiPhoneDuotone />}
          label="Phone"
          value={siteConfig.phone}
        />
        <ContactCard
          href={`mailto:${siteConfig.email}`}
          icon={<PiEnvelopeDuotone />}
          label="Email"
          value={siteConfig.email}
        />
        <ContactCard
          href={siteConfig.linkedin}
          external
          icon={<PiLinkedinLogoDuotone />}
          label="LinkedIn"
          value={siteConfig.first_name + " " + siteConfig.last_name}
        />
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="sketch-host squiggle-host relative flex flex-col items-center px-6 py-10 text-center"
    >
      <span className="text-4xl text-ink" aria-hidden="true">
        {icon}
      </span>
      <span className="mt-3 font-sketch text-2xl text-ink">
        {label}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </span>
      <span className="relative mt-2 break-all pb-2 text-2xl text-ink-soft">
        {value}
        <Squiggle className="absolute inset-x-0 bottom-0 h-[8px] w-full" />
      </span>
      <SketchFrame className="inset-0" />
    </a>
  );
}
