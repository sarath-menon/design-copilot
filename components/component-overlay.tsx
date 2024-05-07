"use client";

import { ComponentOverlayProps } from "@/app/types/nav";
import EditBoxSmall from "@/components/edit-boxes/edit-box-small";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

export default function ComponentOverlay({
  target,
  elementType,
}: ComponentOverlayProps) {
  const [showEditBox, setShowEditBox] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("You clicked outside of me!");
        setShowEditBox(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      id="overlay"
      className="absolute transition-all z-[9999] border-dashed border-2 border-blue-500 bg-blue-400/40 rounded-lg"
      style={{
        left: `${target.offsetLeft}px`,
        top: `${target.offsetTop}px`,
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
      }}
      onClick={(event) => {
        event.stopPropagation();
        setShowEditBox(true);
      }}
    >
      <div className="absolute left-0 top-0 origin-bottom translate-y-[-100%] text-white p-1 text-xs bg-blue-800 bg-opacity-90 rounded">
        {elementType.toLowerCase()}
      </div>

      <div className="absolute bottom-0 right-0 translate-y-[100%] translate-x-[100%]">
        {showEditBox && <EditBoxSmall />}
      </div>
    </div>
  );
}
