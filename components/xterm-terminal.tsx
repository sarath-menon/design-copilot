"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";

export default function XtermTerminal() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();
    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
    }
    return () => terminal.dispose();
  }, []);

  return <div id="terminal" ref={terminalRef}></div>;
}
