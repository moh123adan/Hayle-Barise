import Hero from "./components/hero";
import FeaturesGrid from "./components/features-grid";
import NewsletterForm from "./components/newsletter-form";
import Footer from "./components/footer";
import IndustryStandards from "./components/industry-standards";
import EngineeringHighlights from "./components/tech-highlits";
import { courses } from "./data/courses";
import { CoursesSlider } from "./components/responsive-courses-section";
import PartnersSection from "./components/parteners-section";
import VideoSlider from "./components/video-slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryStandards />
      <FeaturesGrid />
      <EngineeringHighlights />
      <PartnersSection />
      <CoursesSlider courses={courses} />
      <VideoSlider />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
