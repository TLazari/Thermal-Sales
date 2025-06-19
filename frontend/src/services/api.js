import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getHealth = async () => {
  const response = await api.get('/api/health');
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post('/api/login', { email, password });
  return response.data;
};

export const registerUser = async (email, password) => {
  const response = await api.post('/api/register', { email, password });
  return response.data;
};

export default api;
