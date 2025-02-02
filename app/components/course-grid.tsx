import type { Course } from "../types/course";
import { CourseCard } from "./course-card";

interface CoursesGridProps {
  courses: Course[];
}

export function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <section className="py-12 px-4">
      <div className="text-center mb-12">
        <p className="text-emerald-500 font-medium mb-2">OUR POPULAR COURSES</p>
        <h2 className="text-3xl font-bold text-slate-900">
          Educational For Students
          <br />
          Popular Courses.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
