import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import type { Course } from "@/data/courses";

interface Props {
  params: { slug: string };
}

function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return { title: course.title };
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/#courses"
        className="text-sm text-udrl-gray hover:text-udrl-dark underline underline-offset-4"
      >
        ← All courses
      </Link>

      <div className="mt-10 grid md:grid-cols-2 gap-12">
        {/* Left: image + meta */}
        <div>
          {course.image && (
            <div className="w-full aspect-video overflow-hidden relative mb-6">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          )}

          <div className="space-y-1 mb-6 text-base text-udrl-gray leading-tight">
            {course.number && <p><span className="font-bold text-udrl-dark">Course</span> {course.number}</p>}
            {course.institution && <p><span className="font-bold text-udrl-dark">Institution</span> {course.institution}</p>}
            {course.semester && <p><span className="font-bold text-udrl-dark">Semester</span> {course.semester}</p>}
            {course.schedule && <p><span className="font-bold text-udrl-dark">Schedule</span> {course.schedule}</p>}
            {course.units && <p><span className="font-bold text-udrl-dark">Units</span> {course.units}</p>}
            {course.location && <p><span className="font-bold text-udrl-dark">Location</span> {course.location}</p>}
          </div>

          <div className="flex flex-wrap gap-3">
            {course.tutorialsUrl && (
              <a
                href={course.tutorialsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
              >
                Tutorials &amp; Materials →
              </a>
            )}
            {course.practitionerSeriesUrl && (
              <a
                href={course.practitionerSeriesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-udrl-border px-4 py-1.5 text-udrl-dark hover:border-udrl-dark transition-colors"
              >
                Practitioner Talk Series →
              </a>
            )}
          </div>
        </div>

        {/* Right: title + description */}
        <div>
          <h1 className="text-3xl font-bold text-udrl-dark leading-snug mb-6">
            {course.title}
          </h1>
          {course.description.split("\n\n").map((para, i) => (
            <p key={i} className="text-base text-udrl-gray leading-tight mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
