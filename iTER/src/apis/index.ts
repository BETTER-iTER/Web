import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
const accessToken = localStorage.getItem('accessToken');
axios.defaults.headers.common['Authorization'] = `${accessToken}`;
const api = axios.create({
  baseURL: 'https://dev.betteritem.store',
  timeout: 10000,
});

export default api;
