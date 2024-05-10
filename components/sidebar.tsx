"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [currentPage, setCurrentPage] = useState("Playground");

  return (
    <div>
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <TooltipProvider>
          <div className="border-b p-2">
            <Button variant="outline" size="icon" aria-label="Home">
              <Triangle className="size-5 fill-foreground" />
            </Button>
          </div>

          <nav className="grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg ${
                      currentPage === "Playground" ? "bg-muted" : ""
                    }`}
                    onClick={() => setCurrentPage("Playground")}
                    aria-label="Playground"
                  >
                    <SquareTerminal className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Playground
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/library">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg ${
                      currentPage === "Library" ? "bg-muted" : ""
                    }`}
                    onClick={() => setCurrentPage("Library")}
                    aria-label="Library"
                  >
                    <Bot className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Library
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/viewer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg ${
                      currentPage === "Viewer" ? "bg-muted" : ""
                    }`}
                    onClick={() => setCurrentPage("Viewer")}
                    aria-label="Viewer"
                  >
                    <Code2 className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Viewer
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentation
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Settings
              </TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <Link href="/library">
                    <SquareUser className="size-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </aside>
    </div>
  );
}
