"use client";

import { useState } from "react";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  async function generate() {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setOutput(data.output);
  }

  return (
    <main style={styles.container}>
      <h1>AI Generator</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={generate} style={styles.button}>
        Generate
      </button>

      <p style={{ marginTop: 20 }}>{output}</p>
    </main>
  );
}

const styles: any = {
  container: {
    padding: 40,
    background: "#0b0b0b",
    color: "white",
    minHeight: "100vh"
  },
  textarea: {
    width: "100%",
    height: 120,
    padding: 10
  },
  button: {
    marginTop: 10,
    padding: 12,
    background: "#7c3aed",
    color: "white",
    border: "none"
  }
};