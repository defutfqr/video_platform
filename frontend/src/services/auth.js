import api from './api';

export const login = async (username, password) => {
    const response = await api.post('/auth/token/', {
        username,
        password
    });
    localStorage.setItem('access_token', response.data.access);
    return response.data;
};

export const register = async (userData) => {
    return await api.post('/auth/register/', userData);
};
