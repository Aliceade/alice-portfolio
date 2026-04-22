const projects = [
  {
    name: "Get Retirement Ready",
    category: "Revenue Infrastructure",
    outcome: "Automated lead scoring & revenue funnel from content to conversion.",
    detail:
      "Built an end-to-end system that qualifies leads automatically, scores intent, and routes them to the right offer — without a single manual follow-up step.",
    stack: ["Thinkific", "Zapier", "ScoreApp"],
    number: "01",
  },
  {
    name: "Trusted Advisor OS",
    category: "Digital Sales Infrastructure",
    outcome: "Scalable backend for a knowledge business — from course delivery to client retention.",
    detail:
      "Designed the entire operational layer: course architecture, payment logic, community structure, and the automation that keeps it running at scale.",
    stack: ["Thinkific"],
    number: "02",
  },
  {
    name: "Lobster Beach Club",
    category: "Brand-First Web Presence",
    outcome: "A digital presence that matched the luxury of the physical experience.",
    detail:
      "Luxury hospitality brands live and die by first impressions. We built a site that converted browsers into reservations — every pixel earned its place.",
    stack: ["WordPress", "Custom CSS"],
    number: "03",
  },
  {
    name: "Shinar Wellness",
    category: "E-Commerce Architecture",
    outcome: "A high-end retail experience with the backend to support it.",
    detail:
      "Beyond the storefront — we structured the product taxonomy, checkout logic, and post-purchase flow to reduce friction and increase repeat purchase.",
    stack: ["Shopify"],
    number: "04",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6" style={{ backgroundColor: "var(--forest)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4" style={{ color: "var(--coral)" }}>Selected Work</p>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "var(--coral)" }} />
            <h2 className="font-display text-5xl md:text-6xl leading-tight" style={{ color: "var(--cream)" }}>
              The work is in<br />
              <em style={{ color: "var(--coral)" }}>the outcome,</em><br />
              not the tool.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,237,210,0.6)" }}>
            Every project here is a business system, not a website. The deliverable was always
            revenue, retention, or operational clarity.
          </p>
        </div>

        {/* Projects list */}
        <div className="divide-y" style={{ borderColor: "rgba(255,237,210,0.1)" }}>
          {projects.map((p) => (
            <div
              key={p.name}
              className="group py-8 grid md:grid-cols-12 gap-6 cursor-default"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono-dm text-xs opacity-40" style={{ color: "var(--cream)" }}>
                  {p.number}
                </span>
              </div>

              {/* Name + category */}
              <div className="md:col-span-3">
                <p className="font-display text-2xl md:text-3xl group-hover:text-coral transition-colors duration-300" style={{ color: "var(--cream)" }}>
                  {p.name}
                </p>
                <p className="font-mono-dm text-xs mt-2 opacity-50" style={{ color: "var(--cream)" }}>
                  {p.category}
                </p>
              </div>

              {/* Outcome */}
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,237,210,0.75)" }}>
                  {p.detail}
                </p>
              </div>

              {/* Stack */}
              <div className="md:col-span-4 flex flex-wrap gap-2 items-start content-start">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-mono-dm tracking-wider"
                    style={{
                      border: "1px solid rgba(255,187,166,0.3)",
                      color: "var(--coral)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(255,237,210,0.1)" }}>
          <p className="text-sm mb-4" style={{ color: "rgba(255,237,210,0.6)" }}>
            Want to work together? The process starts with a conversation.
          </p>
          <a
            href="mailto:alice@inkioweb.com"
            className="btn-primary"
            style={{ background: "var(--coral)", color: "var(--forest)" }}
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
