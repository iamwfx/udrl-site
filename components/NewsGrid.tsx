"use client";

import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/data/news";

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="columns-1 md:columns-2 gap-x-12 [column-fill:_balance]">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/news/${item.slug}`}
          className="group block break-inside-avoid mb-8"
        >
          {item.image && (
            <div className="w-full aspect-video relative overflow-hidden mb-3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
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
