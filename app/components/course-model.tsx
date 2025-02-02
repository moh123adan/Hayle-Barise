"use client";

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
              <Image
                src={course.author.image || "/placeholder.svg"}
                alt={course.author.name}
                width={32}
                height={32}
                className="mx-auto mb-2 rounded-full"
              />
              <p className="text-xs sm:text-sm font-medium">
                {course.author.name}
              </p>
            </div>
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
              <p className="text-xs sm:text-sm font-medium">Study Mode</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.studyMode}
              </p>
            </div>
          </div>

          <Tabs defaultValue="module" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="module" className="text-xs sm:text-sm">
                MODULE
              </TabsTrigger>
              <TabsTrigger value="summary" className="text-xs sm:text-sm">
                SUMMARY
              </TabsTrigger>
              <TabsTrigger value="requirements" className="text-xs sm:text-sm">
                REQUIREMENTS
              </TabsTrigger>
              <TabsTrigger value="enrole" className="text-xs sm:text-sm">
                ENROLE
              </TabsTrigger>
            </TabsList>
            <TabsContent value="module" className="mt-4 sm:mt-6">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {course.modules.map((module, index) => (
                  <li key={index}>- {module}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="summary">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.summary}
              </p>
            </TabsContent>
            <TabsContent value="requirements">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {course.requirements}
              </p>
            </TabsContent>
            <TabsContent value="enrole">
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
                  Enrole
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
