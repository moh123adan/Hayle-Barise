import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AdmissionsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1C1F2E]">ADMISSIONS</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2">
          {/* Open House Information */}
          <div className="bg-white p-12">
            <h3 className="mb-6 text-2xl font-medium text-[#1C1F2E]">
              Open House Information
            </h3>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-600">
                I'm a paragraph. Click here to add your own text and edit me.
                Let's just get that out of the way. Then start talking about
                your stuff.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Talk about your team and what services you provide. Tell your
                visitors the story of how you came up with the idea for your
                business and what makes you different from your competitors.
              </p>
            </div>
          </div>

          {/* Prospective Parents & Students */}
          <div className="bg-[#1C1F2E] p-12 text-white">
            <h3 className="mb-6 text-2xl font-medium">
              Prospective
              <br />
              Parents & Students
            </h3>
            <div className="mb-8 space-y-4">
              <p className="text-sm leading-relaxed opacity-90">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy.
              </p>
              <p className="text-sm leading-relaxed opacity-90">
                Just click "Edit Text" or double click me to add your own
                content and make changes to the font. Feel free to drag and drop
                me anywhere you like on your page.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">FOR MORE INFORMATION:</p>
              <p className="text-sm">E: INFO@MYSITE.COM</p>
              <p className="text-sm">P: 123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Full-width Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/student8.png"
            alt="Students walking outside"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
