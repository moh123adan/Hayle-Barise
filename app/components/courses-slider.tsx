"use client";

import { useState, useEffect } from "react";
import type { Course } from "../types/course";
import { CourseCard } from "./course-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursesSliderProps {
  courses: Course[];
}

export function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = courses.length - slidesToShow;

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
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
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
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${(courses.length * 100) / slidesToShow}%`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className={`px-3 md:px-4 lg:px-6 w-full sm:w-1/${slidesToShow}`}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: courses.length - (slidesToShow - 1) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-emerald-500"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        )}
      </div>
    </section>
  );
}
