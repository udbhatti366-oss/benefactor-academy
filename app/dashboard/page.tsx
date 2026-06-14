export default function DashboardPage() {
  const stats = [
    {
      title: "Total Leads",
      value: "128",
    },
    {
      title: "Qualified Leads",
      value: "37",
    },
    {
      title: "Revenue Pipeline",
      value: "$48,500",
    },
    {
      title: "AI Agents Running",
      value: "6",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "40px",
        }}
      >
        Atlas Command Center
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#111",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <p style={{ color: "#888" }}>
              {item.title}
            </p>

            <h2
              style={{
                fontSize: "36px",
              }}
            >
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#111",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <h2>Atlas AI Status</h2>

        <p>
          Sales Agent: Online
        </p>

        <p>
          Marketing Agent: Online
        </p>

        <p>
          Research Agent: Online
        </p>

        <p>
          Automation Agent: Online
        </p>
      </div>
    </main>
  );
}