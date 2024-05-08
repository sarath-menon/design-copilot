"use client";

import * as React from "react";
import { createRoot } from "react-dom/client";
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
import { ComponentOverlayProps } from "@/app/types/nav";
import ComponentOverlay from "@/components/component-overlay";

export function CardWithForm() {
  const rootRef = React.useRef<any>(null); // Declare root outside the function to maintain its state across renders

  React.useEffect(() => {
    const cardElement = document.getElementById("card");

    function handleDocumentClick(event: MouseEvent) {
      const cardElement = document.getElementById("card");
      const overlayContainer = document.getElementById("overlay-container");

      // Check if the click is outside the card element
      if (
        cardElement &&
        overlayContainer &&
        !cardElement.contains(event.target as Node)
      ) {
        rootRef.current.unmount(); // Unmount the ComponentOverlay
        cardElement.removeChild(overlayContainer); // Remove the overlay container
      }
    }

    function handleElementMouseOver(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const elementType = target.tagName;

      const dataId = target.getAttribute("data-id");
      const cardElement = document.getElementById("card");

      if (dataId && cardElement) {
        // console.log(`Mouse over element with data-id: ${dataId}`);

        // Ensure there is a container for the overlay
        let overlayContainer = document.getElementById("overlay-container");
        if (!overlayContainer) {
          overlayContainer = document.createElement("div");
          overlayContainer.id = "overlay-container";
          cardElement.appendChild(overlayContainer);
          rootRef.current = createRoot(overlayContainer);
        }

        rootRef.current.render(
          <ComponentOverlay target={target} elementType={elementType} />
        );
      }
    }

    if (cardElement) {
      const childElements = cardElement.querySelectorAll("*");

      childElements.forEach((element, index) => {
        element.setAttribute("data-id", `${index}`);
      });

      cardElement.addEventListener("mouseover", handleElementMouseOver);
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mouseover", handleElementMouseOver);
        document.removeEventListener("click", handleDocumentClick);
      }
    };
  }, [rootRef]);

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
