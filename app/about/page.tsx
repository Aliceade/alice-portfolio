import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Alice Arimoro",
  description: "Alice Arimoro — Technical Product Manager, Full-Stack Developer, Co-Founder. Certifications, awards and recognitions.",
};

const certifications = [
  { name: "MSc Computer Science", org: "Woolf University", year: "2025–26", type: "Degree" },
  { name: "B.A. English Language & Literature", org: "University of Ibadan", year: "2019", type: "Degree" },
  { name: "Founder Institute Graduate", org: "Founder Institute Lagos", year: "2026", type: "Programme" },
  { name: "McKinsey Forward Programme", org: "McKinsey & Company", year: "2024", type: "Certificate" },
  { name: "AWS Generative AI", org: "Amazon Web Services", year: "2024", type: "Certificate" },
  { name: "Code in Place", org: "Stanford University", year: "2024", type: "Certificate" },
];

// Type icons for visual variety
const typeIcon: Record<string, string> = {
  Award: "🏆", Feature: "✦", Leadership: "◈", Recognition: "★",
};

const awards = [
  {
    date: "Jun 2025",
    name: "Crest Africa: Leaders Shaping Africa",
    type: "Leadership",
    note: "Featured as one of Africa's emerging leaders shaping the continent's future.",
  },
  {
    date: "Jun 2025",
    name: "Africa's Under 40 CEOs Awards",
    type: "Award",
    note: "Nominated among Africa's most impactful CEOs under 40.",
  },
  {
    date: "Jun 2025",
    name: "Crest Africa Feature",
    type: "Feature",
    note: "Featured on Crest Africa for contributions to technology and entrepreneurship.",
  },
  {
    date: "Apr 2025",
    name: "Global Excellence Summit and Awards",
    type: "Award",
    note: "Recognised at the Global Excellence Summit for entrepreneurial impact.",
  },
  {
    date: "Jun 2024",
    name: "Talented Women Impacting Africa",
    type: "Recognition",
    note: "Named among talented women making a measurable impact across Africa.",
  },
  {
    date: "Nov 2024",
    name: "SME100 25 Under 25 Awards",
    type: "Award",
    note: "Recognised as one of the top 25 entrepreneurs under 25 in Africa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ background: "var(--forest)", paddingTop: 120, paddingBottom: 72 }}>
          <div className="wrap">
            <p className="label" style={{ color: "var(--coral)" }}>About Me</p>
            <div style={{ width: 36, height: 3, background: "var(--cv)", borderRadius: 2, margin: "12px 0 24px" }} />
            <h1 className="f-serif" style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)", color: "var(--bg)", lineHeight: 1.05, fontWeight: 500, marginBottom: 20 }}>
              Alice Arimoro
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,247,232,0.65)", maxWidth: 560, lineHeight: 1.75 }}>
              Technical Product Manager. Full-Stack Developer. Co-Founder. Builder of systems that work.
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="wrap">
            <div className="bio-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
              <div>
                <p className="label" style={{ marginBottom: 12 }}>The story</p>
                <div className="accent-line" />
                {[
                  "I started with language. A B.A in English taught me that clarity is the highest form of intelligence — that every good idea needs to be communicable before it can be useful.",
                  "Then I went back for the other half. An MSc in Computer Science because I kept hitting the wall between what I could imagine and what I could build. I didn't want to be the person in the room who couldn't touch the code.",
                  "Now I sit at the intersection of both. I build systems for founders who need their ideas to actually work — not just look like they work. Products that convert, operations that scale, platforms that run without you babysitting them.",
                  "I co-founded Jobapay to fix the trust and payment layer in the commercial cleaning industry. I run Inkio, a consultancy that builds digital infrastructure for serious business owners. And I write about all of it in Untraditional.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: "var(--fm)", marginBottom: 18 }}>{p}</p>
                ))}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
                  <a href="https://www.linkedin.com/in/alice-arimoro/" target="_blank" rel="noopener noreferrer" className="btn-dark btn-sm">LinkedIn</a>
                  <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer" className="btn-coral btn-sm">Book a call</a>
                </div>
              </div>
              <div>
                <p className="label" style={{ marginBottom: 12 }}>Quick facts</p>
                <div className="accent-line" />
                {[
                  { k: "Location",  v: "Lagos, Nigeria" },
                  { k: "Education", v: "MSc Computer Science · B.A English" },
                  { k: "Currently", v: "Co-Founder @ Jobapay · Founder @ Inkio" },
                  { k: "Community", v: "HERdacity Member" },
                  { k: "Focus",     v: "Product · Engineering · Operations" },
                  { k: "Available", v: "Open to roles & consulting" },
                ].map(({ k, v }) => (
                  <div key={k} style={{ display: "flex", padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cd)", width: 120, flexShrink: 0, paddingTop: 2 }}>{k}</span>
                    <span style={{ fontSize: 15, color: "var(--fm)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section" style={{ background: "var(--white)" }}>
          <div className="wrap">
            <p className="label" style={{ marginBottom: 12 }}>Education & Certifications</p>
            <div className="accent-line" />
            <h2 className="f-serif" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 500, marginBottom: 48 }}>
              Credentials
            </h2>
            <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {certifications.map(c => (
                <div key={c.name} className="card" style={{ padding: 28 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cd)", display: "block", marginBottom: 12 }}>
                    {c.type} · {c.year}
                  </span>
                  <p className="f-serif" style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3, marginBottom: 8, color: "var(--forest)" }}>{c.name}</p>
                  <p style={{ fontSize: 13, color: "var(--tm)" }}>{c.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards — creative card layout */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="wrap">
            <p className="label" style={{ marginBottom: 12 }}>Recognition</p>
            <div className="accent-line" />
            <h2 className="f-serif" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 500, marginBottom: 56 }}>
              Awards & Features
            </h2>

            <div className="awards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {awards.map((a) => (
                <div key={a.name} className="award-card">
                  {/* Icon + type */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 28 }}>{typeIcon[a.type] ?? "✦"}</span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      background: "rgba(22,33,23,0.06)", color: "var(--forest)",
                      padding: "3px 10px", borderRadius: 100,
                    }}>{a.type}</span>
                  </div>

                  {/* Name */}
                  <p className="f-serif" style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.35, color: "var(--forest)" }}>
                    {a.name}
                  </p>

                  {/* Note */}
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--tm)", flex: 1 }}>{a.note}</p>

                  {/* Date pill */}
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                    color: "var(--cd)", letterSpacing: "0.08em",
                    alignSelf: "flex-start",
                  }}>{a.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm" style={{ background: "var(--forest)", textAlign: "center" }}>
          <div className="wrap" style={{ maxWidth: 520 }}>
            <h2 className="f-serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--bg)", marginBottom: 20, fontWeight: 500 }}>
              Let&apos;s work together
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,247,232,0.62)", marginBottom: 36, lineHeight: 1.75 }}>
              Whether you&apos;re building a product, scaling a system, or just need someone who can think across code and commercial reality.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }}>
              <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer" className="btn-coral">
                Book a call →
              </a>
              <a href="mailto:alicearimoro@gmail.com" className="btn-ghost" style={{ color: "var(--bg)", borderColor: "rgba(255,247,232,0.35)" }}>
                Send an email
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        .award-card {
          background: var(--white); border-radius: 16px;
          padding: 28px; border: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .award-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(22,33,23,0.1);
        }
        @media (max-width: 900px) {
          .bio-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .cert-grid { grid-template-columns: 1fr 1fr !important; }
          .awards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .cert-grid { grid-template-columns: 1fr !important; }
          .awards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
