import Image from "next/image";

const mayorVisitPhotos = [
  {
    id: 1,
    src: "/images/mayor.jpg",
    alt: "Mayor and officials inspecting technical equipment",
    caption:
      "Mayor and delegation examining technical training equipment during the facility tour",
  },
  {
    id: 2,
    src: "/images/mayor1.jpg",
    alt: "Mayor observing automotive training equipment",
    caption:
      "Mayor and officials reviewing automotive training facilities and equipment",
  },
  {
    id: 3,
    src: "/images/mayor2.jpg",
    alt: "Mayor meeting with HBTDC officials",
    caption:
      "Mayor and delegation discussing development initiatives with HBTDC leadership",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-[#4c75ae]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Mayor's Visit to HBTDC
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-center mb-12">
          Highlights from the recent visit of our city's mayor to the Hayle
          Barise Technical Development Center, showcasing our engineering
          programs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mayorVisitPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
