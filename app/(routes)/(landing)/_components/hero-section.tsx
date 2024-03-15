import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="section1"
      draggable="true"
      className="border hover:cursor-pointer hover:border-gray-500"
    >
      <div id="div1" className="flex flex-col items-center space-y-8 p-8">
        <h1
          id="selva_h1"
          className="text-6xl font-semibold tracking-tight"
          draggable="true"
        >
          Selva
        </h1>

        <Button id="selva_btn" draggable="true">
          Click me
        </Button>
      </div>
    </section>
  );
}
