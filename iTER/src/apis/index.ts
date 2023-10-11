import axios from 'axios';

const url = 'https://dev.betteritem.store ';
const api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
