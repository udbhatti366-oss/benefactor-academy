"use client";

import { useState } from "react";
import LeadForm from "../components/LeadForm";

export default function SearchPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      setResponse(
        data.response ||
        data.output ||
        "No response received."
      );
    } catch (error) {
      setResponse("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1>Atlas AI Search</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask Atlas AI..."
        style={{
          width: "100%",
          minHeight: "150px",
          padding: "20px",
          background: "#111",
          color: "white",
          borderRadius: "12px",
          border: "1px solid #222",
        }}
      />

      <button
        onClick={askAI}
        style={{
          marginTop: "15px",
          padding: "12px 20px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask Atlas"}
      </button>

      {response && (
        <>
          <div
            style={{
              marginTop: "30px",
              background: "#111",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #222",
            }}
          >
            <h3>Atlas Response</h3>
            <p>{response}</p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <LeadForm />
          </div>
        </>
      )}
    </main>
  );
}