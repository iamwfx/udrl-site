import type { Metadata } from "next";
import Link from "next/link";
import NewsGrid from "@/components/NewsGrid";
import { newsItems } from "@/data/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/#news"
        className="text-sm text-udrl-gray hover:text-udrl-dark underline underline-offset-4"
      >
        ← Back to home
      </Link>
      <h1 className="text-xl font-bold tracking-widest uppercase text-udrl-dark mt-10 mb-8">
        NEWS
      </h1>
      <NewsGrid items={newsItems} />
    </div>
  );
}
