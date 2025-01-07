import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/student.png"
        alt="Students at school"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
        <div className="container mx-auto h-full px-4">
          <div className="relative top-1/2 -translate-y-1/2 space-y-6 rounded-lg bg-[#6366F1] p-12 md:max-w-xl">
            <h1 className="text-5xl font-bold text-white">Back to School</h1>
            <p className="text-2xl text-white">
              Welcome to all of our students
            </p>
            <Button
              variant="secondary"
              className="bg-[#1C1F2E] text-white hover:bg-[#2D3142]"
            >
              Discover the School
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
