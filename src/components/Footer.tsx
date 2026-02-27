import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Om oss",   href: "/om-oss" },
  { label: "Expertis", href: "/expertis" },
  { label: "Uppdrag",  href: "/vara-uppdrag" },
  { label: "Kontakt",  href: "/kontakt" },
  { label: "Karriär",  href: "/lediga-rebeller" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e4a] bg-[#05050f] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Rebel and Bird" width={28} height={18} className="opacity-90" />
              <span className="font-[family-name:var(--font-orbitron)] text-xs font-700 tracking-[0.2em] uppercase text-white/60">
                Rebel&nbsp;&amp;&nbsp;Bird
              </span>
            </div>
            <p className="text-[#4a4a7a] text-sm max-w-xs leading-relaxed">
              Agentic-first studio. Vi designar och bygger digitala upplevelser som gör verklig skillnad.
            </p>
            <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.15em] text-[#4a4a7a]">
              STOCKHOLM, SWEDEN
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] mb-4 uppercase">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.12em] uppercase text-white/50 hover:text-[#ff2d78] transition-colors"
                  >
                    ▶ {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] mb-4 uppercase">
              Kontakt
            </p>
            <a
              href="mailto:hello@rebelandbird.com"
              className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.1em] text-[#00f5ff] hover:text-white transition-colors block mb-6"
            >
              hello@rebelandbird.com
            </a>
            <a href="/kontakt" className="btn-arcade btn-arcade-pink text-[0.65rem]">
              <span>▶</span> Starta uppdrag
            </a>
          </div>
        </div>

        <div className="neon-divider my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.12em] text-[#4a4a7a]">
            © {new Date().getFullYear()} REBEL AND BIRD AB — ALL RIGHTS RESERVED
          </p>
          <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.12em] text-[#4a4a7a]">
            GAME_VERSION 2.0.0
          </p>
        </div>

      </div>
    </footer>
  );
}
