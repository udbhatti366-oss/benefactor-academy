import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <main style={styles.container}>
      {/* HERO */}
      <section style={styles.hero}>
        <span style={styles.badge}>AI OS Research Hub</span>

        <h1 style={styles.title}>
          AI, Automation & Digital Growth
        </h1>

        <p style={styles.subtitle}>
          Discover AI tools, automation systems, online business models,
          GEO strategies, AI agents and creator economy insights.
        </p>
      </section>

      {/* FEATURED SECTION */}
      <section style={styles.featured}>
        <h2 style={styles.sectionTitle}>
          Featured Research
        </h2>

        <div style={styles.featuredCard}>
          <h3>
            The Future of AI Agents & Autonomous Businesses
          </h3>

          <p>
            Learn how AI agents, workflow automation and
            generative engines are changing the future of
            digital businesses and content creation.
          </p>

          <Link href="/blog">
            <button style={styles.button}>
              Explore Research
            </button>
          </Link>
        </div>
      </section>

      {/* ARTICLES */}
      <section>
        <h2 style={styles.sectionTitle}>
          Latest Articles
        </h2>

        <div style={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={styles.card}
            >
              <div style={styles.meta}>
                {post.category} • {post.readTime}
              </div>

              <h2 style={styles.cardTitle}>
                {post.title}
              </h2>

              <p style={styles.excerpt}>
                {post.excerpt}
              </p>

              <span style={styles.readMore}>
                Continue Reading →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={styles.categories}>
        <h2 style={styles.sectionTitle}>
          Explore Topics
        </h2>

        <div style={styles.categoryGrid}>
          <div style={styles.categoryCard}>
            <h3>🧠 AI Tools</h3>
            <p>Latest AI software and productivity tools.</p>
          </div>

          <div style={styles.categoryCard}>
            <h3>⚙ Automation</h3>
            <p>Systems that save time and scale businesses.</p>
          </div>

          <div style={styles.categoryCard}>
            <h3>📈 GEO</h3>
            <p>Generative Engine Optimization strategies.</p>
          </div>

          <div style={styles.categoryCard}>
            <h3>💰 Online Income</h3>
            <p>Digital business models and monetization.</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={styles.newsletter}>
        <h2>Join The AI Insider Newsletter</h2>

        <p>
          Weekly AI tools, automation systems,
          growth frameworks and digital business ideas.
        </p>

        <div style={styles.newsletterBox}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />

          <button style={styles.button}>
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}

const styles: any = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    backgroundColor: "#09090b",
    color: "#ffffff",
    minHeight: "100vh",
  },

  hero: {
    textAlign: "center",
    marginBottom: "80px",
    paddingTop: "40px",
  },

  badge: {
    display: "inline-block",
    background: "#18181b",
    color: "#a78bfa",
    padding: "10px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    marginBottom: "20px",
    border: "1px solid #27272a",
  },

  title: {
    fontSize: "56px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  subtitle: {
    maxWidth: "750px",
    margin: "0 auto",
    color: "#a1a1aa",
    lineHeight: "1.8",
    fontSize: "20px",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "25px",
  },

  featured: {
    marginBottom: "80px",
  },

  featuredCard: {
    background:
      "linear-gradient(135deg,#111114,#18181b)",
    padding: "40px",
    borderRadius: "24px",
    border: "1px solid #27272a",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "25px",
  },

  card: {
    backgroundColor: "#111114",
    borderRadius: "18px",
    padding: "25px",
    textDecoration: "none",
    color: "white",
    border: "1px solid #27272a",
    transition: "0.2s",
  },

  meta: {
    color: "#a1a1aa",
    fontSize: "13px",
    marginBottom: "12px",
  },

  cardTitle: {
    fontSize: "24px",
    marginBottom: "15px",
  },

  excerpt: {
    color: "#d4d4d8",
    lineHeight: "1.7",
    marginBottom: "20px",
  },

  readMore: {
    color: "#8b5cf6",
    fontWeight: "bold",
  },

  categories: {
    marginTop: "100px",
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
  },

  categoryCard: {
    backgroundColor: "#111114",
    padding: "25px",
    borderRadius: "18px",
    border: "1px solid #27272a",
  },

  newsletter: {
    marginTop: "120px",
    textAlign: "center",
  },

  newsletterBox: {
    marginTop: "20px",
  },

  input: {
    padding: "14px",
    width: "320px",
    maxWidth: "90%",
    borderRadius: "10px",
    border: "none",
    marginRight: "10px",
  },

  button: {
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    padding: "14px 22px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};