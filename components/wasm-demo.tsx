export async function WasmDemo({ number }: { number: number }) {
  const exports = await import("../public/wasm/demo.wasm");
  const { add: addOne } = exports;

  return <>{addOne(number, number + 4)}</>;
}
