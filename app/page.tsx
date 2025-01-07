import Hero from "./components/hero";
import SafetyMeasures from "./components/safety-measures";
import FeaturesGrid from "./components/features-grid";
import LatestNews from "./components/latest-news";
import InstagramGrid from "./components/instagram-grid";
import NewsletterForm from "./components/newsletter-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <SafetyMeasures />
      <FeaturesGrid /> 
      <LatestNews />
      <InstagramGrid />
      <NewsletterForm />
    </main>
  );
}
