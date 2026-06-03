import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
title: "Benefactor Intelligence Network",
description:
"Research, Signals, Automation and AI Systems for the next generation of businesses.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en">
<body
style={{
margin: 0,
background: "#070707",
color: "white",
fontFamily: "Arial, sans-serif",
}}
>
<nav
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px 40px",
borderBottom: "1px solid #1f1f1f",
position: "sticky",
top: 0,
background: "#070707",
zIndex: 100,
}}
>
<h2 style={{ margin: 0 }}>
Benefactor Intelligence Network </h2>

```
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/blog">Research</Link>
        <Link href="/ai-tools">Systems</Link>
        <Link href="/resources">Automation</Link>
        <Link href="/newsletter">Signals</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>

    {children}
  </body>
</html>

);
}
