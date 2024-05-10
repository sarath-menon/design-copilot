"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStore } from "@/store/store";
import { useState, useEffect } from "react";

export function ComponentInfoTable() {
  const currentComponent = useStore((state) => state.currentComponent);
  const uiComponents = useStore((state) => state.uiComponents);

  const [componentsList, setComponentsList] = useState<Component[]>([]);

  useEffect(() => {
    function displayBaseComponents() {
      const baseComponents = currentComponent.base_components;

      if (!baseComponents) {
        return;
      }

      baseComponents.forEach((component, index) => {
        const baseComponents_ = uiComponents.find(
          (component_) => component_.name === component
        );

        if (!baseComponents_) {
          return;
        }

        setComponentsList((componentsList) => [
          ...componentsList,
          baseComponents_,
        ]);
      });
    }

    setComponentsList([]);

    displayBaseComponents();
  }, [currentComponent, uiComponents]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Name</TableHead>
          <TableHead>Version</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Instances</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {componentsList.map((component, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{component.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
