"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const posts = [
  {
    id: 1,
    title: "Innovative Learning at Hayle Barise",
    excerpt:
      "Discover how our cutting-edge technical programs are shaping the future of education and empowering students with real-world skills.",
    image: "/images/learn.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 25, 2024",
      readTime: "2 min read",
    },
    stats: {
      views: 12,
      comments: 3,
    },
  },
  {
    id: 2,
    title: "Meet Our Expert Faculty",
    excerpt:
      "Get to know the talented instructors behind Hayle Barise's success and their dedication to student growth and innovation.",
    image: "/images/teacher.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 24, 2024",
      readTime: "3 min read",
    },
    stats: {
      views: 8,
      comments: 2,
    },
  },
  {
    id: 3,
    title: "New Safety Protocols for Hands-On Training",
    excerpt:
      "Learn about the updated safety measures in place to ensure a secure and productive learning environment for all students.",
    image: "/images/doctor.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 23, 2024",
      readTime: "2 min read",
    },
    stats: {
      views: 15,
      comments: 5,
    },
  },
  {
    id: 4,
    title: "Student Achievements Spotlight",
    excerpt:
      "Celebrating the outstanding accomplishments of our students in technical innovation and community projects.",
    image: "/images/student3.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 22, 2024",
      readTime: "4 min read",
    },
    stats: {
      views: 20,
      comments: 7,
    },
  },
  {
    id: 5,
    title: "Registration Open for Technical Workshops",
    excerpt:
      "Join our upcoming workshops on robotics, AI, and cloud computing to enhance your technical skills and career prospects.",
    image: "/images/student4.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 21, 2024",
      readTime: "3 min read",
    },
    stats: {
      views: 18,
      comments: 4,
    },
  },
  {
    id: 6,
    title: "Back to School: What's New at Hayle Barise",
    excerpt:
      "Explore the latest updates, programs, and opportunities available for students returning to campus this semester.",
    image: "/images/student5.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 20, 2024",
      readTime: "5 min read",
    },
    stats: {
      views: 25,
      comments: 10,
    },
  },
];

export default function LatestNews() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LATEST NEWS
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and
            innovations at Hayle Barise Technical Development Center.
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-8 py-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-purple-700 transition-colors font-medium"
            >
              All Posts
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-purple-700 transition-colors font-medium"
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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-[40%] h-64 md:h-auto">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <span>{post.author.name}</span>
                          <span>•</span>
                          <span>{post.author.date}</span>
                          <span>•</span>
                          <span>{post.author.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Share Post</DropdownMenuItem>
                        <DropdownMenuItem>Save for Later</DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-purple-700 transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      {post.stats.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      {post.stats.comments} comments
                    </div>
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}