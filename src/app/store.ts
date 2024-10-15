// store.ts
import { create } from 'zustand';

interface ThemeState {
    darkMode: boolean;
    setDarkMode: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    darkMode: false,
    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useThemeStore;
