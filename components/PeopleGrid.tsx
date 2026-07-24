import Image from "next/image";
import type { Person } from "@/data/people";

export default function PeopleGrid({ members }: { members: Person[] }) {
  return (
    <div className="flex flex-col gap-10">
      {members.map((person) => (
        <div key={person.name} className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          <div className="w-40 md:w-56 shrink-0 aspect-square overflow-hidden relative">
            {person.image ? (
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
                style={{ objectPosition: person.imagePosition ?? "top" }}
                sizes="224px"
              />
            ) : (
              <div className="w-full h-full bg-udrl-border flex items-center justify-center">
                <span className="text-2xl font-bold text-udrl-gray">{person.name[0]}</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-udrl-dark leading-tight">{person.name}</p>
            <p className="text-base text-udrl-gray leading-tight mb-2">{person.title}</p>
            {person.bio && (
              <p className="text-base text-udrl-gray leading-tight mb-2">{person.bio}</p>
            )}
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {person.email && (
                <a href={`mailto:${person.email}`} className="text-base text-udrl-blue hover:underline">
                  {person.email}
                </a>
              )}
              {person.website && (
                <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-base text-udrl-blue hover:underline">
                  Website
                </a>
              )}
              {person.cvUrl && (
                <a href={person.cvUrl} target="_blank" rel="noopener noreferrer" className="text-base text-udrl-blue hover:underline">
                  CV
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
