"use client";

import { useState, useEffect } from "react";
import type { Course } from "../types/course";
import { CourseCard } from "./course-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CoursesSliderProps {
  courses: Course[];
}

export function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const slidesToShow = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
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
    <section className="bg-[#4c75ae] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-10 text-center text-white">
          <h2 className="mb-2 sm:mb-3 text-3xl sm:text-4xl font-bold">
            Courses
          </h2>
          <p className="text-base sm:text-xl">
            Shaping the future through innovation at{" "}
            <Link
              href="https://www.facebook.com/haylebarise1/photos"
              className="font-semibold hover:underline"
            >
              Hayle Barise Technical Development Center
            </Link>
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto relative">
          {isSmallScreen ? (
            <div className="space-y-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / slidesToShow)
                    }%)`,
                    width: `${(courses.length * 100) / slidesToShow}%`,
                  }}
                >
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 lg:px-6"
                    >
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute -right-4 sm:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </Button>

              <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
                {Array.from({
                  length: courses.length - (slidesToShow - 1),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === index
                        ? "w-6 sm:w-8 bg-white"
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
