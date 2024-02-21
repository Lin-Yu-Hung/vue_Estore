<template>
  <div class="main-bg">
    <div class="main-nav container rounded-pill bg-primary py-0 shadow">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col col-lg-2 d-flex align-items-center">
            <font-awesome-icon
              class="fs-5 text-white me-3 lg-up-hide"
              icon="fa-bars"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            />
            <div
              class="offcanvas offcanvas-start text-bg-dark"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <img
                  class="logo"
                  src="@/assets/images/e-store-logo.png"
                  alt="logo"
                />
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li>
                        <a class="dropdown-item" href="#">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <img
              class="logo"
              src="@/assets/images/e-store-logo.png"
              alt="logo"
            />
          </div>
          <div class="col-4 lg-down-hide">
            <ul class="nav">
              <li>首頁</li>
              <li>促銷商品</li>
              <li>商品列表</li>
            </ul>
          </div>
          <div class="col mobile-hide">
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
          <div class="col col-md-3 d-end align-items-center pe-md-5">
            <DropDownMenu>
              <template v-slot:header>
                <font-awesome-icon
                  class="fs-5 ms-3 ms-md-4 text-white"
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
                    class="fs-5 ms-3 ms-md-4 text-white"
                    icon="fa-cart-shopping"
                    role="button"
                  ></font-awesome-icon>
                  <span
                    class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    20
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
          </div>
        </div>
      </div>
    </div>
    <div class="container test">
      <div class="main-ad">
        <div class="d-column align-items-center align-items-lg-start my-3">
          <p class="fs-2 fw-bold text-center text-lg-start">限時優惠！</p>
          <p class="fs-5 fs-sm-4">3C產品低至6折，最高立減4000元！</p>
          <button
            class="btn btn-primary rounded-pill w-50 py-2 border-white fw-bold"
          >
            立即查看
          </button>
        </div>
        <div class="today-promotion">
          <h2 class="mb-3 fs-3 d-flex align-items-center fw-bold">
            <img class="icon me-1" src="@/assets/icon/fire.png" alt="fire" />
            今日促銷
          </h2>

          <div class="card">
            <div class="product-info border-end pe-3">
              <p>Smartphone 6S 32GB LTE</p>
              <img
                src="@/assets/images/GoldPhone-1-300x300.webp"
                alt="Smartphone"
              />

              <div class="d-between align-items-center">
                <div class="d-column">
                  <span
                    class="fs-small text-decoration-line-through text-secondary"
                    >$ {{ (19999).toLocaleString() }}</span
                  >
                  <span class="fs-5 text-danger"
                    >$ {{ (14999).toLocaleString() }}</span
                  >
                </div>
                <font-awesome-icon
                  class="text-white border rounded-pill p-2 fs-6"
                  icon="fa-cart-arrow-down"
                  role="button"
                ></font-awesome-icon>
              </div>
            </div>
            <div class="product-info ps-3">
              <p>Game Console Controller</p>
              <img
                src="@/assets/images/consal.webp"
                alt="Game Console Controller"
              />
              <div class="d-between align-items-center">
                <div class="d-column">
                  <span
                    class="fs-small text-decoration-line-through text-secondary"
                    >$ {{ (2500).toLocaleString() }}</span
                  >
                  <span class="fs-5 text-danger"
                    >$ {{ (2000).toLocaleString() }}</span
                  >
                </div>

                <font-awesome-icon
                  class="text-white border rounded-pill p-2 fs-6"
                  icon="fa-cart-arrow-down"
                  role="button"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border p-3 rounded bg-white shadow">
        <swiper
          class="h-100"
          :slidesPerView="2"
          :spaceBetween="20"
          :freeMode="true"
          :navigation="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '576': {
              slidesPerView: 3,
            },
            '768': {
              slidesPerView: 4,
            },
            '1200': {
              slidesPerView: 5,
            },
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(item, index) in 20" :key="index"
            ><div class="card">
              <div class="card-body">
                <img
                  src="@/assets/images/e-store-logo.png"
                  class="card-img-top"
                  alt="..."
                />
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div></swiper-slide
          >
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import DropDownMenu from "@/components/shared/DropDownMenu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
export default {
  components: { DropDownMenu, Swiper, SwiperSlide },
  setup(props) {
    return {
      modules: [FreeMode, Autoplay, Navigation],
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
}
.main-bg {
  object-fit: cover;
  background-image: url("D:/作品/vue_Estore/src/assets/images/bg-3.jpg");
  background-size: cover;
  height: 80svh;
  @media screen and (max-height: 772px) {
    height: 95svh;
  }
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
.main-nav {
  // position: sticky;
  // top: 0;
  position: relative;
  z-index: 4;
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
  @media screen and (max-width: 768px) {
    padding: 0.25rem 1.5rem;
  }
  @media screen and (max-width: 576px) {
    padding: 1rem;
    border-radius: 0% !important;
    .badge {
      top: -2px;
    }
  }
}
.test {
  position: relative;
  height: 100%;
  z-index: 3;
  .main-ad {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 80%;
    font-size: 2rem;
    @media screen and (max-width: 992px) {
      flex-direction: column;
      justify-content: center;
    }

    .today-promotion {
      .card {
        background-color: #1b1a1a;
        border: 1px solid #413e3e;
        padding: 1rem;
        flex-direction: row;
        .product-info {
          p {
            font-size: 1rem;
          }
          img {
            width: 176px;
            height: 176px;
          }
          .d-between {
            width: 100%;
          }
        }
        @media screen and (max-width: 576px) {
          padding: 0.5rem;
          .product-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
              text-align: center;
            }
            img {
              width: 110px;
              height: 110px;
            }
          }
        }
      }
    }
  }
}
</style>
