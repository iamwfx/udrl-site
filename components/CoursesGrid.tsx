"use client";

import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";

export default function CoursesGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
      {courses.map((course) => (
        <Link
          key={course.slug}
          href={`/courses/${course.slug}`}
          className="group text-left block"
        >
          <div className="w-full aspect-video bg-udrl-border mb-4 overflow-hidden relative">
            {course.image && (
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            )}
          </div>
          <h3 className="text-base font-bold text-udrl-blue group-hover:underline underline-offset-2">
            {course.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
