import Image from "next/image";

export default function OurSchool() {
  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR SCHOOL</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hayle Barise Technical Development Centre is a dynamic and
          inspirational place to study, merging raw technical talent with
          academic brilliance.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section - Principal Image */}
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="School environment"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Section - Principal's Message */}
        <div className="bg-[#1a1f3c] text-white p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl mb-6 text-[#6366f1]">Principal's Message</h2>
          <p className="mb-6">
            Welcome to Hayle Barise Technical Development Centre! Our mission is
            to equip students with cutting-edge technical skills, empowering
            them for employment and entrepreneurship. Through hands-on training,
            industry partnerships, and a commitment to excellence, we shape the
            future of Somalia's workforce. Join us in building a brighter, more
            skilled tomorrow!
          </p>
        </div>

        {/* Vision & Values Section */}
        <div className="bg-[#1a1f3c] text-white p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl mb-6 text-[#6366f1]">Vision & Values</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-[#6366f1] mr-2">•</span>
              Be Kind
            </li>
            <li className="flex items-center">
              <span className="text-[#6366f1] mr-2">•</span>
              Be Respectful
            </li>
            <li className="flex items-center">
              <span className="text-[#6366f1] mr-2">•</span>
              Be Responsible
            </li>
            <li className="flex items-center">
              <span className="text-[#6366f1] mr-2">•</span>
              Work Hard
            </li>
            <li className="flex items-center">
              <span className="text-[#6366f1] mr-2">•</span>
              Have Fun
            </li>
          </ul>
        </div>

        {/* History Section with Student Image */}
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFJzCSDwzTUnzUJTC5mC7celO2QmEr.png"
              alt="Students working together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1a1f3c]/80"></div>
          </div>
          <div className="relative z-10 p-8 lg:p-12 text-white min-h-[400px] lg:min-h-[600px] flex flex-col justify-center">
            <h2 className="text-3xl mb-6 text-[#6366f1]">History</h2>
            <p className="mb-4">
              Hayle Barise Technical Development Centre was set up in
              remembrance of Hayle Abdi, a pioneer in automotive engineering,
              transportation and vehicle and metal fabrication for over 30
              years.
            </p>
            <p>
              Hayle Abdi was an industrialist and a strong advocate for skill
              training, investing a lot of time and effort into providing youths
              with skills in technical industries. Those who benefited from
              Hayle Abdi's training in the 80's are currently relaying their
              expertise onto the youths as market leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
