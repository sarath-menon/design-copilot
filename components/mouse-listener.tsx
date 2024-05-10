"use client";

import { useEffect, useState } from "react";
import * as wasm_js from "../public/wasm/index_bg.js";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

function MouseListenerComponent({ number }: { number: number }) {
  useEffect(() => {
    async function initializeWasm() {
      const wasmModule = await import("../public/wasm/index_bg.wasm");
      wasm_js.__wbg_set_wasm(wasmModule);

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
    const result = wasm_js.getFileInfo(code, {
      sourceFilename: "card.tsx",
      sourceType: "script",
    });

    console.log(result.file_info_serialized);
  }

  return (
    <div>
      <Button onClick={() => console.log(wasm_js.add(1, 2))}>Add</Button>
      <Button onClick={getFileInfo_}>File info</Button>
      <Button
        onClick={async () =>
          console.log(await wasm_js.api_call("sarath-menon"))
        }
      >
        Api call
      </Button>
    </div>
  );
}

const MouseListener = dynamic(() => Promise.resolve(MouseListenerComponent), {
  // Ensure only client-side execution:
  ssr: false,
});

export default MouseListener;
