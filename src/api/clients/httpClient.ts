import axios from 'axios';

const httpClient = axios.create({
  baseURL: '/api',
  timeout: 10_000
});

httpClient.interceptors.request.use((config) => {
  // Example place to inject auth token or tracing headers
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Transform the error shape so the UI layer can handle it consistently
    return Promise.reject(error);
  }
);

export default httpClient;
