import { fetchSubstackFeed, BlogPost } from "@/lib/rss";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export const metadata = {
  title: "Writing — Alice Arimoro",
  description: "Essays from Untraditional: Building Off Script — Alice Arimoro's newsletter on operations, systems, and the reality of building companies.",
};

function formatDate(d: string) {
  try { return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
  catch { return d; }
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  let error = false;
  try {
    posts = await fetchSubstackFeed(
      process.env.SUBSTACK_RSS_URL || "https://untraditionalbos.substack.com/feed",
      20
    );
  } catch { error = true; }

  return (
    <>
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ background: "var(--forest)", paddingTop: 120, paddingBottom: 72 }}>
          <div className="wrap">
            <p className="label" style={{ color: "var(--coral)" }}>The Newsletter</p>
            <div style={{ width: 36, height: 3, background: "var(--cv)", borderRadius: 2, margin: "12px 0 24px" }} />
            <h1 className="f-serif" style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)", color: "var(--bg)", lineHeight: 1.05, fontWeight: 500, marginBottom: 20 }}>
              <em>Untraditional</em>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,247,232,0.62)", maxWidth: 480, lineHeight: 1.75, marginBottom: 32 }}>
              Essays on systems, operations, and the logic behind the chaos of building a company.
            </p>
            <a href="https://untraditionalbos.substack.com" target="_blank" rel="noopener noreferrer"
              className="btn-coral btn-sm">
              Subscribe on Substack →
            </a>
          </div>
        </section>

        {/* Posts */}
        <section className="section">
          <div className="wrap" style={{ maxWidth: 800 }}>
            {error ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <p className="f-serif" style={{ fontSize: 26, marginBottom: 16 }}>Can&apos;t load posts right now.</p>
                <a href="https://untraditionalbos.substack.com" target="_blank" rel="noopener noreferrer" className="btn-dark">
                  Read on Substack →
                </a>
              </div>
            ) : posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <p className="f-serif" style={{ fontSize: 26, marginBottom: 16 }}>First issue coming soon.</p>
                <a href="https://untraditionalbos.substack.com" target="_blank" rel="noopener noreferrer" className="btn-coral">
                  Subscribe to be first →
                </a>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {posts.map((post, i) => (
                  <article key={post.id} style={{ padding: "36px 0", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(22,33,23,0.3)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--cd)" }}>
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h2 className="f-serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.25, color: "var(--forest)" }}>
                      <a href={post.url} target="_blank" rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}>
                        {post.title}
                      </a>
                    </h2>
                    <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--tm)" }}>{post.excerpt}</p>
                    <a href={post.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--cv)", textDecoration: "none" }}>
                      Read on Substack →
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
