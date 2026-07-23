"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group flex flex-col text-center"
        >
          <div className="w-full aspect-square bg-udrl-border mb-3 overflow-hidden relative">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            )}
          </div>
          <h3 className="text-base font-bold text-udrl-blue group-hover:underline underline-offset-2 leading-snug">
            {project.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
