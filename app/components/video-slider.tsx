"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VideoModal } from "./video-model";

const videos = [
  {
    title: "Somali Swedish Football",
    url: "https://www.youtube.com/watch?v=wfkHTYFgT2A",
    thumbnail: `https://img.youtube.com/vi/wfkHTYFgT2A/maxresdefault.jpg`,
  },
  {
    title: "Sowda",
    url: "https://www.youtube.com/watch?v=lrp1gzCA2BE",
    thumbnail: `https://img.youtube.com/vi/lrp1gzCA2BE/maxresdefault.jpg`,
  },
  {
    title: "HBTDC Intro video",
    url: "https://www.youtube.com/watch?v=nbfyjQUbdIQ",
    thumbnail: `https://img.youtube.com/vi/nbfyjQUbdIQ/maxresdefault.jpg`,
  },
  {
    title: "HBTDC COVID",
    url: "https://www.youtube.com/watch?v=dlP5-vW37aU",
    thumbnail: `https://img.youtube.com/vi/dlP5-vW37aU/maxresdefault.jpg`,
  },
  {
    title: "HBTDC Skills Competition 2",
    url: "https://www.youtube.com/watch?v=CYa8Krv1VE0",
    thumbnail: `https://img.youtube.com/vi/CYa8Krv1VE0/maxresdefault.jpg`,
  },
  {
    title: "HBTDC SIU Agreement",
    url: "https://www.youtube.com/watch?v=PDJ4Rsn0c_Y",
    thumbnail: `https://img.youtube.com/vi/PDJ4Rsn0c_Y/maxresdefault.jpg`,
  },
  {
    title: "HBTDC 1st Graduation",
    url: "https://www.youtube.com/watch?v=2e2iQD_ykOU",
    thumbnail: `https://img.youtube.com/vi/2e2iQD_ykOU/maxresdefault.jpg`,
  },
  {
    title: "HBTDC Skills Competition 1",
    url: "https://www.youtube.com/watch?v=cLiKx2CcQjw",
    thumbnail: `https://img.youtube.com/vi/cLiKx2CcQjw/maxresdefault.jpg`,
  },
  {
    title: "HBTDC Female Video",
    url: "https://www.youtube.com/watch?v=_sdV00H8JVI",
    thumbnail: `https://img.youtube.com/vi/_sdV00H8JVI/maxresdefault.jpg`,
  },
];

export default function VideoSlider() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoModal = (url: string) => {
    setSelectedVideo(url);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl mx-auto font-semibold text-[#3bb995]">
            Our Highlights
          </h2>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 3,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video) => (
                <CarouselItem
                  key={video.url}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group">
                    <button
                      onClick={() => openVideoModal(video.url)}
                      className="block w-full text-left"
                    >
                      <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-xl">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                        {/* YouTube-style play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex h-[48px] w-[68px] items-center justify-center rounded-lg bg-black/80">
                            <div className="h-0 w-0 border-l-[18px] border-t-[10px] border-b-[10px] border-l-white border-t-transparent border-b-transparent" />
                          </div>
                        </div>
                      </div>
                      <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
                        {video.title}
                      </h3>
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/3 hidden lg:flex" />
            <CarouselNext className="absolute -right-12 top-1/3 hidden lg:flex" />
          </Carousel>
        </div>
      </div>
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideoModal}
          videoUrl={selectedVideo}
        />
      )}
    </section>
  );
}
