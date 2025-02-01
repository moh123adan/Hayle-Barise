import Image from "next/image";

export default function OurSchool() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HAYLE BARISE TECHNICAL DEVELOPMENT CENTER
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hayle Barise Technical Development Center, we are dedicated to
            empowering individuals with the technical skills and knowledge
            needed to thrive in today's rapidly evolving world. Our mission is
            to foster innovation, creativity, and excellence in every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Panel - Center Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/school1.png"
              alt="Hayle Barise Technical Development Center"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Panel - Vision & Values */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl mb-8 font-semibold text-gray-900">
              Our Vision & Values
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Innovation: Embrace new ideas and technologies.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Excellence: Strive for the highest standards in education.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Integrity: Uphold honesty and ethical practices.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Collaboration: Work together to achieve common goals.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Empowerment: Equip students with skills for success.
              </li>
            </ul>
          </div>

          {/* Right Panel - Director's Message & Students */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg flex-1">
              <h2 className="text-2xl mb-6 font-semibold text-gray-900">
                Director's Message
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to Hayle Barise Technical Development Center, where we
                believe in the transformative power of education. Our programs
                are designed to provide hands-on training and real-world
                experience, ensuring our graduates are ready to meet the demands
                of the modern workforce.
              </p>
              <p className="text-gray-600">
                We are committed to creating an inclusive and supportive
                learning environment where every student can achieve their full
                potential. Join us on this journey of growth and discovery.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/school2.png"
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