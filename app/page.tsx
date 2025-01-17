import Hero from "./components/hero";
import FeaturesGrid from "./components/features-grid";
import NewsletterForm from "./components/newsletter-form";
import Footer from "./components/footer";
import EngineeringPrograms from "./components/engineering-programs";
import IndustryStandards from "./components/industry-standards";
import TechHighlights from "./components/tech-highlits";

export default function Home() {
  return (
    <main>
      <Hero />
      <IndustryStandards />
      <FeaturesGrid /> 
      <TechHighlights />
      <EngineeringPrograms />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
