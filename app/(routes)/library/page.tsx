import CardsExample from "@/app/(routes)/library/_components/cards-example";
import { ChatHistory } from "@/app/(routes)/library/_components/chat-history";
import ComponentDisplay from "@/app/(routes)/library/_components/component-display";
import ComponentSettings from "@/app/(routes)/library/_components/component-settings";
import Header from "@/components/header";

export default function Page() {
  return (
    <div className="h-screen w-full ">
      <div className="flex flex-col">
        <Header />

        <main className="grid pb-16 flex-1 gap-4  p-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-3">
            <ComponentDisplay />
          </div>

          <div className="flex flex-col justify-between">
            <ComponentSettings />
            <ChatHistory />
            {/* <ChatBox /> */}
          </div>
        </main>
      </div>

      {/* <div className="relative flex flex-col items-start md:flex-row md:items-center">
        <CardsExample />
      </div> */}
    </div>
  );
}
