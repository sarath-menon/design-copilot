import { CardWithForm } from "@/components/cards/demo-card";

export default function Home() {
  return (
    <main id="main" className="grid grid-cols-2 min-h-screen p-24">
      <div className="flex justify-center items-center ">
        <CardWithForm />
      </div>

      <iframe className="h-full" src="/viewer" title="Iframe Example"></iframe>
    </main>
  );
}
