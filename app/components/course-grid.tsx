import type { Course } from "../types/course";
import { CourseCard } from "./course-card";

interface CoursesGridProps {
  courses: Course[];
}

export function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
