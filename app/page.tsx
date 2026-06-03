import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
return ( <main style={styles.container}>

  {/* NAVBAR */}
  <nav style={styles.nav}>
    <h2>Benefactor Academy</h2>

    <div style={styles.navLinks}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/ai-consulting">AI Consulting</Link>
      <Link href="/ai-automation">AI Automation</Link>
      <Link href="/ai-agents">AI Agents</Link>
    </div>
  </nav>

  {/* HERO */}
  <section style={styles.hero}>
    <div style={styles.badge}>
      AI Consulting • AI Automation • AI Agents
    </div>

    <h1 style={styles.title}>
      Build Smarter Businesses With AI
    </h1>

    <p style={styles.subtitle}>
      AI Systems. Automation. Growth.
    </p>

    <p style={styles.description}>
      Benefactor Academy helps businesses implement AI systems,
      automation workflows, intelligent agents and growth
      strategies that save time, reduce costs and increase revenue.
    </p>

    <div style={styles.heroButtons}>
      <Link href="/blog">
        <button style={styles.button}>
          Explore Guides
        </button>
      </Link>

      <Link href="/newsletter">
        <button style={styles.secondaryButton}>
          Join Newsletter
        </button>
      </Link>
    </div>
  </section>

  {/* STATS */}
  <section style={styles.statsSection}>
    <div style={styles.statCard}>
      <h2>AI</h2>
      <p>Consulting Systems</p>
    </div>

    <div style={styles.statCard}>
      <h2>24/7</h2>
      <p>Automation Workflows</p>
    </div>

    <div style={styles.statCard}>
      <h2>∞</h2>
      <p>Growth Opportunities</p>
    </div>
  </section>

  {/* SERVICES */}
  <section style={styles.section}>
    <h2 style={styles.heading}>
      Our Core Focus Areas
    </h2>

    <div style={styles.grid}>
      <div style={styles.card}>
        <h3>AI Consulting</h3>

        <p>
          Strategic AI implementation plans
          for businesses and entrepreneurs.
        </p>
      </div>

      <div style={styles.card}>
        <h3>AI Automation</h3>

        <p>
          Automate repetitive workflows,
          content systems and operations.
        </p>
      </div>

      <div style={styles.card}>
        <h3>AI Agents</h3>

        <p>
          Deploy intelligent AI agents for
          support, research and productivity.
        </p>
      </div>

      <div style={styles.card}>
        <h3>Business Growth</h3>

        <p>
          Use AI to improve marketing,
          lead generation and revenue.
        </p>
      </div>
    </div>
  </section>

  {/* GEO SECTION */}
  <section style={styles.section}>
    <h2 style={styles.heading}>
      Generative Engine Optimization (GEO)
    </h2>

    <p style={styles.description}>
      GEO focuses on helping brands become
      visible inside AI-powered search systems,
      answer engines and intelligent assistants.
      The future of digital visibility goes
      beyond traditional search rankings.
    </p>
  </section>

  {/* ARTICLES */}
  <section style={styles.section}>
    <h2 style={styles.heading}>
      Latest AI Guides
    </h2>

    <div style={styles.grid}>
      {posts.slice(0, 3).map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          style={styles.linkCard}
        >
          <h3>{post.title}</h3>

          <p>{post.excerpt}</p>

          <small>
            {post.category} • {post.readTime}
          </small>
        </Link>
      ))}
    </div>

    <div style={{ marginTop: "30px" }}>
      <Link href="/blog">
        <button style={styles.button}>
          View All Articles
        </button>
      </Link>
    </div>
  </section>

  {/* NEWSLETTER */}
  <section style={styles.email}>
    <h2>
      Join The AI Systems Newsletter
    </h2>

    <p>
      Weekly insights on AI automation,
      AI agents, growth systems and
      business transformation.
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
    <p>AI Consulting</p>
    <p>AI Automation</p>
    <p>AI Agents</p>
    <p>Business Automation</p>
    <p>Generative Engine Optimization</p>

    <br />

    © {new Date().getFullYear()} Benefactor Academy
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

nav: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "40px",
flexWrap: "wrap",
gap: "15px",
},

navLinks: {
display: "flex",
gap: "20px",
flexWrap: "wrap",
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
marginBottom: "20px",
},

title: {
fontSize: "64px",
fontWeight: "bold",
},

subtitle: {
fontSize: "28px",
color: "#a1a1aa",
marginTop: "10px",
},

description: {
maxWidth: "750px",
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
fontSize: "32px",
marginBottom: "25px",
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

email: {
textAlign: "center",
marginTop: "100px",
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

footer: {
marginTop: "100px",
textAlign: "center",
color: "#71717a",
},
};
