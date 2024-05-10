"use client";

import { Send } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/store";
import { getComponentInfo } from "./action";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatHistory() {
  const chatMessages = useStore((state) => state.chatMessages);
  const addChatMessage = useStore((state) => state.addChatMessage);
  const clearChatMessages = useStore((state) => state.clearChatMessages);

  React.useEffect(() => {
    clearChatMessages();

    addChatMessage({ role: "agent", content: "Hi, how can I help you today?" });
  }, [addChatMessage, clearChatMessages]);

  const [input, setInput] = React.useState("");
  const currentComponent = useStore((state) => state.currentComponent);

  const inputLength = input.trim().length;

  function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // handle empty input, unselected component
    if (inputLength === 0 || isEmpty(currentComponent)) return;

    // clear the chatbox
    setInput("");

    addChatMessage({ role: "user", content: input });

    // handle response
    const response = await getComponentInfo(input, currentComponent.path);
    addChatMessage({ role: "agent", content: response });
    // console.log("Data:", data);
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <span className="text-lg font-medium">Chat</span>
        </CardHeader>

        <ScrollArea className="h-[600px]">
          <CardContent className="">
            <div className="space-y-4">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-max max-w-[300px] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    message.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              ))}
            </div>
          </CardContent>
        </ScrollArea>

        <CardFooter className="pt-2">
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <Button type="submit" size="icon" disabled={inputLength === 0}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
