"use client";

import { useState } from "react";
import type { Course } from "../types/course";
import { CalendarDays, Clock, GraduationCap, Timer } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CourseModal } from "./course-model";
import type React from "react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full h-full overflow-hidden bg-white flex flex-col">
        <div className="relative h-36 sm:h-40 md:h-48 w-full">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-2 sm:p-3 md:p-4 flex-grow flex flex-col">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 line-clamp-2">
            {course.title}
          </h3>
          <div className="space-y-1 sm:space-y-2 md:space-y-4 mb-2 sm:mb-3 md:mb-4 flex-grow">
            <CourseInfoItem
              icon={CalendarDays}
              label="START DATE"
              value={course.startDate}
            />
            <CourseInfoItem
              icon={Timer}
              label="DURATION"
              value={course.duration}
            />
            <CourseInfoItem
              icon={GraduationCap}
              label="STUDY MODE"
              value={course.studyMode}
            />
            <CourseInfoItem
              icon={Clock}
              label="WEEKLY STUDY"
              value={course.weeklyStudy}
            />
          </div>
          <Button
            variant="outline"
            className="w-full mt-auto text-xs sm:text-sm"
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

interface CourseInfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function CourseInfoItem({ icon: Icon, label, value }: CourseInfoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-emerald-500 flex-shrink-0" />
      <div>
        <p className="text-xs md:text-sm font-medium">{label}</p>
        <p className="text-xs md:text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
