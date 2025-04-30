import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api', // ton backend Laravel
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     Accept: 'application/json',
//   },
// });

// export default api;

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:8000/api",
// });

// // Ajouter automatiquement le token à toutes les requêtes
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // si tu utilises Sanctum
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ou sessionStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;


