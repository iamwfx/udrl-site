"use client";

import Link from "next/link";
import type { NewsItem } from "@/data/news";

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/news/${item.slug}`}
          className="group block"
        >
          <p className="text-base text-udrl-gray mb-1">{item.date}</p>
          <h3 className="text-base mb-2 text-udrl-dark group-hover:text-udrl-blue transition-colors">
            {item.title}
          </h3>
          <p className="text-base font-normal text-udrl-gray leading-tight">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
