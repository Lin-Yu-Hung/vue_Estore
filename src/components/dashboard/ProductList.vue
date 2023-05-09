<template>
  <button type="button" class="btn btn-dark py-2 px-3">新增商品</button>
  <div class="productList">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">商品分類</th>
          <th scope="col">商品圖片</th>
          <th scope="col">商品名稱</th>
          <th scope="col">商品原價</th>
          <th scope="col">商品價格</th>
          <th scope="col">是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productList" :key="product.id">
          <td>{{ product.category }}</td>
          <td class="imageItem">
            <img :src="product.imageUrl" :alt="product.title" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.origin_price.toLocaleString() }}</td>
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
        </tr>
        <tr v-for="product in productList" :key="product.id">
          <td>{{ product.category }}</td>
          <td class="imageItem">
            <img :src="product.imageUrl" :alt="product.title" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.origin_price.toLocaleString() }}</td>
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
        </tr>
        <tr v-for="product in productList" :key="product.id">
          <td>{{ product.category }}</td>
          <td class="imageItem">
            <img :src="product.imageUrl" :alt="product.title" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.origin_price.toLocaleString() }}</td>
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
        </tr>
        <tr v-for="product in productList" :key="product.id">
          <td>{{ product.category }}</td>
          <td class="imageItem">
            <img :src="product.imageUrl" :alt="product.title" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.origin_price.toLocaleString() }}</td>
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
        </tr>
      </tbody>
    </table>
  </div>

  <div class="d-end">
    <nav aria-label="Page navigation example ">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { getProductAll } from "@/api/api";
import { ref } from "vue";
import loadingStore from "@/stores/loading";

export default {
  setup() {
    const loading = loadingStore();
    loading.showLoading();
    const productList = ref();
    getProductAll()
      .then((res) => {
        console.log(res);
        productList.value = res.data.products;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        loading.hideLoading();
      });
    return {
      productList,
    };
  },
};
</script>

<style lang="scss" scoped>
.productList {
  max-height: 70vh;
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
  }
  thead {
    th {
      font-size: 1.25rem;
      position: sticky;
      top: 0;
      background-color: white;
    }
  }
}
</style>
