import { create } from "zustand";

interface SettingsType {
  username: string;
  gptname: string;
}

interface CommonType {
  openDrawer: boolean;
  openSetting: boolean;
  openApiKeyModal: boolean;
  apiKey?: string;
  settings: SettingsType;
  toggleDrawer: (bool?: boolean) => void;
  toggleSetting: (bool?: boolean) => void;
  setApiKeyModal: (bool: boolean) => void;
  setApiKey: (key: string) => void;
}

const useCommon = create<CommonType>()((set, get) => ({
  openDrawer: false,
  openSetting: false,
  openApiKeyModal: false,
  apiKey: undefined,
  settings: {
    username: "Me",
    gptname: "ChatGPT",
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
}));

export default useCommon;
