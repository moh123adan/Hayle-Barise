import Hero from "./components/hero";
import FeaturesGrid from "./components/features-grid";
import NewsletterForm from "./components/newsletter-form";
import Footer from "./components/footer";
import EngineeringPrograms from "./components/engineering-programs";
import IndustryStandards from "./components/industry-standards";
import EngineeringHighlights from "./components/tech-highlits";
import ServicesSection from "./components/service-section";
import { courses } from "./data/courses";
import { ResponsiveCourses } from "./components/responsive-courses-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryStandards />
      <FeaturesGrid />
      <EngineeringHighlights />
      <ResponsiveCourses courses={courses} />
      <ServicesSection />
      <EngineeringPrograms />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
