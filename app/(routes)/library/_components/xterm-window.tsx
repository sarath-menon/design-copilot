"use client";

import { Terminal } from "xterm";
import { useEffect, useRef, useState } from "react";
import "xterm/css/xterm.css";
import { Button } from "@/components/ui/button";

export default function XtermTerminal() {
  const [term, setTerm] = useState<Terminal | null>(null);

  useEffect(() => {
    setTerm(null);
    const terminalElement = document.getElementById("terminal") as HTMLElement;

    const terminal = new Terminal({
      convertEol: true,
    });

    if (terminalElement) {
      terminal.open(terminalElement);
      setTerm(terminal);
      terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
    }

    return () => {
      if (terminal) {
        terminal.dispose();
      }
    };
  }, []);

  return (
    <div id="terminal">
      <Button onClick={() => term?.write("Hello")}>Click me</Button>
    </div>
  );
}
