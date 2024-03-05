import { create } from "zustand";

interface SettingsType {
  username: string;
  gptname: string;
  enableSystemPrompt: boolean;
  role: string;
  goodAt: string;
  topics: string;
}

interface CommonType {
  openDrawer: boolean;
  openSetting: boolean;
  openApiKeyModal: boolean;
  apiKey?: string;
  settings: SettingsType;
  computed: {
    getPromptDescription: string;
  };
  toggleDrawer: (bool?: boolean) => void;
  toggleSetting: (bool?: boolean) => void;
  setApiKeyModal: (bool: boolean) => void;
  setApiKey: (key: string) => void;
  setSettings: (newSetting: SettingsType) => void;
}

const useCommon = create<CommonType>()((set, get) => ({
  openDrawer: false,
  openSetting: false,
  openApiKeyModal: false,
  apiKey: undefined,
  settings: {
    username: "Me",
    gptname: "ChatGPT",
    enableSystemPrompt: false,
    role: "Programmer",
    goodAt:
      "using Javascript, VueJs, ReactJs, NextJs to create website and CMS",
    topics: "programming and Ant Design",
  },
  computed: {
    get getPromptDescription() {
      const {
        settings: { role, goodAt, topics },
      } = get();
      return `I want you to act as a professional ${role}.You are good at ${goodAt}.User will provide some topics or questions related to ${topics}, and it will be your job to explain them in easy-to-understand terms.This could include providing step-by-step instructions for solving a problem, demonstrating various techniques with visuals or suggesting online resources for further study.`;
    },
  },
  toggleDrawer: (bool?: boolean) => {
    const { openDrawer } = get();
    set({ openDrawer: typeof bool === "boolean" ? bool : !openDrawer });
  },
  toggleSetting: (bool?: boolean) => {
    const { openSetting } = get();
    set({ openSetting: typeof bool === "boolean" ? bool : !openSetting });
  },
  setApiKeyModal: (bool: boolean) => set({ openApiKeyModal: bool }),
  setApiKey: (key: string) => set({ apiKey: key }),
  setSettings: (newSettings: SettingsType) => {
    const { settings } = get();
    set({
      settings: {
        ...settings,
        ...newSettings,
      },
    });
  },
}));

export default useCommon;
