import HomeHero from "@/components/sections/home/HomeHero";
import ProblemOutcome from "@/components/sections/home/ProblemOutcome";
import ProofPoint from "@/components/sections/home/ProofPoint";
import ProductOverview from "@/components/sections/home/ProductOverview";
import StatsSection from "@/components/sections/home/StatsSection";
import SocialProof from "@/components/sections/home/SocialProof";
import HomeCTA from "@/components/sections/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProblemOutcome />
      <ProofPoint />
      <ProductOverview />
      <StatsSection />
      <SocialProof />
      <HomeCTA />
    </>
  );
}
