import DesignCopilot from "@/components/copilot/design-copilot";
import { RightMenu } from "@/components/menus/right-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" ">
      {children}

      <div className="absolute top-0 right-0">
        <RightMenu />
      </div>

      <div className="absolute top-0 left-0">
        <DesignCopilot />
      </div>
    </main>
  );
}
