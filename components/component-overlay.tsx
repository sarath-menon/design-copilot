import { ComponentOverlayProps } from "@/app/types/nav";

export default function ComponentOverlay({
  target,
  elementType,
}: ComponentOverlayProps) {
  return (
    <div
      id="overlay"
      className="absolute transition-all pointer-events-none z-[9998] border-dashed border-2 border-blue-500 bg-blue-400/40 rounded-lg"
      style={{
        left: `${target.offsetLeft}px`,
        top: `${target.offsetTop}px`,
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
      }}
    >
      <div className="absolute left-0 top-0 origin-bottom translate-y-[-100%] text-white p-1 text-xs bg-blue-800 bg-opacity-90 rounded">
        {elementType.toLowerCase()}
      </div>
    </div>
  );
}
