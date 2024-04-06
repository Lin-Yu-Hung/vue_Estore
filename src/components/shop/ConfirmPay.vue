<template>
  <div class="container-fluid d-center p-3">
    <div class="card shadow p-3">
      <div class="d-between flex-column h-100">
        <div class="d-column">
          <h2 class="fs-title border-bottom pb-2">確認付款</h2>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">商品名稱</th>
                  <th scope="col" class="text-end">數量</th>
                  <th scope="col" class="text-end">單價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.cartItems" :key="item.info.id">
                  <td>{{ item.info.title }}</td>
                  <td class="text-end">{{ item.count }}</td>
                  <td class="text-end">
                    {{ item.info.price.toLocaleString() }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="d-flex mt-2">
          <button
            class="btn btn-light border w-50 me-1"
            @click="router.push('/eStore/cart')"
          >
            取消
          </button>
          <button class="btn btn-primary w-50 ms-1" @click="confirmPay">
            確認付款
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartStore from "@/stores/shop/cart.js";
import { sendLinePayConfirm } from "@/api/api.js";
import { useRoute, useRouter } from "vue-router";
import loadingStore from "@/stores/loading";
import { errorAlert, successAlert } from "@/methods/sweetAlert.js";

export default {
  setup(props) {
    const cart = cartStore();
    const route = useRoute();
    const router = useRouter();
    const loading = loadingStore();

    const confirmPay = async () => {
      if (!route.query.transactionId) {
        errorAlert("發生錯誤");
        return;
      }
      loading.showLoading();
      try {
        const res = await sendLinePayConfirm({
          transactionId: route.query.transactionId,
          amount: cart.cartAmount,
          currency: "TWD",
        });
        console.log(res);
        if (res.status === 200) {
          await successAlert("交易成功");
          router.push("/eStore/home");
          setTimeout(() => {
            cart.clearCart();
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.hideLoading();
      }
    };
    console.log();
    return {
      cart,
      router,
      confirmPay,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-responsive {
  max-height: 60svh;
  table {
    th,
    td {
      white-space: nowrap;
    }
  }
}

.container-fluid {
  min-height: calc(80svh - 72px - 60px);
}
</style>
