import { createRouter, createWebHashHistory } from "vue-router";
import { getCookie } from "../methods/cookie";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/login.vue'),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { authRequired: true, },
      component: () => import('@/views/dashboard/Index.vue'),
      children: [{
        path: 'productList',
        component: () => import('@/components/dashboard/ProductList.vue')
      }]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});
router.beforeEach((to,) => {
  if (to.meta.authRequired) {
    const token = getCookie('token')
    if (!token) {
      return { name: 'login', query: { redirect: to.fullPath } }
    }
  }
})
export default router;
