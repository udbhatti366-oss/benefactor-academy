
import "./globals.css";

export const metadata = {
  title: "Recipe Secrets — Viral Recipes & Luxury Food Trends",

  description:
    "Discover viral recipes, luxury food trends, AI cooking tools and creator-focused food culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-black text-white">

        {children}

      </body>

    </html>
  );
}
