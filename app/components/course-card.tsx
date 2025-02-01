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
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{course.title}</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">START DATE</p>
              <p className="text-sm text-muted-foreground">
                {course.startDate}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">DURATION</p>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">STUDY MODE</p>
              <p className="text-sm text-muted-foreground">
                {course.studyMode}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">WEEKLY STUDY</p>
              <p className="text-sm text-muted-foreground">
                {course.weeklyStudy}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
