import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-xs font-bold tracking-widest uppercase text-udrl-dark mb-10">
        PROJECTS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sorted.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col"
          >
            <div className="w-full aspect-square bg-udrl-border mb-3 overflow-hidden relative">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )}
            </div>
            <span className="text-xs text-udrl-gray">{project.year}</span>
            <h2 className="text-sm text-udrl-blue group-hover:underline underline-offset-2 leading-snug">
              {project.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
