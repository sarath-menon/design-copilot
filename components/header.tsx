import { Button } from "@/components/ui/button";
import { ShareIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">Playground</h1>

      <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
        <ShareIcon className="size-3.5" />
        Share
      </Button>
    </header>
  );
}
