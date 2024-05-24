<template>
  <div class="container-fluid">
    <div class="d-between align-items-center">
      <h2 class="fs-5">
        <font-awesome-icon
          icon="fa-file-lines"
          role="button"
          class="text-secondary me-2 ms-1"
        />訂單列表
      </h2>
      <div class="border px-3 rounded-5 d-center align-items-center w-25 my-2">
        <font-awesome-icon icon="fa-search" role="button" />
        <input
          type="text"
          class="form-control form-control-sm border-0"
          placeholder="查詢訂單編號"
          v-model="orderKeyWord"
        />
      </div>
    </div>

    <div class="card shadow table-responsive" v-if="showData.length > 0">
      <table class="table">
        <thead>
          <tr class="bg-light">
            <th scope="col" class="mobile-hide"></th>
            <th scope="col">
              建立日期
              <DataSortIcon :sortList="orderList" :sortItem="'create_at'" />
            </th>
            <th scope="col" class="text-center">是否付款</th>

            <th scope="col" class="mobile-hide">訂單編號</th>
            <th scope="col" class="text-end mobile-hide">
              訂單金額
              <DataSortIcon :sortList="orderList" :sortItem="'total'" />
            </th>
            <th scope="col" class="text-end">詳細資料</th>
            <th scope="col" class="text-center" v-if="!isVisitor">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in showData" :key="order.id">
            <td class="mobile-hide"></td>
            <td>{{ timestampToYMD(order.create_at) }}</td>
            <td scope="col" class="text-center">
              <p
                class="fixed-width-80 status-text text-center"
                :class="{
                  'bg-success text-green': order.is_paid,
                  'bg-red text-white': !order.is_paid,
                }"
              >
                {{ order.is_paid ? "已付款" : "尚未付款" }}
              </p>
            </td>
            <td class="mobile-hide">{{ order.id }}</td>
            <td class="text-end mobile-hide">
              {{ order.total?.toLocaleString() }}
            </td>
            <td class="text-end">
              <span
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="text-underline-hover text-link"
                @click="setOrderDetail(order)"
              >
                詳細資料
              </span>
            </td>
            <td v-if="!isVisitor">
              <div class="d-flex justify-content-center flex-wrap">
                <button
                  type="button"
                  class="edit-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="setOrderDetail(order, 'edit')"
                >
                  <font-awesome-icon icon="fa-edit" />編輯
                </button>
                <button
                  type="button"
                  class="danger-btn"
                  @click="deleteOrder(order)"
                >
                  <font-awesome-icon icon="fa-trash-can" />刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav
      aria-label="Page navigation example"
      class="mt-3 d-end"
      v-if="pageInfo.total_pages > 1"
    >
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ invisible: !pageInfo.has_pre }"
          @click="getOrderList(--pageInfo.current_page)"
        >
          <a class="page-link">上一頁</a>
        </li>
        <li
          class="page-item"
          v-for="page in pageInfo.total_pages"
          :key="page"
          :class="{ active: pageInfo.current_page === page }"
          @click="getOrderList(page)"
        >
          <a class="page-link">{{ page }}</a>
        </li>

        <li
          class="page-item"
          :class="{ invisible: !pageInfo.has_next }"
          @click="getOrderList(++pageInfo.current_page)"
        >
          <a class="page-link">下一頁</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">詳細資訊</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h2 class="fs-5 border-bottom pb-3">訂貨人資訊</h2>
          <div class="container-fluid" v-if="orderDetail.user">
            <div class="row g-3 text-nowrap">
              <div class="col-md-6">
                <div class="row align-items-center">
                  <div class="col-3 col-md">姓名</div>
                  <div class="col">
                    <span v-if="modalMode === 'view'">{{
                      orderDetail.user?.name
                    }}</span>
                    <input
                      v-else
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="姓名"
                      v-model="orderDetail.user.name"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row align-items-center">
                  <div class="col-3 col-md-5 text-md-end">電話</div>
                  <div class="col">
                    <span v-if="modalMode === 'view'">{{
                      orderDetail.user?.tel
                    }}</span>
                    <input
                      v-else
                      type="tel"
                      class="form-control form-control-sm"
                      placeholder="電話"
                      v-model="orderDetail.user.tel"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center">
                  <div class="col-3">地址</div>
                  <div class="col">
                    <span v-if="modalMode === 'view'">{{
                      orderDetail.user?.address
                    }}</span>
                    <input
                      v-else
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="地址"
                      v-model="orderDetail.user.address"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center">
                  <div class="col-3">電子信箱</div>
                  <div class="col">
                    <span v-if="modalMode === 'view'">{{
                      orderDetail.user?.email
                    }}</span>
                    <input
                      v-else
                      type="email"
                      class="form-control form-control-sm"
                      placeholder="電子信箱"
                      v-model="orderDetail.user.email"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center">
                  <div class="col-3">備註</div>
                  <div class="col">
                    <span v-if="modalMode === 'view'">{{
                      orderDetail.message
                    }}</span>
                    <input
                      v-else
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="備註"
                      v-model="orderDetail.message"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center">
                  <div class="col-3">是否付款</div>
                  <div class="col">
                    <span v-if="modalMode === 'view'">{{
                      orderDetail.is_paid ? "是" : "否"
                    }}</span>
                    <input
                      v-else
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      v-model="orderDetail.is_paid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <template v-if="modalMode === 'view'">
            <h2 class="fs-5 border-bottom py-3 mt-3">商品資訊</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">商品名稱</th>
                  <th scope="col" class="text-nowrap text-end">數量</th>
                  <th scope="col" class="text-end">單價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in orderDetail.products" :key="item.id">
                  <td>{{ item.product?.title }}</td>
                  <td class="text-end">{{ item.qty }}</td>
                  <td class="text-end">{{ item.total?.toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
            <p class="text-end text-small text-secondary">
              折扣：{{ orderDiscount }}
            </p>
            <h2 class="fs-5 text-end">總金額：{{ orderDetail.total }}</h2>
          </template>
          <template v-else>
            <div class="d-end mt-3">
              <button class="btn btn-primary-light px-4" @click="UpdateOrder">
                儲存
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, inject } from "vue";
import {
  apiGetAdminOrders,
  apiUpdateAdminOrder,
  apiDeleteAdminOrder,
} from "@/api/api.js";
import { timestampToYMD } from "@/methods/date.js";
import loadingStore from "@/stores/loading";
import DataSortIcon from "@/components/shared/DataSortIcon.vue";
import {
  deleteWarningAlert,
  successAlert,
  errorAlert,
} from "@/methods/sweetAlert.js";
import { hideModal } from "@/methods/bootstrap.js";

export default {
  components: { DataSortIcon },
  setup() {
    const isVisitor = inject("isVisitor");
    const loading = loadingStore();
    const orderList = ref([]);
    const orderKeyWord = ref("");
    const pageInfo = ref({});
    const orderDetail = ref({});
    const orderDiscount = ref(0);
    const modalMode = ref("");
    const getOrderList = async (page = 1) => {
      try {
        loading.showLoading();
        const res = await apiGetAdminOrders(page);
        console.log(res);
        if (res.data.success) {
          orderList.value = [...res.data.orders];
          pageInfo.value = { ...res.data.pagination };
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.hideLoading();
      }
    };
    const setOrderDetail = (order, status = "view") => {
      modalMode.value = status;
      orderDetail.value = JSON.parse(JSON.stringify(order));
      if (status === "view") {
        const productTotal = Object.entries(order.products).reduce(
          (acc, product) => {
            acc += product[1].total;
            return acc;
          },
          0
        );
        orderDiscount.value = productTotal - order.total;
      } else {
      }
    };
    const showData = computed(() => {
      return orderList.value.filter((order) =>
        order.id.match(orderKeyWord.value)
      );
    });
    const sendApiRes = async (api, apiParams, alertTitle) => {
      try {
        loading.showLoading();
        const res = await api(...apiParams);
        if (res.status === 200) {
          await getOrderList(pageInfo.value.current_page);
          hideModal("exampleModal");
          successAlert(`${alertTitle}成功`);
        }
        loading.hideLoading();
      } catch (error) {
        errorAlert("發生錯誤!");
        console.log(error);
      }
    };
    const deleteOrder = async (order) => {
      const result = await deleteWarningAlert(order.id);
      if (!result) return;
      sendApiRes(apiDeleteAdminOrder, [order.id], "刪除");
    };
    const UpdateOrder = async () => {
      sendApiRes(
        apiUpdateAdminOrder,
        [orderDetail.value.id, { data: orderDetail.value }],
        "修改"
      );
    };
    getOrderList(1);
    return {
      showData,
      pageInfo,
      timestampToYMD,
      orderKeyWord,
      getOrderList,
      orderList,
      orderDetail,
      setOrderDetail,
      orderDiscount,
      deleteOrder,
      modalMode,
      UpdateOrder,
      isVisitor,
    };
  },
};
</script>

<style lang="scss" scoped>
.table-responsive {
  max-height: 65svh;
  table {
    tr {
      th,
      td {
        white-space: nowrap;
        vertical-align: middle;
        padding: 1rem 1.5rem;
        &:nth-child(2) {
          width: 10%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        @media screen and (max-width: 576px) {
          padding: 1rem 0.75rem;
        }
      }
      th {
        font-weight: normal;
      }
    }
  }
}
.page-item {
  cursor: pointer;
  &.active {
    .page-link {
      background-color: #efeff0 !important;
      border: 1px solid #dee2e6;
      color: black;
    }
  }
}
</style>
