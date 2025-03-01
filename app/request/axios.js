// src/api/axios.js
import axios from "axios";

export const baseURL = "https://api.ourtestingdomain.site";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// // Add a request interceptor to include the token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // Example: from localStorage

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, just return the response
    return response;
  },
  (error) => {
    // If a 401 error occurs
    if (error.response && error.response.status === 401) {
      // Clear any stored authentication data
      localStorage.removeItem("token");

      // Redirect to the login page
      window.location.href = "/signin"; // Adjust this path as needed
    }

    // Reject other errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
