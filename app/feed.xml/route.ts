import { SITE_URL, sortedPosts } from "@/lib/blog";

export const dynamic = "force-static";

function rfc822(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toUTCString();
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const items = sortedPosts()
    .filter((p) => !p.placeholder)
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title.ar)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <description>${escapeXml(p.excerpt.ar)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>مدونة محمد البدر</title>
    <link>${SITE_URL}/blog</link>
    <description>مقالات عن إدارة المنتج، الاكتساب العضوي و PLG، الذكاء الاصطناعي في بناء المنتجات، والمسار المهني.</description>
    <language>ar</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
