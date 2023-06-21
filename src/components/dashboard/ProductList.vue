<template>
  <button
    type="button"
    class="btn btn-dark py-2 px-3 m-2"
    data-bs-toggle="modal"
    data-bs-target="#setProductModal"
    @click="setStatus = 'add'"
  >
    新增商品
  </button>
  <div class="productList">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" class="mobile-hide">商品分類</th>
          <th scope="col" class="mobile-hide">商品圖片</th>
          <th scope="col">商品名稱</th>
          <th scope="col" class="mobile-hide">商品原價</th>
          <th scope="col">商品價格</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯商品</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in showData" :key="product.id">
          <td class="mobile-hide">{{ product.category }}</td>
          <td class="imageItem mobile-hide">
            <img :src="product.imageUrl1" :alt="product.title" />
          </td>
          <td>{{ product.title }}</td>
          <td class="mobile-hide">
            {{ product.origin_price.toLocaleString() }}
          </td>
          <td>{{ product.price.toLocaleString() }}</td>
          <td>
            <div class="form-check form-switch switch-btn">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                :checked="product.is_enabled == 1"
              />
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-secondary py-2 px-3 mx-1"
                data-bs-toggle="modal"
                data-bs-target="#setProductModal"
                @click="setStatus = 'edit'"
              >
                <font-awesome-icon icon="fa-pen-to-square" />編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger py-2 px-3 mx-1"
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
  <div class="d-end">
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
import { ref, computed } from "vue";
import loadingStore from "@/stores/loading";
import SetProductModal from "../modal/SetProductModal.vue";
import { deleteProductAlert } from "@/methods/sweetAlert.js";

export default {
  components: { SetProductModal },
  setup() {
    const maxDataLen = ref(10);
    const nowPage = ref(1);
    const setStatus = ref("add");
    const loading = loadingStore();
    const productList = ref();

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
        const startData =
          nowPage.value * maxDataLen.value - maxDataLen.value + 1;
        const endData = nowPage.value * maxDataLen.value;
        return productList.value.slice(startData - 1, endData);
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

    return {
      showData,
      setStatus,
      getProductAll,
      deleteProduct,
      pageCount,
      nowPage,
      switchpage,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-item {
  cursor: pointer;
}
.productList {
  max-width: 100vw;
  overflow: auto;
  margin: 0.5rem 0;
}

.imageItem {
  width: 10vw;
  img {
    width: 100%;
    height: 120px;
  }
}
table {
  user-select: none;
  margin-top: 1rem;
  td,
  th {
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    font-weight: normal;
  }
  thead {
    tr {
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: #efeff0;
    }
    th {
      font-size: 1.25rem;
      padding: 1rem 0.5rem;
    }
  }
}
</style>
