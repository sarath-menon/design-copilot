import React from "react";

import * as wasm from "../public/wasm/index_bg.wasm";
import { __wbg_set_wasm } from "../public/wasm/index_bg.js";
__wbg_set_wasm(wasm);
export * from "../public/wasm/index_bg.js";
import { parseSync, add } from "../public/wasm/index_bg.js";

export async function WasmDemo({ number }: { number: number }) {
  const code = "let foo;export default async function Page(){}";

  const startTime = performance.now();
  const result = parseSync(code, { sourceFilename: "test.tsx" });
  const endTime = performance.now();

  console.log(result.program.body);
  console.log("Execution time: ", endTime - startTime, "ms");

  return <>{add(number, number + 4)}</>;
}
