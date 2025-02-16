import Image from "next/image";

export default function OurSchool() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR SCHOOL
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hayle Barise Technical Development Centre is a dynamic and
            inspirational place to study, merging raw technical talent with
            academic brilliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Panel - Center Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/our-history.png"
              alt="Hayle Barise Technical Development Center"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Panel - Vision & Values */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl mb-8 font-semibold text-gray-900">
              History
            </h2>
            <p className="text-gray-600 mb-4">
              Hayle Barise Technical Development Centre was set up in
              remembrance of Hayle Abdi, a pioneer in automotive engineering,
              transportation and vehicle and metal fabrication for over 30
              years.
            </p>
            <p className="text-gray-600">
              Hayle Abdi was an industrialist and a strong advocate for skill
              training, investing a lot of time and effort into providing youths
              with skills in technical industries. Those who benefited from
              Hayle Abdi's training in the 80's are currently relaying their
              expertise onto the youths as market leaders.
            </p>
          </div>

          {/* Right Panel - Principal's Message & Students */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg flex-1">
              <h2 className="text-2xl mb-6 font-semibold text-gray-900">
                Principal's Message
              </h2>
              <p className="text-gray-600">
                Welcome to Hayle Barise Technical Development Centre! Our
                mission is to equip students with cutting-edge technical skills,
                empowering them for employment and entrepreneurship. Through
                hands-on training, industry partnerships, and a commitment to
                excellence, we shape the future of Somalia's workforce. Join us
                in building a brighter, more skilled tomorrow!
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/our-vision.png"
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
