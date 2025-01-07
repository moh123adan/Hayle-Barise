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
    title: "Learning at Home Effectively",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/images/learn.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 25, 2024",
      readTime: "1 min read",
    },
    stats: {
      views: 4,
      comments: 0,
    },
  },
  {
    id: 2,
    title: "Get to Know Your Teachers",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/images/teacher.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 24, 2024",
      readTime: "2 min read",
    },
    stats: {
      views: 2,
      comments: 0,
    },
  },
  {
    id: 3,
    title: "The New Safety Regulations",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/images/doctor.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 23, 2024",
      readTime: "3 min read",
    },
    stats: {
      views: 3,
      comments: 2,
    },
  },
  {
    id: 4,
    title: "Student Council Election Updates",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/images/student3.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 22, 2024",
      readTime: "2 min read",
    },
    stats: {
      views: 5,
      comments: 1,
    },
  },
  {
    id: 5,
    title: "Registration for Science Fair Is Now Open",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/images/student4.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 21, 2024",
      readTime: "2 min read",
    },
    stats: {
      views: 3,
      comments: 0,
    },
  },
  {
    id: 6,
    title: "Back to School - All You Need to Know",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/images/student5.png",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 20, 2024",
      readTime: "3 min read",
    },
    stats: {
      views: 8,
      comments: 3,
    },
  },
];

export default function LatestNews() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a1b41] py-12">
        LATEST NEWS
      </h1>

      <div className="bg-[#1a1b41]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 py-4">
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              All Posts
            </Link>
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Latest News
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-[45%] h-64 md:h-auto">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
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

                  <h2 className="text-2xl font-semibold mb-3">
                    <Link
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

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
