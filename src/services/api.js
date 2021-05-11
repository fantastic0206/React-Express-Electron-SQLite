import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.107.47:3001/',
});

export default api;