import * as wasm from "../public/wasm/index_bg.wasm";
import { __wbg_set_wasm } from "../public/wasm/index_bg.js";
__wbg_set_wasm(wasm);
export * from "../public/wasm/index_bg.js";
import { parseSync, add } from "../public/wasm/index_bg.js";

export async function WasmDemo({ number }: { number: number }) {
  const code = "let foo;export default async function Page(){}";
  const result = parseSync(code, { sourceFilename: "test.tsx" });
  console.log(result.program.body);

  return <>{add(number, number + 4)}</>;
}
