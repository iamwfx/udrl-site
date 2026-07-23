import type { Metadata } from "next";
import Image from "next/image";
import { courses } from "@/data/courses";

export const metadata: Metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-xs font-bold tracking-widest uppercase text-udrl-dark mb-10">
        COURSES
      </h1>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {courses.map((course) => (
          <div key={course.slug}>
            <div className="w-full aspect-video bg-udrl-border mb-4 overflow-hidden relative">
              {course.image && (
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <h2 className="text-sm font-bold text-udrl-blue mb-1">{course.title}</h2>
            <p className="text-xs text-udrl-gray mb-3">
              {course.number} · {course.institution} · {course.semester}
              {course.units && ` · ${course.units} units`}
            </p>
            <p className="text-sm text-udrl-gray leading-relaxed text-justify">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
