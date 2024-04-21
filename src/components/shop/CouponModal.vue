<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="couponModalLabel">可使用優惠券</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <label
            v-for="(item, index) in showData"
            :key="index"
            class="card card-hover-shadow mb-3"
            :class="{ expired: isExpired(timestampToYMD(item.due_date)) }"
            :for="item.code"
            role="button"
          >
            <div class="container-fluid">
              <div class="row">
                <div class="col-2 border-end">
                  <div class="d-center align-items-center h-100">
                    <input
                      v-if="!isExpired(timestampToYMD(item.due_date))"
                      class="form-check-input"
                      type="radio"
                      name="coupon"
                      :id="item.code"
                      :value="{ code: item.code, percent: item.percent }"
                      v-model="selectedCoupon"
                    />
                  </div>
                </div>
                <div class="col-8 col-md-6">
                  <div class="d-column py-2">
                    <p class="text-secondary fs-small mb-2">
                      套用活動：{{ item.title }}
                    </p>
                    <p class="text-secondary fs-small mb-2">
                      優惠代碼：{{ item.code }}
                    </p>
                    <p class="text-secondary fs-small mb-0">
                      有效期限：{{ timestampToYMD(item.due_date) }}
                    </p>
                  </div>
                </div>
                <div class="col-2 col-md border-start">
                  <div class="d-center align-items-center h-100">
                    {{ item.percent / 10 }}折
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div class="d-end mt-3 pe-3" v-if="totalPages > 1">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" :class="{ invisible: currentPage === 1 }">
                <a class="page-link" @click="getCoupons(currentPage - 1)"
                  >上一頁</a
                >
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
                <a class="page-link" @click="getCoupons(currentPage + 1)"
                  >下一頁</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="modal-footer d-center">
          <button
            type="button"
            class="btn btn-primary w-50"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="applyCoupon"
          >
            套用
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import couponStore from "@/stores/dashboard/coupon.js";
import { timestampToYMD } from "@/methods/date.js";
import loadingStore from "@/stores/loading";

export default {
  setup(props, context) {
    const coupon = couponStore();
    const loading = loadingStore();
    const currentPage = computed(() => coupon.pagination.current_page);
    const totalPages = computed(() => coupon.pagination.total_pages);
    const selectedCoupon = ref(null);
    const { emit } = context;
    const applyCoupon = () => {
      emit("applyCoupon", selectedCoupon.value);
    };
    const getCoupons = async (page = 1) => {
      loading.showLoading();
      await coupon.getCoupons(page);
      loading.hideLoading();
    };

    const isExpired = (dateString) => {
      const currentDate = new Date();
      const expirationDate = new Date(dateString);
      return expirationDate < currentDate;
    };
    const showData = computed(() => {
      return coupon.coupons.sort((a, b) => {
        // 日期降序
        const dateA = new Date(timestampToYMD(a.due_date));
        const dateB = new Date(timestampToYMD(b.due_date));
        return dateB - dateA;
      });
    });
    return {
      selectedCoupon,
      applyCoupon,
      coupon,
      timestampToYMD,
      currentPage,
      totalPages,
      getCoupons,
      isExpired,
      showData,
    };
  },
};
</script>

<style lang="scss" scoped>
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
.expired {
  position: relative;
  &::after {
    content: "已過期";
    color: white;
    position: absolute;
    border-radius: 0.375rem;
    background-color: black;
    opacity: 0.75;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    cursor: not-allowed;
  }
}
</style>
