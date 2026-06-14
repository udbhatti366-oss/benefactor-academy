"use client";

const agents = [
  "Startup Agent",
  "Sales Agent",
  "Marketing Agent",
  "Research Agent",
  "Content Agent",
  "Automation Agent",
];

export default function AgentGrid() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        AI Workforce
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {agents.map((agent) => (
          <div
            key={agent}
            style={{
              background: "#111",
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #222",
            }}
          >
            <div
              style={{
                color: "#22c55e",
                marginBottom: "10px",
              }}
            >
              ● ONLINE
            </div>

            <h3>{agent}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}