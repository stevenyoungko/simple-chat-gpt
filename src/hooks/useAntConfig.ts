import { create } from 'zustand';

enum ThemeMode {
  System = "system",
  Dark = "dark",
  Light = "light",
}

type useAntConfigType = {
  isDarkMode: boolean;
  toggleDarkMode: (isDark?: boolean) => void;
  initialize: () => void;
};

const getSystemTheme = () => {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  return matchMedia.matches ? ThemeMode.Dark : ThemeMode.Light;
};

const useAntConfig = create<useAntConfigType>((set, get) => ({
  isDarkMode: false,

  toggleDarkMode: (isDark?: boolean) => {
    const next = typeof isDark === "boolean" ? isDark : !get().isDarkMode;
    const nextTheme = next ? ThemeMode.Dark : ThemeMode.Light;
    const prevTheme = next ? ThemeMode.Light : ThemeMode.Dark;
    set({
      isDarkMode: next,
    });

    // for Tailwindcss
    const doc = document.documentElement || document.body;
    if (doc.classList.contains(prevTheme)) {
      doc.classList.remove(prevTheme);
    }
    doc.classList.add(nextTheme);
  },

  initialize: () => {
    const { toggleDarkMode } = get();
    const defaultTheme = getSystemTheme();
    toggleDarkMode(defaultTheme === ThemeMode.Dark);
  },
}));

export default useAntConfig;
