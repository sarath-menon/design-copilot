"use client";

import * as React from "react";
import { type SelectTriggerProps } from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Style, styles } from "@/lib/ui/apps/www/registry/styles";
import { useStore } from "@/store/store";

export function StyleSwitcher({ className }: SelectTriggerProps) {
  // const [config, setConfig] = useConfig();

  const config = useStore((state) => state.config);
  const setConfig = useStore((state) => state.setConfig);

  return (
    <Select
      defaultValue={config.style}
      onValueChange={(value: Style["name"]) =>
        setConfig({ ...config, style: value })
      }
    >
      <SelectTrigger
        className={cn(
          "h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",
          className
        )}
      >
        <span className="text-muted-foreground">Style: </span>
        <SelectValue placeholder="Select style" />
      </SelectTrigger>
      <SelectContent>
        {styles.map((style) => (
          <SelectItem key={style.name} value={style.name} className="text-xs">
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
