export default function AgentsPage() {
  const agents = [
    "Startup Agent",
    "Content Agent",
    "Marketing Agent",
    "Research Agent",
    "Sales Agent",
    "Automation Agent",
  ];

  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>AI Agents</h1>

      {agents.map((agent) => (
        <div
          key={agent}
          style={{
            background: "#111",
            padding: "20px",
            marginTop: "15px",
            borderRadius: "12px",
          }}
        >
          <h3>{agent}</h3>
          <button>Run Agent</button>
        </div>
      ))}
    </main>
  );
}