import axios from "axios";
import { getCookie } from "../methods/cookie";
import loadingStore from "@/stores/loading";
import { errorAlert } from "@/methods/sweetAlert.js";
const timeout = 10000;
const loading = loadingStore();
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

api.interceptors.response.use(
  (response) => { return response; },
  (error) => {
    if (error.message == `timeout of ${timeout}ms exceeded`) {
      loading.hideLoading();
      errorAlert('連線逾時', "請確認連線狀態後重新嘗試")
    }
  }

);
export const login_api = (params) => login.post("/admin/signin", params);
export const apiGetProductAll = () => api.get("/admin/products/all");
export const createProduct = (params) => api.post("/admin/product", params);
export const apiUpdateProduct = (params) => api.put(`/admin/product/${params.data.id}`, params);
export const apiDeleteProduct = (id) => api.delete(`/admin/product/${id}`);
export const apiUploadImg = (data) => api.post(`/admin/upload`, data);
