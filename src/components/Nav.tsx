"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Om oss",    href: "/om-oss" },
  { label: "Expertis",  href: "/expertis" },
  { label: "Uppdrag",   href: "/vara-uppdrag" },
  { label: "Kontakt",   href: "/kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e4a] bg-[#05050f]/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="Rebel and Bird"
            width={32}
            height={21}
            className="logo-glow"
          />
          <span
            className="font-[family-name:var(--font-orbitron)] text-xs font-700 tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors"
          >
            Rebel&nbsp;&amp;&nbsp;Bird
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-[family-name:var(--font-orbitron)] text-[0.65rem] font-600 tracking-[0.15em] uppercase text-[#4a4a7a] hover:text-[#00f5ff] hover:glow-cyan transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/kontakt"
          className="hidden md:inline-flex btn-arcade btn-arcade-pink text-xs"
        >
          <span>▶</span> Starta uppdrag
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1e1e4a] bg-[#05050f]/95 backdrop-blur-md">
          <ul className="px-6 py-6 flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-orbitron)] text-sm font-700 tracking-[0.15em] uppercase text-white/70 hover:text-[#ff2d78]"
                >
                  ▶ {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/kontakt" className="btn-arcade btn-arcade-pink w-full justify-center text-xs">
                Starta uppdrag
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
