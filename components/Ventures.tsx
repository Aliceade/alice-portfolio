export default function Ventures() {
  return (
    <section id="ventures" style={{ padding: "96px 0", background: "#fff" }}>
      <div className="wrap">
        <p className="label">Currently Building</p>
        <div className="accent-line" />
        <h2 className="f-serif" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.15, marginBottom: 56, fontWeight: 500 }}>
          Two bets. Both in progress.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

          {/* Jobapay */}
          <div style={{ background: "var(--forest)", borderRadius: 16, padding: "40px", color: "var(--bg)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "var(--coral-vivid)", opacity: 0.08 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                <div>
                  <span className="chip" style={{ background: "rgba(200,240,208,0.15)", color: "var(--mint)", marginBottom: 12, display: "inline-flex" }}>Co-Founder · COO</span>
                  <h3 className="f-serif" style={{ fontSize: 38, fontWeight: 500 }}>Jobapay</h3>
                </div>
                <span style={{ padding: "4px 12px", border: "1px solid rgba(255,187,166,0.4)", color: "var(--coral)", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 100 }}>
                  Lab Phase
                </span>
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,247,232,0.72)", marginBottom: 24 }}>
                B2B tech-enabled cleaning management platform for facility managers. We vet and train professional cleaners, deploy them to business clients, and handle the entire operational stack — scheduling, quality assurance, and billing.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
                {["Not a gig app. Not a staffing agency.", "Solves trust and payments for B2B clients.", "Full-stack platform built from the ground up."].map(p => (
                  <p key={p} style={{ fontSize: 13, color: "rgba(255,247,232,0.6)" }}>✦ {p}</p>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,247,232,0.08)", paddingTop: 24 }}>
                <a href="https://jobapay.ai" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: "var(--coral)", textDecoration: "none", fontWeight: 500 }}>
                  jobapay.ai →
                </a>
              </div>
            </div>
          </div>

          {/* Inkio */}
          <div className="card" style={{ borderRadius: 16, padding: "40px", background: "var(--bg)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
              <div>
                <span className="chip chip-coral" style={{ marginBottom: 12, display: "inline-flex" }}>Founder · Director</span>
                <h3 className="f-serif" style={{ fontSize: 38, fontWeight: 500, color: "var(--forest)" }}>Inkio</h3>
              </div>
              <span className="chip chip-mint" style={{ padding: "4px 12px" }}>Active</span>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 24 }}>
              A creative consultancy for business owners who need their digital operations to actually work. Not just look good — work. CRM architecture, automation, e-commerce, and course platforms.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
              {["E-commerce architecture (Shopify · WooCommerce)", "Course & knowledge platforms (Thinkific · Kajabi)", "CRM & automation (Zapier · Make · Airtable)"].map(p => (
                <p key={p} style={{ fontSize: 13, color: "var(--forest-mid)" }}>✦ {p}</p>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(22,33,23,0.08)", paddingTop: 24 }}>
              <a href="https://inkioweb.com" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 13, color: "var(--forest)", textDecoration: "none", fontWeight: 600 }}>
                inkioweb.com →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
