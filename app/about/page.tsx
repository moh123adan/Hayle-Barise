import Image from "next/image"

export default function OurSchool() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1b41] mb-4">
            OUR SCHOOL
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Left Panel - Principal Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Principal"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Panel - Vision & Values */}
          <div className="bg-[#1a1b41] text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl mb-8 text-[#6366f1]">Vision & Values</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Be Kind</li>
              <li>• Be Respectful</li>
              <li>• Be Responsible</li>
              <li>• Work Hard</li>
              <li>• Have Fun</li>
            </ul>
          </div>

          {/* Right Panel - Principal's Message & Students */}
          <div className="flex flex-col">
            <div className="bg-[#1a1b41] text-white p-8 md:p-12 flex-1">
              <h2 className="text-2xl mb-6 text-[#6366f1]">Principal's Message</h2>
              <p className="text-gray-300 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the text.
              </p>
              <p className="text-gray-300">
                This is a great space to write a long text about your company and your services. You can use this space to go into a few more details about your company.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Students working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

