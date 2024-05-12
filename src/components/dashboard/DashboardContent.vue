<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2 pt-1">
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
        <div class="lg-up-hide d-end p-2">
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
        </div>
        <div
          class="offcanvas-body d-column align-items-center align-items-lg-end"
        >
          <div class="navbar-nav flex-grow-1 lg-up-hide w-100">
            <MenuList v-if="!menuStatus">
              <template v-slot:menu>
                <ul class="menuList">
                  <li>
                    <router-link class="menu-link" to="home"
                      ><font-awesome-icon
                        class=""
                        icon="fa-home"
                        role="button"
                      />首頁</router-link
                    >
                  </li>
                  <li class="dropdown-list">
                    <div
                      class="dropdown-title"
                      @click="toggleStatus"
                      data-bs-toggle="collapse"
                      data-bs-target="#productSetting"
                      aria-expanded="false"
                      aria-controls="productSetting"
                    >
                      <span class="pe-none">
                        <font-awesome-icon
                          class=""
                          icon="fa-list"
                          role="button"
                        />產品設定
                      </span>
                      <font-awesome-icon
                        class="dropdown-arrow pe-none"
                        icon="fa-chevron-right"
                      />
                    </div>
                    <div class="collapse multi-collapse" id="productSetting">
                      <ul>
                        <li class="collapse-item" parentId="productSetting">
                          <router-link class="menu-link" to="setProduct"
                            >建立商品</router-link
                          >
                        </li>
                        <li class="collapse-item" parentId="productSetting">
                          <router-link class="menu-link" to="editProduct"
                            >修改商品</router-link
                          >
                        </li>
                        <li class="collapse-item" parentId="productSetting">
                          <router-link class="menu-link" to="productList"
                            >商品列表</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="dropdown-list">
                    <div
                      class="dropdown-title"
                      @click="toggleStatus"
                      data-bs-toggle="collapse"
                      data-bs-target="#orderManage"
                      aria-expanded="false"
                      aria-controls="orderManage"
                    >
                      <span class="pe-none">
                        <font-awesome-icon
                          icon="fa-file-lines"
                          role="button"
                        />訂單管理
                      </span>
                      <font-awesome-icon
                        class="dropdown-arrow pe-none"
                        icon="fa-chevron-right"
                      />
                    </div>
                    <div class="collapse multi-collapse" id="orderManage">
                      <ul>
                        <li class="collapse-item" parentId="orderManage">
                          <router-link class="menu-link" to="orderList"
                            >訂單列表</router-link
                          >
                        </li>
                        <li class="collapse-item" parentId="orderManage">
                          <router-link class="menu-link" to="coupon"
                            >設定優惠券</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </template>
            </MenuList>
          </div>

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
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { setCookie } from "@/methods/cookie.js";
import menuStore from "@/stores/menu";
import { storeToRefs } from "pinia";
import MenuList from "@/components/dashboard/MenuList.vue";
import { watch } from "vue";
import { hideOffcanvas } from "@/methods/bootstrap.js";
import { useRoute } from "vue-router";
import { toggleStatus } from "@/methods/util.js";
import Footer from "@/components/Footer.vue";

export default {
  components: { MenuList, Footer },
  emits: ["changeMenuStatus"],
  setup(props, context) {
    const route = useRoute();
    watch(
      () => route.path,
      (value) => {
        hideOffcanvas("offcanvasDarkNavbar");
      }
    );
    const menu = menuStore();
    const { emit } = context;
    const { menuStatus } = storeToRefs(menu);
    if (window.innerWidth < 992) {
      menu.hideMenu();
    } else {
      menu.showMenu();
    }
    const setMenuStatus = () => {
      emit("changeMenuStatus");
    };

    return {
      setCookie,
      setMenuStatus,
      menuStatus,
      toggleStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.offcanvas {
  max-width: 85%;
}
.navbar-toggler {
  border: none;

  &:focus {
    box-shadow: none;
  }
}

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
