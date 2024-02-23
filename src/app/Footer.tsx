import React from "react";
import { siteConfig } from "../../config/siteConfig";

export default function Footer() {
  return (
    <footer className="py-12 container">
      <p className="text-center text-neutral-700">
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
