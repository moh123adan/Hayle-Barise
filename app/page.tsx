import Hero from "./components/hero";
import FeaturesGrid from "./components/features-grid";
import NewsletterForm from "./components/newsletter-form";
import Footer from "./components/footer";
import EngineeringPrograms from "./components/engineering-programs";
import IndustryStandards from "./components/industry-standards";
import EngineeringHighlights from "./components/tech-highlits";
import ServicesSection from "./components/service-section";
import { CoursesSlider } from "./components/courses-slider";
import { courses } from "./data/courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <IndustryStandards />
      <FeaturesGrid />
      <EngineeringHighlights />
      <EngineeringPrograms />
      <ServicesSection />
      <CoursesSlider courses={courses} />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
