"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuLinks = [
  { label: "Hem",        href: "/" },
  { label: "Erbjudande", href: "/vart-erbjudande" },
  { label: "Uppdrag",    href: "/vara-uppdrag" },
  { label: "Om oss",     href: "/om-oss" },
  { label: "Blogg",      href: "/blogg" },
  { label: "Jobba här",  href: "/lediga-rebeller", external: true },
  { label: "Kontakt",    href: "/kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <Image
            src="/logo.svg"
            alt="Rebel and Bird"
            width={36}
            height={24}
            className="invert"
          />
        </Link>

        <div className="flex items-center gap-3 relative z-50">
          <Link
            href="/kontakt"
            className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.12em] uppercase px-4 py-2 border border-white/30 text-white hover:border-[#ff2d78] hover:text-[#ff2d78] transition-colors"
          >
            Kontakt
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.12em] uppercase px-4 py-2 border border-white/30 text-white hover:border-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? "Stäng" : "Meny"}
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#05050f]/97 backdrop-blur-sm flex flex-col justify-center px-8">
          {/* Grid background inside overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(0,245,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <nav className="relative max-w-7xl mx-auto w-full">
            <ul className="flex flex-col gap-2">
              {menuLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 border-b border-[#1e1e4a] hover:border-[#ff2d78] transition-colors"
                  >
                    <span className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] w-8">
                      0{i + 1}
                    </span>
                    <span
                      className="font-[family-name:var(--font-orbitron)] font-bold uppercase text-white/70 group-hover:text-white transition-colors"
                      style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
                    >
                      {link.label}
                    </span>
                    {link.external && (
                      <span className="text-[#4a4a7a] text-sm self-start mt-2">↗</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex gap-6">
              <a
                href="https://www.instagram.com/rebelandbird/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] hover:text-white transition-colors uppercase"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/rebelandbird"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] hover:text-white transition-colors uppercase"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
