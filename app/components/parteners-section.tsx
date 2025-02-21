"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const duplicatedPartners = [...partners, ...partners];

export default function PartnersSlider() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#3bb995] md:text-4xl">
          Our Partners
        </h2>
        <Slider {...settings} className="partners-slider">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="px-2">
              <div className="group relative flex items-center justify-center">
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
            </div>
          ))}
        </Slider>
      </div>
      <style jsx global>{`
        .partners-slider .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
