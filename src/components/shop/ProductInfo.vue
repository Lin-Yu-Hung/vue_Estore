<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-1 xl-down-hide"></div>
      <div class="col-xl-4 border-xl-end">
        <div class="d-column">
          <nav aria-label="breadcrumb" v-if="showData">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/eStore/home">首頁</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/eStore/home">{{
                  showData.category
                }}</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ showData.title }}
              </li>
            </ol>
          </nav>
          <!-- <div class="card" aria-hidden="true">
            <img src="..." class="card-img-top" alt="..." />
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
              <a
                class="btn btn-primary disabled placeholder col-6"
                aria-disabled="true"
              ></a>
            </div>
          </div> -->
          <div class="d-center placeholder-glow">
            <div
              v-if="!showProductImg"
              class="product-img w-100 mb-2 placeholder"
            ></div>
            <img
              v-else
              class="product-img"
              :src="showProductImg"
              :alt="showData.title"
              :title="showData.title"
            />
          </div>

          <div
            class="d-flex product-imgs justify-content-md-center justify-content-lg-start placeholder-glow"
          >
            <template v-if="!showData">
              <div
                class="img-box bg-secondary placeholder"
                v-for="item in 4"
                :key="item"
              ></div>
            </template>
            <template
              v-else-if="showData.imagesUrl && showData.imagesUrl.length > 0"
            >
              <img
                class="img-box"
                :class="{ active: showProductImg === showData.imageUrl }"
                :src="showData.imageUrl"
                @click="setProductImg(showData.imageUrl)"
              />
              <img
                class="img-box"
                :class="{ active: showProductImg === item }"
                @click="setProductImg(item)"
                v-for="item in showData.imagesUrl"
                :key="item"
                :src="item"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="col-xl">
        <div class="d-column justify-content-between h-100 mt-2 mt-xl-0">
          <div class="d-column placeholder-glow">
            <template v-if="showData">
              <span class="fs-small text-secondary">{{
                showData.category
              }}</span>
              <h2>{{ showData.title }}</h2>
              <hr />
              <p>{{ showData.description }}</p>
              <div class="d-flex mb-1">
                <font-awesome-icon
                  v-for="(item, index) in 4"
                  :key="index"
                  class="fs-large m-0 text-warning"
                  icon="fa-star"
                  role="button"
                ></font-awesome-icon></div
            ></template>
            <template v-else>
              <p class="placeholder col-3 mb-5"></p>
              <p class="mb-4 placeholder col-4"></p>
              <p class="mb-4 placeholder col-8"></p>
              <p class="mb-4 placeholder col-4"></p>
              <p class="mb-4 placeholder col-6"></p>
              <p class="mb-4 placeholder col-8"></p>
            </template>
          </div>
          <div class="">
            <div class="d-flex align-items-center placeholder-glow mb-3">
              <template v-if="!showData">
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4 ms-2"></span>
              </template>
              <template v-else>
                <h2>$ {{ showData.price.toLocaleString() }}</h2>
                <span
                  class="text-secondary fs-base text-decoration-line-through ms-3"
                  >$ {{ showData.origin_price.toLocaleString() }}</span
                >
              </template>
            </div>
            <div class="input-group mb-3 w-30">
              <span
                class="input-group-text"
                role="button"
                @click="setCount('reduce')"
                >-</span
              >
              <input
                type="number"
                class="form-control text-center"
                placeholder="請輸入數量"
                v-model="count"
                min="1"
                max="99"
              />
              <span
                class="input-group-text"
                role="button"
                @click="setCount('add')"
                >+</span
              >
            </div>

            <div class="d-end">
              <button
                class="btn btn-primary w-100 fs-large"
                @click="addToCart(showData)"
              >
                <font-awesome-icon
                  class="fs-6 me-2"
                  icon="fa-cart-arrow-down"
                  role="button"
                ></font-awesome-icon
                >加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 xl-down-hide"></div>
    </div>
    <ul class="product-desciption">
      <li
        @click="showDesciption = 'introduce'"
        :class="{ active: showDesciption === 'introduce' }"
      >
        商品介紹
      </li>
      <li
        @click="showDesciption = 'info'"
        :class="{ active: showDesciption === 'info' }"
      >
        商品資訊
      </li>
      <li
        @click="showDesciption = 'appraise'"
        :class="{ active: showDesciption === 'appraise' }"
      >
        評價
      </li>
    </ul>

    <div class="row mb-3">
      <div class="col-lg-8 col-xl-9">
        <div class="card mb-3 p-3">
          <!-- 商品介紹 -->
          <template v-if="showDesciption === 'introduce'">
            <img
              src="@/assets/images/overview_hero_title_2x-1536x518.webp"
              alt=""
            />

            <img
              src="@/assets/images/overview_hero_2x-e1459776153284-1536x645.webp"
              alt=""
            />
            <p class="text-secondary fs-small mt-5">
              A groundbreaking Retina display. Powerful dual-core and quad-core
              Intel processors. Fast flash storage. High-performance graphics.
              Great built-in apps. And now in the 13-inch model, a revolutionary
              new Force Touch trackpad and even longer battery life.1 Whatever
              you can imagine, MacBook Pro with Retina display gives you the
              power to create.
            </p>
            <p class="text-secondary fs-small mb-5">
              The design of MacBook Pro packs a lot of power into not a lot of
              space. Because we believe that high performance shouldn’t come at
              the expense of portability. And despite being so compact, the new
              13-inch and 15-inch MacBook Pro with Retina display models now
              deliver up to 10 hours and nine hours of battery life,
              respectively — an hour more than the previous models.
            </p>
            <img src="@/assets/images/hero_large_2x.webp" alt="" />
            <p class="text-secondary fs-small mt-5">
              With Multi-Touch in OS X, you can use realistic gestures like
              swiping or pinching to switch between apps, navigate your content
              and get the most out of your desktop space. The new Force Touch
              trackpad takes all the capabilities of Multi-Touch and adds force
              sensors that detect subtle differences in the amount of downward
              pressure you apply. This lets you have a deeper connection to your
              content, bringing more functionality to your fingertip. It also
              introduces haptic feedback to MacBook Pro — allowing you to not
              just see what’s happening on the screen, but to feel it.
            </p>
          </template>
          <template v-else-if="showDesciption === 'info'">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td>品牌</td>
                    <td>Apple</td>
                  </tr>
                  <tr>
                    <td>高度</td>
                    <td>18 毫米</td>
                  </tr>
                  <tr>
                    <td>寬度</td>
                    <td>31.4 厘米</td>
                  </tr>
                  <tr>
                    <td>螢幕尺寸</td>
                    <td>13 吋</td>
                  </tr>
                  <tr>
                    <td>重量</td>
                    <td>1.6 公斤</td>
                  </tr>
                  <tr>
                    <td>產品尺寸</td>
                    <td>21.9 x 31.4 x 1.8 厘米</td>
                  </tr>
                  <tr>
                    <td>型號</td>
                    <td>MF841HN/A</td>
                  </tr>
                  <tr>
                    <td>處理器品牌</td>
                    <td>Intel</td>
                  </tr>
                  <tr>
                    <td>處理器類型</td>
                    <td>Core i5</td>
                  </tr>
                  <tr>
                    <td>處理器速度</td>
                    <td>2.9 GHz</td>
                  </tr>
                  <tr>
                    <td>RAM 容量</td>
                    <td>8 GB</td>
                  </tr>
                  <tr>
                    <td>硬碟容量</td>
                    <td>512 GB</td>
                  </tr>
                  <tr>
                    <td>硬碟技術</td>
                    <td>Solid State Drive</td>
                  </tr>
                  <tr>
                    <td>顯示核心處理器</td>
                    <td>Intel Integrated Graphics</td>
                  </tr>
                  <tr>
                    <td>顯示卡描述</td>
                    <td>Integrated Graphics Card</td>
                  </tr>
                  <tr>
                    <td>硬體平台</td>
                    <td>Mac</td>
                  </tr>
                  <tr>
                    <td>作業系統</td>
                    <td>Mac OS</td>
                  </tr>
                  <tr>
                    <td>平均電池續航時間</td>
                    <td>9 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
          <!-- 評價 -->
          <template v-else-if="showDesciption === 'appraise'">
            <div class="row row-cols-1 row-cols-md-2 g-3 mb-2">
              <div class="col" v-for="user in showComment" :key="user">
                <div class="card ps-2 card-hover-shadow">
                  <div class="row g-0">
                    <div class="col-4 d-column justify-content-center">
                      <div class="d-center">
                        <font-awesome-icon
                          class="fs-5 mb-2 border rounded-circle p-2"
                          icon="fa-user"
                          role="button"
                        />
                      </div>

                      <h5 class="fs-base text-center mb-0 text-nowrap">
                        {{ user.name }}
                      </h5>
                    </div>
                    <div class="col-8">
                      <div class="card-body py-2">
                        <p class="mb-1">{{ user.comment }}</p>
                        <div class="d-flex mb-1">
                          <font-awesome-icon
                            v-for="(item, index) in parseInt(user.star)"
                            :key="index"
                            class="fs-mini m-0 text-warning"
                            icon="fa-star"
                            role="button"
                          ></font-awesome-icon>
                        </div>
                        <p class="text-secondary fs-mini mb-0">
                          {{ user.date }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-end">
              <Pagination
                :data="tempData.comment"
                :showItemCount="8"
                @changePage="changeShowComment"
              />
            </div>
          </template>
        </div>
      </div>
      <div class="col lg-down-hide">
        <img
          class="product-ad"
          src="@/assets/images/gameConsoleAd.jpg"
          alt=""
        />
      </div>
    </div>
    <h2 class="fs-4">相關商品</h2>
    <swiper
      class="mb-3"
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
        v-for="(product, index) in relatedProducts"
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
            />
            <h5
              class="card-title text-truncate text-underline-hover mb-0"
              role="button"
            >
              {{ product.title }}
            </h5>
            <hr class="my-2" />
            <p class="card-text flex-grow-1 fs-small line-clamp-3">
              {{ product.description }}
            </p>
            <div class="d-end align-items-center">
              <span class="fs-large">
                $ {{ product.price.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { ref, inject, computed } from "vue";
import tempData from "@/methods/tempData/comment.json";
import Pagination from "@/components/Pagination.vue";
import cartStore from "@/stores/shop/cart.js";
import { errorAlert } from "@/methods/sweetAlert.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";

export default {
  components: { Pagination, Swiper, SwiperSlide },
  setup(props) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 若要有平滑的滾動效果，使用'smooth'
    });
    const showDesciption = ref("introduce");
    const count = ref(1);
    const route = useRoute();
    const productList = inject("productList");
    const productListMap = inject("productListMap");
    const productId = route.params.id;
    const showProductImg = ref("");
    const showData = computed(() => {
      if (Object.keys(productListMap.value).length > 0) {
        showProductImg.value = productListMap.value[productId].imageUrl;
        return productListMap.value[productId];
      }
      return null;
    });
    const relatedProducts = computed(() => {
      return productList.value.filter((product) => {
        return (
          product.category === showData.value.category &&
          product.id !== showData.value.id
        );
      });
    });
    const nowPage = ref(1);
    const showComment = computed(() => {
      return tempData.comment.slice(nowPage.value * 8 - 8, 8 * nowPage.value);
    });
    const changeShowComment = (page) => {
      nowPage.value = page;
    };

    const setCount = (type = "reduce") => {
      if (
        (type === "reduce" && count.value === 1) ||
        (type === "add" && count.value > 99)
      )
        return;
      if (type === "reduce") {
        count.value--;
      } else {
        count.value++;
      }
    };
    const setProductImg = (url) => {
      showProductImg.value = url;
    };
    const cart = cartStore();
    const addToCart = (item) => {
      console.log(count.value);
      if (count.value < 1 || count.value > 99) {
        errorAlert(`請勿輸入購買數量小於1或大於99`);
        return;
      }
      cart.addItem(item, count.value);
    };
    return {
      count,
      showData,
      showDesciption,
      setCount,
      showProductImg,
      setProductImg,
      changeShowComment,
      showComment,
      tempData,
      addToCart,
      relatedProducts,
      modules: [FreeMode, Navigation, Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
.product-img {
  height: 50svh;
  @media screen and (max-width: 992px) {
    height: 30svh;
  }
  @media screen and (min-height: 1024px) {
    height: 30svh;
  }
}
.product-imgs {
  // width: 100%;
  max-width: 100%;
  overflow: auto;
  .img-box {
    cursor: pointer;
    border: 1px solid rgb(210, 208, 208);
    min-width: 80px;
    height: 80px;
    &:hover {
      opacity: 0.5;
    }
    &.active {
      opacity: 0.5;
    }
  }
}
.input-group-text {
  user-select: none;
}

.product-desciption {
  display: flex;
  padding-left: 0;
  margin-top: 5%;
  li {
    cursor: pointer;
    margin-right: 2rem;
    padding: 1rem 0 0.5rem 0;
    font-size: 1.25rem;
    color: gray;
    &.active {
      color: black;
      border-bottom: 2px solid gray;
    }
    &:hover {
      color: black;
      border-bottom: 2px solid gray;
    }
  }
}

.product-ad {
  height: 70svh;
  width: 100%;
  @media screen and (min-height: 1024px) {
    height: 50svh;
  }
}
.table {
  overflow: auto;
  td {
    white-space: nowrap;
  }
}

.card-img-top {
  height: 175px;
  @media screen and (max-width: 992px) {
    height: 125px;
  }
  // @media screen and (max-width: 767px) {
  //   height: 125px;
  // }
}
</style>
