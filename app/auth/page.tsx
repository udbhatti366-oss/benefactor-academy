"use client";

import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");

  return (
    <main style={styles.container}>
      <h1>AI OS Login</h1>

      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <button style={styles.button}>
        Continue
      </button>
    </main>
  );
}

const styles: any = {
  container: {
    padding: 40,
    textAlign: "center",
    background: "#0b0b0b",
    color: "white",
    minHeight: "100vh"
  },
  input: {
    padding: 12,
    width: 250,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    padding: 12,
    background: "#7c3aed",
    color: "white",
    border: "none"
  }
};