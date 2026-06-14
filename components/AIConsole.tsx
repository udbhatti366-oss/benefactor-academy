"use client";

export default function AIConsole() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid #222",
          borderRadius: "20px",
          padding: "40px",
        }}
      >
        <h2>Atlas AI Console</h2>

        <p>
          Ask questions. Launch agents.
          Build businesses.
        </p>

        <input
          placeholder="Ask Atlas AI..."
          style={{
            width: "100%",
            padding: "20px",
            marginTop: "20px",
            background: "#111",
            border: "1px solid #222",
            color: "white",
            borderRadius: "12px",
          }}
        />
      </div>
    </section>
  );
}