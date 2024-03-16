import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface WireframeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height: string;
  width: string;
  text: string;
}

function Wireframe({
  className,
  height,
  width,
  text,
  ...props
}: WireframeProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Skeleton
        className="rounded-md animate-none"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
        {text}
      </span>
    </div>
  );
}
export { Wireframe };
