"use client";

import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useStore } from "@/store/store";

export function ThemeSwitcher() {
  const segment = useSelectedLayoutSegment();
  const config = useStore((state) => state.config);

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }

      console.log("classes", document.body.classList);
    });

    const theme = segment === "themes" ? config.theme : null;
    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [segment, config]);

  return null;
}
