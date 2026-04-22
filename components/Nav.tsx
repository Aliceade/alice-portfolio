"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SubscribeModal from "./SubscribeModal";

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, modalOpen]);

  const links = [
    { label: "About",         href: "/about" },
    { label: "Portfolio",     href: "/portfolio" },
    { label: "Untraditional", href: "#writing", external: false },
    
  ];

  return (
    <>
      <nav aria-label="Main navigation" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "10px 0" : "22px 0",
        background: scrolled ? "rgba(255,247,232,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(22,33,23,0.07)" : "none",
        transition: "padding 0.3s ease, background 0.3s ease, border 0.3s ease",
      }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{
            fontFamily: "'Playfair Display', serif", fontSize: 21,
            color: "var(--forest)", textDecoration: "none", fontWeight: 700,
            letterSpacing: "-0.01em",
          }}>
            Alice Arimoro
          </Link>

          {/* Desktop */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {links.map(l => l.external
              ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="nav-link">{l.label}</a>
              : <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>
            )}
            <button onClick={() => setModalOpen(true)} className="btn-dark btn-sm" aria-label="Subscribe to newsletter">
              Subscribe
            </button>
            <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer" className="btn-coral btn-sm">
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}
            style={{ display: "none", flexDirection: "column", gap: 5, padding: 6, background: "none", border: "none", cursor: "pointer" }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 24, height: 2,
                background: menuOpen ? "var(--bg)" : "var(--forest)",
                borderRadius: 1, transition: "all 0.25s",
                transform: menuOpen
                  ? (i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none")
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 90, background: "var(--forest)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 32, opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}>
        {links.map(l =>
          l.external
            ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "var(--bg)", textDecoration: "none", fontStyle: "italic" }}>{l.label}</a>
            : <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "var(--bg)", textDecoration: "none", fontStyle: "italic" }}>{l.label}</Link>
        )}
        <button onClick={() => { setMenuOpen(false); setModalOpen(true); }} className="btn-coral" style={{ marginTop: 8 }}>
          Subscribe
        </button>
        <a href="https://calendar.app.google/gfnjoVQnD3wYwxdE7" target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)} className="btn-ghost" style={{ color: "var(--bg)", borderColor: "rgba(255,247,232,0.4)" }}>
          Book a Call
        </a>
      </div>

      <SubscribeModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
