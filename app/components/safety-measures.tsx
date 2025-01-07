import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SafetyMeasures() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1C1F2E] sm:text-5xl">
          SAFETY MEASURES IN PLACE
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          We do everything to ensure the health, safety and well-being of our
          students and employees. Additional information can be found here
        </p>
        <Button asChild className="bg-[#6366F1] px-8 hover:bg-[#5558DD]">
          <Link href="/safety">Safety Measures</Link>
        </Button>
      </div>
    </section>
  );
}
