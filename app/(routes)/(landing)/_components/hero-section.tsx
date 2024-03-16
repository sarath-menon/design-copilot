"use client";

import { Button } from "@/components/ui/button";
import { Terminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css";

export default function HeroSection() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();
    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
    }
    return () => terminal.dispose();
  }, []);

  return (
    <section
      id="section1"
      //   draggable="true"
      //   className="border hover:cursor-pointer hover:border-gray-500"
    >
      <div id="div1" className="flex flex-col items-center space-y-8 p-8">
        <h1
          id="selva_h1"
          className="text-6xl font-semibold tracking-tight"
          draggable="true"
        >
          Selva
        </h1>

        <Button id="selva_btn" draggable="true">
          Click me
        </Button>

        <div id="terminal" ref={terminalRef}></div>
      </div>
    </section>
  );
}
