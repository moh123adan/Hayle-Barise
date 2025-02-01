"use client";

import Link from "next/link";
import {
  Book,
  Lightbulb,
  Users,
  Shield,
  Cpu,
  GraduationCap,
  Calendar,
  Clock,
  Eye,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Innovative Learning at Hayle Barise",
    excerpt:
      "Discover how our cutting-edge technical programs are shaping the future of education and empowering students with real-world skills.",
    icon: Lightbulb,
    date: "Apr 25, 2024",
    readTime: "2 min read",
    stats: { views: 12, comments: 3 },
  },
  {
    id: 2,
    title: "Meet Our Expert Faculty",
    excerpt:
      "Get to know the talented instructors behind Hayle Barise's success and their dedication to student growth and innovation.",
    icon: Users,
    date: "Apr 24, 2024",
    readTime: "3 min read",
    stats: { views: 8, comments: 2 },
  },
  {
    id: 3,
    title: "New Safety Protocols for Hands-On Training",
    excerpt:
      "Learn about the updated safety measures in place to ensure a secure and productive learning environment for all students.",
    icon: Shield,
    date: "Apr 23, 2024",
    readTime: "2 min read",
    stats: { views: 15, comments: 5 },
  },
  {
    id: 4,
    title: "Student Achievements Spotlight",
    excerpt:
      "Celebrating the outstanding accomplishments of our students in technical innovation and community projects.",
    icon: GraduationCap,
    date: "Apr 22, 2024",
    readTime: "4 min read",
    stats: { views: 20, comments: 7 },
  },
  {
    id: 5,
    title: "Registration Open for Technical Workshops",
    excerpt:
      "Join our upcoming workshops on robotics, AI, and cloud computing to enhance your technical skills and career prospects.",
    icon: Cpu,
    date: "Apr 21, 2024",
    readTime: "3 min read",
    stats: { views: 18, comments: 4 },
  },
  {
    id: 6,
    title: "Back to School: What's New at Hayle Barise",
    excerpt:
      "Explore the latest updates, programs, and opportunities available for students returning to campus this semester.",
    icon: Book,
    date: "Apr 20, 2024",
    readTime: "5 min read",
    stats: { views: 25, comments: 10 },
  },
];

export default function LatestNews() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-[#4c75ae] to-[#3bb995] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Stay informed about the latest developments and innovations at Hayle
            Barise Technical Development Center.
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-8 py-4">
            <Link
              href="#"
              className="text-[#4c75ae] hover:text-[#3bb995] transition-colors font-medium"
            >
              All Posts
            </Link>
            <Link
              href="#"
              className="text-[#4c75ae] hover:text-[#3bb995] transition-colors font-medium"
            >
              Latest News
            </Link>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#4c75ae]/10 rounded-full">
                      <post.icon className="h-6 w-6 text-[#4c75ae]" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 text-[#4c75ae] hover:text-[#3bb995] transition-colors">
                  <Link href="#">{post.title}</Link>
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.stats.comments}</span>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="text-[#3bb995] hover:text-[#4c75ae] p-0 h-auto flex items-center"
                  >
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
