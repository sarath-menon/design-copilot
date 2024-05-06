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
    const dataId = target.getAttribute("data-id");

    if (dataId) {
      console.log(`Mouse over element with data-id: ${dataId}`);
      target.style.position = "relative";
      target.style.zIndex = "10";
      target.style.backgroundColor = "rgba(0, 0, 255, 0.2)";
    }
  }

  function handleElementMouseOut(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = "";
    target.style.zIndex = "";
    target.style.position = "";
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
