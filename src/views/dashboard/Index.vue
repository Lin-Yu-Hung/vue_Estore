<template>
  <div class="d-flex">
    <div class="dashboard-menu" id="dashboard-menu">
      <div class="px-2 d-center">
        <img src="@/assets/images/e-store-logo.png" class="menu-logo" alt="" />
      </div>
      <MenuList v-if="menuStatus" />
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
    };
  },
};
</script>
