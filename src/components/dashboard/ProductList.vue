<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="card shadow card-layout">
          <div class="d-column">
            <p class="mb-0 pb-2 border-bottom fs-large">熱銷商品</p>
            <VueEcharts
              id="bestSeller"
              :option="bestSellerOption"
              style="height: 300px; width: 100%"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card shadow card-layout">
          <div class="d-column">
            <p class="mb-0 pb-2 border-bottom fs-large">銷售額占比</p>
            <VueEcharts
              ref="proportionOfSales"
              :option="proportionOfSalesOption"
              style="height: 300px; width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card card-layout">
      <div class="productList">
        <div class="d-between">
          <div
            class="border px-3 rounded-5 d-center align-items-center w-lg-25"
          >
            <font-awesome-icon icon="fa-search" role="button" />
            <input
              type="text"
              class="form-control border-0"
              placeholder="查詢商品名稱"
              v-model="productKeyWord"
            />
          </div>

          <router-link
            to="setProduct"
            class="bg-primary px-3 py-2 text-center rounded text-white"
            >+ 新增</router-link
          >
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">狀態</th>
              <th scope="col" class="mobile-hide">商品分類</th>
              <!-- <th scope="col" class="mobile-hide">商品圖片</th> -->
              <th scope="col">商品名稱</th>
              <th scope="col" class="mobile-hide">商品原價</th>
              <th scope="col">商品價格</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in showData" :key="product.id">
              <td>
                <p class="fixed-width-80 status-text bg-success text-green">
                  啟用
                </p>
              </td>
              <td class="mobile-hide">{{ product.category }}</td>

              <td>
                <img
                  class="image-sm me-2"
                  :src="product.imageUrl"
                  :alt="product.title"
                  :title="product.title"
                />{{ product.title }}
              </td>
              <td class="mobile-hide">
                {{ product.origin_price.toLocaleString() }}
              </td>
              <td>{{ product.price.toLocaleString() }}</td>

              <td>
                <div class="d-flex justify-content-center flex-wrap">
                  <button
                    type="button"
                    class="edit-btn"
                    @click="setEditData(product)"
                  >
                    <font-awesome-icon icon="fa-edit" />編輯
                  </button>
                  <button
                    type="button"
                    class="danger-btn"
                    @click="deleteProduct(product)"
                  >
                    <font-awesome-icon icon="fa-trash-can" />刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-end me-3" v-if="pageCount !== 1">
        <nav aria-label="Page navigation example ">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a
                class="page-link"
                aria-label="Previous"
                @click="nowPage--"
                :class="{ disabled: nowPage == 1 }"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li
              class="page-item"
              v-for="(item, index) in pageCount"
              :key="index"
            >
              <a
                class="page-link"
                @click="switchpage(item)"
                :class="{ active: nowPage == item }"
                >{{ item }}</a
              >
            </li>
            <li class="page-item">
              <a
                class="page-link"
                aria-label="Next"
                @click="nowPage++"
                :class="{ disabled: nowPage == pageCount }"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { apiGetProductAll, apiDeleteProduct } from "@/api/api";
import { ref, computed, onMounted } from "vue";
import loadingStore from "@/stores/loading";
import SetProductModal from "../modal/SetProductModal.vue";
import { deleteWarningAlert } from "@/methods/sweetAlert.js";
import { useRouter } from "vue-router";
import { VueEcharts } from "vue3-echarts";
import { storeToRefs } from "pinia";
import {
  bestSellerChart,
  proportionOfSalesChart,
} from "@/methods/chartOption/productList.js";
import productStore from "@/stores/product.js";

export default {
  components: { SetProductModal, VueEcharts },
  setup() {
    const product = productStore();
    const { productList } = storeToRefs(product);
    const bestSellerOption = { ...bestSellerChart };
    const proportionOfSalesOption = { ...proportionOfSalesChart };
    const proportionOfSales = ref(null);
    const productKeyWord = ref("");
    const nowPage = ref(1);
    const loading = loadingStore();
    const router = useRouter();
    const getMaxDataLen = () => {
      const windowHeight = window.innerHeight;
      const dataHeight = windowHeight * 0.72;
      return Math.floor(dataHeight / 60);
    };
    const maxDataLen = ref(getMaxDataLen());
    const pageCount = computed(() => {
      if (productList.value) {
        return Math.ceil(
          Object.keys(productList.value).length / maxDataLen.value
        );
      } else {
        return 0;
      }
    });
    const showData = computed(() => {
      if (productList.value) {
        const searchData = productList.value.filter((product) => {
          return product.title.match(productKeyWord.value);
        });
        const startData =
          nowPage.value * maxDataLen.value - maxDataLen.value + 1;
        const endData = nowPage.value * maxDataLen.value;
        return searchData.slice(startData - 1, endData);
      } else {
        return [];
      }
    });

    const getProductAll = async () => {
      loading.showLoading();
      try {
        const res = await apiGetProductAll();
        console.log(res);
        product.setProductList(Object.values(res.data.products));
      } catch (err) {
        // 驗證失敗
        router.push("/login");
        console.log(err);
      } finally {
        loading.hideLoading();
      }
    };
    const setEditData = (data) => {
      product.setEditData(data);
      router.push("/dashboard/editProduct");
    };
    const deleteProduct = async (product) => {
      const result = await deleteWarningAlert(product.title);
      if (!result) return;
      loading.showLoading();
      try {
        const res = await apiDeleteProduct(product.id);
        if (res.data.success) {
          await getProductAll();
        }
      } catch (err) {
        console.log(err);
      } finally {
        loading.hideLoading();
      }
    };
    // 切換頁數
    const switchpage = (page) => {
      nowPage.value = page;
    };
    const resizeChart = () => {
      const windowWidth = window.innerWidth;
      if (!proportionOfSales.value) return;
      const updateOption = JSON.parse(JSON.stringify(proportionOfSalesOption));
      if (windowWidth < 1550 && windowWidth > 1370) {
        updateOption.legend.right = "0%";
        proportionOfSales.value.setOption(updateOption);
      } else if (
        (windowWidth < 1370 && windowWidth > 992) ||
        windowWidth < 576
      ) {
        // 縱向圖表
        updateOption.legend = {
          bottom: "0%",
          left: "center",
          orient: "horizontal",
          selectedMode: false,
        };
        updateOption.series[0].center = ["50%", "45%"];
        proportionOfSales.value.setOption(updateOption);
      } else {
        proportionOfSales.value.setOption(proportionOfSalesOption);
      }
    };
    getProductAll();
    onMounted(() => {
      resizeChart();
      window.addEventListener("resize", () => {
        maxDataLen.value = getMaxDataLen();
        resizeChart();
      });
    });
    return {
      showData,
      pageCount,
      nowPage,
      productKeyWord,
      bestSellerOption,
      proportionOfSalesOption,
      proportionOfSales,
      getProductAll,
      deleteProduct,
      switchpage,
      setEditData,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-item {
  cursor: pointer;
}
.productList {
  min-height: 72vh;
  max-width: 100vw;
  overflow: auto;
}

table {
  margin-top: 1rem;
  td,
  th {
    vertical-align: middle;
    white-space: nowrap;
    font-weight: normal;
    &:first-child,
    &:last-child {
      text-align: center;
    }
    &:nth-last-child(2),
    &:nth-last-child(3) {
      text-align: right;
    }
  }
  input[role="switch"] {
    cursor: pointer;
  }
  thead {
    tr {
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: #efeff0;
    }
    th {
      padding: 1rem 0.5rem;
    }
  }
}
</style>
