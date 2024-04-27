<template>
  <h2 class="fs-4 mt-5">新品上市</h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg ps-0 d-column justify-content-between">
        <div class="row row-cols-2 row-cols-md-3 align-items-center g-4">
          <div class="col" v-for="product in showData" :key="product.id">
            <div class="card card-hover-shadow">
              <div class="row g-0">
                <div class="col-lg-5 d-center">
                  <img
                    role="button"
                    :src="product.imageUrl"
                    class="img-fluid rounded-start"
                    :alt="product.title"
                    :title="product.title"
                    @click="showDetail(product.id)"
                  />
                </div>
                <div class="col-lg-7">
                  <div
                    class="card-body py-0 d-column justify-content-center h-100"
                  >
                    <a
                      class="text-link text-underline-hover line-clamp-2 line-clamp-md-1 line-clamp-lg-2 mb-1 fs-small fs-lg-base"
                      role="button"
                      @click="showDetail(product.id)"
                    >
                      {{ product.title }}
                    </a>
                    <div class="d-flex">
                      <font-awesome-icon
                        v-for="(item, index) in 4"
                        :key="index"
                        class="fs-mini m-0 text-warning"
                        icon="fa-star"
                        role="button"
                      ></font-awesome-icon>
                    </div>
                    <p class="card-text mt-1">
                      $ {{ product.price.toLocaleString() }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end align-items-center mt-3 mt-xl-0">
          <!-- <p class="fs-small text-secondary mb-0 mobile-hide">
            顯示 9 筆結果中的
            {{ nowPage * pageItemCount - pageItemCount + 1 }} ~
            {{ nowPage * pageItemCount }} 筆
          </p> -->
          <Pagination :data="productList" @changePage="changeShowData" />
        </div>
      </div>
      <div class="col-3">
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
import { ref, inject, computed } from "vue";
import Pagination from "@/components/Pagination.vue";
import { useRouter } from "vue-router";

export default {
  components: { Pagination },
  setup(props) {
    const router = useRouter();
    const productList = inject("productList");
    const nowPage = ref(1);
    const pageItemCount = inject("pageItemCount");
    const showData = computed(() => {
      return productList.value.slice(
        nowPage.value * pageItemCount.value - pageItemCount.value,
        pageItemCount.value * nowPage.value
      );
    });
    const changeShowData = (page) => {
      nowPage.value = page;
    };
    const showDetail = (id) => {
      router.push(`productInfo/${id}`);
    };

    return {
      nowPage,
      productList,
      showData,
      changeShowData,
      pageItemCount,
      showDetail,
    };
  },
};
</script>
<style lang="scss" scoped>
.img-fluid {
  @media screen and (max-width: 992px) {
    width: 15vw;
  }
  @media screen and (max-width: 767px) {
    width: 30vw;
  }
}
</style>
