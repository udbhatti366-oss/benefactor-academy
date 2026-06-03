import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>Blog</h1>

      {posts.map((post) => (
        <div
          key={post.slug}
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h2>{post.title}</h2>

          <p>{post.excerpt}</p>

          <Link href={`/blog/${post.slug}`}>
            Read Article →
          </Link>
        </div>
      ))}
    </main>
  );
}