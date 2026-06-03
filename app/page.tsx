<nav style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px"
}}>
  <h2>AI Creator Academy</h2>

  <div style={{ display: "flex", gap: "20px" }}>
    <Link href="/">Home</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/ai-tools">AI Tools</Link>
    <Link href="/resources">Resources</Link>
    <Link href="/newsletter">Newsletter</Link>
  </div>
</nav>
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.badge}>AI • Automation • Online Income</div>

        <h1 style={styles.title}>
          AI Creator Academy
        </h1>

        <p style={styles.subtitle}>
          Build Viral Content. Automate Growth. Earn Online.
        </p>

        <p style={styles.description}>
          Learn the exact AI tools, automation systems, content workflows,
          and digital business strategies used by modern creators to grow
          audiences and generate income online.
        </p>

        <div style={styles.heroButtons}>
          <Link href="/blog">
            <button style={styles.button}>
              Explore Articles
            </button>
          </Link>

          <button style={styles.secondaryButton}>
            Join Newsletter
          </button>
        </div>
      </section>

      {/* STATS */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h2>50K+</h2>
          <p>Email Audience Potential</p>
        </div>

        <div style={styles.statCard}>
          <h2>AI</h2>
          <p>Automation Systems</p>
        </div>

        <div style={styles.statCard}>
          <h2>24/7</h2>
          <p>Content Engine</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Explore Categories</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>AI Tools</h3>
            <p>
              Discover powerful AI software for content creation,
              marketing, automation and productivity.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Automation</h3>
            <p>
              Build systems that save time and scale your business.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Content Creation</h3>
            <p>
              Learn viral content strategies for YouTube,
              TikTok, Pinterest and blogs.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Online Income</h3>
            <p>
              Explore practical digital income opportunities
              and creator business models.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section style={styles.section}>
        <h2 style={styles.heading}>What You Will Learn</h2>

        <ul style={styles.list}>
          <li>How to create viral content using AI</li>
          <li>How creators monetize online audiences</li>
          <li>How to automate content workflows</li>
          <li>Faceless YouTube strategies</li>
          <li>Pinterest growth systems</li>
          <li>AI-powered blogging</li>
          <li>Digital products & affiliate income</li>
          <li>Creator business automation</li>
        </ul>
      </section>

      {/* ARTICLES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Latest Articles</h2>

        <div style={styles.grid}>
          <Link href="/blog/ai-side-hustles-2026" style={styles.linkCard}>
            <h3>Best AI Side Hustles in 2026</h3>
            <p>Explore scalable AI income opportunities.</p>
          </Link>

          <Link href="/blog/top-ai-tools-for-creators" style={styles.linkCard}>
            <h3>Top AI Tools for Creators</h3>
            <p>Discover the most useful creator tools.</p>
          </Link>

          <Link href="/blog/automation-business-systems" style={styles.linkCard}>
            <h3>Automation Business Systems</h3>
            <p>Scale your output using automation.</p>
          </Link>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link href="/blog">
            <button style={styles.button}>
              View All Articles
            </button>
          </Link>
        </div>
      </section>

      {/* MISSION */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>

        <p style={styles.description}>
          AI Creator Academy exists to help creators, freelancers,
          entrepreneurs and beginners leverage artificial intelligence,
          automation and content systems to build sustainable online income.
        </p>
      </section>

      {/* NEWSLETTER */}
      <section style={styles.email}>
        <h2>Join The AI Creator Newsletter</h2>

        <p>
          Get AI tools, automation systems, growth strategies,
          content ideas and online income opportunities delivered weekly.
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

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} AI Creator Academy.
        All rights reserved.
      </footer>
    </main>
  );
}

const styles: any = {
  container: {
    backgroundColor: "#09090b",
    color: "white",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-block",
    background: "#1f1f25",
    padding: "8px 16px",
    borderRadius: "999px",
    color: "#cfcfcf",
    marginBottom: "20px",
    fontSize: "14px",
  },

  title: {
    fontSize: "64px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "28px",
    color: "#a1a1aa",
  },

  description: {
    maxWidth: "700px",
    margin: "20px auto",
    color: "#d4d4d8",
    lineHeight: "1.8",
  },

  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "30px",
    flexWrap: "wrap",
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

  secondaryButton: {
    backgroundColor: "#1f1f25",
    color: "white",
    border: "1px solid #333",
    padding: "14px 22px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  statsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "40px",
    marginBottom: "80px",
  },

  statCard: {
    backgroundColor: "#111114",
    padding: "25px",
    borderRadius: "16px",
    textAlign: "center",
  },

  section: {
    maxWidth: "1100px",
    margin: "80px auto",
  },

  heading: {
    marginBottom: "30px",
    fontSize: "32px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "#111114",
    padding: "25px",
    borderRadius: "16px",
  },

  linkCard: {
    backgroundColor: "#111114",
    padding: "25px",
    borderRadius: "16px",
    color: "white",
    textDecoration: "none",
    display: "block",
  },

  list: {
    lineHeight: "2",
    color: "#d4d4d8",
  },

  email: {
    textAlign: "center",
    marginTop: "100px",
  },

  newsletterBox: {
    marginTop: "20px",
  },

  input: {
    padding: "14px",
    width: "300px",
    maxWidth: "90%",
    borderRadius: "10px",
    border: "none",
    marginRight: "10px",
  },

  footer: {
    marginTop: "100px",
    textAlign: "center",
    color: "#71717a",
  },
};