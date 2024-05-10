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
import { createComponent } from "./action";
import { useStore } from "@/store/store";

export default function ChatBox() {
  const [question, setQuestion] = useState("");
  const currentComponent = useStore((state) => state.currentComponent);

  // 2. Define a submit handler.

  async function onSubmit() {
    const data = await createComponent(question, currentComponent.path);
    // clear the chatbox
    setQuestion("");

    // writeToFile(data);
    console.log("Data:", data);
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-[500px]"
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
        value={question}
        placeholder="Type your message here..."
        className="min-h-8 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        onChange={(e) => setQuestion(e.target.value)}
        autoFocus
      />

      <div className="flex items-center px-2 py-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <PaperclipIcon className="size-4" />
                <span className="sr-only">Attach file</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Attach File</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <MicIcon className="size-4" />
                <span className="sr-only">Use Microphone</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Use Microphone</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button onClick={onSubmit} size="sm" className="ml-auto gap-1 mr-1">
          Create
          <CornerDownLeftIcon className="size-3" />
        </Button>
      </div>
    </div>
  );
}
