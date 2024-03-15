import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main id="main1" className="flex min-h-screen flex-col items-center p-24">
      <section>
        <div
          id="div1"
          draggable="true"
          className="flex flex-col items-center space-y-8 border p-8 hover:cursor-pointer hover:border-gray-500"
        >
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
    </main>
  );
}
