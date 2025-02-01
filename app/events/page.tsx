import { MapPin, Calendar, Zap, Building, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    date: "Sep 15",
    title: "Electrical Engineering Showcase",
    location: "Hayle Barise Innovation Lab",
    image: "/placeholder.svg?height=400&width=600",
    icon: Zap,
  },
  {
    date: "Oct 1",
    title: "Civil Engineering Project Exhibition",
    location: "Hayle Barise Main Hall",
    image: "/placeholder.svg?height=400&width=600",
    icon: Building,
  },
  {
    date: "Oct 20",
    title: "Mechanical Engineering Workshop",
    location: "Hayle Barise Workshop",
    image: "/placeholder.svg?height=400&width=600",
    icon: Cog,
  },
];

export default function SchoolEvents() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#3bb995] to-[#2b9c7c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Events at Hayle Barise
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover the exciting world of engineering through our specialized
            courses and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <Calendar className="w-5 h-5" />
                    <time className="font-semibold">{event.date}</time>
                  </div>
                  <event.icon className="w-8 h-8 text-[#3bb995]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-white/80 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>

                <Button
                  asChild
                  variant="secondary"
                  className="w-full bg-white hover:bg-[#3bb995] text-[#4c75ae] hover:text-white border-0 transition-colors duration-300"
                >
                  <Link
                    href={`/events/${event.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4c75ae]/20 to-[#3bb995]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
