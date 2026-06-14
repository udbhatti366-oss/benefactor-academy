import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
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
    <main style={styles.container}>
      <Link href="/blog" style={styles.backLink}>
        ← Back to Blog
      </Link>

      <article style={styles.article}>
        <div style={styles.meta}>
          {post.category} • {post.readTime}
        </div>

        <h1 style={styles.title}>
          {post.title}
        </h1>

        <p style={styles.excerpt}>
          {post.excerpt}
        </p>

        <div style={styles.divider}></div>

        <div style={styles.content}>
          {post.content
            .split("\n")
            .filter(Boolean)
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      </article>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Join The AI Insider Newsletter</h2>

        <p>
          Get AI tools, automation systems, GEO strategies,
          business ideas and growth frameworks every week.
        </p>

        <Link href="/newsletter">
          <button style={styles.button}>
            Join Newsletter
          </button>
        </Link>
      </section>

      {/* Related Posts */}
      <section style={styles.related}>
        <h2>More Articles</h2>

        <div style={styles.grid}>
          {posts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                style={styles.card}
              >
                <div style={styles.cardMeta}>
                  {item.category}
                </div>

                <h3>{item.title}</h3>

                <p>{item.excerpt}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

const styles: any = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "50px 20px",
    color: "white",
    backgroundColor: "#09090b",
    minHeight: "100vh",
  },

  backLink: {
    color: "#8b5cf6",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "30px",
  },

  article: {
    marginBottom: "80px",
  },

  meta: {
    color: "#a1a1aa",
    marginBottom: "20px",
    fontSize: "14px",
  },

  title: {
    fontSize: "56px",
    fontWeight: "bold",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  excerpt: {
    fontSize: "22px",
    color: "#d4d4d8",
    lineHeight: "1.8",
    marginBottom: "30px",
  },

  divider: {
    height: "1px",
    backgroundColor: "#27272a",
    marginBottom: "40px",
  },

  content: {
    color: "#e4e4e7",
    lineHeight: "2",
    fontSize: "18px",
  },

  cta: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#111114",
    borderRadius: "20px",
    marginBottom: "80px",
    border: "1px solid #27272a",
  },

  button: {
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    padding: "14px 24px",
    borderRadius: "10px",
    marginTop: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  related: {
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginTop: "25px",
  },

  card: {
    backgroundColor: "#111114",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #27272a",
    textDecoration: "none",
    color: "white",
  },

  cardMeta: {
    color: "#8b5cf6",
    fontSize: "13px",
    marginBottom: "10px",
  },
};