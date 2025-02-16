"use client"

import { useState, useEffect } from "react"
import type { Course } from "../types/course"
import { CourseCard } from "./course-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CoursesSliderProps {
  courses: Course[]
}

export function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, courses.length - 3)
  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <section className="bg-[#4c75ae] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center text-white">
          <h2 className="mb-3 text-4xl font-bold">Courses</h2>
          <p className="text-lg">
            Shaping the future through innovation at{" "}
            <span className="font-medium">Hayle Barise Technical Development Center</span>
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto relative">
          {isSmallScreen ? (
            <div className="space-y-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <>
              <div className="overflow-hidden mx-12">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-6"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                    width: `${(courses.length * 100) / 3}%`,
                  }}
                >
                  {courses.map((course) => (
                    <div key={course.id} className="w-full">
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className={`absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg transition-opacity ${
                  canGoPrev ? "hover:bg-gray-100 opacity-100" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={prevSlide}
                disabled={!canGoPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg transition-opacity ${
                  canGoNext ? "hover:bg-gray-100 opacity-100" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={nextSlide}
                disabled={!canGoNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="flex justify-center items-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(courses.length / 3) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx * 3)}
                    className={`h-2 rounded-full transition-all ${
                      Math.floor(currentIndex / 3) === idx ? "w-8 bg-white" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

