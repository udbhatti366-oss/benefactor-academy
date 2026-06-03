import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
title: "AI Creator Academy | Learn AI Skills That Create Income",
description:
"Learn AI tools, automation systems, content creation strategies and online business models.",
};

export default function Home() {
return ( <main style={styles.container}> <nav style={styles.nav}> <h2>AI Creator Academy</h2>


    <div style={styles.navLinks}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/ai-tools">AI Tools</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/newsletter">Newsletter</Link>
      <Link href="/about">About</Link>
    </div>
  </nav>

  <section style={styles.hero}>
    <div style={styles.badge}>AI • Automation • Online Income</div>

    <h1 style={styles.title}>
      Learn AI Skills That Create Income
    </h1>

    <p style={styles.subtitle}>
      Build content systems, automation workflows and online businesses with AI.
    </p>

    <p style={styles.description}>
      Discover AI tools, content strategies, automation systems and digital
      business models used by modern creators.
    </p>

    <div style={styles.heroButtons}>
      <Link href="/blog">
        <button style={styles.button}>Read Articles</button>
      </Link>

      <Link href="/newsletter">
        <button style={styles.secondaryButton}>Join Newsletter</button>
      </Link>
    </div>
  </section>

  <section style={styles.statsSection}>
    <div style={styles.statCard}>
      <h2>10+</h2>
      <p>AI Guides</p>
    </div>

    <div style={styles.statCard}>
      <h2>50K+</h2>
      <p>Audience Potential</p>
    </div>

    <div style={styles.statCard}>
      <h2>100%</h2>
      <p>Free Resources</p>
    </div>
  </section>

  <section style={styles.section}>
    <h2 style={styles.heading}>Explore Categories</h2>

    <div style={styles.grid}>
      <div style={styles.card}>
        <h3>AI Tools</h3>
        <p>Discover powerful AI software and workflows.</p>
      </div>

      <div style={styles.card}>
        <h3>Automation</h3>
        <p>Build systems that save time and scale output.</p>
      </div>

      <div style={styles.card}>
        <h3>Content Creation</h3>
        <p>Learn YouTube, Pinterest and blogging systems.</p>
      </div>

      <div style={styles.card}>
        <h3>Online Income</h3>
        <p>Explore practical creator business models.</p>
      </div>
    </div>
  </section>

  <section style={styles.section}>
    <h2 style={styles.heading}>Latest Articles</h2>

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
        <button style={styles.button}>View All Articles</button>
      </Link>
    </div>
  </section>

  <section style={styles.section}>
    <h2 style={styles.heading}>What You Will Learn</h2>

    <ul style={styles.list}>
      <li>AI Content Creation</li>
      <li>Faceless YouTube</li>
      <li>AI Blogging</li>
      <li>Automation Systems</li>
      <li>Pinterest Growth</li>
      <li>Digital Products</li>
      <li>Affiliate Marketing</li>
      <li>Online Income Strategies</li>
    </ul>
  </section>

  <section style={styles.email}>
    <h2>Join The AI Creator Newsletter</h2>

    <p>
      Get AI tools, automation systems and online income strategies every week.
    </p>

    <div style={styles.newsletterBox}>
      <input
        type="email"
        placeholder="Enter your email"
        style={styles.input}
      />

      <button style={styles.button}>Subscribe</button>
    </div>
  </section>

  <footer style={styles.footer}>
    <p>© {new Date().getFullYear()} AI Creator Academy</p>

    <div>
      <Link href="/about">About</Link> •{" "}
      <Link href="/privacy">Privacy</Link> •{" "}
      <Link href="/blog">Blog</Link> •{" "}
      <Link href="/newsletter">Newsletter</Link>
    </div>
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
},

navLinks: {
display: "flex",
gap: "20px",
},

hero: {
textAlign: "center",
maxWidth: "900px",
margin: "0 auto",
padding: "80px 20px",
},

badge: {
display: "inline-block",
background: "#1f1f25",
padding: "8px 16px",
borderRadius: "999px",
marginBottom: "20px",
},

title: {
fontSize: "60px",
fontWeight: "bold",
},

subtitle: {
fontSize: "24px",
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
},

secondaryButton: {
backgroundColor: "#18181b",
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
margin: "60px 0",
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
borderRadius: "10px",
border: "none",
marginRight: "10px",
},

footer: {
marginTop: "100px",
textAlign: "center",
color: "#888",
},
};
