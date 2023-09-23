<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark px-2 pt-1">
    <div class="container-fluid">
      <div class="navbar-brand p-0">
        <font-awesome-icon
          class="lg-down-hide"
          :icon="menuStatus ? 'fa-arrow-left' : 'fa-arrow-right'"
          role="button"
          @click="setMenuStatus"
        />
        <img
          src="@/assets/images/e-store-logo.png"
          class="menu-logo-mobile lg-up-hide"
          alt="logo"
        />
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="md-up-hide d-end p-2">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-header justify-content-center">
          <img
            src="@/assets/images/e-store-logo.png"
            class="menu-logo-medium"
            alt="logo"
          />
          <!-- <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">test</h5> -->
        </div>
        <div
          class="offcanvas-body d-column align-items-center align-items-md-end"
        >
          <ul class="navbar-nav flex-grow-1 md-up-hide">
            <li class="nav-item">
              <router-link
                class="menu-link"
                aria-current="page"
                to="productList"
              >
                <font-awesome-icon
                  icon="fa-list"
                  role="button"
                />產品設定</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="menu-link" to="orderManage"
                ><font-awesome-icon
                  icon="fa-cart-shopping"
                  role="button"
                />購物車</router-link
              >
            </li>
            <li class="nav-item mt-auto"></li>
          </ul>
          <div class="d-center">
            <router-link
              class="menu-link"
              to="/login"
              @click="setCookie('token', '')"
              >登出<font-awesome-icon icon="fa-sign-out-alt" class="ms-2"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="dashboard-content">
    <div>
      <router-view />
    </div>
    <footer>
      <div class="d-between w-100 flex-wrap">
        <span>Copyright © 2023 YuHung Lin</span>
        <span>本作品僅作為個人作品使用，不含任何商業行為</span>
      </div>
    </footer>
  </div>
</template>
<script>
import { setCookie } from "@/methods/cookie.js";
import menuStore from "@/stores/menu";
import { storeToRefs } from "pinia";

export default {
  emits: ["changeMenuStatus"],
  setup(props, context) {
    const menu = menuStore();
    const { emit } = context;
    const { menuStatus } = storeToRefs(menu);

    const setMenuStatus = () => {
      emit("changeMenuStatus");
    };

    return {
      setCookie,
      setMenuStatus,
      menuStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.offcanvas-body {
  align-items: center;
  ul {
    li {
      font-size: 1.05rem;
      padding: 0.5rem 0;
    }
  }
}
</style>
