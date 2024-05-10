"use client";

import * as React from "react";
import { Index } from "@/lib/ui/apps/www/__registry__";

import { cn } from "@/lib/utils";
import { CopyButton, CopyWithClassNames } from "@/components/ui/copy-button";
import { Icons } from "@/components/icons";
import { StyleSwitcher } from "@/components/ui/style-switcher";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { styles } from "@/lib/copied/registry/styles";
import { useStore } from "@/store/store";
import { Component } from "@/app/types/fs";
import { fetchComponentCode } from "./action";
import { V0Container } from "@/components/v0-container";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { ThemeSelector } from "@/components/theme-selector";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  showComponent: Component;
  extractClassname?: boolean;
  extractedClassNames?: string;
  align?: "center" | "start" | "end";
}

export function ComponentPreview({
  children,
  className,
  showComponent,
  extractClassname,
  extractedClassNames,
  align = "center",
  ...props
}: ComponentPreviewProps) {
  const config = useStore((state) => state.config);

  const index = styles.findIndex((_style) => _style.name === config.style);

  // Convert the children prop to an array of React elements
  const Codes = React.Children.toArray(children) as React.ReactElement[];

  // Select the code snippet based on the current style index
  const Code = Codes[index];

  const [componentCode, setComponentCode] = React.useState<string>("");

  React.useEffect(() => {
    async function loadComponentCode() {
      if (showComponent.path) {
        let code = await fetchComponentCode(showComponent.path);

        if (code) {
          code = addLineNumbers(code);
          setComponentCode(code);
        }
      }
    }

    loadComponentCode();
  }, [showComponent]);

  function addLineNumbers(code: string): string {
    return code
      .split("\n")
      .map((line, index) => `${index + 1}      ${line}`)

      .join("\n");
  }

  const Preview = React.useMemo(() => {
    const Component = Index[config.style][showComponent.name]?.component;

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {showComponent.name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <V0Container />;
  }, [showComponent.name, config.style]);

  return (
    <div
      className={cn("group relative m-2 flex flex-col", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <ThemeSelector />

            <CopyButton
              value={componentCode}
              variant="outline"
              className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:size-3.5"
            />
          </div>
        </div>

        <TabsContent value="preview" className="relative rounded-md border">
          <div className="flex items-center justify-between p-4">
            <StyleSwitcher />
            <div className="flex items-center gap-2">
              {/* {style === "default" && description ? (
              ) : null} */}
            </div>
          </div>
          <ThemeWrapper defaultTheme="zinc">
            <div
              className={cn(
                "preview flex min-h-[350px] w-full justify-center p-10",
                {
                  "items-center": align === "center",
                  "items-start": align === "start",
                  "items-end": align === "end",
                }
              )}
            >
              <React.Suspense
                fallback={
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div>
          </ThemeWrapper>
        </TabsContent>

        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:h-full">
              <div className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 m-4 dark:bg-zinc-900">
                <pre>
                  <code className="left-4 top-4 relative rounded font-mono text-sm pb-8">
                    {componentCode}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
