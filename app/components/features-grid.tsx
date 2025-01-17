import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Top Left Image */}
      <div className="relative h-[400px]">
        <Image
          src="/images/heyle3.png"
          alt="Students discussing in classroom"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Top Right Content */}
      <div className="flex flex-col items-center justify-center bg-[#1C1F2E] p-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-[#3bb995]">
          Hands-On Learning
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-300">
          At Hayle Barise, we believe in learning by doing. Our state-of-the-art
          labs and workshops provide students with practical, hands-on
          experience in their chosen fields. From coding to engineering, you'll
          be working with the latest tools and technologies used in industry.
        </p>
        <Button
          asChild
          className="bg-[#3bb995] px-8 py-6 text-sm font-medium hover:bg-[#22785f]"
        >
          <Link href="/student-life">Student Information</Link>
        </Button>
      </div>

      {/* Bottom Left Content */}
      <div className="flex flex-col items-center justify-center bg-[#1C1F2E] p-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-[#3bb995]">
          Career-Focused Programs
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-300">
          Our programs are designed with your future in mind. We offer a wide
          range of technical courses that align with industry demands, ensuring
          you're well-prepared for the job market. From software development to
          mechanical engineering, find the program that matches your career
          goals.
        </p>
        <Button
          asChild
          className="bg-[#3bb995] px-8 py-6 text-sm font-medium hover:bg-[#216f59]"
        >
          <Link href="/apply">Apply Today</Link>
        </Button>
      </div>

      {/* Bottom Right Image */}
      <div className="relative h-[400px]">
        <Image
          src="/images/heyle1.png"
          alt="Students studying together"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
