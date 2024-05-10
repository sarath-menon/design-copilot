import { Style } from "@/lib/ui/apps/www/registry/styles";
import { Theme } from "@/lib/ui/apps/www/registry/themes";

export interface Component {
  name: string;
  path: string;
  base_components: string[];
}

export type ChatMessage = {
  role: string;
  content: string;
};

export type Config = {
  style: Style["name"];
  theme: Theme["name"];
  radius: number;
};

export interface ComponentOverlayProps {
  target: HTMLElement;
  elementType: string;
}
