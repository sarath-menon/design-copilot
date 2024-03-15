import { invokeLangserve } from "@/components/design-copilot/langserve";

export async function getCopilotOutput(input: string) {
  return await invokeLangserve(input);
}
