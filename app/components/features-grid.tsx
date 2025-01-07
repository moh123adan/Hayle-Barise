import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Top Left Image */}
      <div className="relative h-[400px]">
        <Image
          src="/images/student-lab.png"
          alt="Students discussing in classroom"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Top Right Content */}
      <div className="flex flex-col items-center justify-center bg-[#1C1F2E] p-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-[#6366F1]">
          Student Life
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-300">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font.
        </p>
        <Button
          asChild
          className="bg-[#6366F1] px-8 py-6 text-sm font-medium hover:bg-[#5558DD]"
        >
          <Link href="/student-life">Student Information</Link>
        </Button>
      </div>

      {/* Bottom Left Content */}
      <div className="flex flex-col items-center justify-center bg-[#1C1F2E] p-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-[#6366F1]">
          Open Enrollment
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-300">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font.
        </p>
        <Button
          asChild
          className="bg-[#6366F1] px-8 py-6 text-sm font-medium hover:bg-[#5558DD]"
        >
          <Link href="/apply">Apply Today</Link>
        </Button>
      </div>

      {/* Bottom Right Image */}
      <div className="relative h-[400px]">
        <Image
          src="/images/student-lab2.png"
          alt="Students studying together"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
