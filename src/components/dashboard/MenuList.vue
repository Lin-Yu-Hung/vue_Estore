<template>
  <slot name="menu"></slot>
</template>
<script>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { bsCollapse } from "@/methods/bootstrap.js";

export default {
  setup() {
    const route = useRoute();
    const collapseMap = {};
    const preCollapse = ref(null);
    watch(
      () => route.path,
      (value) => {
        setActivePage();
      }
    );

    const setOtherCollapse = (status, targetId = null) => {
      if (targetId) {
        for (const key in collapseMap) {
          if (key !== targetId) {
            // 操作除了自身外的collapse
            collapseMap[key][status]();
          }
        }
      } else {
        for (const key in collapseMap) {
          // 操作所有collapse
          collapseMap[key][status]();
        }
      }
    };
    const setActivePage = async () => {
      // 尋找active頁面
      await nextTick();
      const activeElement = document.querySelector(".router-link-active");
      const liElement = activeElement.parentElement; // li元素
      const removeDropdownStatus = (array) => {
        // 移除所有dorpDown狀態
        array.forEach((el) => {
          el.classList.remove("show");
          el.classList.remove("active");
        });
      };
      if (liElement.classList.contains("collapse-item")) {
        const liParentId = liElement.getAttribute("parentId");
        if (preCollapse.value !== liParentId) {
          preCollapse.value = liParentId;
          // 選擇了其他下拉群組
          const dropdownTitle = document.querySelectorAll(
            ".dropdown-title:not(.show)"
          );
          removeDropdownStatus(dropdownTitle);
          const parentCollapse = document.querySelector(
            // 透過parentId取得最上層的collapse元素
            `[aria-controls=${liParentId}]`
          );
          setOtherCollapse("hide", liParentId);
          // 添加顯示樣式
          await nextTick();
          setTimeout(() => {
            parentCollapse.classList.add("active");
            parentCollapse.classList.add("show");
            collapseMap[liParentId].show();
          }, 100);
        }
      } else {
        const dropdownTitle = document.querySelectorAll(".dropdown-title");
        removeDropdownStatus(dropdownTitle);
        setOtherCollapse("hide");
        preCollapse.value = null;
      }
    };

    onMounted(() => {
      const allCollapsed = document.querySelectorAll(".collapse");
      allCollapsed.forEach((collapse) => {
        collapseMap[collapse.id] = bsCollapse(collapse.id);
      });
      setActivePage();
    });
  },
};
</script>
