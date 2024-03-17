import FeaturesSection from "@/app/(routes)/(landing)/_components/features-section";
import HeroSection from "@/app/(routes)/(landing)/_components/hero-section";
import { CardWithForm } from "@/components/cards/demo-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Wireframe } from "@/components/ui/wireframe";

export default function Home() {
  return (
    <section id="main" className="flex min-h-screen flex-col items-center p-24">
      <div className="dark-client">
        <CardWithForm />
      </div>
    </section>
  );
}
