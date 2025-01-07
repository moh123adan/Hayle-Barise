import Hero from "./components/hero";
import SafetyMeasures from "./components/safety-measures";
import FeaturesGrid from "./components/features-grid";
import LatestNews from "./components/latest-news";

export default function Home() {
  return (
    <main>
      <Hero />
      <SafetyMeasures />
      <FeaturesGrid /> 
      <LatestNews />
    </main>
  );
}
