import FeaturesSection from "@/app/(routes)/(landing)/_components/features-section";
import HeroSection from "@/app/(routes)/(landing)/_components/hero-section";
import { CardWithForm } from "@/components/cards/demo-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Wireframe } from "@/components/ui/wireframe";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24">
      <HeroSection />

      <div className="flex justify-center space-x-4 animate-none">
        <Wireframe height="200" width="200" text="selva" />
      </div>

      <div>
        <CardWithForm />
      </div>

      <div className="dark1">
        <CardWithForm />
      </div>
    </main>
  );
}
