import { create } from "zustand";

enum ThemeMode {
  System = "system",
  Dark = "dark",
  Light = "light",
}

type useAntConfigType = {
  isDarkMode: boolean;
  toggleDarkMode: (isDark: boolean) => void;
  initialize: () => void;
};

const localThemeKey = "chat_gpt_theme";
const getSystemTheme = () => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  return matchMedia.matches ? ThemeMode.Dark : ThemeMode.Light;
};

const useAntConfig = create<useAntConfigType>((set, get) => ({
  isDarkMode: false,

  toggleDarkMode: (isDark: boolean) => {
    const isDarkMode = isDark || !get().isDarkMode;
  },

  initialize: () => {
    const { toggleDarkMode } = get();
    const defaultTheme =
      localStorage.getItem(localThemeKey) || getSystemTheme();
    toggleDarkMode(defaultTheme === ThemeMode.Dark);
  },
}));

export default useAntConfig;
