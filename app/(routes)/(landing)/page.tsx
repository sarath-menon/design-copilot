import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center space-y-8">
        <h1 id="selva_h1" className="text-6xl font-semibold tracking-tight">
          Selva
        </h1>

        <Button id="selva_btn">Click me</Button>
      </div>
    </main>
  );
}
