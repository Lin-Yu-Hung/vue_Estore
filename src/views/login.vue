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
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            v-model="rememberAccount"
          />
          <label class="form-check-label fs-small" for="exampleCheck1"
            >記住帳號密碼</label
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
      <div class="d-flex">
        <button
          type="submit"
          class="btn btn-light w-50 border me-1"
          @click.prevent="login(true)"
        >
          訪客登入 (無需帳號密碼)
        </button>
        <router-link to="/eStore/home" class="text-center text-black w-50">
          <button type="submit" class="btn btn-light border ms-1 w-100">
            回首頁
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { login_api } from "@/api/api";
import { setCookie, getCookie } from "@/methods/cookie.js";
import loadingStore from "@/stores/loading";
import { useRoute, useRouter } from "vue-router";
import { errorAlert } from "@/methods/sweetAlert.js";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const loading = loadingStore();
    const rememberAccount = ref(false);
    const userData = getCookie("userData") ? getCookie("userData") : undefined;
    const user = ref({
      username: import.meta.env.VITE_username,
      password: import.meta.env.VITE_password,
    });
    if (userData !== undefined) {
      user.value = JSON.parse(JSON.stringify(userData));
    }
    const login = (isVisitor = false) => {
      setCookie("isVisitor", isVisitor);
      const visitorInfo = {
        username: import.meta.env.VITE_adminusername,
        password: import.meta.env.VITE_adminpassword,
      };
      loading.showLoading();
      login_api(isVisitor ? visitorInfo : user.value) // 如為訪客使用預設值，反之使用input
        .then((res) => {
          if (res.data.success) {
            if (rememberAccount.value && !isVisitor) {
              setCookie("userData", user.value);
            }
            setCookie("token", res.data.token);
            if (route.query.redirect) {
              router.push(route.query.redirect); // 跳轉先前被踢出來的頁面
            } else {
              router.push("/dashboard/productList");
            }
          } else {
            errorAlert("登入失敗", "請檢查帳號或密碼是否正確");
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
      rememberAccount,
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
    &:hover:not(.btn-primary) {
      background-color: rgb(245, 242, 242);
    }
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
