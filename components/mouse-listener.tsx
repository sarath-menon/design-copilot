"use client";

import { useEffect, useState } from "react";
import { __wbg_set_wasm } from "../public/wasm/index_bg.js";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

function MouseListenerComponent({ number }: { number: number }) {
  const [add, setAdd] = useState<Function | null>(null);

  useEffect(() => {
    async function initializeWasm() {
      const wasmModule = await import("../public/wasm/index_bg.wasm");
      __wbg_set_wasm(wasmModule);
      const { add, mouse_listener } = wasmModule;
      setAdd(() => add);
    }

    initializeWasm();
  }, []);

  return (
    <div>
      <Button onClick={() => console.log(add(1, 2))}>Click me</Button>
    </div>
  );
}

const MouseListener = dynamic(() => Promise.resolve(MouseListenerComponent), {
  // Ensure only client-side execution:
  ssr: false,
});

export default MouseListener;
