import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.baseURL = 'http://localhost:5000';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)