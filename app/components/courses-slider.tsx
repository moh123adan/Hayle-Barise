"use client";

import { useState } from "react";
import type { Course } from "../types/course";
import { CourseCard } from "./course-card";

interface CoursesSliderProps {
  courses: Course[];
}

export function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-emerald-500 font-medium mb-2">OUR POPULAR COURSES</p>
        <h2 className="text-4xl font-bold text-slate-900">
          Educational For Students
          <br />
          Popular Courses.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-emerald-500"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
