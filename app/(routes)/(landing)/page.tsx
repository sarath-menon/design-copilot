import { CardWithForm } from "@/components/cards/demo-card";
import { WasmDemo } from "@/components/wasm-demo";

export default function Home() {
  return (
    <main id="main" className="grid grid-cols-2 min-h-screen p-24">
      <div className="flex justify-center items-center ">
        <CardWithForm />
      </div>

      <iframe
        className="h-full w-full"
        src="/viewer"
        title="Iframe Example"
      ></iframe>

      <WasmDemo number={1} />
    </main>
  );
}
