"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useCallback } from "react";

export default function WebWorker() {
  const workerRef = useRef<Worker>();

  useEffect(() => {
    async function initializeWebWorker() {
      workerRef.current = new Worker(new URL("../worker.ts", import.meta.url));

      workerRef.current.onmessage = (event: MessageEvent<number>) => {
        console.log("Worker said: " + event.data);
      };
    }

    initializeWebWorker();

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  //   const handleWork = useCallback(async () => {
  //     workerRef.current?.postMessage(100000);
  //   }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      workerRef.current?.postMessage(value);
    },
    []
  );

  return (
    <>
      {/* <Button onClick={handleWork}>Calculate PI</Button> */}

      <h1>Main Thread/Wasm Web Worker Interaction</h1>

      <Input onChange={handleInputChange} type="text" id="inputNumber" />
    </>
  );
}
