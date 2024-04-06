<template>
  <div class="main-nav container rounded-pill bg-primary py-0 shadow">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col col-lg-2 d-flex align-items-center">
          <font-awesome-icon
            class="fs-5 text-white me-3 lg-up-hide"
            icon="fa-bars"
            role="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          />
          <div
            class="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <img
                class="logo"
                src="@/assets/images/e-store-logo.png"
                alt="logo"
              />
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <MenuList>
                <template v-slot:menu>
                  <ul class="menuList">
                    <li>
                      <router-link class="menu-link" to="/eStore/home"
                        ><font-awesome-icon
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
                          />商品列表
                        </span>
                        <font-awesome-icon
                          class="dropdown-arrow pe-none"
                          icon="fa-chevron-right"
                        />
                      </div>
                      <div class="collapse multi-collapse" id="productSetting">
                        <!-- <ul>
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
                          </ul> -->
                      </div>
                    </li>
                  </ul>
                </template>
              </MenuList>
            </div>
          </div>
          <img class="logo" src="@/assets/images/e-store-logo.png" alt="logo" />
        </div>
        <div class="col-4 lg-down-hide">
          <ul class="nav">
            <li>
              <router-link class="menu-link" to="/eStore/home"
                >首頁</router-link
              >
            </li>
            <li>
              <DropDownMenu>
                <template v-slot:header>
                  <router-link class="menu-link" to="productList"
                    >商品列表</router-link
                  >
                </template>
                <template v-slot:menu>
                  <ul class="text-black ps-0 py-2 mb-0">
                    <li class="border-bottom px-2 py-1 text-end">個人資料</li>
                    <li class="border-bottom px-2 py-1 text-end">登出</li>
                  </ul>
                </template>
              </DropDownMenu>
            </li>
          </ul>
        </div>
        <div class="col mobile-hide">
          <div
            class="input-group d-center align-items-center rounded-pill border bg-white"
          >
            <input
              type="text"
              class="form-control rounded-pill border-0 ps-3"
              placeholder="輸入商品關鍵字"
            />
            <font-awesome-icon class="px-3" icon="fa-search" role="button" />
          </div>
        </div>
        <div class="col col-md-3 d-end align-items-center pe-md-5">
          <DropDownMenu>
            <template v-slot:header>
              <font-awesome-icon
                class="fs-5 ms-3 ms-md-4 text-white"
                icon="fa-user"
                role="button"
              />
            </template>
            <template v-slot:menu>
              <ul class="profile ps-0 py-2 mb-0">
                <li class="border-bottom px-2 py-1 text-end">個人資料</li>
                <li class="border-bottom px-2 py-1 text-end">登出</li>
              </ul>
            </template>
          </DropDownMenu>
          <DropDownMenu>
            <template v-slot:header>
              <div class="position-relative pe-2">
                <font-awesome-icon
                  class="fs-5 ms-3 ms-md-4 text-white"
                  icon="fa-cart-shopping"
                  role="button"
                ></font-awesome-icon>
                <span
                  v-if="cartItems.length > 0"
                  class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
                >
                  {{ cartItemCount }}
                </span>
              </div>
            </template>
            <template v-slot:menu>
              <template v-if="cartItems.length > 0">
                <div class="cartList pb-0">
                  <div
                    class="card mb-2 border-0 border-bottom rounded-0"
                    v-for="(item, index) in cartItems"
                    :key="item.info.id"
                  >
                    <div class="d-flex align-items-center">
                      <img :src="item.info.imageUrl" :alt="item.info.title" />
                      <div class="card-body d-column p-0 pb-2">
                        <div class="d-between mb-2">
                          <h5 class="card-title fs-small fs-lg-base mb-0">
                            {{ item.info.title }}
                          </h5>
                          <font-awesome-icon
                            @click="cart.delItem(index)"
                            icon="fa-xmark"
                            class="del-btn m-0 text-secondary"
                          />
                        </div>
                        <p class="description text-secondary fs-small mb-2">
                          {{ item.info.description }}
                        </p>
                        <p class="text-end mb-0">
                          $ {{ item.info.price.toLocaleString() }} *
                          {{ item.count }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-column align-items-end p-2">
                  <p class="mb-2">
                    總金額:
                    <span class="fs-5"
                      >$ {{ cartAmount.toLocaleString() }}</span
                    >
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    @click="router.push('/eStore/cart')"
                  >
                    查看購物車
                  </button>
                </div>
              </template>
            </template>
          </DropDownMenu>
        </div>
      </div>
    </div>
  </div>
  <div class="main-bg" v-if="route.name === 'home'"></div>
  <div class="container content">
    <router-view />
  </div>
  <Footer />
</template>
<script>
import DropDownMenu from "@/components/shared/DropDownMenu.vue";
import MenuList from "@/components/dashboard/MenuList.vue";
import { toggleStatus } from "@/methods/util.js";
import loadingStore from "@/stores/loading";
import Footer from "@/components/Footer.vue";
import { apiGetProductAll } from "@/api/api.js";
import "swiper/css/free-mode";
import { ref, provide, computed, watch } from "vue";
import { errorAlert } from "@/methods/sweetAlert.js";
import { storeToRefs } from "pinia";
import cartStore from "@/stores/shop/cart.js";
import { useRoute, useRouter } from "vue-router";
import { hideOffcanvas } from "@/methods/bootstrap.js";
export default {
  components: {
    DropDownMenu,
    MenuList,
    Footer,
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    watch(
      () => route.path,
      (value) => {
        hideOffcanvas("offcanvasNavbar");
      }
    );
    const loading = loadingStore();
    const cart = cartStore();
    const { cartItems, cartAmount, cartItemCount } = storeToRefs(cart);
    const productList = ref([]);
    const pageItemCount = ref(9); // 分頁每頁顯示數量
    window.addEventListener("resize", (event) => {
      if (window.innerWidth > 992) {
        pageItemCount.value = 9;
      } else {
        pageItemCount.value = 6;
      }
    });
    const productListMap = computed(() => {
      return productList.value.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
      }, {});
    });
    const getAllProduct = async () => {
      // loading.showLoading();
      try {
        const res = await apiGetProductAll();
        // console.log(res);
        productList.value = JSON.parse(JSON.stringify(res.data.products));
      } catch (error) {
        errorAlert("取得資料錯誤", "請重新整理網頁或聯絡客服人員");
      } finally {
        // setTimeout(() => {
        //   loading.hideLoading();
        // }, 1000);
      }
    };
    getAllProduct();
    provide("productList", productList);
    provide("productListMap", productListMap);
    provide("pageItemCount", pageItemCount);
    return {
      productList,
      toggleStatus,
      cartItems,
      cartAmount,
      cartItemCount,
      cart,
      route,
      router,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
}
.main-bg {
  object-fit: cover;
  background-image: url("D:/作品/vue_Estore/src/assets/images/bg-3.jpg");
  background-size: cover;
  height: 80svh;
  @media screen and (max-height: 772px) {
    height: 95svh;
  }
  position: relative;
  position: absolute;
  top: 0;
  width: 100%;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    opacity: 0.5;
    z-index: 1;
  }
}
.content {
  min-height: calc(100svh - 72px - 60px);
}
.main-nav {
  // position: sticky;
  // top: 0;
  position: relative;
  z-index: 4;
  margin-top: -1px;
  padding: 0.25rem 2rem;

  .logo {
    width: 150px;
  }
  .nav {
    display: flex;
    align-items: center;
    li {
      padding: 0 1rem;
    }
  }
  .badge {
    top: -4px;
  }
  .profile {
    li {
      white-space: nowrap;
      &:hover {
        background-color: rgb(245, 242, 242);
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0.25rem 1.5rem;
  }
  @media screen and (max-width: 576px) {
    padding: 1rem;
    border-radius: 0% !important;
    .badge {
      top: -2px;
    }
  }
}

// 購物車
.cartList {
  // max-width: 50vw;
  padding: 0.75rem 1rem;
  max-height: 70svh;
  overflow-y: auto;
  .card {
    img {
      width: 125px;
    }
    .del-btn {
      &:hover {
        color: black !important;
      }
    }
    .description {
      // width: max-content;
      min-width: 18vw;
      height: 42px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media screen and (max-width: 1440px) {
        min-width: 25vw;
      }
      @media screen and (max-width: 576px) {
        min-width: 40vw;
      }
    }
  }
}
</style>
