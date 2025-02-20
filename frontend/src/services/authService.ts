import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export async function signup(email: string, password: string) {
  return axios.post(`${API_URL}/signup`, { email, password });
}

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { email, password });

  localStorage.setItem('token', response.data.token); // Store token
  return response.data;
}

export function logout() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}
