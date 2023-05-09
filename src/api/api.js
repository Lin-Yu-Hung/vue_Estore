import axios from "axios";
import { getCookie } from "../methods/cookie";

const timeout = 3000;

const login = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
  timeout: timeout,
});
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}`,
  timeout: timeout,
});

api.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) {
    // console.log('token存在!');
    config.headers.Authorization = token;
  } else {
    console.log("token不存在!");
  }
  return config;
});

export const login_api = (params) => login.post("/admin/signin", params);
export const getProductAll = () => api.get("/admin/products/all");
