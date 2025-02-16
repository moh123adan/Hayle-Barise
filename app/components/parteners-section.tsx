import Image from "next/image";

const partners = [
  { name: "BECO", logo: "/images/beco.png" },
  {
    name: "Norwegian Ministry of Foreign Affairs",
    logo: "/images/foriegns.png",
  },
  { name: "Somalia Government", logo: "/images/somalia.png" },
  { name: "D/Hoose", logo: "/images/dowlada-hoose.png" },
  { name: "CARE International", logo: "/images/care.png" },
  { name: "European Union", logo: "/images/stars.png" },
  { name: "SOS Children's Villages", logo: "/images/sos-children.png" },
  { name: "IOM UN Migration", logo: "/images/un-migration.png" },
  { name: "NIS Foundation", logo: "/images/nordic-international.png" },
  { name: "YouthLink Somalia", logo: "/images/youth-link.png" },
  { name: "Somali International University", logo: "/images/siu.png" },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#3bb995] md:text-4xl">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center"
            >
              <div className="w-full overflow-hidden rounded-lg p-4 transition-all duration-200 hover:shadow-lg hover:shadow-[#4c75ae]/20">
                <div className="relative h-24 w-full">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
