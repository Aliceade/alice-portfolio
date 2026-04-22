export default function Newsletter() {
  return (
    <section id="newsletter" className="section reveal" style={{ background: "var(--forest)", position: "relative", overflow: "hidden" }}>
      {/* Subtle coral glow */}
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, var(--coral) 0%, transparent 65%)", opacity: 0.1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -60, left: -60, width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, var(--cv) 0%, transparent 65%)", opacity: 0.06, pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="nl-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          {/* Left — copy */}
          <div>
            <p className="label" style={{ color: "var(--coral)" }}>The Newsletter</p>
            <div style={{ width: 36, height: 3, background: "var(--cv)", borderRadius: 2, margin: "12px 0 28px" }} />
            <h2 className="f-serif" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.15, fontWeight: 500, marginBottom: 24, color: "var(--bg)" }}>
              <em>Untraditional</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,247,232,0.72)", marginBottom: 16 }}>
              Essays from the building process — the decisions, the failures, the things that actually worked. Written for founders, operators, and builders who want the real version.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,247,232,0.5)", marginBottom: 28 }}>
              No trends. No hustle porn. Just honest writing about what it takes to build a company from the ground up.
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontStyle: "italic", color: "var(--coral)" }}>
              &ldquo;Stay Untraditional, Alice.&rdquo;
            </p>
          </div>

          {/* Right — forest embed box (no white box) */}
          <div style={{
            background: "rgba(255,247,232,0.06)",
            border: "1px solid rgba(255,247,232,0.12)",
            borderRadius: 16, padding: 40,
          }}>
            <p className="f-serif" style={{ fontSize: 22, fontStyle: "italic", marginBottom: 8, color: "var(--bg)" }}>
              Subscribe to Untraditional
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,247,232,0.55)", marginBottom: 28, lineHeight: 1.65 }}>
              Documenting the messy middle of building a company.
            </p>

            {/* Substack embed — styled to match forest bg */}
            <div style={{ borderRadius: 8, overflow: "hidden", background: "rgba(255,247,232,0.08)", padding: "4px" }}>
              <iframe
                src="https://untraditionalbos.substack.com/embed"
                width="480"
                height="150"
                style={{ border: "none", background: "transparent", display: "block", maxWidth: "100%", width: "100%" }}
                frameBorder={0}
                scrolling="no"
                title="Subscribe to Untraditional newsletter"
              />
            </div>

            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,247,232,0.3)", marginTop: 16, letterSpacing: "0.06em" }}>
              No spam. Hosted on Substack. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nl-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
