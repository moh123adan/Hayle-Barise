import Hero from "./components/hero";
import SafetyMeasures from "./components/safety-measures";
import FeaturesGrid from "./components/features-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <SafetyMeasures />
      <FeaturesGrid /> 
    </main>
  );
}
