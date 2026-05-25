
import "./globals.css";

export const metadata = {
  title: "Recipe Secrets",
  description: "Viral recipes, luxury food trends, celebrity meals and AI food tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0f0f0f",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
