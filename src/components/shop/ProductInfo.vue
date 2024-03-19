<template>
  <div class="container-fluid mt-4" v-if="showData">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-4 border-end">
        <div class="d-column">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
          <img
            class="product-img w-100"
            :src="showData.imageUrl"
            :alt="showData.title"
            :title="showData.title"
          />
          <div class="d-center product-imgs">
            <div class="img-box" v-for="item in 5" :key="item"></div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-column justify-content-between h-100">
          <div class="d-column">
            <span class="fs-small text-secondary">{{ showData.category }}</span>
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
              ></font-awesome-icon>
            </div>
          </div>
          <div class="">
            <div class="d-flex align-items-center">
              <h2>$ {{ showData.price.toLocaleString() }}</h2>
              <span
                class="text-secondary fs-base text-decoration-line-through ms-3"
                >$ {{ showData.origin_price.toLocaleString() }}</span
              >
            </div>
            <div class="input-group mb-3 w-30">
              <span class="input-group-text" role="button" @click="count--"
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
              <span class="input-group-text" role="button" @click="count++"
                >+</span
              >
            </div>

            <div class="d-end">
              <button class="btn btn-primary w-100 fs-large">
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
      <div class="col-1"></div>
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
      <div class="col-9">
        <div class="card mb-3 p-3 desciption-content">
          <!-- 評價 -->
          <template v-if="showDesciption === 'appraise'">
            <div class="row row-cols-2 g-3">
              <div class="col" v-for="item in 10" :key="item">
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

                      <h5 class="fs-base text-center mb-0">
                        USER0000{{ item }}
                      </h5>
                    </div>
                    <div class="col-8">
                      <div class="card-body py-2">
                        <p class="mb-1">Great!!</p>
                        <div class="d-flex mb-1">
                          <font-awesome-icon
                            v-for="(item, index) in 4"
                            :key="index"
                            class="fs-mini m-0 text-warning"
                            icon="fa-star"
                            role="button"
                          ></font-awesome-icon>
                        </div>
                        <p class="text-secondary fs-mini mb-0">
                          Last updated 3 mins ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="col">
        <img
          class="w-100 h-100 lg-down-hide"
          src="@/assets/images/gameConsoleAd.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { ref, inject, computed } from "vue";

export default {
  setup(props) {
    const showDesciption = ref("introduce");
    const count = ref(1);
    const route = useRoute();
    const productListMap = inject("productListMap");
    const productId = route.params.id;
    const showData = computed(() => {
      if (Object.keys(productListMap).length > 0) {
        return productListMap.value[productId];
      }
      return null;
    });
    return {
      count,
      showData,
      showDesciption,
    };
  },
};
</script>
<style lang="scss" scoped>
.product-img {
  height: 50svh;
}
.product-imgs {
  max-width: 100%;
  overflow: auto;
  .img-box {
    border: 1px solid black;
    min-width: 80px;
    height: 80px;
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
.desciption-content {
  min-height: 100%;
  max-height: 100%;
  overflow: auto;
}
</style>
