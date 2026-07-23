import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: project.title };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/#projects"
        className="text-sm text-udrl-gray hover:text-udrl-dark underline underline-offset-4"
      >
        ← All projects
      </Link>

      <div className="mt-10 grid md:grid-cols-2 gap-12">
        {/* Left column: image + metadata */}
        <div>
          {project.image && (
            <div className="w-full aspect-square overflow-hidden relative mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          )}

          {/* Project-level tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-udrl-border text-udrl-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {(project.paperUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-udrl-dark px-4 py-1.5 hover:bg-udrl-dark hover:text-white transition-colors"
                >
                  Read Paper →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-udrl-border px-4 py-1.5 hover:border-udrl-dark transition-colors"
                >
                  GitHub →
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right column: title + description */}
        <div>
          <h1 className="text-3xl font-bold text-udrl-dark leading-snug mb-6">
            {project.title}
          </h1>
          {project.longDescription.split("\n\n").map((para, i) => (
            <p key={i} className="text-base text-udrl-gray leading-tight mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Papers */}
      {project.papers && project.papers.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-udrl-dark mb-6">
            Publications
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {project.papers.map((paper, i) => (
              <div key={i}>
                <p className="text-base font-bold text-udrl-dark leading-tight mb-0.5">
                  {paper.title}
                </p>
                <p className="text-base text-udrl-gray leading-tight mb-0.5">
                  {paper.authors}
                </p>
                <p className="text-base text-udrl-gray italic leading-tight mb-1">
                  {paper.journal}, {paper.year}
                </p>
                {paper.doi && (
                  <a
                    href={paper.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-udrl-blue hover:underline break-all block mb-1.5"
                  >
                    {paper.doi}
                  </a>
                )}
                {!paper.doi && paper.draftAvailable && (
                  <span className="text-sm text-udrl-gray italic block mb-1.5">
                    Draft available upon request
                  </span>
                )}
                {paper.githubUrl && (
                  <a
                    href={paper.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-udrl-blue hover:underline break-all block mb-1.5"
                  >
                    {paper.githubUrl}
                  </a>
                )}
                {paper.tags && paper.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-udrl-border text-udrl-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* In the media */}
      {project.media && project.media.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-udrl-dark mb-6">
            In the Media
          </h2>
          <ul className="space-y-1.5">
            {project.media.map((m, i) => (
              <li key={i} className="text-base text-udrl-gray leading-tight">
                {m.url ? (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-udrl-blue hover:underline"
                  >
                    {m.outlet}
                  </a>
                ) : (
                  <span className="text-udrl-dark">{m.outlet}</span>
                )}
                {m.note && <span className="text-udrl-gray"> — {m.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
