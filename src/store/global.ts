import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface IGlobalState {
  isMenuOpen: boolean;
  isSplash: boolean;
  toggleMenu: () => void;
  setMenu: (flag: boolean) => void;
  setSplash: (flag: boolean) => void;
}

export const useGlobalStore = create<IGlobalState>((set) => ({
  isMenuOpen: false,
  isSplash: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenu: (flag) => set((state) => ({ isMenuOpen: flag })),
  setSplash: (flag) => set((state) => ({ isSplash: flag })),
}));

// export default useGlobalStore;

export interface IPersistState {
  fishes: number;
}

export const usePersistStore = create<IPersistState>(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: 'food-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

// export default usePersistStore;
