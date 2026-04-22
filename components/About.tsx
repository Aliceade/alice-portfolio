"use client";
import { useEffect, useRef } from "react";

const skills = [
  { label: "Engineering", items: ["Full-Stack (MERN)", "Next.js / React", "REST APIs", "AWS · Firebase"], pct: 88 },
  { label: "Product",     items: ["Roadmapping", "Sprint Management", "User Stories", "Product Analytics"], pct: 90 },
  { label: "Operations",  items: ["CRM Architecture", "SOP Design", "Zapier · Make · Airtable", "Process Optimisation"], pct: 92 },
  { label: "Revenue",     items: ["Funnel Design", "Conversion Optimisation", "Stripe · Paystack", "A/B Testing"], pct: 85 },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right") ?? [];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));

    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>(".skill-fill").forEach(bar => {
            bar.style.width = (bar.getAttribute("data-width") || "0") + "%";
          });
          barObs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const skillBox = ref.current?.querySelector(".skills-forest-box");
    if (skillBox) barObs.observe(skillBox);

    return () => { obs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <section ref={ref} id="about" className="section" style={{ background: "var(--bg)" }}>
      <div className="wrap">
        <div className="about-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>

          {/* Left */}
          <div>
            <p className="label reveal reveal-d1">About</p>
            <div className="accent-line reveal reveal-d2" />
            <h2 className="f-serif reveal reveal-d2" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2, fontWeight: 500, marginBottom: 32 }}>
              A B.A in English.<br />
              An MSc in Computer Science.<br />
              <em style={{ color: "var(--cd)" }}>Make that make sense.</em>
            </h2>

            {[
              "I've always been drawn to the space where language and logic intersect. A business model is really just a story with a revenue line — and good operations read like good prose: clean, no filler, nothing wasted.",
              <>I run <a href="https://inkioweb.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--forest)", textDecorationColor: "var(--cv)" }}>Inkio</a> — a creative consultancy building digital systems for founders and brands. I&apos;m also co-founding <a href="https://jobapay.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--forest)", textDecorationColor: "var(--cv)" }}>Jobapay</a>, a B2B tech platform for the commercial cleaning industry.</>,
              <>I&apos;m a member of <a href="https://www.herdacity.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--forest)", textDecorationColor: "var(--cv)" }}>HERdacity</a> — a community for ambitious women building on their own terms.</>,
            ].map((p, i) => (
              <p key={i} className={`reveal reveal-d${i + 3}`} style={{ fontSize: 16, lineHeight: 1.85, color: "var(--fm)", marginBottom: 18 }}>{p}</p>
            ))}

            {/* Only LinkedIn — no "Get in touch" */}
            <div className="reveal reveal-d5" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <a href="https://www.linkedin.com/in/alice-arimoro/" target="_blank" rel="noopener noreferrer" className="btn-dark btn-sm">LinkedIn Profile</a>
              <a href="/about" className="btn-ghost btn-sm">Full profile →</a>
            </div>

            <div className="reveal" style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Founder Institute '26", "McKinsey Forward", "AWS GenAI Cert", "Stanford — Code in Place"].map(c => (
                <span key={c} className="chip chip-forest" style={{ fontSize: 11 }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Right — forest skills box */}
          <div className="reveal reveal-right" style={{ position: "sticky", top: 100 }}>
            <div className="skills-forest-box">
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--coral)", marginBottom: 28 }}>
                What I bring
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {skills.map(({ label, items, pct }) => (
                  <div key={label}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--bg)", whiteSpace: "nowrap" }}>{label}</p>
                      <div style={{ flex: 1, height: 2, background: "rgba(255,247,232,0.12)", borderRadius: 2 }}>
                        <div className="skill-fill" data-width={pct} style={{ height: "100%", background: "var(--cv)", borderRadius: 2, width: 0, transition: "width 1.4s ease" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {items.map(s => (
                        <span key={s} style={{
                          padding: "4px 10px", borderRadius: 4,
                          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                          background: "rgba(255,247,232,0.08)", color: "rgba(255,247,232,0.72)",
                          border: "1px solid rgba(255,247,232,0.12)",
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-inner > div:last-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
