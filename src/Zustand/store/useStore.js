import { create } from "zustand";

const useStore = create((set) => ({
  isLoginModalopen: false,
  currentRegistrationStep: 1,
  currentFilterGameStep: 1,
  openRewardTable: false,

  // Action to set modal state explicitly
  setIsLoginModalOpen: (value) => set({ isLoginModalopen: value }), // Accept value to set

  setCurrentRegistrationStep: (value) =>
    set({ currentRegistrationStep: value }),

  setCurrentFilterGameStep: (value) => set({ currentFilterGameStep: value }),

  setOpenRewardTable: (value) => set({ openRewardTable: value }),
}));

export default useStore;
