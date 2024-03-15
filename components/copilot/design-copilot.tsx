"use client";

import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function DesignCopilot() {
  function handleRightClick(event: MouseEvent) {
    const elementId = event.target.id;
    // console.log(elementId);

    const element = document.getElementById(elementId);
    setElement(element);
  }

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      var x = event.clientX; // Get the horizontal coordinate
      var y = event.clientY; // Get the vertical coordinate

      console.log("Screen position: " + x + ", " + y);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []); // Empty dependency array means this effect will only run once, after the component mounts

  const [element, setElement] = useState<HTMLElement | null>(null);

  async function testHandleClick() {
    // console.log(element?.classList);
    console.log(element?.getAttribute("class"));

    // element?.classList.add("bg-red-500");

    // const replaceFlag = element?.classList.replace("bg-red-500", "bg-blue-500");

    // console.log(replaceFlag);

    // const data = await getCopilotOutput("what's bg-red-500");
    // console.log(data.output.content);
  }

  return (
    <div>
      <Button
        // id={nanoid()}
        className="absolute top-0 left-0"
        onClick={testHandleClick}
      >
        Shadcn Button
      </Button>
    </div>
  );
}
