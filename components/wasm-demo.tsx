import React from "react";
import { promises as fs } from "fs";

import * as wasm_module from "../public/wasm/index";

export async function WasmDemo({ number }: { number: number }) {
  const code = await fs.readFile(
    process.cwd() + "/components/cards/demo-card.tsx",
    "utf8"
  );

  const { parseSync, add, getFileInfo } = wasm_module;

  const startTime = performance.now();
  const result = getFileInfo(code, {
    sourceFilename: "card.tsx",
    sourceType: "script",
  });

  //   const result = parseSync(code);
  const endTime = performance.now();

  //console.log(result.program);
  console.log(result.file_info_serialized);
  console.log("Execution time: ", endTime - startTime, "ms");

  return <>{add(number, number + 4)}</>;
}
