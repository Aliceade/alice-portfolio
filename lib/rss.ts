export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  slug: string;
  url: string;
  coverImage?: string;
}

export async function fetchSubstackFeed(feedUrl: string, limit = 2): Promise<BlogPost[]> {
  const res = await fetch(feedUrl, {
    next: { revalidate: 3600 },
    headers: { "User-Agent": "AliceArimoro-Portfolio/1.0" },
  });
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);
  const xml = await res.text();
  return parseRSS(xml, limit);
}

function parseRSS(xml: string, limit: number): BlogPost[] {
  const items: BlogPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null && items.length < limit) {
    const block = match[1];
    const title     = extractCDATA(block, "title") || extractTag(block, "title");
    const link      = extractTag(block, "link")?.trim();
    const pubDate   = extractTag(block, "pubDate");
    const desc      = extractCDATA(block, "description") || extractTag(block, "description");
    const content   = extractCDATA(block, "content:encoded") || desc;
    const enclosure = block.match(/<enclosure[^>]+url="([^"]+)"/)?.[1];
    const ogImage   = content?.match(/<img[^>]+src="([^"]+)"/)?.[1];

    if (!title || !link) continue;

    const slug = title.toLowerCase().replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-").slice(0,60);
    const plain = stripHTML(desc || "");
    const excerpt = plain.slice(0, 180).trim() + (plain.length > 180 ? "…" : "");

    items.push({
      id: slug, title, excerpt, content: content || "",
      publishedAt: pubDate || new Date().toISOString(),
      slug, url: link,
      coverImage: enclosure || ogImage,
    });
  }
  return items;
}

function extractTag(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return m ? m[1] : "";
}
function extractCDATA(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i"));
  return m ? m[1] : "";
}
function stripHTML(html: string): string {
  return html.replace(/<[^>]+>/g," ").replace(/\s+/g," ")
    .replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")
    .replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim();
}
