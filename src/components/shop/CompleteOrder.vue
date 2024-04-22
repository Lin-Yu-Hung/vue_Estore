<template>
  <template v-if="orderDetail">
    <div class="card shadow p-3 my-4">
      <div class="d-between">
        <router-link
          to="/eStore/home"
          class="text-secondary text-underline-hover"
          role="button"
          ><font-awesome-icon
            icon="fa-arrow-left"
            class="me-1"
          />回首頁</router-link
        >
        <router-link
          to="/eStore/userOrder"
          class="text-secondary text-underline-hover"
          role="button"
          >查看所有訂單<font-awesome-icon icon="fa-arrow-right" class="ms-1"
        /></router-link>
      </div>
      <div class="d-center flex-column align-items-center vh-30 mt-3">
        <img src="@/assets/icon/check.png" alt="check" class="check mb-3" />
        <h2>訂單已完成</h2>
        <p>感謝您的購買，您的訂單我們已經收到了。</p>
      </div>
      <h2 class="border-bottom fs-title pb-3 fw-bold mt-3">訂單資訊</h2>

      <div class="d-flex flex-wrap text-nowrap">
        <ul class="flex-grow-1 mb-0">
          <li>姓名：{{ orderDetail.user.name }}</li>
          <li>電話：{{ orderDetail.user.tel }}</li>
          <li>地址：{{ orderDetail.user.address }}</li>
          <li>電子信箱：{{ orderDetail.user.email }}</li>
        </ul>
        <ul class="flex-grow-1 mb-0">
          <li>訂單編號：{{ orderDetail.id }}</li>
          <li>訂單日期：{{ timestampToYMD(orderDetail.create_at) }}</li>
          <li>訂單金額：{{ orderDetail.total.toLocaleString() }}</li>
          <li>備註：{{ orderDetail.message }}</li>
        </ul>
      </div>

      <h2 class="border-bottom fs-title pb-3 mt-5 fw-bold">訂單內容</h2>
      <div class="table-responsive">
        <table class="table table-hover mb-5">
          <thead>
            <tr>
              <th scope="col" class="text-center">排序</th>
              <th scope="col">商品名稱</th>
              <th scope="col" class="text-end">數量</th>
              <th scope="col" class="text-end">單價</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key, index) in orderDetail.products" :key="key">
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ item.product.title }}</td>
              <td class="text-end">{{ item.qty.toLocaleString() }}</td>
              <td class="text-end">{{ item.final_total.toLocaleString() }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { apiGetOrder } from "@/api/api.js";
import loadingStore from "@/stores/loading";
import { ref } from "vue";
import { errorAlert, successAlert } from "@/methods/sweetAlert.js";
import { timestampToYMD } from "@/methods/date.js";

export default {
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const loading = loadingStore();
    const orderDetail = ref(null);
    const getOrderDetail = async () => {
      const orderId = route.params.orderId;
      loading.showLoading();
      try {
        const res = await apiGetOrder(orderId);
        console.log(res);
        if (res.data.success && res.data.order) {
          orderDetail.value = res.data.order;
        } else {
          errorAlert("無此訂單");
          setTimeout(() => {
            router.push("/eStore/home");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        errorAlert("發生錯誤");
        setTimeout(() => {
          router.push("/eStore/home");
        }, 2000);
      } finally {
        loading.hideLoading();
      }
    };
    getOrderDetail();

    return {
      orderDetail,
      timestampToYMD,
    };
  },
};
</script>
<style lang="scss" scoped>
.check {
  width: 100px;
}
ul {
  li {
    list-style: disc;
    margin: 1rem 0;
  }
}
table {
  th,
  td {
    white-space: nowrap;
  }
}
</style>
