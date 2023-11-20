import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.betteritem.store',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('accessToken'),
  },
});

export default api;
