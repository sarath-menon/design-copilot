"use client";

import { useEffect } from "react";
import { __wbg_set_wasm } from "../public/wasm/index_bg.js";

export function MouseListenerComponent({ number }: { number: number }) {
  useEffect(() => {
    (async () => {
      const wasmModule = await import("../public/wasm/index_bg.wasm");
      __wbg_set_wasm(wasmModule);
      const { add, mouse_listener } = wasmModule;
      mouse_listener();
    })();
  }, []);

  return <>selv</>;
}
