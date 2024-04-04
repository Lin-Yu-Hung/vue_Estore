<template>
  <div class="container-fluid">
    <div class="d-end my-3">
      <button class="btn btn-primary" @click="showModal('create')">
        + 新增優惠券
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-hover border">
        <thead>
          <tr>
            <th scope="col" class="text-center">是否啟用</th>
            <th scope="col" class="lg-down-hide">優惠券編號</th>
            <th scope="col">優惠碼</th>
            <th scope="col" class="mobile-hide">名稱</th>
            <th scope="col">截止日期</th>
            <th scope="col" class="text-end">折扣額</th>
            <th scope="col" class="text-center">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupon.coupons" :key="item.id">
            <td class="text-center">
              <p
                class="fixed-width-80 status-text text-center"
                :class="{
                  'bg-success text-green': item.is_enabled === 1,
                  'bg-danger text-white': item.is_enabled !== 1,
                }"
              >
                {{ item.is_enabled === 1 ? "啟用" : "未啟用" }}
              </p>
            </td>
            <td class="w-30 lg-down-hide">{{ item.id }}</td>
            <td>{{ item.code }}</td>
            <td class="mobile-hide">{{ item.title }}</td>
            <td>{{ timestampToYMD(item.due_date) }}</td>
            <td class="text-end">{{ item.percent }} %</td>
            <td>
              <div class="d-flex justify-content-center flex-wrap">
                <button
                  type="button"
                  class="edit-btn"
                  @click="showModal('edit', item)"
                >
                  <font-awesome-icon icon="fa-edit" />編輯
                </button>
                <button
                  type="button"
                  class="danger-btn"
                  @click="deleteCoupon(item)"
                >
                  <font-awesome-icon icon="fa-trash-can" />刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-end mt-3" v-if="totalPages > 1">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ invisible: currentPage === 1 }">
            <a class="page-link" @click="getCoupons(currentPage - 1)">上一頁</a>
          </li>
          <li
            class="page-item"
            :class="{ active: currentPage === page }"
            v-for="(page, index) in totalPages"
            :key="index"
            @click="getCoupons(page)"
          >
            <a class="page-link">{{ page }}</a>
          </li>

          <li
            class="page-item"
            :class="{ invisible: currentPage === totalPages }"
          >
            <a class="page-link" @click="getCoupons(currentPage + 1)">下一頁</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <SetCoupon :setStatus="setStatus" :editData="editData" />
</template>
<script>
import SetCoupon from "@/components/dashboard/conpon/SetCoupon.vue";
import { ref, computed } from "vue";
import { bsModal } from "@/methods/bootstrap.js";
import couponStore from "@/stores/dashboard/coupon.js";
import loadingStore from "@/stores/loading";
import { timestampToYMD } from "@/methods/date.js";
import { apiDeleteCoupon } from "@/api/api.js";
import {
  errorAlert,
  successAlert,
  deleteWarningAlert,
} from "@/methods/sweetAlert.js";

export default {
  components: { SetCoupon },
  setup(props) {
    const coupon = couponStore();
    const loading = loadingStore();
    const currentPage = computed(() => coupon.pagination.current_page);
    const totalPages = computed(() => coupon.pagination.total_pages);
    const getCoupons = async (page = 1) => {
      loading.showLoading();
      await coupon.getCoupons(page);
      loading.hideLoading();
    };
    const deleteCoupon = async (item) => {
      const result = await deleteWarningAlert(item.title);
      if (!result) return;
      try {
        loading.showLoading();
        const res = await apiDeleteCoupon(item.id);
        if (res.status === 200) {
          await coupon.getCoupons(1);
          successAlert("刪除成功");
        }
        loading.hideLoading();
      } catch (error) {
        errorAlert("發生錯誤!");
        console.log(error);
      }
    };
    const setStatus = ref("");
    const editData = ref({});
    const showModal = (type = "create", data = null) => {
      const modal = bsModal("setCoupon");
      setStatus.value = type;
      if (type === "edit") {
        editData.value = JSON.parse(JSON.stringify(data));
      }
      setTimeout(() => {
        modal.show();
      }, 0);
    };
    getCoupons();
    return {
      setStatus,
      getCoupons,
      showModal,
      editData,
      coupon,
      timestampToYMD,
      deleteCoupon,
      currentPage,
      totalPages,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-responsive {
  max-height: 65svh;
  table {
    th,
    td {
      white-space: nowrap;
      vertical-align: middle;
      padding: 1rem 0.5rem;
    }
    th {
      background-color: #efeff0;
      font-weight: normal;
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
