"use client";

import { Bird, Rabbit, Turtle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exampleFiles } from "./action";
import { useEffect, useState } from "react";
import { Component } from "@/app/types/fs";
import { Index } from "@/lib/ui/apps/www/__registry__";
import { useStore } from "@/store/store";
import { nanoid } from "nanoid";

enum ComponentType {
  BaseComponent = "base_component",
  DemoComponent = "demo_component",
}

export default function ComponentSettings() {
  const EXAMPLES_PATH =
    "/Users/sarathmenon/Documents/startup/rust_projects/tauri-next-demo/lib/ui/apps/www/registry/default/example";

  // const [uiComponents, setUIComponents] = useState<Component[]>([]);

  const [componentType, setComponentType] = useState<ComponentType>(
    ComponentType.DemoComponent
  );

  let {
    demoComponents,
    addDemoComponent,
    clearDemoComponents,
    uiComponents,
    addUIComponent,
    clearUIComponents,
    config,
  } = useStore((state) => ({
    demoComponents: state.demoComponents,
    addDemoComponent: state.addDemoComponent,
    clearDemoComponents: state.clearDemoComponents,
    uiComponents: state.uiComponents,
    addUIComponent: state.addUIComponent,
    clearUIComponents: state.clearUIComponents,
    config: state.config,
  }));

  const setCurrentComponent = useStore((state) => state.setCurrentComponent);

  function formatComponentName(name: string): string {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    function getComponents() {
      // clear components list
      clearDemoComponents();
      clearUIComponents();

      Object.keys(Index[config.style]).forEach((key) => {
        let component: Component = {} as Component;

        const type = Index[config.style][key].type;

        component.name = Index[config.style][key].name;
        component.path = Index[config.style][key].files[0];
        const base_components = Index[config.style][key].registryDependencies;

        if (base_components) {
          component.base_components =
            Index[config.style][key].registryDependencies;
        } else {
          component.base_components = [];
        }

        switch (type) {
          case "components:example":
            addDemoComponent(component);
            break;

          case "components:ui":
            addUIComponent(component);
            break;
        }
      });
    }

    getComponents();
  }, [
    config.style,
    addDemoComponent,
    clearDemoComponents,
    addUIComponent,
    clearUIComponents,
  ]);

  function selectComponent(name: string) {
    let foundComponent;
    switch (componentType) {
      case ComponentType.DemoComponent:
        foundComponent = demoComponents.find(
          (component) => component.name === name
        );
        break;
      case ComponentType.BaseComponent:
        foundComponent = uiComponents.find(
          (component) => component.name === name
        );
        break;
      default:
        console.error(`Unknown component type: ${componentType}`);
        break;
    }

    if (foundComponent) {
      setCurrentComponent(foundComponent);
    } else {
      console.error(`Component with name ${name} not found.`);
    }
  }

  function onSetComponentType(inputType: string) {
    switch (inputType) {
      case "ui_elements":
        setComponentType(ComponentType.BaseComponent);
        break;
      case "component_demos":
        setComponentType(ComponentType.DemoComponent);
        break;
      default:
        console.error(`Unknown component type: ${inputType}`);
        break;
    }
  }

  return (
    <div className="relative hidden flex-col items-start gap-8 md:flex">
      <form
        className="grid w-full items-start gap-6"
        action={() => exampleFiles(EXAMPLES_PATH)}
      >
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>

          <div className="grid gap-3">
            <Label htmlFor="component-type">Component type</Label>
            <Select
              defaultValue="component_demos"
              onValueChange={(value) => onSetComponentType(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"ui_elements"}>UI elements</SelectItem>
                <SelectItem value={"component_demos"}>shadcn demos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div className="grid gap-3">
            <Label htmlFor="component">Base components</Label>
            <Select
            // onValueChange={(value) => selectComponent(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select component" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {uiComponents.map((component, index) => (
                    <SelectItem key={component.name} value={component.name}>
                      {formatComponentName(component.name)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}

          <div className="grid gap-3">
            <Label htmlFor="component">Component demos</Label>
            <Select onValueChange={(value) => selectComponent(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select component" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>

                  {demoComponents.map((component, index) => (
                    <SelectItem key={component.name} value={component.name}>
                      {formatComponentName(component.name)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* <div className="grid gap-3">
            <Label htmlFor="temperature">Temperature</Label>
            <Input id="temperature" type="number" placeholder="0.4" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="top-p">Top P</Label>
              <Input id="top-p" type="number" placeholder="0.7" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="top-k">Top K</Label>
              <Input id="top-k" type="number" placeholder="0.0" />
            </div>
          </div> */}
        </fieldset>
      </form>
    </div>
  );
}
