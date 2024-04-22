<template>
  <div class="card shadow my-3 p-2 p-md-3">
    <div class="d-between align-items-center mb-3">
      <h2 class="fs-title mb-0">
        <font-awesome-icon
          icon="fa-file-lines"
          role="button"
          class="text-secondary me-2 ms-1"
        />所有訂單
      </h2>
      <div
        class="input-group d-center align-items-center rounded-pill border bg-white mobile-w-50 w-25"
        style="z-index: 1"
      >
        <input
          type="text"
          class="form-control rounded-pill border-0 ps-3 fs-small"
          placeholder="輸入訂單編號"
        />
        <font-awesome-icon class="px-3" icon="fa-search" role="button" />
      </div>
    </div>

    <div class="accordion" id="accordionExample">
      <button
        class="header accordion-button border-0 px-2 px-md-3"
        type="button"
      >
        <span
          class="border-end pe-2 pe-md-4 w-25 mobile-hide"
          style="min-width: 220px"
        >
          訂單編號</span
        >
        <span
          class="border-end pe-2 pe-md-4 w-15 text-center mobile-hide-border"
          style="min-width: 120px"
        >
          訂單日期</span
        >
        <span class="border-end pe-4 ms-4 mobile-hide w-10 text-center">
          品項</span
        >
      </button>
      <div
        class="accordion-item d-column align-items-end"
        v-for="order in orders"
        :key="order.id"
      >
        <button
          class="accordion-button px-2 px-md-3"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${order.id}`"
          aria-expanded="true"
          :aria-controls="`collapse${order.id}`"
        >
          <span
            class="border-end pe-2 pe-md-4 w-25 mobile-hide"
            style="min-width: 220px"
          >
            {{ order.id }}
          </span>
          <span
            class="border-end pe-2 pe-md-4 w-15 text-center mobile-hide-border"
            style="min-width: 120px"
          >
            {{ timestampToYMD(order.create_at) }}
          </span>
          <span class="border-end pe-4 ms-4 mobile-hide w-10 text-center">
            {{ Object.keys(order.products).length }}
          </span>

          <span class="arrow-text"> 詳細資訊 </span>
        </button>
        <div
          :id="`collapse${order.id}`"
          class="accordion-collapse collapse w-100"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <h2 class="fs-5 text-md-end mt-2 mb-3">
              訂單金額：{{ order.total.toLocaleString() }}
            </h2>

            <div class="table-responsive">
              <table class="table table-hover border">
                <thead>
                  <tr class="table-light">
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
  span {
    white-space: nowrap;
  }
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
.header {
  &::after {
    contain: "";
    background-image: none;
  }
}

.mobile-hide-border {
  @media screen and (max-width: 576px) {
    border-right: 0 !important;
  }
}
</style>
