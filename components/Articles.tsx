import { fetchSubstackFeed, BlogPost } from "@/lib/rss";
import Image from "next/image";

function formatDate(d: string) {
  try { return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
  catch { return d; }
}

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="article-card reveal"
      style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 0, overflow: "hidden", padding: 0 }}>

      {/* Image */}
      <div style={{ width: "100%", aspectRatio: "16/9", position: "relative", overflow: "hidden",
        background: `linear-gradient(135deg, var(--coral) 0%, var(--cv) 100%)` }}>
        {post.coverImage ? (
          <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "rgba(255,247,232,0.3)", fontStyle: "italic" }}>
              Untraditional
            </span>
          </div>
        )}
        {/* Issue number badge */}
        <span style={{
          position: "absolute", top: 12, left: 12, zIndex: 1,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em",
          background: "rgba(22,33,23,0.75)", color: "var(--coral)",
          padding: "3px 10px", borderRadius: 100, backdropFilter: "blur(4px)",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--tm)" }}>
          {formatDate(post.publishedAt)}
        </span>
        <h3 className="f-serif" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.3, color: "var(--forest)" }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--tm)", flex: 1 }}>{post.excerpt}</p>
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--cv)", display: "inline-flex", alignItems: "center", gap: 4, marginTop: 4 }}>
          Read on Substack →
        </span>
      </div>
    </a>
  );
}

function EmptyCard({ index }: { index: number }) {
  return (
    <div className="article-card reveal" style={{ overflow: "hidden", padding: 0 }}>
      <div style={{ width: "100%", aspectRatio: "16/9", background: `linear-gradient(135deg, var(--coral) 0%, var(--cv) 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "rgba(255,247,232,0.4)", fontStyle: "italic" }}>
          Coming soon
        </span>
      </div>
      <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--cd)" }}>0{index + 1}</span>
        <p className="f-serif" style={{ fontSize: 22, fontWeight: 500, color: "var(--tm)", fontStyle: "italic" }}>Essay in progress…</p>
        <p style={{ fontSize: 15, color: "var(--tm)" }}>Subscribe to be the first to read it.</p>
      </div>
    </div>
  );
}

export default async function Articles() {
  let posts: BlogPost[] = [];
  try {
    posts = await fetchSubstackFeed(
      process.env.SUBSTACK_RSS_URL || "https://untraditionalbos.substack.com/feed", 2
    );
  } catch { /* degrade silently */ }

  return (
    <section id="writing" className="section" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <div>
            <p className="label">From the newsletter</p>
            <div className="accent-line" />
            <h2 className="f-serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 500, lineHeight: 1.2 }}>
              Untraditional:<br />
              <em style={{ color: "var(--cd)" }}>Building Off Script</em>
            </h2>
          </div>
          <a href="https://untraditionalbos.substack.com/" target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
            All essays →
          </a>
        </div>

        <div className="grid-2">
          {[0, 1].map(i =>
            posts[i]
              ? <ArticleCard key={posts[i].id} post={posts[i]} index={i} />
              : <EmptyCard key={i} index={i} />
          )}
        </div>
      </div>
    </section>
  );
}
