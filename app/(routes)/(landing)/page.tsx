import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center space-y-8">
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
    </main>
  );
}
