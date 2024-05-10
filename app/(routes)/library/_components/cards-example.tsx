"use client";
import "@/styles/themes.css";

import { ThemeCustomizer } from "@/components/theme-customizer";
import { ThemeWrapper } from "@/components/theme-wrapper";
import CardDemo from "@/lib/ui/apps/www/registry/default/example/card-demo";
import { useStore } from "@/store/store";
import React from "react";

export default function CardsExample() {
  const config = useStore((state) => state.config);

  return (
    <div className="container">
      <ThemeCustomizer />

      <div className="relative flex flex-col items-start md:flex-row md:items-center">
        <ThemeWrapper>
          {config.style === "new-york" && <CardDemo />}
          {config.style === "default" && <CardDemo />}
        </ThemeWrapper>
      </div>
    </div>
  );
}
