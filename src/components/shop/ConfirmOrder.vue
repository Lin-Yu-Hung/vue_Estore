<template>
  <div class="table-responsive shadow my-3 card">
    <table class="table table-hover mt-2">
      <thead>
        <tr>
          <th scope="col">商品圖片</th>
          <th scope="col">商品名稱</th>
          <th scope="col">數量</th>
          <th scope="col">單價</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.info.id">
          <td>
            <img
              :src="item.info.imageUrl"
              :alt="item.info.title"
              :title="item.info.title"
            />
          </td>
          <td>{{ item.info.title }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.info.price.toLocaleString() }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="card shadow p-3 mb-3">
    <Form v-slot="{ errors, meta }">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg border-end">
            <h2 class="fs-title border-bottom pb-2 mb-3">配送資訊</h2>
            <div class="mb-2">
              <label for="name" class="form-label">姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                rules="required"
                class="form-control form-control-sm"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                v-model="data.user.name"
              />
              <ErrorMessage class="text-danger invalid-feedback" name="姓名" />
            </div>

            <div class="mb-2">
              <label for="tel" class="form-label">電話</label>
              <Field
                id="tel"
                name="電話"
                type="number"
                :rules="{ regex: /^[0-9]+$/, required: true, max: 10 }"
                class="form-control form-control-sm"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                v-model="data.user.tel"
              />
              <ErrorMessage class="text-danger invalid-feedback" name="電話" />
            </div>
            <div class="mb-2">
              <label for="email" class="form-label">電子信箱</label>
              <Field
                id="email"
                name="電子信箱"
                type="text"
                :rules="{ email: true, required: true }"
                class="form-control form-control-sm"
                :class="{ 'is-invalid': errors['電子信箱'] }"
                placeholder="請輸入電子信箱"
                v-model="data.user.email"
              />
              <ErrorMessage
                class="text-danger invalid-feedback"
                name="電子信箱"
              />
            </div>
            <div class="mb-2">
              <label for="address" class="form-label">地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                rules="required"
                class="form-control form-control-sm"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                v-model="data.user.address"
              />
              <ErrorMessage class="text-danger invalid-feedback" name="地址" />
            </div>
            <div class="mb-2">
              <label for="comment" class="form-label">備註</label>
              <textarea
                class="form-control form-control-sm"
                id="comment"
                rows="3"
                placeholder="請輸入備註"
                v-model="data.message"
              ></textarea>
            </div>
          </div>
          <div class="col-lg d-column">
            <h2 class="fs-title border-bottom pb-2 mb-3 mt-2 mt-lg-0">
              付款資訊
            </h2>
            <div class="d-column flex-grow-1">
              <div class="d-column align-items-end">
                <div class="d-between w-40 mobile-w-100 text-nowrap mb-2">
                  <span class="fs-6 text-secondary"> 小記 </span>
                  <span class="fs-6 text-secondary">
                    $ {{ cart.cartAmount.toLocaleString() }}
                  </span>
                </div>

                <div
                  class="d-between align-items-center w-40 mobile-w-100 mb-2"
                  v-if="availableCoupon"
                >
                  <span class="fs-6 text-secondary text-nowrap"> 優惠券 </span>
                  <div
                    class="d-flex align-items-center fs-6 text-secondary border rounded ps-2 pe-1 py-1 mb-1"
                  >
                    <font-awesome-icon icon="fa-ticket" class="me-3" />
                    {{ selectedCoupon.code }}
                  </div>
                </div>

                <div class="d-between w-40 mobile-w-100 text-nowrap mb-2">
                  <span class="fs-6 text-secondary"> 折扣 </span>
                  <span class="fs-6 text-secondary">
                    $
                    {{
                      availableCoupon
                        ? (
                            cart.cartAmount -
                            cart.cartAmount * (selectedCoupon.percent / 100)
                          ).toLocaleString()
                        : 0
                    }}
                  </span>
                </div>
                <hr class="w-100 my-2" />
                <div class="text-nowrap pt-2 mt-2 d-between w-40 mobile-w-100">
                  <span class="fs-4 mb-1 me-2"> 總金額 </span>
                  <span class="fs-4 mb-1">
                    $
                    {{
                      availableCoupon
                        ? (
                            cart.cartAmount *
                            (selectedCoupon.percent / 100)
                          ).toLocaleString()
                        : cart.cartAmount.toLocaleString()
                    }}
                  </span>
                </div>
              </div>

              <div
                class="d-column flex-grow-1 justify-content-center mt-3 mt-md-0"
              >
                <h2 class="fs-title border-bottom pb-2 mb-3">付款方式</h2>
                <button
                  type="button"
                  class="btn border btn-hover mb-3 py-2"
                  @click="handlePayment('linePay', meta.valid)"
                >
                  <img
                    src="@/assets/images/LINE-Pay(h)_W74_n.png"
                    alt="LINE-Pay"
                  />
                </button>
                <button
                  class="btn btn-primary py-2"
                  type="button"
                  @click="handlePayment('cash', meta.valid)"
                >
                  <font-awesome-icon icon="fa-coins" />現金支付
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></Form
    >
  </div>
</template>
<script>
import { sendLinePayReq } from "@/api/api.js";
import { errorAlert, successAlert } from "@/methods/sweetAlert.js";
import loadingStore from "@/stores/loading";
import cartStore from "@/stores/shop/cart.js";
import pendingOrderStore from "@/stores/shop/pendingOrder.js";
import { Field, Form, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { apiCreateCartItem, apiApplyCoupon } from "@/api/api.js";
import { useRouter } from "vue-router";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(props) {
    const data = ref({
      user: {
        name: "測試人員",
        email: "zxcv96197@gmail.com",
        tel: "0972018771",
        address: "testAddress",
      },
      message: "測試備註",
    });
    const loading = loadingStore();
    const router = useRouter();
    const cart = cartStore();
    const { cartItems } = cart;
    const pendingOrder = pendingOrderStore();
    const { availableCoupon, selectedCoupon } = pendingOrder.info;
    pendingOrder.initInfo();

    const linePay = async () => {
      const today = new Date();
      const orderId = `${today.getFullYear()}${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${today
        .getDay()
        .toString()
        .padStart(2, "0")}${today.getTime()}`;
      const generatePackages = () => {
        // 分類商品
        const categorizedItems = cartItems.reduce((acc, product) => {
          if (!acc[product.info.category]) {
            acc[product.info.category] = [];
          }
          acc[product.info.category].push(product);
          return acc;
        }, {});

        const calculateAmount = (array) => {
          // 計算package金額
          return array.reduce((acc, item) => {
            // 根據是否有使用優惠券回傳計算結果
            acc += availableCoupon
              ? item.info.price * item.count * (selectedCoupon.percent / 100)
              : item.info.price * item.count;
            return acc;
          }, 0);
        };

        const generateProducts = (array) => {
          return array.map((product) => {
            return {
              id: product.info.id,
              name: product.info.title,
              imageUrl: product.info.imageUrl,
              quantity: product.count,
              // 根據是否有使用優惠券回傳計算結果
              price: availableCoupon
                ? product.info.price * (selectedCoupon.percent / 100)
                : product.info.price,
            };
          });
        };
        const result = [];
        for (const key in categorizedItems) {
          result.push({
            id: `package${key}`,
            amount: calculateAmount(categorizedItems[key]),
            name: key,
            products: generateProducts(categorizedItems[key]),
          });
        }
        return result;
      };

      const params = {
        amount: availableCoupon
          ? Math.ceil(cart.cartAmount * (selectedCoupon.percent / 100))
          : cart.cartAmount,
        currency: "TWD",
        orderId: orderId,
        packages: generatePackages(),
        redirectUrls: {
          confirmUrl: `${import.meta.env.VITE_DOMAIN}eStore/confirmPay`,
          cancelUrl: `${import.meta.env.VITE_DOMAIN}eStore/confirmPay`,
        },
      };
      console.log("🚀  params:", params);
      try {
        loading.showLoading();
        const res = await sendLinePayReq(params);
        if (res.status === 200) {
          window.location.href = res.data.info.paymentUrl.web;
        }
      } catch (error) {
        console.log(error);
        errorAlert("發生錯誤!");
      } finally {
        loading.hideLoading();
      }
    };
    const handlePayment = async (type, valid) => {
      if (!valid) return;
      loading.showLoading();
      try {
        // 因六角提供的建立訂單API必須要先透過API建立購物車才可建立訂單
        const allRequest = cartItems.map((item) => {
          return apiCreateCartItem({
            data: {
              product_id: item.info.id,
              qty: item.count,
            },
          });
        });
        const res = await Promise.all(allRequest);
        const result = res.every((item) => item.data.success); // 所有加入購物車api狀態
        if (!result) {
          loading.hideLoading();
          return;
        } else if (availableCoupon) {
          // 套用優惠券api
          const res = await apiApplyCoupon({
            data: {
              code: selectedCoupon.code,
            },
          });
          console.log(res);
          if (!res.data.success) {
            loading.hideLoading();
            return;
          }
        }
      } catch (error) {
        loading.hideLoading();
        return;
      }

      if (type === "linePay") {
        await linePay();
      } else {
        const result = await pendingOrder.createOrder({ data: data.value });
        if (result) {
          cart.clearCart();
          router.push("/eStore/userOrder");
        }
        loading.hideLoading();
      }
    };
    return {
      handlePayment,
      cartItems,
      cart,
      availableCoupon,
      selectedCoupon,
      data,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-responsive {
  max-height: 50svh;

  table {
    tr {
      th,
      td {
        vertical-align: middle;
      }
      th:first-child,
      td:first-child {
        text-align: center;
        img {
          width: 100px;
          height: 100px;
        }
      }

      th:nth-child(n + 3),
      td:nth-child(n + 3) {
        white-space: nowrap;
        text-align: end;
      }
    }
  }
}
</style>
