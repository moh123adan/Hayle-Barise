import Hero from "./components/hero";
import SafetyMeasures from "./components/safety-measures";
import FeaturesGrid from "./components/features-grid";
import LatestNews from "./components/latest-news";
import InstagramGrid from "./components/instagram-grid";
import NewsletterForm from "./components/newsletter-form";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SafetyMeasures />
      <FeaturesGrid /> 
      <LatestNews />
      <InstagramGrid />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
