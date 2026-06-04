import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Automation Systems",
      price: "Starting at $299",
      description:
        "Automate repetitive tasks, lead management, reporting and business operations.",
    },
    {
      title: "AI Content Engine",
      price: "Starting at $499",
      description:
        "Build scalable content systems for blogs, social media, YouTube and SEO/GEO growth.",
    },
    {
      title: "AI Growth Consulting",
      price: "Starting at $199",
      description:
        "Strategy sessions focused on growth, automation and AI implementation.",
    },
    {
      title: "Custom AI Agents",
      price: "Starting at $999",
      description:
        "Custom-built AI agents for research, marketing, sales, support and operations.",
    },
  ];

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.badge}>Done-For-You AI Services</div>

        <h1 style={styles.title}>
          Build Faster With
          <br />
          AI Systems & Automation
        </h1>

        <p style={styles.subtitle}>
          We help founders, creators and businesses implement AI,
          automation and growth systems that save time and create leverage.
        </p>
      </section>

      <section style={styles.grid}>
        {services.map((service) => (
          <div key={service.title} style={styles.card}>
            <h2>{service.title}</h2>

            <div style={styles.price}>
              {service.price}
            </div>

            <p>{service.description}</p>

            <a
              href="mailto:hello@yourdomain.com"
              style={styles.button}
            >
              Request Proposal
            </a>
          </div>
        ))}
      </section>

      <section style={styles.process}>
        <h2>How It Works</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <h3>1. Discovery</h3>
            <p>
              Tell us your goals and challenges.
            </p>
          </div>

          <div style={styles.step}>
            <h3>2. Strategy</h3>
            <p>
              We design an AI-powered solution.
            </p>
          </div>

          <div style={styles.step}>
            <h3>3. Implementation</h3>
            <p>
              We build and deploy the system.
            </p>
          </div>

          <div style={styles.step}>
            <h3>4. Scale</h3>
            <p>
              Optimize and grow over time.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.cta}>
        <h2>Ready To Build?</h2>

        <p>
          Start with a strategy discussion and discover how AI can improve your business.
        </p>

        <a
          href="mailto:info@benefactor.academy"
          style={styles.ctaButton}
        >
          Book A Call
        </a>
      </section>
    </main>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "#09090b",
    color: "white",
    padding: "40px 20px",
  },

  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "80px 0",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "#151515",
    border: "1px solid #222",
    marginBottom: "20px",
  },

  title: {
    fontSize: "60px",
    fontWeight: 800,
    marginBottom: "20px",
  },

  subtitle: {
    color: "#aaa",
    fontSize: "20px",
    lineHeight: 1.8,
  },

  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "20px",
  },

  card: {
    background: "#111",
    border: "1px solid #222",
    borderRadius: "20px",
    padding: "30px",
  },

  price: {
    color: "#8b5cf6",
    fontWeight: "bold",
    margin: "15px 0",
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 20px",
    background: "#7c3aed",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
  },

  process: {
    maxWidth: "1200px",
    margin: "100px auto",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  step: {
    background: "#111",
    padding: "25px",
    borderRadius: "16px",
    border: "1px solid #222",
  },

  cta: {
    textAlign: "center",
    padding: "80px 20px",
  },

  ctaButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "16px 26px",
    background: "#7c3aed",
    color: "white",
    textDecoration: "none",
    borderRadius: "12px",
    fontWeight: "bold",
  },
};
