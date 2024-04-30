import FeaturesSection from "@/app/(routes)/(landing)/_components/features-section";
import HeroSection from "@/app/(routes)/(landing)/_components/hero-section";
import { CardWithForm } from "@/components/cards/demo-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Wireframe } from "@/components/ui/wireframe";

import CloneBtn from "@/app/(routes)/(landing)/_components/clone-btn";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24">
      <HeroSection />

      {/* <div className="flex justify-center space-x-4 animate-none">
        <Wireframe height="200" width="200" text="selva" />
      </div> */}

      <div>
        <CardWithForm />

        {/* <CloneBtn /> */}
      </div>
      {/* <iframe
        className="w-full h-screen"
        src="https://stackblitz.com/edit/stackblitz-starters-culmrb?embed=1&file=package.json&hideExplorer=1"
      ></iframe> */}
    </main>
  );
}
