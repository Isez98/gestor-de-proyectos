import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1818'
});

export const getUsers = payload => api.get('/users', payload);
export const getUserByEmail = payload => api.get(`/user/${payload.email}`, payload).then(response => { 
  return response.data.data;
})
export const login = payload => api.post('/login', payload).then(response => {
  localStorage.setItem("ACCESS_TOKEN", response.data.token);
})

const apis = {
  getUsers,
  getUserByEmail,
  login
};

export default apis;