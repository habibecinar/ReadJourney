import api from './api';
import { RegisterData, LoginData, AuthResponse } from '@/types/auth.types';

export const authApi = {
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/users/signup', data);
    return response.data;
  },

  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/users/signin', data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/users/signout');
  },

  getCurrentUser: async (): Promise<AuthResponse> => {
    const response = await api.get<AuthResponse>('/users/current');
    return response.data;
  },
};
