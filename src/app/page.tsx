import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────── */

const projects = [
  {
    slug: "filmstaden-foretagsportal",
    title: "Filmstaden",
    subtitle: "Digital Plattform",
    bg: "#1a1a2e",
  },
  {
    slug: "preems-nya-webbplats",
    title: "Preem.se",
    subtitle: "Digital Plattform",
    bg: "#0a1628",
  },
  {
    slug: "parks-and-resorts-grona-lund",
    title: "Gröna Lund",
    subtitle: "Digital Plattform",
    bg: "#0d1f1a",
  },
  {
    slug: "filmstaden-ai-assistent",
    title: "Filmstaden",
    subtitle: "E-handel B2B",
    bg: "#1a1a2e",
  },
  {
    slug: "preem-com",
    title: "Preem.com",
    subtitle: "Digital Plattform",
    bg: "#0a1628",
  },
  {
    slug: "happy-homes",
    title: "Happy Homes",
    subtitle: "E-handel",
    bg: "#1f1020",
  },
];

const blogPosts = [
  {
    date: "30 januari 2026",
    title: 'Rebel and Bird utmanar konsultbranschen: Lanserar "Agentic-First" och Output-As-A-Service',
    href: "/blog/agentic-first-studio",
  },
  {
    date: "29 januari 2026",
    title: "Del 7/7 — 7 vingslag med Claude, så LLMnar du boet.",
    href: "/blog/claude-code-sju",
  },
  {
    date: "28 januari 2026",
    title: "Del 6/7 — 7 vingslag med Claude, så LLMnar du boet.",
    href: "/blog/claude-code-sex",
  },
  {
    date: "20 januari 2026",
    title: "Preem vinner Web Service Award 2026.",
    href: "/blog/preem-web-service-awards-2026",
  },
];

/* ─── Page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="scanlines relative min-h-screen flex flex-col justify-end px-6 pb-24 pt-32 overflow-hidden">

          {/* Retrowave perspective grid floor */}
          <div className="retro-grid-floor" />

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <h1
              className="font-[family-name:var(--font-orbitron)] font-black uppercase leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.8rem, 5.5vw, 5rem)", color: "#ff2d78" }}
            >
              Agentic first. Mänsklig strategi.<br />
              Omänsklig hastighet<span className="cursor" />
            </h1>
            <p className="text-white/60 text-lg">
              Vi är Rebel and Bird
            </p>
          </div>
        </section>

        {/* ── FEATURED PROJECT — Filmstaden ────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2a0a14 0%, #1a0a1a 50%, #0a0a1e 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              <div>
                <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.3em] text-[#ff2d78] mb-4 uppercase">
                  Utvalt uppdrag
                </p>
                <p className="text-white/50 text-sm mb-2">Antal käkade popcorn</p>
                <p
                  className="font-[family-name:var(--font-orbitron)] font-black text-white mb-8"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                >
                  12 426
                </p>
                <Link
                  href="/vara-uppdrag/filmstaden-foretagsportal"
                  className="btn-arcade btn-arcade-pink text-xs"
                >
                  <span>▶</span> Filmstaden — Digital Plattform
                </Link>
              </div>

              {/* Placeholder for project image — swap in real image later */}
              <div
                className="aspect-video border border-[#ffffff10] flex items-center justify-center relative overflow-hidden"
                style={{ background: "#1a0a0a" }}
              >
                <div className="grid-bg absolute inset-0 opacity-40" />
                <p className="font-[family-name:var(--font-orbitron)] text-[0.65rem] tracking-[0.2em] text-white/20 relative uppercase">
                  [ Filmstaden — projekt bild ]
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── VIDEO SHOWCASE — Kolmården ───────────────── */}
        <section className="relative bg-[#0d0d20] border-t border-b border-[#1e1e4a]">

          {/* Video placeholder — swap src for real video */}
          <div className="relative aspect-video max-h-[70vh] overflow-hidden bg-[#050510]">
            <div className="grid-bg absolute inset-0 opacity-30" />

            {/* Pause button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-14 h-14 border border-white/40 flex items-center justify-center text-white/60 hover:border-[#ff2d78] hover:text-[#ff2d78] transition-colors"
                aria-label="Pausa video"
              >
                <span className="text-sm font-bold">II</span>
              </button>
            </div>

            {/* Project label */}
            <div className="absolute bottom-6 left-6">
              <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.2em] text-white/40 uppercase mb-1">
                Utvalt uppdrag
              </p>
              <p className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-[0.1em] uppercase text-white">
                Kolmården — Digital Plattform
              </p>
            </div>

            {/* TODO: Replace div with actual video:
            <video
              src="/videos/kolmarden.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            */}
          </div>
        </section>

        {/* ── UTVALDA UPPDRAG ──────────────────────────── */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">

            <p className="text-white/60 mb-10 text-lg">Utvalda uppdrag</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/vara-uppdrag/${project.slug}`}
                  className="group block"
                >
                  {/* Project thumbnail */}
                  <div
                    className="aspect-[4/3] relative overflow-hidden border border-[#1e1e4a] group-hover:border-[#ff2d78] transition-colors mb-3"
                    style={{ background: project.bg }}
                  >
                    <div className="grid-bg absolute inset-0 opacity-30" />

                    {/* Arrow indicator */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-[#ff2d78] group-hover:text-[#ff2d78] text-white/40 transition-colors">
                      <span className="text-xs">→</span>
                    </div>

                    {/* TODO: Replace with actual <Image> when you have assets:
                    <Image
                      src={`/images/projects/${project.slug}.jpg`}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>

                  {/* Title */}
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    {project.title} — {project.subtitle}
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── AKTUELLT ─────────────────────────────────── */}
        <section className="px-6 py-20 border-t border-[#1e1e4a]">
          <div className="max-w-7xl mx-auto">

            <p className="text-white/60 mb-10 text-lg">Aktuellt</p>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
              {blogPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block flex-shrink-0 w-72 md:w-auto card-arcade p-0 relative overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div
                    className="aspect-[4/3] bg-[#0d0d20] border-b border-[#1e1e4a] relative overflow-hidden"
                  >
                    <div className="grid-bg absolute inset-0 opacity-20" />
                    <div className="absolute inset-0 flex items-end justify-end p-3">
                      <div className="w-7 h-7 border border-white/20 flex items-center justify-center group-hover:border-[#ff2d78] group-hover:text-[#ff2d78] text-white/40 transition-colors">
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-[family-name:var(--font-orbitron)] text-[0.6rem] tracking-[0.15em] text-[#4a4a7a] mb-3 uppercase">
                      {post.date}
                    </p>
                    <p className="text-white/70 group-hover:text-white transition-colors leading-snug text-sm">
                      {post.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── KONTAKT ──────────────────────────────────── */}
        <section className="px-6 py-20 border-t border-[#1e1e4a]">
          <div className="max-w-7xl mx-auto">
            <div className="neon-divider mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

              {/* Left: contact info */}
              <div>
                <h2 className="text-white/60 text-2xl mb-8">Kontakt</h2>
                <p className="font-semibold text-white text-lg mb-4">Andreas Eriksson</p>
                <a
                  href="tel:+46703118622"
                  className="block text-white/60 hover:text-white transition-colors mb-1"
                >
                  +46 703 118 622
                </a>
                <a
                  href="mailto:andreas.eriksson@rebelandbird.com"
                  className="block text-white/60 hover:text-[#ff2d78] transition-colors"
                >
                  andreas.eriksson@rebelandbird.com
                </a>
              </div>

              {/* Right: form */}
              <div>
                <h2 className="text-2xl mb-8" style={{ color: "#ff2d78" }}>
                  Bli kontaktad
                </h2>

                <form className="flex flex-col gap-4">

                  <div className="flex flex-col gap-1">
                    <label className="text-white/60 text-sm">Namn</label>
                    <input
                      type="text"
                      name="name"
                      className="bg-[#0d0d20] border border-[#1e1e4a] text-white px-4 py-3 focus:outline-none focus:border-[#ff2d78] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-white/60 text-sm">E-post</label>
                    <input
                      type="email"
                      name="email"
                      className="bg-[#0d0d20] border border-[#1e1e4a] text-white px-4 py-3 focus:outline-none focus:border-[#ff2d78] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-white/60 text-sm">Företag eller affärsområde</label>
                    <input
                      type="text"
                      name="company"
                      className="bg-[#0d0d20] border border-[#1e1e4a] text-white px-4 py-3 focus:outline-none focus:border-[#ff2d78] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-white/60 text-sm">Anledning</label>
                    <select
                      name="reason"
                      className="bg-[#0d0d20] border border-[#1e1e4a] text-white/60 px-4 py-3 focus:outline-none focus:border-[#ff2d78] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">—</option>
                      <option>Agentic services</option>
                      <option>AI</option>
                      <option>Digitalisering</option>
                      <option>UX-design</option>
                      <option>Tjänstedesign</option>
                      <option>Utveckling</option>
                      <option>E-handel</option>
                      <option>CMS</option>
                      <option>Övrigt</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      className="mt-1 accent-[#ff2d78] cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-white/50 text-sm cursor-pointer">
                      Jag har tagit del av och godkänner{" "}
                      <a href="/integritetspolicy" className="underline hover:text-white transition-colors">
                        integritetspolicyn
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-arcade btn-arcade-pink mt-2 self-start"
                  >
                    Skicka
                  </button>

                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
