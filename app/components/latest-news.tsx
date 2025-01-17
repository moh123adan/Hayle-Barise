import Image from "next/image";
import Link from "next/link";
import { Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    date: "Mar 22, 2023",
    readTime: "1 min read",
    image: "/images/learn.png",
    title: "Learning at Home Effectively",
    views: 8,
    likes: 7,
  },
  {
    date: "Mar 22, 2023",
    readTime: "2 min read",
    image: "/images/teacher.png",
    title: "Get to Know Your Teachers",
    views: 2,
    likes: 8,
  },
  {
    date: "Mar 22, 2023",
    readTime: "2 min read",
    image: "/images/doctor.png",
    title: "The New Safety Regulations",
    views: 4,
    likes: 3,
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-[#1C1F2E]">
          LATEST NEWS
        </h2>
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 p-6">
                <div className="flex items-center gap-2 text-sm text-white">
                  <time className="font-medium">{item.date}</time>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="absolute bottom-16 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <div className="absolute bottom-6 flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <span>{item.likes}</span>
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
            <Link href="/news">Read All News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
