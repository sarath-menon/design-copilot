"use client";

import { useEffect, useState } from "react";
import * as wasm_js from "../public/wasm/index_bg.js";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

function MouseListenerComponent({ number }: { number: number }) {
  const [add, setAdd] = useState<Function | null>(null);
  const [getFileInfo, setGetFileInfo] = useState<Function | null>(null);

  useEffect(() => {
    async function initializeWasm() {
      const wasmModule = await import("../public/wasm/index_bg.wasm");
      wasm_js.__wbg_set_wasm(wasmModule);
      const { add, mouse_listener, getFileInfo, test } = wasmModule;

      setAdd(() => add);
      setGetFileInfo(() => getFileInfo);

      const resultJson = wasm_js.getFileInfo("let foo;", {
        sourceFilename: "card.tsx",
        sourceType: "script",
      });
      console.log(resultJson.file_info_serialized);
    }

    initializeWasm();
  }, []);

  function getFileInfo_() {
    const code = "let foo;";
    const result = getFileInfo?.(code, {
      sourceFilename: "card.tsx",
      sourceType: "script",
    });

    console.log(result);
  }

  return (
    <div>
      <Button onClick={() => console.log(add?.(1, 2))}>Click me</Button>
      <Button onClick={getFileInfo_}>Click me</Button>
    </div>
  );
}

const MouseListener = dynamic(() => Promise.resolve(MouseListenerComponent), {
  // Ensure only client-side execution:
  ssr: false,
});

export default MouseListener;
