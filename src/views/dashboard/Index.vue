<template>
  <div class="d-flex">
    <div class="dashboard-menu" id="dashboard-menu">
      <div class="px-2 d-center">
        <img src="@/assets/images/e-store-logo.png" class="menu-logo" alt="" />
      </div>
      <MenuList v-if="menuStatus">
        <template v-slot:menu>
          <ul class="menuList">
            <li>
              <router-link class="menu-link" to="home"
                ><font-awesome-icon
                  class=""
                  icon="fa-home"
                  role="button"
                />首頁</router-link
              >
            </li>
            <li class="dropdown-list">
              <div
                class="dropdown-title"
                @click="toggleStatus"
                data-bs-toggle="collapse"
                data-bs-target="#productSetting"
                aria-expanded="false"
                aria-controls="productSetting"
              >
                <span class="pe-none">
                  <font-awesome-icon
                    class=""
                    icon="fa-list"
                    role="button"
                  />產品設定
                </span>
                <font-awesome-icon
                  class="dropdown-arrow pe-none"
                  icon="fa-chevron-right"
                />
              </div>
              <div class="collapse multi-collapse" id="productSetting">
                <ul>
                  <li class="collapse-item" parentId="productSetting">
                    <router-link class="menu-link" to="setProduct"
                      >建立商品</router-link
                    >
                  </li>
                  <li class="collapse-item" parentId="productSetting">
                    <router-link class="menu-link" to="editProduct"
                      >修改商品</router-link
                    >
                  </li>
                  <li class="collapse-item" parentId="productSetting">
                    <router-link class="menu-link" to="productList"
                      >商品列表</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>

            <li class="dropdown-list">
              <div
                class="dropdown-title"
                @click="toggleStatus"
                data-bs-toggle="collapse"
                data-bs-target="#orderManage"
                aria-expanded="false"
                aria-controls="orderManage"
              >
                <span class="pe-none">
                  <font-awesome-icon
                    class="pe-1"
                    icon="fa-file-lines"
                    role="button"
                  />訂單管理
                </span>
                <font-awesome-icon
                  class="dropdown-arrow pe-none"
                  icon="fa-chevron-right"
                />
              </div>
              <div class="collapse multi-collapse" id="orderManage">
                <ul>
                  <li class="collapse-item" parentId="orderManage">
                    <router-link class="menu-link" to="orderList"
                      >訂單列表</router-link
                    >
                  </li>
                  <li class="collapse-item" parentId="orderManage">
                    <router-link class="menu-link" to="coupon"
                      >設定優惠券</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </template>
      </MenuList>
    </div>
    <div class="dashboard-content-layout" id="dashboard-content-layout">
      <DashboardContent @changeMenuStatus="changeMenuStatus" />
    </div>
  </div>
</template>
<script>
import DashboardContent from "@/components/dashboard/DashboardContent.vue";
import menuStore from "@/stores/menu";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import MenuList from "@/components/dashboard/MenuList.vue";
import { toggleStatus } from "@/methods/util.js";

export default {
  components: {
    DashboardContent,
    MenuList,
  },
  setup() {
    const menu = menuStore();
    const { menuStatus } = storeToRefs(menu);
    if (window.innerWidth < 992) {
      menu.hideMenu();
    } else {
      menu.showMenu();
    }
    const resetMenu = (status) => {
      const content = document.getElementById("dashboard-content-layout");
      if (status === "show") {
        const screenWidth = window.outerWidth;
        content.style.marginLeft = "250px";
        content.style.width = `${screenWidth - 250}px`;
        if (!menuStatus.value) {
          const menuElement = document.getElementById("dashboard-menu");
          menuElement.style.width = "250px";
          menu.showMenu();
        }
      } else {
        const menuElement = document.getElementById("dashboard-menu");
        menuElement.style.width = 0;
        content.style.marginLeft = 0;
        content.style.width = "100%";
        menu.hideMenu();
      }
    };

    const setMenu = () => {
      let screenWidth = window.innerWidth;
      if (screenWidth > window.screen.width) {
        // 處理平板與手機翻轉時取得寬度錯誤
        screenWidth = window.screen.width;
      }
      if (screenWidth < 992 && menuStatus.value) {
        resetMenu("hide");
      } else if (screenWidth > 992) {
        resetMenu("show");
      }
    };

    const changeMenuStatus = () =>
      menuStatus.value ? resetMenu("hide") : resetMenu("show");

    onMounted(() => {
      window.addEventListener("resize", () => {
        setTimeout(() => {
          setMenu();
        }, 200);
      });
    });
    return {
      changeMenuStatus,
      menuStatus,
      toggleStatus,
    };
  },
};
</script>
<style lang="scss" scoped></style>
