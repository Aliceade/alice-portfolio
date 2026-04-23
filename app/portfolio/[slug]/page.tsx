import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.name} — Alice Arimoro`, description: p.tagline };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const prev = projects[projects.findIndex(x => x.slug === slug) - 1];
  const next = projects[projects.findIndex(x => x.slug === slug) + 1];

  return (
    <>
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Hero header */}
        <section style={{ background: "var(--forest)", paddingTop: 110, paddingBottom: 64, paddingLeft: 0, paddingRight: 0 }}>
          <div className="wrap">
            <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,247,232,0.55)", textDecoration: "none", marginBottom: 32, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>
              ← All projects
            </Link>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--coral)" }}>{p.index}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,247,232,0.4)" }}>·</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,247,232,0.55)" }}>{p.category}</span>
            </div>
            <h1 className="f-serif" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "var(--bg)", fontWeight: 500, lineHeight: 1.1, marginBottom: 20 }}>
              {p.name}
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,247,232,0.65)", maxWidth: 560, lineHeight: 1.75 }}>{p.tagline}</p>

            {/* Meta row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(255,247,232,0.1)" }}>
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,247,232,0.35)", marginBottom: 6 }}>Client</p>
                <p style={{ fontSize: 14, color: "var(--bg)" }}>{p.client}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,247,232,0.35)", marginBottom: 6 }}>Category</p>
                <p style={{ fontSize: 14, color: "var(--bg)" }}>{p.category}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,247,232,0.35)", marginBottom: 6 }}>Stack</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ padding: "3px 10px", borderRadius: 100, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, border: "1px solid rgba(255,187,166,0.3)", color: "var(--coral)" }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-coral btn-sm">
                  View live site ↗&#xFE0E;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot gallery — 3 images */}
        <section style={{ background: "var(--white)", padding: "64px 0" }}>
          <div className="wrap">
            <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* Image 1 — full width */}
              <div style={{ gridColumn: "1 / -1", borderRadius: 14, overflow: "hidden", aspectRatio: "16/8",
                background: `linear-gradient(135deg, ${p.accentColor}35, ${p.accentColor}15)`,
                position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={`/portfolio/${p.slug}/1.jpg`} alt={`${p.name} screenshot 1`}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, opacity: 0.3, letterSpacing: "0.1em", position: "relative", zIndex: 1 }}>
                  {/*/portfolio/{p.slug}/1.jpg */}
                </span>
              </div>
              {/* Images 2 & 3 — side by side */}
              {["2","3"].map((n) => (
                <div key={n} style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4/3",
                  background: `linear-gradient(135deg, ${p.accentColor}25, ${p.accentColor}10)`,
                  position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={`/portfolio/${p.slug}/${n}.jpg`} alt={`${p.name} screenshot ${n}`}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, opacity: 0.3, letterSpacing: "0.1em", position: "relative", zIndex: 1 }}>
                    {/*/portfolio/{p.slug}/{n}.jpg */}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study content */}
        <section className="section">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 80, alignItems: "start" }} className="case-grid">

              {/* Main content */}
              <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>

                {/* Overview */}
                <div>
                  <p className="label" style={{ marginBottom: 16 }}>Overview</p>
                  <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--fm)" }}>{p.description}</p>
                </div>

                {/* Client Background */}
                <div>
                  <p className="label" style={{ marginBottom: 16 }}>Client Background</p>
                  <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fm)" }}>{p.clientBackground}</p>
                </div>

                {/* Challenge */}
                <div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,140,107,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontSize: 16 }}>⚡</span>
                    </div>
                    <div>
                      <p className="label" style={{ marginBottom: 12 }}>The Challenge</p>
                      <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fm)" }}>{p.challenge}</p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(22,33,23,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontSize: 16 }}>🔧</span>
                    </div>
                    <div>
                      <p className="label" style={{ marginBottom: 12 }}>The Solution</p>
                      <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fm)" }}>{p.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <p className="label" style={{ marginBottom: 20 }}>Results</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {p.results.map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 20px", background: "var(--white)", borderRadius: 10, border: "1px solid var(--border)" }}>
                        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--cv)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
                          {i + 1}
                        </span>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--fm)" }}>{r}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28, position: "sticky", top: 100 }}>

                {/* Skills */}
                <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 14, padding: 28 }}>
                  <p className="label" style={{ marginBottom: 20 }}>Skills applied</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.skills.map(s => (
                      <div key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cv)", flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "var(--fm)" }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div style={{ background: "var(--forest)", borderRadius: 14, padding: 28 }}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--coral)", marginBottom: 16 }}>Tech Stack</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.stack.map(s => (
                      <span key={s} style={{ padding: "5px 12px", borderRadius: 100, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, border: "1px solid rgba(255,187,166,0.25)", color: "var(--coral)" }}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-coral" style={{ textAlign: "center", justifyContent: "center" }}>
                  Visit live site ↗&#xFE0E;
                </a>
                <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ textAlign: "center", justifyContent: "center" }}>
                  Work with me
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="section-sm" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
          <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            {prev
              ? <Link href={`/portfolio/${prev.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tm)" }}>← Previous</span>
                  <span className="f-serif" style={{ fontSize: 18, color: "var(--forest)" }}>{prev.name}</span>
                </Link>
              : <div />
            }
            {next
              ? <Link href={`/portfolio/${next.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 4, textAlign: "right" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tm)" }}>Next →</span>
                  <span className="f-serif" style={{ fontSize: 18, color: "var(--forest)" }}>{next.name}</span>
                </Link>
              : <div />
            }
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .case-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .case-grid > div:last-child { position: static !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > div:first-child { grid-column: 1 !important; }
        }
      `}</style>
    </>
  );
}
