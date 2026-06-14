"use client";

import { useState } from "react";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  async function submitLead(e: any) {
    e.preventDefault();

    const form = new FormData(e.target);

    await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        whatsapp: form.get("whatsapp"),
        company: form.get("company"),
        budget: form.get("budget"),
        goal: form.get("goal"),
      }),
    });

    setSent(true);
  }

  if (sent) {
    return (
      <div
        style={{
          background: "#052e16",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        Lead Saved Successfully 🚀
      </div>
    );
  }

  return (
    <form onSubmit={submitLead}>
      <h2>Book Free AI Strategy Call</h2>

      <input
        name="name"
        placeholder="Name"
        required
        style={input}
      />

      <input
        name="email"
        placeholder="Email"
        required
        style={input}
      />

      <input
        name="whatsapp"
        placeholder="WhatsApp"
        style={input}
      />

      <input
        name="company"
        placeholder="Company"
        style={input}
      />

      <input
        name="budget"
        placeholder="Budget"
        style={input}
      />

      <textarea
        name="goal"
        placeholder="What do you want Atlas AI to build?"
        style={{
          ...input,
          minHeight: "120px",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#16a34a",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
        }}
      >
        Submit Lead
      </button>
    </form>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  background: "#111",
  color: "white",
  border: "1px solid #222",
  borderRadius: "10px",
};