import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://readjourney.b.goit.study/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('persist:auth');
    if (token) {
      try {
        const authData = JSON.parse(token);
        const tokenValue = JSON.parse(authData.token);
        if (tokenValue) {
          config.headers.Authorization = `Bearer ${tokenValue}`;
        }
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('persist:auth');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
