"use client";

import { useState, useEffect } from "react";
import type { Course } from "../types/course";
import { CoursesGrid } from "./course-grid";
import { CoursesSlider } from "./courses-slider";

interface ResponsiveCoursesProps {
  courses: Course[];
}

export function ResponsiveCourses({ courses }: ResponsiveCoursesProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <p className="text-emerald-500 font-medium mb-2">OUR POPULAR COURSES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Educational For Students
          <br />
          Popular Courses.
        </h2>
      </div>

      {isLargeScreen ? (
        <CoursesSlider courses={courses} />
      ) : (
        <CoursesGrid courses={courses} />
      )}
    </section>
  );
}
