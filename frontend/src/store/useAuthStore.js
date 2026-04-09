// store/useAuthStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,

  login: async (data) => {
    try {
      set({ loading: true });
      const res = await axiosInstance.post("/api/auth/login", data);
      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      alert(error.response?.data?.message || "Login gagal");
    }
  },

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/api/auth/check");
      set({ user: res.data.user });
    } catch {
      set({ user: null });
    }
  },

  logout: () => {
    set({ user: null });
  },
}));
