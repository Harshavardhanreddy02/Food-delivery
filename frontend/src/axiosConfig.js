import axios from 'axios';

// Set base URL based on environment
const isLocalDev = window.location.hostname === 'localhost' && window.location.port === '3000';
// Use production backend URL for all environments
const baseURL = isLocalDev ? 'http://localhost:5000' : 'https://food-delivery-x5fb.onrender.com';
axios.defaults.baseURL = baseURL;

// Add request interceptor for debugging
axios.interceptors.request.use(request => {
  console.log('Starting Request:', request.url);
  return request;
});

// Add response interceptor for debugging
axios.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Request Failed:', error.config);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    return Promise.reject(error);
  }
);
