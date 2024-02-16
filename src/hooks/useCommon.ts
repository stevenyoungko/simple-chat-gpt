import { create } from "zustand";

interface CommonType {
  openDrawer: boolean;
  openSetting: boolean;
  toggleDrawer: (bool?: boolean) => void;
  toggleSetting: (bool?: boolean) => void;
}

const useCommon = create<CommonType>()((set, get) => ({
  openDrawer: false,
  openSetting: false,
  toggleDrawer: (bool?: boolean) => {
    const { openDrawer } = get();
    set({ openDrawer: typeof bool === "boolean" ? bool : !openDrawer });
  },
  toggleSetting: (bool?: boolean) => {
    const { openSetting } = get();
    set({ openSetting: typeof bool === "boolean" ? bool : !openSetting });
  },
}));

export default useCommon;
