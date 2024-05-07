"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  function handleElementMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const elementType = target.tagName;

    const dataId = target.getAttribute("data-id");
    const cardElement = document.getElementById("card");
    const overlay = document.createElement("div");

    overlay.id = "overlay";
    overlay.className =
      "absolute transition-all pointer-events-none z-[9998] border-dashed border-2 border-blue-500 bg-blue-400/40 rounded-lg";

    if (dataId && cardElement) {
      console.log(`Mouse over element with data-id: ${dataId}`);

      overlay.style.left = `${target.offsetLeft}px`;
      overlay.style.top = `${target.offsetTop}px`;
      overlay.style.width = `${target.offsetWidth}px`;
      overlay.style.height = `${target.offsetHeight}px`;

      // to display the element type
      const elementTypeDiv = document.createElement("div");
      elementTypeDiv.textContent = elementType.toLowerCase();

      elementTypeDiv.className =
        "absolute left-0 top-0 origin-bottom translate-y-[-100%] text-white p-1 text-xs bg-blue-800 bg-opacity-90 rounded";
      overlay.appendChild(elementTypeDiv);

      cardElement.appendChild(overlay);
    }
  }

  function handleElementMouseOut(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const overlay = document.getElementById("overlay");

    const cardElement = document.getElementById("card");
    if (cardElement && overlay && overlay.parentNode === cardElement) {
      cardElement.removeChild(overlay);
    }
  }

  React.useEffect(() => {
    const cardElement = document.getElementById("card");

    if (cardElement) {
      const childElements = cardElement.querySelectorAll("*");

      childElements.forEach((element, index) => {
        element.setAttribute("data-id", `${index}`);
      });

      cardElement.addEventListener("mouseover", handleElementMouseOver);
      cardElement.addEventListener("mouseout", handleElementMouseOut);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mouseover", handleElementMouseOver);
        cardElement.removeEventListener("mouseout", handleElementMouseOut);
      }
    };
  }, []);

  return (
    <Card id="card" className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
