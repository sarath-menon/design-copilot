"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { CornerDownLeftIcon, MicIcon, PaperclipIcon } from "lucide-react";
import { useEffect, useState } from "react";
// import { getData } from "./action";
// import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";
// import { useStore } from "@/store/store";

export default function EditBoxSmall() {
  //   const [question, setQuestion] = useState("");
  //   const currentComponent = useStore((state) => state.currentComponent);

  // 2. Define a submit handler.

  async function onSubmit() {
    // const data = await getData(question, currentComponent.path);
    // // writeToFile(data);
    // console.log("Data:", data);
    // // clear the chatbox
    // setQuestion("");
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-neutral-600 bg-background"
      x-chunk="dashboard-03-chunk-1"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSubmit();
          e.preventDefault();
        }
      }}
    >
      <Textarea
        id="message"
        placeholder="Editing instructions..."
        className="min-h-12 h-12 resize-none border-none p-3 shadow-none  focus-visible:ring-0"
        autoFocus
      />

      <TooltipProvider>
        <div className="flex items-center pt-0 min-w-[300px]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <PaperclipIcon className="size-4" />
                <span className="sr-only">Attach file</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Attach File</TooltipContent>
          </Tooltip>

          <Button
            onClick={onSubmit}
            size="sm"
            className="ml-auto gap-1 text-xs p-2 h-5 mr-4"
          >
            Edit
            <CornerDownLeftIcon className="size-2.5 " />
          </Button>
        </div>
      </TooltipProvider>
    </div>
  );
}
