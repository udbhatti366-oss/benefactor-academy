"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={s.main}>

      <section style={s.hero}>
        <div style={s.badge}>AI AUTOMATION AGENCY — EST. 2025</div>
        <h1 style={s.h1}>
          We Build <span style={s.accent}>AI Systems</span><br />
          That Make You Money
        </h1>
        <p style={s.heroP}>
          Autonomous AI agents, workflow automation, and intelligent systems
          for ambitious businesses ready to scale without limits.
        </p>
        <div style={s.heroBtns}>
          <Link href="https://calendly.com/searchonlineplus/30min" target="_blank">
            <button style={s.btnPrimary}>GET A FREE AUDIT →</button>
          </Link>
          <Link href="/services">
            <button style={s.btnSecondary}>SEE OUR WORK</button>
          </Link>
        </div>
      </section>

      <div style={s.stats}>
        {[
          { num: "50+", label: "CLIENTS SERVED" },
          { num: "$2M+", label: "CLIENT REVENUE GENERATED" },
          { num: "300%", label: "AVG EFFICIENCY GAIN" },
          { num: "24/7", label: "AI AGENTS RUNNING" },
        ].map((stat, i) => (
          <div key={i} style={{ ...s.stat, borderRight: i < 3 ? "1px solid #1a1a2e" : "none" }}>
            <div style={s.statNum}>{stat.num}</div>
            <div style={s.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <section style={s.section}>
        <div style={s.sectionLabel}>// WHAT WE BUILD</div>
        <h2 style={s.sectionTitle}>Our Core Services</h2>
        <div style={s.servicesGrid}>
          {[
            { icon: "🤖", title: "AI Agents", desc: "Custom autonomous agents that handle sales, support, and operations around the clock.", price: "FROM $500" },
            { icon: "⚙️", title: "Workflow Automation", desc: "Connect your tools, eliminate repetitive tasks, and run your business on autopilot.", price: "FROM $300" },
            { icon: "💬", title: "AI Chatbots", desc: "Intelligent chatbots that qualify leads, answer questions, and book appointments 24/7.", price: "FROM $200" },
            { icon: "📧", title: "Email Automation", desc: "AI-powered email sequences that nurture leads and convert prospects automatically.", price: "FROM $250" },
            { icon: "📊", title: "AI Analytics", desc: "Real-time dashboards and AI insights that tell you exactly what is working.", price: "FROM $400" },
            { icon: "🚀", title: "Full AI System", desc: "Complete AI transformation — agents, automation, analytics — everything to dominate.", price: "FROM $2,500" },
          ].map((svc, i) => (
            <div key={i} style={s.serviceCard}>
              <div style={s.serviceIcon}>{svc.icon}</div>
              <h3 style={s.serviceTitle}>{svc.title}</h3>
              <p style={s.serviceDesc}>{svc.desc}</p>
              <div style={s.servicePrice}>{svc.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={s.section}>
        <div style={s.sectionLabel}>// PRICING PACKAGES</div>
        <h2 style={s.sectionTitle}>Simple, Transparent Pricing</h2>
        <div style={s.pricingGrid}>
          {[
            {
              name: "STARTER", price: "$500", featured: false,
              desc: "Perfect for small businesses ready to automate their first process.",
              features: ["1 AI Chatbot", "Lead capture system", "Email automation setup", "30-day support"],
            },
            {
              name: "GROWTH", price: "$1,500", featured: true,
              desc: "For businesses serious about scaling with AI automation systems.",
              features: ["3 Custom AI Agents", "Full workflow automation", "CRM integration", "Email + SMS automation", "90-day support"],
            },
            {
              name: "ENTERPRISE", price: "$5,000", featured: false,
              desc: "Full AI transformation for companies ready to dominate their market.",
              features: ["Unlimited AI Agents", "Custom AI software", "Dedicated AI team", "Monthly retainer option", "Priority 24/7 support"],
            },
          ].map((pkg, i) => (
            <div key={i} style={{
              ...s.priceCard,
              border: pkg.featured ? "1px solid #6366f1" : "1px solid #1a1a2e",
              background: pkg.featured ? "#0a0a1a" : "transparent",
              position: "relative" as const,
            }}>
              {pkg.featured && <div style={s.featuredBadge}>MOST POPULAR</div>}
              <div style={s.priceName}>{pkg.name}</div>
              <div style={s.priceAmount}>{pkg.price}</div>
              <div style={s.priceDesc}>{pkg.desc}</div>
              <ul style={s.priceFeatures}>
                {pkg.features.map((f, j) => (
                  <li key={j} style={s.priceFeat}>→ {f}</li>
                ))}
              </ul>
              <Link href="/newsletter" style={{ textDecoration: "none" }}>
                <button style={pkg.featured ? s.btnPrimary : s.btnSecondary}>GET STARTED →</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={s.section}>
        <div style={s.sectionLabel}>// HOW IT WORKS</div>
        <h2 style={s.sectionTitle}>Our Process</h2>
        <div style={s.processGrid}>
          {[
            { num: "01", title: "Free Audit Call", desc: "We analyze your business and identify the highest-impact automation opportunities." },
            { num: "02", title: "Custom Strategy", desc: "We design a tailored AI system specifically for your business goals and budget." },
            { num: "03", title: "Build & Deploy", desc: "Our team builds and launches your AI systems within 7-14 days." },
            { num: "04", title: "Scale & Grow", desc: "We monitor, optimize, and scale your AI systems as your business grows." },
          ].map((step, i) => (
            <div key={i} style={s.step}>
              <div style={s.stepNum}>{step.num}</div>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={s.ctaSection}>
        <h2 style={s.ctaTitle}>Ready to <span style={s.accent}>Automate</span><br />Your Business?</h2>
        <p style={s.ctaP}>Book a free 30-minute AI audit call. No pressure, just value.</p>
        <div style={s.ctaForm}>
          <input style={s.ctaInput} type="email" placeholder="your@email.com" />
          <button style={s.btnPrimary}>BOOK FREE CALL →</button>
        </div>
      </section>

      <footer style={s.footer}>
        <p style={s.footerLeft}>© 2025 BENEFACTOR.ACADEMY — ALL RIGHTS RESERVED</p>
        <p style={{ color: "#6366f1", fontSize: "13px" }}>benefactor.academy</p>
      </footer>

    </main>
  );
}

const s: any = {
  main: { background: "#050508", color: "#fff", fontFamily: "'Courier New', monospace", minHeight: "100vh" },
  hero: { textAlign: "center", padding: "120px 60px 80px", borderBottom: "1px solid #0f0f1a" },
  badge: { display: "inline-block", background: "#0f0f2a", border: "1px solid #2a2a5a", color: "#8888ff", padding: "8px 20px", borderRadius: "2px", fontSize: "11px", letterSpacing: "3px", marginBottom: "40px" },
  h1: { fontSize: "64px", lineHeight: 1.1, marginBottom: "30px", fontWeight: 900, letterSpacing: "-2px" },
  accent: { color: "#6366f1" },
  heroP: { fontSize: "18px", color: "#888", maxWidth: "600px", margin: "0 auto 50px", lineHeight: 1.8, fontFamily: "Arial, sans-serif" },
  heroBtns: { display: "flex", gap: "16px", justifyContent: "center" },
  btnPrimary: { background: "#6366f1", color: "#fff", border: "none", padding: "16px 36px", fontFamily: "'Courier New'", fontSize: "14px", letterSpacing: "1px", cursor: "pointer", borderRadius: "4px" },
  btnSecondary: { background: "transparent", color: "#fff", border: "1px solid #333", padding: "16px 36px", fontFamily: "'Courier New'", fontSize: "14px", letterSpacing: "1px", cursor: "pointer", borderRadius: "4px" },
  stats: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1px solid #1a1a2e" },
  stat: { padding: "40px", textAlign: "center" },
  statNum: { fontSize: "42px", fontWeight: 900, color: "#6366f1" },
  statLabel: { color: "#666", fontSize: "12px", letterSpacing: "2px", marginTop: "8px", fontFamily: "Arial" },
  section: { padding: "80px 60px", borderBottom: "1px solid #1a1a2e" },
  sectionLabel: { color: "#6366f1", fontSize: "11px", letterSpacing: "4px", marginBottom: "20px" },
  sectionTitle: { fontSize: "42px", fontWeight: 900, marginBottom: "60px", letterSpacing: "-1px" },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#1a1a2e" },
  serviceCard: { background: "#050508", padding: "40px 30px" },
  serviceIcon: { fontSize: "28px", marginBottom: "20px" },
  serviceTitle: { fontSize: "20px", marginBottom: "12px", color: "#e8e8ff" },
  serviceDesc: { color: "#666", fontSize: "14px", lineHeight: 1.7, fontFamily: "Arial" },
  servicePrice: { marginTop: "24px", color: "#6366f1", fontSize: "22px", fontWeight: "bold" },
  pricingGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" },
  priceCard: { padding: "40px 30px", borderRadius: "4px" },
  featuredBadge: { position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "#fff", fontSize: "10px", letterSpacing: "2px", padding: "4px 16px", borderRadius: "2px" },
  priceName: { fontSize: "13px", letterSpacing: "3px", color: "#888", marginBottom: "16px" },
  priceAmount: { fontSize: "48px", fontWeight: 900, color: "#fff", marginBottom: "16px" },
  priceDesc: { color: "#666", fontSize: "13px", marginBottom: "24px", fontFamily: "Arial", lineHeight: 1.6 },
  priceFeatures: { listStyle: "none", marginBottom: "24px", padding: 0 },
  priceFeat: { color: "#888", fontSize: "13px", padding: "8px 0", borderBottom: "1px solid #111", fontFamily: "Arial" },
  processGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#1a1a2e" },
  step: { background: "#050508", padding: "40px 25px" },
  stepNum: { fontSize: "48px", fontWeight: 900, color: "#1a1a2e", marginBottom: "16px" },
  stepTitle: { fontSize: "16px", marginBottom: "10px", color: "#e8e8ff" },
  stepDesc: { color: "#666", fontSize: "13px", lineHeight: 1.6, fontFamily: "Arial" },
  ctaSection: { padding: "100px 60px", textAlign: "center" },
  ctaTitle: { fontSize: "52px", fontWeight: 900, marginBottom: "20px", letterSpacing: "-2px" },
  ctaP: { color: "#888", fontSize: "18px", marginBottom: "40px", fontFamily: "Arial" },
  ctaForm: { display: "flex", gap: "12px", justifyContent: "center", maxWidth: "500px", margin: "0 auto" },
  ctaInput: { flex: 1, background: "#111", border: "1px solid #333", color: "#fff", padding: "14px 20px", fontFamily: "'Courier New'", fontSize: "14px", borderRadius: "4px", outline: "none" },
  footer: { padding: "40px 60px", borderTop: "1px solid #1a1a2e", display: "flex", justifyContent: "space-between", alignItems: "center" },
  footerLeft: { color: "#444", fontSize: "12px", letterSpacing: "1px" },
};