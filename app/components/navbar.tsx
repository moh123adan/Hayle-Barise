import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { SearchBox } from "./search";
import { SocialLinks } from "./social-links";

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
];

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <SearchBox />
          <Logo />
          <div className="flex items-center gap-6">
            <SocialLinks />
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Log In
            </Button>
          </div>
        </div>
      </div>
      <nav className="bg-[#1C1F2E]">
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
  );
}
