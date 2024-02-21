import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { getCookie } from "../methods/cookie";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/login.vue"),
      beforeEnter: (to, from, next) => {
        const token = getCookie("token");
        if (!token) {
          next("/login");
        } else {
          next("/dashboard/productList");
        }
      },
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登入Estore",
      },
      component: () => import("@/views/login.vue"),
    },
    {
      path: "/eStore",
      name: "eStore",
      meta: {
        title: "E-Store",
      },
      component: () => import("@/views/shop/Index.vue"),
      children: [{
        path: "home",
        component: () => import("@/components/shop/Home.vue"),

      }, {
        path: "productList",
        component: () => import("@/components/dashboard/ProductList.vue"),
      }]
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        authRequired: true,
        title: "後台管理",
      },
      component: () => import("@/views/dashboard/Index.vue"),
      children: [
        {
          path: "productList",
          component: () => import("@/components/dashboard/ProductList.vue"),
        },
        {
          path: "setProduct",
          component: () => import("@/components/dashboard/SetProduct.vue"),
        },
        {
          path: "editProduct",
          component: () => import("@/components/dashboard/SetProduct.vue"),
        },
        {
          path: "orderManage",
          component: () => import("@/components/dashboard/CartSetting.vue"),
        },
        {
          path: "home",
          component: () => import("@/components/dashboard/Home.vue"),
        }
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});
router.beforeEach((to) => {
  // 設定HTML title
  window.document.title = to.meta.title ? to.meta.title : "E_store";
  if (to.meta.authRequired) {
    const token = getCookie("token");
    if (!token) {
      return { name: "login", query: { redirect: to.fullPath } };
    }
  }
});
export default router;
