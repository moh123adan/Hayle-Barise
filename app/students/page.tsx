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
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Clubs & Activities */}
          <div className="flex items-center bg-[#6366F1] p-16">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-white">
                Clubs & Activities
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-white/90">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click "Edit Text" or double click me to add your
                own content and make changes to the font.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company.
              </p>
            </div>
          </div>

          {/* Students Image 1 */}
          <div className="relative h-[400px]">
            <Image
              src="/images/student6.png"
              alt="Students participating in activities"
              fill
              className="object-cover"
            />
          </div>

          {/* Students Image 2 */}
          <div className="relative h-[400px]">
            <Image
              src="/images/student7.png"
              alt="Students after school"
              fill
              className="object-cover"
            />
          </div>

          {/* After School */}
          <div className="flex items-center bg-white p-16">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-[#1C1F2E]">
                After School
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click "Edit Text" or double click me to add your
                own content and make changes to the font.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
