"use client"

import Link from "next/link"
import { Menu, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "./logo"
import { SearchBox } from "./search"
import { SocialLinks } from "./social-links"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Students", href: "/students" },
  { name: "Parents", href: "/parents" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-white p-0">
              <div className="flex h-20  items-center border-b px-6">
                <Logo />
              </div>
              <nav className="px-2 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex px-4 py-3 text-sm transition-colors hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="mb-4">
                  <SearchBox />
                </div>
                <div className="flex items-center justify-between">
                  <SocialLinks />
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Log In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Search Box */}
          <div className="hidden lg:block">
            <SearchBox />
          </div>

          {/* Logo - Always Visible */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
            <Logo />
          </div>

          {/* Desktop Social Links & Login */}
          <div className="hidden items-center gap-6 lg:flex">
            <SocialLinks />
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Log In
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden bg-[#1C1F2E] lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-4 text-sm text-white transition-colors hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

