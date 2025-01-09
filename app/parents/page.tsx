import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ForParents() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1C1F2E]">
            FOR THE PARENTS
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* PTA Updates */}
          <div className="flex items-center bg-[#1C1F2E] p-16">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-white">
                PTA Updates
              </h3>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <p key={i} className="text-sm leading-relaxed text-white/90">
                    I'm a paragraph. Click here to add your own text and edit me.
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Parent Meeting Image */}
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Parent teacher meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* School Supplies Image */}
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="School supplies shopping"
              fill
              className="object-cover"
            />
          </div>

          {/* Supply List */}
          <div className="flex items-center bg-white p-16">
            <div className="max-w-md">
              <h3 className="mb-6 text-2xl font-medium text-[#1C1F2E]">
                Supply List
              </h3>
              <div className="mb-8 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <p key={i} className="text-sm leading-relaxed text-gray-600">
                    I'm a paragraph. Click here to add your own text and edit me.
                  </p>
                ))}
              </div>
              <Button
                className="bg-[#6366F1] hover:bg-[#5558DD]"
              >
                Download Supply List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

