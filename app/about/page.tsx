import Image from "next/image";

export default function OurSchool() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1b41] mb-4">
            HAYLE BARISE TECHNICAL DEVELOPMENT CENTER
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hayle Barise Technical Development Center, we are dedicated to
            empowering individuals with the technical skills and knowledge
            needed to thrive in today's rapidly evolving world. Our mission is
            to foster innovation, creativity, and excellence in every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Left Panel - Center Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Hayle Barise Technical Development Center"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Panel - Vision & Values */}
          <div className="bg-[#1a1b41] text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl mb-8 text-[#6366f1]">
              Our Vision & Values
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Innovation: Embrace new ideas and technologies.</li>
              <li>
                • Excellence: Strive for the highest standards in education.
              </li>
              <li>• Integrity: Uphold honesty and ethical practices.</li>
              <li>• Collaboration: Work together to achieve common goals.</li>
              <li>• Empowerment: Equip students with skills for success.</li>
            </ul>
          </div>

          {/* Right Panel - Director's Message & Students */}
          <div className="flex flex-col">
            <div className="bg-[#1a1b41] text-white p-8 md:p-12 flex-1">
              <h2 className="text-2xl mb-6 text-[#6366f1]">
                Director's Message
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Hayle Barise Technical Development Center, where we
                believe in the transformative power of education. Our programs
                are designed to provide hands-on training and real-world
                experience, ensuring our graduates are ready to meet the demands
                of the modern workforce.
              </p>
              <p className="text-gray-300">
                We are committed to creating an inclusive and supportive
                learning environment where every student can achieve their full
                potential. Join us on this journey of growth and discovery.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Students at Hayle Barise Technical Development Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
