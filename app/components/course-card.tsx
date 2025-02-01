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

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6">{course.title}</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">START DATE</p>
              <p className="text-sm text-muted-foreground">
                {course.startDate}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Timer className="h-6 w-6 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">DURATION</p>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">STUDY MODE</p>
              <p className="text-sm text-muted-foreground">
                {course.studyMode}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">WEEKLY STUDY</p>
              <p className="text-sm text-muted-foreground">
                {course.weeklyStudy}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-8">
        <Button variant="outline" className="w-full text-base py-6">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
