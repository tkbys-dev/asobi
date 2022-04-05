import create from 'zustand';

export interface IGlobalState {
  isMenuOpen: boolean;
  isSplash: boolean;
  toggleMenu: () => void;
  setMenu: (flag: boolean) => void;
  setSplash: (flag: boolean) => void;
}
const useGlobalStore = create<IGlobalState>((set) => ({
  isMenuOpen: false,
  isSplash: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenu: (flag) => set((state) => ({ isMenuOpen: flag })),
  setSplash: (flag) => set((state) => ({ isSplash: flag })),
}));

export default useGlobalStore;
