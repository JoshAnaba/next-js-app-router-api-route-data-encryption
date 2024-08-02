import axios from 'axios';
import type { LoginDataType } from "@/types";
const restAgent = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USERMGT_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


restAgent.interceptors.response.use(undefined, (error) => {
  const statusCode = error.response ? error.response.status : null;
  if (statusCode && statusCode === 401) {
    // setLogout();
    if (!window.location.pathname.includes('/auth/login')) {
      window.location.href = `/auth/login?fallBackUrl=${window.location.pathname}`;
    }
    return;
  }
  return Promise.reject(error);
});


export const setConfig = () => {
  // const token = getToken();
  const config = {
    headers: {},
    params: {},
  };
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
};


export const authenticate = {
  login: (data:LoginDataType) => {
    return restAgent.post('/auth/login', data);
  }
}