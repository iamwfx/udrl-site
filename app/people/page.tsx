import type { Metadata } from "next";
import { people, pastMembers } from "@/data/people";

export const metadata: Metadata = { title: "People" };

const director = people.find((p) => p.director);
const currentMembers = people.filter((p) => p.current && !p.director);

export default function PeoplePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-xs font-bold tracking-widest uppercase text-udrl-dark mb-10">
        PEOPLE
      </h1>

      {/* Director */}
      {director && (
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              {director.bio && (
                <p className="text-sm text-udrl-gray leading-relaxed text-justify mb-6">
                  {director.bio}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {director.email && (
                  <a
                    href={`mailto:${director.email}`}
                    className="text-sm border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
                  >
                    {director.email}
                  </a>
                )}
                <a
                  href="#"
                  className="text-sm border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
                >
                  CV
                </a>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-lg font-bold text-udrl-dark">{director.name}</h2>
              <p className="text-sm text-udrl-gray">{director.title}</p>
            </div>
          </div>
        </section>
      )}

      {/* Current Members */}
      {currentMembers.length > 0 && (
        <section className="mb-12 border-t border-udrl-border pt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-udrl-dark mb-8">
            Current Members
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentMembers.map((person) => (
              <div key={person.name}>
                <h3 className="text-sm font-bold text-udrl-dark">{person.name}</h3>
                <p className="text-sm text-udrl-gray mt-0.5">{person.title}</p>
                {person.bio && (
                  <p className="text-sm text-udrl-gray mt-2 leading-relaxed">{person.bio}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Past Members */}
      <section className="border-t border-udrl-border pt-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-udrl-dark mb-6">
          Past Members
        </h2>
        <p className="text-sm text-udrl-gray">
          {pastMembers.join(", ")}
        </p>
      </section>
    </div>
  );
}
