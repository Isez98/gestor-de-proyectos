import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1818'
});

//User API Requests
export const getUsers = payload => api.get('/users', payload);
export const getUserByEmail = payload => api.get(`/user/${payload.email}`, payload).then(response => { 
  return response.data.data;
})
export const login = payload => api.post('/login', payload).then(response => {
  localStorage.setItem("ACCESS_TOKEN", response.data.token);
})

//Projects API Requests
export const getProjects = payload => api.get('/projects', payload).then(response => { return response.data.data });
export const getProjectById = payload => api.get(`/project/${payload.id}`, payload).then(response => { return response.data.data }); 

//Modify later for clean code
export const postFile = payload => api.post(`/upload`, payload);

const apis = {
  getUsers,
  getUserByEmail,
  login, 
  getProjects,
  getProjectById,
  postFile,
};

export default apis;