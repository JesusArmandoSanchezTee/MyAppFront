// src/store/authStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userRepository } from '../api/userRepository';
import { secureStorage } from '../infrastructure/storage/secureStorage';

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  restoreToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const { token } = await userRepository.login(email, password);
          await secureStorage.saveToken(token);
          set({ token, isLoading: false });
        } catch (err: any) {
          set({ error: err.message, isLoading: false });
        }
      },

      register: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          await userRepository.register(email, password);
          const { token } = await userRepository.login(email, password);
          await secureStorage.saveToken(token);
          set({ token, isLoading: false });
        } catch (err: any) {
          set({ error: err.message, isLoading: false });
        }
      },

      logout: async () => {
        await secureStorage.removeToken();
        set({ token: null });
      },

      restoreToken: async () => {
        const token = await secureStorage.getToken();
        if (token) set({ token });
      },
    }),
    {
      name: 'auth-storage',
      // === aquí está la clave ===
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
