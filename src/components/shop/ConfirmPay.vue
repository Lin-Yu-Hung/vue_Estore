<template>
  <div
    class="container-fluid d-column justify-content-center align-items-center"
  >
    <img :src="logoSrc" alt="LINE-Pay" />
    <h2 class="fs-2 text-center mt-4">交易進行中...</h2>
  </div>
</template>
<script>
import cartStore from "@/stores/shop/cart.js";
import { sendLinePayConfirm } from "@/api/api.js";
import { useRoute, useRouter } from "vue-router";
import { errorAlert, successAlert } from "@/methods/sweetAlert.js";
import { computed } from "vue";
import linePayImageSmall from "@/assets/images/LINE-Pay(h)_W119_n.png";
import linePayImageLarge from "@/assets/images/LINE-Pay(h)_W238_n.png";
import pendingOrderStore from "@/stores/shop/pendingOrder.js";

export default {
  setup(props) {
    const cart = cartStore();
    const route = useRoute();
    const router = useRouter();
    const pendingOrder = pendingOrderStore();
    const logoSrc = computed(() => {
      if (window.innerWidth <= 576) {
        return linePayImageSmall;
      } else {
        return linePayImageLarge;
      }
    });

    const confirmPay = async () => {
      if (!route.query.transactionId) {
        errorAlert("交易發生錯誤");
        router.push("/eStore/home");
        return;
      }
      try {
        const res = await sendLinePayConfirm({
          transactionId: route.query.transactionId,
          amount: cart.cartAmount,
          currency: "TWD",
        });
        console.log(res);
        if (res.status === 200 && pendingOrder.info.orderId) {
          router.push(`/eStore/completeOrder/${pendingOrder.info.orderId}`);
          pendingOrder.initInfo();
          cart.clearCart();
        } else {
          errorAlert("交易發生錯誤");
          router.push("/eStore/home");
        }
      } catch (error) {
        console.log(error);
        router.push("/eStore/home");
      }
    };
    confirmPay();
    return {
      cart,
      router,
      confirmPay,
      logoSrc,
    };
  },
};
</script>
<style lang="scss" scoped>
.container-fluid {
  min-height: calc(80svh - 72px - 60px);
}
</style>
