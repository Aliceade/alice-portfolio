import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio — Alice Arimoro",
  description: "Selected work by Alice Arimoro — full-stack development, e-commerce, course platforms, and automation systems.",
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ background: "var(--forest)", paddingTop: 120, paddingBottom: 72, paddingLeft: 0, paddingRight: 0 }}>
          <div className="wrap">
            <p className="label" style={{ color: "var(--coral)" }}>Selected Work</p>
            <div style={{ width: 36, height: 3, background: "var(--cv)", borderRadius: 2, margin: "12px 0 24px" }} />
            <h1 className="f-serif" style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)", color: "var(--bg)", lineHeight: 1.05, fontWeight: 500, maxWidth: 640 }}>
              Systems built to perform,<br />
              <em style={{ color: "var(--coral)" }}>not just to look good.</em>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,247,232,0.6)", maxWidth: 500, lineHeight: 1.75, marginTop: 20 }}>
              From revenue funnels to e-commerce infrastructure — each project started with a problem and ended with a working system.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="section">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
              {projects.map(p => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="port-card" style={{ textDecoration: "none" }}>
                  {/* Image */}
                  <div className="port-img">
                    <div className="port-img-placeholder" style={{ background: `linear-gradient(135deg, ${p.accentColor}40, ${p.accentColor}18)` }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, opacity: 0.45, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.slug}/1.jpg</span>
                    </div>
                    {/* Actual image — will render if file exists */}
                    <img src={`/portfolio/${p.slug}/1.jpg`} alt={p.name}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />
                    {/* Index */}
                    <span style={{
                      position: "absolute", top: 14, left: 14, zIndex: 2,
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                      background: "rgba(255,247,232,0.92)", color: "var(--forest)",
                      padding: "3px 10px", borderRadius: 100,
                    }}>{p.index}</span>
                    {/* Category */}
                    <span style={{
                      position: "absolute", bottom: 14, left: 14, zIndex: 2,
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                      background: "var(--forest)", color: "var(--coral)",
                      padding: "4px 10px", borderRadius: 100,
                    }}>{p.category}</span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <h2 className="f-serif" style={{ fontSize: 22, fontWeight: 500, color: "var(--forest)", lineHeight: 1.25 }}>
                      {p.name}
                    </h2>
                    <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--tm)", flex: 1 }}>{p.tagline}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                      {p.stack.slice(0, 3).map(s => (
                        <span key={s} className="chip chip-forest" style={{ fontSize: 10 }}>{s}</span>
                      ))}
                      {p.stack.length > 3 && (
                        <span className="chip chip-coral" style={{ fontSize: 10 }}>+{p.stack.length - 3} more</span>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, color: "var(--cv)", fontWeight: 600, fontSize: 13 }}>
                      View case study <span style={{ transition: "transform 0.2s" }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm" style={{ background: "var(--forest)", textAlign: "center" }}>
          <div className="wrap" style={{ maxWidth: 560 }}>
            <h2 className="f-serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--bg)", marginBottom: 20, fontWeight: 500 }}>
              Want results like these?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,247,232,0.62)", marginBottom: 36, lineHeight: 1.75 }}>
              I take on a small number of client projects through Inkio. Every engagement starts with understanding the actual problem.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }}>
              <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer" className="btn-coral">
                Book a call →
              </a>
              <a href="https://inkioweb.com" target="_blank" rel="noopener noreferrer" className="btn-ghost"
                style={{ color: "var(--bg)", borderColor: "rgba(255,247,232,0.35)" }}>
                Visit Inkio
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
