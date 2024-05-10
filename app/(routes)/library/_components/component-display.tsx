"use client";

import { ComponentInfoTable } from "@/app/(routes)/library/_components/component-info";
import { ComponentPreview } from "@/app/(routes)/library/_components/component-preview";
import XtermTerminal from "@/app/(routes)/library/_components/xterm-window";
import { useStore } from "@/store/store";

export default function ComponentDisplay() {
  const currentComponent = useStore((state) => state.currentComponent);

  // // Write a text file to the `$APPCONFIG/app.conf` path
  // async function writeToFile(contents: string) {
  //   await writeTextFile("tauri_vault/beef.tsx", contents, {
  //     dir: BaseDirectory.Document,
  //   });
  // }

  return (
    <div className="relative flex h-[90vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <ComponentPreview showComponent={currentComponent} />
      {/* <ComponentInfoTable /> */}

      {/* <XtermTerminal /> */}
    </div>
  );
}
