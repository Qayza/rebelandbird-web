import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────── */

const projects = [
  {
    id: "01",
    client: "Filmstaden",
    title: "AI-assistent",
    tags: ["AI", "UX-design", "Utveckling"],
    href: "/vara-uppdrag/filmstaden-ai-assistent",
    accent: "#ff2d78",
  },
  {
    id: "02",
    client: "Preem",
    title: "Ny webbplats",
    tags: ["Design", "Frontendutveckling", "CMS"],
    href: "/vara-uppdrag/preems-nya-webbplats",
    accent: "#00f5ff",
  },
  {
    id: "03",
    client: "Parks & Resorts",
    title: "Gröna Lund",
    tags: ["UX-design", "Webbplats", "Tjänstedesign"],
    href: "/vara-uppdrag/parks-and-resorts-grona-lund",
    accent: "#39ff14",
  },
  {
    id: "04",
    client: "Mustaschkampen",
    title: "Digital kampanj",
    tags: ["Kampanj", "Design", "Utveckling"],
    href: "/vara-uppdrag/mustaschkampen",
    accent: "#b24bff",
  },
];

const services = [
  { id: "01", label: "UX-design & Designstrategi" },
  { id: "02", label: "Tjänstedesign" },
  { id: "03", label: "Frontendutveckling" },
  { id: "04", label: "AI & Agentic services" },
  { id: "05", label: "E-handel" },
  { id: "06", label: "CMS & Innehållsstrategi" },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="scanlines relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
          {/* Retrowave perspective grid floor */}
          <div className="retro-grid-floor" />

          {/* Top status bar */}
          <div className="absolute top-20 left-0 right-0 px-6 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center">
              <span className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a]">
                PLAYER_1
              </span>
              <span className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a]">
                SCORE &nbsp; 2 0 2 5
              </span>
              <span className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-[#4a4a7a]">
                LIVES &nbsp; ♥ ♥ ♥
              </span>
            </div>
            <div className="neon-divider mt-3" />
          </div>

          {/* Main hero content */}
          <div className="max-w-7xl mx-auto w-full mt-20">

            <p className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.3em] text-[#ff2d78] mb-6 uppercase">
              ▶ &nbsp; Agentic-first studio &nbsp; — &nbsp; Stockholm
            </p>

            <h1
              className="font-[family-name:var(--font-orbitron)] font-black uppercase leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2.8rem, 9vw, 8rem)" }}
            >
              <span className="block text-white">Vi designar</span>
              <span className="block" style={{ color: "#ff2d78" }}>
                upplevelser
              </span>
              <span className="block text-white/90">som spelar</span>
              <span className="block cursor" style={{ color: "#00f5ff" }}>
                roll
              </span>
            </h1>

            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-12">
              Vi kombinerar UX-design, tjänstedesign och modern teknologi
              för att skapa digitala produkter som gör verklig skillnad —
              för dina användare och din affär.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/vara-uppdrag" className="btn-arcade btn-arcade-pink">
                <span>▶</span> Se våra uppdrag
              </a>
              <a href="/kontakt" className="btn-arcade btn-arcade-cyan">
                <span>▶</span> Kontakta oss
              </a>
            </div>

            <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.25em] text-[#4a4a7a] mt-16 animate-pulse">
              SCROLL TO CONTINUE &nbsp; ▼
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05050f] to-transparent pointer-events-none" />
        </section>

        {/* ── FEATURED WORK ────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.3em] text-[#ff2d78] mb-3">
                  [02] &nbsp; UTVALDA UPPDRAG
                </p>
                <h2
                  className="font-[family-name:var(--font-orbitron)] font-bold uppercase text-white"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
                >
                  Vad vi har byggt
                </h2>
              </div>
              <Link
                href="/vara-uppdrag"
                className="hidden md:inline font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.12em] uppercase text-[#00f5ff] transition-all"
              >
                Alla uppdrag &nbsp; ▶
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="card-arcade group block p-8 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 w-16 h-16"
                    style={{
                      background: `linear-gradient(225deg, ${project.accent}18, transparent 60%)`,
                    }}
                  />
                  <p
                    className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.3em] mb-6"
                    style={{ color: project.accent, opacity: 0.7 }}
                  >
                    [{project.id}]
                  </p>
                  <p className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.15em] text-white/40 uppercase mb-2">
                    {project.client}
                  </p>
                  <h3 className="font-[family-name:var(--font-orbitron)] font-bold text-xl uppercase text-white mb-6">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[family-name:var(--font-orbitron)] text-[0.55rem] tracking-[0.1em] uppercase px-2 py-1 border"
                        style={{
                          borderColor: `${project.accent}40`,
                          color: `${project.accent}90`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: project.accent }}
                  >
                    ▶ &nbsp; Visa uppdrag
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────── */}
        <section className="px-6 py-24 grid-bg border-t border-b border-[#1e1e4a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              <div>
                <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.3em] text-[#00f5ff] mb-3">
                  [03] &nbsp; VAD VI GÖR
                </p>
                <h2
                  className="font-[family-name:var(--font-orbitron)] font-bold uppercase text-white leading-tight mb-6"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
                >
                  Välj ditt<br />
                  <span className="text-[#00f5ff]">nästa drag</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-8">
                  Oavsett om du behöver en komplett digital transformation
                  eller ett specifikt designuppdrag — vi har expertisen
                  för att ta dig dit.
                </p>
                <a href="/expertis" className="btn-arcade btn-arcade-cyan text-xs">
                  <span>▶</span> Läs mer om vår expertis
                </a>
              </div>

              <div>
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="group flex items-center gap-4 py-4 border-b border-[#1e1e4a] hover:border-[#ff2d78] transition-colors cursor-default"
                  >
                    <span className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.1em] text-[#4a4a7a] group-hover:text-[#ff2d78] transition-colors w-8 shrink-0">
                      [{service.id}]
                    </span>
                    <span className="font-[family-name:var(--font-orbitron)] text-sm font-semibold tracking-[0.1em] uppercase text-white/70 group-hover:text-white transition-colors">
                      {service.label}
                    </span>
                    <span className="ml-auto text-[#4a4a7a] group-hover:text-[#ff2d78] transition-colors opacity-0 group-hover:opacity-100">
                      ▶
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── ABOUT TEASER ─────────────────────────────── */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.3em] text-[#b24bff] mb-3">
                [04] &nbsp; OM OSS
              </p>
              <h2
                className="font-[family-name:var(--font-orbitron)] font-bold uppercase leading-tight mb-8 text-white"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
              >
                Vi är ett team av{" "}
                <span className="text-[#b24bff]">rebeller</span>
                {" "}och{" "}
                <span className="text-[#ff2d78]">fåglar</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-4 max-w-2xl">
                Rebel and Bird är ett digitalt designstudio med bas i Stockholm.
                Vi tror på att god design förändrar beteenden, stärker varumärken
                och skapar värde — på riktigt.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-2xl">
                Som ett agentic-first studio är vi ständigt i framkant med AI
                och automatisering — inte för att det är coolt, utan för att det
                ger dig bättre resultat, snabbare.
              </p>
              <a href="/om-oss" className="btn-arcade btn-arcade-pink text-xs">
                <span>▶</span> Lär känna oss
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="card-arcade p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d78]/5 via-transparent to-[#b24bff]/5 pointer-events-none" />
              <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.3em] text-[#ff2d78] mb-4 relative">
                [05] &nbsp; GAME OVER?
              </p>
              <h2
                className="font-[family-name:var(--font-orbitron)] font-black uppercase relative mb-6"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "#ff2d78" }}
              >
                Redo att spela?
              </h2>
              <p className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.2em] text-white/40 mb-10 relative">
                INSERT COIN TO CONTINUE
              </p>
              <p className="text-white/50 text-lg max-w-lg mx-auto mb-12 relative">
                Berätta om ditt projekt — vi återkommer inom 24 timmar
                med ett förslag på hur vi kan hjälpa dig.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                <a href="/kontakt" className="btn-arcade btn-arcade-pink">
                  <span>▶</span> Starta uppdrag
                </a>
                <a href="/vara-uppdrag" className="btn-arcade btn-arcade-cyan">
                  <span>▶</span> Se vårt arbete
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
