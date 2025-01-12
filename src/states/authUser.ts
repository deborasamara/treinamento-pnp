import { create } from "zustand";
import { persist } from "zustand/middleware";
import {jwtDecode }from "jwt-decode";

type userStore = {
  user: string | null;
  nome: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  setNome: (nome: string) => void;
};

const useAuth = create(
  persist<userStore>(
    (set) => ({
      user: null,
      token: null,
      nome: null,
      isAuthenticated: false,
      login: (token) => {
        try {
          console.log(token);
          const decodedToken = jwtDecode<userStore>(token);
          set({nome: decodedToken.nome, user: decodedToken.user, token, isAuthenticated: true});
        } catch (error) {
          console.log(error);
        }
      },
      setNome: (nome) => set({ nome }),
      logout: () =>
        set({ user: null, nome: null, token: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuth;
