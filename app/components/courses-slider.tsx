"use client";

import { useState, useEffect, useCallback } from "react";
import type { Course } from "../types/course";
import { CourseCard } from "./course-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursesSliderProps {
  courses: Course[];
}

export function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slidesPerView = isSmallScreen ? 1 : 3;
  const maxIndex = Math.max(0, courses.length - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        nextSlide();
      }
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, nextSlide]);

  return (
    <section className="bg-[#4c75ae] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center text-white">
          <h2 className="mb-3 text-4xl font-bold">Courses</h2>
          <p className="text-lg">
            Shaping the future through innovation at{" "}
            <span className="font-medium">
              Hayle Barise Technical Development Center
            </span>
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto relative">
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesPerView)
                }%)`,
                width: `${(courses.length * 100) / slidesPerView}%`,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`w-full ${isSmallScreen ? "flex-shrink-0" : ""}`}
                  style={{ flex: `0 0 ${100 / slidesPerView}%` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg transition-opacity hover:bg-gray-100 opacity-100"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg transition-opacity hover:bg-gray-100 opacity-100"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-white" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
