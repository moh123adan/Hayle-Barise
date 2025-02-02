"use client";

import { useState } from "react";
import type { Course } from "../types/course";
import { CalendarDays, Clock, GraduationCap, Timer } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CourseModal } from "./course-model";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 md:p-8 flex-grow">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 line-clamp-2">
            {course.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium">START DATE</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {course.startDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium">DURATION</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {course.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium">STUDY MODE</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {course.studyMode}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium">WEEKLY STUDY</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {course.weeklyStudy}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
          <Button
            variant="outline"
            className="w-full text-sm sm:text-base py-4 sm:py-6"
            onClick={() => setIsModalOpen(true)}
          >
            Read More
          </Button>
        </CardFooter>
      </Card>

      <CourseModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
