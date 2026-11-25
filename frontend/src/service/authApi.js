import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:2999',
});

export const register = (username, password) =>
    api.post('/register', { username, password });

export const loginUser = (username, password) =>
    api.post('/login', { username, password });