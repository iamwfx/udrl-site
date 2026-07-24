import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const RECENT_NEWS_COUNT = 6;
import ProjectsGrid from "@/components/ProjectsGrid";
import PeopleGrid from "@/components/PeopleGrid";
import CoursesGrid from "@/components/CoursesGrid";
import NewsGrid from "@/components/NewsGrid";
import { courses } from "@/data/courses";
import { publications } from "@/data/publications";
import { newsItems } from "@/data/news";
import { people, pastMembers } from "@/data/people";

const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
const sortedPublications = [...publications].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
const director = people.find((p) => p.director);
const currentMembers = people.filter((p) => p.current && !p.director);

const researchAreas = [
  {
    title: "Measuring Neighborhood Dynamics with Big Data",
    description:
      "Much of how researchers, advocates, and policy-makers understand the geography of opportunity is largely based on the residential neighborhood context. To study neighborhood dynamics, especially at a large scale, we have traditionally relied on administrative data such as those produced by the U.S. Census Bureau. This area of research aims to think, measure, and generate data products to describe the wide range of activities and socio-spatial dynamics that make up how people experience their social and environmental context and how these can change across the day or seasonally. We investigate the possibilities of using novel, unstructured data sources such as newer iterations of cell phone location data, in a ground-truthed and statistically rigorous manner, to shift how we think about context in a more holistic, representative way.",
    image: "/images/research-big-data.png",
    objectPosition: "center",
  },
  {
    title: "Tracing the Legacies of 20th-Century Housing and Urban Policy",
    description:
      "Public policy in the U.S. is at a critical turning point where the need to address historical and ongoing housing discrimination calls for more nuanced understandings of longstanding spatial inequalities and their impacts on residential segregation and stratification. We study large-scale historical housing discrimination through such as practices, federal level redlining and urban renewal in the United States, to understand how historical housing policies, practices, institutions, and technologies have influenced urban inequality.",
    image: "/images/research-legacies.png",
    objectPosition: "center",
  },
  {
    title: "Evaluating the Effectiveness of Housing Policy with Novel Data",
    description:
      "Housing policy, from inclusionary zoning to voucher programs to public housing redevelopment, is often designed around assumptions about how households move, integrate, and access opportunity. This area of research draws on new data sources, including anonymized human mobility data, historical administrative records, and novel residential mobility data, to test whether these programs achieve their intended effects. We ask whether siting decisions actually produce integration, whether residents displaced by redevelopment programs go on to attain higher-opportunity neighborhoods, and how the geography of policy exposure shapes long-run outcomes.",
    image: "/images/research-housing-policy.jpg",
    objectPosition: "center",
    credit: {
      text: "Cabrini-Green, Chicago. Photo by LHOON, CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Derelict_Cabrini-Green_housing_project_(2285577555).jpg",
    },
  },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* HOME */}
      <section id="home" className="pt-16 md:pt-20 pb-6">
        <h1 className="text-3xl md:text-4xl leading-snug text-udrl-dark text-justify w-full">
          The Urban Data Research Lab uses novel big data and spatial data
          science to understand urban inequality at the scale of the
          neighborhood in order to inform policy and opportunities for
          more equitable cities.
        </h1>
      </section>

      {/* Research Areas */}
      <section className="pb-0">
        <details className="group">
          <summary className="text-base text-udrl-gray mb-6 cursor-pointer list-none flex flex-col items-center gap-1 hover:text-udrl-dark transition-colors text-center">
            <span>Learn more about our primary areas of research</span>
            <span className="inline-block transition-transform group-open:rotate-180 text-lg leading-none">▾</span>
          </summary>
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            {researchAreas.map((area) => (
              <div key={area.title}>
                {area.image && (
                  <div className="w-full aspect-video relative overflow-hidden mb-1">
                    <Image src={area.image} alt={area.title} fill className="object-cover" style={{ objectPosition: area.objectPosition }} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                )}
                {area.credit && (
                  <p className="text-xs text-udrl-gray mb-3">
                    <a
                      href={area.credit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-udrl-dark"
                    >
                      {area.credit.text}
                    </a>
                  </p>
                )}
                <h3 className="text-base font-bold mb-3 text-udrl-dark">{area.title}</h3>
                <p className="text-base text-udrl-gray leading-tight text-justify">{area.description}</p>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* NEWS */}
      <section id="news" className="pt-16 pb-16 scroll-mt-20">
        <h2 className="text-xl font-bold tracking-widest uppercase text-udrl-dark mb-8">
          NEWS
        </h2>
        <NewsGrid items={newsItems.slice(0, RECENT_NEWS_COUNT)} />
        {newsItems.length > RECENT_NEWS_COUNT && (
          <div className="mt-10">
            <Link
              href="/news"
              className="text-base text-udrl-dark hover:text-udrl-blue underline underline-offset-4"
            >
              See all news →
            </Link>
          </div>
        )}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 scroll-mt-20">
        <h2 className="text-xl font-bold tracking-widest uppercase text-udrl-dark mb-8">
          PROJECTS
        </h2>
        <ProjectsGrid projects={sortedProjects} />
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="py-16 scroll-mt-20">
        <h2 className="text-xl font-bold tracking-widest uppercase text-udrl-dark mb-8">
          PUBLICATIONS
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {sortedPublications.map((pub, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold leading-snug mb-0.5 text-udrl-dark">
                {pub.title}
              </h3>
              <p className="text-sm text-udrl-gray leading-snug">{pub.authors}</p>
              <p className="text-sm text-udrl-gray italic leading-snug">
                {pub.journal}{pub.year && `, ${pub.year}`}
              </p>
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-udrl-blue hover:underline break-all leading-snug block"
                >
                  {pub.doi}
                </a>
              )}
              {pub.githubUrl && (
                <a
                  href={pub.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-udrl-blue hover:underline break-all leading-snug block"
                >
                  {pub.githubUrl}
                </a>
              )}
              {pub.tags && pub.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-udrl-border text-udrl-gray">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-16 scroll-mt-20">
        <h2 className="text-xl font-bold tracking-widest uppercase text-udrl-dark mb-8">
          COURSES
        </h2>
        <CoursesGrid courses={courses} />
      </section>

      {/* PEOPLE */}
      <section id="people" className="py-16 scroll-mt-20">
        <h2 className="text-xl font-bold tracking-widest uppercase text-udrl-dark mb-8">
          PEOPLE
        </h2>
        {director && (
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-3">
              <p
                className="text-base text-udrl-gray leading-tight text-justify mb-6"
                dangerouslySetInnerHTML={{ __html: director.bio ?? "" }}
              />
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.dropbox.com/scl/fi/fazva78uwhr3uwl80ef1l/CV_wenfeixu.pdf?rlkey=exdxmt1z49c20iharo16r7cy8&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
                >
                  CV
                </a>
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
                  <Image src={director.image} alt={director.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
              )}
              <div className="text-center w-full">
                <p className="text-lg font-bold text-udrl-dark leading-tight">{director.name}</p>
                <p className="text-base text-udrl-gray leading-tight">Director, Urban Data Research Lab</p>
              </div>
            </div>
          </div>
        )}
        {currentMembers.length > 0 && (
          <div className="mb-8">
            <h3 className="text-base font-bold uppercase tracking-widest text-udrl-dark mb-6">
              Current People
            </h3>
            <PeopleGrid members={currentMembers} />
          </div>
        )}
        <div>
          <h3 className="text-base font-bold uppercase tracking-widest text-udrl-dark mb-4">
            Past People
          </h3>
          <p className="text-base text-udrl-gray leading-tight">{pastMembers.join(", ")}</p>
        </div>
      </section>

    </div>
  );
}
