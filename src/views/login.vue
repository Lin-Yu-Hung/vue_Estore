<template>
  <div class="login-layout">
    <img src="@/assets/images/e-store-logo.png" alt="logo" />
    <div class="card container-fluid d-center">
      <h2 class="mb-3 fs-4">登入你的帳號</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">電子郵件</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="user.username"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密碼</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="user.password"
          />
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label fs-small" for="exampleCheck1"
            >保持登入狀態</label
          >
        </div>
        <button
          type="submit"
          class="btn btn-primary w-100"
          @click.prevent="login()"
        >
          登入
        </button>
      </form>
      <hr />
      <p class="text-center fs-small">或者</p>
      <div class="container-fluid">
        <div class="row">
          <button class="btn border d-center col-lg mb-2 mb-lg-0 me-lg-1">
            <img src="@/assets/images/google.png" alt="logo" />Google
          </button>
          <button class="btn border d-center col-lg ms-lg-1">
            <img src="@/assets/images/github.svg" alt="logo" />Github
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { login_api } from "@/api/api";
import { setCookie } from "@/methods/cookie.js";
import loadingStore from "@/stores/loading";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const loading = loadingStore();
    const user = ref({
      username: import.meta.env.VITE_username,
      password: import.meta.env.VITE_password,
    });
    const login = () => {
      loading.showLoading();
      login_api(user.value)
        .then((res) => {
          setCookie("token", res.data.token);
          if (route.query.redirect) {
            router.push(route.query.redirect); // 跳轉先前被踢出來的頁面
          } else {
            router.push("/dashboard/productList");
          }
          loading.hideLoading();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      user,
      login,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-layout {
  width: 100%;
  background-color: #181f2d;
  overflow: auto;
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 992px) {
    justify-content: start;
    padding-top: 15%;
  }

  // LOGO
  img {
    width: 15%;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1400px) {
    img {
      width: 20%;
    }
  }
  @media screen and (max-width: 992px) {
    img {
      width: 35%;
    }
  }
  @media screen and (max-width: 767px) {
    img {
      width: 45%;
    }
  }

  // LoginForm
  .card {
    padding: 5%;
    width: 40%;
    @media screen and (max-width: 992px) {
      width: 65%;
    }
    @media screen and (max-width: 767px) {
      width: 90%;
    }
  }
  button {
    img {
      width: 23px;
      height: 23px;
      margin: 0;
      object-fit: cover;
      margin-right: 0.25rem;
    }
  }
}
</style>
