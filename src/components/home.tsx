import HeroSection from "./HeroSection";
import FeatureHighlights from "./FeatureHighlights";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-[#120D3A] text-white">
      <Navbar />
      <HeroSection />
      <FeatureHighlights />
    </div>
  );
}

export default Home;
