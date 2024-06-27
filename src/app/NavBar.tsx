// Code for the header and navigation bar

import React from "react";
import { siteConfig } from "../../config/siteConfig";

function Header() {
  const style = "font-sketch text-center lowercase";

  return (
    <header className="py-12 container ">
      <div className="flex justify-center items-center">
        <img
          src="navbanner.gif"
          alt="Jayme Mendez Illustrations"
          className="h-[200px] object-cover"
        />
      </div>
      <Navigation />
    </header>
  );
}

function Navigation() {
  const textStyle =
    "font-sketch text-neutral-700 text-center hover:text-blue-400";
  return (
    <nav className="flex justify-evenly lg:gap-0 ld:justify-center text-2xl md:text-3xl  mt-12">
      <a className={`${textStyle}`} href="/">
        Gallery
      </a>
      <a className={`${textStyle}`} href="/about">
        About
      </a>
      <a className={`${textStyle}`} href="/contact">
        Contact
      </a>
    </nav>
  );
}

export default Header;
