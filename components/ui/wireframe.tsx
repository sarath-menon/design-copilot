import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface WireframeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height: string;
  width: string;
}

function Wireframe({ className, height, width, ...props }: WireframeProps) {
  return (
    <div className={cn("", className)} {...props}>
      <Skeleton
        className="rounded-md animate-none"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}
export { Wireframe };
