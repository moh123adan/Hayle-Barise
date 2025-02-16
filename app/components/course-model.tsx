"use client";

import type React from "react";

import type { Course } from "../types/course";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  const [enrollmentData, setEnrollmentData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enrollment submission here
    console.log("Enrollment data:", enrollmentData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 max-h-[90vh] overflow-hidden flex flex-col w-[95vw]">
        <DialogHeader className="p-0 sticky top-0 z-50 bg-white">
          <div className="relative h-[150px] sm:h-[200px] w-full">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-white p-1 sm:p-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            {course.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm font-medium">Start Date</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.startDate}
              </p>
            </div>
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm font-medium">Duration</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.duration}
              </p>
            </div>
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm font-medium">Program</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.program}
              </p>
            </div>
            <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm font-medium">Weekly Study</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.weeklyStudy}
              </p>
            </div>
          </div>

          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="summary" className="text-xs sm:text-sm">
                SUMMARY
              </TabsTrigger>
              <TabsTrigger value="details" className="text-xs sm:text-sm">
                DETAILS
              </TabsTrigger>
              <TabsTrigger value="modules" className="text-xs sm:text-sm">
                MODULES
              </TabsTrigger>
              <TabsTrigger value="enroll" className="text-xs sm:text-sm">
                ENROLL
              </TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.summary}
              </p>
            </TabsContent>
            <TabsContent value="details" className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.details}
              </p>
              {course.courseLeader && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold">Course Leader</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {course.courseLeader.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                    {course.courseLeader.description}
                  </p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="modules" className="mt-4 sm:mt-6">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {course.modules.map((module, index) => (
                  <li key={index}>- {module}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="enroll">
              <form
                onSubmit={handleEnrollSubmit}
                className="space-y-3 sm:space-y-4"
              >
                <Input
                  placeholder="Full Name"
                  value={enrollmentData.fullname}
                  onChange={(e) =>
                    setEnrollmentData((prev) => ({
                      ...prev,
                      fullname: e.target.value,
                    }))
                  }
                  required
                  className="h-10 sm:h-12 text-sm"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={enrollmentData.email}
                  onChange={(e) =>
                    setEnrollmentData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  className="h-10 sm:h-12 text-sm"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={enrollmentData.phone}
                  onChange={(e) =>
                    setEnrollmentData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  required
                  className="h-10 sm:h-12 text-sm"
                />
                <Input
                  placeholder="Address"
                  value={enrollmentData.address}
                  onChange={(e) =>
                    setEnrollmentData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  required
                  className="h-10 sm:h-12 text-sm"
                />
                <Button
                  type="submit"
                  className="w-full sm:w-24 h-10 sm:h-12 text-sm"
                >
                  Enroll
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
