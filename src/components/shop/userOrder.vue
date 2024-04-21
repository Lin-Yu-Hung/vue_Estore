<template>
  <div class="card shadow my-3 p-3">
    <h2 class="fs-title mb-3">
      <font-awesome-icon icon="fa-file-lines" role="button" />我的訂單
    </h2>
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item d-column align-items-end"
        v-for="order in orders"
        :key="order.id"
      >
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${order.id}`"
          aria-expanded="true"
          :aria-controls="`collapse${order.id}`"
        >
          <span class="border-end pe-2 pe-md-4">
            訂單日期：{{ timestampToYMD(order.create_at) }}
          </span>
          <span class="border-end pe-4 ms-4 mobile-hide">
            品項：{{ Object.keys(order.products).length }}
          </span>

          <span class="arrow-text"> 詳細資訊 </span>
        </button>
        <div
          :id="`collapse${order.id}`"
          class="accordion-collapse collapse w-100"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="d-between pb-2 border-bottom flex-wrap">
              <span> 訂單編號：{{ order.id }} </span>
              <h2 class="fs-6 text-end">
                訂單金額：{{ order.total.toLocaleString() }}
              </h2>
            </div>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th class="text-center mobile-hide">商品圖片</th>
                    <th>商品名稱</th>
                    <th class="text-end">數量</th>
                    <th class="text-end">單價</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="text-center mobile-hide">
                      <img
                        style="width: 100px; height: 100px"
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                        :title="item.product.title"
                      />
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td class="text-end">{{ item.qty }}</td>
                    <td class="text-end">
                      {{ item.product.price.toLocaleString() }}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiGetOrders } from "@/api/api.js";
import { ref } from "vue";
import loadingStore from "@/stores/loading";
import { timestampToYMD } from "@/methods/date.js";

export default {
  setup(props) {
    const orders = ref([]);
    const loading = loadingStore();

    const getOrders = async (page = 1) => {
      loading.showLoading();
      try {
        const res = await apiGetOrders(page);
        console.log(res);
        if (res.data.success) {
          orders.value = [...res.data.orders];
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.hideLoading();
      }
    };
    getOrders();
    return {
      orders,
      timestampToYMD,
    };
  },
};
</script>
<style lang="scss" scoped>
.accordion-item {
  white-space: nowrap;
  overflow: auto;
}
.accordion-button:focus {
  box-shadow: none;
}
.accordion-button:not(.collapsed) {
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid #dee2e6;
}
.accordion-button {
  border-color: #dee2e6 !important;
}
.arrow-text {
  position: absolute;
  right: 53px; // 根據需要調整位置
  top: 50%;
  transform: translateY(-50%);
}

.accordion-body {
  .table-responsive {
    max-height: 40svh;
    table {
      th,
      td {
        white-space: nowrap;
        vertical-align: middle;
      }
    }
  }
}
</style>
