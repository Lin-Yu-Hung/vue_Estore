<template>
  <div class="d-flex w-100">
    <div class="dashboard-menu" id="dashboard-menu"></div>
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
export default {
  components: {
    DashboardContent,
  },
  setup() {
    const menu = menuStore();
    const { menuStatus } = storeToRefs(menu);

    const changeMenuStatus = () => {
      const menuElement = document.getElementById("dashboard-menu");
      const content = document.getElementById("dashboard-content-layout");
      if (menuStatus.value) {
        const screenWidth = window.innerWidth;
        menuElement.style.width = "250px";
        content.style.marginLeft = "250px";
        content.style.width = `${screenWidth - 250}px`;
      } else {
        hideMenu();
      }
    };
    const hideMenu = () => {
      const menuElement = document.getElementById("dashboard-menu");
      const content = document.getElementById("dashboard-content-layout");
      menuElement.style.width = 0;
      content.style.marginLeft = 0;
      content.style.width = "100%";
      menu.hideMenu();
    };
    onMounted(() => {
      window.addEventListener("resize", () => {
        let screenWidth = window.innerWidth;
        if (screenWidth > window.screen.width) {
          screenWidth = window.screen.width;
        }
        if (screenWidth < 992) {
          hideMenu();
        } else {
          const content = document.getElementById("dashboard-content-layout");
          if (menuStatus.value) {
            // 顯示Menu列表
            content.style.width = `${screenWidth - 250}px`;
          } else {
            content.style.width = "100%";
          }
        }
      });
    });
    return {
      changeMenuStatus,
    };
  },
};
</script>
