<template>
  <div class="main-bg"></div>
  <div class="main-content">
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
                role="button"
                :src="product.imageUrl"
                class="card-img-top mb-2"
                :alt="product.title"
                :title="product.title"
                @click="showDetail(product.id)"
              />
              <h5
                class="card-title text-truncate text-underline-hover mb-0"
                role="button"
                @click="showDetail(product.id)"
              >
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
</template>
<script>
import { ref, inject } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import NewProduct from "@/components/shop/NewProduct.vue";
import { useRouter } from "vue-router";
import cartStore from "@/stores/shop/cart.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
    NewProduct,
  },
  setup(props) {
    const cart = cartStore();
    const router = useRouter();
    const showDetail = (id) => {
      router.push(`productInfo/${id}`);
    };
    const productList = inject("productList");
    return {
      productList,
      cart,
      showDetail,
      modules: [FreeMode, Navigation, Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
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
</style>
