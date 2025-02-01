import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "../data/courses"; // Adjust the import path as needed

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/*
        Top Section / Banner
        Updated with a gradient background and modern typography
      */}
      <section className="bg-gradient-to-r from-[#3bb995] to-[#2d9175] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">ACADEMICS AT HAYLE BARISE</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering the next generation of innovators, creators, and leaders
            through cutting-edge technical education and hands-on learning.
          </p>
        </div>
      </section>

      {/*
        Grid with the subjects
        Updated with a modern card design and hover effects
      */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#4c75ae]">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800">Modules:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {course.modules.map((module, index) => (
                        <li key={index}>{module}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800">
                      Requirements:
                    </h3>
                    <p className="text-gray-600">{course.requirements}</p>
                  </div>
                  <Button className="w-full bg-[#4c75ae] hover:bg-[#42689f]">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
