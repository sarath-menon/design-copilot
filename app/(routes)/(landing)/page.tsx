import FeaturesSection from "@/app/(routes)/(landing)/_components/features-section";
import HeroSection from "@/app/(routes)/(landing)/_components/hero-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
