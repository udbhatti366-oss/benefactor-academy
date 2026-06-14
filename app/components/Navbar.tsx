"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "20px 40px",
        backdropFilter: "blur(20px)",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#22c55e",
          fontWeight: 900,
        }}
      >
        Atlas AI OS
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/agents">Agents</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}