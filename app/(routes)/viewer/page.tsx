"use client";

import ComponentDisplay from "@/app/(routes)/library/_components/component-display";
import { ComponentPreview } from "@/app/(routes)/library/_components/component-preview";
import Header from "@/components/header";
import { useStore } from "@/store/store";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CardContainer from "@/lib/copied/registry/default/example/cards/card-container";

// const ComponentA = dynamic(
//   () => import("@/lib/copied/registry/default/example/cards/card-container")
// );

export default function Page() {
  const currentComponent = useStore((state) => state.currentComponent);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="grid pb-16 flex-1 gap-4  p-4 ">
        <div className="col-span-3">
          <ComponentPreview showComponent={currentComponent} />
        </div>

        {/* <ComponentA /> */}
        {/* <CardContainer /> */}
      </main>
    </div>
  );
}
