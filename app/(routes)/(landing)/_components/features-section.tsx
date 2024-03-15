import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      draggable="true"
      className="border  hover:cursor-pointer hover:border-gray-500"
    >
      <div className="flex flex-col items-center space-y-8 border p-8">
        <h2 className="text-4xl font-semibold tracking-tight">Features</h2>
        <p className="text-lg">Explore the amazing features of our product.</p>
        <Button id="features_btn">Learn More</Button>
      </div>
    </section>
  );
}
