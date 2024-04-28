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
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/components/shop/Home.vue"),
        },
        {
          path: "productList",
          component: () => import("@/components/dashboard/ProductList.vue"),
        },
        {
          path: "productInfo/:id",
          component: () => import("@/components/shop/ProductInfo.vue"),
        },
        {
          path: "cart",
          component: () => import("@/components/shop/Cart.vue"),
        },
        {
          path: "confirmOrder",
          component: () => import("@/components/shop/ConfirmOrder.vue"),
        },
        {
          path: "confirmPay",
          component: () => import("@/components/shop/ConfirmPay.vue"),
        },
        {
          path: "userOrder",
          component: () => import("@/components/shop/userOrder.vue"),
        },
        {
          path: "completeOrder/:orderId",
          component: () => import("@/components/shop/CompleteOrder.vue"),
        },

      ]
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
          path: "orderList",
          component: () => import("@/components/dashboard/CartSetting.vue"),
        },
        {
          path: "coupon",
          component: () => import("@/components/dashboard/conpon/ConponList.vue"),
        },
        {
          path: "home",
          component: () => import("@/components/dashboard/Home.vue"),
        }
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue"),
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
