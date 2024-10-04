import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // Your API base URL
});

// Request interceptor to add the auth token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or your auth store
    const token = localStorage.getItem('authToken');

    // If token exists, add it to headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response) => {
    // You can handle the response here if needed
    return response;
  },
  (error) => {
    // Handle response errors, like unauthorized access
    if (error.response && error.response.status === 401) {
      // Clear the token if it's unauthorized (e.g., token expired)
      localStorage.removeItem('authToken');

      // Optionally redirect the user to login
      window.location.href = '/login'; // Or use a redirect function in a React Router setup
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
