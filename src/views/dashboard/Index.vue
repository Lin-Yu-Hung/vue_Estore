<template>
  <div class="d-flex">
    <div class="dashboard-menu" id="dashboard-menu">
      <Menu />
    </div>
    <div class="dashboard-content-layout" id="dashboard-content-layout">
      <DashboardContent @changeMenuStatus="changeMenuStatus" />
    </div>
  </div>
</template>
<script>
import DashboardContent from "@/components/dashboard/DashboardContent.vue";
import Menu from "@/components/dashboard/Menu.vue";
import menuStore from "@/stores/menu";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

export default {
  components: {
    DashboardContent,
    Menu,
  },
  setup() {
    const menu = menuStore();
    const { menuStatus } = storeToRefs(menu);

    const hideMenu = () => {
      const menuElement = document.getElementById("dashboard-menu");
      const content = document.getElementById("dashboard-content-layout");
      const menuList = document.querySelector(".menuList");
      menuElement.style.width = 0;
      content.style.marginLeft = 0;
      content.style.width = "100%";
      menuList.style.display = "none";
      menu.hideMenu();
    };
    const showMenu = () => {
      const content = document.getElementById("dashboard-content-layout");
      const screenWidth = window.outerWidth;
      const menuList = document.querySelector(".menuList");
      content.style.marginLeft = "250px";
      content.style.width = `${screenWidth - 250}px`;
      menuList.style.display = "block";
      if (!menuStatus.value) {
        const menuElement = document.getElementById("dashboard-menu");
        menuElement.style.width = "250px";
        menu.showMenu();
      }
    };

    const changeMenuStatus = () => (menuStatus.value ? hideMenu() : showMenu());

    onMounted(() => {
      window.addEventListener("resize", () => {
        // console.log(window.innerWidth);
        setTimeout(() => {
          let screenWidth = window.innerWidth;
          if (screenWidth > window.screen.width) {
            // 處理平板與手機翻轉時取得寬度錯誤
            screenWidth = window.screen.width;
          }

          if (screenWidth < 992 && menuStatus.value) {
            hideMenu();
          } else if (screenWidth > 992) {
            showMenu();
          }
        }, 200);
      });
    });
    return {
      changeMenuStatus,
    };
  },
};
</script>
