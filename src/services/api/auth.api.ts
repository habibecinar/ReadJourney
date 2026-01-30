import { apiClient } from './api.client';
import { RegisterCredentials, LoginCredentials, User } from '../../types/auth.types';

export const authAPI = {
  register: async (credentials: RegisterCredentials): Promise<User> => {
    const { data } = await apiClient.post('/users/signup', credentials);
    if (data.token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    }
    return data;
  },

  login: async (credentials: LoginCredentials): Promise<User> => {
    const { data } = await apiClient.post('/users/signin', credentials);
    if (data.token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    }
    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/users/signout');
    delete apiClient.defaults.headers.common['Authorization'];
  },

  getCurrentUser: async (): Promise<User> => {
    const { data } = await apiClient.get('/users/current');
    return data;
  },
};
