// src/api/userRepository.ts
import { api } from './apiClient';

export interface AuthResponse { token: string; }
export interface RegisterResponse { userId: string; }

export const userRepository = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('User/login', { email, password });
    return res.data;
  },
  register: async (email: string, password: string): Promise<RegisterResponse> => {
    const res = await api.post<RegisterResponse>('User/register', { email, password });
    return res.data;
  },
};
