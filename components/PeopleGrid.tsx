"use client";

import Image from "next/image";
import { useState } from "react";
import type { Person } from "@/data/people";

export default function PeopleGrid({ members }: { members: Person[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {members.map((person) => {
        const isOpen = selected === person.name;
        return (
          <div key={person.name} className="flex flex-col items-center text-center gap-2">
            <button
              onClick={() => setSelected(isOpen ? null : person.name)}
              className="w-full aspect-square overflow-hidden relative group cursor-pointer"
              aria-label={isOpen ? `Close ${person.name}` : `View ${person.name}`}
            >
              {/* Photo */}
              <div className={`absolute inset-0 transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}>
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: person.imagePosition ?? "top" }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-udrl-border flex items-center justify-center">
                    <span className="text-2xl font-bold text-udrl-gray">{person.name[0]}</span>
                  </div>
                )}
                {person.bio && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-left">
                    Read bio →
                  </div>
                )}
              </div>

              {/* Bio overlay */}
              <div className={`absolute inset-0 bg-white p-3 flex flex-col justify-start overflow-y-auto transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                {person.bio && (
                  <p className="text-xs text-udrl-gray leading-tight text-left mb-3">{person.bio}</p>
                )}
                <div className="flex flex-col gap-1.5 items-start">
                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-udrl-blue hover:underline"
                    >
                      {person.email}
                    </a>
                  )}
                  {person.website && (
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-udrl-blue hover:underline"
                    >
                      Website
                    </a>
                  )}
                  {person.cvUrl && (
                    <a
                      href={person.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-udrl-blue hover:underline"
                    >
                      CV
                    </a>
                  )}
                </div>
              </div>
            </button>

            <p className={`text-base font-bold leading-tight transition-colors ${isOpen ? "text-udrl-blue" : "text-udrl-dark"}`}>
              {person.name}
            </p>
            <p className="text-base text-udrl-gray leading-tight">{person.title}</p>
          </div>
        );
      })}
    </div>
  );
}
