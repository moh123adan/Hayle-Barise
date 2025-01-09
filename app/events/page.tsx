import { Button } from "@/components/ui/button";
import Link from "next/link";

const events = [
  {
    date: "Dec 25",
    title: "Columbus Day",
    location: "Ridgeview Middle School",
  },
  {
    date: "Dec 27",
    title: "Thanksgiving",
    location: "Ridgeview Middle School",
  },
  {
    date: "Dec 31",
    title: "Online STEM Week",
    location: "Online Event",
  },
  {
    date: "Dec 31",
    title: "October Fall Fest",
    location: "Ridgeview Middle School",
  },
  {
    date: "Dec 31",
    title: "PTA Online Conferences",
    location: "Online Event",
  },
];

export default function SchoolEvents() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#1C1F2E]">
          SCHOOLS EVENTS
        </h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-100 pb-6"
            >
              <div className="flex items-center gap-8">
                <time className="text-sm text-gray-400">{event.date}</time>
                <div>
                  <h3 className="text-lg font-medium text-[#6366F1]">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </div>
              <Button asChild className="bg-[#6366F1] hover:bg-[#5558DD]">
                <Link
                  href={`/events/${event.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                >
                  Learn More
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
