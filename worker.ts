// This is a module worker, so we can use imports (in the browser too!)
import { pi } from "./lib/utils";
import * as wasm_module from "./public/web_worker/wasm_in_web_worker.js";

// addEventListener("message", (event: MessageEvent<number>) => {
//   postMessage(pi(event.data));
// });

async function init_wasm_in_worker() {
  const { NumberEval } = wasm_module;

  // Create a new object of the `NumberEval` struct.
  var num_eval = NumberEval.new();

  // Set callback to handle messages passed to the worker.
  addEventListener("message", (event) => {
    // By using methods of a struct as reaction to messages passed to the
    // worker, we can preserve our state between messages.

    var worker_result = num_eval.is_even(event.data);

    // Send response back to be handled by callback in main thread.
    self.postMessage(worker_result);
  });
}

init_wasm_in_worker();
