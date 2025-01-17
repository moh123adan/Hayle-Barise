import Image from "next/image";
import Link from "next/link";
import { Award, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const engineeringHighlights = [
  {
    date: "Jun 15, 2024",
    category: "Electrical Engineering",
    image: "/images/heyle5.png",
    title: "Students Develop Innovative Solar Power System",
    impact: 500,
    teamSize: 5,
  },
  {
    date: "Jun 10, 2024",
    category: "Civil Engineering",
    image: "/images/heyle6.png",
    title: "Sustainable Bridge Design Wins National Competition",
    impact: 1000,
    teamSize: 8,
  },
  {
    date: "Jun 5, 2024",
    category: "Mechanical Engineering",
    image: "/images/heyle7.png",
    title: "New Energy-Efficient Engine Prototype Unveiled",
    impact: 300,
    teamSize: 6,
  },
];

export default function EngineeringHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-[#1C1F2E]">
          ENGINEERING HIGHLIGHTS
        </h2>
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engineeringHighlights.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 text-sm text-white">
                  <time className="font-medium">{item.date}</time>
                  <span>•</span>
                  <span className="bg-[#3bb995] px-2 py-1 text-xs font-semibold rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="absolute bottom-16 text-2xl font-bold text-white group-hover:underline">
                  {item.title}
                </h3>
                <div className="absolute bottom-6 flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#3bb995]" />
                    <span>Impact: {item.impact}+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#3bb995]" />
                    <span>Team: {item.teamSize}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            className="bg-[#3bb995] px-8 py-6 text-white hover:bg-[#268167]"
          >
            <Link href="/engineering-highlights">Explore All Highlights</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
