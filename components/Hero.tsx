"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px",
      }}
    >
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            style={{
              color: "#22c55e",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            AI Workforce • Agent Network • Business OS
          </div>

          <h1
            style={{
              fontSize: "90px",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Atlas
            <br />
            AI OS
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "30px auto",
              fontSize: "22px",
              color: "#cfcfcf",
            }}
          >
            The AI Operating System For Modern
            Companies.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Link href="/search">
              <button
                style={{
                  background: "#22c55e",
                  color: "white",
                  border: "none",
                  padding: "16px 28px",
                  borderRadius: "12px",
                }}
              >
                Launch Atlas
              </button>
            </Link>

            <Link href="/agents">
              <button
                style={{
                  background: "#111",
                  color: "white",
                  border: "1px solid #333",
                  padding: "16px 28px",
                  borderRadius: "12px",
                }}
              >
                View Agents
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}