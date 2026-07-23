import type { Metadata } from "next";
import { publications } from "@/data/publications";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-xs font-bold tracking-widest uppercase text-udrl-dark mb-10">
        PUBLICATIONS
      </h1>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {sorted.map((pub, i) => (
          <div key={i}>
            <h2 className="text-sm font-semibold leading-snug mb-1 text-udrl-dark">
              {pub.title}
            </h2>
            <p className="text-xs text-udrl-gray mb-0.5">{pub.authors}</p>
            <p className="text-xs text-udrl-gray italic mb-1">
              {pub.journal}
              {pub.year && `, ${pub.year}`}
            </p>
            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-udrl-blue hover:underline block truncate"
              >
                {pub.doi}
              </a>
            )}
            {pub.githubUrl && (
              <a
                href={pub.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-udrl-blue hover:underline block truncate"
              >
                {pub.githubUrl}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
