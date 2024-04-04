<template>
  <div
    class="modal fade"
    tabindex="-1"
    id="setCoupon"
    data-bs-focus="false"
    aria-labelledby="setCouponLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="setCouponLabel">
            {{ props.setStatus === "create" ? "新增" : "修改" }}優惠券
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card m-2 p-3">
            <div class="mb-3">
              <label for="couponId" class="form-label">優惠券代碼</label>
              <input
                type="text"
                class="form-control w-100"
                id="couponId"
                v-model="data.code"
              />
            </div>
            <div class="mb-3">
              <label for="couponTitle" class="form-label">優惠券名稱</label>
              <input
                type="text"
                class="form-control w-100"
                id="couponTitle"
                placeholder="請輸入優惠券名稱"
                v-model="data.title"
              />
            </div>
            <div class="d-inline">
              <label class="form-label">是否啟用</label>

              <div class="form-check form-check-inline ms-3 mb-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="is_enable"
                  id="is_enableTrue"
                  :value="1"
                  v-model="data.is_enabled"
                />
                <label
                  class="form-check-label"
                  for="is_enableTrue"
                  role="button"
                  >是</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="is_enable"
                  id="is_enableFalse"
                  v-model="data.is_enabled"
                  :value="2"
                />
                <label
                  class="form-check-label"
                  for="is_enableFalse"
                  role="button"
                  >否</label
                >
              </div>
            </div>
            <label for="discount" class="form-label">折扣</label>
            <div class="input-group mb-3 fixed-width-100">
              <input
                type="number"
                class="form-control text-end"
                placeholder="請輸入折扣"
                id="discount"
                v-model="data.percent"
              />
              <span class="input-group-text">%</span>
            </div>
            <label class="form-label d-block">使用期限</label>
            <VueDatePicker
              class="mb-3 w-50 mobile-w-75"
              v-model="date"
              :format="format"
              :format-locale="zhTW"
              select-text="確認"
              cancel-text="取消"
            ></VueDatePicker>
          </div>
        </div>
        <div class="modal-footer border-0 mt-0 pt-0">
          <button type="button" class="btn btn-primary w-25" @click="saveData">
            {{ props.setStatus === "create" ? "新增" : "修改" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { zhTW } from "date-fns/locale";
import { getUnixTimestamp } from "@/methods/date.js";
import {
  apiCreateCoupon,
  apiUpdateCoupon,
  apiGetCouponList,
} from "@/api/api.js";
import loadingStore from "@/stores/loading";
import { errorAlert, successAlert } from "@/methods/sweetAlert.js";
import { hideModal } from "@/methods/bootstrap.js";
import couponStore from "@/stores/dashboard/coupon.js";

export default {
  components: { VueDatePicker },
  props: {
    setStatus: {
      type: String,
    },
    editData: {
      type: Object,
    },
  },
  setup(props) {
    const coupon = couponStore();
    const loading = loadingStore();
    const date = ref(new Date());
    const data = ref({
      title: "",
      is_enabled: 1,
      percent: 80,
      due_date: null,
      code: "",
    });
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}/${month.toString().padStart(2, "0")}/${day
        .toString()
        .padStart(2, "0")}`;
    };
    const saveData = async () => {
      const api =
        props.setStatus === "create" ? apiCreateCoupon : apiUpdateCoupon;
      try {
        const { title, is_enabled, percent, code } = data.value;
        if (!title) {
          errorAlert("請輸入優惠券名稱");
          return;
        }
        if (!code) {
          errorAlert("請輸入優惠碼");
          return;
        }
        const codeRepeat = coupon.coupons.some(
          (item) => item.code === code || item.title === title
        );
        if (codeRepeat && props.setStatus === "create") {
          errorAlert("優惠代碼或優惠券名稱已被建立");
          return;
        }
        if (percent < 1 || percent > 100) {
          errorAlert("折扣不可小於1或大於100");
          return;
        }
        loading.showLoading();
        const params = {
          title,
          is_enabled,
          percent,
          due_date: getUnixTimestamp(date.value),
          code,
        };
        const res = await api({ data: params }, data.value.id);
        if (res.status === 200) {
          await coupon.getCoupons(1);
          hideModal("setCoupon");
          successAlert(
            `${props.setStatus === "create" ? "建立" : "修改"}成功!`
          );
          data.value = {
            title: "",
            is_enabled: 1,
            percent: 80,
            due_date: null,
            code: "",
          };
          date.value = new Date();
        }
        loading.hideLoading();
      } catch (error) {
        console.log("🚀  error:", error);
        errorAlert("發生錯誤!");
        loading.hideLoading();
      }
    };
    onMounted(() => {
      const modal = document.getElementById("setCoupon");
      modal.addEventListener("show.bs.modal", async (event) => {
        if (props.setStatus === "create") {
          loading.showLoading();
          try {
            const res = await apiGetCouponList();
            if (res.status === 200) {
              const couponLen = res.data.coupons.length;
              data.value.code = `Coupon${(couponLen + 1)
                .toString()
                .padStart(3, "0")}`;
            }
          } catch (error) {
            console.log(error);
          } finally {
            loading.hideLoading();
          }
        } else {
          data.value = JSON.parse(JSON.stringify(props.editData));
          date.value = new Date(props.editData.due_date * 1000);
          console.log("🚀  date.value:", date.value);
        }
      });
    });

    return {
      date,
      data,
      format,
      zhTW,
      props,
      saveData,
    };
  },
};
</script>
