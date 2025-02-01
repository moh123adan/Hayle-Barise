import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ForParents() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1C1F2E]">
            FOR PARENTS AND GUARDIANS
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            At Hayle Barise Technical Development Center, we believe in a strong
            partnership between parents, students, and educators. Your
            involvement is crucial to our students' success in the rapidly
            evolving tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Parent Engagement */}
          <div className="flex items-center bg-[#1C1F2E] p-8 rounded-lg">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-white">
                Parent Engagement Opportunities
              </h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Attend our quarterly Tech Showcase events to see student
                    projects firsthand.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Join our Parent-Industry Advisory Board to help shape our
                    curriculum.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Participate in our "Tech Talks" series, where industry
                    professionals share insights.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Volunteer for our annual Hackathon event as a mentor or
                    judge.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Attend parent-teacher conferences to discuss your child's
                    progress in technical skills.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Parent Meeting Image */}
          <div className="relative h-[400px]">
            <Image
              src="/images/heyle5.png"
              alt="Parent-teacher meeting at Hayle Barise Technical Center"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>

          {/* Workshop Image */}
          <div className="relative h-[400px]">
            <Image
              src="/images/heyle4.png"
              alt="Students in a technical workshop at Hayle Barise"
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>

          {/* Technical Equipment List */}
          <div className="flex items-center bg-white p-8 border border-gray-200 rounded-lg">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-[#1C1F2E]">
                Technical Equipment List
              </h3>
              <ul className="mb-8 space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Laptop with minimum specifications (see detailed list)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Safety goggles and lab coat for practical sessions
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Basic electronics toolkit (will be used across multiple
                    courses)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Recommended software licenses (student discounts available)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p className="text-sm leading-relaxed">
                    Notebook and technical drawing supplies
                  </p>
                </li>
              </ul>
              <Button className="bg-[#6366F1] hover:bg-[#5558DD] flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Full Equipment List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
