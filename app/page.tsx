
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      {/* HERO */}

      <section style={styles.hero}>
        <div style={styles.badge}>
          AI Operating System • Agent Network • Automation Platform
        </div>

        <h1 style={styles.title}>
          Atlas AI OS
        </h1>

        <p style={styles.subtitle}>
          The AI Workforce For Modern Businesses
        </p>

        <p style={styles.description}>
          Deploy AI agents, automate operations, generate leads,
          create content, build systems and scale your business
          with a single AI Operating System.
        </p>

        {/* AI SEARCH */}

        <div style={styles.searchBox}>
          <input
            placeholder="Ask Atlas AI anything..."
            style={styles.searchInput}
          />

          <Link href="/search">
            <button style={styles.searchButton}>
              Search
            </button>
          </Link>
        </div>

        <div style={styles.heroButtons}>
          <Link href="/agents">
            <button style={styles.primary}>
              Launch Atlas AI
            </button>
          </Link>

          <Link href="/dashboard">
            <button style={styles.secondary}>
              Open Dashboard
            </button>
          </Link>
        </div>
      </section>

      {/* STATS */}

      <section style={styles.stats}>
        <div style={styles.stat}>
          <h2>24/7</h2>
          <p>AI Workforce</p>
        </div>

        <div style={styles.stat}>
          <h2>100+</h2>
          <p>Automation Possibilities</p>
        </div>

        <div style={styles.stat}>
          <h2>∞</h2>
          <p>Scalable Systems</p>
        </div>
      </section>

      {/* AGENTS */}

      <section style={styles.section}>
        <h2 style={styles.heading}>
          AI Agent Network
        </h2>

        <div style={styles.grid}>
          {[
            "Startup Agent",
            "Sales Agent",
            "Marketing Agent",
            "Research Agent",
            "Content Agent",
            "Automation Agent",
          ].map((item) => (
            <div key={item} style={styles.card}>
              <h3>{item}</h3>

              <p>
                Specialized AI worker designed
                to execute business tasks.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}

      <section style={styles.section}>
        <h2 style={styles.heading}>
          Business Systems
        </h2>

        <div style={styles.grid}>
          <Link href="/systems" style={styles.cardLink}>
            <h3>AI Business OS</h3>
            <p>Complete automation stack.</p>
          </Link>

          <Link href="/signals" style={styles.cardLink}>
            <h3>AI Signals</h3>
            <p>Track opportunities and trends.</p>
          </Link>

          <Link href="/workflows" style={styles.cardLink}>
            <h3>Workflows</h3>
            <p>Ready-to-deploy automation systems.</p>
          </Link>

          <Link href="/services" style={styles.cardLink}>
            <h3>AI Services</h3>
            <p>Done-for-you implementation.</p>
          </Link>
        </div>
      </section>

      {/* MARKETPLACE */}

      <section style={styles.section}>
        <h2 style={styles.heading}>
          AI Products
        </h2>

        <div style={styles.grid}>
          <div style={styles.product}>
            <h3>AI Lead Machine</h3>
            <p>$299 Setup</p>
          </div>

          <div style={styles.product}>
            <h3>AI Automation System</h3>
            <p>$999 Setup</p>
          </div>

          <div style={styles.product}>
            <h3>AI Business OS</h3>
            <p>$5000+</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section style={styles.cta}>
        <h2>
          Build The Future With Atlas AI
        </h2>

        <p>
          AI agents, automation systems and
          scalable digital infrastructure.
        </p>

        <Link href="/agents">
          <button style={styles.primary}>
            Start Now
          </button>
        </Link>
      </section>
    </main>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#050505",
    color: "white",
    padding: "40px",
    fontFamily: "Arial",
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-block",
    background: "#111",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid #222",
  },

  title: {
    fontSize: "80px",
    marginTop: "30px",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "28px",
    color: "#9ca3af",
  },

  description: {
    maxWidth: "800px",
    margin: "30px auto",
    color: "#cfcfcf",
    lineHeight: "1.8",
  },

  searchBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    gap: "10px",
    flexWrap: "wrap",
  },

  searchInput: {
    width: "500px",
    maxWidth: "90%",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #222",
    background: "#111",
    color: "white",
  },

  searchButton: {
    padding: "16px 20px",
    background: "#16a34a",
    border: "none",
    borderRadius: "12px",
    color: "white",
  },

  heroButtons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primary: {
    background: "#16a34a",
    color: "white",
    border: "none",
    padding: "14px 22px",
    borderRadius: "10px",
  },

  secondary: {
    background: "#111",
    color: "white",
    border: "1px solid #333",
    padding: "14px 22px",
    borderRadius: "10px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "50px",
  },

  stat: {
    background: "#111",
    padding: "25px",
    borderRadius: "16px",
    textAlign: "center",
  },

  section: {
    marginTop: "100px",
  },

  heading: {
    marginBottom: "30px",
    fontSize: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "20px",
  },

  card: {
    background: "#111",
    padding: "25px",
    borderRadius: "16px",
  },

  cardLink: {
    background: "#111",
    padding: "25px",
    borderRadius: "16px",
    color: "white",
    textDecoration: "none",
  },

  product: {
    background: "#111",
    padding: "25px",
    borderRadius: "16px",
    border: "1px solid #16a34a",
  },

  cta: {
    textAlign: "center",
    marginTop: "120px",
    paddingBottom: "100px",
  },
};
