export default function AgentsPage() {
  const agents = [
    {
      name: "Startup Agent",
      description:
        "Generate startup ideas, validate markets and build launch plans.",
    },
    {
      name: "Content Agent",
      description:
        "Create blogs, newsletters, social posts and content systems.",
    },
    {
      name: "Marketing Agent",
      description:
        "Build campaigns, funnels and growth strategies automatically.",
    },
    {
      name: "Research Agent",
      description:
        "Analyze markets, competitors and business opportunities.",
    },
    {
      name: "Sales Agent",
      description:
        "Qualify leads, answer questions and book appointments.",
    },
    {
      name: "Automation Agent",
      description:
        "Design workflows and automate repetitive business tasks.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "60px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              background: "#111",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid #222",
            }}
          >
            AI Agent Network
          </span>

          <h1
            style={{
              fontSize: "56px",
              marginTop: "25px",
              marginBottom: "20px",
            }}
          >
            Your Digital Workforce
          </h1>

          <p
            style={{
              color: "#aaa",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Deploy specialized AI agents for growth, content,
            research, sales and automation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          {agents.map((agent) => (
            <div
              key={agent.name}
              style={{
                background: "#0d0d0d",
                border: "1px solid #222",
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <h2>{agent.name}</h2>

              <p
                style={{
                  color: "#aaa",
                  lineHeight: "1.7",
                  marginTop: "12px",
                }}
              >
                {agent.description}
              </p>

              <button
                style={{
                  marginTop: "20px",
                  background: "#16a34a",
                  border: "none",
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Launch Agent
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "40px",
            border: "1px solid #222",
            borderRadius: "20px",
            background: "#0d0d0d",
          }}
        >
          <h2>Atlas AI Coming Online</h2>

          <p
            style={{
              color: "#aaa",
              marginTop: "15px",
            }}
          >
            A central AI operator that coordinates all agents,
            manages leads, handles customer conversations and
            executes business workflows.
          </p>
        </div>
      </div>
    </main>
  );
}