import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Hem",        href: "/" },
  { label: "Erbjudande", href: "/vart-erbjudande" },
  { label: "Uppdrag",    href: "/vara-uppdrag" },
  { label: "Om oss",     href: "/om-oss" },
  { label: "Blogg",      href: "/blogg" },
  { label: "Jobba här",  href: "/lediga-rebeller", external: true },
  { label: "Kontakt",    href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e4a] bg-[#05050f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo */}
          <div className="flex flex-col gap-6">
            <Image src="/logo.svg" alt="Rebel and Bird" width={36} height={24} className="invert" />
          </div>

          {/* Contact + addresses */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] mb-2 uppercase">
                E-post
              </p>
              <a
                href="mailto:hello@rebelandbird.com"
                className="text-white hover:text-[#ff2d78] transition-colors"
              >
                hello@rebelandbird.com
              </a>
            </div>

            <div>
              <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] mb-1 uppercase" style={{ color: "#ff2d78" }}>
                Adress Stockholm
              </p>
              <p className="text-white/70 leading-relaxed">
                Wallingatan 2<br />
                111 60 Stockholm
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] mb-1 uppercase" style={{ color: "#ff2d78" }}>
                Adress Örebro
              </p>
              <p className="text-white/70 leading-relaxed">
                Vasagatan 10<br />
                702 10 Örebro
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a] mb-4 uppercase">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <span className="text-xs">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/rebelandbird/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.1em] text-white/60 hover:text-white transition-colors uppercase"
              >
                IG
              </a>
              <a
                href="https://www.linkedin.com/company/rebelandbird"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.1em] text-white/60 hover:text-white transition-colors uppercase"
              >
                LI
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
