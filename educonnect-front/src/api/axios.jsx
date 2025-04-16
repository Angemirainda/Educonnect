import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // ton backend Laravel
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

export default api;
