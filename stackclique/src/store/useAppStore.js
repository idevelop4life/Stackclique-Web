import { create } from "zustand";

const userToken = localStorage.getItem("loginToken");
export const useAppStore = create((set) => ({
    user: userToken,
    setUser: (userState) => set(() => ({ user: userState })),
}));
