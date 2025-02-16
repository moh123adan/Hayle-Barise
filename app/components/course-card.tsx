"use client";

import type React from "react";

import type { Course } from "../types/course";
import { CalendarDays, Clock, GraduationCap, Timer } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { CourseModal } from "./course-model";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={
              course.image ||
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ysR9YWYmBE4muAvRXTUMpX4OZuWePS.png"
            }
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            {course.title}
          </h3>
          <div className="space-y-4 mb-6 flex-grow">
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
              value={course.program}
            />
            <CourseInfoItem
              icon={Clock}
              label="WEEKLY STUDY"
              value={course.weeklyStudy}
            />
          </div>
          <Button
            variant="outline"
            className="w-full"
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
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-900">{value}</p>
      </div>
    </div>
  );
}
