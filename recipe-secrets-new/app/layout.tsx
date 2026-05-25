
import "./globals.css";

export const metadata = {
  title: "Recipe Secrets",
  description: "Recipe Secrets Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}