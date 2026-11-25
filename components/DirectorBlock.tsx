import Image from "next/image";
import type { Person } from "@/data/people";

export default function DirectorBlock({ director }: { director: Person }) {
  return (
    <div className="grid md:grid-cols-4 gap-10 mb-12">
      <div className="md:col-span-3">
        <p
          className="text-base text-udrl-gray leading-tight text-justify mb-6"
          dangerouslySetInnerHTML={{ __html: director.bio ?? "" }}
        />
        <div className="flex flex-wrap gap-3">
          {director.cvUrl && (
            <a
              href={director.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
            >
              CV
            </a>
          )}
          {director.scholarUrl && (
            <a
              href={director.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
            >
              Google Scholar
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start md:col-span-1">
        {director.image && (
          <div className="w-full aspect-square overflow-hidden relative">
            <Image
              src={director.image}
              alt={director.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        )}
        <div className="text-center w-full">
          <p className="text-lg font-bold text-udrl-dark leading-tight">{director.name}</p>
          <p className="text-base text-udrl-gray leading-tight">Director, Urban Data Research Lab</p>
        </div>
      </div>
    </div>
  );
}
