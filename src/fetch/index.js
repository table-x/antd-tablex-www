import axios from 'axios';
import Cookie from './Cookie';
import { baseUrl } from '../configs';

const fetch = axios.create({
  baseURL: baseUrl, // node环境的不同，对应不同的baseURL
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});

fetch.interceptors.request.use(
  (config) => {
    const configs = config;
    if (typeof document !== 'undefined') {
      configs.headers['x-csrf-token'] = Cookie.get('csrfToken');
    }
    return configs;
  }
);

fetch.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetch;
