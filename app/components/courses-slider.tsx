"use client";

import { useState } from "react";
import type { Course } from "../types/course";
import { CourseCard } from "./course-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursesSliderProps {
  courses: Course[];
}

export function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = courses.length - 3; // Show exactly 3 cards

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

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
      <div className="max-w-[1400px] mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(courses.length * 100) / 3}%`,
            }}
          >
            {courses.map((course) => (
              <div key={course.id} className="w-1/3 px-6">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: courses.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-emerald-500" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
