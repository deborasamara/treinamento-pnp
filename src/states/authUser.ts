import { create } from "zustand";

type userStore ={
    user: string | null;
    isAuthenticated: boolean;
    login: (username: string) => void;
    logout: () => void;
}

const useAuth = create<userStore>((set) => ({
    user: null, 
    isAuthenticated: false, 

    login: (username: string) =>
      set({
        user: username, 
        isAuthenticated: true, 
      }),
  
    logout: () =>
      set({
        user: null, 
        isAuthenticated: false, 
      }),
  }));
  
  export default useAuth;