"use client";

import { Button } from "@/components/ui/button";
import GitDemo from "@/app/(routes)/(landing)/_components/action";

export default function CloneBtn() {
  async function fetchData() {
    const data = await GitDemo();
    return data;
  }

  // const data = fetchData();

  return (
    <div>
      <Button type="submit" onClick={fetchData}>
        Clone
      </Button>
    </div>
  );
}
