import ChatBox from "@/app/(routes)/library/_components/chat-box";
import { MouseListenerComponent } from "@/components/mouse-listener";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import WasmDemo from "@/components/wasm-demo";
import { Suspense } from "react";

export default function LandingPage() {
  return (
    <div className="container relative  min-h-screen">
      <PageHeader className="mt-32">
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Prompts to react components, instantly.
        </PageHeaderDescription>
      </PageHeader>

      <section className="flex items-center justify-center ">
        <ChatBox />
      </section>

      <Suspense fallback={<p>Loading feed...</p>}>
        <WasmDemo number={2} />
      </Suspense>

      <MouseListenerComponent number={2} />
    </div>
  );
}
