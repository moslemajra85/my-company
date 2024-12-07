// import axios from 'axios';

// // Base URL for the backend
// const API_URL = 'http://localhost:5000/api';

// const httpClient = axios.create({
//   baseURL: API_URL,
// });

// httpClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = token;
//   }
//   return config;
// });

import axios from 'axios';

// Base URL for the backend API
//const API_URL = 'http://localhost:5000/api'; // Replace with your actual backend URL
const API_URL = 'https://backend-ecommerce-hazel.vercel.app/api'; // Replace with your actual backend URL

// Create an Axios instance
const httpClient = axios.create({
  baseURL: API_URL,
});

// Request Interceptor to include the token in the `x-auth-token` header
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    if (token) {
      config.headers['x-auth-token'] = token; // Add token to the custom header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;

// export default httpClient;
