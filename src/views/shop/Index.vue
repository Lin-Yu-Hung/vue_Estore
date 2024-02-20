<template>
  <div class="main-bg">
    <div class="container">
      <div class="main-nav container-fluid rounded-pill bg-primary py-0 shadow">
        <div class="d-flex align-items-center">
          <div class="col-2">
            <img
              class="logo"
              src="@/assets/images/e-store-logo.png"
              alt="logo"
            />
          </div>
          <div class="col">
            <ul class="nav j">
              <li>首頁</li>
              <li>促銷商品</li>
              <li>商品列表</li>
            </ul>
          </div>
          <div class="col">
            <div
              class="input-group d-center align-items-center rounded-pill border bg-white"
            >
              <input
                type="text"
                class="form-control rounded-pill border-0 ps-3"
                placeholder="輸入商品關鍵字"
              />
              <font-awesome-icon class="px-3" icon="fa-search" role="button" />
            </div>
          </div>
          <div class="col-3 d-end align-items-center pe-5">
            <DropDownMenu>
              <template v-slot:header>
                <font-awesome-icon
                  class="fs-5 ms-4 text-white"
                  icon="fa-user"
                  role="button"
                />
              </template>
              <template v-slot:menu>
                <ul class="profile ps-0 py-2 mb-0">
                  <li class="border-bottom px-2 py-1 text-end">個人資料</li>
                  <li class="border-bottom px-2 py-1 text-end">登出</li>
                </ul>
              </template>
            </DropDownMenu>
            <DropDownMenu>
              <template v-slot:header>
                <div class="position-relative pe-2">
                  <font-awesome-icon
                    class="fs-5 ms-4 text-white"
                    icon="fa-cart-shopping"
                    role="button"
                  ></font-awesome-icon>
                  <span
                    class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    20
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
              </template>
              <template v-slot:menu>
                <ul class="profile ps-0 py-2 mb-0">
                  <li class="border-bottom px-2 py-1 text-end">個人資料</li>
                  <li class="border-bottom px-2 py-1 text-end">登出</li>
                </ul>
              </template>
            </DropDownMenu>

            <!-- <span class="text-white fw-bold ms-4"
            >$ {{ (1000).toLocaleString() }}</span
          > -->
          </div>
        </div>
      </div>
      <div class="main-text">
        <p>TIMEPIECESTHAT</p>
        <p>MAKE A STATEMENT UP</p>
        <p>TO 40 % OFF</p>
      </div>
      <div class="promotion-products card py-2 mb-5">
        <div class="container-fluid">
          <div class="row g-3">
            <div class="col" v-for="(item, index) in 5" :key="index">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <img
                    src="@/assets/images/e-store-logo.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDownMenu from "@/components/shared/DropDownMenu.vue";
export default {
  components: { DropDownMenu },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
}
.main-bg {
  object-fit: cover;
  background-image: url("D:/作品/vue_Estore/src/assets/images/bg-2.jpg");
  background-size: cover;
  height: 70vh;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    opacity: 0.5;
    z-index: 1;
  }
}
.container {
  position: relative;
  height: 100%;
  z-index: 3;
  .main-nav {
    // position: sticky;
    // top: 0;
    margin-top: -1px;
    padding: 0.25rem 2rem;
    .logo {
      width: 150px;
    }
    .nav {
      display: flex;
      li {
        color: white;
        padding: 0 1rem;
      }
    }
    .badge {
      top: -4px;
    }
    .profile {
      li {
        white-space: nowrap;
        &:hover {
          background-color: rgb(245, 242, 242);
        }
      }
    }
  }
  .main-text {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    color: white;
    height: 65%;
    font-size: 2rem;
  }
  .promotion-products {
    min-height: 30vh;
  }
}
</style>
