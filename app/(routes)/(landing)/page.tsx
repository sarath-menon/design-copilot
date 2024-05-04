import FeaturesSection from "@/app/(routes)/(landing)/_components/features-section";
import HeroSection from "@/app/(routes)/(landing)/_components/hero-section";
import { CardWithForm } from "@/components/cards/demo-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Wireframe } from "@/components/ui/wireframe";

import CloneBtn from "@/app/(routes)/(landing)/_components/clone-btn";

export default function Home() {
  return (
    <main id="main" className="grid grid-cols-2 min-h-screen p-24">
      <div className="flex justify-center items-center ">
        <CardWithForm />
      </div>

      <iframe src="/selva" title="Iframe Example"></iframe>
    </main>
  );
}
