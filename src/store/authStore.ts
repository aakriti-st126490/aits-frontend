import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  login: (userData: any) => set({ user: userData }),
  logout: () => set({ user: null })
}));
