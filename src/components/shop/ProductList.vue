<template>
  <nav aria-label="breadcrumb" class="mt-3 border-bottom pb-2">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 pt-3 ps-lg-0">
        <div class="card shadow p-3">
          <h2 class="fs-5 border-bottom pb-2">分類</h2>
          <template v-if="productCategoryList.length > 0">
            <div
              class="form-check mb-2"
              v-for="category in productCategoryList"
              :key="category"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="category"
                :id="category"
                name="category"
                role="button"
              />
              <label class="form-check-label" role="button" :for="category">
                {{ category }}
              </label>
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
                  placeholder="請輸入最低價格"
                />
                <span class="mx-1">~</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="maxPrice"
                  placeholder="請輸入最高價格"
                />
              </div>
              <button class="btn btn-primary-median mt-3">篩選</button>
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
      </div>
      <div class="col-lg pt-3 mobile-px-0">
        <div class="container-fluid product-list">
          <h2 class="fs-3 mb-3">所有商品</h2>
          <div
            class="d-flex mb-3 border rounded align-items-center bg-light flex-column flex-lg-row"
          >
            <div class="w-25 lg-down-w-100 p-2 text-nowrap">
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
                class="showTypeIcon"
                @click="showType = 'row'"
                :class="{ 'text-primary': showType === 'row' }"
              />
            </div>
            <div
              class="flex-grow-1 d-between p-2 flex-column flex-md-row lg-down-w-100"
            >
              <div
                class="d-flex align-items-center w-40 mb-2 mb-md-0 mobile-w-100"
              >
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
                class="input-group d-center align-items-center rounded-pill border bg-white w-50 mobile-w-100"
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
            <TransitionGroup
              name="list"
              tag="div"
              class="row row-cols-2 row-cols-md-3 row-cols-xxxl-4 g-3"
            >
              <div class="col" v-for="product in showData" :key="product.id">
                <div class="card">
                  <div class="d-center">
                    <img
                      :src="product.imageUrl"
                      class="card-img-top product-img"
                      :alt="product.title"
                      :title="product.title"
                    />
                  </div>

                  <div class="card-body px-2 px-sm-3">
                    <h5 class="card-title fs-5 line-clamp-2">
                      {{ product.title }}
                    </h5>
                    <p
                      class="card-text fs-small text-secondary line-clamp-2 mb-1"
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
            </TransitionGroup>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, inject } from "vue";

export default {
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
    const productList = inject("productList");
    const productCategoryList = inject("productCategoryList");
    const showData = computed(() => {
      const filterResult = productList.value.filter((product) => {
        return product.title.match(productKeyWord.value);
      });
      return sortProductList(filterResult, sortType.value);
    });
    return {
      productList,
      productCategoryList,
      sortType,
      showType,
      productKeyWord,
      showData,
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
.product-list {
  margin-bottom: 2rem;
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
    height: 46px;
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
