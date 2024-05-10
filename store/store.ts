import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

import { ChatMessage, Component, Config } from "@/app/types/fs";

type State = {
  config: Config;
  currentComponent: Component;
  chatMessages: ChatMessage[];
  demoComponents: Component[];
  uiComponents: Component[];
};

type Action = {
  setConfig: (config: State["config"]) => void;
  setCurrentComponent: (component: Component) => void;
  addChatMessage: (chatMessage: ChatMessage) => void;
  clearChatMessages: () => void;

  addDemoComponent: (component: Component) => void;
  clearDemoComponents: () => void;

  addUIComponent: (component: Component) => void;
  clearUIComponents: () => void;
};

export const useStore = createWithEqualityFn<State & Action>(
  (set) => ({
    // variables
    chatMessages: [],
    config: {
      style: "default",
      theme: "zinc",
      radius: 0.5,
    } as Config,

    currentComponent: {} as Component,
    demoComponents: [] as Component[],
    uiComponents: [] as Component[],

    // functions
    setConfig: function (config: Config) {
      set({ config: config });
    },

    setCurrentComponent: function (component: Component) {
      set({ currentComponent: component });
    },

    addChatMessage: function (chatMessage: ChatMessage) {
      set((state) => ({ chatMessages: [...state.chatMessages, chatMessage] }));
    },
    clearChatMessages: function () {
      set({ chatMessages: [] });
    },

    clearDemoComponents: function () {
      set({ demoComponents: [] });
    },

    addDemoComponent: function (component: Component) {
      set((state) => ({
        demoComponents: [...state.demoComponents, component],
      }));
    },

    clearUIComponents: function () {
      set({ uiComponents: [] });
    },

    addUIComponent: function (component: Component) {
      set((state) => ({
        uiComponents: [...state.uiComponents, component],
      }));
    },
  }),

  shallow
);
