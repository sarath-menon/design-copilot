import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
// import XtermTerminal from "@/components/xterm-terminal";
import { promises as fs } from "fs";

import dynamic from "next/dynamic";

// const DynamicXtermTerminal = dynamic(
//   () => import("@/components/xterm-terminal"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

// function createFile() {
//   fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   });
// }

export default function HeroSection() {
  return (
    <section
      id="section1"
      //   draggable="true"
      //   className="border hover:cursor-pointer hover:border-gray-500"
    >
      <div
        id="div1"
        draggable="true"
        className="flex flex-col items-center space-y-8 p-8"
      >
        <h1
          id="selva_h1"
          className="text-6xl font-semibold tracking-tight"
          draggable="true"
        >
          Selva
        </h1>

        <Button id="selva_btn" draggable="true">
          Click me
        </Button>

        <Calendar />
      </div>

      {/* <DynamicXtermTerminal /> */}
    </section>
  );
}
