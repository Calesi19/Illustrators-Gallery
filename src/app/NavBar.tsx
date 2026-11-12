"use client";

// Code for the header and navigation bar

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../../config/siteConfig";

const links = [
  { href: "/", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="container pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="flex justify-center">
        <Link href="/" aria-label={`${siteConfig.first_name} ${siteConfig.last_name}, home`}>
          <Image
            src="/navbanner.webp"
            alt={`${siteConfig.first_name} ${siteConfig.last_name} illustration`}
            width={966}
            height={651}
            priority
            sizes="300px"
            className="h-[150px] w-auto md:h-[200px]"
          />
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="mt-8 md:mt-12 flex justify-evenly text-2xl md:text-3xl"
    >
      {links.map(({ href, label }) => {
        const current = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
            className="px-2 py-2 font-sketch text-neutral-700 transition-colors hover:text-blue-400"
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default Header;
