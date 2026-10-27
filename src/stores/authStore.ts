import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthUser } from "../services/authService";
import { ADMIN_USERNAME } from "../services/authService";

interface AuthStore {
  user: AuthUser | null;
  token: string | null;
  isAdmin: boolean;
  setAuth: (user: AuthUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAdmin: false,

      setAuth: (user) =>
        set({
          user,
          token: user.accessToken,
          isAdmin: user.username === ADMIN_USERNAME,
        }),

      logout: () => set({ user: null, token: null, isAdmin: false }),
    }),
    { name: "pocket_cart_auth" }
  )
);
