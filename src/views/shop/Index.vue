<template>
  <div class="main-bg"></div>
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
                      <router-link class="menu-link" to="home"
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
              <router-link class="menu-link" to="home">首頁</router-link>
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
                  <button type="button" class="btn btn-primary w-100">
                    立即結帳
                  </button>
                </div>
              </template>
            </template>
          </DropDownMenu>
        </div>
      </div>
    </div>
  </div>
  <div class="container main-content">
    <div class="main-ad">
      <div
        class="d-column align-items-center align-items-lg-start my-3 animate__animated animate__lightSpeedInLeft"
      >
        <p class="fs-2 fw-bold text-center text-lg-start">限時優惠！</p>
        <p class="fs-5 fs-sm-4">3C產品低至6折，最高立減4000元！</p>
        <button
          class="btn btn-primary rounded-pill w-50 py-2 border-white fw-bold"
        >
          立即查看
        </button>
      </div>
      <div class="today-promotion animate__animated animate__backInDown">
        <h2 class="mb-3 fs-3 d-flex align-items-center fw-bold">
          <img class="icon me-1" src="@/assets/icon/fire.png" alt="fire" />
          今日促銷
        </h2>

        <div class="card">
          <div class="product-info border-end pe-3">
            <p>Smartphone 6S 32GB LTE</p>
            <img
              src="@/assets/images/GoldPhone-1-300x300.webp"
              alt="Smartphone"
            />

            <div class="d-between align-items-center">
              <div class="d-column">
                <span
                  class="fs-small text-decoration-line-through text-secondary"
                  >$ {{ (45000).toLocaleString() }}</span
                >
                <span class="fs-5 text-danger"
                  >$ {{ (32000).toLocaleString() }}</span
                >
              </div>
              <font-awesome-icon
                class="text-white border rounded-pill p-2 fs-6 btn btn-outline-secondary"
                icon="fa-cart-arrow-down"
                role="button"
                @click="cart.addItem(productList[2])"
              ></font-awesome-icon>
            </div>
          </div>
          <div class="product-info ps-3">
            <p>Game Console Controller</p>
            <img
              src="@/assets/images/consal.webp"
              alt="Game Console Controller"
            />
            <div class="d-between align-items-center">
              <div class="d-column">
                <span
                  class="fs-small text-decoration-line-through text-secondary"
                  >$ {{ (4500).toLocaleString() }}</span
                >
                <span class="fs-5 text-danger"
                  >$ {{ (2500).toLocaleString() }}</span
                >
              </div>

              <font-awesome-icon
                class="text-white border rounded-pill p-2 fs-6 btn btn-outline-secondary"
                icon="fa-cart-arrow-down"
                role="button"
                @click="cart.addItem(productList[1])"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border p-3 rounded bg-white shadow mb-5">
      <h2 class="fs-4">熱賣商品</h2>
      <swiper
        v-if="productList.length === 0"
        :slidesPerView="2"
        :spaceBetween="20"
        :breakpoints="{
          '576': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 4,
          },
          '1200': {
            slidesPerView: 5,
          },
        }"
      >
        <swiper-slide v-for="item in 5" :key="item">
          <div class="card" aria-hidden="true">
            <div class="bg-secondary card-img-top"></div>
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
            </div></div
        ></swiper-slide>
      </swiper>
      <swiper
        v-else
        :slidesPerView="2"
        :spaceBetween="20"
        :freeMode="true"
        :navigation="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '576': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 4,
          },
          '1200': {
            slidesPerView: 5,
          },
        }"
        :modules="modules"
      >
        <swiper-slide
          class="h-auto"
          v-for="(product, index) in productList"
          :key="index"
        >
          <div class="card h-100 card-hover-shadow">
            <div class="card-body d-column">
              <img
                :src="product.imageUrl"
                class="card-img-top mb-2"
                :alt="product.title"
                :title="product.title"
              />
              <h5 class="card-title text-truncate mb-0">
                {{ product.title }}
              </h5>
              <hr class="my-2" />
              <p class="card-text flex-grow-1 fs-small">
                {{ product.description }}
              </p>
              <div class="d-between align-items-center">
                <span class="product-price">
                  $ {{ product.price.toLocaleString() }}
                </span>
                <font-awesome-icon
                  class="border rounded-pill p-2 fs-6 me-0 btn btn-outline-secondary"
                  icon="fa-cart-arrow-down"
                  role="button"
                  @click="cart.addItem(product)"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <NewProduct />
    </div>
  </div>
  <Footer />
</template>
<script>
import DropDownMenu from "@/components/shared/DropDownMenu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import MenuList from "@/components/dashboard/MenuList.vue";
import { toggleStatus } from "@/methods/util.js";
import loadingStore from "@/stores/loading";
import Footer from "@/components/Footer.vue";
import { apiGetProductAll } from "@/api/api.js";
import "swiper/css/free-mode";
import { ref, provide, computed } from "vue";
import { errorAlert } from "@/methods/sweetAlert.js";
import { storeToRefs } from "pinia";
import cartStore from "@/stores/shop/cart.js";
import NewProduct from "@/components/shop/NewProduct.vue";

export default {
  components: {
    DropDownMenu,
    Swiper,
    SwiperSlide,
    MenuList,
    Footer,
    NewProduct,
  },
  setup(props) {
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

    const getAllProduct = async () => {
      loading.showLoading();
      try {
        const res = await apiGetProductAll();
        // console.log(res);
        productList.value = JSON.parse(JSON.stringify(res.data.products));
      } catch (error) {
        errorAlert("取得資料錯誤", "請重新整理網頁或聯絡客服人員");
      } finally {
        loading.hideLoading();
      }
    };
    getAllProduct();
    provide("productList", productList);
    provide("pageItemCount", pageItemCount);
    return {
      productList,
      toggleStatus,
      cartItems,
      cartAmount,
      cartItemCount,
      cart,
      modules: [FreeMode, Navigation, Autoplay],
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
.main-content {
  position: relative;
  z-index: 3;
  .main-ad {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 65svh;
    @media screen and (max-height: 772px) and (max-width: 576px) {
      // 手機
      height: 80svh;
    }
    @media screen and (min-height: 1000px) {
      // 平板直向
      height: 60svh;
    }
    font-size: 2rem;
    @media screen and (max-width: 992px) {
      flex-direction: column;
      justify-content: center;
    }

    .today-promotion {
      .card {
        background-color: #1b1a1a;
        border: 1px solid #413e3e;
        padding: 1rem;
        flex-direction: row;
        .product-info {
          p {
            font-size: 1rem;
          }
          img {
            width: 176px;
            height: 176px;
          }
          .d-between {
            width: 100%;
          }
        }
        @media screen and (max-width: 576px) {
          padding: 0.5rem;
          .product-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
              text-align: center;
            }
            img {
              width: 110px;
              height: 110px;
            }
          }
        }
      }
    }
  }
  // 熱賣商品
  .card {
    .card-title {
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
    .card-img-top {
      height: 115px;
      @media screen and (min-width: 992px) {
        height: 170px;
      }
    }
    .card-text {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .product-price {
      font-size: 1.25rem;
    }
    @media screen and (max-width: 992px) {
      .product-price {
        font-size: 1rem;
      }
      .card-text {
        -webkit-line-clamp: 3;
        overflow: auto;
      }
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
      -webkit-line-clamp: 2; /* 显示的行数 */
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
