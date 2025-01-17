import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IndustryStandards() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1C1F2E] sm:text-5xl">
          INDUSTRY-STANDARD PRACTICES
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          At Hayle Barise Technical Development Center, we implement the latest
          industry standards and best practices in all our programs. Our
          commitment to excellence ensures that our students are well-prepared
          for the ever-evolving tech landscape.
        </p>
        <Button asChild className="bg-[#3bb995] px-8 hover:bg-[#28886d]">
          <Link href="/industry-standards">Learn More</Link>
        </Button>
      </div>
    </section>
  );
}
