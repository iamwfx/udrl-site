import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Urban Data Research Lab",
    template: "%s | Urban Data Research Lab",
  },
  description:
    "The Urban Data Research Lab uses novel big data and spatial data science to understand urban inequality at the scale of the neighborhood in order to inform housing policy and opportunities for more equitable cities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-cream text-udrl-dark antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
