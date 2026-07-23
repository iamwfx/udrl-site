import type { Metadata } from "next";
import Link from "next/link";
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
      <h1 className="text-xs font-bold tracking-widest uppercase text-udrl-dark mt-10 mb-10">
        NEWS
      </h1>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {newsItems.map((item, i) => (
          <div key={i}>
            <h2 className="text-sm font-bold mb-1 text-udrl-dark">{item.title}</h2>
            <p className="text-xs text-udrl-gray mb-2">{item.date}</p>
            <p className="text-sm text-udrl-gray leading-relaxed text-justify">{item.description}</p>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-udrl-blue hover:underline"
              >
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
