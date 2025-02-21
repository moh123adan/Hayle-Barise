"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Course } from "../types/course";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock,
  GraduationCap,
  Timer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CourseModal } from "./course-model";

interface CourseSliderProps {
  courses: Course[];
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[''] z-10`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <ChevronRight className="w-8 h-8 text-white" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[''] z-10`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    >
      <ChevronLeft className="w-8 h-8 text-white" />
    </div>
  );
}

export function CourseSlider({ courses }: CourseSliderProps) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
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
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const duplicatedCourses = [...courses, ...courses];

  const handleReadMore = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full bg-[#4c75ae] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Our Courses
        </h2>
        <div className="relative">
          <Slider {...settings} className="courses-slider">
            {duplicatedCourses.map((course, index) => (
              <div key={`${course.id}-${index}`} className="px-2 h-full">
                <div className="group relative flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="relative h-48">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="space-y-4 mb-6 flex-grow">
                      <CourseInfoItem
                        icon={CalendarDays}
                        label="START DATE"
                        value={course.startDate}
                      />
                      <CourseInfoItem
                        icon={Timer}
                        label="DURATION"
                        value={course.duration}
                      />
                      <CourseInfoItem
                        icon={GraduationCap}
                        label="STUDY MODE"
                        value={course.program}
                      />
                      <CourseInfoItem
                        icon={Clock}
                        label="WEEKLY STUDY"
                        value={course.weeklyStudy}
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-auto"
                      onClick={() => handleReadMore(course)}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <style jsx global>{`
        .courses-slider .slick-track {
          display: flex !important;
        }
        .courses-slider .slick-slide {
          height: inherit !important;
        }
        .courses-slider .slick-slide > div {
          height: 100%;
        }
        .courses-slider .slick-prev,
        .courses-slider .slick-next {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          z-index: 1;
          transition: background-color 0.3s ease;
        }
        .courses-slider .slick-prev:hover,
        .courses-slider .slick-next:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        .courses-slider .slick-prev {
          left: -50px;
        }
        .courses-slider .slick-next {
          right: -50px;
        }
        @media (max-width: 1024px) {
          .courses-slider .slick-prev {
            left: -30px;
          }
          .courses-slider .slick-next {
            right: -30px;
          }
        }
        @media (max-width: 640px) {
          .courses-slider .slick-prev {
            left: -20px;
          }
          .courses-slider .slick-next {
            right: -20px;
          }
        }
      `}</style>
    </section>
  );
}

interface CourseInfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function CourseInfoItem({ icon: Icon, label, value }: CourseInfoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-emerald-500 flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-900 truncate">{value}</p>
      </div>
    </div>
  );
}
