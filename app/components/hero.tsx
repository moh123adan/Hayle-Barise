"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useImageSlider, type ImageSlide } from "../hooks/useImageSlider";

// Import images
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import student4 from "../assets/student4.jpg";

const images: ImageSlide[] = [
  { src: student1, alt: "Students at school" },
  { src: student4, alt: "Classroom" },
  { src: student2, alt: "School library" },
  { src: student3, alt: "School playground" },
];

export default function Hero() {
  const currentIndex = useImageSlider(images);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
        <div className="container mx-auto h-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative top-1/2 -translate-y-1/2 space-y-6 rounded-lg bg-[#4c75ae] p-12 md:max-w-xl"
          >
            <h1 className="text-5xl font-bold text-white">
              Unlock Your Potential Welcome to Hayle Barise
            </h1>
            <p className="text-2xl text-white">
              Empowering minds, shaping futures
            </p>
            <Button
              variant="secondary"
              className="bg-[#3bb995] text-white hover:bg-[#2c997a]"
            >
              Discover the School
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
