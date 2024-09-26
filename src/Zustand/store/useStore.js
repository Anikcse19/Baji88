import { create } from "zustand";

const useStore = create((set) => ({
  isLoginModalopen: false,
  currentRegistrationStep: 1,

  // Action to set modal state explicitly
  setIsLoginModalOpen: (value) => set({ isLoginModalopen: value }), // Accept value to set

  setCurrentRegistrationStep: (value) =>
    set({ currentRegistrationStep: value }),
}));

export default useStore;
