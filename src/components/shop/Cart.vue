<template>
  <div class="container-fluid pt-2" v-if="cart.cartItems.length > 0">
    <div class="row">
      <div class="col-lg-7 col-xl-7">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" class="text-center mobile-hide">商品圖片</th>
                <th scope="col">商品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">單價</th>
                <th scope="col" class="text-center">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart.cartItems" :key="item">
                <th scope="row" class="mobile-hide">
                  <div class="d-center">
                    <img
                      :src="item.info.imageUrl"
                      :alt="item.info.title"
                      :title="item.info.title"
                    />
                  </div>
                </th>
                <td>
                  <p class="mb-0 line-clamp-2">{{ item.info.title }}</p>
                </td>
                <td>
                  <div class="d-end">
                    <select
                      class="form-select"
                      @change="changeCount($event, index)"
                    >
                      <option
                        :selected="num == item.count"
                        v-for="num in 30"
                        :key="num"
                      >
                        {{ num }}
                      </option>
                    </select>
                  </div>
                </td>
                <td>{{ item.info.price.toLocaleString() }}</td>
                <td class="text-center">
                  <font-awesome-icon
                    role="button"
                    icon="fa-trash-can"
                    class="text-secondary"
                    @click="cart.delItem(index)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <div class="card p-3 shadow">
          <h2 class="fs-5 mb-3 border-bottom pb-2">訂單金額</h2>
          <div class="d-flex align-items-center mb-3">
            <label for="coupon" class="form-label me-2 mb-0 text-nowrap"
              >優惠券</label
            >
            <input
              type="text"
              class="form-control form-control-sm"
              id="coupon"
              placeholder="請輸入優惠代碼"
              v-model="selectedCoupon.code"
              :disabled="availableCoupon"
            />
          </div>
          <div class="d-flex flex-column flex-sm-row justify-content-between">
            <p
              class="mb-2 fs-6 text-decoration-underline"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#couponModal"
            >
              選用優惠券<font-awesome-icon
                class="ms-1"
                icon="fa-solid fa-arrow-right"
              />
            </p>
            <p
              class="text-end text-green mb-0"
              role="button"
              v-if="availableCoupon"
            >
              {{ selectedCoupon.code }} 優惠券
              <button
                type="button"
                class="btn-close pe-0"
                @click="removeCoupon"
              ></button>
            </p>
          </div>

          <div class="d-column align-items-end mt-2">
            <div class="d-between w-40 text-nowrap">
              <span class="fs-6 mb-1 text-secondary"> 小記 </span>
              <span class="fs-6 mb-1 text-secondary">
                $ {{ cart.cartAmount.toLocaleString() }}
              </span>
            </div>
            <div class="d-between w-40 text-nowrap">
              <span class="fs-6 mb-1 text-secondary"> 折扣 </span>
              <span class="fs-6 mb-1 text-secondary">
                $
                {{
                  (
                    cart.cartAmount -
                    cart.cartAmount * (selectedCoupon.percent / 100)
                  ).toLocaleString()
                }}
              </span>
            </div>
          </div>

          <div class="d-end text-nowrap border-top pt-2 mt-2">
            <span class="fs-4 mb-1 me-2"> 總金額 </span>
            <span class="fs-4 mb-1">
              $
              {{
                (
                  cart.cartAmount *
                  (selectedCoupon.percent / 100)
                ).toLocaleString()
              }}
            </span>
          </div>

          <button class="btn btn-primary mt-2">立即結帳</button>
        </div>
      </div>
    </div>
  </div>
  <h2 class="empty-text" v-else>
    目前還未將商品加入購物車
    <font-awesome-icon class="ms-2" icon="fa-face-frown" />
  </h2>
  <CouponModal @applyCoupon="setCoupon" />
</template>
<script>
import cartStore from "@/stores/shop/cart.js";
import CouponModal from "@/components/shop/CouponModal.vue";
import { ref } from "vue";
import { automaticLogin } from "@/methods/util.js";
import loadingStore from "@/stores/loading";
import couponStore from "@/stores/dashboard/coupon.js";

export default {
  components: { CouponModal },
  setup(props) {
    const coupon = couponStore();
    const loading = loadingStore();
    loading.showLoading();
    automaticLogin().then(async () => {
      await coupon.getCoupons();
      loading.hideLoading();
    });
    const cart = cartStore();
    const selectedCoupon = ref("");
    const availableCoupon = ref(false);
    const changeCount = (event, index) =>
      cart.changeItemCount(index, event.target.value);
    const setCoupon = (coupon) => {
      selectedCoupon.value = { ...coupon };
      availableCoupon.value = true;
    };
    const removeCoupon = () => {
      availableCoupon.value = false;
      selectedCoupon.value = "";
    };
    return {
      cart,
      changeCount,
      setCoupon,
      selectedCoupon,
      availableCoupon,
      removeCoupon,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-responsive {
  max-height: 80svh;

  table {
    th {
      white-space: nowrap;
    }
    th,
    td {
      vertical-align: middle;
      img {
        width: 100px;
        height: 100px;
      }
      &:nth-child(n + 3) {
        text-align: end;
      }
      select {
        text-align: center;
        width: 70px;
      }
    }
  }
}
</style>
