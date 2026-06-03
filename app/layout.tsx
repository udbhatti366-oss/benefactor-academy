import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Creator Academy",
  description: "Learn AI, automation and online income systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            borderBottom: "1px solid #222",
          }}
        >
          <h2>AI Creator Academy</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/ai-tools">AI Tools</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/newsletter">Newsletter</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}