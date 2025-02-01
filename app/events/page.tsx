import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    date: "Dec 25",
    title: "Technical Innovation Day",
    location: "Hayle Barise Campus",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    date: "Dec 27",
    title: "AI & Robotics Workshop",
    location: "Hayle Barise Lab",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    date: "Dec 31",
    title: "Cloud Computing Webinar",
    location: "Online Event",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function SchoolEvents() {
  return (
    <section className="py-16 bg-[#4c75ae]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Events at Hayle Barise
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Join us for exciting technical workshops, seminars, and networking
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-blue-400 mb-4">
                  <Calendar className="w-5 h-5" />
                  <time className="font-semibold">{event.date}</time>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-slate-300 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>

                <Button
                  asChild
                  variant="secondary"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border-0"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
