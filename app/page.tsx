import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>

      {/* NAV */}
      <nav style={styles.nav}>
        <h2>AI OS V1.1</h2>
        <div style={styles.links}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/generator">AI Engine</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Build, Automate & Monetize AI Systems
        </h1>

        <p style={styles.sub}>
          AI SaaS Platform for Content, Automation & Digital Income Generation
        </p>

        <div style={styles.cta}>
          <Link href="/dashboard">
            <button style={styles.primary}>Enter AI OS</button>
          </Link>

          <Link href="/generator">
            <button style={styles.secondary}>Try AI Generator</button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.grid}>

        <div style={styles.card}>
          <h3>🧠 AI Content Engine</h3>
          <p>Generate blogs, scripts, posts, SEO content automatically.</p>
        </div>

        <div style={styles.card}>
          <h3>⚙️ Automation Layer</h3>
          <p>Auto publish, auto schedule, auto distribute content.</p>
        </div>

        <div style={styles.card}>
          <h3>📈 Growth Engine</h3>
          <p>GEO optimized content for ChatGPT, Gemini, Claude ranking.</p>
        </div>

        <div style={styles.card}>
          <h3>💰 Monetization Engine</h3>
          <p>Turn traffic into subscribers, users & SaaS revenue.</p>
        </div>

      </section>

      {/* CTA */}
      <section style={styles.bottom}>
        <h2>Start Building Your AI Business Today</h2>
        <Link href="/dashboard">
          <button style={styles.primary}>Launch System</button>
        </Link>
      </section>

    </main>
  );
}

const styles: any = {
  container: {
    background: "#070707",
    color: "white",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #222",
    paddingBottom: 15
  },

  links: { display: "flex", gap: 15 },

  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },

  title: {
    fontSize: 50,
    fontWeight: "bold"
  },

  sub: {
    color: "#aaa",
    maxWidth: 600,
    margin: "20px auto"
  },

  cta: {
    display: "flex",
    justifyContent: "center",
    gap: 10
  },

  primary: {
    background: "#7c3aed",
    border: "none",
    padding: 12,
    color: "white",
    borderRadius: 8
  },

  secondary: {
    background: "#111",
    border: "1px solid #333",
    padding: 12,
    color: "white",
    borderRadius: 8
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
    padding: 40
  },

  card: {
    background: "#111",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #222"
  },

  bottom: {
    textAlign: "center",
    padding: 60
  }
};