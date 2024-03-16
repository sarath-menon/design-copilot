import FeaturesSection from "@/app/(routes)/(landing)/_components/features-section";
import HeroSection from "@/app/(routes)/(landing)/_components/hero-section";
import { CardWithForm } from "@/components/cards/mock-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Wireframe } from "@/components/ui/wireframe";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24">
      <HeroSection />
      <FeaturesSection />

      <div className="flex justify-center space-x-4 animate-none">
        {/* <Skeleton className="w-[200px] h-[200px] rounded-md" />
        <Skeleton className="w-[200px] h-[200px] rounded-md" />
        <Skeleton className="w-[200px] h-[200px] rounded-md" /> */}

        <Wireframe height="200" width="200" text="selva" />
      </div>

      <CardWithForm />
    </main>
  );
}
