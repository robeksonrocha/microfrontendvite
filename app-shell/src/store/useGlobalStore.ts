// app-shell/src/store/useGlobalStore.ts
import { create } from 'zustand';

interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface GlobalStore {
  user: UserInfo | null;
  isAuthenticated: boolean;
  setUser: (user: UserInfo | null) => void;
  setAuthenticated: (status: boolean) => void;
  clearUser: () => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
}));
