import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | AI Creator Academy`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: "#1f1f25",
          padding: "8px 14px",
          borderRadius: "999px",
          marginBottom: "20px",
        }}
      >
        AI Creator Academy
      </div>

      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          color: "#a1a1aa",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        {post.excerpt}
      </p>

      <article
        style={{
          lineHeight: "1.9",
          fontSize: "18px",
          color: "#d4d4d8",
        }}
      >
        <p>{post.content}</p>
      </article>
    </main>
  );
}