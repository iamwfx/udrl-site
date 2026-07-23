import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems, getNewsBySlug } from "@/data/news";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getNewsBySlug(params.slug);
  if (!item) return {};
  return { title: item.title };
}

export default function NewsDetailPage({ params }: Props) {
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/#news"
        className="text-sm text-udrl-gray hover:text-udrl-dark underline underline-offset-4"
      >
        ← All news
      </Link>

      <div className="mt-10">
        <p className="text-base text-udrl-gray mb-2">{item.date}</p>
        <h1 className="text-3xl font-bold text-udrl-dark leading-snug mb-8">
          {item.title}
        </h1>

        <p className="text-base text-udrl-gray leading-tight mb-6">
          {item.description}
        </p>

        {item.details && (
          <p className="text-base text-udrl-gray leading-tight mb-6">
            {item.details}
          </p>
        )}

        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-udrl-blue hover:underline break-all"
          >
            {item.url}
          </a>
        )}
      </div>
    </div>
  );
}
