<template>
  <div class="container mt-5">
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
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">記住我</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="login()">
        送出
      </button>
    </form>
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
          console.log("push");
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
