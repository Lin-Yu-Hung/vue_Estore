<template>
  <div class="productList">
    <div class="d-between">
      <div class="border px-3 rounded-5 d-center align-items-center w-25">
        <font-awesome-icon icon="fa-search" role="button" />
        <input
          type="text"
          class="form-control border-0"
          placeholder="查詢商品名稱"
          v-model="productKeyWord"
        />
      </div>

      <button
        type="button"
        class="btn btn-dark py-1 px-3"
        data-bs-toggle="modal"
        data-bs-target="#setProductModal"
        @click="setStatus = 'add'"
      >
        + 新增
      </button>
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
            <p class="fixed-width-80 status-text bg-success text-green">啟用</p>
          </td>
          <td class="mobile-hide">{{ product.category }}</td>

          <td>
            <img class="image-sm me-2" :src="product.imageUrl1" />{{
              product.title
            }}
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
                data-bs-toggle="modal"
                data-bs-target="#setProductModal"
                @click="setStatus = 'edit'"
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
      <ul class="pagination">
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
        <li class="page-item" v-for="(item, index) in pageCount" :key="index">
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

  <setProductModal :setStatus="setStatus" @updateData="getProductAll" />
</template>
<script>
import { apiGetProductAll, apiDeleteProduct } from "@/api/api";
import { ref, computed, onMounted } from "vue";
import loadingStore from "@/stores/loading";
import SetProductModal from "../modal/SetProductModal.vue";
import { deleteProductAlert } from "@/methods/sweetAlert.js";
import { useRouter } from "vue-router";

export default {
  components: { SetProductModal },
  setup() {
    const productKeyWord = ref("");
    const nowPage = ref(1);
    const setStatus = ref("add");
    const loading = loadingStore();
    const productList = ref();
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
        console.log("🚀  productList.value:", productList.value);
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
        productList.value = Object.values(res.data.products);
      } catch (err) {
        // 驗證失敗
        router.push("/login");
        console.log(err);
      }
      loading.hideLoading();
    };
    const deleteProduct = async (product) => {
      const result = await deleteProductAlert(product.title);
      if (!result) return;
      loading.showLoading();
      try {
        const res = await apiDeleteProduct(product.id);
        if (res.data.success) {
          console.log(`刪除${product.title}商品!`);
          getProductAll();
        }
      } catch (err) {
        console.log(err);
        loading.hideLoading();
      }
    };
    // 切換頁數
    const switchpage = (page) => {
      nowPage.value = page;
    };
    getProductAll();
    onMounted(() => {
      window.addEventListener("resize", () => {
        maxDataLen.value = getMaxDataLen();
      });
    });
    return {
      showData,
      setStatus,
      getProductAll,
      deleteProduct,
      pageCount,
      nowPage,
      switchpage,
      productKeyWord,
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
  margin: 0.5rem 0;
  padding: 0.5rem 2rem;
}

// .imageItem {
//   width: 10vw;
//   img {
//     width: 100%;
//     height: 120px;
//   }
// }
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
