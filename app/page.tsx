export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          padding: "24px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backdropFilter: "blur(12px)",
          background: "rgba(15,23,42,0.5)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 100,
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#38bdf8",
          }}
        >
          Benefactor Academy
        </h1>

        <div style={{ display: "flex", gap: "28px", fontSize: "16px" }}>
          <span>Home</span>
          <span>Courses</span>
          <span>AI Tools</span>
          <span>Community</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            padding: "10px 22px",
            borderRadius: "999px",
            background: "rgba(56,189,248,0.12)",
            border: "1px solid rgba(56,189,248,0.4)",
            marginBottom: "28px",
            color: "#7dd3fc",
            fontWeight: "bold",
          }}
        >
          #1 Premium AI Learning Platform 🚀
        </div>

        <h1
          style={{
            fontSize: "92px",
            maxWidth: "1200px",
            lineHeight: "1.05",
            marginBottom: "30px",
            fontWeight: 900,
          }}
        >
          Build Wealth With
          <span
            style={{
              background:
                "linear-gradient(90deg,#38bdf8,#a855f7,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            AI & Digital Skills
          </span>
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "900px",
            color: "#cbd5e1",
            lineHeight: "1.8",
            marginBottom: "45px",
          }}
        >
          Learn high-income skills, AI automation, e-commerce, content systems,
          branding, marketing and modern business strategies inside one ultra
          premium ecosystem.
        </p>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <button
            style={{
              padding: "18px 42px",
              borderRadius: "14px",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg,#38bdf8,#0ea5e9)",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(56,189,248,0.4)",
            }}
          >
            Start Learning
          </button>

          <button
            style={{
              padding: "18px 42px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: "18px",
              fontWeight: "bold",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Explore Courses
          </button>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "24px",
          padding: "40px 80px 120px",
        }}
      >
        {[
          ["25K+", "Students"],
          ["150+", "Premium Lessons"],
          ["98%", "Success Rate"],
          ["24/7", "AI Support"],
        ].map(([number, label]) => (
          <div
            key={label}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "40px",
              textAlign: "center",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              style={{
                fontSize: "52px",
                marginBottom: "12px",
                color: "#38bdf8",
              }}
            >
              {number}
            </h2>

            <p style={{ color: "#cbd5e1", fontSize: "18px" }}>{label}</p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "100px 80px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <h2
            style={{
              fontSize: "64px",
              marginBottom: "20px",
            }}
          >
            Everything You Need
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "22px",
            }}
          >
            One platform. Unlimited growth.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
          }}
        >
          {[
            "AI Automation",
            "E-Commerce Systems",
            "Premium Community",
            "Mentorship Access",
            "Business Blueprints",
            "Viral Marketing",
          ].map((feature) => (
            <div
              key={feature}
              style={{
                padding: "40px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "18px",
                  color: "#38bdf8",
                }}
              >
                {feature}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                Master modern systems and build scalable online income with
                cutting-edge AI tools and strategies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            marginBottom: "24px",
          }}
        >
          Ready To Level Up?
        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Join Benefactor Academy today and transform your future.
        </p>

        <button
          style={{
            padding: "20px 52px",
            borderRadius: "18px",
            border: "none",
            background:
              "linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899)",
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 15px 40px rgba(139,92,246,0.45)",
          }}
        >
          Join Now 🚀
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#94a3b8",
        }}
      >
        © 2026 Benefactor Academy — All Rights Reserved.
      </footer>
    </main>
  );
}