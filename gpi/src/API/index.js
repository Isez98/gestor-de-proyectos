import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1818'
});

export const getUsers = payload => api.get('/users', payload);
export const getUserByEmail = payload => api.get('/user/:id', payload).then(response => { console.log(response)})
export const login = payload => api.post('/login', payload).then(response => console.log(response))

const apis = {
  getUsers,
  getUserByEmail,
  login
};

export default apis;