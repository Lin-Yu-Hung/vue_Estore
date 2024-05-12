<template>
  <nav aria-label="breadcrumb" class="mt-3 border-bottom">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/eStore/home" class="text-underline-hover"
          >首頁</router-link
        >
      </li>
      <li class="breadcrumb-item active" aria-current="page">商品列表</li>
    </ol>
  </nav>
  <div class="container-fluid mb-3">
    <div class="row">
      <div class="col-12 px-xl-0">
        <swiper
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mainAd rounded border mt-3"
        >
          <swiper-slide>
            <img
              src="https://www.jollybuy.com/act/Apple/images/kv-pc.webp"
              alt="product"
              class="h-100 w-100"
          /></swiper-slide>
          <swiper-slide>
            <img
              src="https://dlcdnwebimgs.asus.com/gain/3EF9B6B3-0408-42CE-9AA2-50B46B5B35C9/fwebp"
              alt="product"
              class="h-100 w-100"
          /></swiper-slide>
          <swiper-slide>
            <img
              src="https://p2.bahamut.com.tw/B/2KU/22/96c1baf2e92dc1371779452e2119o8a5.JPG"
              alt="product"
              class="h-100 w-100"
          /></swiper-slide>
        </swiper>
      </div>
      <div class="col-xl-3 pt-3 px-0 xl-down-hide">
        <div class="card shadow p-3">
          <h2 class="fs-5 border-bottom pb-2">分類</h2>
          <template v-if="productCategoryList.length > 0">
            <div class="container-fluid">
              <p
                class="text-secondary mt-2 mb-0 text-underline-hover"
                role="button"
                @click="filterCategory.splice(0)"
              >
                <font-awesome-icon icon="fa-xmark" />清除篩選條件
              </p>

              <div
                class="row row-cols-3 row-cols-lg-1 row-cols-xl-2 row-cols-xxxl-3 g-2 my-2"
              >
                <div
                  class="col"
                  v-for="category in productCategoryList"
                  :key="category"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="filterCategory"
                      :value="category"
                      :id="category"
                      name="category"
                      role="button"
                    />
                    <label
                      class="form-check-label text-nowrap"
                      role="button"
                      :for="category"
                    >
                      {{ category }}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <label
              for="customRange1"
              class="form-label fs-5 border-bottom pb-2 mt-3"
              >價格</label
            >

            <div class="mb-3 d-center flex-column">
              <div class="d-flex">
                <label
                  for="minPrice"
                  class="form-label mb-1 fs-small flex-grow-1 me-4"
                  >最低價格</label
                >
                <label
                  for="maxPrice"
                  class="form-label mb-1 fs-small flex-grow-1"
                  >最高價格</label
                >
              </div>
              <div class="d-flex">
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="minPrice"
                  v-model="minPrice"
                  placeholder="請輸入最低價格"
                />
                <span class="mx-1">~</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="maxPrice"
                  v-model="maxPrice"
                  placeholder="請輸入最高價格"
                />
              </div>
              <button class="btn btn-primary-median mt-3" @click="filterPrice">
                篩選
              </button>
            </div>
          </template>
          <template v-else>
            <!-- 取得資料狀態 -->
            <div class="placeholder-glow">
              <span class="placeholder mb-2 col-8"></span>
              <span class="placeholder mb-2 col-6"></span>
            </div>
            <div class="placeholder-glow">
              <span class="placeholder mb-2 col-5"></span>
            </div>
            <div class="placeholder-glow">
              <span class="placeholder mb-2 col-7"></span>
              <span class="placeholder mb-2 col-7"></span>
              <span class="placeholder mb-2 col-6"></span>
              <span class="placeholder mb-2 col-8"></span>
              <span class="placeholder mb-2 col-8"></span>
              <span class="placeholder mb-2 col-10"></span>
            </div>
            <h2 class="fs-5 border-bottom pb-2 mt-3">價格</h2>
            <div class="placeholder-glow">
              <div class="d-between align-items-center">
                <span class="placeholder col p-3 rounded"></span>
                <span class="col-1 d-center">~</span>
                <span class="placeholder col p-3 rounded"></span>
              </div>

              <span class="placeholder col-12 p-2 rounded mt-3">篩選</span>
            </div>
          </template>
        </div>
        <img
          class="w-100 mt-3 rounded border"
          src="@/assets/images/filip-baotic-DV0mB2uJM34-unsplash.jpg"
          alt="product"
        />
        <img
          class="w-100 mt-3 rounded border"
          src="@/assets/images/nik-ads33nL7V4k-unsplash.jpg"
          alt="product"
        />
      </div>
      <div class="col-lg pt-3 mobile-px-0" :class="{ 'mb-4': pageCount <= 1 }">
        <div class="container-fluid product-list">
          <h2 class="fs-3 mb-3">所有商品</h2>
          <div
            class="d-flex mb-3 border rounded align-items-center bg-light flex-column flex-lg-row"
          >
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasFilter"
              aria-labelledby="offcanvasFilterLabel"
            >
              <div class="offcanvas-header d-column pb-0">
                <div class="d-between w-100">
                  <h5 class="offcanvas-title" id="offcanvasFilterLabel">
                    篩選商品
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div
                  class="input-group d-center align-items-center rounded-pill border bg-white w-100 my-2"
                >
                  <input
                    type="text"
                    class="form-control rounded-pill border-0 ps-3"
                    placeholder="輸入商品關鍵字"
                    v-model="productKeyWord"
                  />
                  <font-awesome-icon
                    class="px-3"
                    icon="fa-search"
                    role="button"
                  />
                </div>
              </div>
              <div class="offcanvas-body pt-0">
                <h2 class="fs-5 border-bottom pb-1 pt-2">分類</h2>
                <template v-if="productCategoryList.length > 0">
                  <div class="container-fluid">
                    <p
                      class="text-secondary mt-3 mb-0 text-underline-hover"
                      role="button"
                      @click="filterCategory.splice(0)"
                    >
                      <font-awesome-icon icon="fa-xmark" />清除篩選條件
                    </p>

                    <div
                      class="row row-cols-3 row-cols-lg-1 row-cols-xl-2 row-cols-xxxl-3 g-2 my-2"
                    >
                      <div
                        class="col"
                        v-for="category in productCategoryList"
                        :key="category"
                      >
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="filterCategory"
                            :value="category"
                            :id="category"
                            name="category"
                            role="button"
                          />
                          <label
                            class="form-check-label text-nowrap"
                            role="button"
                            :for="category"
                          >
                            {{ category }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label
                    class="form-check-label fs-5 border-bottom pb-2 w-100"
                    for="sortType"
                  >
                    排序方式
                  </label>
                  <select
                    id="sortType"
                    class="form-select mt-2"
                    v-model="sortType"
                  >
                    <option selected disabled value="">排序方式</option>
                    <option value="title">文字排序</option>
                    <option value="asc">價格由低至高</option>
                    <option value="desc">價格由高到低</option>
                  </select>
                  <label for="customRange1" class="form-label fs-5 mt-3"
                    >價格</label
                  >

                  <div class="mb-3 d-center flex-column border-top pt-3">
                    <div class="d-flex">
                      <label
                        for="minPrice"
                        class="form-label mb-1 fs-small flex-grow-1 me-4"
                        >最低價格</label
                      >
                      <label
                        for="maxPrice"
                        class="form-label mb-1 fs-small flex-grow-1"
                        >最高價格</label
                      >
                    </div>
                    <div class="d-flex">
                      <input
                        type="number"
                        class="form-control form-control-sm"
                        id="minPrice"
                        v-model="minPrice"
                        placeholder="請輸入最低價格"
                      />
                      <span class="mx-1">~</span>
                      <input
                        type="number"
                        class="form-control form-control-sm"
                        id="maxPrice"
                        v-model="maxPrice"
                        placeholder="請輸入最高價格"
                      />
                    </div>
                    <button
                      class="btn btn-primary-median mt-3"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      @click="filterPrice"
                    >
                      篩選
                    </button>
                  </div>
                </template>
                <template v-else>
                  <!-- 取得資料狀態 -->
                  <div class="placeholder-glow">
                    <span class="placeholder mb-2 col-8"></span>
                    <span class="placeholder mb-2 col-6"></span>
                  </div>
                  <div class="placeholder-glow">
                    <span class="placeholder mb-2 col-5"></span>
                  </div>
                  <div class="placeholder-glow">
                    <span class="placeholder mb-2 col-7"></span>
                    <span class="placeholder mb-2 col-7"></span>
                    <span class="placeholder mb-2 col-6"></span>
                    <span class="placeholder mb-2 col-8"></span>
                    <span class="placeholder mb-2 col-8"></span>
                    <span class="placeholder mb-2 col-10"></span>
                  </div>
                  <h2 class="fs-5 border-bottom pb-2 mt-3">價格</h2>
                  <div class="placeholder-glow">
                    <div class="d-between align-items-center">
                      <span class="placeholder col p-3 rounded"></span>
                      <span class="col-1 d-center">~</span>
                      <span class="placeholder col p-3 rounded"></span>
                    </div>

                    <span class="placeholder col-12 p-2 rounded mt-3"
                      >篩選</span
                    >
                  </div>
                </template>
              </div>
            </div>

            <div
              class="xl-down-w-100 w-25 p-2 text-nowrap d-between px-3 px-xl-2"
            >
              <a
                class="text-secondary xl-up-hide"
                data-bs-toggle="offcanvas"
                href="#offcanvasFilter"
                role="button"
                aria-controls="offcanvasFilter"
              >
                <font-awesome-icon icon="fa-gear" class="me-2" />篩選
              </a>
              <span class="text-secondary">
                顯示方式
                <font-awesome-icon
                  role="button"
                  icon="fa-border-all"
                  class="mx-2 showTypeIcon"
                  @click="showType = 'cell'"
                  :class="{ 'text-primary': showType === 'cell' }"
                />
                <font-awesome-icon
                  role="button"
                  icon="fa-list"
                  class="showTypeIcon ms-1"
                  @click="showType = 'row'"
                  :class="{ 'text-primary': showType === 'row' }"
                />
              </span>
            </div>
            <!-- 電腦寬度以下不顯示 -->
            <div class="flex-grow-1 d-between p-2 xl-down-hide">
              <div class="d-flex align-items-center w-40 mb-0">
                <label class="form-check-label text-nowrap me-3" for="sortType">
                  排序方式
                </label>
                <select id="sortType" class="form-select" v-model="sortType">
                  <option selected disabled value="">排序方式</option>
                  <option value="title">文字排序</option>
                  <option value="asc">價格由低至高</option>
                  <option value="desc">價格由高到低</option>
                </select>
              </div>

              <div
                class="input-group d-center align-items-center rounded-pill border bg-white w-50"
              >
                <input
                  type="text"
                  class="form-control rounded-pill border-0 ps-3"
                  placeholder="輸入商品關鍵字"
                  v-model="productKeyWord"
                />
                <font-awesome-icon
                  class="px-3"
                  icon="fa-search"
                  role="button"
                />
              </div>
            </div>
          </div>

          <template v-if="productList.length > 0">
            <template v-if="showData.length > 0">
              <TransitionGroup
                name="list"
                tag="div"
                :class="{
                  'row row-cols-2 row-cols-md-3 row-cols-xxxl-4 g-3':
                    showType === 'cell',
                }"
              >
                <template v-if="showType === 'cell'">
                  <div
                    class="col"
                    v-for="product in showData"
                    :key="product.id"
                  >
                    <div class="card">
                      <div class="d-center">
                        <img
                          :src="product.imageUrl"
                          class="card-img-top product-img"
                          :alt="product.title"
                          :title="product.title"
                        />
                      </div>

                      <div class="card-body p-2 p-sm-3">
                        <router-link
                          class="card-title line-clamp-2 fs-6 fs-md-large text-underline-hover"
                          :to="`/eStore/productInfo/${product.id}`"
                        >
                          {{ product.title }}
                        </router-link>

                        <div class="d-flex mb-3">
                          <font-awesome-icon
                            v-for="(item, index) in 4"
                            :key="index"
                            class="fs-large m-0 text-warning"
                            icon="fa-star"
                            role="button"
                          ></font-awesome-icon>
                        </div>
                        <p
                          class="card-text card-text-cell fs-small text-secondary line-clamp-3 mb-1"
                        >
                          {{ product.description }}
                        </p>
                        <p class="text-end mb-2 fs-5" v-if="product.price">
                          $ {{ product.price.toLocaleString() }}
                        </p>
                        <button class="btn btn-primary-median w-100">
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div
                    class="card mb-3"
                    v-for="product in showData"
                    :key="product.id"
                  >
                    <div class="row g-0">
                      <div
                        class="col-5 col-md-4 col-lg-3 col-xxxl-2 d-center p-md-3 p-xxxl-0 align-items-center border-end"
                      >
                        <img
                          :src="product.imageUrl"
                          :alt="product.title"
                          :title="product.title"
                          class="card-img-top"
                        />
                      </div>
                      <div class="col-7 col-md">
                        <div class="card-body h-100 px-1 px-md-2">
                          <div class="container-fluid h-100">
                            <div class="row h-100">
                              <div class="col">
                                <div class="d-column">
                                  <router-link
                                    class="mb-2 line-clamp-2 fs-6 fs-md-large text-underline-hover"
                                    :to="`/eStore/productInfo/${product.id}`"
                                  >
                                    {{ product.title }}
                                  </router-link>
                                  <div class="d-flex mb-2 mb-md-3">
                                    <font-awesome-icon
                                      v-for="(item, index) in 4"
                                      :key="index"
                                      class="fs-large m-0 text-warning"
                                      icon="fa-star"
                                      role="button"
                                    ></font-awesome-icon>
                                  </div>
                                  <p
                                    class="card-text card-text-row fs-small text-secondary line-clamp-2 line-clamp-md-5 mb-2 w-50 xl-down-w-100 mobile-w-100"
                                  >
                                    {{ product.description }}
                                  </p>
                                </div>
                              </div>
                              <div class="col-md-4 col-xxxl-3">
                                <div class="d-end flex-column h-100">
                                  <p
                                    class="text-end fs-4 mb-2"
                                    v-if="product.price"
                                  >
                                    $ {{ product.price.toLocaleString() }}
                                  </p>

                                  <button class="btn btn-primary-median w-100">
                                    加入購物車
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </TransitionGroup>
            </template>

            <template v-else>
              <h2 class="text-center mt-5 pt-5">
                查無條件無結果
                <font-awesome-icon class="ms-2" icon="fa-face-frown" />
              </h2>
            </template>
          </template>
          <template v-else>
            <div class="row row-cols-2 row-cols-md-3 row-cols-xxxl-4 g-3">
              <div class="col" v-for="item in 8" :key="item">
                <div class="card" aria-hidden="true">
                  <div
                    class="card-img-top bg-secondary"
                    style="height: 180px"
                  />
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
                </div>
              </div>
            </div>
          </template>
          <nav
            aria-label="Page navigation example"
            class="my-3 d-end"
            v-if="pageCount > 1"
          >
            <ul class="pagination">
              <li class="page-item" :class="{ 'd-none': nowPage === 1 }">
                <a class="page-link rounded-circle" @click="--nowPage">{{
                  "<<"
                }}</a>
              </li>
              <li class="page-item" v-for="page in pageCount" :key="page">
                <a
                  class="page-link rounded-circle"
                  @click="nowPage = page"
                  :class="{ active: nowPage === page }"
                  >{{ page }}</a
                >
              </li>

              <li
                class="page-item"
                :class="{ 'd-none': nowPage === pageCount }"
              >
                <a class="page-link rounded-circle" @click="++nowPage">{{
                  ">>"
                }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, inject, watch } from "vue";
import { useRoute } from "vue-router";
import { translate } from "@/methods/translate.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const showType = ref("cell");
    const productKeyWord = ref("");
    const sortType = ref("");
    const sortProductList = (data, type) => {
      if (!type) return data; // 如果沒有傳入type就不執行回傳原值
      data = data.sort((a, b) => {
        if (type === "desc") {
          //降序
          return b.price - a.price;
        } else if (type === "asc") {
          //升序
          return a.price - b.price;
        } else {
          //文字排序
          return a.title - b.title;
        }
      });
      return data;
    };
    // 取得資料
    const productList = inject("productList");
    const productCategoryList = inject("productCategoryList");
    const filterProductList = ref([]); // 為了不影響原資料額外儲存到的篩選用變數

    const nowPage = ref(1);
    watch(
      productList,
      (value) => (filterProductList.value = JSON.parse(JSON.stringify(value))),
      { immediate: true }
    );

    // 篩選類別
    const filterCategory = ref([]);
    const route = useRoute();
    watch(
      [route, productCategoryList],
      ([routeValue, categoryListValue]) => {
        const selectedCategory = routeValue.params.category;
        if (!selectedCategory || !translate(selectedCategory)) {
          // 全部商品
          filterCategory.value = JSON.parse(JSON.stringify(categoryListValue));
        } else {
          filterCategory.value = [translate(selectedCategory)];
        }
      },
      { immediate: true }
    );

    // 篩選價格
    const minPrice = ref("");
    const maxPrice = ref("");
    const filterPrice = () => {
      const min = parseInt(minPrice.value);
      const max = parseInt(maxPrice.value);
      if (isNaN(min) && isNaN(max)) {
        filterProductList.value = JSON.parse(JSON.stringify(productList.value));
        return;
      }
      filterProductList.value = productList.value.filter((product) => {
        if (!isNaN(min) && !isNaN(max)) {
          return product.price >= min && product.price <= max;
        } else if (!isNaN(min)) {
          return product.price >= min;
        } else {
          return product.price <= max;
        }
      });
    };

    // 顯示資料
    const filterResult = ref([]);
    const showData = computed(() => {
      filterResult.value = filterProductList.value.filter((product) => {
        return (
          product.title.match(productKeyWord.value) &&
          filterCategory.value.includes(product.category)
        );
      });
      const sortResult = sortProductList(filterResult.value, sortType.value); // 排序完再進行分頁
      if (filterResult.value.length < maxShowQuantity.value) {
        // 篩選結果數量小於最大顯示數量時就不進行切割陣列，因為此時不會顯示分頁元件
        return sortResult;
      }
      return sortResult.slice(
        nowPage.value * maxShowQuantity.value - maxShowQuantity.value,
        nowPage.value * maxShowQuantity.value
      );
    });

    // 分頁功能
    const pageCount = computed(() => {
      return Math.ceil(filterResult.value.length / maxShowQuantity.value);
    });
    const getShowQuantity = () => {
      if (window.innerWidth >= 1600) {
        return 16;
      } else if (window.innerWidth >= 768) {
        return 12;
      } else {
        return 8;
      }
    };
    const maxShowQuantity = ref(getShowQuantity());
    window.addEventListener("resize", (event) => {
      maxShowQuantity.value = getShowQuantity();
    });
    return {
      productList,
      productCategoryList,
      sortType,
      showType,
      productKeyWord,
      showData,
      filterCategory,
      minPrice,
      maxPrice,
      filterPrice,
      filterProductList,
      pageCount,
      nowPage,
      modules: [Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
.showTypeIcon {
  color: rgb(108 117 125);
  &:hover {
    color: black;
  }
}
.mainAd {
  //pc
  height: 65svh;
  // 平版
  @media screen and (min-height: 1000px) and (min-width: 1020px) {
    height: 45svh;
  }
  @media screen and (min-height: 1300px) {
    height: 30svh;
  }
  @media screen and (max-width: 1200px) and (max-height: 1000px) {
    height: 50svh;
  }
  @media screen and (max-width: 992px) {
    height: 30svh;
  }
  // 手機
  @media screen and (max-width: 577px) {
    height: 23svh;
  }
  // img {
  //   object-fit: cover;
  // }
}
.product-list {
  .product-img {
    object-fit: cover;
    height: 180px;
    max-height: 200px;
    max-width: 200px;
    @media screen and (max-width: 1200px) {
      height: 140px;
      max-height: 150px;
      max-width: 150px;
    }
  }
  .card-title {
    height: 48px;
  }
  .card-text-cell {
    height: 60px;
  }
  .card-text-row {
    height: max-content;
    // max-height: 60px;
  }
  .pagination {
    li {
      cursor: pointer;
      margin: 0 0.25rem;
      a {
        color: #405379;
        &.active {
          color: white;
          background-color: #253047;
          border-color: #253047;
        }
      }
    }
  }
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
