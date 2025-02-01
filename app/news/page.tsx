import {
  Users,
  Eye,
  MessageSquare,
  Zap,
  Building,
  PenToolIcon as Tool,
  Award,
  Briefcase,
} from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Innovative Learning in Electrical Engineering",
    excerpt:
      "Discover how our cutting-edge Electrical Engineering program is shaping the future of energy systems and empowering students with real-world skills.",
    icon: Zap,
    date: "Apr 25, 2024",
    readTime: "2 min read",
    stats: { views: 12, comments: 3 },
  },
  {
    id: 2,
    title: "Civil Engineering Projects Showcase",
    excerpt:
      "Explore the latest civil engineering projects our students have been working on, from sustainable infrastructure to urban planning innovations.",
    icon: Building,
    date: "Apr 24, 2024",
    readTime: "3 min read",
    stats: { views: 8, comments: 2 },
  },
  {
    id: 3,
    title: "Mechanical Engineering Lab Updates",
    excerpt:
      "Learn about our newly upgraded Mechanical Engineering labs and the cutting-edge equipment available for hands-on learning experiences.",
    icon: Tool,
    date: "Apr 23, 2024",
    readTime: "2 min read",
    stats: { views: 15, comments: 5 },
  },
  {
    id: 4,
    title: "Student Achievements in Engineering",
    excerpt:
      "Celebrating the outstanding accomplishments of our Electrical, Civil, and Mechanical Engineering students in recent competitions and projects.",
    icon: Award,
    date: "Apr 22, 2024",
    readTime: "4 min read",
    stats: { views: 20, comments: 7 },
  },
  {
    id: 5,
    title: "Industry Partnerships for Engineering Programs",
    excerpt:
      "Discover how our partnerships with leading engineering firms are enhancing our Electrical, Civil, and Mechanical Engineering curricula.",
    icon: Briefcase,
    date: "Apr 21, 2024",
    readTime: "3 min read",
    stats: { views: 18, comments: 4 },
  },
  {
    id: 6,
    title: "Engineering Open House: Meet Our Faculty",
    excerpt:
      "Join us for our upcoming Engineering Open House to meet the expert faculty behind our Electrical, Civil, and Mechanical Engineering programs.",
    icon: Users,
    date: "Apr 20, 2024",
    readTime: "5 min read",
    stats: { views: 25, comments: 10 },
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Engineering Insights
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Stay informed about the latest developments in Electrical, Civil, and
          Mechanical Engineering at Hayle Barise Technical Development Center.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <post.icon />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-base mb-4">{post.excerpt}</p>
              <div className="flex items-center">
                <p className="text-gray-500 text-sm mr-2">{post.readTime}</p>
                <div className="flex items-center">
                  <Eye className="text-gray-500 mr-1" />
                  <p className="text-gray-500 text-sm">{post.stats.views}</p>
                </div>
                <div className="flex items-center ml-4">
                  <MessageSquare className="text-gray-500 mr-1" />
                  <p className="text-gray-500 text-sm">{post.stats.comments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
