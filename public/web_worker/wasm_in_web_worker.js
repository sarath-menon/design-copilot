import * as wasm from "./wasm_in_web_worker_bg.wasm";
import { __wbg_set_wasm } from "./wasm_in_web_worker_bg.js";
__wbg_set_wasm(wasm);
export * from "./wasm_in_web_worker_bg.js";
