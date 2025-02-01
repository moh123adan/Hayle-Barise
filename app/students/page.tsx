import Image from "next/image";

export default function OurStudents() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1C1F2E]">
            OUR STUDENTS
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            At Hayle Barise Technical Development Center, we nurture the next
            generation of technical experts. Our students are at the heart of
            everything we do, driving innovation and shaping the future of
            technology in Somalia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Technical Projects */}
          <div className="flex items-center bg-[#6366F1] p-16">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-white">
                Technical Projects
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-white/90">
                Our students engage in hands-on technical projects that solve
                real-world problems. From developing sustainable energy
                solutions to creating innovative software applications, these
                projects provide practical experience and foster creativity.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                Through these initiatives, students learn to apply theoretical
                knowledge, work in teams, and develop critical thinking skills
                essential for their future careers in the tech industry.
              </p>
            </div>
          </div>

          {/* Students Image 1 */}
          <div className="relative h-[400px]">
            <Image
              src="/images/student6.png"
              alt="Students working on technical projects"
              fill
              className="object-cover"
            />
          </div>

          {/* Students Image 2 */}
          <div className="relative h-[400px]">
            <Image
              src="/images/student7.png"
              alt="Students in a workshop environment"
              fill
              className="object-cover"
            />
          </div>

          {/* Industry Partnerships */}
          <div className="flex items-center bg-white p-16">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-[#1C1F2E]">
                Industry Partnerships
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                We believe in bridging the gap between education and industry.
                Our partnerships with leading tech companies provide students
                with internships, mentorship programs, and exposure to
                cutting-edge technologies.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                These collaborations ensure our students are well-prepared for
                the job market, with skills that are in high demand in Somalia's
                growing tech sector. Many of our graduates go on to become
                leaders in their fields, driving technological advancement
                across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
