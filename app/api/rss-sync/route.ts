import { NextRequest, NextResponse } from "next/server";
import { fetchSubstackFeed } from "@/lib/rss";

/**
 * GET /api/rss-sync
 * Fetches latest posts from Substack RSS and returns them as JSON.
 * Protected by a secret token to prevent abuse.
 * 
 * .env variables needed:
 *   SUBSTACK_RSS_URL=https://untraditionalbos.substack.com/feed
 *   CRON_SECRET=your_random_secret_string
 * 
 * Call this endpoint from:
 *   - Vercel Cron Jobs (vercel.json)
 *   - Zapier (RSS trigger → Webhook action)
 *   - Manual curl for testing
 */
export async function GET(req: NextRequest) {
  // Auth check
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const feedUrl =
    process.env.SUBSTACK_RSS_URL ||
    "https://untraditionalbos.substack.com/feed";

  try {
    const posts = await fetchSubstackFeed(feedUrl);

    return NextResponse.json({
      success: true,
      count: posts.length,
      posts: posts.map((p) => ({
        id: p.id,
        title: p.title,
        excerpt: p.excerpt,
        slug: p.slug,
        url: p.url,
        publishedAt: p.publishedAt,
      })),
    });
  } catch (err) {
    console.error("[RSS Sync] Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
