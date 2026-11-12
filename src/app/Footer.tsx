import React from "react";
import { Squiggle } from "./Sketch";
import { siteConfig } from "../../config/siteConfig";

export default function Footer() {
  return (
    <footer className="container pt-16 pb-12">
      <Squiggle className="squiggle--drawn squiggle--ink mx-auto h-[8px] w-28" />
      <p className="mt-6 text-center text-lg text-ink-soft">
        &copy;{" "}
        {new Date().getFullYear() +
          " " +
          siteConfig.first_name +
          " " +
          siteConfig.last_name}
      </p>
    </footer>
  );
}
