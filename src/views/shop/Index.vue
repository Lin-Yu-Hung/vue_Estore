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
                        data-bs-target="#productList"
                        aria-expanded="false"
                        aria-controls="productList"
                      >
                        <span class="pe-none">
                          <font-awesome-icon
                            icon="fa-list"
                            role="button"
                          />商品列表
                        </span>
                        <font-awesome-icon
                          class="dropdown-arrow pe-none"
                          icon="fa-chevron-right"
                        />
                      </div>
                      <div class="collapse multi-collapse" id="productList">
                        <ul class="mt-3 ps-4">
                          <li parentId="productList" class="collapse-item">
                            <router-link
                              class="menu-link"
                              to="/eStore/productList"
                              >所有商品</router-link
                            >
                          </li>

                          <li parentId="productList" class="collapse-item">
                            <div
                              class="dropdown-title d-inline-flex align-items-center justify-content-between w-90"
                              @click="toggleStatus"
                              data-bs-toggle="collapse"
                              data-bs-target="#productCategory"
                              aria-expanded="false"
                              aria-controls="productCategory"
                              :class="{
                                'router-link-active': route.fullPath.includes(
                                  '/eStore/productList/'
                                ),
                              }"
                            >
                              <span class="pe-none">商品分類 </span>
                              <font-awesome-icon
                                class="dropdown-arrow pe-none"
                                icon="fa-chevron-right"
                              />
                            </div>
                            <div
                              class="collapse multi-collapse"
                              id="productCategory"
                            >
                              <ul class="mt-3 ps-3">
                                <li
                                  class="collapse-item"
                                  parentId="productCategory"
                                  v-for="item in productCategoryList"
                                  :key="item"
                                >
                                  <router-link
                                    class="menu-link text-underline-hover"
                                    :to="`/eStore/productList/${translate(
                                      item
                                    )}`"
                                    >{{ item }}</router-link
                                  >
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
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
              <DropDownMenu :alignLeft="true">
                <template v-slot:header>
                  <span
                    class="menu-link"
                    :class="{
                      'text-white': route.fullPath.includes(
                        '/eStore/productList'
                      ),
                    }"
                    >商品列表<font-awesome-icon
                      class="ms-2"
                      icon="fa-chevron-down"
                      role="button"
                  /></span>
                </template>
                <template v-slot:menu v-if="productCategoryList.length > 0">
                  <div class="product-menu p-4">
                    <div class="d-column flex-grow-1">
                      <router-link
                        to="/eStore/productList"
                        class="text-secondary fs-6 pb-2 mb-2 text-underline-hover"
                        ><font-awesome-icon icon="fa-list" class="me-1" />
                        所有商品</router-link
                      >

                      <div
                        class="accordion"
                        id="category"
                        style="width: max-content"
                      >
                        <div class="accordion-item border-0">
                          <ToggleArrowIcon
                            :show="true"
                            :collapseId="'productCategory'"
                          >
                            <template v-slot:title>
                              <h2
                                class="accordion-header fs-6 pb-2 pe-2"
                                data-bs-toggle="collapse"
                                data-bs-target="#productCategory"
                                aria-expanded="true"
                                aria-controls="category"
                                style="user-select: none"
                              >
                                商品分類
                              </h2>
                            </template>
                          </ToggleArrowIcon>
                          <div
                            id="productCategory"
                            class="accordion-collapse collapse p-0 show"
                            data-bs-parent="#category"
                          >
                            <div class="accordion-body p-0 border-top">
                              <div class="container-fluid mt-2">
                                <div class="row row-cols-2">
                                  <div
                                    class="col ps-0 py-1"
                                    v-for="item in productCategoryList"
                                    :key="item"
                                  >
                                    <router-link
                                      class="text-underline-hover text-secondary text-nowrap"
                                      :to="`/eStore/productList/${translate(
                                        item
                                      )}`"
                                    >
                                      {{ item }}
                                    </router-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </DropDownMenu>
            </li>
          </ul>
        </div>
        <div class="col mobile-hide">
          <!-- <div
            class="input-group d-center align-items-center rounded-pill border bg-white"
          >
            <input
              type="text"
              class="form-control rounded-pill border-0 ps-3"
              placeholder="輸入商品關鍵字"
            />
            <font-awesome-icon class="px-3" icon="fa-search" role="button" />
          </div> -->
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
              <div class="profile py-2">
                <router-link
                  to="/dashboard/home"
                  class="border-bottom px-2 py-1 text-end text-primary"
                  >後臺管理</router-link
                >
                <router-link
                  to="/eStore/userOrder"
                  class="border-bottom px-2 py-1 text-end text-primary"
                  >訂單列表</router-link
                >
              </div>
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
              <p v-else class="m-4 text-nowrap mb-0 pb-4 fs-5">
                目前還未將商品加入購物車
                <font-awesome-icon class="ms-1" icon="fa-face-frown" />
              </p>
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
import ToggleArrowIcon from "@/components/shared/ToggleArrowIcon.vue";
import { translate } from "@/methods/translate.js";

export default {
  components: {
    DropDownMenu,
    MenuList,
    Footer,
    ToggleArrowIcon,
  },
  setup(props) {
    const route = useRoute();
    console.log("🚀  route:", route.fullPath.includes("/eStore/productList"));
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
    const productCategoryList = computed(() => {
      const categoryMap = {};
      return productList.value.reduce((acc, product) => {
        if (!categoryMap[product.category]) {
          categoryMap[product.category] = true;
          acc.push(product.category);
        }
        return acc;
      }, []);
    });

    const getAllProduct = async () => {
      try {
        const res = await apiGetProductAll();
        console.log(res);
        productList.value = JSON.parse(JSON.stringify(res.data.products));
      } catch (error) {
        errorAlert("取得資料錯誤", "請重新整理網頁或聯絡客服人員");
      }
    };

    getAllProduct();
    provide("productList", productList);
    provide("productListMap", productListMap);
    provide("pageItemCount", pageItemCount);
    provide("productCategoryList", productCategoryList);
    return {
      productList,
      toggleStatus,
      cartItems,
      cartAmount,
      cartItemCount,
      cart,
      route,
      router,
      productCategoryList,
      translate,
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
    a {
      display: block;
      width: 100%;
      white-space: nowrap;
      &:hover {
        background-color: rgb(245, 242, 242);
      }
      &.router-link-active {
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
.product-menu {
  min-width: 380px;
  a {
    &.router-link-active {
      text-decoration: underline;
      color: black !important;
    }
  }
}
</style>
