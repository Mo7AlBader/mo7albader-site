import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import { getPost, posts, formatDate, postUrl } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "المدونة" };

  const title = post.title.ar;
  const description = post.excerpt.ar;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${title} · محمد البدر`,
      description,
      url: `/blog/${post.slug}`,
      locale: "ar_SA",
      publishedTime: post.date,
      authors: ["Mohammed AlBader"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · محمد البدر`,
      description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.ar,
    description: post.excerpt.ar,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ar",
    author: { "@type": "Person", name: "Mohammed AlBader", url: "https://mo7albader.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl(post.slug) },
    ...(post.faq && post.faq.length > 0
      ? {
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q.ar,
            acceptedAnswer: { "@type": "Answer", text: f.a.ar },
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticle post={post} />
    </>
  );
}
