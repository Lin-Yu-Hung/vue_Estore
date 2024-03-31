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
            v-for="(item, index) in 10"
            :key="index"
            class="card card-hover-shadow mb-3"
            :for="`W00000000000${item}`"
            role="button"
          >
            <div class="container-fluid">
              <div class="row">
                <div class="col-2 border-end">
                  <div class="d-center align-items-center h-100">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="coupon"
                      :id="`W00000000000${item}`"
                      :value="`W00000000000${item}`"
                      v-model="coupon"
                    />
                  </div>
                </div>
                <div class="col-8 col-md-6">
                  <div class="d-column py-2">
                    <p class="text-secondary fs-small mb-2">
                      套用活動：新用戶優惠
                    </p>
                    <p class="text-secondary fs-small mb-2">
                      優惠代碼：{{ `W00000000000${item}` }}
                    </p>
                    <p class="text-secondary fs-small mb-0">
                      有效期限：2024/12/31
                    </p>
                  </div>
                </div>
                <div class="col-2 col-md border-start">
                  <div class="d-center align-items-center h-100">8折</div>
                </div>
              </div>
            </div>
          </label>
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
import { ref } from "vue";

export default {
  setup(props, context) {
    const coupon = ref(null);
    const { emit } = context;
    const applyCoupon = () => {
      emit("applyCoupon", coupon.value);
    };
    return {
      coupon,
      applyCoupon,
    };
  },
};
</script>
