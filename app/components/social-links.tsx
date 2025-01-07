import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#" className="text-gray-600 hover:text-gray-900">
        <Facebook className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-gray-900">
        <Twitter className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-gray-900">
        <Instagram className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-gray-900">
        <Youtube className="h-5 w-5" />
      </Link>
    </div>
  )
}

