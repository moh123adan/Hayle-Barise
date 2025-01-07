"use client"

import Image from "next/image"
import Link from "next/link"
import { MoreVertical, Heart, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data - replace with your actual data
const posts = [
  {
    id: 1,
    title: "Learning at Home Effectively",
    excerpt: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 25, 2024",
    },
    stats: {
      likes: 3,
      comments: 2,
    }
  },
  {
    id: 2,
    title: "Get to Know Your Teachers",
    excerpt: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 24, 2024",
    },
    stats: {
      likes: 5,
      comments: 3,
    }
  },
  {
    id: 3,
    title: "The New Safety Regulations",
    excerpt: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 23, 2024",
    },
    stats: {
      likes: 4,
      comments: 2,
    }
  },
  {
    id: 4,
    title: "Student Council Election Updates",
    excerpt: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "Apr 22, 2024",
    },
    stats: {
      likes: 6,
      comments: 4,
    }
  },
]

export default function LatestNews() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#1a1b41]">
        LATEST NEWS
      </h1>
      
      <div className="flex justify-center gap-8 mb-8">
        <Link 
          href="#" 
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          All Posts
        </Link>
        <Link 
          href="#" 
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Latest News
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-gray-600">
                    <p>{post.author.name}</p>
                    <p>{post.author.date}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
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

              <h2 className="text-xl font-semibold mb-2">
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                    <Heart className="h-4 w-4" />
                    {post.stats.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    {post.stats.comments}
                  </button>
                </div>
                <Link 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

