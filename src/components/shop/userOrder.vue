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
          placeholder="查詢訂單編號"
          v-model="keyWord"
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
          訂單日期
          <font-awesome-icon
            :icon="iconName"
            class="ms-1"
            role="button"
            id="dateDom"
            @click="toggleIcon('dateDom')"
          />
        </span>
        <span class="border-end pe-4 ms-4 mobile-hide w-10 text-center">
          品項</span
        >
      </button>
      <TransitionGroup name="list">
        <div
          class="accordion-item d-column align-items-end"
          v-for="order in showData"
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
            <div class="accordion-body border-top">
              <div class="d-flex flex-wrap text-nowrap mb-3 order-info">
                <ul class="flex-grow-1 mb-0 ps-0 ps-md-5">
                  <li>姓名：{{ order.user.name }}</li>
                  <li>電話：{{ order.user.tel }}</li>
                  <li>地址：{{ order.user.address }}</li>
                  <li>電子信箱：{{ order.user.email }}</li>
                </ul>
                <ul class="flex-grow-1 mb-0 ps-0 ps-md-5">
                  <li>訂單編號：{{ order.id }}</li>
                  <li>訂單日期：{{ timestampToYMD(order.create_at) }}</li>
                  <li>訂單金額：{{ order.total.toLocaleString() }}</li>
                  <li>備註：{{ order.message }}</li>
                </ul>
              </div>

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
      </TransitionGroup>
      <nav
        class="mt-3 d-end"
        v-if="pagination.total_pages && pagination.total_pages > 1"
      >
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              v-if="pagination.has_pre"
              @click="getOrders(pagination.current_page - 1)"
              >上一頁</a
            >
          </li>
          <li
            class="page-item"
            :class="{ active: pagination.current_page === page }"
            v-for="page in pagination.total_pages"
            :key="page"
            @click="getOrders(page)"
          >
            <a class="page-link">{{ page }}</a>
          </li>

          <li class="page-item">
            <a
              class="page-link"
              v-if="pagination.has_next"
              @click="getOrders(pagination.current_page + 1)"
              >下一頁</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { apiGetOrders } from "@/api/api.js";
import { ref } from "vue";
import loadingStore from "@/stores/loading";
import { timestampToYMD } from "@/methods/date.js";
import { computed } from "vue";

export default {
  setup(props) {
    const orders = ref([]);
    const loading = loadingStore();
    const keyWord = ref("");
    const iconName = ref("");
    const pagination = ref({});
    const getOrders = async (page = 1) => {
      loading.showLoading();

      try {
        const res = await apiGetOrders(page);
        console.log(res);
        if (res.data.success) {
          orders.value = [...res.data.orders];
          pagination.value = { ...res.data.pagination };
        } else {
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.hideLoading();
        iconName.value = "fa-arrow-up-wide-short";
        keyWord.value = "";
      }
    };
    getOrders();

    const showData = computed(() => {
      return orders.value.filter((order) => {
        return order.id.match(keyWord.value);
      });
    });

    const toggleIcon = () => {
      // 判斷目前要進行的排序
      const sortType =
        iconName.value === "fa-arrow-down-short-wide" ? "up" : "down";

      iconName.value =
        sortType === "up"
          ? "fa-arrow-up-wide-short"
          : "fa-arrow-down-short-wide";
      // 排序
      orders.value = orders.value.sort((a, b) => {
        return sortType === "up"
          ? b.create_at - a.create_at
          : a.create_at - b.create_at;
      });
    };

    return {
      orders,
      timestampToYMD,
      showData,
      keyWord,
      toggleIcon,
      iconName,
      pagination,
      getOrders,
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
  background-color: #dee2e6 !important;
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

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
.order-info {
  li {
    padding: 0.5rem 0;
  }
}
.pagination {
  li {
    cursor: pointer;
    &.active {
      a {
        background-color: #2c3953;
        border-color: #2c3953;
      }
    }
  }
}
</style>
