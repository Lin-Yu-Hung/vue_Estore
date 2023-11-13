<template>
  <div class="px-2 d-center">
    <img src="@/assets/images/e-store-logo.png" class="menu-logo" alt="" />
  </div>
  <ul class="menuList">
    <li>
      <router-link class="menu-link lg-down-hide" to="home"
        ><font-awesome-icon
          class="lg-down-hide"
          icon="fa-home"
          role="button"
        />首頁</router-link
      >
    </li>
    <li class="dropdown-list lg-down-hide">
      <div
        class="dropdown-title"
        @click="toggleStatus"
        data-bs-toggle="collapse"
        data-bs-target="#test"
        aria-expanded="true"
        aria-controls="test"
      >
        <span class="pe-none">
          <font-awesome-icon
            class="lg-down-hide"
            icon="fa-list"
            role="button"
          />產品設定
        </span>
        <font-awesome-icon
          class="lg-down-hide dropdown-arrow pe-none"
          icon="fa-chevron-right"
        />
      </div>
      <div class="collapse multi-collapse" id="test">
        <ul>
          <li class="pt-3 pb-0">
            <router-link class="menu-link lg-down-hide" to="home"
              >建立商品</router-link
            >
          </li>
          <li class="pt-3 pb-0">
            <router-link class="menu-link lg-down-hide" to="productList"
              >商品列表</router-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <router-link class="menu-link lg-down-hide" to="orderManage"
        ><font-awesome-icon
          class="lg-down-hide"
          icon="fa-cart-shopping"
          role="button"
        />購物車</router-link
      >
    </li>
  </ul>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref("");
    const toggleStatus = (event) => {
      event.target.classList.toggle("collapsed");
    };
    return {
      active,
      toggleStatus,
    };
  },
};
</script>

<style lang="scss" scoped></style>
