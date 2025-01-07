import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/01.png",
    alt: "Student in grey hoodie",
  },
  { src: "/images/02.png", alt: "Pencil and paper" },
  { src: "/images/03.png", alt: "Student with phone" },
  { src: "/images/04.png", alt: "Teacher and student" },
  { src: "/images/05.png", alt: "Basketball players" },
  { src: "/images/06.png", alt: "Students talking" },
  { src: "/images/07.png", alt: "Stack of books" },
  { src: "/images/08.png", alt: "Yellow locker" },
  { src: "/images/09.png", alt: "Students outdoors" },
  { src: "/images/10.png", alt: "School bus sign" },
  { src: "/images/11.png", alt: "Basketball team" },
  { src: "/images/12.png", alt: "Student portrait" },
];

export default function InstagramGrid() {
  return (
    <section className="bg-[#6366F1] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center text-white">
          <h2 className="mb-2 text-3xl font-bold">LIFE & CULTURE</h2>
          <p className="text-lg">
            Follow{" "}
            <Link
              href="https://instagram.com/ridgeviewmiddleschool"
              className="hover:underline"
            >
              #ridgeviewmiddleschool
            </Link>{" "}
            on Instagram
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="group relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
