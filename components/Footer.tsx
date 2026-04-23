"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // <-- Added Import

// Official SVG icons
const icons = {
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
  substack: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
    </svg>
  ),
};

const socials = [
  { label: "Email",    href: "mailto:alicearimoro@gmail.com",                     icon: icons.email,    external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alice-arimoro/",         icon: icons.linkedin, external: true  },
  { label: "GitHub",   href: "https://github.com/Aliceade/",                       icon: icons.github,   external: true  },
  { label: "Substack", href: "https://untraditionalbos.substack.com/",             icon: icons.substack, external: true  },
  
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--forest)", color: "var(--bg)", padding: "64px 0 32px" }}>
      <div className="wrap">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <p className="f-serif" style={{ fontSize: 24, marginBottom: 12, fontWeight: 700 }}>Alice Arimoro</p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,247,232,0.6)", maxWidth: 280, marginBottom: 28 }}>
              Technical Product Manager & Full-Stack Developer. Building products that bridge code and commercial reality.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {socials.map(({ label, href, icon, external }) => (
                <a key={label} href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  className="footer-social-btn"
                  style={{
                    width: 40, height: 40, borderRadius: 8, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,247,232,0.15)",
                    color: "rgba(255,247,232,0.65)",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const t = e.currentTarget as HTMLAnchorElement;
                    t.style.background = "var(--cv)";
                    t.style.borderColor = "var(--cv)";
                    t.style.color = "#fff";
                    t.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const t = e.currentTarget as HTMLAnchorElement;
                    t.style.background = "";
                    t.style.borderColor = "rgba(255,247,232,0.15)";
                    t.style.color = "rgba(255,247,232,0.65)";
                    t.style.transform = "";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--coral)", marginBottom: 20 }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["/","Home"],["/#writing","Untraditional"],["/portfolio","Portfolio"],["/about","About Me"]].map(([href, label]) => (
                <Link key={href} href={href}
                  style={{ fontSize: 14, color: "rgba(255,247,232,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--bg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,247,232,0.6)")}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--coral)", marginBottom: 20 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                
                { label: "Book a call",          href: "https://calendar.app.google/gfnjoVQnD3wYwxdE7", ext: true },
                { label: "inkioweb.com",         href: "https://inkioweb.com/", ext: true },
                { label: "jobapay.ai",           href: "https://jobapay.ai/", ext: true },
                { label: "alicearimoro@gmail.com", href: "mailto:alicearimoro@gmail.com", ext: false },
              ].map(({ label, href, ext }) => (
                <a key={href} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{ fontSize: 14, color: "rgba(255,247,232,0.6)", textDecoration: "none", transition: "color 0.2s", display: "inline-flex"   /* <-- Added layout rules */ }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--bg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,247,232,0.6)")}>
                  {label}
                  {ext && <ArrowUpRight size={14} strokeWidth={2} />}  {/* <-- Conditional arrow rendering */}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,247,232,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,247,232,0.3)" }}>
            © 2026 Alice Arimoro. All rights reserved.
          </p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,247,232,0.3)" }}>
            Stay Untraditional.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
