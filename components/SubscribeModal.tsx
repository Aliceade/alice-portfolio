"use client";
import { useEffect } from "react";

interface Props { open: boolean; onClose: () => void; }

export default function SubscribeModal({ open, onClose }: Props) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div
      className={`modal-overlay${open ? " open" : ""}`}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog" aria-modal="true" aria-label="Subscribe to Untraditional newsletter"
    >
      {/* Forest-bg modal box */}
      <div className="modal-box" style={{ background: "var(--forest)", border: "1px solid rgba(255,247,232,0.12)" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close"
          style={{ color: "rgba(255,247,232,0.5)" }}>✕</button>

        <p className="label" style={{ color: "var(--coral)", marginBottom: 8 }}>The Newsletter</p>
        <h2 className="f-serif" style={{ fontSize: 26, lineHeight: 1.2, marginBottom: 12, fontStyle: "italic", color: "var(--bg)" }}>
          Untraditional: Building Off Script
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,247,232,0.65)", marginBottom: 28 }}>
          Raw dispatches from the building process. Essays on systems, operations, and the logic behind the chaos. No hustle porn — just what actually happened.
        </p>

        {/* Substack embed, transparent to match forest */}
        <div style={{ borderRadius: 8, overflow: "hidden", background: "rgba(255,247,232,0.08)", padding: "4px" }}>
          <iframe
            src="https://untraditionalbos.substack.com/embed"
            width="100%"
            height="150"
            style={{ border: "none", background: "transparent", display: "block" }}
            frameBorder={0}
            scrolling="no"
            title="Subscribe to Untraditional newsletter"
          />
        </div>

        <p style={{ fontSize: 11, marginTop: 14, color: "rgba(255,247,232,0.3)", fontFamily: "'JetBrains Mono', monospace" }}>
          Hosted on Substack. No spam. Unsubscribe any time.
        </p>
      </div>
    </div>
  );
}
