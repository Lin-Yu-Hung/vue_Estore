<template>
  <div class="vh-100 d-between flex-column">
    <div
      class="container flex-column d-flex align-items-center lg-down-h-100 vh-80 justify-content-lg-center"
    >
      <div
        class="bg-primary d-center mt-2 mt-lg-0 mb-0 mb-lg-5 w-40 rounded-pill lg-down-w-80 mobile-w-100"
      >
        <img
          src="@/assets/images/e-store-logo.png"
          alt="e-store"
          class="logo"
        />
      </div>

      <div class="flex-column-reverse flex-lg-row d-center align-items-center">
        <div class="d-column mt-4 mt-lg-0">
          <h2 class="fs-2 fw-bold text-primary-light text-center text-lg-start">
            查無頁面
          </h2>
          <p class="fs-6 fs-md-bigger fw-bold text-nowrap">
            很抱歉，我們無法找到您要訪問的頁面。
          </p>
          <p class="fs-6 fs-md-title fw-bold">
            也許它已被移動、更名或永久刪除。
          </p>
          <p>請嘗試以下方法</p>
          <ul>
            <li class="text-secondary">檢查您輸入的網址是否正確</li>
            <li class="text-secondary">聯繫我們以報告問題</li>
          </ul>
          <div
            class="d-flex justify-content-center justify-content-lg-start mt-2 mt-md-4"
          >
            <button class="btn btn-primary p-0" style="max-width: max-content">
              <router-link
                to="/eStore/home"
                class="text-white text-underline-hover px-5 py-2 d-block"
                >返回首頁</router-link
              >
            </button>
          </div>
        </div>
        <img
          src="@/assets/images/undraw_faq_re_31cw.svg"
          class="img"
          alt="404"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
};
</script>
<style lang="scss" scoped>
.logo {
  width: 12vw;
  min-width: 150px;
}
.img {
  height: 100%;
  max-width: 90vw;
}

ul {
  li {
    list-style: disc;
  }
}
</style>
