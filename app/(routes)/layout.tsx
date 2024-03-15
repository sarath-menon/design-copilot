import DesignCopilot from "@/components/copilot/design-copilot";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" ">
      {children}

      <DesignCopilot />
    </main>
  );
}
