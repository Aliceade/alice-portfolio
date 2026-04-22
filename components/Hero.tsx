"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: 100, position: "relative", overflow: "hidden" }}>
      {/* Coral blob */}
      <div style={{ position: "absolute", top: -80, right: -120, width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, var(--coral) 0%, transparent 65%)", opacity: 0.22, pointerEvents: "none" }} />

      <div className="wrap hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", minHeight: "calc(100vh - 100px)", paddingTop: 32, paddingBottom: 64 }}>

        {/* Left */}
        <div>
          <div className="reveal reveal-d1" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(22,33,23,0.06)", borderRadius: 100, marginBottom: 28 }}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--forest)", boxShadow: "0 0 0 3px rgba(22,33,23,0.15)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--forest)" }}>Available for new projects</span>
          </div>

          <h1 className="f-serif reveal reveal-d2" style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)", lineHeight: 1.05, fontWeight: 500, marginBottom: 24 }}>
            I build the{" "}<em style={{ color: "var(--cv)" }}>infrastructure</em>{" "}behind the idea.
          </h1>

          <p className="reveal reveal-d3" style={{ fontSize: 17, lineHeight: 1.8, color: "var(--fm)", marginBottom: 36, maxWidth: 480 }}>
            Most founders know what they want to build. Few know how to make the business actually work. I bridge the gap between code and commercial reality — from first invoice to scalable system.
          </p>

          <div className="reveal reveal-d4" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48 }}>
            <Link href="/portfolio" className="btn-coral">View my work →</Link>
            <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer" className="btn-dark">Book a call</a>
          </div>

          <div className="reveal reveal-d5" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, paddingTop: 32, borderTop: "1px solid rgba(22,33,23,0.1)" }}>
            {[
              { n: "5+",   l: "Years building" },
              { n: "200+", l: "Product launches" },
              { n: "MSc",  l: "Computer Science" },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="f-serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 13, color: "var(--tm)", marginTop: 6 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="reveal reveal-right hero-photo-col" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 20, right: -20, bottom: -20, left: 20, border: "2px solid var(--coral)", borderRadius: 20, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", background: "var(--forest)", aspectRatio: "3/4" }}>
            {/* Fallback bg (shows when no photo) */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--forest) 0%, #2a4a2c 100%)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span style={{ fontSize: 56, opacity: 0.3 }}>📸</span>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, opacity: 0.4, letterSpacing: "0.1em", textAlign: "center", color: "var(--bg)", padding: "0 24px" }}>
                Add /public/alice.jpg
              </p>
            </div>
            <Image src="/alice.jpg" alt="Alice Arimoro" fill priority
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 100vw, 50vw" />
          </div>

          {/* Floating pill */}
          <div className="animate-float" style={{
            position: "absolute", bottom: 40, left: -24, zIndex: 2,
            background: "var(--white)", borderRadius: 12, padding: "12px 18px",
            boxShadow: "0 12px 32px rgba(22,33,23,0.14)", border: "1px solid var(--border)",
          }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd)", marginBottom: 4 }}>Founder Institute</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--forest)" }}>Lagos &apos;26 Graduate</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-col { display: none !important; }
        }
        @media (max-width: 560px) {
          .hero-grid { padding-top: 16px !important; padding-bottom: 48px !important; }
        }
      `}</style>
    </section>
  );
}
