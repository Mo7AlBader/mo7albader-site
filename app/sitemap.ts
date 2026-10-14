import type { MetadataRoute } from "next";
import { SITE_URL, posts } from "@/lib/blog";
import { prompts } from "@/lib/prompts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/prompts`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/bio`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/tokens`, changeFrequency: "daily", priority: 0.6 },
    { url: `${SITE_URL}/notes/work-in-islam`, changeFrequency: "yearly", priority: 0.4 },
  ];

  // placeholder posts are noindexed, so they stay out of the sitemap too
  const articles: MetadataRoute.Sitemap = posts
    .filter((p) => !p.placeholder)
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }));

  const promptPages: MetadataRoute.Sitemap = prompts.map((p) => ({
    url: `${SITE_URL}/prompts/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...articles, ...promptPages];
}
