import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://dev.betteritem.store',
  baseURL: 'http://13.124.170.30:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
