export default function Ticker() {
  const items = ["Full-Stack Developer","Product Manager","Revenue Operations","Next.js · React · Node","B2B SaaS","CRM Architecture","Workflow Automation","MSc Computer Science","Founder Institute '26","Open to Work"];
  const all = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track animate-marquee">
        {all.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 14, margin: "0 14px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--coral)" }}>{item}</span>
            <span style={{ color: "var(--cv)", opacity: 0.5, fontSize: 10 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
