import { CourseCard } from "./course-card"
import Link from "next/link"
import { courses } from "../data/courses"

export default function CoursesSection() {
  return (
    <section className="bg-[#4c75ae] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center text-white">
          <h2 className="mb-3 text-4xl font-bold">Courses</h2>
          <p className="text-xl">
            Shaping the future through innovation at{" "}
            <Link href="https://www.facebook.com/haylebarise1/photos" className="font-semibold hover:underline">
              Hayle Barise Technical Development Center
            </Link>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

