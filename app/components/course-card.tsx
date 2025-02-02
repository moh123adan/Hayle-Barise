"use client";

import { useState } from "react";
import type { Course } from "../types/course";
import { CalendarDays, Clock, GraduationCap, Timer } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CourseModal } from "./course-model";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full overflow-hidden bg-white">
        <div className="relative h-48 w-full">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4 line-clamp-2">
            {course.title}
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  Start Date
                </p>
                <p className="text-sm">{course.startDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Timer className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  Duration
                </p>
                <p className="text-sm">{course.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  Study Mode
                </p>
                <p className="text-sm">{course.studyMode}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  Weekly Study
                </p>
                <p className="text-sm">{course.weeklyStudy}</p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-6"
            onClick={() => setIsModalOpen(true)}
          >
            Read More
          </Button>
        </div>
      </Card>

      <CourseModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
