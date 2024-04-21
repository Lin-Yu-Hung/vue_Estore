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
export const api = axios.create({
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
    console.log("🚀  error:", error)
    if (error.message == `timeout of ${timeout}ms exceeded`) {
      loading.hideLoading();
      errorAlert('連線逾時', "請確認連線狀態後重新嘗試")
    }
  }

);
// admin
export const login_api = (params) => login.post("/admin/signin", params);
export const apiGetAdminProductAll = () => api.get("/admin/products/all");
export const createProduct = (params) => api.post("/admin/product", params);
export const apiUpdateProduct = (params) => api.put(`/admin/product/${params.data.id}`, params);
export const apiDeleteProduct = (id) => api.delete(`/admin/product/${id}`);
export const apiUploadImg = (data) => api.post(`/admin/upload`, data);
// coupon
export const apiCreateCoupon = (params) => api.post("/admin/coupon", params)
export const apiGetCouponList = (page) => api.get(`/admin/coupons?page=${page}`)
export const apiUpdateCoupon = (params, id) => api.put(`/admin/coupon/${id}`, params)
export const apiDeleteCoupon = (id) => api.delete(`/admin/coupon/${id}`)

// 客戶端
export const apiGetProductAll = () => api.get("/products/all");
export const apiCreateCartItem = (params) => api.post("/cart", params);
export const apiGetOrders = (page) => api.get(`/orders?page=${page}`);
export const apiCreateOrder = (params) => api.post("/order", params);
// 因六角提供的建立訂單API必須要先透過API建立購物車才可建立訂單
export const apiApplyCoupon = (params) => api.post("/coupon", params);


// linePay
export const sendLinePayReq = (params) => api.post("https://express-4080e68s-projects.vercel.app/linepay/request", params)
export const sendLinePayConfirm = (params) => api.post("https://express-4080e68s-projects.vercel.app/payments/confirm", params)