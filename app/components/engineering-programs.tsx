import Image from "next/image";
import Link from "next/link";

const engineeringPrograms = [
  {
    title: "Civil Engineering",
    duration: "2 years",
    description:
      "Design and oversee construction of infrastructure projects like buildings, roads, and bridges.",
    image: "/images/civil.png",
  },
  {
    title: "Electrical Engineering",
    duration: "2 years",
    description:
      "Study and apply electricity, electronics, and electromagnetism to create innovative technologies.",
    image: "/images/electrical.png",
  },
  {
    title: "Mechanical Engineering",
    duration: "2 years",
    description:
      "Design, manufacture, and maintain mechanical systems and machines.",
    image: "/images/mechanical.png",
  },
];

export default function EngineeringPrograms() {
  return (
    <section className="bg-[#4c75ae] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center text-white">
          <h2 className="mb-3 text-4xl font-bold">Engineering Programs</h2>
          <p className="text-xl">
            Shaping the future through innovation at{" "}
            <Link
              href="https://www.facebook.com/haylebarise1/photos"
              className="font-semibold hover:underline"
            >
              Hayle Barise Technical Development Center
            </Link>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPrograms.map((program, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.title} program`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-[#1e3a8a]">
                  {program.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-gray-600">
                  Duration: {program.duration}
                </p>
                <p className="mb-4 text-gray-700">{program.description}</p>
                <Link
                  href={`/programs/${program.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="inline-block rounded bg-[#3bb995] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#278168]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
