"use client";

import ComponentOverlay from "@/components/component-overlay";
import { Index } from "@/lib/ui/apps/www/__registry__";
import { useStore } from "@/store/store";
import * as React from "react";
import { createRoot } from "react-dom/client";

export function V0Container() {
  const rootRef = React.useRef<any>(null); // Declare root outside the function to maintain its state across renders

  const config = useStore((state) => state.config);
  const currentComponent = useStore((state) => state.currentComponent);
  const Component = Index[config.style][currentComponent.name]?.component;

  React.useEffect(() => {
    const cardElement = document.getElementById("v0-component");

    function handleDocumentClick(event: MouseEvent) {
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
  }, [rootRef, currentComponent]);

  return (
    <div id="v0-component">
      <Component />
    </div>
  );
}
