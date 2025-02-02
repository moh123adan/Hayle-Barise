import Hero from "./components/hero";
import FeaturesGrid from "./components/features-grid";
import NewsletterForm from "./components/newsletter-form";
import Footer from "./components/footer";
import IndustryStandards from "./components/industry-standards";
import EngineeringHighlights from "./components/tech-highlits";
import ServicesSection from "./components/service-section";
import { courses } from "./data/courses";
import { CoursesSlider } from "./components/responsive-courses-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryStandards />
      <FeaturesGrid />
      <EngineeringHighlights />
      <CoursesSlider courses={courses} />
      <ServicesSection />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
