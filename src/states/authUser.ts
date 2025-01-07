import { create } from "zustand";
import { persist } from "zustand/middleware";
import jwt_decode from "jwt-decode"; // Importa jwt-decode

type userStore = {
  user: string | null;
  nome: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, token:string) => void;
  logout: () => void;
};

const useAuth = create(
  persist<userStore>(
    (set) => ({
      user: null,
      token: null,
      nome: null,
      isAuthenticated: false,
      login: (username, token) =>
        set({ user: username, token, isAuthenticated: true }),
        setNome: (nome) => set({ nome }),
      logout: () => set({ user: null, nome: null, token:null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage", 
    }
  )
);

export default useAuth;
