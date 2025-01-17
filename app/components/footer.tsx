import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#1a1b41] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex items-start">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/main-logo.png"
                alt="Ridgeview Logo"
                width={50}
                height={50}
                className="w-44 h-24"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">HAYLE BARISE</span>
                <span className="text-sm text-gray-300">
                  TECHNICAL DEVELOPMENT CENTER
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              QUICK NAVIGATION
            </h3>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/news"
                className="text-gray-300 hover:text-white transition-colors"
              >
                News
              </Link>
              <Link
                href="/academics"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Academics
              </Link>
              <Link
                href="/events"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Events
              </Link>
              <Link
                href="/students"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Students
              </Link>
              <Link
                href="/admissions"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Admissions
              </Link>
              <Link
                href="/parents"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Parents
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              STAY CONNECTED
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Facebook size={18} />
                Facebook
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Twitter size={18} />
                Twitter
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Instagram size={18} />
                Instagram
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Youtube size={18} />
                Youtube
              </Link>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              GET IN TOUCH
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
              <p>Tel: 123-456-7890</p>
              <p>info@mysite.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            © 2025 by Ridgeview Middle School. Powered and secured by{" "}
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Wix
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
